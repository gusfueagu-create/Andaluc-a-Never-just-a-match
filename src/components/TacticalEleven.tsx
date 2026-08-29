import { useState } from 'react';

import {
  Shield,
  Sun,
  Umbrella,
  Trees,
  Waves,
  Train,
  Music,
  Film,
  Utensils,
  HeartHandshake,
  Moon,
  Info,
  Award,
  Sparkles,
  ChevronRight
} from 'lucide-react';

import { TACTICAL_ELEVEN } from '../data/mockData';
import { TacticalPlayer } from '../types';


export default function TacticalEleven() {

  const [selectedPlayer, setSelectedPlayer] =
    useState<TacticalPlayer>(
      TACTICAL_ELEVEN[9] || TACTICAL_ELEVEN[0]
    );


  const getPositionIcon = (iconName: string) => {

    switch (iconName) {

      case 'Shield':
        return <Shield className="w-5 h-5" />;

      case 'Sun':
        return <Sun className="w-5 h-5" />;

      case 'Umbrella':
        return <Umbrella className="w-5 h-5" />;

      case 'Trees':
        return <Trees className="w-5 h-5" />;

      case 'Waves':
        return <Waves className="w-5 h-5" />;

      case 'Train':
        return <Train className="w-5 h-5" />;

      case 'Music':
        return <Music className="w-5 h-5" />;

      case 'Film':
        return <Film className="w-5 h-5" />;

      case 'Utensils':
        return <Utensils className="w-5 h-5" />;

      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;

      case 'Moon':
        return <Moon className="w-5 h-5" />;

      default:
        return <Shield className="w-5 h-5" />;

    }

  };


  return (

    <div
      id="tactical-eleven-container"
      className="space-y-14 md:space-y-20 py-2"
    >

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          rounded-[34px]
          bg-[#17382D]
          text-white
          px-7
          py-12
          sm:px-10
          sm:py-14
          md:px-14
          md:py-16
          lg:px-16
          lg:py-20
        "
      >

        <div
          className="
            absolute
            -right-32
            -top-32
            w-96
            h-96
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            absolute
            right-16
            bottom-0
            text-[180px]
            sm:text-[240px]
            lg:text-[320px]
            leading-none
            font-serif
            font-black
            text-white/[0.025]
            pointer-events-none
          "
        >
          11
        </div>


        <div
          className="
            relative
            z-10
            grid
            lg:grid-cols-12
            gap-10
            items-end
          "
        >

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
                bg-white/5
                px-4
                py-2
              "
            >

              <Sparkles className="w-3.5 h-3.5 text-[#E3AA49]" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  font-bold
                  text-white/70
                "
              >
                The Golden 11 · Andalucía 2030
              </span>

            </div>


            <h1
              className="
                font-serif
                text-[48px]
                sm:text-[64px]
                md:text-[82px]
                lg:text-[96px]
                leading-[0.9]
                tracking-[-0.045em]
                font-bold
              "
            >
              IF ANDALUSIA
              <span className="block">
                HAD A TEAM,
              </span>

              <span
                className="
                  block
                  italic
                  text-[#E3AA49]
                  mt-2
                "
              >
                THIS WOULD BE
                THE STARTING XI.
              </span>

            </h1>


            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                sm:text-xl
                leading-relaxed
                text-white/65
                font-light
              "
            >
              Once activos capaces de explicar Andalucía
              con un lenguaje que el mundo entero entiende:
              <strong className="text-white font-medium">
                {' '}una alineación.
              </strong>
            </p>

          </div>


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
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/35
              "
            >
              Formación
            </div>

            <div
              className="
                mt-2
                font-serif
                text-6xl
                lg:text-7xl
                font-bold
                text-[#E3AA49]
              "
            >
              1·4·3·3
            </div>

            <p
              className="
                mt-4
                text-sm
                leading-relaxed
                text-white/50
              "
            >
              Un sistema visual para ordenar territorio,
              cultura, gastronomía, naturaleza,
              conectividad y personas.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          IDEA
      ========================================================= */}

      <section
        className="
          grid
          lg:grid-cols-12
          gap-8
          lg:gap-14
          items-center
        "
      >

        <div className="lg:col-span-5">

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              font-bold
              text-[#A7612C]
            "
          >
            Una idea universal
          </span>

          <h2
            className="
              mt-3
              font-serif
              text-4xl
              sm:text-5xl
              lg:text-6xl
              leading-[1]
              font-bold
              text-[#17382D]
            "
          >
            El fútbol como
            lenguaje.

            <span
              className="
                block
                italic
                text-[#B6682D]
                mt-2
              "
            >
              Andalucía como equipo.
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
            No necesitamos explicar cómo se lee esta imagen.
            Un aficionado de Londres, Buenos Aires, Tokio o Nueva York
            reconoce inmediatamente una alineación.

            <strong className="text-[#17382D]">
              {' '}Ese código universal convierte los grandes
              activos de Andalucía en jugadores de un mismo equipo.
            </strong>
          </p>

        </div>

      </section>


      {/* =========================================================
          INTERACTIVE PITCH
      ========================================================= */}

      <section
        className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-7
          items-stretch
        "
      >

        {/* PITCH */}

        <div
          className="
            lg:col-span-7
            relative
            overflow-hidden
            rounded-[32px]
            bg-[#28553C]
            min-h-[650px]
            shadow-xl
          "
        >

          {/* grass effect */}

          <div
            className="
              absolute
              inset-0
              opacity-20
              bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.06)_50%)]
              bg-[length:120px_100%]
            "
          />


          {/* pitch outline */}

          <div
            className="
              absolute
              inset-7
              border-2
              border-white/25
              rounded-sm
              pointer-events-none
            "
          />


          {/* half line */}

          <div
            className="
              absolute
              top-1/2
              left-7
              right-7
              border-t-2
              border-white/25
              pointer-events-none
            "
          />


          {/* center circle */}

          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-36
              h-36
              border-2
              border-white/25
              rounded-full
              pointer-events-none
            "
          />


          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-2
              h-2
              bg-white/30
              rounded-full
            "
          />


          {/* penalty areas */}

          <div
            className="
              absolute
              top-7
              left-1/2
              -translate-x-1/2
              w-48
              h-20
              border-b-2
              border-x-2
              border-white/25
            "
          />

          <div
            className="
              absolute
              bottom-7
              left-1/2
              -translate-x-1/2
              w-48
              h-20
              border-t-2
              border-x-2
              border-white/25
            "
          />


          {/* PLAYER POSITIONS */}

          <div className="relative w-full h-[650px]">

            {TACTICAL_ELEVEN.map((player) => {

              const isSelected =
                selectedPlayer.positionId ===
                player.positionId;

              return (

                <button
                  key={player.positionId}
                  onClick={() =>
                    setSelectedPlayer(player)
                  }
                  style={{
                    left: `${player.coordinates.x}%`,
                    top: `${player.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  className={`
                    absolute
                    z-20
                    flex
                    flex-col
                    items-center
                    group
                    transition-all
                    duration-300
                    ${
                      isSelected
                        ? 'scale-110 z-30'
                        : 'hover:scale-105'
                    }
                  `}
                >

                  <div
                    className={`
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      rounded-full
                      flex
                      items-center
                      justify-center
                      border-2
                      shadow-xl
                      transition
                      ${
                        isSelected
                          ? 'bg-[#D99A35] border-white text-[#17382D] ring-4 ring-[#D99A35]/25'
                          : 'bg-[#17382D] border-[#E3AA49]/60 text-white'
                      }
                    `}
                  >

                    <span
                      className="
                        font-mono
                        text-xs
                        font-black
                      "
                    >
                      {player.tacticalPosition}
                    </span>

                  </div>


                  <span
                    className={`
                      mt-2
                      max-w-[120px]
                      px-3
                      py-1
                      rounded-full
                      text-[9px]
                      sm:text-[10px]
                      font-bold
                      whitespace-nowrap
                      shadow-md
                      ${
                        isSelected
                          ? 'bg-[#D99A35] text-[#17382D]'
                          : 'bg-[#102D25]/90 text-white'
                      }
                    `}
                  >
                    {player.assetName}
                  </span>

                </button>

              );

            })}

          </div>


          <div
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              rounded-full
              bg-black/25
              border
              border-white/10
              backdrop-blur-md
              px-4
              py-2
              text-[10px]
              text-white/70
              whitespace-nowrap
            "
          >
            Selecciona un jugador para descubrir su papel
          </div>

        </div>


        {/* =========================================================
            SELECTED PLAYER
        ========================================================= */}

        <div
          className="
            lg:col-span-5
            rounded-[32px]
            bg-[#F5F0E7]
            border
            border-stone-200
            p-7
            sm:p-8
            lg:p-9
            flex
            flex-col
          "
        >

          <div
            className="
              flex
              items-start
              justify-between
              gap-4
            "
          >

            <div>

              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  font-bold
                  text-[#A7612C]
                "
              >
                {selectedPlayer.role}
                {' · '}
                {selectedPlayer.tacticalPosition}
              </div>


              <h3
                className="
                  mt-2
                  font-serif
                  text-4xl
                  sm:text-5xl
                  font-bold
                  leading-none
                  text-[#17382D]
                "
              >
                {selectedPlayer.assetName}
              </h3>

            </div>


            <div
              className="
                w-12
                h-12
                rounded-full
                bg-[#17382D]
                text-[#E3AA49]
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              {getPositionIcon(selectedPlayer.iconName)}
            </div>

          </div>


          {/* quote */}

          <div
            className="
              mt-8
              py-6
              border-y
              border-stone-300
            "
          >

            <p
              className="
                font-serif
                italic
                text-2xl
                sm:text-3xl
                leading-snug
                text-[#7A3025]
              "
            >
              “{selectedPlayer.tacticalQuote}”
            </p>

          </div>


          {/* rationale */}

          <div className="mt-7">

            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                uppercase
                tracking-[0.18em]
                font-bold
                text-stone-400
              "
            >
              <Info className="w-3.5 h-3.5 text-[#A7612C]" />
              Por qué juega aquí
            </div>


            <p
              className="
                mt-3
                text-sm
                sm:text-base
                leading-relaxed
                text-stone-600
              "
            >
              {selectedPlayer.whyItPlaysHere}
            </p>

          </div>


          {/* locations */}

          <div
            className="
              mt-7
              rounded-2xl
              bg-white
              border
              border-stone-200
              p-5
            "
          >

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.16em]
                font-bold
                text-[#A7612C]
              "
            >
              Territorios clave
            </span>

            <p
              className="
                mt-2
                text-sm
                leading-relaxed
                text-stone-600
              "
            >
              {selectedPlayer.keyLocation}
            </p>

          </div>


          {/* player navigation */}

          <div className="mt-auto pt-8">

            <div
              className="
                text-[9px]
                uppercase
                tracking-[0.16em]
                font-bold
                text-stone-400
                mb-3
              "
            >
              Explorar el once
            </div>


            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >

              {TACTICAL_ELEVEN.map((player) => (

                <button
                  key={player.positionId}
                  onClick={() =>
                    setSelectedPlayer(player)
                  }
                  title={player.assetName}
                  className={`
                    w-9
                    h-9
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-[10px]
                    font-mono
                    font-black
                    transition
                    ${
                      selectedPlayer.positionId ===
                      player.positionId
                        ? 'bg-[#D99A35] text-[#17382D]'
                        : 'bg-white text-stone-500 border border-stone-200 hover:border-[#D99A35]'
                    }
                  `}
                >
                  {player.tacticalPosition}
                </button>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          COACH / CAPTAIN / BENCH
      ========================================================= */}

      <section
        className="
          grid
          md:grid-cols-3
          gap-5
        "
      >

        <div
          className="
            rounded-[26px]
            bg-[#17382D]
            text-white
            p-7
          "
        >

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#E3AA49]
              font-bold
            "
          >
            The Coach
          </span>

          <h3
            className="
              mt-3
              font-serif
              text-3xl
              font-bold
            "
          >
            Andalucía
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-white/50
            "
          >
            Una estrategia pública de destino que ordena
            el equipo, marca el sistema y consigue que
            todas las provincias entren en juego.
          </p>

        </div>


        <div
          className="
            rounded-[26px]
            bg-[#D99A35]
            text-[#17382D]
            p-7
          "
        >

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#17382D]/55
              font-bold
            "
          >
            The Captain
          </span>

          <h3
            className="
              mt-3
              font-serif
              text-3xl
              font-bold
            "
          >
            Sevilla
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-[#17382D]/60
            "
          >
            La sede recibe el foco global,
            pero su función estratégica es repartir juego
            y convertir atención en movimiento por Andalucía.
          </p>

        </div>


        <div
          className="
            rounded-[26px]
            bg-[#7A3025]
            text-white
            p-7
          "
        >

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#E6C594]
              font-bold
            "
          >
            The Bench
          </span>

          <h3
            className="
              mt-3
              font-serif
              text-3xl
              font-bold
            "
          >
            Infinite depth
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-white/55
            "
          >
            Jerez, caballo, golf, Pueblos Blancos,
            Semana Santa y otros activos permiten adaptar
            la alineación al mercado, la estación y la audiencia.
          </p>

        </div>

      </section>


      {/* =========================================================
          FINAL STATEMENT
      ========================================================= */}

      <section
        className="
          py-12
          sm:py-16
          text-center
        "
      >

        <div
          className="
            text-[10px]
            uppercase
            tracking-[0.28em]
            font-bold
            text-[#A7612C]
          "
        >
          Never Just a Match
        </div>


        <h2
          className="
            mt-5
            mx-auto
            max-w-5xl
            font-serif
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            leading-[1]
            font-bold
            text-[#17382D]
          "
        >
          El Mundial pone el balón en juego.

          <span
            className="
              block
              italic
              text-[#B6682D]
              mt-3
            "
          >
            Andalucía pone el equipo.
          </span>

        </h2>

      </section>

    </div>

  );

}

