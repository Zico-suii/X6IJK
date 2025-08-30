import React from 'react';
import { motion } from 'framer-motion';
import { Dna } from 'lucide-react';

const LoadingText = "Analyzing plant DNA... Identifying species... Assessing health...";

export default function LoadingState() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <style jsx>{`
                .dna-strand {
                    filter: drop-shadow(0 0 10px #00FF7F);
                }
            `}</style>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                className="relative w-40 h-40 flex items-center justify-center"
            >
                <Dna className="w-24 h-24 text-[#00FF7F] dna-strand" />
                 <motion.div 
                    className="absolute inset-0 border-4 border-[#00FF7F]/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                 />
            </motion.div>
            <h2 className="text-2xl font-semibold text-white mt-8">Running Diagnostics</h2>
            <p className="text-gray-400 mt-2">
                {LoadingText.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.05, duration: 0.1 }}
                    >
                        {char}
                    </motion.span>
                ))}
            </p>
        </div>
    );
}