export default function TailwinddCSS() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 
                        px-8 py-12 space-y-8 text-white overflow-hidden relative">
            
            {/* Animated Background Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-ping"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 text-center mb-16">
                <div className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-purple-500/20">
                    <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                                   bg-clip-text text-transparent drop-shadow-2xl leading-tight">
                        🌌 Tailwind Galaxy
                    </h1>
                </div>
                <p className="mt-6 text-xl text-slate-300 font-light tracking-wide">
                    Premium UI Components Collection
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                <Spacing />
                <Typography />
                <BorderRadius />
                <BackgroundColors />
                <FlexboxGrid />
                <ShadowEffects />
            </div>

            {/* Floating Orb */}
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-blue-500/30 
                           rounded-full blur-xl animate-float opacity-60"></div>
        </div>
    );
}

function Spacing() {
    return (
        <div className="group bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-xl 
                        p-8 rounded-3xl shadow-2xl shadow-purple-500/25 border border-white/10 
                        hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-500 
                        hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                           rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                    📏
                </div>
                <h2 className="text-2xl font-black text-transparent bg-clip-text 
                              bg-gradient-to-r from-blue-400 to-purple-400 mb-3">
                    Glassmorphism
                </h2>
                <p className="text-slate-300 leading-relaxed">
                    Efek kaca transparan dengan backdrop blur yang elegan ✨
                </p>
            </div>
        </div>
    );
}

function Typography() {
    return (
        <div className="group bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-xl 
                        p-8 rounded-3xl shadow-2xl shadow-indigo-500/30 border border-white/10 
                        hover:shadow-indigo-500/60 hover:-translate-y-2 transition-all duration-500 
                        hover:from-indigo-800/90 hover:to-purple-800/90">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 
                           rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
                    🔤
                </div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-blue-400 
                              bg-clip-text text-transparent mb-4 leading-tight">
                    Typography
                </h1>
                <p className="text-slate-300 leading-relaxed">
                    Tipografi futuristik dengan gradient elegan 🌌
                </p>
            </div>
        </div>
    );
}

function BorderRadius() {
    return (
        <div className="group bg-gradient-to-br from-slate-800/50 to-pink-900/50 backdrop-blur-xl 
                        p-8 rounded-3xl shadow-2xl shadow-pink-500/25 border border-white/10 
                        hover:shadow-pink-500/50 hover:-translate-y-2 transition-all duration-500 
                        hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 
                           rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-pink-500/30">
                    ⭕
                </div>
                <h3 className="text-2xl font-black text-transparent bg-clip-text 
                              bg-gradient-to-r from-pink-400 to-purple-400 mb-3">
                    Border Radius
                </h3>
                <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                                   px-8 py-3 rounded-2xl font-bold shadow-xl shadow-pink-500/40 
                                   hover:scale-105 hover:shadow-pink-500/60 transform transition-all duration-300 
                                   text-sm tracking-wide">
                    Klik Saya 💫
                </button>
            </div>
        </div>
    );
}

function BackgroundColors() {
    return (
        <div className="group bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-slate-900/80 
                        backdrop-blur-xl p-8 rounded-3xl shadow-2xl shadow-blue-500/30 border border-white/10 
                        hover:shadow-blue-500/60 hover:-translate-y-2 transition-all duration-500 
                        hover:from-purple-800/90 hover:via-indigo-800/90 hover:to-slate-800/90">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 
                           rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                    🎨
                </div>
                <h3 className="text-2xl font-black text-transparent bg-clip-text 
                              bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mb-3">
                    Galaxy Colors
                </h3>
                <p className="text-slate-300 leading-relaxed">
                    Palet warna malam elegan dengan transisi halus 🌠
                </p>
            </div>
        </div>
    );
}

function FlexboxGrid() {
    return (
        <div className="group md:col-span-2 bg-gradient-to-br from-slate-800/50 to-emerald-900/50 
                        backdrop-blur-xl p-8 rounded-3xl shadow-2xl shadow-emerald-500/25 border border-white/10 
                        hover:shadow-emerald-500/50 hover:-translate-y-2 transition-all duration-500 
                        hover:bg-gradient-to-br hover:from-emerald-500/10 hover:to-teal-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 
                           rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                    📐
                </div>
                <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center 
                               gap-6 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <h1 className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 
                                  bg-clip-text text-transparent">
                        MyWebsite
                    </h1>
                    <ul className="flex flex-wrap gap-4 text-slate-300">
                        <li><a href="#" className="px-4 py-2 rounded-xl hover:bg-white/10 hover:text-white 
                                                 transition-all duration-300 font-medium">Home</a></li>
                        <li><a href="#" className="px-4 py-2 rounded-xl hover:bg-white/10 hover:text-white 
                                                 transition-all duration-300 font-medium">About</a></li>
                        <li><a href="#" className="px-4 py-2 rounded-xl hover:bg-white/10 hover:text-white 
                                                 transition-all duration-300 font-medium">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

function ShadowEffects() {
    return (
        <div className="group bg-gradient-to-br from-slate-800/50 to-orange-900/50 backdrop-blur-xl 
                        p-8 rounded-3xl shadow-2xl shadow-orange-500/25 border border-white/10 
                        hover:shadow-2xl hover:shadow-orange-500/60 hover:-translate-y-2 
                        hover:scale-[1.02] transition-all duration-700 
                        hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-amber-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 
                           rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                    ✨
                </div>
                <h3 className="text-2xl font-black text-transparent bg-clip-text 
                              bg-gradient-to-r from-orange-400 to-amber-400 mb-3">
                    Shadow Effects
                </h3>
                <p className="text-slate-300 leading-relaxed">
                    Efek glow dramatis dengan hover interaktif yang memukau
                </p>
            </div>
        </div>
    );
}

/* Custom Animation */
const styles = `
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
.animate-float {
    animation: float 6s ease-in-out infinite;
}
`;

// Tambahkan ini di _app.js atau layout utama
// <style jsx global>{styles}</style>