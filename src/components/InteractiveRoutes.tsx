import { useState } from 'react';

import {
  MapPin,
  Film,
  Utensils,
  Landmark,
  Trees,
  Clock,
  Compass,
  Plus,
  Check,
  Train,
  Car,
  ExternalLink,
  Info,
  ChevronRight,
  Route,
  Globe2,
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';

import {
  EXPERIENCE_ROUTES,
  PROVINCES_DATA
} from '../data/mockData';

import { RouteItem } from '../types';


interface InteractiveRoutesProps {
  savedStops: string[];
  onToggleSaveStop: (stopId: string) => void;
  onOpenPlanner: () => void;
  onOpenImageLightbox: (
    imageUrl: string,
    title: string,
    caption: string
  ) => void;
}


export default function InteractiveRoutes({
  savedStops,
  onToggleSaveStop,
  onOpenPlanner,
  onOpenImageLightbox
}: InteractiveRoutesProps) {

  const [selectedCategory, setSelectedCategory] =
    useState<string>('all');

  const [selectedProvince, setSelectedProvince] =
    useState<string>('all');

  const [activeModalStop, setActiveModalStop] =
    useState<RouteItem | null>(null);

  const [radiusFilter, setRadiusFilter] =
    useState<string>('all');


  const filteredRoutes = EXPERIENCE_ROUTES.filter((item) => {

    const matchesCategory =
      selectedCategory === 'all' ||
      item.category === selectedCategory;

    const matchesProvince =
      selectedProvince === 'all' ||
      item.province === selectedProvince;

    let matchesRadius = true;

    if (radiusFilter === 'under1h') {
      matchesRadius =
        item.distanceFromCartuja.includes('min') &&
        !item.distanceFromCartuja.includes('h');
    }

    if (radiusFilter === '1to2h') {
      matchesRadius =
        item.distanceFromCartuja.includes('1h') ||
        item.distanceFromCartuja.includes('50 min') ||
        item.distanceFromCartuja.includes('55 min');
    }

    if (radiusFilter === 'escapada') {
      matchesRadius =
        item.distanceFromCartuja.includes('2h') ||
        item.distanceFromCartuja.includes('3h');
    }

    return (
      matchesCategory &&
      matchesProvince &&
      matchesRadius
    );

  });


  const getCategoryIcon = (category: string) => {

    switch (category) {

      case 'cine':
        return <Film className="w-4 h-4" />;

      case 'gastronomia':
        return <Utensils className="w-4 h-4" />;

      case 'legado':
        return <Landmark className="w-4 h-4" />;

      case 'activa':
        return <Trees className="w-4 h-4" />;

      default:
        return <Compass className="w-4 h-4" />;

    }

  };


  return (

    <div
      id="interactive-routes-container"
      className="space-y-14 md:space-y-20 py-2"
    >

      {/* ============================================================
          ROUTES HERO
      ============================================================ */}

      <section
        className="
          relative
          overflow-hidden
          rounded-[34px]
          min-h-[620px]
          md:min-h-[700px]
          flex
          items-end
          bg-[#17382D]
          text-white
          shadow-2xl
          shadow-black/15
        "
      >

        {/* Background collage using one route image */}

        <div className="absolute inset-0">

          <img
            src={EXPERIENCE_ROUTES[0]?.imagePlaceholder}
            alt="Andalucía rutas experienciales"
            referrerPolicy="no-referrer"
            className="
              w-full
              h-full
              object-cover
              scale-[1.03]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#102D25]/95
              via-[#17382D]/78
              to-black/20
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-transparent
              to-black/10
            "
          />

        </div>


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
                  bg-white/8
                  px-4
                  py-2
                  backdrop-blur-md
                "
              >

                <Compass className="w-3.5 h-3.5 text-[#E3AA49]" />

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
                  Explore Andalucía
                </span>

              </div>


              <h1
                className="
                  font-serif
                  text-[46px]
                  sm:text-[62px]
                  md:text-[78px]
                  lg:text-[92px]
                  xl:text-[104px]
                  leading-[0.88]
                  tracking-[-0.045em]
                  font-bold
                  text-white
                "
              >
                90 MINUTES
                <span className="block">
                  IN SEVILLE.
                </span>

                <span
                  className="
                    block
                    italic
                    text-[#E3AA49]
                    font-semibold
                    mt-2
                  "
                >
                  THEN, ALL OF ANDALUSIA.
                </span>
              </h1>


              <div
                className="
                  mt-8
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
                  8 provincias. 4 grandes rutas.

                  <span
                    className="
                      block
                      mt-1
                      text-white
                      font-medium
                    "
                  >
                    Miles de razones para quedarse
                    después del partido.
                  </span>

                </p>

              </div>


              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-3
                "
              >

                <button
                  onClick={onOpenPlanner}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#D99A35]
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-[#17382D]
                    hover:bg-[#E3AA49]
                    transition
                    active:scale-95
                  "
                >

                  <Route className="w-4 h-4" />

                  Crear mi ruta

                  {savedStops.length > 0 && (

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
                      {savedStops.length}
                    </span>

                  )}

                </button>


                <button
                  onClick={() =>
                    onOpenImageLightbox(
                      EXPERIENCE_ROUTES[0]?.imagePlaceholder,
                      'Andalucía · 8 provincias',
                      'Rutas experienciales para descubrir Andalucía más allá del Mundial'
                    )
                  }
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/8
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-md
                    hover:bg-white/12
                  "
                >

                  <Globe2 className="w-4 h-4" />

                  Ver universo visual

                </button>

              </div>

            </div>


            <div
              className="
                lg:col-span-4
                lg:border-l
                lg:border-white/15
                lg:pl-10
              "
            >

              <div className="space-y-7">

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
                      text-white/40
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
                      text-white/40
                    "
                  >
                    journeys
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
                      text-white/40
                    "
                  >
                    destino
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          FOUR ROUTES
      ============================================================ */}

      <section className="space-y-7">

        <div>

          <div
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              font-bold
              text-[#A7612C]
            "
          >
            Four journeys
          </div>

          <h2
            className="
              mt-2
              font-serif
              text-4xl
              sm:text-5xl
              font-bold
              text-[#17382D]
            "
          >
            Cuatro maneras
            de descubrir Andalucía
          </h2>

        </div>


        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-5
          "
        >

          <RouteCategoryCard
            active={selectedCategory === 'cine'}
            title="Andalucía on Screen"
            subtitle="Cine & localizaciones"
            description="Grandes rodajes, paisajes icónicos y lugares que ya forman parte del imaginario global."
            icon={<Film className="w-7 h-7" />}
            tone="dark"
            onClick={() => {
              setSelectedCategory(
                selectedCategory === 'cine'
                  ? 'all'
                  : 'cine'
              );
              setSelectedProvince('all');
            }}
          />

          <RouteCategoryCard
            active={selectedCategory === 'gastronomia'}
            title="The Third Half"
            subtitle="Gastronomía & producto"
            description="Alta cocina, barras, vinos, producto y sabores que prolongan el partido alrededor de una mesa."
            icon={<Utensils className="w-7 h-7" />}
            tone="gold"
            onClick={() => {
              setSelectedCategory(
                selectedCategory === 'gastronomia'
                  ? 'all'
                  : 'gastronomia'
              );
              setSelectedProvince('all');
            }}
          />

          <RouteCategoryCard
            active={selectedCategory === 'legado'}
            title="Timeless Andalusia"
            subtitle="Legado & pasión"
            description="Patrimonio, flamenco, historia y lugares capaces de convertir una visita en memoria."
            icon={<Landmark className="w-7 h-7" />}
            tone="terracotta"
            onClick={() => {
              setSelectedCategory(
                selectedCategory === 'legado'
                  ? 'all'
                  : 'legado'
              );
              setSelectedProvince('all');
            }}
          />

          <RouteCategoryCard
            active={selectedCategory === 'activa'}
            title="The Wild South"
            subtitle="Naturaleza & aventura"
            description="Costa, sierra, parques naturales y experiencias activas para descubrir el sur al aire libre."
            icon={<Trees className="w-7 h-7" />}
            tone="green"
            onClick={() => {
              setSelectedCategory(
                selectedCategory === 'activa'
                  ? 'all'
                  : 'activa'
              );
              setSelectedProvince('all');
            }}
          />

        </div>

      </section>


      {/* ============================================================
          PROVINCES
      ============================================================ */}

      <section
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
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
          "
        >

          <div>

            <div
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                font-bold
                text-[#A7612C]
              "
            >
              Explore 8 provinces
            </div>

            <h2
              className="
                mt-2
                font-serif
                text-4xl
                sm:text-5xl
                font-bold
                text-[#17382D]
              "
            >
              Andalucía no es una excursión.
              Es el destino.
            </h2>

          </div>


          <div
            className="
              flex
              items-center
              gap-1
              overflow-x-auto
              p-1
              rounded-full
              bg-[#F4F0E8]
              border
              border-stone-200
              no-scrollbar
            "
          >

            {[
              ['all', 'Todo'],
              ['under1h', '<1h'],
              ['1to2h', '1–2h'],
              ['escapada', '2h+']
            ].map(([id, label]) => (

              <button
                key={id}
                onClick={() => setRadiusFilter(id)}
                className={`
                  px-4
                  py-2
                  rounded-full
                  text-[11px]
                  font-bold
                  whitespace-nowrap
                  transition
                  ${
                    radiusFilter === id
                      ? 'bg-[#17382D] text-white'
                      : 'text-stone-600 hover:text-[#17382D]'
                  }
                `}
              >
                {label}
              </button>

            ))}

          </div>

        </div>


        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-9
            gap-3
            mt-8
          "
        >

          <button
            onClick={() => setSelectedProvince('all')}
            className={`
              rounded-2xl
              p-4
              text-left
              border
              transition
              ${
                selectedProvince === 'all'
                  ? 'bg-[#17382D] text-white border-[#17382D]'
                  : 'bg-[#F8F5EE] text-stone-700 border-stone-200 hover:border-[#D99A35]/50'
              }
            `}
          >

            <span className="text-xs font-bold block">
              Todas
            </span>

            <span className="text-[10px] opacity-60">
              8 provincias
            </span>

          </button>


          {PROVINCES_DATA.map((prov) => {

            const isSelected =
              selectedProvince === prov.name;

            return (

              <button
                key={prov.name}
                onClick={() =>
                  setSelectedProvince(
                    isSelected
                      ? 'all'
                      : prov.name
                  )
                }
                className={`
                  rounded-2xl
                  p-4
                  text-left
                  border
                  transition
                  ${
                    isSelected
                      ? 'bg-[#17382D] text-white border-[#17382D]'
                      : 'bg-[#F8F5EE] text-stone-700 border-stone-200 hover:border-[#D99A35]/50'
                  }
                `}
              >

                <span className="text-xs font-bold block">
                  {prov.name}
                </span>

                <span
                  className={`
                    text-[10px]
                    mt-1
                    block
                    font-mono
                    ${
                      isSelected
                        ? 'text-white/50'
                        : 'text-[#A7612C]'
                    }
                  `}
                >
                  {prov.timeFromCartuja.split(' (')[0]}
                </span>

              </button>

            );

          })}

        </div>

      </section>


      {/* ============================================================
          EXPERIENCES
      ============================================================ */}

      <section className="space-y-7">

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-end
            justify-between
            gap-5
          "
        >

          <div>

            <div
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#A7612C]
                font-bold
              "
            >
              Experiences
            </div>

            <h2
              className="
                mt-2
                font-serif
                text-4xl
                sm:text-5xl
                font-bold
                text-[#17382D]
              "
            >
              Elige qué Andalucía
              quieres vivir
            </h2>

          </div>


          {savedStops.length > 0 && (

            <button
              onClick={onOpenPlanner}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-[#A7612C]
                hover:text-[#17382D]
              "
            >

              Mi ruta · {savedStops.length}

              <ArrowRight className="w-4 h-4" />

            </button>

          )}

        </div>


        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {filteredRoutes.map((stop) => {

            const isSaved =
              savedStops.includes(stop.id);

            return (

              <article
                key={stop.id}
                className="
                  group
                  bg-white
                  rounded-[28px]
                  overflow-hidden
                  border
                  border-stone-200
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    bg-stone-900
                  "
                >

                  <img
                    src={stop.imagePlaceholder}
                    alt={stop.name}
                    referrerPolicy="no-referrer"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-transparent
                      to-black/10
                    "
                  />


                  <button
                    onClick={() =>
                      onToggleSaveStop(stop.id)
                    }
                    className={`
                      absolute
                      top-4
                      right-4
                      w-10
                      h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      backdrop-blur-md
                      border
                      transition
                      ${
                        isSaved
                          ? 'bg-[#D99A35] text-[#17382D] border-[#D99A35]'
                          : 'bg-black/25 text-white border-white/15 hover:bg-white hover:text-[#17382D]'
                      }
                    `}
                  >

                    {
                      isSaved
                        ? <Check className="w-4 h-4 stroke-[3]" />
                        : <Plus className="w-4 h-4" />
                    }

                  </button>


                  <div
                    className="
                      absolute
                      left-4
                      bottom-4
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        font-bold
                        text-[#E8C27C]
                      "
                    >

                      {getCategoryIcon(stop.category)}

                      {stop.categoryLabel}

                    </div>


                    <div
                      className="
                        mt-1
                        text-white
                        text-sm
                        font-semibold
                      "
                    >
                      {stop.province}
                    </div>

                  </div>


                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      rounded-full
                      bg-black/45
                      backdrop-blur-md
                      px-3
                      py-1.5
                      flex
                      items-center
                      gap-1.5
                      text-[10px]
                      text-white
                    "
                  >

                    {
                      stop.travelMode === 'AVE'
                        ? <Train className="w-3.5 h-3.5" />
                        : <Car className="w-3.5 h-3.5" />
                    }

                    {stop.distanceFromCartuja}

                  </div>

                </div>


                <div className="p-6">

                  <h3
                    className="
                      font-serif
                      text-2xl
                      leading-tight
                      font-bold
                      text-[#17382D]
                      group-hover:text-[#B6682D]
                      transition
                    "
                  >
                    {stop.name}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      text-[#A7612C]
                    "
                  >
                    “{stop.tagline}”
                  </p>


                  <p
                    className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-stone-500
                      line-clamp-3
                    "
                  >
                    {stop.description}
                  </p>


                  <div
                    className="
                      mt-5
                      pt-4
                      border-t
                      border-stone-100
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <button
                      onClick={() =>
                        setActiveModalStop(stop)
                      }
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        font-bold
                        text-[#A7612C]
                        hover:text-[#17382D]
                      "
                    >

                      <Info className="w-3.5 h-3.5" />

                      Ver experiencia

                    </button>


                    <button
                      onClick={() =>
                        onToggleSaveStop(stop.id)
                      }
                      className={`
                        px-4
                        py-2
                        rounded-full
                        text-xs
                        font-bold
                        flex
                        items-center
                        gap-1.5
                        transition
                        ${
                          isSaved
                            ? 'bg-[#17382D] text-white'
                            : 'bg-[#F3EFE8] text-stone-700 hover:bg-[#17382D] hover:text-white'
                        }
                      `}
                    >

                      {
                        isSaved
                          ? <Check className="w-3 h-3" />
                          : <Plus className="w-3 h-3" />
                      }

                      {
                        isSaved
                          ? 'En mi ruta'
                          : 'Añadir'
                      }

                    </button>

                  </div>

                </div>

              </article>

            );

          })}

        </div>

      </section>


      {/* ============================================================
          FINAL CTA
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
              "
            >
              Your Andalucía
            </div>

            <h2
              className="
                mt-3
                font-serif
                text-4xl
                sm:text-5xl
                lg:text-6xl
                leading-[1]
                font-bold
              "
            >
              No hay una sola ruta.

              <span
                className="
                  block
                  italic
                  text-[#E3AA49]
                  mt-2
                "
              >
                Hay una Andalucía para cada viajero.
              </span>

            </h2>

          </div>


          <div
            className="
              lg:col-span-4
              lg:text-right
            "
          >

            <button
              onClick={onOpenPlanner}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#D99A35]
                px-6
                py-3.5
                text-sm
                font-bold
                text-[#17382D]
                hover:bg-[#E3AA49]
                transition
              "
            >

              <Route className="w-4 h-4" />

              Crear mi viaje

              <ChevronRight className="w-4 h-4" />

            </button>

          </div>

        </div>

      </section>


      {/* ============================================================
          MODAL
      ============================================================ */}

      {activeModalStop && (

        <div
          className="
            fixed
            inset-0
            z-[70]
            bg-black/75
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
          "
        >

          <div
            className="
              bg-[#F8F5EE]
              rounded-[30px]
              max-w-3xl
              w-full
              overflow-hidden
              shadow-2xl
              max-h-[90vh]
              overflow-y-auto
            "
          >

            <div
              className="
                relative
                aspect-[16/9]
                bg-stone-900
                overflow-hidden
              "
            >

              <img
                src={activeModalStop.imagePlaceholder}
                alt={activeModalStop.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-transparent
                  to-black/30
                "
              />


              <button
                onClick={() =>
                  setActiveModalStop(null)
                }
                className="
                  absolute
                  top-5
                  right-5
                  w-10
                  h-10
                  rounded-full
                  bg-black/30
                  text-white
                  flex
                  items-center
                  justify-center
                  border
                  border-white/15
                  backdrop-blur-md
                  hover:bg-white
                  hover:text-black
                "
              >

                <X className="w-4 h-4" />

              </button>


              <div
                className="
                  absolute
                  left-6
                  right-6
                  bottom-6
                "
              >

                <div
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    font-bold
                    text-[#E3AA49]
                  "
                >
                  {activeModalStop.categoryLabel}
                  {' · '}
                  {activeModalStop.province}
                </div>

                <h3
                  className="
                    mt-2
                    font-serif
                    text-3xl
                    sm:text-4xl
                    font-bold
                    text-white
                  "
                >
                  {activeModalStop.name}
                </h3>

                <p className="mt-1 text-sm text-white/65">
                  {activeModalStop.tagline}
                </p>

              </div>

            </div>


            <div className="p-7 sm:p-9">

              <p
                className="
                  text-base
                  leading-relaxed
                  text-stone-600
                "
              >
                {activeModalStop.description}
              </p>


              <div
                className="
                  grid
                  sm:grid-cols-2
                  gap-4
                  mt-7
                "
              >

                {activeModalStop.filmReference && (

                  <InfoBox
                    title="Cine & rodajes"
                    icon={<Film className="w-4 h-4" />}
                    text={activeModalStop.filmReference}
                  />

                )}

                {activeModalStop.gastronomyTip && (

                  <InfoBox
                    title="Bocado recomendado"
                    icon={<Utensils className="w-4 h-4" />}
                    text={activeModalStop.gastronomyTip}
                  />

                )}

                <InfoBox
                  title="Mejor momento"
                  icon={<Clock className="w-4 h-4" />}
                  text={activeModalStop.bestTime}
                />

                <InfoBox
                  title="Conectividad"
                  icon={<Train className="w-4 h-4" />}
                  text={`${activeModalStop.distanceFromCartuja} · ${activeModalStop.travelMode}`}
                />

              </div>


              <div
                className="
                  mt-5
                  rounded-2xl
                  bg-white
                  border
                  border-stone-200
                  p-5
                "
              >

                <strong
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    text-[#A7612C]
                  "
                >
                  Consejo del anfitrión
                </strong>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-stone-600
                  "
                >
                  {activeModalStop.practicalTip}
                </p>

              </div>


              <div
                className="
                  mt-7
                  pt-5
                  border-t
                  border-stone-200
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                  sm:justify-between
                "
              >

                <button
                  onClick={() => {

                    const url =
                      `https://www.google.com/maps/search/?api=1&query=${activeModalStop.coordinates.lat},${activeModalStop.coordinates.lng}`;

                    window.open(
                      url,
                      '_blank'
                    );

                  }}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-full
                    bg-white
                    border
                    border-stone-300
                    text-xs
                    font-bold
                    text-stone-700
                    hover:bg-stone-100
                  "
                >

                  <ExternalLink className="w-4 h-4" />

                  Abrir en mapa

                </button>


                <button
                  onClick={() =>
                    onToggleSaveStop(activeModalStop.id)
                  }
                  className={`
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-6
                    py-3
                    rounded-full
                    text-xs
                    font-bold
                    ${
                      savedStops.includes(activeModalStop.id)
                        ? 'bg-[#17382D] text-white'
                        : 'bg-[#D99A35] text-[#17382D]'
                    }
                  `}
                >

                  {
                    savedStops.includes(activeModalStop.id)
                      ? <Check className="w-4 h-4" />
                      : <Plus className="w-4 h-4" />
                  }

                  {
                    savedStops.includes(activeModalStop.id)
                      ? 'Guardado en mi ruta'
                      : 'Añadir a mi ruta'
                  }

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}


function RouteCategoryCard({
  active,
  title,
  subtitle,
  description,
  icon,
  tone,
  onClick
}: {
  active: boolean;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tone: 'dark' | 'gold' | 'terracotta' | 'green';
  onClick: () => void;
}) {

  const tones = {
    dark: 'bg-[#17382D] text-white',
    gold: 'bg-[#D99A35] text-[#17382D]',
    terracotta: 'bg-[#7A3025] text-white',
    green: 'bg-[#315D49] text-white'
  };


  return (

    <button
      onClick={onClick}
      className={`
        ${tones[tone]}
        text-left
        rounded-[28px]
        p-6
        min-h-[260px]
        flex
        flex-col
        justify-between
        transition-all
        hover:-translate-y-1
        hover:shadow-xl
        ${
          active
            ? 'ring-4 ring-[#D99A35]/25'
            : ''
        }
      `}
    >

      <div>
        {icon}
      </div>


      <div>

        <div
          className="
            text-[9px]
            uppercase
            tracking-[0.16em]
            opacity-55
          "
        >
          {subtitle}
        </div>

        <h3
          className="
            mt-2
            font-serif
            text-2xl
            font-bold
            leading-tight
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            text-xs
            leading-relaxed
            opacity-65
          "
        >
          {description}
        </p>

      </div>

    </button>

  );

}


function InfoBox({
  title,
  icon,
  text
}: {
  title: string;
  icon: React.ReactNode;
  text: string;
}) {

  return (

    <div
      className="
        rounded-2xl
        bg-white
        border
        border-stone-200
        p-5
      "
    >

      <div
        className="
          flex
          items-center
          gap-2
          text-[#A7612C]
          text-[10px]
          uppercase
          tracking-[0.14em]
          font-bold
        "
      >
        {icon}
        {title}
      </div>

      <p
        className="
          mt-2
          text-sm
          leading-relaxed
          text-stone-600
        "
      >
        {text}
      </p>

    </div>

  );

}

    </div>
  );
}
