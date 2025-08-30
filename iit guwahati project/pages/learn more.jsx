import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BrainCircuit, Telescope, FlaskConical } from 'lucide-react';

const faqData = [
    {
        question: "How does the AI identify plants?",
        answer: "Our app uses a sophisticated deep learning model trained on millions of plant images. When you upload a photo, the AI analyzes its unique visual features—like leaf shape, flower color, and texture—to match it against its vast database and determine the species.",
        icon: BrainCircuit,
    },
    {
        question: "What kind of health issues can it detect?",
        answer: "The AI is trained to recognize common plant ailments, including fungal infections (like powdery mildew), pest infestations (such as spider mites or aphids), and signs of nutrient deficiencies (like yellowing leaves, or chlorosis). It provides a confidence score for each potential issue.",
        icon: FlaskConical,
    },
    {
        question: "Is my data private?",
        answer: "Yes, your privacy is important. Uploaded images are used for analysis and can be saved to your private 'My Garden' collection. We do not share your personal data or images with third parties. Anonymous image data may be used to further train and improve our AI model.",
        icon: Telescope,
    }
];

export default function LearnMorePage() {
    return (
        <div className="p-4 md:p-8 min-h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white">Knowledge <span className="text-[#00FF7F] glow">Base</span></h1>
                <p className="text-lg text-gray-400 mt-2">Learn more about the technology behind Green Guardian.AI.</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="max-w-3xl mx-auto"
            >
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-[#1A1A1A] border border-gray-800 rounded-lg mb-4 px-4">
                            <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline">
                                <div className="flex items-center gap-4">
                                    <item.icon className="w-5 h-5 text-[#00FF7F]" />
                                    {item.question}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 text-base pt-2">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    );
}