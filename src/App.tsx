import { useState } from 'react';
import Header from './components/Header';
import BrandHero from './components/BrandHero';
import YouTubeHub from './components/YouTubeHub';
import InteractiveRoutes from './components/InteractiveRoutes';
import TacticalEleven from './components/TacticalEleven';
import TripPlannerModal from './components/TripPlannerModal';
import ImageGalleryModal from './components/ImageGalleryModal';
import { Sparkles, Compass, Tv, Users, MapPin, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'brand' | 'youtube' | 'routes' | 'eleven' | 'planner'>('brand');
  const [savedStops, setSavedStops] = useState<string[]>([
    'cine-sevilla-plaza-espana',
    'gastro-cordoba-noor',
    'legado-granada-alhambra'
  ]);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: ''
  });

  const handleToggleSaveStop = (stopId: string) => {
    if (savedStops.includes(stopId)) {
      setSavedStops(savedStops.filter(id => id !== stopId));
    } else {
      setSavedStops([...savedStops, stopId]);
    }
  };

  const handleOpenLightbox = (imageUrl: string, title: string, caption: string) => {
    setLightboxData({
      isOpen: true,
      imageUrl,
      title,
      caption
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData({
      isOpen: false,
      imageUrl: '',
      title: '',
      caption: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2D2926] flex flex-col font-sans selection:bg-[#D97706] selection:text-white">
      
      {/* Top Header with Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'planner') {
            setIsPlannerOpen(true);
          } else {
            setActiveTab(tab);
          }
        }}
        onOpenPlanner={() => setIsPlannerOpen(true)}
        savedStopsCount={savedStops.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'brand' && (
          <BrandHero
            onExploreYouTube={() => setActiveTab('youtube')}
            onExploreRoutes={() => setActiveTab('routes')}
            onOpenImageLightbox={handleOpenLightbox}
          />
        )}

        {activeTab === 'youtube' && (
          <YouTubeHub
            onOpenImageLightbox={handleOpenLightbox}
          />
        )}

        {activeTab === 'routes' && (
          <InteractiveRoutes
            savedStops={savedStops}
            onToggleSaveStop={handleToggleSaveStop}
            onOpenPlanner={() => setIsPlannerOpen(true)}
            onOpenImageLightbox={handleOpenLightbox}
          />
        )}

        {activeTab === 'eleven' && (
          <TacticalEleven />
        )}
      </main>

      {/* Bottom Sticky Interactive Action Bar for Routes in Bento Style */}
      {savedStops.length > 0 && activeTab === 'routes' && (
        <div className="sticky bottom-6 z-40 max-w-lg mx-auto w-full px-4">
          <div className="bg-[#1C1917] text-white border border-stone-800 p-4 rounded-3xl shadow-2xl backdrop-blur-md flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D97706] text-white font-black text-xs flex items-center justify-center shadow-md">
                {savedStops.length}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">Paradas seleccionadas</span>
                <span className="text-stone-400 text-[11px]">Listas para tu pase de viaje</span>
              </div>
            </div>

            <button
              onClick={() => setIsPlannerOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#D97706] hover:bg-[#b45309] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-[#D97706]/30 active:scale-95"
            >
              <span>Generar Pase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Strategic Bento Grid Footer */}
      <footer className="mt-20 border-t border-stone-200 bg-white text-xs text-stone-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-3 md:col-span-2 bg-[#FAF9F6] p-6 rounded-3xl border border-stone-200">
              <div className="flex items-center gap-2 text-[#2D2926] font-serif font-bold text-lg">
                <div className="w-8 h-8 rounded-xl bg-[#D97706] text-white flex items-center justify-center font-serif italic text-sm font-bold">A</div>
                <span>ANDALUCÍA <span className="text-[#D97706]">•</span> NEVER JUST A MATCH</span>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed max-w-md">
                Propuesta estratégica y creativa para la creación del canal audiovisual propio de Andalucía para el ciclo 2027–2031. Una política pública de redistribución territorial que conecta la atención del Mundial con las 8 provincias andaluzas.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#3F6212] font-semibold bg-[#3F6212]/10 px-3 py-1.5 rounded-full w-fit border border-[#3F6212]/20">
                <ShieldCheck className="w-4 h-4 text-[#3F6212]" />
                <span>Regla de Derechos: 0% Torneo Oficial · 100% Territorio Andaluz</span>
              </div>
            </div>

            <div className="space-y-3 bg-[#FAF9F6] p-6 rounded-3xl border border-stone-200">
              <h4 className="font-bold text-[#2D2926] text-xs uppercase tracking-wider">
                Las 4 Rutas de Experiencia
              </h4>
              <ul className="space-y-1.5 text-[11px] text-stone-600">
                <li className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#D97706]"></span> Andalucía de Cine</li>
                <li className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#3F6212]"></span> El Tercer Tiempo (30 Michelin)</li>
                <li className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#7C2D12]"></span> Legado y Pasión (Alhambra & Flamenco)</li>
                <li className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#0284C7]"></span> Andalucía Activa (Sierra & Doñana)</li>
              </ul>
            </div>

            <div className="space-y-3 bg-[#FAF9F6] p-6 rounded-3xl border border-stone-200">
              <h4 className="font-bold text-[#2D2926] text-xs uppercase tracking-wider">
                Franquicias del Canal
              </h4>
              <ul className="space-y-1.5 text-[11px] text-stone-600">
                <li>🎬 Golden Hour Matchdays (18-24 min)</li>
                <li>🏆 The Golden 11 (Rankings 11 al 1)</li>
                <li>🎙️ Overtime Talks (Gran Formato IFE)</li>
                <li>✈️ Distribución en Cabina (Iberia, Emirates)</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400 font-medium">
            <div>
              Presentado a: <strong className="text-stone-700">Consejería de Turismo de la Junta de Andalucía</strong>
            </div>
            <div>
              Proponente: <strong className="text-stone-700">Publicaciones del Sur, S.A. · 7TV Andalucía</strong>
            </div>
          </div>

        </div>
      </footer>

      {/* Interactive Trip Planner Modal */}
      <TripPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        savedStops={savedStops}
        onToggleSaveStop={handleToggleSaveStop}
      />

      {/* High-Resolution Image Inspection Lightbox */}
      <ImageGalleryModal
        isOpen={lightboxData.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxData.imageUrl}
        title={lightboxData.title}
        caption={lightboxData.caption}
      />

    </div>
  );
}
