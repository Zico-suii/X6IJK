import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, HeartPulse, Bot, Leaf } from 'lucide-react';
import FeatureCard from '../components/features/FeatureCard';

const featuresData = [
    {
        icon: ScanSearch,
        title: "AI Plant Identification",
        description: "Upload a photo and our advanced AI will instantly identify the plant species with remarkable accuracy.",
    },
    {
        icon: HeartPulse,
        title: "Health Diagnostics",
        description: "Our system analyzes your plant for signs of disease, pests, or nutrient deficiencies and provides a detailed health report.",
    },
    {
        icon: Bot,
        title: "AI Gardening Assistant",
        description: "Chat with our knowledgeable AI assistant to get answers to all your gardening questions, from watering schedules to pest control.",
    },
    {
        icon: Leaf,
        title: "Digital Greenhouse",
        description: "Keep a digital record of all your plants. Track their health, view their history, and build your personal collection.",
    },
];

export default function FeaturesPage() {
    return (
        <div className="p-4 md:p-8 bg-grid-pattern min-h-full">
            <style jsx>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(rgba(0, 255, 127, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 127, 0.05) 1px, transparent 1px);
                    background-size: 30px 30px;
                    background-position: center;
                }
            `}</style>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white">App <span className="text-[#00FF7F] glow">Features</span></h1>
                <p className="text-lg text-gray-400 mt-2">Discover the powerful tools at your disposal.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {featuresData.map((feature, index) => (
                    <FeatureCard 
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}