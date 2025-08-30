import React, { useState } from 'react';
import { UploadFile, InvokeLLM } from '@/integrations/Core';
import { Plant } from '@/entities/Plant';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import ImageUploader from '../components/analysis/ImageUploader';
import AnalysisResult from '../components/analysis/AnalysisResult';
import LoadingState from '../components/analysis/LoadingState';

const ANALYSIS_PROMPT = `
You are Green Guardian, an AI-powered botanist. Analyze the provided image of a plant.
1.  **Identify the plant:** Determine its common name and scientific (species) name.
2.  **Describe the plant:** Provide a brief, interesting one-paragraph description of the species.
3.  **Assess its health:** Examine the leaves, stem, and soil for any signs of disease, pests, or nutrient deficiencies. Categorize the overall health as "Healthy", "Needs Attention", or "Diseased".
4.  **Detail your findings:**
    *   If there are issues, list them in the 'issues' array. For each issue, provide a 'description' and a 'confidence' score (0.0 to 1.0).
    *   If the plant is healthy, state that in the 'issues' array, for example: [{"issue": "No issues detected", "description": "The plant appears to be in excellent condition.", "confidence": 0.99}].
5.  **Provide recommendations:** Based on the health assessment, give a list of actionable 'recommendations' to help the user care for the plant. If healthy, provide general wellness tips.
6.  **Offer general care tips:** Provide a list of general 'care_tips' for this specific plant species (e.g., sunlight, water, soil).
`;

export default function AnalysisPage() {
    const [file, setFile] = useState(null);
    const [analysis, setAnalysis] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleFileSelect = (selectedFile, fileError = null) => {
        if (fileError) {
            setError(fileError);
            return;
        }
        
        if (!selectedFile) {
            setError('No file selected.');
            return;
        }

        setFile(selectedFile);
        setError(null);
        handleAnalysis(selectedFile);
    };

    const handleAnalysis = async (imageFile) => {
        setIsLoading(true);
        setAnalysis(null);
        setError(null);

        try {
            // Validate file before upload
            console.log('Processing file:', imageFile.name, imageFile.type, imageFile.size);
            
            if (!imageFile.type.startsWith('image/')) {
                throw new Error('Invalid file type - must be an image');
            }

            if (imageFile.size > 10 * 1024 * 1024) { // 10MB limit
                throw new Error('File too large - please use an image under 10MB');
            }

            // Upload the file first
            const uploadResult = await UploadFile({ file: imageFile });
            console.log('Upload result:', uploadResult);
            
            if (!uploadResult || !uploadResult.file_url) {
                throw new Error('Failed to upload image');
            }

            const { file_url } = uploadResult;
            
            // Get the schema
            const schema = Plant.schema();
            
            // Call the LLM with the image
            const response = await InvokeLLM({
                prompt: ANALYSIS_PROMPT,
                file_urls: [file_url],
                response_json_schema: schema
            });
            
            console.log('AI Response:', response);
            
            if (response && response.common_name && response.species_name && response.health_status) {
                const resultData = { 
                    ...response, 
                    image_url: file_url,
                    // Ensure required fields have defaults
                    health_analysis: response.health_analysis || {
                        issues: [{ 
                            issue: "Analysis completed", 
                            description: "Basic analysis performed successfully", 
                            confidence: 0.8 
                        }],
                        recommendations: response.recommendations || ["Continue regular plant care"]
                    },
                    care_tips: response.care_tips || ["Provide adequate light and water for this plant species"]
                };
                setAnalysis(resultData);
            } else {
                throw new Error("The AI could not properly analyze this image. Please try a clearer photo of the plant.");
            }

        } catch (err) {
            console.error("Analysis error:", err);
            let errorMessage = "Analysis failed. ";
            
            if (err.message.includes('Unsupported file type')) {
                errorMessage = "The image format is not supported by our AI. Please try converting your image to JPG or PNG format first.";
            } else if (err.message.includes('400') || err.message.includes('Bad Request')) {
                errorMessage = "There was an issue with your image. Please try a different photo with good lighting and clear focus on the plant.";
            } else if (err.message.includes('too large')) {
                errorMessage = err.message;
            } else if (err.message.includes('Invalid file type')) {
                errorMessage = "Please select a valid image file.";
            } else if (err.message.includes('upload')) {
                errorMessage = "Failed to upload your image. Please check your internet connection and try again.";
            } else {
                errorMessage += "Please try a different image or check your internet connection.";
            }
            
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        if (!analysis) return;
        try {
            await Plant.create(analysis);
            navigate(createPageUrl('MyGarden'));
        } catch (err) {
            console.error("Failed to save plant:", err);
            setError("Could not save the plant to your garden. Please try again.");
        }
    };

    const handleRetry = () => {
        setFile(null);
        setAnalysis(null);
        setError(null);
        setIsLoading(false);
    };

    if (isLoading) {
        return <LoadingState />;
    }

    if (analysis) {
        return <AnalysisResult analysis={analysis} onSave={handleSave} onRetry={handleRetry} error={error} />;
    }

    return <ImageUploader onFileSelect={handleFileSelect} error={error} />;
}