import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { HeartPulse, ShieldCheck, ShieldAlert } from 'lucide-react';

const healthMeta = {
    "Healthy": { icon: ShieldCheck, color: "bg-green-500/20 text-green-400 border-green-500/30" },
    "Needs Attention": { icon: ShieldAlert, color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
    "Diseased": { icon: HeartPulse, color: "bg-red-500/20 text-red-400 border-red-500/30" },
};

export default function PlantCard({ plant, index }) {
    const HealthIcon = healthMeta[plant.health_status]?.icon || ShieldAlert;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="bg-[#1A1A1A] border border-gray-800 rounded-xl overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-transform duration-300"
        >
            <div className="relative h-48">
                <img src={plant.image_url} alt={plant.common_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-white truncate">{plant.common_name}</h3>
                <p className="text-sm text-gray-500 italic truncate">{plant.species_name}</p>
                <div className="mt-3">
                     <Badge className={`flex items-center gap-2 w-fit ${healthMeta[plant.health_status]?.color}`}>
                        <HealthIcon className="w-4 h-4" />
                        <span>{plant.health_status}</span>
                    </Badge>
                </div>
            </div>
        </motion.div>
    );
}