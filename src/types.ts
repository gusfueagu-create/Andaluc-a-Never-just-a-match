export interface RouteItem {
  id: string;
  name: string;
  province: 'Sevilla' | 'Málaga' | 'Cádiz' | 'Granada' | 'Córdoba' | 'Almería' | 'Jaén' | 'Huelva';
  category: 'cine' | 'gastronomia' | 'legado' | 'activa';
  categoryLabel: string;
  tagline: string;
  distanceFromCartuja: string; // e.g. "55 min en AVE", "1h 15 min"
  travelMode: 'AVE' | 'Carretera' | 'Tren / Bus' | 'Media Distancia';
  highlight: string;
  description: string;
  filmReference?: string;
  gastronomyTip?: string;
  practicalTip: string;
  bestTime: string;
  coordinates: { lat: number; lng: number };
  imagePlaceholder: string;
  bookingAction: string;
  tags: string[];
}

export interface TacticalPlayer {
  positionId: string;
  role: string;
  tacticalPosition: 'POR' | 'LD' | 'DFC1' | 'DFC2' | 'LI' | 'MCD' | 'MC1' | 'MC2' | 'ED' | 'DC' | 'EI' | 'BANQUILLO';
  assetName: string;
  whyItPlaysHere: string;
  tacticalQuote: string;
  keyLocation: string;
  iconName: string;
  coordinates: { x: number; y: number }; // percentage on 1-4-3-3 pitch
}

export interface VideoEpisode {
  id: string;
  franchise: 'golden_pitch' | 'passion_field' | 'overtime_talks' | 'golden_11' | 'rutas';
  franchiseLabel: string;
  title: string;
  titleIntl: string;
  duration: string;
  format: 'Horizontal 4K' | 'Vertical 9:16' | 'Gran Formato IFE';
  views: string;
  description: string;
  thumbnailUrl: string;
  location: string;
  province: string;
  featuredHosts: string[];
  audioStyle: string;
  hookRationale: string;
}

export interface BrandPillar {
  id: string;
  name: string;
  slogan: string;
  sloganEn: string;
  purpose: string;
  audience: string;
  style: string;
  camera: string;
  sound: string;
  rhythm: string;
  colorPalette: string[];
  hookExample: {
    title: string;
    description: string;
  };
}
