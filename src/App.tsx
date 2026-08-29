import { useState } from 'react';

import Header from './components/Header';
import BrandHero from './components/BrandHero';
import YouTubeHub from './components/YouTubeHub';
import InteractiveRoutes from './components/InteractiveRoutes';
import TacticalEleven from './components/TacticalEleven';
import TripPlannerModal from './components/TripPlannerModal';
import ImageGalleryModal from './components/ImageGalleryModal';

import {
  Sparkles,
  Compass,
  Tv,
  Users,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Heart,
  Play,
  Globe2,
  Plane,
  Trophy,
  Route,
  ChevronRight
} from 'lucide-react';


export default function App() {

  const [activeTab, setActiveTab] =
    useState<'brand' | 'youtube' | 'routes' | 'eleven' | 'planner'>('brand');

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

      setSavedStops(
        savedStops.filter(id => id !== stopId)
      );

    } else {

      setSavedStops([
        ...savedStops,
        stopId
      ]);

    }

  };


  const handleOpenLightbox = (
    imageUrl: string,
    title: string,
    caption: string
  ) => {

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

    <div
      className="
        min-h-screen
        bg-[#F7F4EC]
        text-[#292724]
        flex
        flex-col
        font-sans
        selection:bg-[#D69635]
        selection:text-white
      "
    >

      {/* ============================================================
          HEADER
      ============================================================ */}

      <Header

        activeTab={activeTab}

        setActiveTab={(tab) => {

          if (tab === 'planner') {

            setIsPlannerOpen(true);

          } else {

            setActiveTab(tab);

            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });

          }

        }}

        onOpenPlanner={() =>
          setIsPlannerOpen(true)
        }

        savedStopsCount={savedStops.length}

      />


      {/* ============================================================
          CINEMATIC OPENING
          Only appears in BRAND section
      ============================================================ */}

      {activeTab === 'brand' && (

        <section
          className="
            relative
            overflow-hidden
            bg-[#12382D]
            text-white
          "
        >

          {/* Decorative light */}

          <div
            className="
              absolute
              -top-40
              -right-40
              w-[520px]
              h-[520px]
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              absolute
              top-20
              right-10
              w-[300px]
              h-[300px]
              rounded-full
              bg-[#D59A38]/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-44
              -left-32
              w-[420px]
              h-[420px]
              rounded-full
              bg-[#A7472E]/20
              blur-3xl
            "
          />


          <div
            className="
              relative
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              lg:px-10
              pt-16
              md:pt-24
              pb-10
            "
          >

            <div
              className="
                grid
                lg:grid-cols-12
                gap-12
                lg:gap-16
                items-end
              "
            >


              {/* LEFT */}

              <div className="lg:col-span-8">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mb-7
                    text-[10px]
                    sm:text-xs
                    font-bold
                    tracking-[0.3em]
                    uppercase
                    text-[#E5B961]
                  "
                >

                  <Trophy className="w-4 h-4" />

                  Andalucía · Mundial 2030

                </div>


                <h1
                  className="
                    font-serif
                    text-[54px]
                    sm:text-[72px]
                    lg:text-[96px]
                    xl:text-[112px]
                    leading-[0.86]
                    tracking-[-0.045em]
                    font-bold
                  "
                >

                  Never Just

                  <span
                    className="
                      block
                      italic
                      text-[#E3AB4C]
                      font-semibold
                    "
                  >
                    a Match.
                  </span>

                </h1>


                <div
                  className="
                    mt-9
                    max-w-2xl
                    border-l-2
                    border-[#D99A35]
                    pl-5
                  "
                >

                  <p
                    className="
                      text-xl
                      md:text-2xl
                      leading-relaxed
                      text-white/80
                      font-light
                    "
                  >

                    El partido dura 90 minutos.

                    <span className="block text-white font-medium mt-1">

                      La oportunidad para Andalucía
                      empieza antes y puede durar mucho después.

                    </span>

                  </p>

                </div>


                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                    mt-9
                  "
                >

                  <button
                    onClick={() =>
                      setActiveTab('youtube')
                    }
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-[#D89A35]
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-[#17362D]
                      shadow-xl
                      shadow-black/20
                      transition
                      hover:-translate-y-0.5
                      hover:bg-[#E6AB47]
                    "
                  >

                    <Play className="w-4 h-4 fill-current" />

                    Descubrir el canal

                    <ChevronRight
                      className="
                        w-4
                        h-4
                        transition
                        group-hover:translate-x-1
                      "
                    />

                  </button>


                  <button
                    onClick={() =>
                      setActiveTab('routes')
                    }
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/25
                      bg-white/5
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      backdrop-blur
                      transition
                      hover:bg-white/10
                    "
                  >

                    <Compass className="w-4 h-4" />

                    Explorar Andalucía

                  </button>

                </div>

              </div>


              {/* RIGHT NUMBERS */}

              <div
                className="
                  lg:col-span-4
                  lg:border-l
                  lg:border-white/15
                  lg:pl-10
                "
              >

                <div
                  className="
                    grid
                    grid-cols-2
                    lg:grid-cols-1
                    gap-6
                  "
                >


                  <div>

                    <div
                      className="
                        font-serif
                        text-5xl
                        lg:text-6xl
                        font-bold
                        text-[#E3AB4C]
                      "
                    >
                      8
                    </div>

                    <div
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.2em]
                        text-white/50
                      "
                    >
                      provincias
                    </div>

                  </div>


                  <div>

                    <div
                      className="
                        font-serif
                        text-5xl
                        lg:text-6xl
                        font-bold
                        text-white
                      "
                    >
                      4
                    </div>

                    <div
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.2em]
                        text-white/50
                      "
                    >
                      rutas experienciales
                    </div>

                  </div>


                  <div>

                    <div
                      className="
                        font-serif
                        text-5xl
                        lg:text-6xl
                        font-bold
                        text-white
                      "
                    >
                      2030
                    </div>

                    <div
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.2em]
                        text-white/50
                      "
                    >
                      oportunidad global
                    </div>

                  </div>


                  <div>

                    <div
                      className="
                        font-serif
                        text-5xl
                        lg:text-6xl
                        font-bold
                        text-[#E3AB4C]
                      "
                    >
                      ∞
                    </div>

                    <div
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.2em]
                        text-white/50
                      "
                    >
                      historias posibles
                    </div>

                  </div>


                </div>

              </div>

            </div>


            {/* Provinces line */}

            <div
              className="
                mt-16
                pt-6
                border-t
                border-white/10
                flex
                flex-wrap
                gap-x-6
                gap-y-2
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/35
              "
            >

              <span>Almería</span>
              <span>Cádiz</span>
              <span>Córdoba</span>
              <span>Granada</span>
              <span>Huelva</span>
              <span>Jaén</span>
              <span>Málaga</span>
              <span>Sevilla</span>

            </div>

          </div>

        </section>

      )}


      {/* ============================================================
          BRAND STRATEGIC STRIP
      ============================================================ */}

      {activeTab === 'brand' && (

        <section
          className="
            bg-[#E6DDD0]
            border-b
            border-[#D8CCBB]
          "
        >

          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              lg:px-10
              py-6
            "
          >

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-4
              "
            >


              <div className="flex items-start gap-3">

                <Tv className="w-5 h-5 text-[#B06A2C] shrink-0 mt-0.5" />

                <div>

                  <strong className="block text-xs text-[#21372F]">
                    Contenido propio
                  </strong>

                  <span className="text-[11px] text-stone-500">
                    Un canal, no una campaña
                  </span>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <MapPin className="w-5 h-5 text-[#B06A2C] shrink-0 mt-0.5" />

                <div>

                  <strong className="block text-xs text-[#21372F]">
                    Redistribución territorial
                  </strong>

                  <span className="text-[11px] text-stone-500">
                    Las ocho provincias cuentan
                  </span>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <Users className="w-5 h-5 text-[#B06A2C] shrink-0 mt-0.5" />

                <div>

                  <strong className="block text-xs text-[#21372F]">
                    Del espectador al viajero
                  </strong>

                  <span className="text-[11px] text-stone-500">
                    Inspirar para convertir
                  </span>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <Globe2 className="w-5 h-5 text-[#B06A2C] shrink-0 mt-0.5" />

                <div>

                  <strong className="block text-xs text-[#21372F]">
                    Audiencia internacional
                  </strong>

                  <span className="text-[11px] text-stone-500">
                    Andalucía hacia el mundo
                  </span>

                </div>

              </div>


            </div>

          </div>

        </section>

      )}


      {/* ============================================================
          MAIN APP
      ============================================================ */}

      <main
        className="
          flex-1
          max-w-7xl
          w-full
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-8
          md:py-12
        "
      >

        {activeTab === 'brand' && (

          <>

            <BrandHero

              onExploreYouTube={() =>
                setActiveTab('youtube')
              }

              onExploreRoutes={() =>
                setActiveTab('routes')
              }

              onOpenImageLightbox={
                handleOpenLightbox
              }

            />


            {/* Strategic bridge */}

            <section
              className="
                mt-16
                md:mt-24
                mb-6
              "
            >

              <div
                className="
                  grid
                  lg:grid-cols-12
                  gap-8
                  lg:gap-12
                  items-center
                "
              >

                <div className="lg:col-span-5">

                  <div
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-[#A7642D]
                      font-bold
                      mb-4
                    "
                  >
                    La tesis
                  </div>

                  <h2
                    className="
                      font-serif
                      text-4xl
                      sm:text-5xl
                      lg:text-6xl
                      leading-[1.02]
                      font-bold
                      tracking-tight
                      text-[#17382D]
                    "
                  >

                    El Mundial es
                    la puerta.

                    <span
                      className="
                        block
                        italic
                        text-[#B46A2C]
                        mt-2
                      "
                    >
                      Andalucía es el viaje.
                    </span>

                  </h2>

                </div>


                <div
                  className="
                    lg:col-span-7
                    lg:border-l
                    lg:border-stone-300
                    lg:pl-10
                  "
                >

                  <p
                    className="
                      text-lg
                      sm:text-xl
                      leading-relaxed
                      text-stone-600
                    "
                  >

                    El reto no es comunicar que Andalucía
                    acoge fútbol.

                    <strong className="text-[#263E35]">

                      Es conseguir que millones de personas
                      que mirarán hacia el Mundial descubran
                      que el verdadero destino empieza
                      cuando termina el partido.

                    </strong>

                  </p>

                </div>

              </div>

            </section>


            {/* 3 Strategic blocks */}

            <section
              className="
                grid
                md:grid-cols-3
                gap-4
                mt-14
              "
            >

              <div
                className="
                  group
                  bg-[#17382D]
                  text-white
                  rounded-[32px]
                  p-7
                  min-h-[260px]
                  flex
                  flex-col
                  justify-between
                  overflow-hidden
                  relative
                "
              >

                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    w-40
                    h-40
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <Tv className="w-7 h-7 text-[#E2AA4D]" />

                <div>

                  <span
                    className="
                      text-[10px]
                      tracking-[0.2em]
                      uppercase
                      text-white/40
                    "
                  >
                    01 · Watch
                  </span>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-3xl
                      leading-tight
                    "
                  >
                    Un canal que convierte
                    atención en deseo
                  </h3>

                </div>

              </div>


              <div
                className="
                  bg-[#D69436]
                  text-[#17382D]
                  rounded-[32px]
                  p-7
                  min-h-[260px]
                  flex
                  flex-col
                  justify-between
                "
              >

                <Route className="w-7 h-7" />

                <div>

                  <span
                    className="
                      text-[10px]
                      tracking-[0.2em]
                      uppercase
                      text-[#17382D]/50
                    "
                  >
                    02 · Experience
                  </span>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-3xl
                      leading-tight
                    "
                  >
                    De mirar Andalucía
                    a recorrerla
                  </h3>

                </div>

              </div>


              <div
                className="
                  bg-[#782F24]
                  text-white
                  rounded-[32px]
                  p-7
                  min-h-[260px]
                  flex
                  flex-col
                  justify-between
                "
              >

                <Heart className="w-7 h-7 text-[#E9C795]" />

                <div>

                  <span
                    className="
                      text-[10px]
                      tracking-[0.2em]
                      uppercase
                      text-white/40
                    "
                  >
                    03 · Remember
                  </span>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-3xl
                      leading-tight
                    "
                  >
                    Que el Mundial termine.
                    El recuerdo no.
                  </h3>

                </div>

              </div>

            </section>

          </>

        )}


        {activeTab === 'youtube' && (

          <YouTubeHub
            onOpenImageLightbox={
              handleOpenLightbox
            }
          />

        )}


        {activeTab === 'routes' && (

          <InteractiveRoutes

            savedStops={savedStops}

            onToggleSaveStop={
              handleToggleSaveStop
            }

            onOpenPlanner={() =>
              setIsPlannerOpen(true)
            }

            onOpenImageLightbox={
              handleOpenLightbox
            }

          />

        )}


        {activeTab === 'eleven' && (

          <TacticalEleven />

        )}

      </main>


      {/* ============================================================
          ROUTE ACTION BAR
      ============================================================ */}

      {savedStops.length > 0 &&
       activeTab === 'routes' && (

        <div
          className="
            sticky
            bottom-6
            z-40
            max-w-lg
            mx-auto
            w-full
            px-4
          "
        >

          <div
            className="
              bg-[#17382D]/95
              text-white
              border
              border-white/10
              p-4
              rounded-3xl
              shadow-2xl
              backdrop-blur-xl
              flex
              items-center
              justify-between
              gap-4
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#D69436]
                  text-[#17382D]
                  font-black
                  text-xs
                  flex
                  items-center
                  justify-center
                "
              >
                {savedStops.length}
              </div>

              <div className="text-xs">

                <span className="font-bold block">
                  Tu Andalucía empieza aquí
                </span>

                <span className="text-white/50 text-[11px]">
                  {savedStops.length} paradas seleccionadas
                </span>

              </div>

            </div>


            <button

              onClick={() =>
                setIsPlannerOpen(true)
              }

              className="
                px-5
                py-2.5
                rounded-full
                bg-[#D69436]
                hover:bg-[#E2A649]
                text-[#17382D]
                font-bold
                text-xs
                flex
                items-center
                gap-1.5
                transition-all
                active:scale-95
              "
            >

              Generar viaje

              <ArrowRight className="w-3.5 h-3.5" />

            </button>

          </div>

        </div>

      )}


      {/* ============================================================
          PREMIUM FOOTER
      ============================================================ */}

      <footer
        className="
          mt-20
          bg-[#102C24]
          text-white
          overflow-hidden
          relative
        "
      >

        <div
          className="
            absolute
            -right-40
            -bottom-40
            w-[500px]
            h-[500px]
            rounded-full
            border
            border-white/5
          "
        />


        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            py-16
          "
        >


          {/* Footer headline */}

          <div
            className="
              grid
              lg:grid-cols-12
              gap-10
              pb-14
              border-b
              border-white/10
            "
          >

            <div className="lg:col-span-7">

              <div
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#DCA448]
                  mb-5
                "
              >
                Andalucía · 2030
              </div>

              <h2
                className="
                  font-serif
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  leading-none
                  tracking-tight
                "
              >

                Never Just

                <span
                  className="
                    italic
                    text-[#DCA448]
                  "
                >
                  {' '}a Match.
                </span>

              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-sm
                  leading-relaxed
                  text-white/55
                "
              >

                Una estrategia de contenidos,
                territorio y experiencia para convertir
                la atención global del Mundial 2030
                en una relación duradera con Andalucía.

              </p>

            </div>


            <div
              className="
                lg:col-span-5
                grid
                grid-cols-2
                gap-6
              "
            >

              <div>

                <Plane className="w-5 h-5 text-[#DCA448] mb-3" />

                <strong className="block text-sm">
                  Llegar
                </strong>

                <span className="text-xs text-white/45">
                  Convertir interés internacional
                  en intención de viaje.
                </span>

              </div>


              <div>

                <Compass className="w-5 h-5 text-[#DCA448] mb-3" />

                <strong className="block text-sm">
                  Recorrer
                </strong>

                <span className="text-xs text-white/45">
                  Redistribuir la experiencia
                  por las ocho provincias.
                </span>

              </div>


              <div>

                <Sparkles className="w-5 h-5 text-[#DCA448] mb-3" />

                <strong className="block text-sm">
                  Descubrir
                </strong>

                <span className="text-xs text-white/45">
                  Gastronomía, cultura,
                  naturaleza y formas de vida.
                </span>

              </div>


              <div>

                <Heart className="w-5 h-5 text-[#DCA448] mb-3" />

                <strong className="block text-sm">
                  Recordar
                </strong>

                <span className="text-xs text-white/45">
                  Construir una relación
                  que sobreviva al torneo.
                </span>

              </div>

            </div>

          </div>


          {/* Middle footer */}

          <div
            className="
              grid
              md:grid-cols-3
              gap-8
              py-10
              border-b
              border-white/10
            "
          >


            <div>

              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  mb-3
                "
              >
                Política de contenidos
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  text-[#E5B45D]
                "
              >

                <ShieldCheck className="w-4 h-4" />

                0% torneo oficial · 100% territorio

              </div>

            </div>


            <div>

              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  mb-3
                "
              >
                Presentado a
              </div>

              <strong className="text-sm">
                Consejería de Turismo
              </strong>

              <span className="block text-xs text-white/40 mt-1">
                Junta de Andalucía
              </span>

            </div>


            <div>

              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  mb-3
                "
              >
                Proponente
              </div>

              <strong className="text-sm">
                Publicaciones del Sur, S.A.
              </strong>

              <span className="block text-xs text-white/40 mt-1">
                7TV Andalucía
              </span>

            </div>

          </div>


          {/* Final */}

          <div
            className="
              pt-7
              flex
              flex-col
              sm:flex-row
              justify-between
              gap-3
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white/25
            "
          >

            <span>
              Andalucía · FIFA World Cup 2030
            </span>

            <span>
              Desde Andalucía al mundo
            </span>

          </div>

        </div>

      </footer>


      {/* ============================================================
          MODALS
      ============================================================ */}

      <TripPlannerModal

        isOpen={isPlannerOpen}

        onClose={() =>
          setIsPlannerOpen(false)
        }

        savedStops={savedStops}

        onToggleSaveStop={
          handleToggleSaveStop
        }

      />


      <ImageGalleryModal

        isOpen={lightboxData.isOpen}

        onClose={
          handleCloseLightbox
        }

        imageUrl={
          lightboxData.imageUrl
        }

        title={
          lightboxData.title
        }

        caption={
          lightboxData.caption
        }

      />


    </div>

  );

}

