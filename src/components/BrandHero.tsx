import { useState } from 'react';
import { Sparkles, Shield, Play, Pause, Film, Music, Eye, ArrowRight, Award, Compass, Sun, Moon, Palette } from 'lucide-react';
import { BRAND_MANIFESTO, BRAND_PILLARS } from '../data/mockData';

interface BrandHeroProps {
  onExploreYouTube: () => void;
  onExploreRoutes: () => void;
  onOpenImageLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export default function BrandHero({ onExploreYouTube, onExploreRoutes, onOpenImageLightbox }: BrandHeroProps) {
  const [isPlayingManifesto, setIsPlayingManifesto] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [activePillar, setActivePillar] = useState<'golden_pitch' | 'passion_field'>('golden_pitch');

  const handleManifestoPlay = () => {
    if (isPlayingManifesto) {
      setIsPlayingManifesto(false);
    } else {
      setIsPlayingManifesto(true);
      setCurrentLineIndex(0);
      const interval = setInterval(() => {
        setCurrentLineIndex((prev) => {
          if (prev >= BRAND_MANIFESTO.textLines.length - 1) {
            clearInterval(interval);
            setIsPlayingManifesto(false);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);
    }
  };

  const selectedPillar = BRAND_PILLARS.find(p => p.id === activePillar) || BRAND_PILLARS[0];

  return (
    <div id="brand-hero-container" className="space-y-8 py-2">
      
      {/* Top Bento Grid Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Bento Card 1 (Large 8-col): Hero Image & Narrative */}
        <div className="lg:col-span-8 bg-[#1C1917] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[440px]">
          <div className="absolute inset-0 z-0 opacity-45 hover:opacity-55 transition-opacity">
            <img
              src="/src/assets/images/brand_identity_1787943785805.jpg"
              alt="Andalucía Never Just a Match Brand Identity"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917] via-[#1C1917]/85 to-transparent" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D97706]/20 to-transparent" />
          </div>

          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D97706] text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span className="text-white">Estrategia Audiovisual · Ciclo 2027–2031</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-tight">
              ANDALUCÍA. <br />
              <span className="italic font-light text-[#D97706]">
                NEVER JUST A MATCH.
              </span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              El Mundial concentra el foco en La Cartuja. Este proyecto es la política pública y el canal propio para conectar y redistribuir a millones de visitantes por las <strong className="text-white font-semibold">8 provincias andaluzas</strong>.
            </p>
          </div>

          <div className="relative z-10 pt-6 flex flex-wrap items-center gap-3">
            <button
              id="hero-btn-youtube"
              onClick={onExploreYouTube}
              className="px-6 py-3 rounded-full bg-[#D97706] hover:bg-[#b45309] text-white font-bold text-xs shadow-lg shadow-[#D97706]/30 transition-all flex items-center gap-2 active:scale-95"
            >
              <Film className="w-4 h-4" />
              <span>Ver Canal YouTube & Franquicias</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              id="hero-btn-routes"
              onClick={onExploreRoutes}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all font-bold text-xs flex items-center gap-2 backdrop-blur-md"
            >
              <Compass className="w-4 h-4 text-[#D97706]" />
              <span>Explorar las 4 Rutas</span>
            </button>

            <button
              onClick={() => onOpenImageLightbox('/src/assets/images/brand_identity_1787943785805.jpg', 'Identidad de Marca Oficial', 'Manual de marca y dirección de arte para "Andalucía - Never Just a Match"')}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white border border-white/10 transition-colors text-xs flex items-center gap-1.5 backdrop-blur-sm"
              title="Ver Artwork en Alta Resolución"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bento Card 2 (4-col): Esencia Cromática / Visual Identity Palette */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="bg-[#FAF9F6] text-stone-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-stone-200">
                Identidad Visual
              </span>
              <Palette className="w-4 h-4 text-[#D97706]" />
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-[#2D2926] mb-1.5">
              Esencia Cromática
            </h2>
            <p className="text-xs text-stone-500 leading-relaxed">
              Inspirada en el albero de las plazas, el verde olivar de las sierras, la cal pura y la noche del sur.
            </p>
          </div>

          {/* Color Swatch Bars */}
          <div className="space-y-2 mt-6">
            <div className="grid grid-cols-2 gap-2">
              <div className="h-14 bg-[#D97706] rounded-2xl flex flex-col justify-end p-2 text-white shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">Albero Dorada</span>
                <span className="text-[9px] font-mono opacity-75">#D97706</span>
              </div>
              <div className="h-14 bg-[#3F6212] rounded-2xl flex flex-col justify-end p-2 text-white shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">Verde Olivo</span>
                <span className="text-[9px] font-mono opacity-75">#3F6212</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="h-14 bg-[#F5F5F0] border border-stone-200 rounded-2xl flex flex-col justify-end p-2 text-stone-700">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">Blanco de Cal</span>
                <span className="text-[9px] font-mono text-stone-400">#F5F5F0</span>
              </div>
              <div className="h-14 bg-[#1C1917] rounded-2xl flex flex-col justify-end p-2 text-white shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">Noche Andaluza</span>
                <span className="text-[9px] font-mono opacity-75">#1C1917</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Strategic Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Bento Tile 3 (7-col): The 75-Second Brand Manifesto Card */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
          
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D97706] block">
                Manifiesto de Marca Oficial
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2926]">
                "Durante 90 minutos mirarán al sur..."
              </h3>
            </div>

            <button
              id="btn-toggle-manifesto-reader"
              onClick={handleManifestoPlay}
              className={`px-4 py-2.5 rounded-full flex items-center gap-2 text-xs font-bold transition-all shadow-sm shrink-0 ${
                isPlayingManifesto
                  ? 'bg-[#D97706] text-white shadow-md shadow-[#D97706]/30'
                  : 'bg-[#FAF9F6] text-stone-800 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {isPlayingManifesto ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isPlayingManifesto ? 'Pausar' : 'Locución (75s)'}</span>
            </button>
          </div>

          {/* Manifesto Lines Reader */}
          <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-stone-200/80 space-y-3">
            {BRAND_MANIFESTO.textLines.map((line, idx) => {
              const isCurrent = isPlayingManifesto && currentLineIndex === idx;
              return (
                <p
                  key={idx}
                  className={`text-sm sm:text-base transition-all duration-500 ${
                    isCurrent
                      ? 'text-[#D97706] font-serif font-bold pl-3 border-l-3 border-[#D97706] translate-x-1'
                      : 'text-stone-600 font-light'
                  }`}
                >
                  {line}
                </p>
              );
            })}
          </div>

          {/* Production Specs Bento Sub-Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 text-xs space-y-1">
              <span className="text-[#3F6212] font-bold flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5" />
                Dirección de Cámara
              </span>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                {BRAND_MANIFESTO.cameraSpec}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 text-xs space-y-1">
              <span className="text-[#D97706] font-bold flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5" />
                Identidad Sonora
              </span>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                {BRAND_MANIFESTO.soundSpec}
              </p>
            </div>
          </div>

        </div>

        {/* Bento Tile 4 & 5 (5-col Stack): Strict Rights Rule & Two Pillars */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          
          {/* Bento Tile 4: Strict Rights Perimeter (Ochre Accent Card) */}
          <div className="bg-[#D97706] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Regla de Derechos
                </span>
              </div>
              <span className="text-3xl font-serif italic opacity-40">"</span>
            </div>

            <div className="space-y-2">
              <h4 className="text-3xl sm:text-4xl font-serif font-black tracking-tight leading-none">
                0% Torneo · 100% Territorio
              </h4>
              <p className="text-white/90 text-xs leading-relaxed font-light">
                El canal no depende de licencias oficiales. Pone el foco íntegro en el <strong className="font-semibold text-white">patrimonio, gastronomía, naturaleza y cultura andaluza</strong>. Un activo 100% en propiedad pública de Andalucía con vigencia más allá de 2030.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-between text-[11px] font-medium text-white/80">
              <span>Titularidad: Junta de Andalucía</span>
              <span className="font-bold">Legado Digital Permanente</span>
            </div>
          </div>

          {/* Bento Tile 5: The Two Pillars Interactive Switcher */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                  Estructura de Contenido
                </span>
                <h4 className="font-serif font-bold text-lg text-[#2D2926]">
                  Dos Pilares Estratégicos
                </h4>
              </div>

              {/* Tabs */}
              <div className="flex bg-[#FAF9F6] p-1 rounded-full border border-stone-200">
                <button
                  onClick={() => setActivePillar('golden_pitch')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                    activePillar === 'golden_pitch'
                      ? 'bg-[#1C1917] text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Sun className="w-3 h-3 text-[#D97706]" />
                  <span>The Golden Pitch</span>
                </button>
                <button
                  onClick={() => setActivePillar('passion_field')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                    activePillar === 'passion_field'
                      ? 'bg-[#D97706] text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Moon className="w-3 h-3 text-white" />
                  <span>Passion Field</span>
                </button>
              </div>
            </div>

            {/* Active Pillar Summary */}
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-[#D97706]">
                  {selectedPillar.sloganEn}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-200 text-stone-700 font-semibold">
                  {selectedPillar.audience.split('(')[0]}
                </span>
              </div>
              
              <h5 className="font-serif font-bold text-base text-[#2D2926]">
                "{selectedPillar.slogan}"
              </h5>
              
              <p className="text-xs text-stone-600 leading-relaxed">
                {selectedPillar.purpose}
              </p>
            </div>

            {/* Hook Example Badge */}
            <div className="p-3.5 rounded-2xl bg-[#3F6212]/10 border border-[#3F6212]/20 flex items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#3F6212] flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  <span>Pieza Gancho:</span>
                </span>
                <span className="font-semibold text-stone-800 block text-xs">
                  "{selectedPillar.hookExample.title}"
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#3F6212] font-bold shrink-0">4K HDR</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
