import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Camera } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function ImageUploader({ onFileSelect, error }) {
    const fileInputRef = useRef(null);

    const convertImageToJPEG = (file) => {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                
                canvas.toBlob((blob) => {
                    if (blob) {
                        const convertedFile = new File([blob], 
                            file.name.replace(/\.(jfif|jpe|webp)$/i, '.jpg'), 
                            { type: 'image/jpeg' }
                        );
                        resolve(convertedFile);
                    } else {
                        reject(new Error('Failed to convert image'));
                    }
                }, 'image/jpeg', 0.9);
            };
            
            img.onerror = () => reject(new Error('Failed to load image'));
            img.src = URL.createObjectURL(file);
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            // Check if it's an image file
            if (!file.type.startsWith('image/')) {
                onFileSelect(null, 'Please select an image file.');
                return;
            }

            let processedFile = file;
            
            // Convert unsupported formats to JPEG
            const fileName = file.name.toLowerCase();
            if (fileName.endsWith('.jfif') || fileName.endsWith('.jpe') || fileName.endsWith('.webp') || file.type === 'image/webp') {
                try {
                    processedFile = await convertImageToJPEG(file);
                } catch (conversionError) {
                    onFileSelect(null, 'Failed to process the image. Please try a different file or convert it to JPG/PNG first.');
                    return;
                }
            }

            // Final validation for supported types
            const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!supportedTypes.includes(processedFile.type)) {
                onFileSelect(null, 'Please upload a JPG, JPEG, or PNG image only.');
                return;
            }

            onFileSelect(processedFile);
            
        } catch (error) {
            console.error('File processing error:', error);
            onFileSelect(null, 'Error processing the image. Please try again.');
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg"
            >
                <div 
                    onClick={handleButtonClick}
                    className="relative w-full aspect-square bg-[#1A1A1A] border-2 border-dashed border-gray-700 rounded-3xl flex flex-col items-center justify-center p-8 cursor-pointer hover:border-[#00FF7F] hover:bg-gray-800/20 transition-all duration-300"
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                    />
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                    >
                        <UploadCloud className="w-20 h-20 text-gray-600 mb-4 transition-colors duration-300 group-hover:text-[#00FF7F]" />
                    </motion.div>
                    <h2 className="text-2xl font-semibold text-white">Upload Plant Image</h2>
                    <p className="text-gray-500 mt-2">Tap here to browse your files or use your camera.</p>
                    <p className="text-xs text-gray-600 mt-2">All image formats supported (auto-converted if needed)</p>
                </div>
                
                 {error && (
                    <Alert variant="destructive" className="mt-6 bg-red-900/50 border-red-500/50 text-red-300">
                        <AlertCircle className="h-4 w-4 !text-red-300" />
                        <AlertTitle>Upload Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
            </motion.div>
        </div>
    );
}