import { 
  Camera, 
  Brain, 
  CheckCircle, 
  BookOpen,
  Target,
  Zap,
  Database,
  Globe
} from "lucide-react";

export const mainSteps = [
  {
    id: 1,
    titleKey: 'howItWorksPage.step1Title',
    subtitleKey: 'howItWorksPage.step1Subtitle', 
    descriptionKey: 'howItWorksPage.step1Desc',
    icon: Camera,
    color: "bg-blue-500",
    details: [
      "Works with any part of the plant - leaves, flowers, bark, or whole plant",
      "Auto-focus and image enhancement for best results",
      "Multiple photo angles improve accuracy",
      "Works in various lighting conditions"
    ],
    tips: [
      "Get close to the plant for better detail",
      "Ensure good lighting or use flash", 
      "Include distinctive features like flowers or unique leaf patterns",
      "Avoid shadows covering important details"
    ]
  },
  {
    id: 2,
    titleKey: 'howItWorksPage.step2Title',
    subtitleKey: 'howItWorksPage.step2Subtitle',
    descriptionKey: 'howItWorksPage.step2Desc',
    icon: Brain,
    color: "bg-purple-500",
    details: [
      "Processes over 50+ botanical features instantly",
      "Compares against 17,000+ species database",
      "Uses computer vision for pattern recognition",
      "Machine learning models continuously updated"
    ],
    tips: [
      "Processing typically takes 2-5 seconds",
      "AI considers leaf shape, texture, color, and arrangement",
      "Advanced algorithms detect subtle botanical differences",
      "Multiple AI models work together for accuracy"
    ]
  },
  {
    id: 3,
    titleKey: 'howItWorksPage.step3Title', 
    subtitleKey: 'howItWorksPage.step3Subtitle',
    descriptionKey: 'howItWorksPage.step3Desc',
    icon: CheckCircle,
    color: "bg-green-500",
    details: [
      "Scientific and common names provided",
      "Confidence score shows accuracy level",
      "Plant family and classification details",
      "Geographic distribution information"
    ],
    tips: [
      "Confidence scores above 80% are highly reliable",
      "Multiple similar species may be suggested",
      "Cross-reference with location for better accuracy",
      "Scientific names are internationally recognized"
    ]
  },
  {
    id: 4,
    titleKey: 'howItWorksPage.step4Title',
    subtitleKey: 'howItWorksPage.step4Subtitle', 
    descriptionKey: 'howItWorksPage.step4Desc',
    icon: BookOpen,
    color: "bg-orange-500",
    details: [
      "Personalized watering and fertilizing schedules",
      "Light and temperature requirements",
      "Seasonal care instructions",
      "Common problems and solutions"
    ],
    tips: [
      "Care varies by season and climate",
      "Indoor vs outdoor care differences explained",
      "Beginner-friendly simplified instructions available",
      "Expert tips for optimal plant health"
    ]
  }
];

export const technicalSpecs = [
  {
    feature: "Accuracy Rate",
    value: "95%+",
    description: "Validated against botanical experts",
    icon: Target
  },
  {
    feature: "Processing Speed",
    value: "2-5 sec",
    description: "Near-instantaneous identification",
    icon: Zap
  },
  {
    feature: "Plant Database",
    value: "17,000+",
    description: "Species from all continents",
    icon: Database
  },
  {
    feature: "Languages",
    value: "30+",
    description: "Multi-language support",
    icon: Globe
  }
];

export const faqData = [
  {
    question: "How accurate is the plant identification?",
    answer: "Our AI achieves over 95% accuracy rate, validated by professional botanists. The accuracy depends on image quality and how distinctive the plant features are. Confidence scores help you understand the reliability of each identification."
  },
  {
    question: "Does it work offline?",
    answer: "Basic identification works offline with our compressed model, but for the most accurate results and latest species updates, an internet connection is recommended. Offline mode covers the 1,000 most common plants."
  },
  {
    question: "What types of plants can it identify?",
    answer: "Plantify AI can identify trees, flowers, houseplants, succulents, vegetables, fruits, weeds, and more. It covers over 17,000 species including common garden plants, wild species, and rare specimens from around the world."
  },
  {
    question: "What if the identification is wrong?",
    answer: "You can report incorrect identifications through the app, which helps improve our AI. We also provide confidence scores and suggest similar species. When in doubt, consult with local botanists or extension services."
  },
  {
    question: "Can I identify plants from any country?",
    answer: "Yes! Our database includes plants from every continent. The AI is trained on global plant species, though it may be more accurate with plants from regions where we have more training data."
  },
  {
    question: "How does the care guide work?",
    answer: "Care instructions are customized based on the identified plant species, your location's climate, and the season. We provide watering schedules, light requirements, fertilizer recommendations, and seasonal care tips."
  }
];