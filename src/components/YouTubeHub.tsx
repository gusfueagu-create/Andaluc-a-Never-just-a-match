import { useState } from 'react';
import { Play, Film, Clock, Eye, Sparkles, Plane, Tv, CheckCircle, Share2, Bookmark, Flame, Radio, Award, Info, Video } from 'lucide-react';
import { YOUTUBE_EPISODES } from '../data/mockData';
import { VideoEpisode } from '../types';

interface YouTubeHubProps {
  onOpenImageLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export default function YouTubeHub({ onOpenImageLightbox }: YouTubeHubProps) {
  const [selectedFranchise, setSelectedFranchise] = useState<string>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<VideoEpisode | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeDistributionTab, setActiveDistributionTab] = useState<'youtube' | 'ife' | 'trains' | 'fast'>('youtube');

  const filteredEpisodes = selectedFranchise === 'all'
    ? YOUTUBE_EPISODES
    : YOUTUBE_EPISODES.filter(ep => ep.franchise === selectedFranchise);

  return (
    <div id="youtube-hub-container" className="space-y-8 py-2">
      
      {/* Top Channel Header & Bento Banner */}
      <section className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
        {/* Banner Mockup Image */}
        <div 
          onClick={() => onOpenImageLightbox('/src/assets/images/youtube_channel_1787943800872.jpg', 'Canal Oficial YouTube · Andalucía Never Just a Match', 'Mockup oficial de la plataforma matriz en YouTube TV & Web')}
          className="relative h-56 sm:h-72 w-full overflow-hidden cursor-pointer group bg-stone-900"
        >
          <img
            src="/src/assets/images/youtube_channel_1787943800872.jpg"
            alt="YouTube Channel Interface Mockup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 bg-white/90 px-3.5 py-1.5 rounded-full border border-stone-200 text-[#2D2926] text-xs font-bold flex items-center gap-1.5 backdrop-blur-md shadow-sm">
            <Eye className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Ver Maqueta UI del Canal</span>
          </div>
        </div>

        {/* Channel Info Bar in Bento Style */}
        <div className="p-6 sm:p-8 bg-white border-t border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#D97706] flex items-center justify-center text-white font-serif font-bold italic text-2xl sm:text-3xl shadow-md shadow-[#D97706]/20">
              A
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2926]">
                  Andalucía · Never Just a Match
                </h2>
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  Verificado
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF9F6] text-stone-700 border border-stone-200 text-[10px] font-bold font-mono">
                  4K HDR · 60FPS
                </span>
              </div>
              <p className="text-xs text-stone-500 font-sans">
                @AndaluciaNeverJustAMatch · 1.8M suscriptores · 4 temporadas (2027–2031) · 8 provincias
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="btn-subscribe-channel"
              onClick={() => setIsSubscribed(!isSubscribed)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${
                isSubscribed
                  ? 'bg-stone-100 text-stone-800 border border-stone-300'
                  : 'bg-[#1C1917] text-white hover:bg-black active:scale-95'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-[#D97706] animate-pulse" />
              <span>{isSubscribed ? 'Suscrito con Campanita' : 'Suscribirse al Canal'}</span>
            </button>

            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText('https://youtube.com/@AndaluciaNeverJustAMatch');
                  alert('Enlace del canal copiado al portapapeles');
                }
              }}
              className="p-2.5 rounded-full bg-[#FAF9F6] border border-stone-200 text-stone-700 hover:text-stone-950 hover:bg-stone-100 shadow-sm"
              title="Compartir Canal"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3 Core Franchises Explainer in Bento Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D97706] block">
              Parrilla de Producción Fija
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#2D2926]">
              Las 3 Grandes Franquicias de Contenido
            </h3>
          </div>
          <span className="text-xs text-stone-500 hidden sm:inline font-sans">
            Formato recurrente para patrocinio y fidelización
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Franchise 1: Golden Hour Matchdays */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between hover:border-[#D97706]/60 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-[10px] font-bold uppercase tracking-wider border border-[#D97706]/20">
                  The Golden Pitch
                </span>
                <span className="text-stone-400 text-xs font-mono">18–24 min</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-[#2D2926]">
                Golden Hour Matchdays
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                El viaje estético del día de partido al revés. Comienza a las 07:00 en un rincón auténtico de Andalucía (una almadraba, un olivar, una cueva) y termina en el minuto exacto en que entra a la grada. El partido no se ve: se oye desde fuera.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 text-[11px] text-[#D97706] flex items-center justify-between font-semibold">
              <span>Periodicidad: Quincenal</span>
              <span>Gran Formato 4K</span>
            </div>
          </div>

          {/* Franchise 2: The Golden 11 */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between hover:border-[#3F6212]/60 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#3F6212]/10 text-[#3F6212] text-[10px] font-bold uppercase tracking-wider border border-[#3F6212]/20">
                  Passion Field
                </span>
                <span className="text-stone-400 text-xs font-mono">4-7 min / Shorts</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-[#2D2926]">
                The Golden 11 (Rankings)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                El once inicial de cada categoría en cuenta atrás (11 al 1): las 11 azoteas de medianoche, las 11 barras de tapas secretas, los 11 vinos de Jerez, las 11 localizaciones de cine. Máximo 2 por provincia para garantizar cohesión territorial.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 text-[11px] text-[#3F6212] flex items-center justify-between font-semibold">
              <span>Periodicidad: Semanal</span>
              <span>Top Búsquedas & Shorts</span>
            </div>
          </div>

          {/* Franchise 3: Overtime Talks */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between hover:border-stone-400 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#1C1917]/10 text-[#1C1917] text-[10px] font-bold uppercase tracking-wider border border-[#1C1917]/20">
                  Transversal · IFE
                </span>
                <span className="text-stone-400 text-xs font-mono">30–45 min</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-[#2D2926]">
                Overtime Talks
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Una mesa, tres sillas en una localización no alquilable (sala capitular, bodega de crianza, desierto al amanecer). Una figura mundial del fútbol, un chef Michelin y un creador andaluz conversan de todo menos de resultados.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-700 flex items-center justify-between font-semibold">
              <span>Periodicidad: Mensual</span>
              <span>Catálogo Aerolíneas</span>
            </div>
          </div>

        </div>
      </section>

      {/* Video Catalog & Player Grid in Bento Style */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 bg-white p-1 rounded-full border border-stone-200 shadow-sm w-fit no-scrollbar">
            <button
              onClick={() => setSelectedFranchise('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedFranchise === 'all'
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              Todos los Episodios
            </button>
            <button
              onClick={() => setSelectedFranchise('golden_pitch')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedFranchise === 'golden_pitch'
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              The Golden Pitch
            </button>
            <button
              onClick={() => setSelectedFranchise('passion_field')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedFranchise === 'passion_field'
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              Passion Field
            </button>
            <button
              onClick={() => setSelectedFranchise('golden_11')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedFranchise === 'golden_11'
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              The Golden 11
            </button>
            <button
              onClick={() => setSelectedFranchise('overtime_talks')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedFranchise === 'overtime_talks'
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              Overtime Talks
            </button>
          </div>

          <span className="text-xs text-stone-500 font-mono">
            {filteredEpisodes.length} piezas en 4K HDR
          </span>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoModal(video)}
              className="group bg-white border border-stone-200 hover:border-[#D97706]/60 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-stone-900">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#D97706] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-white text-[11px] font-mono font-bold backdrop-blur-sm">
                  {video.duration}
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[#2D2926] text-[10px] font-bold shadow-sm backdrop-blur-sm">
                  {video.franchiseLabel}
                </div>
              </div>

              {/* Video Content Metadata */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h4 className="font-bold text-sm text-[#2D2926] group-hover:text-[#D97706] transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-2 font-light">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                  <span className="text-[#D97706] font-semibold">{video.location}</span>
                  <span className="font-mono">{video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Omnichannel Distribution Ecosystem Section */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D97706] block">
              Distribución Estratégica
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#2D2926]">
              Mucho Más que YouTube: El Viajero Cautivo
            </h3>
          </div>
          
          {/* Distribution Channel Tabs */}
          <div className="flex items-center gap-1 bg-[#FAF9F6] p-1 rounded-full border border-stone-200">
            <button
              onClick={() => setActiveDistributionTab('ife')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                activeDistributionTab === 'ife' ? 'bg-[#1C1917] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Plane className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Aviones (IFE)</span>
            </button>
            <button
              onClick={() => setActiveDistributionTab('trains')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                activeDistributionTab === 'trains' ? 'bg-[#1C1917] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Tv className="w-3.5 h-3.5 text-[#3F6212]" />
              <span>AVE & Hoteles</span>
            </button>
            <button
              onClick={() => setActiveDistributionTab('fast')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                activeDistributionTab === 'fast' ? 'bg-[#1C1917] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Canales FAST</span>
            </button>
          </div>
        </div>

        {/* Channel Details in Bento Grid Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-stone-200 space-y-2.5">
            <div className="text-[#D97706] font-bold text-xs uppercase flex items-center gap-2">
              <Plane className="w-4 h-4" />
              <span>Entretenimiento a Bordo (IFE)</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              El pasajero de largo radio dispone de 7 a 12 horas sin conexión y decidiendo su viaje. Acuerdos con agregadores de <strong className="text-[#2D2926] font-semibold">Iberia, British Airways, Lufthansa, Emirates y Qatar Airways</strong> en formato máster 8-12 min subtitulado en 8 idiomas.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-stone-200 space-y-2.5">
            <div className="text-[#3F6212] font-bold text-xs uppercase flex items-center gap-2">
              <Tv className="w-4 h-4" />
              <span>Alta Velocidad (AVE) & Hoteles 5★</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Emisión en portales de a bordo y pantallas de Renfe, Iryo y Ouigo (corredor Madrid-Sevilla-Málaga). Canal de destino en circuito cerrado de habitaciones en la red hotelera de 4 y 5 estrellas de las 8 provincias.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-stone-200 space-y-2.5">
            <div className="text-[#2D2926] font-bold text-xs uppercase flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#D97706]" />
              <span>Televisión Conectada & FAST</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Canal lineal 24/7 gratuito con publicidad en Samsung TV Plus, LG Channels, Pluto TV y Rakuten TV en mercados emisores prioritarios (Reino Unido, Alemania, Francia, EEUU). Monetiza el archivo sin coste añadido.
            </p>
          </div>
        </div>
      </section>

      {/* Video Interactive Preview Modal in Bento Style */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl space-y-6">
            
            {/* Modal Screen Player Simulation */}
            <div className="relative aspect-video w-full bg-stone-900 overflow-hidden">
              <img
                src={activeVideoModal.thumbnailUrl}
                alt={activeVideoModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#D97706] text-white font-bold text-xs">
                    {activeVideoModal.franchiseLabel}
                  </span>
                  <button
                    onClick={() => setActiveVideoModal(null)}
                    className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white hover:text-stone-900 transition-colors backdrop-blur-md"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#D97706] text-white flex items-center justify-center shadow-xl shadow-[#D97706]/40 scale-105">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/90 font-mono">
                  <span>{activeVideoModal.duration} · 4K 60fps</span>
                  <span>{activeVideoModal.province}</span>
                </div>
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2926]">
                  {activeVideoModal.title}
                </h3>
                <p className="text-xs text-[#D97706] font-mono font-semibold">
                  Título Internacional: "{activeVideoModal.titleIntl}"
                </p>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                {activeVideoModal.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                  <strong className="text-[#3F6212] block mb-1 font-bold uppercase tracking-wider text-[10px]">Identidad Sonora:</strong>
                  <span className="text-stone-700">{activeVideoModal.audioStyle}</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                  <strong className="text-[#D97706] block mb-1 font-bold uppercase tracking-wider text-[10px]">Por Qué Funciona (Racional):</strong>
                  <span className="text-stone-700">{activeVideoModal.hookRationale}</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-stone-200">
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="px-6 py-2.5 rounded-full bg-[#1C1917] text-white font-bold text-xs hover:bg-black transition-colors"
                >
                  Cerrar Reproductor
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
