import { useRef, useState } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Camera, Brain, BookOpen, Activity, TrendingUp, Sparkles, ArrowRight, Check, Star, Zap } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

interface FeaturesSectionProps {
  onFeatures: () => void;
}

interface Feature {
  icon: any;
  title: string;
  description: string;
  color: string;
  gradient: string;
  stats: string;
  benefits: string[];
}

// Floating feature card component
function FeatureCard({ feature, index, delay }: { feature: Feature; index: number; delay: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-80 perspective-1000"
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        delay: delay,
        duration: 0.8,
        ease: "easeOut"
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className={`relative h-full bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 backdrop-blur-sm`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full blur-xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Icon with animation */}
              <motion.div
                className="mb-4"
                animate={isHovered ? { 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  y: -5
                } : { scale: 1, rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-xl font-bold text-white mb-3"
                animate={isHovered ? { x: 4 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-white/90 mb-4 flex-1 leading-relaxed"
                animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
              >
                {feature.description}
              </motion.p>

              {/* Stats */}
              <motion.div
                className="bg-white/15 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-white/80 text-sm mb-1">Performance</div>
                <div className="text-white font-bold text-lg">{feature.stats}</div>
              </motion.div>

              {/* Flip indicator */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                animate={isHovered ? { scale: 1.1, rotate: 180 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="relative h-full bg-white rounded-2xl p-6 shadow-xl border border-gray-200 backdrop-blur-sm">
            <div className="h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mr-3`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle try feature action
                    }}
                  >
                    Try This Feature
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FeaturesSection({ onFeatures }: FeaturesSectionProps) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const features: Feature[] = [
    {
      icon: Camera,
      title: t('features.identification.title'),
      description: t('features.identification.description'),
      color: "from-blue-500 to-blue-600",
      gradient: "from-blue-500 to-blue-600",
      stats: "99.9% Accurate",
      benefits: [
        "Instant plant recognition",
        "Works with any photo quality",
        "Supports 10,000+ species",
        "Offline capability"
      ]
    },
    {
      icon: Brain,
      title: t('features.health.title'),
      description: t('features.health.description'),
      color: "from-purple-500 to-purple-600",
      gradient: "from-purple-500 to-purple-600",
      stats: "95% Success Rate",
      benefits: [
        "Disease detection",
        "Pest identification",
        "Treatment recommendations",
        "Prevention tips"
      ]
    },
    {
      icon: BookOpen,
      title: t('features.care.title'),
      description: t('features.care.description'),
      color: "from-green-500 to-green-600",
      gradient: "from-green-500 to-green-600",
      stats: "1000+ Care Guides",
      benefits: [
        "Personalized care schedules",
        "Watering reminders",
        "Seasonal adjustments",
        "Expert recommendations"
      ]
    },
    {
      icon: Activity,
      title: t('features.monitoring.title'),
      description: t('features.monitoring.description'),
      color: "from-orange-500 to-orange-600",
      gradient: "from-orange-500 to-orange-600",
      stats: "24/7 Tracking",
      benefits: [
        "Growth progress tracking",
        "Health status alerts",
        "Photo timeline",
        "Performance analytics"
      ]
    },
    {
      icon: TrendingUp,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      color: "from-teal-500 to-teal-600",
      gradient: "from-teal-500 to-teal-600",
      stats: "Smart Insights",
      benefits: [
        "Growth pattern analysis",
        "Predictive modeling",
        "Optimization suggestions",
        "Historical data"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full border border-green-200 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-medium">AI-Powered Features</span>
            <Zap className="w-4 h-4 ml-2" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-green-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('features.title')}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t('features.subtitle')}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              delay={0.5 + index * 0.1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={onFeatures}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.span
                className="flex items-center"
                whileHover={{ x: 4 }}
              >
                {t('features.exploreAll')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center items-center space-x-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-600 mr-1" />
              <span>1M+ Plants Identified</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 text-blue-600 mr-1" />
              <span>Real-time AI</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}