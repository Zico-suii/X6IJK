import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { 
  Lightbulb,
  Scissors,
  Bug,
  AlertTriangle,
  CheckCircle,
  X
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { getPlantById } from "./constants/plantDatabase";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PlantDetailHeader } from "./PlantDetailHeader";
import { PlantCareGuide } from "./PlantCareGuide";

interface PlantDetailPageProps {
  plantId: string;
  onBackToSearch: () => void;
}

export function PlantDetailPage({ plantId, onBackToSearch }: PlantDetailPageProps) {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const plant = getPlantById(plantId);

  if (!plant) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <Card className="border-0 shadow-lg max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Plant Not Found</h2>
            <button onClick={onBackToSearch} className="text-green-600 hover:text-green-700">
              Back to Search
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const toggleWishlist = () => setIsWishlisted(!isWishlisted);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <PlantDetailHeader 
        plant={plant} 
        onBackToSearch={onBackToSearch}
        isWishlisted={isWishlisted}
        onToggleWishlist={toggleWishlist}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Plant Image */}
          <Card className="border-0 shadow-lg mb-8">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src={plant.imageUrl}
                alt={plant.commonNames[language][0] || plant.scientificName}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>

          {/* Plant Details Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">{t('plant.overview')}</TabsTrigger>
              <TabsTrigger value="care">{t('plant.care')}</TabsTrigger>
              <TabsTrigger value="facts">{t('plant.facts')}</TabsTrigger>
              <TabsTrigger value="problems">{t('plant.problems')}</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{t('plant.overview')}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {plant.description[language]}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('plant.scientificName')}</span>
                        <span className="font-medium italic">{plant.scientificName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('plant.family')}</span>
                        <span className="font-medium">{plant.family}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('plant.category')}</span>
                        <span className="font-medium">{plant.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('plant.origin')}</span>
                        <span className="font-medium">{plant.origin}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{t('plant.benefits')}</h3>
                    <ul className="space-y-3">
                      {plant.benefits[language].map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Toxicity Warning */}
                    <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-amber-900">{t('plant.toxicity')}</h4>
                          <p className="text-sm text-amber-800">{plant.toxicity[language]}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="care" className="mt-8">
              <PlantCareGuide plant={plant} />
            </TabsContent>

            <TabsContent value="facts" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                      <Lightbulb className="w-5 h-5 text-yellow-600" />
                      <span>{t('plant.facts')}</span>
                    </h3>
                    <ul className="space-y-3">
                      {plant.facts[language].map((fact, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                      <Scissors className="w-5 h-5 text-blue-600" />
                      <span>{t('plant.propagation')}</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {plant.propagation[language]}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="problems" className="mt-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                    <Bug className="w-5 h-5 text-red-600" />
                    <span>{t('plant.problems')}</span>
                  </h3>
                  <div className="space-y-4">
                    {plant.commonProblems[language].map((problem, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                        <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{problem}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}