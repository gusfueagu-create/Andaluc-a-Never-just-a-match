import { useState } from 'react';

import {
  Compass,
  Tv,
  MapPin,
  Users,
  Sparkles,
  Volume2,
  VolumeX,
  Globe,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';


interface HeaderProps {

  activeTab:
    | 'brand'
    | 'youtube'
    | 'routes'
    | 'eleven'
    | 'planner';

  setActiveTab: (
    tab:
      | 'brand'
      | 'youtube'
      | 'routes'
      | 'eleven'
      | 'planner'
  ) => void;

  onOpenPlanner: () => void;

  savedStopsCount: number;

}


export default function Header({

  activeTab,
  setActiveTab,
  onOpenPlanner,
  savedStopsCount

}: HeaderProps) {

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const [lang, setLang] = useState<'ES' | 'EN'>('ES');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const goToTab = (
    tab:
      | 'brand'
      | 'youtube'
      | 'routes'
      | 'eleven'
      | 'planner'
  ) => {

    if (tab === 'planner') {

      onOpenPlanner();

    } else {

      setActiveTab(tab);

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    }

    setMobileMenuOpen(false);

  };


  const navItemClass = (tab: string) => {

    const active = activeTab === tab;

    return `
      relative
      px-1
      py-2
      text-[11px]
      font-bold
      uppercase
      tracking-[0.12em]
      transition
      ${
        active
          ? 'text-[#17382D]'
          : 'text-stone-500 hover:text-[#17382D]'
      }
    `;

  };


  return (

    <header
      id="main-header"
      className="
        sticky
        top-0
        z-50
        bg-[#F7F4EC]/90
        backdrop-blur-xl
        border-b
        border-[#17382D]/10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        <div
          className="
            h-[76px]
            flex
            items-center
            justify-between
            gap-6
          "
        >


          {/* =====================================================
              BRAND
          ===================================================== */}

          <button
            onClick={() => goToTab('brand')}
            className="
              flex
              items-center
              gap-3
              text-left
              group
              shrink-0
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-[#17382D]
                text-[#E3AA49]
                flex
                items-center
                justify-center
                font-serif
                italic
                font-bold
                text-xl
                shadow-sm
                transition
                group-hover:scale-105
              "
            >
              A
            </div>


            <div>

              <div
                className="
                  font-serif
                  font-bold
                  text-lg
                  sm:text-xl
                  leading-none
                  tracking-tight
                  text-[#17382D]
                "
              >

                Andalucía

                <span className="text-[#D99A35]">
                  {' '}2030
                </span>

              </div>


              <div
                className="
                  mt-1
                  text-[9px]
                  sm:text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-bold
                  text-stone-400
                "
              >
                Never Just a Match
              </div>

            </div>

          </button>


          {/* =====================================================
              DESKTOP NAV
          ===================================================== */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-7
              ml-auto
            "
          >


            <button
              onClick={() => goToTab('brand')}
              className={navItemClass('brand')}
            >

              Estrategia

              {activeTab === 'brand' && (

                <span
                  className="
                    absolute
                    left-0
                    right-0
                    -bottom-[17px]
                    h-[2px]
                    bg-[#D99A35]
                    rounded-full
                  "
                />

              )}

            </button>


            <button
              onClick={() => goToTab('youtube')}
              className={navItemClass('youtube')}
            >

              Canal

              {activeTab === 'youtube' && (

                <span
                  className="
                    absolute
                    left-0
                    right-0
                    -bottom-[17px]
                    h-[2px]
                    bg-[#D99A35]
                    rounded-full
                  "
                />

              )}

            </button>


            <button
              onClick={() => goToTab('routes')}
              className={navItemClass('routes')}
            >

              Rutas

              {activeTab === 'routes' && (

                <span
                  className="
                    absolute
                    left-0
                    right-0
                    -bottom-[17px]
                    h-[2px]
                    bg-[#D99A35]
                    rounded-full
                  "
                />

              )}

            </button>


            <button
              onClick={() => goToTab('eleven')}
              className={navItemClass('eleven')}
            >

              Golden 11

              {activeTab === 'eleven' && (

                <span
                  className="
                    absolute
                    left-0
                    right-0
                    -bottom-[17px]
                    h-[2px]
                    bg-[#D99A35]
                    rounded-full
                  "
                />

              )}

            </button>


          </nav>


          {/* =====================================================
              RIGHT ACTIONS
          ===================================================== */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-2
            "
          >


            {/* Audio */}

            <button
              onClick={() =>
                setIsPlayingAudio(!isPlayingAudio)
              }
              title="Ambiente sonoro"
              className={`
                w-9
                h-9
                rounded-full
                border
                flex
                items-center
                justify-center
                transition
                ${
                  isPlayingAudio
                    ? 'bg-[#D99A35]/15 border-[#D99A35]/40 text-[#B66C2D]'
                    : 'bg-white/50 border-stone-200 text-stone-500 hover:text-[#17382D]'
                }
              `}
            >

              {
                isPlayingAudio

                  ? (
                    <Volume2
                      className="
                        w-4
                        h-4
                      "
                    />
                  )

                  : (
                    <VolumeX
                      className="
                        w-4
                        h-4
                      "
                    />
                  )
              }

            </button>


            {/* Language */}

            <button
              onClick={() =>
                setLang(
                  lang === 'ES'
                    ? 'EN'
                    : 'ES'
                )
              }
              className="
                h-9
                px-3
                rounded-full
                border
                border-stone-200
                bg-white/50
                flex
                items-center
                gap-1.5
                text-[10px]
                font-bold
                text-stone-600
                hover:text-[#17382D]
              "
            >

              <Globe
                className="
                  w-3.5
                  h-3.5
                  text-[#B66C2D]
                "
              />

              {lang}

            </button>


            {/* Planner CTA */}

            <button
              onClick={onOpenPlanner}
              className="
                group
                h-10
                px-5
                rounded-full
                bg-[#17382D]
                hover:bg-[#204A3B]
                text-white
                flex
                items-center
                gap-2
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                shadow-md
                shadow-[#17382D]/15
                transition
                active:scale-95
              "
            >

              <Compass
                className="
                  w-4
                  h-4
                  text-[#E3AA49]
                "
              />

              Crear mi ruta


              {savedStopsCount > 0 && (

                <span
                  className="
                    ml-1
                    min-w-5
                    h-5
                    px-1
                    rounded-full
                    bg-[#D99A35]
                    text-[#17382D]
                    flex
                    items-center
                    justify-center
                    text-[9px]
                    font-black
                  "
                >
                  {savedStopsCount}
                </span>

              )}


              <ChevronRight
                className="
                  w-3.5
                  h-3.5
                  transition
                  group-hover:translate-x-0.5
                "
              />

            </button>

          </div>


          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className="
              lg:hidden
              w-10
              h-10
              rounded-full
              bg-[#17382D]
              text-white
              flex
              items-center
              justify-center
            "
          >

            {
              mobileMenuOpen

                ? (
                  <X
                    className="
                      w-5
                      h-5
                    "
                  />
                )

                : (
                  <Menu
                    className="
                      w-5
                      h-5
                    "
                  />
                )
            }

          </button>

        </div>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {mobileMenuOpen && (

          <div
            className="
              lg:hidden
              pb-5
              pt-2
              border-t
              border-[#17382D]/10
            "
          >

            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[24px]
                p-3
                border
                border-stone-200
                shadow-xl
              "
            >


              <button
                onClick={() =>
                  goToTab('brand')
                }
                className={`
                  w-full
                  p-3
                  rounded-2xl
                  flex
                  items-center
                  justify-between
                  text-sm
                  font-semibold
                  ${
                    activeTab === 'brand'
                      ? 'bg-[#17382D] text-white'
                      : 'text-stone-700'
                  }
                `}
              >

                <span
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <Sparkles
                    className="
                      w-4
                      h-4
                      text-[#D99A35]
                    "
                  />

                  Estrategia & Marca

                </span>

                <ChevronRight
                  className="
                    w-4
                    h-4
                    opacity-40
                  "
                />

              </button>


              <button
                onClick={() =>
                  goToTab('youtube')
                }
                className={`
                  w-full
                  p-3
                  mt-1
                  rounded-2xl
                  flex
                  items-center
                  justify-between
                  text-sm
                  font-semibold
                  ${
                    activeTab === 'youtube'
                      ? 'bg-[#17382D] text-white'
                      : 'text-stone-700'
                  }
                `}
              >

                <span
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <Tv
                    className="
                      w-4
                      h-4
                      text-[#D99A35]
                    "
                  />

                  Canal audiovisual

                </span>

                <ChevronRight
                  className="
                    w-4
                    h-4
                    opacity-40
                  "
                />

              </button>


              <button
                onClick={() =>
                  goToTab('routes')
                }
                className={`
                  w-full
                  p-3
                  mt-1
                  rounded-2xl
                  flex
                  items-center
                  justify-between
                  text-sm
                  font-semibold
                  ${
                    activeTab === 'routes'
                      ? 'bg-[#17382D] text-white'
                      : 'text-stone-700'
                  }
                `}
              >

                <span
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <MapPin
                    className="
                      w-4
                      h-4
                      text-[#D99A35]
                    "
                  />

                  Rutas · 8 provincias

                </span>

                <ChevronRight
                  className="
                    w-4
                    h-4
                    opacity-40
                  "
                />

              </button>


              <button
                onClick={() =>
                  goToTab('eleven')
                }
                className={`
                  w-full
                  p-3
                  mt-1
                  rounded-2xl
                  flex
                  items-center
                  justify-between
                  text-sm
                  font-semibold
                  ${
                    activeTab === 'eleven'
                      ? 'bg-[#17382D] text-white'
                      : 'text-stone-700'
                  }
                `}
              >

                <span
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <Users
                    className="
                      w-4
                      h-4
                      text-[#D99A35]
                    "
                  />

                  The Golden 11

                </span>

                <ChevronRight
                  className="
                    w-4
                    h-4
                    opacity-40
                  "
                />

              </button>


              {/* mobile planner */}

              <button
                onClick={() =>
                  goToTab('planner')
                }
                className="
                  w-full
                  mt-3
                  p-3.5
                  rounded-2xl
                  bg-[#D99A35]
                  text-[#17382D]
                  flex
                  items-center
                  justify-between
                  font-bold
                  text-sm
                "
              >

                <span
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <Compass
                    className="
                      w-4
                      h-4
                    "
                  />

                  Crear mi ruta

                </span>


                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  {savedStopsCount > 0 && (

                    <span
                      className="
                        min-w-5
                        h-5
                        px-1
                        rounded-full
                        bg-[#17382D]
                        text-white
                        flex
                        items-center
                        justify-center
                        text-[9px]
                        font-black
                      "
                    >
                      {savedStopsCount}
                    </span>

                  )}

                  <ChevronRight
                    className="
                      w-4
                      h-4
                    "
                  />

                </div>

              </button>


              {/* mobile controls */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mt-4
                  pt-4
                  border-t
                  border-stone-200
                "
              >

                <button
                  onClick={() =>
                    setIsPlayingAudio(
                      !isPlayingAudio
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    text-stone-600
                  "
                >

                  {
                    isPlayingAudio

                      ? (
                        <Volume2
                          className="
                            w-4
                            h-4
                            text-[#D99A35]
                          "
                        />
                      )

                      : (
                        <VolumeX
                          className="
                            w-4
                            h-4
                          "
                        />
                      )
                  }

                  {
                    isPlayingAudio
                      ? 'Audio activo'
                      : 'Activar ambiente'
                  }

                </button>


                <button
                  onClick={() =>
                    setLang(
                      lang === 'ES'
                        ? 'EN'
                        : 'ES'
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    text-stone-600
                  "
                >

                  <Globe
                    className="
                      w-4
                      h-4
                      text-[#D99A35]
                    "
                  />

                  {lang}

                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </header>

  );

}
    
