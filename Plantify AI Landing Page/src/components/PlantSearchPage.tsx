import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  ArrowLeft, 
  Search, 
  Filter,
  Leaf,
  Star,
  Droplets,
  Sun,
  Heart,
  Eye,
  PawPrint,
  ShieldCheck
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { searchPlants, PlantData, getPlantsByCategory, getPlantsByDifficulty } from "./constants/plantDatabase";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PlantSearchPageProps {
  onBackToLanding: () => void;
  onViewPlant: (plantId: string) => void;
}

export function PlantSearchPage({ onBackToLanding, onViewPlant }: PlantSearchPageProps) {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Houseplant', 'Succulent', 'Vine', 'Tree', 'Flower', 'Herb'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredPlants = useMemo(() => {
    let results: PlantData[] = [];

    if (searchQuery.trim()) {
      results = searchPlants(searchQuery, language);
    } else {
      // Show all plants when no search query
      results = searchPlants('', language);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      results = results.filter(plant => plant.category === selectedCategory);
    }

    // Apply difficulty filter
    if (selectedDifficulty !== 'all') {
      results = results.filter(plant => plant.difficulty === selectedDifficulty);
    }

    return results;
  }, [searchQuery, selectedCategory, selectedDifficulty, language]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSearchQuery('');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {t('nav.search')}
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('search.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {t('search.subtitle')}
            </p>
          </div>

          {/* Search Section */}
          <Card className="border-0 shadow-lg mb-8">
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder={t('search.placeholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg"
                  />
                </div>

                {/* Filters Toggle */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2"
                  >
                    <Filter className="w-4 h-4" />
                    <span>{t('search.features')}</span>
                  </Button>
                  
                  {(selectedCategory !== 'all' || selectedDifficulty !== 'all' || searchQuery) && (
                    <Button variant="ghost" onClick={clearFilters} className="text-gray-600">
                      {t('search.clearFilters')}
                    </Button>
                  )}
                </div>

                {/* Filters */}
                {showFilters && (
                  <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('search.categories')}
                      </label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('search.allCategories')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t('search.allCategories')}</SelectItem>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('search.difficulty')}
                      </label>
                      <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('search.allDifficulties')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t('search.allDifficulties')}</SelectItem>
                          {difficulties.map((difficulty) => (
                            <SelectItem key={difficulty} value={difficulty}>
                              {difficulty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              {filteredPlants.length} {t('search.resultsCount')}
            </h2>
          </div>

          {/* Plants Grid */}
          {filteredPlants.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlants.map((plant) => (
                <Card 
                  key={plant.id} 
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => onViewPlant(plant.id)}
                >
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={plant.imageUrl}
                      alt={plant.commonNames[language][0] || plant.scientificName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {plant.airPurifying && (
                        <Badge className="bg-green-500 text-white">
                          <ShieldCheck className="w-3 h-3 mr-1" />
                          Air
                        </Badge>
                      )}
                      {plant.petFriendly && (
                        <Badge className="bg-blue-500 text-white">
                          <PawPrint className="w-3 h-3 mr-1" />
                          Pet
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                          {plant.commonNames[language][0] || plant.scientificName}
                        </h3>
                        <p className="text-sm text-gray-600 italic">
                          {plant.scientificName}
                        </p>
                      </div>

                      <p className="text-gray-700 text-sm line-clamp-2">
                        {plant.description[language]}
                      </p>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className={getDifficultyColor(plant.difficulty)}>
                          {plant.difficulty}
                        </Badge>
                        <Badge variant="secondary">
                          {plant.category}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Droplets className="w-4 h-4" />
                            <span>Care</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Sun className="w-4 h-4" />
                            <span>Light</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{t('common.viewAll')}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* No Results */
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('search.noResults')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('search.tryDifferent')}
                </p>
                <Button onClick={clearFilters} className="bg-green-600 hover:bg-green-700">
                  {t('search.clearFilters')}
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Quick Categories */}
          {!searchQuery && (
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('search.categories')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    onClick={() => setSelectedCategory(category)}
                    className={`p-4 h-auto flex flex-col items-center space-y-2 ${
                      selectedCategory === category ? 'border-green-500 bg-green-50' : ''
                    }`}
                  >
                    <Leaf className="w-6 h-6 text-green-600" />
                    <span className="text-sm">{category}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}