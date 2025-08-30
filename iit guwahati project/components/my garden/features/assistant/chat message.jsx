import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ChatMessage({ role, content, isLoading }) {
    const isAI = role === 'ai';

    if (isLoading) {
        return (
            <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-[#00FF7F]/20 flex-shrink-0 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#00FF7F]" />
                </div>
                <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-3 max-w-xl">
                    <motion.div
                        className="flex gap-1"
                        initial="start"
                        animate="end"
                        variants={{
                            start: {},
                            end: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <motion.span variants={{start: {scale: 0}, end: {scale: 1}}} className="w-2 h-2 bg-gray-400 rounded-full" />
                        <motion.span variants={{start: {scale: 0}, end: {scale: 1}}} className="w-2 h-2 bg-gray-400 rounded-full" />
                        <motion.span variants={{start: {scale: 0}, end: {scale: 1}}} className="w-2 h-2 bg-gray-400 rounded-full" />
                    </motion.div>
                </div>
            </div>
        );
    }
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-3 ${!isAI && 'flex-row-reverse'}`}
        >
            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${isAI ? 'bg-[#00FF7F]/20' : 'bg-gray-700'}`}>
                {isAI ? <Bot className="w-5 h-5 text-[#00FF7F]" /> : <User className="w-5 h-5 text-gray-300" />}
            </div>
            <div className={`border rounded-lg p-3 max-w-xl ${isAI ? 'bg-[#1A1A1A] border-gray-800' : 'bg-[#2A2A2A] border-gray-700'}`}>
                <ReactMarkdown className="prose prose-invert prose-sm max-w-none text-gray-200"
                    components={{
                        p: ({node, ...props}) => <p className="my-2" {...props} />,
                        ul: ({node, ...props}) => <ul className="my-2 list-disc list-inside" {...props} />,
                        li: ({node, ...props}) => <li className="my-1" {...props} />,
                    }}
                >{content}</ReactMarkdown>
            </div>
        </motion.div>
    );
}