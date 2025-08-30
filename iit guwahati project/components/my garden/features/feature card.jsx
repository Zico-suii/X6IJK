import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group transition-all duration-300 hover:border-[#00FF7F]/50 hover:-translate-y-2"
        >
            <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-gradient-to-br from-[#00FF7F]/20 to-transparent rounded-lg">
                     <Icon className="w-8 h-8 text-[#00FF7F]" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}