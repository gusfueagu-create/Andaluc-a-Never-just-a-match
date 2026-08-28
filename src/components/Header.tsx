import { useState } from 'react';
import { Compass, Film, Tv, MapPin, Users, Sparkles, Volume2, VolumeX, Globe } from 'lucide-react';

interface HeaderProps {
  activeTab: 'brand' | 'youtube' | 'routes' | 'eleven' | 'planner';
  setActiveTab: (tab: 'brand' | 'youtube' | 'routes' | 'eleven' | 'planner') => void;
  onOpenPlanner: () => void;
  savedStopsCount: number;
}

export default function Header({ activeTab, setActiveTab, onOpenPlanner, savedStopsCount }: HeaderProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Slogan */}
          <div 
            id="brand-logo-button"
            onClick={() => setActiveTab('brand')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#D97706] flex items-center justify-center shadow-md shadow-amber-900/10 text-white group-hover:scale-105 transition-transform">
              <span className="font-serif font-bold italic text-2xl">A</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-xl tracking-tight text-[#2D2926]">
                  Andalucía <span className="text-[#D97706]">•</span> 2030
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20">
                  Ecosistema
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-sans tracking-wide uppercase font-semibold">
                Never Just a Match
              </p>
            </div>
          </div>

          {/* Navigation tabs in Bento Pill Style */}
          <nav id="desktop-nav-tabs" className="hidden lg:flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-stone-200 shadow-sm">
            <button
              id="tab-brand"
              onClick={() => setActiveTab('brand')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                activeTab === 'brand'
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Estrategia & Marca</span>
            </button>

            <button
              id="tab-youtube"
              onClick={() => setActiveTab('youtube')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                activeTab === 'youtube'
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Tv className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Canal YouTube</span>
            </button>

            <button
              id="tab-routes"
              onClick={() => setActiveTab('routes')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                activeTab === 'routes'
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#3F6212]" />
              <span>Rutas & 8 Provincias</span>
            </button>

            <button
              id="tab-eleven"
              onClick={() => setActiveTab('eleven')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                activeTab === 'eleven'
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-[#D97706]" />
              <span>El Once Inicial</span>
            </button>

            <button
              id="tab-planner"
              onClick={() => setActiveTab('planner')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                activeTab === 'planner'
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-[#3F6212]" />
              <span>Pase del Viajero</span>
              {savedStopsCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#D97706] text-white text-[10px] font-black flex items-center justify-center ml-0.5">
                  {savedStopsCount}
                </span>
              )}
            </button>
          </nav>

          {/* Quick Actions & Sound Mood */}
          <div className="flex items-center gap-2.5">
            {/* Audio Ambience Toggle */}
            <button
              id="audio-ambience-toggle"
              onClick={toggleAudio}
              title="Ambiente sonoro: Bulerías & Atmósfera Andaluza"
              className={`p-2.5 rounded-full border text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                isPlayingAudio 
                  ? 'bg-[#D97706]/15 border-[#D97706] text-[#D97706] font-bold' 
                  : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4 text-[#D97706] animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline text-[11px] font-semibold">
                {isPlayingAudio ? 'Compás Activo' : 'Audio Bulerías'}
              </span>
            </button>

            {/* Language Switch */}
            <button
              id="lang-toggle-btn"
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="p-2.5 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-stone-950 text-xs flex items-center gap-1 shadow-sm font-mono font-bold"
            >
              <Globe className="w-3.5 h-3.5 text-[#D97706]" />
              <span className="text-[11px]">{lang}</span>
            </button>

            {/* Plan Itinerary CTA in Bento Ochre Style */}
            <button
              id="cta-open-planner-btn"
              onClick={onOpenPlanner}
              className="px-5 py-2.5 rounded-full bg-[#D97706] hover:bg-[#b45309] text-white font-bold text-xs shadow-md shadow-[#D97706]/20 transition-all flex items-center gap-2 active:scale-95"
            >
              <Compass className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Generar Pase</span>
              <span className="sm:hidden">Pase</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation sub-bar */}
        <div className="lg:hidden flex items-center justify-between overflow-x-auto py-2.5 gap-2 border-t border-stone-200 no-scrollbar">
          <button
            onClick={() => setActiveTab('brand')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
              activeTab === 'brand' ? 'bg-[#1C1917] text-white' : 'bg-white text-stone-700 border border-stone-200'
            }`}
          >
            Marca
          </button>
          <button
            onClick={() => setActiveTab('youtube')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
              activeTab === 'youtube' ? 'bg-[#1C1917] text-white' : 'bg-white text-stone-700 border border-stone-200'
            }`}
          >
            Canal YouTube
          </button>
          <button
            onClick={() => setActiveTab('routes')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
              activeTab === 'routes' ? 'bg-[#1C1917] text-white' : 'bg-white text-stone-700 border border-stone-200'
            }`}
          >
            Rutas 8 Provincias
          </button>
          <button
            onClick={() => setActiveTab('eleven')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
              activeTab === 'eleven' ? 'bg-[#1C1917] text-white' : 'bg-white text-stone-700 border border-stone-200'
            }`}
          >
            Once Inicial
          </button>
          <button
            onClick={() => setActiveTab('planner')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
              activeTab === 'planner' ? 'bg-[#1C1917] text-white' : 'bg-white text-stone-700 border border-stone-200'
            }`}
          >
            Pase {savedStopsCount > 0 ? `(${savedStopsCount})` : ''}
          </button>
        </div>
      </div>
    </header>
  );
}
