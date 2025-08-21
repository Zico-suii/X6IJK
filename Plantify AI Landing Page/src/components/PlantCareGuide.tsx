import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Droplets,
  Sun,
  Thermometer,
  CloudRain,
  Mountain,
  Zap
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { PlantData } from "./constants/plantDatabase";

interface PlantCareGuideProps {
  plant: PlantData;
}

export function PlantCareGuide({ plant }: PlantCareGuideProps) {
  const { t, language } = useLanguage();

  const careItems = [
    {
      icon: Droplets,
      titleKey: 'plant.watering',
      content: plant.care.watering[language],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Sun,
      titleKey: 'plant.light',
      content: plant.care.light[language],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Thermometer,
      titleKey: 'plant.temperature',
      content: plant.care.temperature[language],
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: CloudRain,
      titleKey: 'plant.humidity',
      content: plant.care.humidity[language],
      color: 'text-gray-600',
      bgColor: 'bg-gray-100'
    },
    {
      icon: Mountain,
      titleKey: 'plant.soil',
      content: plant.care.soil[language],
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      icon: Zap,
      titleKey: 'plant.fertilizer',
      content: plant.care.fertilizer[language],
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {careItems.map((item, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span>{t(item.titleKey)}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Plant Characteristics */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>{t('plant.characteristics')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex justify-between">
              <span className="text-gray-600">{t('plant.height')}</span>
              <span className="font-medium">{plant.characteristics.height}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('plant.spread')}</span>
              <span className="font-medium">{plant.characteristics.spread}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('plant.bloomTime')}</span>
              <span className="font-medium">{plant.characteristics.bloomTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('plant.hardiness')}</span>
              <span className="font-medium">{plant.characteristics.hardiness}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}