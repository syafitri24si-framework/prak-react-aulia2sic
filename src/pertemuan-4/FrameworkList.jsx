import frameworkData from "./framework.json";
import { useState, useEffect } from "react";

export default function FrameworkList() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated Background Particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/10 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Mouse Follower Glow */}
            <div 
                className="fixed w-96 h-96 rounded-full bg-purple-500/20 blur-3xl pointer-events-none transition-all duration-300"
                style={{
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192,
                }}
            />

            {/* Header Section */}
            <div className="relative text-center py-16 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent skew-y-3"></div>
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x relative z-10">
                    Framework Galaxy
                </h1>
                <p className="text-gray-300 mt-4 text-lg animate-pulse-slow">✨ Pilih senjatamu untuk bertarung di dunia coding ✨</p>
            </div>

            {/* Cards Grid */}
            <div className="relative container mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {frameworkData.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative animate-float-in"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Glow Effect Behind Card */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            
                            {/* Main Card */}
                            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transform transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl overflow-hidden">
                                
                                {/* Card Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                
                                {/* Animated Border Gradient */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-border-spin"></div>
                                </div>

                                {/* Card Content */}
                                <div className="relative z-10">
                                    {/* Icon with Animation */}
                                    <div className="mb-4 text-5xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-bounce-custom">
                                        {getFrameworkIcon(item.name)}
                                    </div>

                                    {/* Title with Underline Animation */}
                                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                                        {item.name}
                                    </h2>
                                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-4 transform transition-all duration-500 group-hover:w-32 group-hover:h-1.5"></div>

                                    {/* Description */}
                                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>

                                    {/* Details with Hover Effect */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-300 group-hover:translate-x-1 transition-transform duration-300">
                                            <span className="text-cyan-400">🏢</span>
                                            <span>{item.details.developer}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300">
                                            <span className="text-pink-400">📅</span>
                                            <span>{item.details.releaseYear}</span>
                                        </div>
                                    </div>

                                    {/* Visit Button with Particle Effect */}
                                    <a
                                        href={item.details.officialWebsite}
                                        target="_blank"
                                        className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium overflow-hidden group/btn transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="relative z-10">Visit Website</span>
                                        <span className="relative z-10 transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                                        
                                        {/* Button Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                                        
                                        {/* Button Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 blur transition-opacity duration-300"></div>
                                    </a>
                                </div>

                                {/* Corner Decorations */}
                                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-pink-400/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes border-spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes float-in {
                    from {
                        opacity: 0;
                        transform: translateY(100px) rotate(-5deg);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) rotate(0deg);
                    }
                }
                
                @keyframes bounce-custom {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(10deg); }
                }
                
                .animate-float {
                    animation: float linear infinite;
                }
                
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
                
                .animate-border-spin {
                    animation: border-spin 3s linear infinite;
                }
                
                .animate-float-in {
                    animation: float-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                    opacity: 0;
                }
                
                .animate-bounce-custom {
                    animation: bounce-custom 0.5s ease-in-out;
                }
                
                .animate-pulse-slow {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}

// Helper function untuk icon berdasarkan framework name
function getFrameworkIcon(name) {
    const icons = {
        'React': '⚛️',
        'Vue': '💚',
        'Angular': '🅰️',
        'Svelte': '💜',
        'Next.js': '▲',
        'Nuxt': '💚',
        'Express': '🚂',
        'Django': '🎸',
        'Laravel': '🛡️',
        'Spring': '🍃',
        'Flask': '🌶️',
        'FastAPI': '⚡'
    };
    return icons[name] || '🚀';
}