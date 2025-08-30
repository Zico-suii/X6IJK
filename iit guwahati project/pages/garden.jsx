import React, { useState, useEffect } from 'react';
import { Plant } from '@/entities/Plant';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Search, X } from 'lucide-react';
import PlantCard from '../components/mygarden/PlantCard';
import { Input } from '@/components/ui/input';

export default function MyGarden() {
    const [plants, setPlants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPlants = async () => {
            setIsLoading(true);
            try {
                const userPlants = await Plant.list('-created_date');
                setPlants(userPlants);
            } catch (error) {
                console.error("Failed to fetch plants:", error);
            }
            setIsLoading(false);
        };
        fetchPlants();
    }, []);

    const filteredPlants = plants.filter(plant => 
        plant.common_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plant.species_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-white">My Digital Greenhouse</h1>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input 
                        type="text"
                        placeholder="Search your plants..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#1A1A1A] border-gray-700 pl-10 rounded-full focus:ring-[#00FF7F] focus:border-[#00FF7F]"
                    />
                    {searchTerm && (
                        <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                            <X className="w-5 h-5 text-gray-500 hover:text-white"/>
                        </button>
                    )}
                </div>
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader2 className="w-12 h-12 text-[#00FF7F] animate-spin" />
                </div>
            ) : (
                <AnimatePresence>
                    {filteredPlants.length > 0 ? (
  <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {filteredPlants.map((plant, index) => (
                                <PlantCard key={plant.id} plant={plant} index={index} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-16"
                        >
                            <h2 className="text-2xl font-semibold text-white">Your Greenhouse is Empty</h2>
                            <p className="text-gray-400 mt-2">Start by scanning a new plant to add it to your collection.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
}