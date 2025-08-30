import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Home, ScanLine, Leaf, Bot, Sparkles, BookOpen, Languages } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', icon: Home, url: createPageUrl('Dashboard') },
        { name: 'MyGarden', icon: Leaf, url: createPageUrl('MyGarden') },
        { name: 'AI Assistant', icon: Bot, url: createPageUrl('AI_Assistant') },
        { name: 'Features', icon: Sparkles, url: createPageUrl('Features') },
        { name: 'Learn More', icon: BookOpen, url: createPageUrl('LearnMore') },
        { name: 'Language', icon: Languages, url: createPageUrl('Language') },
    ];

    return (
        <div className="min-h-screen bg-[#121212] text-gray-200 font-sans flex flex-col md:flex-row">
            {/* Styles */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&display=swap');
                body {
                    font-family: 'Poppins', 'Noto Sans Bengali', 'Noto Sans Devanagari', sans-serif;
                }
                .glow {
                    text-shadow: 0 0 8px rgba(0, 255, 127, 0.7);
                }
                .nav-item-active {
                    background-color: rgba(0, 255, 127, 0.1);
                    color: #00FF7F;
                    border-left: 3px solid #00FF7F;
                }
                .nav-item:hover {
                    background-color: rgba(255, 255, 255, 0.05);
                }
            `}</style>
            
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-[#1A1A1A] border-r border-gray-800">
                <div className="p-6 flex items-center gap-3 border-b border-gray-800">
                    <ScanLine className="w-8 h-8 text-[#00FF7F] glow" />
                    <h1 className="text-xl font-bold text-white">Green Guardian<span className="text-[#00FF7F]">.AI</span></h1>
                </div>
                <nav className="flex-1 p-4">
                    <ul>
                        {navItems.map(item => (
                            <li key={item.name}>
                                <Link 
                                    to={item.url} 
                                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 nav-item ${location.pathname === item.url ? 'nav-item-active' : 'text-gray-400'}`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                 <div className="p-4 border-t border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                            <span className="font-bold text-[#00FF7F]">U</span>
                        </div>
                        <div>
                            <p className="font-semibold text-white">User</p>
                            <p className="text-xs text-gray-500">Plant Enthusiast</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Bottom Bar */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-gray-800 flex justify-around p-1 z-50 overflow-x-auto">
                {navItems.map(item => (
                     <Link 
                        key={item.name}
                        to={item.url} 
                        className={`flex flex-col items-center justify-center p-2 rounded-lg w-14 transition-colors flex-shrink-0 ${location.pathname === item.url ? 'text-[#00FF7F]' : 'text-gray-400'}`}
                     >
                        <item.icon className="w-5 h-5" />
                        <span className="text-xs mt-1 text-center leading-tight">{item.name}</span>
                    </Link>
                ))}
            </nav>

            <main className="flex-1 overflow-auto pb-20 md:pb-0">
                {children}
            </main>
        </div>
    );
}