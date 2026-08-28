import { Eye, Download, X, Sparkles, Share2 } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption: string;
}

export default function ImageGalleryModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption
}: LightboxProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4">
      <div className="bg-stone-900 border border-amber-500/40 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                {title}
              </h3>
              <p className="text-xs text-stone-400">
                Visualización de Maqueta en Alta Resolución
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              download="andalucia_never_just_a_match.jpg"
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
              title="Descargar Imagen"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Descargar</span>
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-amber-500 hover:text-stone-950 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Preview Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center p-2 sm:p-6 overflow-hidden min-h-[300px]">
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Caption & Metadata Footer */}
        <div className="p-4 sm:p-6 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-300">
          <p className="font-light italic text-stone-300">
            {caption}
          </p>
          <span className="text-[11px] font-mono text-amber-400 whitespace-nowrap">
            4K HDR Concept Artwork · Junta de Andalucía
          </span>
        </div>

      </div>
    </div>
  );
}
