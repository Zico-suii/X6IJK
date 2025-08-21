import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ArrowLeft, 
  Leaf,
  Play,
  ArrowRight,
  Brain,
  Shield,
  Users,
  Award,
  Microscope,
  Smartphone,
  Wifi,
  WifiOff,
  CheckCircle,
  Search,
  BookOpen,
  Layers,
  ScanLine,
  Database
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { HowItWorksSteps } from "./HowItWorksSteps";
import { HowItWorksFAQ } from "./HowItWorksFAQ";
import { technicalSpecs } from "./constants/howItWorksData";

interface HowItWorksPageProps {
  onBackToLanding: () => void;
  onTryForFree: () => void;
}

export function HowItWorksPage({ onBackToLanding, onTryForFree }: HowItWorksPageProps) {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);
  const [selectedTab, setSelectedTab] = useState("process");

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
            {t('nav.howItWorks')}
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('howItWorksPage.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('howItWorksPage.subtitle')}
            </p>
            <Button 
              size="lg"
              onClick={onTryForFree}
              className="bg-green-600 hover:bg-green-700"
            >
              <Play className="w-5 h-5 mr-2" />
              {t('howItWorksPage.tryNow')}
            </Button>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-16">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="process">{t('howItWorksPage.processTab')}</TabsTrigger>
              <TabsTrigger value="technology">{t('howItWorksPage.technologyTab')}</TabsTrigger>
              <TabsTrigger value="features">{t('howItWorksPage.featuresTab')}</TabsTrigger>
              <TabsTrigger value="faq">{t('howItWorksPage.faqTab')}</TabsTrigger>
            </TabsList>

            {/* Process Tab */}
            <TabsContent value="process" className="mt-8">
              <HowItWorksSteps activeStep={activeStep} setActiveStep={setActiveStep} />
            </TabsContent>

            {/* Technology Tab */}
            <TabsContent value="technology" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="w-6 h-6 text-purple-600" />
                      <span>AI & Machine Learning</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Layers className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-medium">Deep Neural Networks</h4>
                        <p className="text-sm text-gray-600">Convolutional neural networks trained on millions of botanical images</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ScanLine className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-medium">Computer Vision</h4>
                        <p className="text-sm text-gray-600">Advanced image processing for feature extraction and pattern recognition</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Database className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-medium">Ensemble Models</h4>
                        <p className="text-sm text-gray-600">Multiple AI models work together for improved accuracy</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-6 h-6 text-green-600" />
                      <span>Quality & Validation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-medium">Expert Validation</h4>
                        <p className="text-sm text-gray-600">Results validated by professional botanists and taxonomists</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-medium">Continuous Learning</h4>
                        <p className="text-sm text-gray-600">Models updated monthly with new species and improved algorithms</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Microscope className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-medium">Scientific Accuracy</h4>
                        <p className="text-sm text-gray-600">Taxonomy aligned with international botanical standards</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Technical Specifications */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {technicalSpecs.map((spec, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <spec.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">{spec.value}</div>
                        <div className="font-medium text-gray-900 mb-1">{spec.feature}</div>
                        <div className="text-sm text-gray-600">{spec.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                      <span>Mobile Optimized</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Camera Integration</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Photo Gallery Access</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Auto-focus & Flash</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Image Enhancement</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Wifi className="w-6 h-6 text-green-600" />
                      <span>Connectivity Options</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4" />
                        <span>Online Mode (Full Features)</span>
                      </span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-2">
                        <WifiOff className="w-4 h-4" />
                        <span>Offline Mode (Basic ID)</span>
                      </span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cloud Sync</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cross-Platform</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0">
                <CardHeader>
                  <CardTitle>Advanced Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">Multi-angle Analysis</h4>
                      <p className="text-sm text-gray-600">Analyze multiple photos for increased accuracy</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">Disease Detection</h4>
                      <p className="text-sm text-gray-600">Identify plant diseases and health issues</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">Care Reminders</h4>
                      <p className="text-sm text-gray-600">Personalized watering and care schedules</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq" className="mt-8">
              <HowItWorksFAQ onTryForFree={onTryForFree} />
            </TabsContent>
          </Tabs>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Identify Any Plant?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Experience the power of AI plant identification. Join millions of users who trust 
              Plantify AI for accurate, instant plant recognition and care guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={onTryForFree}
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Start Identifying Plants
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Download Mobile App
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}