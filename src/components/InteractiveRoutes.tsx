import { useState } from 'react';
import { 
  MapPin, Film, Utensils, Landmark, Trees, Clock, Compass, 
  ArrowUpRight, Plus, Check, Filter, Train, Car, Sparkles, 
  ChevronRight, ExternalLink, Calendar, Info, Heart
} from 'lucide-react';
import { EXPERIENCE_ROUTES, PROVINCES_DATA } from '../data/mockData';
import { RouteItem } from '../types';

interface InteractiveRoutesProps {
  savedStops: string[];
  onToggleSaveStop: (stopId: string) => void;
  onOpenPlanner: () => void;
  onOpenImageLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export default function InteractiveRoutes({
  savedStops,
  onToggleSaveStop,
  onOpenPlanner,
  onOpenImageLightbox
}: InteractiveRoutesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [activeModalStop, setActiveModalStop] = useState<RouteItem | null>(null);
  const [radiusFilter, setRadiusFilter] = useState<string>('all'); // 'all' | 'under1h' | '1to2h' | 'escapada'

  // Filter routes
  const filteredRoutes = EXPERIENCE_ROUTES.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesProvince = selectedProvince === 'all' || item.province === selectedProvince;
    
    let matchesRadius = true;
    if (radiusFilter === 'under1h') {
      matchesRadius = item.distanceFromCartuja.includes('min') && !item.distanceFromCartuja.includes('h');
    } else if (radiusFilter === '1to2h') {
      matchesRadius = item.distanceFromCartuja.includes('1h') || item.distanceFromCartuja.includes('50 min') || item.distanceFromCartuja.includes('55 min');
    } else if (radiusFilter === 'escapada') {
      matchesRadius = item.distanceFromCartuja.includes('2h') || item.distanceFromCartuja.includes('3h');
    }

    return matchesCategory && matchesProvince && matchesRadius;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cine': return <Film className="w-3.5 h-3.5 text-purple-700" />;
      case 'gastronomia': return <Utensils className="w-3.5 h-3.5 text-[#D97706]" />;
      case 'legado': return <Landmark className="w-3.5 h-3.5 text-[#3F6212]" />;
      case 'activa': return <Trees className="w-3.5 h-3.5 text-teal-700" />;
      default: return <Compass className="w-3.5 h-3.5 text-[#D97706]" />;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'cine': return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'gastronomia': return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'legado': return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'activa': return 'bg-teal-50 text-teal-800 border-teal-200';
      default: return 'bg-stone-50 text-stone-700 border-stone-200';
    }
  };

  return (
    <div id="interactive-routes-container" className="space-y-8 py-2">
      
      {/* Bento Banner & Introduction */}
      <section className="bg-white border border-stone-200 rounded-3xl shadow-sm p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 text-[#D97706] text-xs font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>Descentralización Territorial del Visitante</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2D2926] leading-tight">
            No te quedes solo en la sede: <br />
            <span className="text-[#D97706]">
              4 Rutas Temáticas por las 8 Provincias
            </span>
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-light max-w-3xl leading-relaxed">
            El partido en La Cartuja dura 90 minutos, pero tu estancia se alarga a 4, 6 o 7 días. Gracias a la red de Alta Velocidad y autovías, puedes desayunar en la costa de Cádiz, almorzar con 3 estrellas en Córdoba, contemplar la Alhambra de Granada y regresar a tiempo para el inicio del partido.
          </p>

          {/* Quick Route Highlights Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <button
              onClick={() => { setSelectedCategory('cine'); setSelectedProvince('all'); }}
              className={`p-5 rounded-2xl border text-left transition-all ${
                selectedCategory === 'cine' 
                  ? 'bg-purple-50/70 border-purple-300 ring-2 ring-purple-500/20 shadow-sm' 
                  : 'bg-[#FAF9F6] border-stone-200 hover:border-purple-300 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Film className="w-4 h-4 text-purple-700" />
                <span className="text-xs font-bold text-[#2D2926]">Andalucía de Cine</span>
              </div>
              <span className="text-[11px] text-stone-500 block font-light">Juego de Tronos, Star Wars & 007</span>
            </button>

            <button
              onClick={() => { setSelectedCategory('gastronomia'); setSelectedProvince('all'); }}
              className={`p-5 rounded-2xl border text-left transition-all ${
                selectedCategory === 'gastronomia' 
                  ? 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-500/20 shadow-sm' 
                  : 'bg-[#FAF9F6] border-stone-200 hover:border-amber-300 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Utensils className="w-4 h-4 text-[#D97706]" />
                <span className="text-xs font-bold text-[#2D2926]">El Tercer Tiempo</span>
              </div>
              <span className="text-[11px] text-stone-500 block font-light">30 Michelin, Jerez & Jabugo</span>
            </button>

            <button
              onClick={() => { setSelectedCategory('legado'); setSelectedProvince('all'); }}
              className={`p-5 rounded-2xl border text-left transition-all ${
                selectedCategory === 'legado' 
                  ? 'bg-emerald-50/70 border-emerald-300 ring-2 ring-emerald-500/20 shadow-sm' 
                  : 'bg-[#FAF9F6] border-stone-200 hover:border-emerald-300 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Landmark className="w-4 h-4 text-[#3F6212]" />
                <span className="text-xs font-bold text-[#2D2926]">Legado y Pasión</span>
              </div>
              <span className="text-[11px] text-stone-500 block font-light">Alhambra, Mezquita & Flamenco</span>
            </button>

            <button
              onClick={() => { setSelectedCategory('activa'); setSelectedProvince('all'); }}
              className={`p-5 rounded-2xl border text-left transition-all ${
                selectedCategory === 'activa' 
                  ? 'bg-teal-50/70 border-teal-300 ring-2 ring-teal-500/20 shadow-sm' 
                  : 'bg-[#FAF9F6] border-stone-200 hover:border-teal-300 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Trees className="w-4 h-4 text-teal-700" />
                <span className="text-xs font-bold text-[#2D2926]">Andalucía Activa</span>
              </div>
              <span className="text-[11px] text-stone-500 block font-light">Caminito del Rey & Doñana</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8 Provinces Radiating Hub & Filter Navigation in Bento Layout */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D97706] block">
              Conectividad desde el Estadio La Cartuja
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#2D2926]">
              Explora las 8 Provincias por Tiempo de Viaje
            </h3>
          </div>

          {/* Radius Filter Pills */}
          <div className="flex items-center gap-1 bg-[#FAF9F6] p-1 rounded-full border border-stone-200 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setRadiusFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                radiusFilter === 'all' ? 'bg-[#1C1917] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Todos los Radios
            </button>
            <button
              onClick={() => setRadiusFilter('under1h')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                radiusFilter === 'under1h' ? 'bg-[#1C1917] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              &lt; 1h (Cercanías & AVE)
            </button>
            <button
              onClick={() => setRadiusFilter('1to2h')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                radiusFilter === '1to2h' ? 'bg-[#1C1917] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              1h - 2h (AVE & Costa)
            </button>
            <button
              onClick={() => setRadiusFilter('escapada')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                radiusFilter === 'escapada' ? 'bg-[#1C1917] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              2h+ (Sierra & Desierto)
            </button>
          </div>
        </div>

        {/* 8 Provinces Bento Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          <button
            onClick={() => setSelectedProvince('all')}
            className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center ${
              selectedProvince === 'all'
                ? 'bg-[#1C1917] text-white border-[#1C1917] font-bold shadow-sm'
                : 'bg-[#FAF9F6] border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span className="text-xs font-bold">Todas (8)</span>
            <span className="text-[10px] opacity-75">Andalucía</span>
          </button>

          {PROVINCES_DATA.map((prov) => {
            const isSelected = selectedProvince === prov.name;
            return (
              <button
                key={prov.name}
                onClick={() => setSelectedProvince(isSelected ? 'all' : prov.name)}
                className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1C1917] text-white border-[#1C1917] font-bold shadow-sm'
                    : 'bg-[#FAF9F6] border-stone-200 text-stone-700 hover:border-stone-400 hover:bg-white'
                }`}
              >
                <div>
                  <span className="text-xs font-bold block">{prov.name}</span>
                  <span className={`text-[10px] block mt-0.5 font-mono ${isSelected ? 'text-stone-300' : 'text-[#D97706]'}`}>
                    {prov.timeFromCartuja.split(' (')[0]}
                  </span>
                </div>
                {prov.name === 'Sevilla' && (
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded mt-1.5 inline-block ${isSelected ? 'bg-[#D97706] text-white' : 'bg-[#D97706]/10 text-[#D97706]'}`}>
                    Sede
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Experience Itinerary Cards Feed in Bento Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#D97706]" />
            <h3 className="font-serif font-bold text-xl text-[#2D2926]">
              Experiencias & Destinos Seleccionados ({filteredRoutes.length})
            </h3>
          </div>

          {savedStops.length > 0 && (
            <button
              onClick={onOpenPlanner}
              className="text-xs text-[#D97706] hover:text-amber-700 font-bold flex items-center gap-1.5"
            >
              <span>Ver mi Itinerario ({savedStops.length} paradas)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutes.map((stop) => {
            const isSaved = savedStops.includes(stop.id);

            return (
              <div
                key={stop.id}
                className="group bg-white border border-stone-200 hover:border-[#D97706]/60 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                {/* Card Top Image & Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <img
                    src={stop.imagePlaceholder}
                    alt={stop.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md flex items-center gap-1.5 ${getCategoryBadge(stop.category)}`}>
                      {getCategoryIcon(stop.category)}
                      <span>{stop.categoryLabel}</span>
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveStop(stop.id);
                      }}
                      title={isSaved ? 'Quitar de mi itinerario' : 'Añadir a mi itinerario'}
                      className={`p-2 rounded-full border backdrop-blur-md transition-all ${
                        isSaved
                          ? 'bg-[#3F6212] text-white border-[#3F6212] shadow-md'
                          : 'bg-white/90 text-stone-700 border-stone-200 hover:text-stone-950 hover:bg-white'
                      }`}
                    >
                      {isSaved ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Travel Distance Pill */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-stone-200 text-[#2D2926] text-[11px] font-semibold backdrop-blur-sm shadow-sm">
                    {stop.travelMode === 'AVE' ? (
                      <Train className="w-3.5 h-3.5 text-[#D97706]" />
                    ) : (
                      <Car className="w-3.5 h-3.5 text-[#D97706]" />
                    )}
                    <span>{stop.distanceFromCartuja}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#1C1917]/80 text-white text-[10px] font-bold backdrop-blur-sm">
                    {stop.province}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-lg text-[#2D2926] group-hover:text-[#D97706] transition-colors">
                      {stop.name}
                    </h4>
                    <p className="text-xs text-[#D97706] font-semibold">
                      "{stop.tagline}"
                    </p>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-light">
                      {stop.description}
                    </p>
                  </div>

                  {/* Highlights & Meta Tags */}
                  <div className="space-y-4 pt-4 border-t border-stone-100">
                    <div className="flex flex-wrap gap-1.5">
                      {stop.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#FAF9F6] text-stone-600 border border-stone-200 text-[10px]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setActiveModalStop(stop)}
                        className="text-xs text-[#D97706] hover:text-amber-700 font-bold flex items-center gap-1"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Ver Ficha Completa</span>
                      </button>

                      <button
                        onClick={() => onToggleSaveStop(stop.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                          isSaved
                            ? 'bg-[#3F6212] text-white shadow-sm'
                            : 'bg-[#FAF9F6] text-stone-800 border border-stone-300 hover:bg-[#1C1917] hover:text-white'
                        }`}
                      >
                        {isSaved ? (
                          <>
                            <Check className="w-3 h-3 stroke-[3]" />
                            <span>En mi Ruta</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3 h-3" />
                            <span>Añadir</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stop Full Detail Modal in Bento Style */}
      {activeModalStop && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-stone-900">
              <img
                src={activeModalStop.imagePlaceholder}
                alt={activeModalStop.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${getCategoryBadge(activeModalStop.category)}`}>
                    {activeModalStop.categoryLabel} · {activeModalStop.province}
                  </span>
                  <button
                    onClick={() => setActiveModalStop(null)}
                    className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white hover:text-stone-900 transition-colors backdrop-blur-md"
                  >
                    ✕
                  </button>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {activeModalStop.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium">
                    {activeModalStop.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body Details */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#D97706]">
                  Experiencia y Relato Territorial
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed font-light">
                  {activeModalStop.description}
                </p>
              </div>

              {/* Grid with specialized facts from proposal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {activeModalStop.filmReference && (
                  <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200">
                    <strong className="text-purple-900 flex items-center gap-1.5 mb-1 font-bold">
                      <Film className="w-3.5 h-3.5" />
                      Rodajes & Cine:
                    </strong>
                    <span className="text-stone-700">{activeModalStop.filmReference}</span>
                  </div>
                )}

                {activeModalStop.gastronomyTip && (
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                    <strong className="text-amber-900 flex items-center gap-1.5 mb-1 font-bold">
                      <Utensils className="w-3.5 h-3.5" />
                      Bocado / Maridaje Sugerido:
                    </strong>
                    <span className="text-stone-700">{activeModalStop.gastronomyTip}</span>
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                  <strong className="text-[#3F6212] flex items-center gap-1.5 mb-1 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    Mejor Horario de Luz / Visita:
                  </strong>
                  <span className="text-stone-700">{activeModalStop.bestTime}</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                  <strong className="text-[#D97706] flex items-center gap-1.5 mb-1 font-bold">
                    <Train className="w-3.5 h-3.5" />
                    Conexión desde La Cartuja:
                  </strong>
                  <span className="text-stone-700">{activeModalStop.distanceFromCartuja} ({activeModalStop.travelMode})</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 text-xs">
                <strong className="text-[#2D2926] block mb-1 font-bold">Consejo Práctico del Anfitrión:</strong>
                <p className="text-stone-600 leading-relaxed font-light">{activeModalStop.practicalTip}</p>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-stone-200">
                <button
                  onClick={() => {
                    const url = `https://www.google.com/maps/search/?api=1&query=${activeModalStop.coordinates.lat},${activeModalStop.coordinates.lng}`;
                    window.open(url, '_blank');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#FAF9F6] text-stone-700 border border-stone-300 hover:bg-stone-100 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Ver Ubicación en Mapa</span>
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => onToggleSaveStop(activeModalStop.id)}
                    className={`flex-1 sm:flex-none px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      savedStops.includes(activeModalStop.id)
                        ? 'bg-[#3F6212] text-white shadow-sm'
                        : 'bg-[#1C1917] text-white hover:bg-black'
                    }`}
                  >
                    {savedStops.includes(activeModalStop.id) ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Guardado en mi Itinerario</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Añadir a mi Itinerario</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
