import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Save, RefreshCw, HeartPulse, ShieldCheck, ShieldAlert, Leaf, Droplets, Sun, Wind } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const healthMeta = {
    "Healthy": { icon: ShieldCheck, color: "bg-green-500/20 text-green-400 border-green-500/30" },
    "Needs Attention": { icon: ShieldAlert, color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
    "Diseased": { icon: HeartPulse, color: "bg-red-500/20 text-red-400 border-red-500/30" },
};

const careTipIcons = {
    "sunlight": <Sun className="w-4 h-4 mr-2 text-yellow-400"/>,
    "water": <Droplets className="w-4 h-4 mr-2 text-blue-400"/>,
    "soil": <Leaf className="w-4 h-4 mr-2 text-orange-400"/>,
    "fertilizer": <Wind className="w-4 h-4 mr-2 text-purple-400"/>,
};

const getIconForTip = (tip) => {
    const lowerTip = tip.toLowerCase();
    for (const key in careTipIcons) {
        if (lowerTip.includes(key)) {
            return careTipIcons[key];
        }
    }
    return <Leaf className="w-4 h-4 mr-2 text-gray-400"/>;
};

export default function AnalysisResult({ analysis, onSave, onRetry, error }) {
    const HealthIcon = healthMeta[analysis.health_status]?.icon || ShieldAlert;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div 
            className="max-w-4xl mx-auto p-4 md:p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-white">Analysis Complete</h1>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={onRetry} className="bg-transparent border-gray-600 hover:bg-gray-800 hover:text-white">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Scan Another
                    </Button>
                    <Button onClick={onSave} className="bg-[#00FF7F] text-black hover:bg-white">
                        <Save className="w-4 h-4 mr-2" />
                        Save to Garden
                    </Button>
                </div>
            </motion.div>

             {error && (
                <Alert variant="destructive" className="mb-6 bg-red-900/50 border-red-500/50 text-red-300">
                    <AlertCircle className="h-4 w-4 !text-red-300" />
                    <AlertTitle>Save Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-4">
                        <img src={analysis.image_url} alt={analysis.common_name} className="w-full h-auto rounded-lg object-cover aspect-square" />
                    </div>
                     <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-5">
                        <h2 className="text-xl font-bold text-white">{analysis.common_name}</h2>
                        <p className="text-md text-gray-400 italic">{analysis.species_name}</p>
                        <p className="text-gray-300 mt-3">{analysis.description}</p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-white mb-3">Health Status</h3>
                         <Badge className={`flex items-center gap-2 w-fit text-lg py-2 px-4 ${healthMeta[analysis.health_status]?.color}`}>
                            <HealthIcon className="w-5 h-5" />
                            <span>{analysis.health_status}</span>
                        </Badge>
                    </div>

                    <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-white mb-3">Diagnostics</h3>
                        <ul className="space-y-2">
                            {analysis.health_analysis.issues.map((issue, i) => (
                                <li key={i} className="text-gray-300">
                                    <span className="font-semibold text-white">{issue.issue}:</span> {issue.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-white mb-3">Recommendations</h3>
                         <ul className="space-y-2 list-disc list-inside">
                            {analysis.health_analysis.recommendations.map((rec, i) => (
                                <li key={i} className="text-gray-300">{rec}</li>
                            ))}
                        </ul>
                    </div>

                     <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-white mb-3">General Care Tips</h3>
                        <ul className="space-y-3">
                            {analysis.care_tips.map((tip, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    {getIconForTip(tip)} {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}