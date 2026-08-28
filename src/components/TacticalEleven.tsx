import { useState } from 'react';
import { 
  Shield, Sun, Umbrella, Trees, Waves, Train, Music, Film, 
  Utensils, HeartHandshake, Moon, Info, Award, CheckCircle 
} from 'lucide-react';
import { TACTICAL_ELEVEN } from '../data/mockData';
import { TacticalPlayer } from '../types';

export default function TacticalEleven() {
  const [selectedPlayer, setSelectedPlayer] = useState<TacticalPlayer>(TACTICAL_ELEVEN[9]); // default "La Gente" (DC)

  const getPositionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5 text-[#D97706]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#D97706]" />;
      case 'Umbrella': return <Umbrella className="w-5 h-5 text-[#D97706]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#D97706]" />;
      case 'Waves': return <Waves className="w-5 h-5 text-[#D97706]" />;
      case 'Train': return <Train className="w-5 h-5 text-[#D97706]" />;
      case 'Music': return <Music className="w-5 h-5 text-[#D97706]" />;
      case 'Film': return <Film className="w-5 h-5 text-[#D97706]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#D97706]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#D97706]" />;
      case 'Moon': return <Moon className="w-5 h-5 text-[#D97706]" />;
      default: return <Shield className="w-5 h-5 text-[#D97706]" />;
    }
  };

  return (
    <div id="tactical-eleven-container" className="space-y-8 py-2">
      
      {/* Intro Bento Header */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-4">
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3F6212]/10 border border-[#3F6212]/20 text-[#3F6212] text-xs font-bold">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Alineación Táctica · Esquema Rector de Campaña</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2D2926] leading-tight">
            El Once Inicial de Andalucía · <span className="text-[#D97706] font-mono">1–4–3–3</span>
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            La alineación es el único formato gráfico que cualquier aficionado del mundo sabe leer sin instrucciones. Todo el contenido y las rutas del territorio ocupan una posición en este campo, y ninguna posición queda sin cubrir.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-stone-600">
            <div><strong className="text-[#2D2926] font-bold">Entrenador:</strong> Junta de Andalucía</div>
            <div><strong className="text-[#2D2926] font-bold">Capitán:</strong> Sevilla (sede que reparte juego)</div>
            <div><strong className="text-[#2D2926] font-bold">Banquillo:</strong> Jerez, Caballo, Golf, Pueblos Blancos, Semana Santa</div>
          </div>
        </div>
      </section>

      {/* Interactive Football Pitch & Tactical Details Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: The Grass Pitch (1-4-3-3 Board) */}
        <div className="lg:col-span-7 bg-[#21431A] border border-stone-200 rounded-3xl p-6 sm:p-8 relative shadow-md overflow-hidden min-h-[560px] flex flex-col justify-between">
          
          {/* Pitch Lines */}
          <div className="absolute inset-4 sm:inset-6 border-2 border-white/20 rounded-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-4 right-4 sm:left-6 sm:right-6 border-t-2 border-white/20 -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 border-2 border-white/20 rounded-full pointer-events-none" />
          
          {/* Goal Areas */}
          <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-48 h-20 border-b-2 border-x-2 border-white/20 rounded-b-lg pointer-events-none" />
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-48 h-20 border-t-2 border-x-2 border-white/20 rounded-t-lg pointer-events-none" />

          {/* Pitch Interactive Jersey Pins */}
          <div className="relative w-full h-[520px]">
            {TACTICAL_ELEVEN.map((player) => {
              const isSelected = selectedPlayer.positionId === player.positionId;

              return (
                <button
                  key={player.positionId}
                  onClick={() => setSelectedPlayer(player)}
                  style={{
                    left: `${player.coordinates.x}%`,
                    top: `${player.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  className={`absolute group z-20 flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-115'
                  }`}
                >
                  {/* Jersey Pin */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all shadow-xl ${
                      isSelected
                        ? 'bg-[#D97706] border-white text-white shadow-lg scale-110 ring-4 ring-[#D97706]/40'
                        : 'bg-[#1C1917] border-amber-300/60 text-amber-200 group-hover:border-white'
                    }`}
                  >
                    <span className="font-mono font-bold text-xs">
                      {player.tacticalPosition}
                    </span>
                  </div>

                  {/* Player Label Pill */}
                  <span
                    className={`mt-1 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md transition-all ${
                      isSelected
                        ? 'bg-white text-[#1C1917] font-black'
                        : 'bg-[#1C1917]/90 text-white border border-stone-600 group-hover:bg-[#1C1917]'
                    }`}
                  >
                    {player.assetName}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative z-10 text-center text-xs text-white/90 bg-black/40 py-1.5 px-4 rounded-full mx-auto backdrop-blur-sm border border-white/20 font-medium">
            Haz clic en cualquier dorsal para ver su análisis táctico territorial
          </div>
        </div>

        {/* Right: Tactical Role Deep Dive Card */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            
            {/* Player Header */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#D97706]/10 border border-[#D97706]/20 flex items-center justify-center">
                  {getPositionIcon(selectedPlayer.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97706] font-bold block">
                    Posición: {selectedPlayer.role} ({selectedPlayer.tacticalPosition})
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#2D2926]">
                    {selectedPlayer.assetName}
                  </h3>
                </div>
              </div>
            </div>

            {/* Tactical Quote */}
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200">
              <p className="text-sm font-serif italic text-stone-700">
                "{selectedPlayer.tacticalQuote}"
              </p>
            </div>

            {/* Why It Plays Here (Document rationale) */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Justificación Táctica de la Junta:</span>
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                {selectedPlayer.whyItPlaysHere}
              </p>
            </div>

            {/* Key Territories Connected */}
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 space-y-1 text-xs">
              <strong className="text-[#D97706] block mb-0.5 font-bold">Enclaves y Provincias Clave:</strong>
              <span className="text-stone-700">{selectedPlayer.keyLocation}</span>
            </div>

            {/* Tactical Switcher list */}
            <div className="pt-2 border-t border-stone-100 space-y-2">
              <span className="text-[11px] text-stone-500 font-semibold block">
                Explorar otras posiciones del 1-4-3-3:
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                {TACTICAL_ELEVEN.map((p) => (
                  <button
                    key={p.positionId}
                    onClick={() => setSelectedPlayer(p)}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                      selectedPlayer.positionId === p.positionId
                        ? 'bg-[#1C1917] text-white shadow-sm'
                        : 'bg-[#FAF9F6] text-stone-700 hover:bg-stone-200 border border-stone-200'
                    }`}
                  >
                    {p.tacticalPosition}: {p.assetName}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Tactical Bench Substitutes Card */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-7 space-y-3 text-xs shadow-sm">
            <h4 className="font-bold text-[#2D2926] uppercase tracking-wider text-xs flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D97706]" />
              <span>El Banquillo de Revulsivos:</span>
            </h4>
            <p className="text-stone-600 leading-relaxed font-light">
              <strong className="text-[#2D2926] font-semibold">Vino de Jerez, el Caballo Cartujano, los Campos de Golf de la Costa del Sol, los Pueblos Blancos, la Semana Santa y el Toro bravo.</strong> Revulsivos estratégicos que entran en la parrilla según el mercado emisor (Asia, Norteamérica, Europa nórdica) y la estación del año.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
