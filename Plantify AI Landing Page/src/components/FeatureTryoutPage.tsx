import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { 
  ArrowLeft, 
  Camera, 
  Shield,
  BookOpen,
  UserCheck,
  Calendar,
  Leaf,
  Upload,
  CheckCircle,
  Clock,
  Target,
  Activity,
  Droplets,
  Sun,
  AlertTriangle,
  TrendingUp,
  Star,
  Play
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FeatureTryoutPageProps {
  onBackToFeatures: () => void;
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

export function FeatureTryoutPage({ onBackToFeatures }: FeatureTryoutPageProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("identification");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleFileUpload = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const features = [
    {
      id: "identification",
      title: "Plant Identification",
      icon: Camera,
      color: "bg-green-500",
      description: "Upload a photo and get instant AI-powered plant identification"
    },
    {
      id: "health",
      title: "Plant Health Checkup", 
      icon: Shield,
      color: "bg-red-500",
      description: "Detect diseases, pests, and health issues with AI analysis"
    },
    {
      id: "care",
      title: "Plant Care Guide",
      icon: BookOpen,
      color: "bg-blue-500", 
      description: "Get personalized care instructions based on your plant's needs"
    },
    {
      id: "expert",
      title: "Expert Plant Reading",
      icon: UserCheck,
      color: "bg-purple-500",
      description: "Professional-grade plant analysis and growth recommendations"
    },
    {
      id: "tracking",
      title: "Day-to-Day Tracking",
      icon: Calendar,
      color: "bg-orange-500",
      description: "Monitor your plant's progress and never miss care schedules"
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
              onClick={onBackToFeatures}
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
            Feature Demo
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Try Our AI-Powered Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the full power of Plantify AI with these interactive feature demonstrations. 
              Upload a photo or explore our sample analysis to see what our AI can do.
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

            {/* Identification Tab */}
            <TabsContent value="identification">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Camera className="w-5 h-5 text-green-600" />
                      <span>Upload Plant Photo</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">
                        Drop your plant photo here or click to browse
                      </p>
                      <Button onClick={handleFileUpload} className="bg-green-600 hover:bg-green-700">
                        {isAnalyzing ? (
                          <>
                            <Activity className="w-4 h-4 mr-2 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Camera className="w-4 h-4 mr-2" />
                            Try Demo Photo
                          </>
                        )}
                      </Button>
                    </div>

                    {isAnalyzing && (
                      <div className="mt-6 space-y-4">
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
                    )}
                  </CardContent>
                </Card>

                {showResults && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Identification Results</span>
                        <Badge className="bg-green-100 text-green-800">
                          {mockPlantData.identification.confidence}% Match
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-xl text-green-700">
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

                      <div className="flex items-center space-x-2 text-green-600">
                        <Target className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Confidence: {mockPlantData.identification.confidence}%
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Health Checkup Tab */}
            <TabsContent value="health">
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
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tracking Tab */}
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
                      <div className="p-6 bg-gradient-to-b from-green-500 to-green-600 text-white rounded-lg text-center">
                        <div className="text-3xl font-bold mb-2">{mockPlantData.tracking.careStreak}</div>
                        <div className="text-sm">Day Care Streak</div>
                        <CheckCircle className="w-8 h-8 mx-auto mt-3 opacity-80" />
                      </div>

                      <div className="mt-4 space-y-2">
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
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-6">
              Experience all these features and more with Plantify AI
            </p>
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 mr-4"
            >
              <Play className="w-5 h-5 mr-2" />
              Try For Free
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}