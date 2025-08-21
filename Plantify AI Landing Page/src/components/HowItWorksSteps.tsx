import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  CheckCircle,
  Clock,
  ChevronRight,
  Star,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { mainSteps } from "./constants/howItWorksData";

interface HowItWorksStepsProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

export function HowItWorksSteps({ activeStep, setActiveStep }: HowItWorksStepsProps) {
  const { t } = useLanguage();

  return (
    <>
      {/* Step Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-4 bg-white rounded-full p-2 shadow-lg">
          {mainSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => setActiveStep(step.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  activeStep === step.id
                    ? `${step.color} text-white shadow-lg`
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                <step.icon className="w-5 h-5" />
              </button>
              {index < mainSteps.length - 1 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Active Step Details */}
      {mainSteps.map((step) => (
        activeStep === step.id && (
          <div key={step.id} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <Badge variant="outline" className="mb-2">{t(step.subtitleKey)}</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t(step.titleKey)}</h2>
              <p className="text-xl text-gray-600 mb-8">{t(step.descriptionKey)}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {step.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Pro Tips</h3>
                  <ul className="space-y-2">
                    {step.tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className={`h-64 bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <step.icon className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold">{t(step.titleKey)}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Step {step.id} of {mainSteps.length}</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>2-5 seconds</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      ))}

      {/* Process Flow Visualization */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0 mb-8">
        <CardContent className="p-6">
          <h3 className="text-center text-xl font-semibold mb-6">Complete Process Flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {mainSteps.map((step, index) => (
              <div key={step.id} className="text-center relative">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t(step.titleKey)}</h4>
                <p className="text-sm text-gray-600">{t(step.subtitleKey)}</p>
                {index < mainSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 absolute top-8 -right-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}