import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { InvokeLLM } from '@/integrations/Core';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import ChatMessage from '../components/assistant/ChatMessage';
import { getCurrentLanguage, t } from '../components/utils/translations';

const getLanguagePrompt = (language) => {
    const languageInstructions = {
        'hi': 'Always respond in Hindi (हिंदी). Use Devanagari script.',
        'bn': 'Always respond in Bengali (বাংলা). Use Bengali script.',
        'en': 'Always respond in English.'
    };
    
    return `You are Green Guardian's AI Assistant, a friendly and knowledgeable botanist. Answer the user's questions about plants, gardening, and plant care. Keep your answers concise, helpful, and formatted with markdown. ${languageInstructions[language] || languageInstructions['en']}`;
};

const getWelcomeMessage = (language) => {
    const messages = {
        'hi': 'नमस्ते! मैं आपका AI बागवानी सहायक हूँ। आज मैं आपकी और आपके पौधों की कैसे मदद कर सकता हूँ?',
        'bn': 'হ্যালো! আমি আপনার AI বাগান সহায়ক। আজ আমি আপনাকে এবং আপনার গাছপালাকে কীভাবে সাহায্য করতে পারি?',
        'en': "Hello! I'm your AI gardening assistant. How can I help you and your plants today?"
    };
    
    return messages[language] || messages['en'];
};

export default function AIAssistantPage() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const language = getCurrentLanguage();
        setCurrentLanguage(language);
        setMessages([
            { role: 'ai', content: getWelcomeMessage(language) }
        ]);
    }, []);

    useEffect(scrollToBottom, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await InvokeLLM({
                prompt: `${getLanguagePrompt(currentLanguage)}\n\nUser Question: ${input}`,
            });
            setMessages(prev => [...prev, { role: 'ai', content: response }]);
        } catch (error) {
            console.error("AI Assistant Error:", error);
            const errorMessage = currentLanguage === 'hi' ? 
                "क्षमा करें, मुझे एक त्रुटि का सामना करना पड़ा। कृपया पुनः प्रयास करें।" :
                currentLanguage === 'bn' ?
                "দুঃখিত, একটি ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।" :
                "Sorry, I encountered an error. Please try again.";
            setMessages(prev => [...prev, { role: 'ai', content: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    const getPlaceholder = () => {
        const placeholders = {
            'hi': 'अपने पौधों के बारे में पूछें...',
            'bn': 'আপনার গাছপালা সম্পর্কে জিজ্ঞাসা করুন...',
            'en': 'Ask about your plants...'
        };
        return placeholders[currentLanguage] || placeholders['en'];
    };

    return (
        <div className="flex flex-col h-full bg-[#121212]">
            <header className="p-4 border-b border-gray-800 text-center">
                <h1 className="text-2xl font-bold text-white">{t('aiAssistantTitle')}</h1>
            </header>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <ChatMessage key={index} role={msg.role} content={msg.content} />
                ))}
                {isLoading && <ChatMessage role="ai" content="..." isLoading={true} />}
                <div ref={messagesEndRef} />
            </div>

            <footer className="p-4 bg-[#1A1A1A] border-t border-gray-800">
                <div className="relative max-w-3xl mx-auto">
                    <Input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder={getPlaceholder()}
                        disabled={isLoading}
                        className="w-full bg-[#242424] border-gray-700 rounded-full pl-4 pr-24 h-12 text-lg focus:ring-[#00FF7F] focus:border-[#00FF7F]"
                    />
                    <Button 
                        onClick={handleSend}
                        disabled={isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00FF7F] text-black h-9 w-20 rounded-full hover:bg-white"
                    >
                        {isLoading ? '...' : <Send className="w-5 h-5" />}
                    </Button>
                </div>
            </footer>
        </div>
    );
}