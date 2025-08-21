import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Search, Sparkles, ArrowRight, Leaf, Camera, Brain } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageProvider";

interface SearchBarProps {
  onSearch: () => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const suggestions = [
    { icon: Leaf, text: "Rose", category: "Flower" },
    { icon: Camera, text: "Monstera", category: "Houseplant" },
    { icon: Brain, text: "Succulent", category: "Desert Plant" },
    { icon: Sparkles, text: "Orchid", category: "Exotic" },
  ];

  useEffect(() => {
    if (searchQuery) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 500);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <motion.section
      ref={ref}
      className="py-12 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-200/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('search.title')}
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('search.subtitle')}
          </motion.p>

          {/* Search Container */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div
              className="relative max-w-2xl mx-auto"
              animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Main Search Input */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl"
                  animate={isFocused ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative flex items-center bg-white/80 backdrop-blur-md border border-green-200/50 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <motion.div
                    className="p-4"
                    animate={isFocused ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Search className="w-6 h-6 text-green-600" />
                  </motion.div>
                  
                  <input
                    type="text"
                    placeholder={t('search.placeholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 py-4 px-2 bg-transparent border-none outline-none text-gray-800 placeholder-gray-500 text-lg"
                  />
                  
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        className="px-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <motion.div
                    className="m-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleSearch}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      disabled={!searchQuery.trim()}
                    >
                      <span className="flex items-center">
                        {t('search.searchButton')}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* AI Assistance Indicator */}
              <motion.div
                className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0, rotate: -12 }}
                animate={isFocused ? { opacity: 1, scale: 1, rotate: -12 } : { opacity: 0, scale: 0, rotate: -12 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <Sparkles className="w-3 h-3 inline mr-1" />
                AI Powered
              </motion.div>
            </motion.div>

            {/* Suggestions */}
            <AnimatePresence>
              {isFocused && (
                <motion.div
                  className="absolute top-full left-0 right-0 mt-4 max-w-2xl mx-auto bg-white/90 backdrop-blur-md border border-green-200/50 rounded-2xl shadow-2xl overflow-hidden z-10"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-3 font-medium">Popular Searches</div>
                    <div className="space-y-2">
                      {suggestions.map((suggestion, index) => (
                        <motion.button
                          key={suggestion.text}
                          className="w-full flex items-center justify-between p-3 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          onClick={() => {
                            setSearchQuery(suggestion.text);
                            setIsFocused(false);
                          }}
                        >
                          <div className="flex items-center">
                            <suggestion.icon className="w-5 h-5 text-green-600 mr-3" />
                            <div className="text-left">
                              <div className="font-medium text-gray-800">{suggestion.text}</div>
                              <div className="text-sm text-gray-500">{suggestion.category}</div>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              { icon: Camera, text: "Scan Plant", action: "camera" },
              { icon: Brain, text: "AI Analysis", action: "analysis" },
              { icon: Sparkles, text: "Plant Care", action: "care" },
            ].map((action, index) => (
              <motion.div
                key={action.text}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <button
                  className="flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full hover:bg-green-50 hover:border-green-300 transition-all duration-300 group"
                  onClick={onSearch}
                >
                  <action.icon className="w-5 h-5 text-green-600 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 font-medium">{action.text}</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}