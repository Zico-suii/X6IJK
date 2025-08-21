import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ArrowLeft, 
  Leaf,
  Heart,
  Share2,
  Printer,
  ShieldCheck,
  PawPrint
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { PlantData } from "./constants/plantDatabase";

interface PlantDetailHeaderProps {
  plant: PlantData;
  onBackToSearch: () => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export function PlantDetailHeader({ plant, onBackToSearch, isWishlisted, onToggleWishlist }: PlantDetailHeaderProps) {
  const { t, language } = useLanguage();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onBackToSearch}
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
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {t('plant.details')}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleWishlist}
              className={isWishlisted ? 'text-red-500' : 'text-gray-600'}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Printer className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Plant Header Info */}
        <div className="mt-4 grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {plant.commonNames[language][0] || plant.scientificName}
              </h1>
              <div className="flex space-x-2">
                {plant.airPurifying && (
                  <Badge className="bg-green-500 text-white">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    {t('plant.airPurifyingYes')}
                  </Badge>
                )}
                {plant.petFriendly && (
                  <Badge className="bg-blue-500 text-white">
                    <PawPrint className="w-3 h-3 mr-1" />
                    {t('plant.petFriendlyYes')}
                  </Badge>
                )}
              </div>
            </div>
            
            <p className="text-lg text-gray-600 italic mb-2">{plant.scientificName}</p>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className={getDifficultyColor(plant.difficulty)}>
                {plant.difficulty}
              </Badge>
              <Badge variant="secondary">{plant.category}</Badge>
              <span className="text-sm text-gray-600">{plant.family}</span>
            </div>
          </div>

          <div className="text-right">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">{plant.difficulty}</div>
                <div className="text-sm text-gray-600">{t('plant.difficulty')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{plant.origin}</div>
                <div className="text-sm text-gray-600">{t('plant.origin')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}