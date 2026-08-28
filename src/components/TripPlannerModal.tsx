import { useState } from 'react';
import { 
  Compass, Calendar, Train, Utensils, Film, Landmark, Trees, 
  Clock, MapPin, QrCode, Download, Share2, Sparkles, Check, 
  Trash2, ExternalLink, ArrowRight, Printer 
} from 'lucide-react';
import { EXPERIENCE_ROUTES } from '../data/mockData';
import { RouteItem } from '../types';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedStops: string[];
  onToggleSaveStop: (stopId: string) => void;
}

export default function TripPlannerModal({
  isOpen,
  onClose,
  savedStops,
  onToggleSaveStop
}: TripPlannerModalProps) {
  const [tripDays, setTripDays] = useState<number>(4);
  const [arrivalHub, setArrivalHub] = useState<'sevilla' | 'malaga'>('sevilla');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['cine', 'gastronomia', 'legado']);
  const [generatedItinerary, setGeneratedItinerary] = useState<any[] | null>(null);

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter(i => i !== interest));
      }
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleGenerateItinerary = () => {
    const matchingStops = EXPERIENCE_ROUTES.filter(r => 
      selectedInterests.includes(r.category) || savedStops.includes(r.id)
    );

    const daysSchedule = [];
    
    // Day 1: Matchday + Sevilla Iconic
    daysSchedule.push({
      day: 1,
      title: "Día 1: El Partido & Sevilla Dorada",
      subtitle: "De la hora dorada en Plaza de España a la noche en La Cartuja",
      stops: [
        { time: "09:30", place: "Real Alcázar de Sevilla (Dorne en Juego de Tronos)", type: "Cine / Patrimonio", note: "Paseo matinal antes de la apertura pública" },
        { time: "14:00", place: "Almuerzo de tapas en Triana y orilla del Guadalquivir", type: "Gastronomía", note: "Pescaíto frito y manzanilla" },
        { time: "18:30", place: "Plaza de España en Hora Dorada (Star Wars Naboo)", type: "Cine", note: "Barca por el canal y luz de albero" },
        { time: "20:30", place: "Llegada al Estadio La Cartuja para el Partido", type: "Sede Mundialista", note: "Acceso y vibración de grada" }
      ]
    });

    // Day 2: Córdoba (55 min AVE) or Cádiz Coast
    if (tripDays >= 2) {
      daysSchedule.push({
        day: 2,
        title: "Día 2: Califato & Alta Gastronomía (Córdoba)",
        subtitle: "A solo 55 minutos en AVE desde Sevilla Santa Justa",
        stops: [
          { time: "10:00", place: "AVE Sevilla -> Córdoba Central (55 min)", type: "Transporte Alta Velocidad", note: "Conexión directa ultrarrápida" },
          { time: "11:15", place: "Bosque de Columnas de la Mezquita-Catedral", type: "Patrimonio UNESCO", note: "856 columnas de jaspe y mármol" },
          { time: "14:00", place: "Restaurante Noor (3 Estrellas Michelin)", type: "El Tercer Tiempo", note: "Cocina histórica de Al-Ándalus por Paco Morales" },
          { time: "18:00", place: "Paseo por los Patios de San Basilio y vuelta en AVE", type: "Legado", note: "Sombra y azahar al atardecer" }
        ]
      });
    }

    // Day 3: Cádiz / Jerez & Vinos Catedralicios
    if (tripDays >= 3) {
      daysSchedule.push({
        day: 3,
        title: "Día 3: La Costa de la Luz & Catedrales de Jerez",
        subtitle: "Brisa marina atlántica y bodegas centenarias con velo de flor",
        stops: [
          { time: "10:00", place: "Bodega histórica de Jerez de la Frontera", type: "Vino & Sombra", note: "Cata directa a pie de bota de Palos Cortados" },
          { time: "13:30", place: "Aponiente (Ángel León) o Puerto de Santa María", type: "Alta Cocina Marina", note: "Menú del Chef del Mar o mariscada" },
          { time: "18:00", place: "Playa de La Caleta en Cádiz (007 Muere Otro Día)", type: "Cine & Costa", note: "Atardecer en la ciudad más antigua de Occidente" },
          { time: "22:00", place: "Tapeo nocturno en el Barrio de la Viña", type: "La Noche", note: "Tortillitas de camarones y compás de chirigota" }
        ]
      });
    }

    // Day 4: Granada / Sierra Nevada
    if (tripDays >= 4) {
      daysSchedule.push({
        day: 4,
        title: "Día 4: La Alhambra Nocturna & Tapas de Granada",
        subtitle: "Cumbres frescas de Sierra Nevada y el mayor monumento de Al-Ándalus",
        stops: [
          { time: "09:30", place: "Tren hacia Granada o transfer por carretera", type: "Ruta Oriental", note: "Vista del manto de olivos" },
          { time: "13:00", place: "Ruta de Tapas Gratuitas por Calle Navas y Albaicín", type: "Gastronomía", note: "Tapas calientes y vistas panorámicas" },
          { time: "17:00", place: "Mirador de San Nicolás frente a Sierra Nevada", type: "Naturaleza & Escena", note: "El atardecer más famoso del mundo" },
          { time: "21:30", place: "Visita Nocturna a los Palacios Nazaríes de la Alhambra", type: "Legado y Pasión", note: "Silencio, fuentes y poesía tallada en yeso" }
        ]
      });
    }

    setGeneratedItinerary(daysSchedule);
  };

  const savedRouteObjects = EXPERIENCE_ROUTES.filter(r => savedStops.includes(r.id));

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-stone-200 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header in Bento Style */}
        <div className="p-6 sm:p-8 bg-white border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D97706]/10 border border-[#D97706]/20 flex items-center justify-center text-[#D97706]">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97706] font-bold block">
                Pase Oficial del Visitante
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#2D2926]">
                Planificador de Rutas por Andalucía
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-100 text-stone-600 hover:text-stone-950 hover:bg-stone-200 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Saved Spots Drawer / Bar */}
          {savedRouteObjects.length > 0 && (
            <div className="p-5 rounded-3xl bg-[#FAF9F6] border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#2D2926] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D97706]" />
                  <span>Tus Paradas Guardadas ({savedRouteObjects.length})</span>
                </span>
                <span className="text-[11px] text-stone-500 font-light">Se incluirán automáticamente en tu plan</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {savedRouteObjects.map((stop) => (
                  <div
                    key={stop.id}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-xs text-[#2D2926] font-semibold flex items-center gap-2 shadow-xs"
                  >
                    <span>{stop.name} ({stop.province})</span>
                    <button
                      onClick={() => onToggleSaveStop(stop.id)}
                      className="text-stone-400 hover:text-rose-600"
                      title="Eliminar"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Config Controls Grid in Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Control 1: Total Extra Days */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Duración de la Estancia:</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[2, 4, 7].map((days) => (
                  <button
                    key={days}
                    onClick={() => setTripDays(days)}
                    className={`py-2.5 rounded-2xl text-xs font-bold border transition-all ${
                      tripDays === days
                        ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
                        : 'bg-[#FAF9F6] text-stone-700 border-stone-200 hover:bg-white'
                    }`}
                  >
                    {days} Días
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Arrival Hub */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Train className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Punto de Entrada / Sede:</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setArrivalHub('sevilla')}
                  className={`py-2.5 px-3 rounded-2xl text-xs font-bold border transition-all ${
                    arrivalHub === 'sevilla'
                      ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
                      : 'bg-[#FAF9F6] text-stone-700 border-stone-200 hover:bg-white'
                  }`}
                >
                  Sevilla (Sede)
                </button>
                <button
                  onClick={() => setArrivalHub('malaga')}
                  className={`py-2.5 px-3 rounded-2xl text-xs font-bold border transition-all ${
                    arrivalHub === 'malaga'
                      ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
                      : 'bg-[#FAF9F6] text-stone-700 border-stone-200 hover:bg-white'
                  }`}
                >
                  Málaga (Vuelos)
                </button>
              </div>
            </div>

            {/* Control 3: Interests */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Preferencias de Ruta:</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'cine', label: '🎬 Cine & Plató' },
                  { id: 'gastronomia', label: '🍷 Michelin & Jerez' },
                  { id: 'legado', label: '🏛️ Flamenco & Alhambra' },
                  { id: 'activa', label: '🌿 Sierra & Costa' },
                ].map((interest) => {
                  const isSelected = selectedInterests.includes(interest.id);
                  return (
                    <button
                      key={interest.id}
                      onClick={() => toggleInterest(interest.id)}
                      className={`p-2 rounded-xl text-[11px] font-bold border transition-all text-left ${
                        isSelected
                          ? 'bg-[#1C1917] border-[#1C1917] text-white'
                          : 'bg-[#FAF9F6] border-stone-200 text-stone-600 hover:bg-white'
                      }`}
                    >
                      {interest.label}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Action Generate Button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={handleGenerateItinerary}
              className="px-8 py-3.5 rounded-full bg-[#1C1917] text-white font-bold text-sm shadow-md hover:bg-black active:scale-95 transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#D97706]" />
              <span>Generar Itinerario Personalizado ({tripDays} Días)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Generated Itinerary Output */}
          {generatedItinerary && (
            <div className="space-y-6 pt-6 border-t border-stone-200">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-[#FAF9F6] border border-stone-200">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#D97706] font-bold">
                    Pase Digital Generado · Andalucía 2030
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#2D2926] mt-0.5">
                    Itinerario Oficial: De la Grada al Territorio Andaluz
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 font-light">
                    Cubre {tripDays} días · Entrada por {arrivalHub === 'sevilla' ? 'Sevilla (AVE/SVQ)' : 'Málaga (AGP)'} · {selectedInterests.length} rutas combinadas
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-sm border border-stone-200">
                    <QrCode className="w-full h-full text-[#2D2926]" />
                  </div>
                </div>
              </div>

              {/* Day-by-Day Bento Cards */}
              <div className="space-y-4">
                {generatedItinerary.map((dayItem) => (
                  <div
                    key={dayItem.day}
                    className="p-6 rounded-3xl bg-white border border-stone-200 space-y-4 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-stone-100 pb-3">
                      <div>
                        <h5 className="font-serif font-bold text-base text-[#2D2926]">
                          {dayItem.title}
                        </h5>
                        <p className="text-xs text-stone-500 font-light">
                          {dayItem.subtitle}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#FAF9F6] text-[#D97706] border border-stone-200 text-[11px] font-mono font-bold w-fit">
                        Día {dayItem.day} de {tripDays}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {dayItem.stops.map((stop: any, idx: number) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 text-xs space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-bold text-[#D97706] text-[11px]">
                              {stop.time}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-white text-stone-600 border border-stone-200 text-[10px] font-semibold">
                              {stop.type}
                            </span>
                          </div>
                          <h6 className="font-bold text-[#2D2926] text-xs">
                            {stop.place}
                          </h6>
                          <p className="text-stone-500 text-[11px] font-light">
                            {stop.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Print / Export Action Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-200">
                <button
                  onClick={() => {
                    window.print();
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#FAF9F6] hover:bg-stone-100 text-stone-700 border border-stone-300 text-xs font-bold flex items-center gap-2"
                >
                  <Printer className="w-4 h-4 text-[#D97706]" />
                  <span>Imprimir / Guardar PDF</span>
                </button>

                <button
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Enlace de tu itinerario andaluz copiado al portapapeles');
                    }
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#FAF9F6] hover:bg-stone-100 text-stone-700 border border-stone-300 text-xs font-bold flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4 text-[#D97706]" />
                  <span>Compartir Itinerario</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
