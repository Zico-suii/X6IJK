import { Button } from "./ui/button";
import { Camera } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

interface CTASectionProps {
  onTryForFree: () => void;
}

export function CTASection({ onTryForFree }: CTASectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-green-100">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              onClick={onTryForFree}
            >
              <Camera className="w-5 h-5 mr-2" />
              {t('cta.button')}
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 text-green-100 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>2M+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>95% Accuracy</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>17K+ Species</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}