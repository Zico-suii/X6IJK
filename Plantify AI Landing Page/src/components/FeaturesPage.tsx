import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { 
  ArrowLeft, 
  Camera, 
  Brain, 
  Shield,
  Bell,
  Users,
  WifiOff,
  Leaf,
  CheckCircle,
  X,
  Star,
  ArrowRight,
  Play,
  Target,
  Zap,
  Database,
  Globe
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

interface FeaturesPageProps {
  onBackToLanding: () => void;
  onTryForFree: () => void;
  onTryThisFeature: () => void;
}

const mainFeatures = [
  {
    id: "plant-id",
    titleKey: 'featuresPage.plantIdentification',
    subtitle: "AI-Powered Recognition",
    description: "Instantly identify over 17,000 plant species with industry-leading 95% accuracy using advanced computer vision and machine learning.",
    icon: Camera,
    color: "bg-green-500",
    accuracy: 95,
    speed: "2-5 seconds",
    coverage: "17,000+ species"
  },
  {
    id: "care-guide", 
    titleKey: 'featuresPage.personalizedCare',
    subtitle: "Expert Plant Care",
    description: "Get customized care instructions, watering schedules, and growing tips tailored to each plant species and your local climate.",
    icon: Brain,
    color: "bg-blue-500",
    accuracy: 92,
    speed: "Instant",
    coverage: "All identified plants"
  },
  {
    id: "disease-detection",
    titleKey: 'featuresPage.diseaseDetection', 
    subtitle: "Health Monitoring",
    description: "Detect plant diseases, pests, and nutrient deficiencies early with AI analysis and receive targeted treatment recommendations.",
    icon: Shield,
    color: "bg-red-500",
    accuracy: 88,
    speed: "3-8 seconds",
    coverage: "500+ conditions"
  },
  {
    id: "smart-reminders",
    titleKey: 'featuresPage.smartReminders',
    subtitle: "Never Forget Care", 
    description: "Automated watering, fertilizing, and care reminders based on plant needs, weather conditions, and seasonal changes.",
    icon: Bell,
    color: "bg-purple-500",
    accuracy: 90,
    speed: "Real-time",
    coverage: "All your plants"
  },
  {
    id: "community",
    titleKey: 'featuresPage.expertCommunity',
    subtitle: "Connect & Learn",
    description: "Join a global community of plant enthusiasts, botanists, and experts to share knowledge and get personalized advice.",
    icon: Users,
    color: "bg-orange-500", 
    accuracy: 95,
    speed: "24/7 access",
    coverage: "2M+ members"
  },
  {
    id: "offline-mode",
    titleKey: 'featuresPage.offlineMode',
    subtitle: "Works Anywhere",
    description: "Access core plant identification features even without internet connection, perfect for remote locations and field work.",
    icon: WifiOff,
    color: "bg-gray-500",
    accuracy: 85,
    speed: "2-4 seconds", 
    coverage: "1,000 common species"
  }
];

const comparisonFeatures = [
  { feature: "Plant Identification", free: true, premium: true },
  { feature: "Basic Care Instructions", free: true, premium: true },
  { feature: "High-Resolution Photos", free: false, premium: true },
  { feature: "Disease Detection", free: "Limited", premium: true },
  { feature: "Smart Care Reminders", free: false, premium: true },
  { feature: "Expert Community Access", free: "Read-only", premium: true },
  { feature: "Unlimited Identifications", free: false, premium: true },
  { feature: "Offline Mode", free: false, premium: true },
  { feature: "Advanced Plant Profiles", free: false, premium: true },
  { feature: "Personalized Garden Planning", free: false, premium: true },
  { feature: "Priority Support", free: false, premium: true },
  { feature: "Multi-device Sync", free: false, premium: true }
];

const technicalSpecs = [
  { metric: "Identification Accuracy", value: "95%+", description: "Validated against expert botanists" },
  { metric: "Processing Speed", value: "2-5s", description: "Average identification time" },
  { metric: "Plant Species Coverage", value: "17,000+", description: "Growing database" },
  { metric: "Disease Detection", value: "500+", description: "Conditions and treatments" },
  { metric: "Global Users", value: "2M+", description: "Active community members" },
  { metric: "Offline Species", value: "1,000", description: "Most common plants" }
];

export function FeaturesPage({ onBackToLanding, onTryForFree, onTryThisFeature }: FeaturesPageProps) {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState("plant-id");
  const [activeTab, setActiveTab] = useState("overview");

  const currentFeature = mainFeatures.find(f => f.id === selectedFeature) || mainFeatures[0];

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
            {t('nav.features')}
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('featuresPage.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('featuresPage.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                onClick={onTryForFree}
                className="bg-green-600 hover:bg-green-700"
              >
                <Play className="w-5 h-5 mr-2" />
                {t('featuresPage.tryAllFeatures')}
              </Button>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">{t('featuresPage.overviewTab')}</TabsTrigger>
              <TabsTrigger value="detailed">{t('featuresPage.detailedTab')}</TabsTrigger>
              <TabsTrigger value="technical">{t('featuresPage.technicalTab')}</TabsTrigger>
              <TabsTrigger value="comparison">{t('featuresPage.comparisonTab')}</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {mainFeatures.map((feature) => (
                  <Card 
                    key={feature.id}
                    className={`border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                      selectedFeature === feature.id ? 'ring-2 ring-green-500' : ''
                    }`}
                    onClick={() => setSelectedFeature(feature.id)}
                  >
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t(feature.titleKey)}</h3>
                      <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Accuracy</span>
                          <span className="font-medium text-green-600">{feature.accuracy}%</span>
                        </div>
                        <Progress value={feature.accuracy} className="h-1" />
                      </div>

                      <Badge variant="secondary" className="mt-3 text-xs">
                        {feature.subtitle}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Featured Spotlight */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className={`w-16 h-16 ${currentFeature.color} rounded-full flex items-center justify-center mb-6`}>
                        <currentFeature.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="outline" className="mb-2">{currentFeature.subtitle}</Badge>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{t(currentFeature.titleKey)}</h2>
                      <p className="text-xl text-gray-600 mb-6">{currentFeature.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="font-bold text-2xl text-green-600">{currentFeature.accuracy}%</div>
                          <div className="text-sm text-gray-600">Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-2xl text-blue-600">{currentFeature.speed}</div>
                          <div className="text-sm text-gray-600">Speed</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-2xl text-purple-600">{currentFeature.coverage}</div>
                          <div className="text-sm text-gray-600">Coverage</div>
                        </div>
                      </div>

                      <Button 
                        onClick={onTryThisFeature}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Try This Feature
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    <div className="relative">
                      <Card className="border-0 shadow-2xl overflow-hidden">
                        <div className={`h-64 bg-gradient-to-br ${currentFeature.color} flex items-center justify-center`}>
                          <div className="text-center text-white">
                            <currentFeature.icon className="w-24 h-24 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold">{t(currentFeature.titleKey)}</h3>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Feature Highlight</span>
                            <span className="flex items-center space-x-1">
                              <Target className="w-4 h-4" />
                              <span>{currentFeature.accuracy}% Accuracy</span>
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Detailed Tab */}
            <TabsContent value="detailed" className="mt-8">
              <div className="space-y-8">
                {mainFeatures.map((feature) => (
                  <Card key={feature.id} className="border-0 shadow-lg overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-0">
                      <div className={`${feature.color} p-8 text-white flex items-center justify-center`}>
                        <div className="text-center">
                          <feature.icon className="w-16 h-16 mx-auto mb-4" />
                          <h3 className="text-xl font-bold">{t(feature.titleKey)}</h3>
                          <p className="text-sm opacity-90 mt-2">{feature.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2 p-8">
                        <div className="mb-6">
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">{t(feature.titleKey)}</h4>
                          <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-6">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{feature.accuracy}%</div>
                            <div className="text-sm text-gray-600">Accuracy Rate</div>
                          </div>
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{feature.speed}</div>
                            <div className="text-sm text-gray-600">Processing Time</div>
                          </div>
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">{feature.coverage}</div>
                            <div className="text-sm text-gray-600">Coverage</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Core Feature
                          </Badge>
                          <Button 
                            variant="outline" 
                            onClick={onTryThisFeature}
                            className="border-green-200 text-green-700 hover:bg-green-50"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Try Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Technical Tab */}
            <TabsContent value="technical" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technicalSpecs.map((spec, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-1">{spec.value}</div>
                        <div className="font-medium text-gray-900 mb-1">{spec.metric}</div>
                        <div className="text-sm text-gray-600">{spec.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Comparison Tab */}
            <TabsContent value="comparison" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Available Features</CardTitle>
                  <p className="text-center text-gray-600">Explore what Plantify AI has to offer</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <p>Feature comparison coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience All Features?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Start with our free plan and discover why millions of plant lovers trust Plantify AI 
              for accurate identification and expert care guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={onTryForFree}
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                {t('featuresPage.tryAllFeatures')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}