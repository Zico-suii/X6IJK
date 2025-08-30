// Translation utility for Green Guardian.AI

export const translations = {
    en: {
        // Common
        loading: 'Loading...',
        error: 'Error',
        save: 'Save',
        cancel: 'Cancel',
        retry: 'Retry',
        
        // Navigation
        dashboard: 'Dashboard',
        myGarden: 'My Garden',
        aiAssistant: 'AI Assistant',
        features: 'Features',
        learnMore: 'Learn More',
        language: 'Language',
        
        // Dashboard
        welcome: 'Welcome to',
        scanYourPlant: 'Scan Your Plant',
        personalAIExpert: 'Your personal AI plant expert. Identify species, diagnose health issues, and keep your green friends thriving.',
        
        // Analysis
        uploadPlantImage: 'Upload Plant Image',
        analysisComplete: 'Analysis Complete',
        healthStatus: 'Health Status',
        diagnostics: 'Diagnostics',
        recommendations: 'Recommendations',
        generalCareTips: 'General Care Tips',
        
        // AI Assistant
        aiAssistantTitle: 'AI Assistant',
        askAboutPlants: 'Ask about your plants...',
        aiGreeting: "Hello! I'm your AI gardening assistant. How can I help you and your plants today?"
    },
    
    hi: {
        // Common
        loading: 'लोड हो रहा है...',
        error: 'त्रुटि',
        save: 'सेव करें',
        cancel: 'रद्द करें',
        retry: 'पुनः प्रयास करें',
        
        // Navigation
        dashboard: 'डैशबोर्ड',
        myGarden: 'मेरा बगीचा',
        aiAssistant: 'AI सहायक',
        features: 'विशेषताएं',
        learnMore: 'और जानें',
        language: 'भाषा',
        
        // Dashboard
        welcome: 'आपका स्वागत है',
        scanYourPlant: 'अपने पौधे को स्कैन करें',
        personalAIExpert: 'आपका व्यक्तिगत AI पौधा विशेषज्ञ। प्रजातियों की पहचान करें, स्वास्थ्य संबंधी समस्याओं का निदान करें, और अपने हरे दोस्तों को फलते-फूलते रखें।',
        
        // Analysis
        uploadPlantImage: 'पौधे की तस्वीर अपलोड करें',
        analysisComplete: 'विश्लेषण पूर्ण',
        healthStatus: 'स्वास्थ्य स्थिति',
        diagnostics: 'निदान',
        recommendations: 'सुझाव',
        generalCareTips: 'सामान्य देखभाल के टिप्स',
        
        // AI Assistant
        aiAssistantTitle: 'AI सहायक',
        askAboutPlants: 'अपने पौधों के बारे में पूछें...',
        aiGreeting: "नमस्ते! मैं आपका AI बागवानी सहायक हूँ। आज मैं आपकी और आपके पौधों की कैसे मदद कर सकता हूँ?"
    },
    
    bn: {
        // Common
        loading: 'লোড হচ্ছে...',
        error: 'ত্রুটি',
        save: 'সেভ করুন',
        cancel: 'বাতিল',
        retry: 'পুনরায় চেষ্টা করুন',
        
        // Navigation
        dashboard: 'ড্যাশবোর্ড',
        myGarden: 'আমার বাগান',
        aiAssistant: 'AI সহায়ক',
        features: 'বৈশিষ্ট্য',
        learnMore: 'আরও জানুন',
        language: 'ভাষা',
        
        // Dashboard
        welcome: 'স্বাগতম',
        scanYourPlant: 'আপনার গাছ স্ক্যান করুন',
        personalAIExpert: 'আপনার ব্যক্তিগত AI উদ্ভিদ বিশেষজ্ঞ। প্রজাতি চিহ্নিত করুন, স্বাস্থ্য সমস্যা নির্ণয় করুন, এবং আপনার সবুজ বন্ধুদের সুস্থ রাখুন।',
        
        // Analysis
        uploadPlantImage: 'গাছের ছবি আপলোড করুন',
        analysisComplete: 'বিশ্লেষণ সম্পূর্ণ',
        healthStatus: 'স্বাস্থ্যের অবস্থা',
        diagnostics: 'নির্ণয়',
        recommendations: 'সুপারিশ',
        generalCareTips: 'সাধারণ যত্নের টিপস',
        
        // AI Assistant
        aiAssistantTitle: 'AI সহায়ক',
        askAboutPlants: 'আপনার গাছপালা সম্পর্কে জিজ্ঞাসা করুন...',
        aiGreeting: "হ্যালো! আমি আপনার AI বাগান সহায়ক। আজ আমি আপনাকে এবং আপনার গাছপালাকে কীভাবে সাহায্য করতে পারি?"
    }
};

export const getCurrentLanguage = () => {
    return localStorage.getItem('greenGuardian_language') || 'en';
};

export const t = (key) => {
    const currentLang = getCurrentLanguage();
    return translations[currentLang]?.[key] || translations['en'][key] || key;
};