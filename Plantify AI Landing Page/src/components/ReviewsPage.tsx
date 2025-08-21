import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  ArrowLeft, 
  Star, 
  ThumbsUp,
  MessageCircle,
  Filter,
  Leaf,
  CheckCircle,
  User
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

interface ReviewsPageProps {
  onBackToLanding: () => void;
  onTryForFree: () => void;
}

const reviewStats = {
  overall: 4.8,
  total: 52847,
  breakdown: {
    5: 78,
    4: 15,
    3: 4,
    2: 2,
    1: 1
  }
};

const reviews = [
  {
    id: 1,
    user: "Sarah Johnson",
    rating: 5,
    date: "2 days ago",
    verified: true,
    text: "Absolutely incredible app! I've identified over 50 plants in my garden and the accuracy is amazing. The care instructions have saved my houseplants!",
    helpful: 23
  },
  {
    id: 2,
    user: "Mike Chen",
    rating: 5,
    date: "1 week ago",
    verified: true,
    text: "As a botanist, I'm impressed by the scientific accuracy. Great tool for both professionals and hobbyists. The offline mode is perfect for field work.",
    helpful: 45
  },
  {
    id: 3,
    user: "Emma Rodriguez",
    rating: 4,
    date: "2 weeks ago",
    verified: true,
    text: "Love this app! Very easy to use and the plant care reminders are so helpful. Only wish it had more rare tropical species.",
    helpful: 18
  },
  {
    id: 4,
    user: "David Park",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    text: "Game changer for my plant collection! The disease detection feature caught a fungal infection early. Highly recommend to all plant parents.",
    helpful: 31
  },
  {
    id: 5,
    user: "Lisa Wang",
    rating: 5,
    date: "1 month ago",
    verified: true,
    text: "Perfect for hiking! I can identify wildflowers and trees on the trail. The community feature is great for getting expert advice.",
    helpful: 27
  }
];

export function ReviewsPage({ onBackToLanding, onTryForFree }: ReviewsPageProps) {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredReviews = selectedFilter === "all" 
    ? reviews 
    : reviews.filter(review => review.rating.toString() === selectedFilter);

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
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            {t('nav.reviews')}
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('reviews.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('reviews.subtitle')}
            </p>
          </div>

          {/* Overall Rating Section */}
          <Card className="border-0 shadow-lg mb-12">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Overall Rating */}
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-900 mb-2">
                    {reviewStats.overall}
                  </div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-6 h-6 text-yellow-500 fill-current" 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{t('reviews.overallRating')}</p>
                  <p className="text-sm text-gray-500">
                    {t('reviews.totalReviews')}
                  </p>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t('reviews.writeReview')}
                  </Button>
                </div>

                {/* Rating Breakdown */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {t('reviews.ratingBreakdown')}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(reviewStats.breakdown).reverse().map(([rating, percentage]) => (
                      <div key={rating} className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600 w-6">
                          {rating} ⭐
                        </span>
                        <Progress value={percentage} className="flex-1 h-2" />
                        <span className="text-sm text-gray-600 w-10">
                          {percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filters */}
          <Card className="border-0 shadow-sm mb-8">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedFilter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("all")}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {t('reviews.filterAll')}
                </Button>
                <Button
                  variant={selectedFilter === "5" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("5")}
                >
                  {t('reviews.filter5Star')}
                </Button>
                <Button
                  variant={selectedFilter === "4" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("4")}
                >
                  {t('reviews.filter4Star')}
                </Button>
                <Button
                  variant={selectedFilter === "3" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter("3")}
                >
                  {t('reviews.filter3Star')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Reviews List */}
          <div className="space-y-6 mb-12">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{review.user}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {t('reviews.verified')}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`w-4 h-4 ${
                                  star <= review.rating 
                                    ? 'text-yellow-500 fill-current' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {review.text}
                  </p>

                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      {t('reviews.helpful')} ({review.helpful})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Happy Plant Community
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Experience why thousands of plant enthusiasts trust Plantify AI 
              for accurate identification and expert care guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={onTryForFree}
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Start Your Plant Journey
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Write a Review
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}