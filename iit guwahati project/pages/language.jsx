import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Globe } from 'lucide-react';
import { User } from '@/entities/User';

const languages = [
    {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        flag: '🇺🇸',
        description: 'Default language with full feature support'
    },
    {
        code: 'hi',
        name: 'Hindi',
        nativeName: 'हिंदी',
        flag: '🇮🇳',
        description: 'भारत की आधिकारिक भाषा में अपने पौधों की देखभाल करें'
    },
    {
        code: 'bn',
        name: 'Bengali',
        nativeName: 'বাংলা',
        flag: '🇧🇩',
        description: 'বাংলায় আপনার গাছপালার যত্ন নিন এবং শিখুন'
    }
];

export default function LanguagePage() {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Load saved language preference
        const savedLanguage = localStorage.getItem('greenGuardian_language') || 'en';
        setSelectedLanguage(savedLanguage);
    }, []);

    const handleLanguageChange = async (languageCode) => {
        setIsLoading(true);
        try {
            // Save to localStorage
            localStorage.setItem('greenGuardian_language', languageCode);
            setSelectedLanguage(languageCode);

            // Try to save to user data
            try {
                await User.updateMyUserData({ preferred_language: languageCode });
            } catch (err) {
                console.log('Could not save to user data, but language preference saved locally');
            }

            // Show success message briefly
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        } catch (error) {
            console.error('Failed to save language preference:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 md:p-8 min-h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <div className="flex justify-center mb-4">
                    <Globe className="w-16 h-16 text-[#00FF7F] glow" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">Choose Your <span className="text-[#00FF7F] glow">Language</span></h1>
                <p className="text-lg text-gray-400 mt-2">अपनी भाषा चुनें | আপনার ভাষা নির্বাচন করুন | Select your language</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
                <div className="grid gap-6">
                    {languages.map((language, index) => (
                        <motion.div
                            key={language.code}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card 
                                className={`cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                                    selectedLanguage === language.code 
                                        ? 'bg-[#00FF7F]/10 border-[#00FF7F] shadow-lg shadow-[#00FF7F]/20' 
                                        : 'bg-[#1A1A1A] border-gray-800 hover:border-gray-600'
                                }`}
                                onClick={() => handleLanguageChange(language.code)}
                            >
                                <CardHeader className="pb-2">
                                    <CardTitle className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="text-4xl">{language.flag}</span>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{language.nativeName}</h3>
                                                <p className="text-gray-400 font-normal">{language.name}</p>
                                            </div>
                                        </div>
                                        {selectedLanguage === language.code && (
                                            <div className="w-8 h-8 bg-[#00FF7F] rounded-full flex items-center justify-center">
                                                <Check className="w-5 h-5 text-black" />
                                            </div>
                                        )}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400">{language.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-8 text-center"
                >
                    <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Language Support</h3>
                        <p className="text-gray-400 text-sm">
                            The AI will respond in your selected language when analyzing plants and answering questions. 
                            Interface elements will be translated where possible.
                        </p>
                        {isLoading && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="mt-4 text-[#00FF7F] font-medium"
                            >
                                ✓ Language preference saved!
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}