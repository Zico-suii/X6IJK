import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Scan, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCurrentLanguage, t } from '../components/utils/translations';

export default function Dashboard() {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    useEffect(() => {
        setCurrentLanguage(getCurrentLanguage());
    }, []);

    const getWelcomeText = () => {
        const texts = {
            'hi': {
                title: 'ग्रीन गार्जियन में आपका स्वागत है',
                subtitle: 'आपका व्यक्तिगत AI पौधा विशेषज्ञ। प्रजातियों की पहचान करें, स्वास्थ्य संबंधी समस्याओं का निदान करें, और अपने हरे दोस्तों को फलते-फूलते रखें।',
                buttonText: 'अपने पौधे को स्कैन करें'
            },
            'bn': {
                title: 'গ্রিন গার্ডিয়ানে স্বাগতম',
                subtitle: 'আপনার ব্যক্তিগত AI উদ্ভিদ বিশেষজ্ঞ। প্রজাতি চিহ্নিত করুন, স্বাস্থ্য সমস্যা নির্ণয় করুন, এবং আপনার সবুজ বন্ধুদের সুস্থ রাখুন।',
                buttonText: 'আপনার গাছ স্ক্যান করুন'
            },
            'en': {
                title: 'Welcome to Green Guardian',
                subtitle: 'Your personal AI plant expert. Identify species, diagnose health issues, and keep your green friends thriving.',
                buttonText: 'Scan Your Plant'
            }
        };
        
        return texts[currentLanguage] || texts['en'];
    };

    const welcomeText = getWelcomeText();

    return (
        <div className="h-full flex items-center justify-center p-4 bg-grid-pattern">
             <style jsx>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(rgba(0, 255, 127, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 127, 0.05) 1px, transparent 1px);
                    background-size: 30px 30px;
                    background-position: center;
                }
                .card-glow {
                    box-shadow: 0 0 40px rgba(0, 255, 127, 0.1), 0 0 10px rgba(0, 255, 127, 0.1);
                }
                .btn-glow:hover {
                    box-shadow: 0 0 20px rgba(0, 255, 127, 0.5);
                }
            `}</style>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center bg-[#1A1A1A]/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 md:p-16 max-w-3xl card-glow"
            >
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#00FF7F]/20 to-transparent rounded-full flex items-center justify-center"
                >
                    <Leaf className="w-12 h-12 text-[#00FF7F] glow"/>
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {welcomeText.title}
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                    {welcomeText.subtitle}
                </p>

                <Link to={createPageUrl("Analysis")}>
                    <Button 
                        size="lg" 
                        className="bg-[#00FF7F] text-black font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 btn-glow hover:bg-white"
                    >
                        <Scan className="w-6 h-6 mr-3" />
                        {welcomeText.buttonText}
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}