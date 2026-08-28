import { useState } from 'react';

import {
  Sparkles,
  Shield,
  Play,
  Pause,
  Film,
  Music,
  Eye,
  ArrowRight,
  Award,
  Compass,
  Sun,
  Moon,
  MapPin,
  Globe2,
  Route,
  Heart,
  ChevronRight
} from 'lucide-react';

import {
  BRAND_MANIFESTO,
  BRAND_PILLARS
} from '../data/mockData';


interface BrandHeroProps {
  onExploreYouTube: () => void;
  onExploreRoutes: () => void;
  onOpenImageLightbox: (
    imageUrl: string,
    title: string,
    caption: string
  ) => void;
}


export default function BrandHero({
  onExploreYouTube,
  onExploreRoutes,
  onOpenImageLightbox
}: BrandHeroProps) {

  const [isPlayingManifesto, setIsPlayingManifesto] = useState(false);

  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const [activePillar, setActivePillar] =
    useState<'golden_pitch' | 'passion_field'>('golden_pitch');


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


  const selectedPillar =
    BRAND_PILLARS.find(
      p => p.id === activePillar
    ) || BRAND_PILLARS[0];


  return (

    <div
      id="brand-hero-container"
      className="space-y-12 md:space-y-16 py-2"
    >

      {/* ============================================================
          CAMPAIGN HERO
      ============================================================ */}

      <section
        className="
          relative
          overflow-hidden
          rounded-[34px]
          min-h-[680px]
          md:min-h-[760px]
          flex
          items-end
          shadow-2xl
          shadow-black/15
        "
      >

        {/* Background image */}

        <div className="absolute inset-0">

          <img
            src="/src/assets/images/brand_identity_1787943785805.jpg"
            alt="Andalucía Never Just a Match"
            referrerPolicy="no-referrer"
            className="
              w-full
              h-full
              object-cover
              scale-[1.02]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#102D25]/95
              via-[#14382D]/80
              to-[#14382D]/20
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/55
              via-transparent
              to-black/10
            "
          />

        </div>


        {/* Decorative circles */}

        <div
          className="
            absolute
            -top-36
            -right-36
            w-[420px]
            h-[420px]
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            absolute
            top-20
            right-20
            w-28
            h-28
            rounded-full
            bg-[#D99A35]/15
            blur-2xl
          "
        />


        {/* Hero content */}

        <div
          className="
            relative
            z-10
            w-full
            p-7
            sm:p-10
            md:p-14
            lg:p-16
          "
        >

          <div
            className="
              grid
              lg:grid-cols-12
              gap-10
              lg:gap-12
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
                  rounded-full
                  border
                  border-white/15
                  bg-white/8
                  px-4
                  py-2
                  backdrop-blur-md
                "
              >

                <Sparkles className="w-3.5 h-3.5 text-[#E1AE50]" />

                <span
                  className="
                    text-[10px]
                    sm:text-[11px]
                    uppercase
                    tracking-[0.22em]
                    font-bold
                    text-white/85
                  "
                >
                  Andalucía · Mundial 2030
                </span>

              </div>


              <h1
                className="
                  font-serif
                  text-[48px]
                  sm:text-[64px]
                  md:text-[78px]
                  lg:text-[92px]
                  xl:text-[106px]
                  leading-[0.88]
                  tracking-[-0.045em]
                  font-bold
                  text-white
                "
              >

                NEVER JUST

                <span
                  className="
                    block
                    italic
                    font-semibold
                    text-[#E3AA49]
                    mt-2
                  "
                >
                  A MATCH.
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
                    text-lg
                    sm:text-xl
                    md:text-2xl
                    leading-relaxed
                    text-white/80
                    font-light
                  "
                >

                  90 minutos pueden traerlos hasta aquí.

                  <span
                    className="
                      block
                      text-white
                      font-medium
                      mt-1
                    "
                  >
                    Nuestra oportunidad es conseguir
                    que descubran todo lo demás.
                  </span>

                </p>

              </div>


              {/* CTA */}

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
                  onClick={onExploreYouTube}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#D99A35]
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-[#17382D]
                    shadow-lg
                    shadow-black/20
                    transition
                    hover:-translate-y-0.5
                    hover:bg-[#E5AA48]
                    active:scale-95
                  "
                >

                  <Film className="w-4 h-4" />

                  Ver el canal

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
                  onClick={onExploreRoutes}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/25
                    bg-white/8
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-white/14
                  "
                >

                  <Compass className="w-4 h-4 text-[#E3AA49]" />

                  Explorar las rutas

                </button>


                <button
                  onClick={() =>
                    onOpenImageLightbox(
                      '/src/assets/images/brand_identity_1787943785805.jpg',
                      'Andalucía · Never Just a Match',
                      'Dirección visual y universo de marca para Andalucía 2030'
                    )
                  }
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-black/10
                    px-4
                    py-3.5
                    text-xs
                    font-semibold
                    text-white/75
                    backdrop-blur-md
                    transition
                    hover:text-white
                    hover:bg-white/10
                  "
                >

                  <Eye className="w-4 h-4" />

                  Ver artwork

                </button>

              </div>

            </div>


            {/* RIGHT STATS */}

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
                      text-[#E3AA49]
                    "
                  >
                    8
                  </div>

                  <div
                    className="
                      mt-1
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/45
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
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/45
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
                    1
                  </div>

                  <div
                    className="
                      mt-1
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/45
                    "
                  >
                    gran destino
                  </div>

                </div>


                <div>

                  <div
                    className="
                      font-serif
                      text-5xl
                      lg:text-6xl
                      font-bold
                      text-[#E3AA49]
                    "
                  >
                    ∞
                  </div>

                  <div
                    className="
                      mt-1
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/45
                    "
                  >
                    historias posibles
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Provinces */}

          <div
            className="
              mt-14
              pt-6
              border-t
              border-white/10
              flex
              flex-wrap
              gap-x-6
              gap-y-2
              text-[9px]
              sm:text-[10px]
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


      {/* ============================================================
          THE IDEA
      ============================================================ */}

      <section
        className="
          grid
          lg:grid-cols-12
          gap-10
          lg:gap-14
          items-center
        "
      >

        <div className="lg:col-span-5">

          <div
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[#A7612C]
              font-bold
              mb-4
            "
          >
            La idea
          </div>

          <h2
            className="
              font-serif
              text-4xl
              sm:text-5xl
              lg:text-6xl
              leading-[1]
              tracking-tight
              text-[#17382D]
              font-bold
            "
          >

            El Mundial es
            la puerta.

            <span
              className="
                block
                italic
                text-[#B6682D]
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

            El objetivo no es competir por la retransmisión del torneo.

            <strong className="text-[#233B32]">

              Es aprovechar la atención global
              para convertir espectadores en viajeros,
              visitas en experiencias y experiencias en recuerdo.

            </strong>

          </p>

        </div>

      </section>


      {/* ============================================================
          THREE MOVEMENTS
      ============================================================ */}

      <section
        className="
          grid
          md:grid-cols-3
          gap-5
        "
      >

        <article
          className="
            relative
            overflow-hidden
            rounded-[30px]
            bg-[#17382D]
            text-white
            p-7
            min-h-[280px]
            flex
            flex-col
            justify-between
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

          <Globe2 className="w-7 h-7 text-[#E3AA49]" />

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
              Convertir atención
              en deseo
            </h3>

            <p className="mt-3 text-sm text-white/55 leading-relaxed">
              Contenido diseñado para inspirar,
              no solo para informar.
            </p>

          </div>

        </article>


        <article
          className="
            rounded-[30px]
            bg-[#D99A35]
            text-[#17382D]
            p-7
            min-h-[280px]
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
              Convertir deseo
              en viaje
            </h3>

            <p className="mt-3 text-sm text-[#17382D]/65 leading-relaxed">
              Rutas y experiencias que llevan
              la atención más allá del estadio.
            </p>

          </div>

        </article>


        <article
          className="
            rounded-[30px]
            bg-[#7A3025]
            text-white
            p-7
            min-h-[280px]
            flex
            flex-col
            justify-between
          "
        >

          <Heart className="w-7 h-7 text-[#E6C594]" />

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
              Convertir el viaje
              en recuerdo
            </h3>

            <p className="mt-3 text-sm text-white/55 leading-relaxed">
              El Mundial termina.
              La relación con Andalucía no debería hacerlo.
            </p>

          </div>

        </article>

      </section>


      {/* ============================================================
          MANIFESTO + RIGHTS
      ============================================================ */}

      <section
        className="
          grid
          lg:grid-cols-12
          gap-6
          items-stretch
        "
      >

        {/* MANIFESTO */}

        <div
          className="
            lg:col-span-7
            bg-white
            rounded-[30px]
            p-7
            sm:p-9
            border
            border-stone-200
            shadow-sm
          "
        >

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              justify-between
              gap-5
            "
          >

            <div>

              <span
                className="
                  text-[10px]
                  uppercase
                  font-bold
                  tracking-[0.22em]
                  text-[#B7672D]
                "
              >
                Manifiesto
              </span>

              <h3
                className="
                  mt-2
                  text-3xl
                  sm:text-4xl
                  font-serif
                  font-bold
                  text-[#23362F]
                "
              >
                “Durante 90 minutos mirarán al sur...”
              </h3>

            </div>


            <button
              onClick={handleManifestoPlay}
              className={`
                inline-flex
                items-center
                justify-center
                gap-2
                px-4
                py-2.5
                rounded-full
                text-xs
                font-bold
                shrink-0
                transition-all
                ${
                  isPlayingManifesto
                    ? 'bg-[#D99A35] text-[#17382D]'
                    : 'bg-[#F2EEE7] text-stone-700 border border-stone-200'
                }
              `}
            >

              {
                isPlayingManifesto
                  ? <Pause className="w-3.5 h-3.5" />
                  : <Play className="w-3.5 h-3.5 fill-current" />
              }

              {
                isPlayingManifesto
                  ? 'Pausar'
                  : 'Locución 75s'
              }

            </button>

          </div>


          <div
            className="
              mt-7
              rounded-[24px]
              bg-[#F7F4EE]
              p-6
              sm:p-7
              border
              border-stone-200
              space-y-3
            "
          >

            {BRAND_MANIFESTO.textLines.map((line, idx) => {

              const isCurrent =
                isPlayingManifesto &&
                currentLineIndex === idx;

              return (

                <p
                  key={idx}
                  className={`
                    text-sm
                    sm:text-base
                    leading-relaxed
                    transition-all
                    duration-500
                    ${
                      isCurrent
                        ? 'text-[#B6682D] font-serif font-bold pl-4 border-l-2 border-[#D99A35]'
                        : 'text-stone-600 font-light'
                    }
                  `}
                >
                  {line}
                </p>

              );

            })}

          </div>


          <div
            className="
              grid
              sm:grid-cols-2
              gap-4
              mt-5
            "
          >

            <div
              className="
                rounded-2xl
                bg-[#F7F4EE]
                border
                border-stone-200
                p-4
              "
            >

              <span
                className="
                  text-[11px]
                  font-bold
                  text-[#315D49]
                  flex
                  items-center
                  gap-2
                "
              >
                <Film className="w-3.5 h-3.5" />
                Dirección de cámara
              </span>

              <p
                className="
                  mt-2
                  text-[11px]
                  text-stone-600
                  leading-relaxed
                "
              >
                {BRAND_MANIFESTO.cameraSpec}
              </p>

            </div>


            <div
              className="
                rounded-2xl
                bg-[#F7F4EE]
                border
                border-stone-200
                p-4
              "
            >

              <span
                className="
                  text-[11px]
                  font-bold
                  text-[#B6682D]
                  flex
                  items-center
                  gap-2
                "
              >
                <Music className="w-3.5 h-3.5" />
                Identidad sonora
              </span>

              <p
                className="
                  mt-2
                  text-[11px]
                  text-stone-600
                  leading-relaxed
                "
              >
                {BRAND_MANIFESTO.soundSpec}
              </p>

            </div>

          </div>

        </div>


        {/* RIGHTS + PILLARS */}

        <div
          className="
            lg:col-span-5
            flex
            flex-col
            gap-6
          "
        >

          {/* Rights */}

          <div
            className="
              rounded-[30px]
              bg-[#D99A35]
              text-[#17382D]
              p-7
              sm:p-8
              shadow-lg
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                mb-5
              "
            >

              <Shield className="w-5 h-5" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                "
              >
                Regla de derechos
              </span>

            </div>


            <h4
              className="
                text-4xl
                sm:text-5xl
                font-serif
                font-black
                tracking-tight
                leading-[0.95]
              "
            >
              0% Torneo
              <span className="block">
                100% Territorio
              </span>
            </h4>


            <p
              className="
                mt-5
                text-sm
                leading-relaxed
                text-[#17382D]/75
              "
            >
              El proyecto no depende de licencias oficiales.
              El foco está en patrimonio, gastronomía,
              naturaleza, cultura y territorio andaluz.
            </p>


            <div
              className="
                mt-6
                pt-5
                border-t
                border-[#17382D]/20
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.13em]
              "
            >

              <span>Activo propio</span>
              <span>Legado digital permanente</span>

            </div>

          </div>


          {/* Pillars */}

          <div
            className="
              rounded-[30px]
              bg-white
              border
              border-stone-200
              p-7
              sm:p-8
              shadow-sm
            "
          >

            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                justify-between
                gap-4
              "
            >

              <div>

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    font-bold
                    text-stone-400
                  "
                >
                  Arquitectura editorial
                </span>

                <h4
                  className="
                    mt-1
                    font-serif
                    font-bold
                    text-2xl
                    text-[#25372F]
                  "
                >
                  Dos universos
                </h4>

              </div>


              <div
                className="
                  flex
                  bg-[#F3EFE8]
                  p-1
                  rounded-full
                  border
                  border-stone-200
                "
              >

                <button
                  onClick={() =>
                    setActivePillar('golden_pitch')
                  }
                  className={`
                    px-3
                    py-1.5
                    rounded-full
                    text-[11px]
                    font-bold
                    flex
                    items-center
                    gap-1
                    transition
                    ${
                      activePillar === 'golden_pitch'
                        ? 'bg-[#17382D] text-white'
                        : 'text-stone-600'
                    }
                  `}
                >

                  <Sun className="w-3 h-3 text-[#D99A35]" />

                  Golden Pitch

                </button>


                <button
                  onClick={() =>
                    setActivePillar('passion_field')
                  }
                  className={`
                    px-3
                    py-1.5
                    rounded-full
                    text-[11px]
                    font-bold
                    flex
                    items-center
                    gap-1
                    transition
                    ${
                      activePillar === 'passion_field'
                        ? 'bg-[#8A392C] text-white'
                        : 'text-stone-600'
                    }
                  `}
                >

                  <Moon className="w-3 h-3" />

                  Passion Field

                </button>

              </div>

            </div>


            <div
              className="
                mt-5
                rounded-2xl
                bg-[#F7F4EE]
                p-5
                border
                border-stone-200
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >

                <span
                  className="
                    text-[10px]
                    uppercase
                    font-mono
                    font-bold
                    text-[#B6682D]
                  "
                >
                  {selectedPillar.sloganEn}
                </span>

                <span
                  className="
                    text-[9px]
                    px-2
                    py-1
                    rounded-full
                    bg-stone-200
                    text-stone-600
                    font-semibold
                  "
                >
                  {selectedPillar.audience.split('(')[0]}
                </span>

              </div>


              <h5
                className="
                  mt-3
                  font-serif
                  font-bold
                  text-xl
                  text-[#25372F]
                "
              >
                “{selectedPillar.slogan}”
              </h5>


              <p
                className="
                  mt-3
                  text-sm
                  text-stone-600
                  leading-relaxed
                "
              >
                {selectedPillar.purpose}
              </p>

            </div>


            <div
              className="
                mt-4
                rounded-2xl
                bg-[#315D49]/10
                border
                border-[#315D49]/15
                p-4
                flex
                items-center
                justify-between
                gap-3
              "
            >

              <div>

                <span
                  className="
                    flex
                    items-center
                    gap-1
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    font-bold
                    text-[#315D49]
                  "
                >

                  <Award className="w-3 h-3" />

                  Pieza gancho

                </span>

                <span
                  className="
                    block
                    mt-1
                    text-xs
                    font-semibold
                    text-stone-800
                  "
                >
                  “{selectedPillar.hookExample.title}”
                </span>

              </div>


              <span
                className="
                  text-[9px]
                  font-mono
                  font-bold
                  text-[#315D49]
                "
              >
                4K HDR
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          FINAL BRAND STATEMENT
      ============================================================ */}

      <section
        className="
          relative
          overflow-hidden
          rounded-[30px]
          bg-[#17382D]
          text-white
          p-8
          sm:p-10
          md:p-12
        "
      >

        <div
          className="
            absolute
            -right-24
            -bottom-24
            w-72
            h-72
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            relative
            z-10
            grid
            lg:grid-cols-12
            gap-8
            items-center
          "
        >

          <div className="lg:col-span-8">

            <div
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#E3AA49]
                font-bold
                mb-4
              "
            >
              Una política pública de atención
            </div>

            <h3
              className="
                font-serif
                text-4xl
                sm:text-5xl
                md:text-6xl
                leading-[1]
                font-bold
              "
            >
              No llevar el Mundial
              a Andalucía.

              <span
                className="
                  block
                  italic
                  text-[#E3AA49]
                  mt-2
                "
              >
                Llevar Andalucía al mundo.
              </span>

            </h3>

          </div>


          <div
            className="
              lg:col-span-4
              lg:border-l
              lg:border-white/15
              lg:pl-8
            "
          >

            <div className="space-y-4">

              <div className="flex items-start gap-3">

                <MapPin className="w-5 h-5 text-[#E3AA49] mt-0.5" />

                <div>

                  <strong className="block text-sm">
                    8 provincias
                  </strong>

                  <span className="text-xs text-white/45">
                    Una sola narrativa de destino
                  </span>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <Route className="w-5 h-5 text-[#E3AA49] mt-0.5" />

                <div>

                  <strong className="block text-sm">
                    4 rutas
                  </strong>

                  <span className="text-xs text-white/45">
                    Cultura, gastronomía,
                    legado y naturaleza
                  </span>

                </div>

              </div>


              <div className="flex items-start gap-3">

                <Globe2 className="w-5 h-5 text-[#E3AA49] mt-0.5" />

                <div>

                  <strong className="block text-sm">
                    1 audiencia global
                  </strong>

                  <span className="text-xs text-white/45">
                    Antes, durante y después de 2030
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}
