import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Camera, Brain, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const steps = [
  {
    icon: Camera,
    titleKey: 'howItWorks.step1',
    descriptionKey: 'howItWorks.step1Desc',
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Brain,
    titleKey: 'howItWorks.step2',
    descriptionKey: 'howItWorks.step2Desc',
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: CheckCircle,
    titleKey: 'howItWorks.step3',
    descriptionKey: 'howItWorks.step3Desc',
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  }
];

export function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {t('howItWorks.title')}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg text-center h-full">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600">
                    {t(step.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            {t('nav.howItWorks')} →
          </Button>
        </div>
      </div>
    </section>
  );
}