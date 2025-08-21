import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  ArrowLeft, 
  Play, 
  Pause,
  Camera, 
  CheckCircle, 
  BookOpen,
  Leaf,
  ArrowRight,
  Target,
  Zap,
  Shield
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";

interface DemoPageProps {
  onBackToLanding: () => void;
  onTryForFree: () => void;
}

const demoFeatures = [
  {
    icon: Camera,
    titleKey: 'demo.instantId',
    descriptionKey: 'demo.instantIdDesc',
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Target,
    titleKey: 'demo.accurateResults',
    descriptionKey: 'demo.accurateResultsDesc',
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: BookOpen,
    titleKey: 'demo.careGuide',
    descriptionKey: 'demo.careGuideDesc',
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

export function DemoPage({ onBackToLanding, onTryForFree }: DemoPageProps) {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoComplete, setVideoComplete] = useState(false);

  const handlePlayDemo = () => {
    setIsPlaying(true);
    // Simulate video playing
    setTimeout(() => {
      setIsPlaying(false);
      setVideoComplete(true);
    }, 8000);
  };

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
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {t('hero.watchDemo')}
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('demo.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {t('demo.subtitle')}
            </p>
          </div>

          {/* Demo Video Section */}
          <Card className="border-0 shadow-2xl overflow-hidden mb-16">
            <div className="relative aspect-video bg-gradient-to-br from-green-500 to-blue-600">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80"
                alt="Plant identification demo"
                className="w-full h-full object-cover"
              />
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                {!isPlaying && !videoComplete ? (
                  <Button
                    size="lg"
                    onClick={handlePlayDemo}
                    className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    {t('demo.watchVideo')}
                  </Button>
                ) : isPlaying ? (
                  <div className="bg-white/90 rounded-lg p-6 text-center">
                    <div className="animate-pulse mb-4">
                      <Zap className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    </div>
                    <p className="text-gray-900 font-medium">{t('demo.videoPlaying')}</p>
                    <div className="w-32 h-2 bg-gray-200 rounded-full mx-auto mt-4">
                      <div className="h-full bg-green-600 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 rounded-lg p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('demo.videoComplete')}
                    </h3>
                    <Button 
                      onClick={onTryForFree}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {t('demo.tryNow')}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Features Demonstration */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('demo.featuresTitle')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {demoFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">
                      {t(feature.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {t(feature.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interactive Demo Steps */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Experience the Process
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <span className="text-gray-700">{t('howItWorks.step1Desc')}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <span className="text-gray-700">{t('howItWorks.step2Desc')}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <span className="text-gray-700">{t('howItWorks.step3Desc')}</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80"
                    alt="Plant identification process"
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Try It Yourself?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the power of AI plant identification with your own photos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={onTryForFree}
                className="bg-green-600 hover:bg-green-700"
              >
                <Camera className="w-5 h-5 mr-2" />
                {t('demo.tryNow')}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={handlePlayDemo}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Again
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}