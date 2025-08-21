import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  ArrowLeft, 
  Brain, 
  Database,
  Target,
  Users,
  Leaf,
  ArrowRight,
  Microscope,
  Globe,
  Zap,
  Shield,
  Award,
  Layers
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";

interface LearnMorePageProps {
  onBackToLanding: () => void;
  onTryForFree: () => void;
}

const technologyFeatures = [
  {
    icon: Brain,
    titleKey: 'learnMore.aiTechnology',
    descriptionKey: 'learnMore.aiDesc',
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: Target,
    titleKey: 'learnMore.accuracy',
    descriptionKey: 'learnMore.accuracyDesc',
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Database,
    titleKey: 'learnMore.database',
    descriptionKey: 'learnMore.databaseDesc',
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Users,
    titleKey: 'learnMore.experts',
    descriptionKey: 'learnMore.expertsDesc',
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  }
];

const specs = [
  { label: "Species Coverage", value: "17,000+", icon: Database },
  { label: "Accuracy Rate", value: "95%+", icon: Target },
  { label: "Processing Speed", value: "2-5 sec", icon: Zap },
  { label: "Global Users", value: "2M+", icon: Globe }
];

export function LearnMorePage({ onBackToLanding, onTryForFree }: LearnMorePageProps) {
  const { t } = useLanguage();

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
            {t('nav.learnMore')}
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('learnMore.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('learnMore.subtitle')}
            </p>
            <Button 
              size="lg"
              onClick={onTryForFree}
              className="bg-green-600 hover:bg-green-700"
            >
              <Brain className="w-5 h-5 mr-2" />
              {t('demo.tryNow')}
            </Button>
          </div>

          {/* Technology Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {technologyFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <span>{t(feature.titleKey)}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {t(feature.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Specifications */}
          <Card className="border-0 shadow-lg mb-16">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {specs.map((spec, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <spec.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{spec.value}</div>
                    <div className="text-gray-600">{spec.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Technology Deep Dive */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Microscope className="w-6 h-6 text-purple-600" />
                  <span>Machine Learning Models</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Convolutional Neural Networks</span>
                    <span className="text-purple-600 font-medium">Advanced</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Computer Vision</span>
                    <span className="text-blue-600 font-medium">Expert</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Pattern Recognition</span>
                    <span className="text-green-600 font-medium">Mastery</span>
                  </div>
                  <Progress value={97} className="h-2" />
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">Training Dataset</h4>
                  <p className="text-sm text-purple-700">
                    Over 10 million high-quality plant images from botanical gardens, 
                    herbarium specimens, and field photography worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span>Quality Assurance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Expert Validation</h4>
                    <p className="text-sm text-gray-600">
                      Results verified by certified botanists and taxonomists from leading institutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Layers className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Continuous Learning</h4>
                    <p className="text-sm text-gray-600">
                      Models updated monthly with new species data and improved algorithms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Global Coverage</h4>
                    <p className="text-sm text-gray-600">
                      Trained on plants from every continent, covering diverse ecosystems and climates.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Accuracy Metrics</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-green-700">Common Plants:</span>
                      <div className="font-bold text-green-900">98%</div>
                    </div>
                    <div>
                      <span className="text-green-700">Rare Species:</span>
                      <div className="font-bold text-green-900">89%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Partnerships */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Research Partnerships
                </h2>
                <p className="text-xl text-gray-600">
                  Collaborating with leading botanical institutions worldwide
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kew Gardens</h3>
                  <p className="text-sm text-gray-600">Royal Botanic Gardens partnership for species validation</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">iNaturalist</h3>
                  <p className="text-sm text-gray-600">Citizen science platform integration for crowd-sourced data</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">GBIF</h3>
                  <p className="text-sm text-gray-600">Global Biodiversity Information Facility data access</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Experience Advanced AI Technology
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              See how cutting-edge machine learning and botanical expertise come together 
              to deliver the most accurate plant identification available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={onTryForFree}
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Try the Technology
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Download Research Paper
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}