import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ArrowLeft, 
  Camera, 
  Upload, 
  Leaf, 
  CheckCircle, 
  Droplets, 
  Sun, 
  Thermometer,
  CloudRain,
  Shield,
  BookOpen,
  UserCheck,
  Calendar,
  X,
  Activity,
  Target,
  AlertTriangle,
  TrendingUp,
  Star,
  Clock,
  Play
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";

interface TryForFreePageProps {
  onBackToLanding: () => void;
}

const mockPlantData = {
  identification: {
    name: "Monstera Deliciosa",
    commonName: "Swiss Cheese Plant",
    confidence: 96,
    family: "Araceae",
    characteristics: ["Large fenestrated leaves", "Tropical vine", "Low maintenance"]
  },
  healthCheck: {
    overallHealth: 85,
    issues: [
      { type: "Minor leaf spotting", severity: "low", treatment: "Reduce watering frequency" },
      { type: "Nutrient deficiency", severity: "medium", treatment: "Apply balanced fertilizer" }
    ],
    recommendations: ["Increase drainage", "Monitor humidity levels"]
  },
  careGuide: {
    watering: "Water when top 2 inches of soil are dry",
    light: "Bright, indirect light",
    humidity: "60-80%",
    temperature: "65-85°F (18-29°C)",
    fertilizer: "Monthly during growing season"
  },
  expertReading: {
    maturity: "Young adult",
    growthStage: "Vegetative growth phase",
    expectedSize: "6-8 feet indoors",
    specialNotes: "Excellent specimen with strong root system. Ready for repotting in 6 months.",
    expertTips: ["Consider adding moss pole for support", "Prune aerial roots carefully"]
  },
  tracking: {
    nextWatering: "Tomorrow",
    lastFertilized: "2 weeks ago",
    growthProgress: 75,
    healthTrend: "improving",
    careStreak: 14
  }
};

export function TryForFreePage({ onBackToLanding }: TryForFreePageProps) {
  const { t } = useLanguage();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState("identification");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setIsAnalyzing(true);
        
        // Simulate AI analysis
        setTimeout(() => {
          setIsAnalyzing(false);
          setShowResults(true);
        }, 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDemoAnalysis = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const resetAnalysis = () => {
    setUploadedImage(null);
    setIsAnalyzing(false);
    setShowResults(false);
  };

  const features = [
    {
      id: "identification",
      title: "Plant ID",
      icon: Camera,
      color: "bg-green-500"
    },
    {
      id: "health",
      title: "Health Check", 
      icon: Shield,
      color: "bg-red-500"
    },
    {
      id: "care",
      title: "Care Guide",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      id: "expert",
      title: "Expert Reading",
      icon: UserCheck,
      color: "bg-purple-500"
    },
    {
      id: "tracking",
      title: "Daily Tracking",
      icon: Calendar,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onBackToLanding}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('nav.back')}
            </Button>
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="font-semibold text-gray-900">Plantify AI</span>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {t('hero.tryForFree')}
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Try All AI Features Free
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the full power of Plantify AI with these interactive feature demonstrations. 
              Upload your own photo or try our sample analysis to see what our AI can do.
            </p>
          </div>

          {/* Feature Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="flex flex-col items-center p-3">
                  <feature.icon className="w-5 h-5 mb-1" />
                  <span className="text-xs">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Plant Identification Tab */}
            <TabsContent value="identification">
              {!uploadedImage ? (
                /* Upload Section */
                <Card className="border-2 border-dashed border-gray-300 hover:border-green-500 transition-colors">
                  <CardContent className="p-12 text-center">
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Upload className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Upload Plant Photo for AI Identification
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Take a photo or upload an image of any plant for instant AI-powered identification
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <Button size="lg" className="bg-green-600 hover:bg-green-700">
                          <Upload className="w-5 h-5 mr-2" />
                          Upload Photo
                        </Button>
                      </label>
                      <Button 
                        size="lg" 
                        variant="outline"
                        onClick={handleDemoAnalysis}
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Try Demo Analysis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                /* Analysis/Results Section */
                <div className="space-y-8">
                  {/* Uploaded Image */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                        <img
                          src={uploadedImage}
                          alt="Uploaded plant"
                          className="w-full h-full object-cover"
                        />
                        {isAnalyzing && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="bg-white rounded-lg p-4 text-center">
                              <div className="animate-spin w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-2"></div>
                              <p className="text-gray-900">Analyzing plant...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Analysis Results */}
                  {showResults && (
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Plant Identification */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <span>Plant Identified!</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {mockPlantData.identification.name}
                            </h3>
                            <p className="text-gray-600">
                              {mockPlantData.identification.commonName}
                            </p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Confidence</span>
                              <span className="font-semibold text-green-600">{mockPlantData.identification.confidence}%</span>
                            </div>
                            <Progress value={mockPlantData.identification.confidence} className="h-2" />
                            
                            <div className="flex justify-between">
                              <span className="text-gray-600">Family</span>
                              <span className="font-medium">{mockPlantData.identification.family}</span>
                            </div>
                            
                            <div className="space-y-2">
                              <span className="text-gray-600">Key Characteristics:</span>
                              {mockPlantData.identification.characteristics.map((char, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  <span className="text-sm">{char}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Care Instructions */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Care Instructions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <Droplets className="w-5 h-5 text-blue-600 mt-1" />
                              <div>
                                <h4 className="font-medium text-gray-900">Watering</h4>
                                <p className="text-sm text-gray-600">{mockPlantData.careGuide.watering}</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3">
                              <Sun className="w-5 h-5 text-yellow-600 mt-1" />
                              <div>
                                <h4 className="font-medium text-gray-900">Light</h4>
                                <p className="text-sm text-gray-600">{mockPlantData.careGuide.light}</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3">
                              <Thermometer className="w-5 h-5 text-red-600 mt-1" />
                              <div>
                                <h4 className="font-medium text-gray-900">Temperature</h4>
                                <p className="text-sm text-gray-600">{mockPlantData.careGuide.temperature}</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3">
                              <CloudRain className="w-5 h-5 text-gray-600 mt-1" />
                              <div>
                                <h4 className="font-medium text-gray-900">Humidity</h4>
                                <p className="text-sm text-gray-600">{mockPlantData.careGuide.humidity}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Try Another Button */}
                  {showResults && (
                    <div className="text-center">
                      <Button 
                        size="lg" 
                        onClick={resetAnalysis}
                        className="bg-green-600 hover:bg-green-700 mr-4"
                      >
                        <Camera className="w-5 h-5 mr-2" />
                        Try Another Photo
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        onClick={() => setActiveTab("health")}
                      >
                        Try Health Check
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Demo Analysis for No Upload */}
              {!uploadedImage && (
                <div className="mt-8">
                  {isAnalyzing && (
                    <Card>
                      <CardContent className="p-8">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Activity className="w-4 h-4 animate-spin text-green-600" />
                            <span>Analyzing plant features...</span>
                          </div>
                          <Progress value={33} />
                          <div className="flex items-center space-x-2">
                            <Activity className="w-4 h-4 animate-spin text-green-600" />
                            <span>Comparing with plant database...</span>
                          </div>
                          <Progress value={66} />
                          <div className="flex items-center space-x-2">
                            <Activity className="w-4 h-4 animate-spin text-green-600" />
                            <span>Generating results...</span>
                          </div>
                          <Progress value={90} />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {showResults && !uploadedImage && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>Demo Plant Analysis</span>
                          <Badge className="bg-green-100 text-green-800">
                            {mockPlantData.identification.confidence}% Match
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold text-xl text-green-700 mb-1">
                              {mockPlantData.identification.name}
                            </h3>
                            <p className="text-gray-600">{mockPlantData.identification.commonName}</p>
                            <p className="text-sm text-gray-500">Family: {mockPlantData.identification.family}</p>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-medium">Key Characteristics:</h4>
                            {mockPlantData.identification.characteristics.map((char, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm">{char}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 text-green-600 mt-4">
                          <Target className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            Confidence: {mockPlantData.identification.confidence}%
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </TabsContent>

            {/* Health Checkup Tab */}
            <TabsContent value="health">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-red-600" />
                      <span>Plant Health Analysis</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="text-center p-6 bg-green-50 rounded-lg">
                          <div className="text-3xl font-bold text-green-600 mb-2">
                            {mockPlantData.healthCheck.overallHealth}%
                          </div>
                          <div className="text-sm text-gray-600">Overall Health Score</div>
                          <Progress value={mockPlantData.healthCheck.overallHealth} className="mt-2" />
                        </div>

                        <div>
                          <h4 className="font-medium mb-3">Detected Issues:</h4>
                          {mockPlantData.healthCheck.issues.map((issue, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg mb-2">
                              <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-sm">{issue.type}</div>
                                <div className="text-xs text-gray-600">{issue.treatment}</div>
                                <Badge variant="outline" className="mt-1 text-xs">
                                  {issue.severity} severity
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Recommendations:</h4>
                        {mockPlantData.healthCheck.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-center space-x-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">{rec}</span>
                          </div>
                        ))}

                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <h5 className="font-medium text-blue-900 mb-2">Health Trends</h5>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-blue-700">Health improving over last 2 weeks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button onClick={() => setActiveTab("care")} className="bg-green-600 hover:bg-green-700">
                    View Care Guide
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Care Guide Tab */}
            <TabsContent value="care">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span>Personalized Care Guide</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-medium mb-2">Watering</h4>
                      <p className="text-sm text-gray-600">{mockPlantData.careGuide.watering}</p>
                    </div>

                    <div className="text-center p-6 bg-yellow-50 rounded-lg">
                      <Sun className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                      <h4 className="font-medium mb-2">Light Requirements</h4>
                      <p className="text-sm text-gray-600">{mockPlantData.careGuide.light}</p>
                    </div>

                    <div className="text-center p-6 bg-green-50 rounded-lg">
                      <Activity className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <h4 className="font-medium mb-2">Humidity</h4>
                      <p className="text-sm text-gray-600">{mockPlantData.careGuide.humidity}</p>
                    </div>

                    <div className="text-center p-6 bg-red-50 rounded-lg">
                      <Target className="w-8 h-8 text-red-600 mx-auto mb-3" />
                      <h4 className="font-medium mb-2">Temperature</h4>
                      <p className="text-sm text-gray-600">{mockPlantData.careGuide.temperature}</p>
                    </div>

                    <div className="text-center p-6 bg-purple-50 rounded-lg">
                      <Star className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-medium mb-2">Fertilizer</h4>
                      <p className="text-sm text-gray-600">{mockPlantData.careGuide.fertilizer}</p>
                    </div>

                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <Clock className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                      <h4 className="font-medium mb-2">Care Schedule</h4>
                      <Button size="sm" variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Set Reminders
                      </Button>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <Button onClick={() => setActiveTab("expert")} className="bg-green-600 hover:bg-green-700">
                      Get Expert Reading
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Expert Reading Tab */}
            <TabsContent value="expert">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UserCheck className="w-5 h-5 text-purple-600" />
                    <span>Expert Plant Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-2">Growth Assessment</h4>
                        <div className="space-y-2 text-sm">
                          <div><span className="font-medium">Maturity:</span> {mockPlantData.expertReading.maturity}</div>
                          <div><span className="font-medium">Stage:</span> {mockPlantData.expertReading.growthStage}</div>
                          <div><span className="font-medium">Expected Size:</span> {mockPlantData.expertReading.expectedSize}</div>
                        </div>
                      </div>

                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium mb-2">Professional Notes</h4>
                        <p className="text-sm text-gray-600">{mockPlantData.expertReading.specialNotes}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Expert Tips</h4>
                      {mockPlantData.expertReading.expertTips.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3 mb-3">
                          <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                            {index + 1}
                          </div>
                          <p className="text-sm text-gray-700">{tip}</p>
                        </div>
                      ))}

                      <div className="mt-6 p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-green-800">Expert Approved</span>
                        </div>
                        <p className="text-sm text-green-700">
                          This analysis has been validated by certified botanists in our network.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <Button onClick={() => setActiveTab("tracking")} className="bg-green-600 hover:bg-green-700">
                      Start Daily Tracking
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Daily Tracking Tab */}
            <TabsContent value="tracking">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <span>Plant Care Tracking</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="col-span-2 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg text-center">
                          <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <div className="font-medium">Next Watering</div>
                          <div className="text-sm text-gray-600">{mockPlantData.tracking.nextWatering}</div>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg text-center">
                          <Star className="w-6 h-6 text-green-600 mx-auto mb-2" />
                          <div className="font-medium">Last Fertilized</div>
                          <div className="text-sm text-gray-600">{mockPlantData.tracking.lastFertilized}</div>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-3">Growth Progress</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Current Stage Progress</span>
                            <span>{mockPlantData.tracking.growthProgress}%</span>
                          </div>
                          <Progress value={mockPlantData.tracking.growthProgress} />
                          <p className="text-xs text-gray-600">
                            Your plant is thriving! Growth rate is above average for this species.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <TrendingUp className="w-6 h-6 text-orange-600" />
                          <div>
                            <div className="font-medium">Health Trend</div>
                            <div className="text-sm text-gray-600 capitalize">
                              {mockPlantData.tracking.healthTrend} - Keep up the great work!
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="p-6 bg-gradient-to-b from-green-500 to-green-600 text-white rounded-lg text-center mb-4">
                        <div className="text-3xl font-bold mb-2">{mockPlantData.tracking.careStreak}</div>
                        <div className="text-sm">Day Care Streak</div>
                        <CheckCircle className="w-8 h-8 mx-auto mt-3 opacity-80" />
                      </div>

                      <div className="space-y-2">
                        <Button size="sm" className="w-full" variant="outline">
                          <Calendar className="w-4 h-4 mr-2" />
                          View Full Calendar
                        </Button>
                        <Button size="sm" className="w-full" variant="outline">
                          <Activity className="w-4 h-4 mr-2" />
                          Care History
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <Button onClick={() => setActiveTab("identification")} className="bg-green-600 hover:bg-green-700">
                      Try Another Plant
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mt-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-6">
              Create your free account to save plant analyses, set care reminders, and access our full plant database
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                <Play className="w-5 h-5 mr-2" />
                Create Free Account
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More About Premium
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}