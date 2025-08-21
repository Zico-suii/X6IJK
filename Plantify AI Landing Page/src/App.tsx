import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { TryForFreePage } from "./components/TryForFreePage";
import { DemoPage } from "./components/DemoPage";
import { LearnMorePage } from "./components/LearnMorePage";
import { ReviewsPage } from "./components/ReviewsPage";
import { HowItWorksPage } from "./components/HowItWorksPage";
import { FeaturesPage } from "./components/FeaturesPage";
import { FeatureTryoutPage } from "./components/FeatureTryoutPage";
import { PlantSearchPage } from "./components/PlantSearchPage";
import { PlantDetailPage } from "./components/PlantDetailPage";
import { SignInPage } from "./components/SignInPage";
import { LanguageProvider } from "./components/LanguageProvider";

type PageType = 'landing' | 'try-for-free' | 'demo' | 'learn-more' | 'reviews' | 'how-it-works' | 'features' | 'feature-tryout' | 'search' | 'plant-detail' | 'sign-in';

// Particle system component
function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Loading component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-green-900 via-green-600 to-emerald-400 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.h1
          className="text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Plantify AI
        </motion.h1>
        <motion.p
          className="text-green-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Initializing AI Systems...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [selectedPlantId, setSelectedPlantId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  const navigateTo = (page: PageType, plantId?: string) => {
    setIsPageTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      if (plantId) setSelectedPlantId(plantId);
      setIsPageTransitioning(false);
    }, 300);
  };

  const navigateToTryForFree = () => navigateTo('try-for-free');
  const navigateToDemo = () => navigateTo('demo');
  const navigateToLearnMore = () => navigateTo('learn-more');
  const navigateToReviews = () => navigateTo('reviews');
  const navigateToHowItWorks = () => navigateTo('how-it-works');
  const navigateToFeatures = () => navigateTo('features');
  const navigateToFeatureTryout = () => navigateTo('feature-tryout');
  const navigateToSearch = () => navigateTo('search');
  const navigateToPlantDetail = (plantId: string) => navigateTo('plant-detail', plantId);
  const navigateToLanding = () => navigateTo('landing');
  const navigateToSignIn = () => navigateTo('sign-in');

  const pageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    in: { opacity: 1, y: 0, scale: 1 },
    out: { opacity: 0, y: -20, scale: 1.05 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)] bg-[rgba(59,18,238,0)]" />
        </div>
        
        <ParticleBackground />

        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="min-h-screen"
              >
                {currentPage === 'try-for-free' && (
                  <TryForFreePage onBackToLanding={navigateToLanding} />
                )}

                {currentPage === 'demo' && (
                  <DemoPage onBackToLanding={navigateToLanding} onTryForFree={navigateToTryForFree} />
                )}

                {currentPage === 'learn-more' && (
                  <LearnMorePage onBackToLanding={navigateToLanding} onTryForFree={navigateToTryForFree} />
                )}

                {currentPage === 'reviews' && (
                  <ReviewsPage onBackToLanding={navigateToLanding} onTryForFree={navigateToTryForFree} />
                )}

                {currentPage === 'how-it-works' && (
                  <HowItWorksPage onBackToLanding={navigateToLanding} onTryForFree={navigateToTryForFree} />
                )}

                {currentPage === 'features' && (
                  <FeaturesPage onBackToLanding={navigateToLanding} onTryForFree={navigateToTryForFree} onTryThisFeature={navigateToFeatureTryout} />
                )}

                {currentPage === 'feature-tryout' && (
                  <FeatureTryoutPage onBackToFeatures={navigateToFeatures} />
                )}

                {currentPage === 'search' && (
                  <PlantSearchPage onBackToLanding={navigateToLanding} onViewPlant={navigateToPlantDetail} />
                )}

                {currentPage === 'plant-detail' && (
                  <PlantDetailPage plantId={selectedPlantId} onBackToSearch={navigateToSearch} />
                )}

                {currentPage === 'sign-in' && (
                  <SignInPage onBackToLanding={navigateToLanding} />
                )}

                {currentPage === 'landing' && (
                  <>
                    <Header 
                      onTryForFree={navigateToTryForFree} 
                      onReviews={navigateToReviews}
                      onHowItWorks={navigateToHowItWorks}
                      onFeatures={navigateToFeatures}
                      onSignIn={navigateToSignIn}
                    />
                    <main>
                      <HeroSection onTryForFree={navigateToTryForFree} onWatchDemo={navigateToDemo} />
                      <SearchBar onSearch={navigateToSearch} />
                      <FeaturesSection onFeatures={navigateToFeatures} />
                      <HowItWorksSection />
                      <TestimonialsSection />
                      <CTASection onTryForFree={navigateToTryForFree} />
                    </main>
                    <Footer />
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Page transition overlay */}
            <AnimatePresence>
              {isPageTransitioning && (
                <motion.div
                  className="fixed inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </LanguageProvider>
  );
}