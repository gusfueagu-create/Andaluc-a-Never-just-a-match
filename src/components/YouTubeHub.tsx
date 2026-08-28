import { useState } from 'react';

import {
  Play,
  Film,
  Eye,
  Sparkles,
  Plane,
  Tv,
  CheckCircle,
  Share2,
  Radio,
  Award,
  Video,
  Globe2,
  TrainFront,
  Hotel,
  Satellite,
  ArrowRight,
  ChevronRight,
  Clock3,
  MapPin,
  Target,
  Layers3,
  Search,
  X
} from 'lucide-react';

import { YOUTUBE_EPISODES } from '../data/mockData';
import { VideoEpisode } from '../types';


interface YouTubeHubProps {
  onOpenImageLightbox: (
    imageUrl: string,
    title: string,
    caption: string
  ) => void;
}


export default function YouTubeHub({
  onOpenImageLightbox
}: YouTubeHubProps) {

  const [selectedFranchise, setSelectedFranchise] =
    useState<string>('all');

  const [activeVideoModal, setActiveVideoModal] =
    useState<VideoEpisode | null>(null);

  const [isSubscribed, setIsSubscribed] =
    useState(false);

  const [activeDistributionTab, setActiveDistributionTab] =
    useState<'youtube' | 'ife' | 'trains' | 'fast'>('youtube');


  const filteredEpisodes =
    selectedFranchise === 'all'
      ? YOUTUBE_EPISODES
      : YOUTUBE_EPISODES.filter(
          ep => ep.franchise === selectedFranchise
        );


  return (

    <div
      id="youtube-hub-container"
      className="
        space-y-14
        md:space-y-20
        py-2
      "
    >

      {/* ============================================================
          CHANNEL HERO
      ============================================================ */}

      <section
        className="
          relative
          overflow-hidden
          rounded-[34px]
          min-h-[660px]
          md:min-h-[720px]
          flex
          items-end
          shadow-2xl
          shadow-black/15
          bg-[#111F1A]
        "
      >

        {/* Background */}

        <div className="absolute inset-0">

          <img
            src="/src/assets/images/youtube_channel_1787943800872.jpg"
            alt="Andalucía Never Just a Match Channel"
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
              via-[#102D25]/78
              to-black/25
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


        {/* Content */}

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

                <Video className="w-3.5 h-3.5 text-[#E3AA49]" />

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
                  The Channel · Andalucía 2030
                </span>

              </div>


              <h1
                className="
                  font-serif
                  text-[46px]
                  sm:text-[62px]
                  md:text-[76px]
                  lg:text-[92px]
                  xl:text-[104px]
                  leading-[0.88]
                  tracking-[-0.045em]
                  font-bold
                  text-white
                "
              >
                DON'T WAIT
                <span className="block">
                  FOR THEM
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
                  TO ARRIVE.
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
                  Make them want to come.

                  <span
                    className="
                      block
                      mt-1
                      text-white
                      font-medium
                    "
                  >
                    Un canal internacional de Andalucía
                    antes, durante y después de 2030.
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
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    transition
                    active:scale-95
                    ${
                      isSubscribed
                        ? 'bg-white/12 text-white border border-white/20'
                        : 'bg-[#D99A35] text-[#17382D] hover:bg-[#E3AA49]'
                    }
                  `}
                >

                  <Radio className="w-4 h-4" />

                  {
                    isSubscribed
                      ? 'Canal guardado'
                      : 'Seguir el canal'
                  }

                </button>


                <button
                  onClick={() =>
                    onOpenImageLightbox(
                      '/src/assets/images/youtube_channel_1787943800872.jpg',
                      'Canal Andalucía · Never Just a Match',
                      'Propuesta visual del hub audiovisual internacional'
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

                  <Eye className="w-4 h-4" />

                  Ver mockup

                </button>


                <button
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(
                        'https://youtube.com/@AndaluciaNeverJustAMatch'
                      );
                    }
                  }}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-full
                    border
                    border-white/15
                    bg-black/10
                    text-white/70
                    backdrop-blur-md
                    hover:bg-white/10
                    hover:text-white
                  "
                  title="Compartir canal"
                >

                  <Share2 className="w-4 h-4" />

                </button>

              </div>

            </div>


            {/* Objective stats */}

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
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                    "
                  >
                    Ambición de audiencia
                  </div>

                  <div
                    className="
                      mt-1
                      font-serif
                      text-5xl
                      lg:text-6xl
                      font-bold
                      text-[#E3AA49]
                    "
                  >
                    1.8M
                  </div>

                  <div className="text-xs text-white/40 mt-1">
                    objetivo de comunidad
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
                    4K
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
                    producción premium
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
                    2027
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
                    empezar antes del Mundial
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          CHANNEL THESIS
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
              font-bold
              text-[#A7612C]
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
              leading-[1]
              font-bold
              tracking-tight
              text-[#17382D]
            "
          >
            YouTube es
            el hub.

            <span
              className="
                block
                italic
                text-[#B6682D]
                mt-2
              "
            >
              No el límite.
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
            El canal debe construir una relación directa con el viajero,
            pero el contenido tiene que vivir donde el viajero está.

            <strong className="text-[#233B32]">
              {' '}
              YouTube concentra la marca.
              La distribución multiplica el alcance.
            </strong>
          </p>

        </div>

      </section>


      {/* ============================================================
          3 FRANCHISES
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
            Arquitectura editorial
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
            Tres franquicias.
            Tres trabajos distintos.
          </h2>

        </div>


        <div
          className="
            grid
            md:grid-cols-3
            gap-5
          "
        >

          {/* Franchise 1 */}

          <article
            className="
              rounded-[30px]
              bg-[#17382D]
              text-white
              p-7
              min-h-[330px]
              flex
              flex-col
              justify-between
              relative
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                -top-14
                -right-14
                w-36
                h-36
                rounded-full
                border
                border-white/10
              "
            />

            <div className="flex items-center justify-between">

              <Film className="w-7 h-7 text-[#E3AA49]" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-white/35
                "
              >
                18–24 min
              </span>

            </div>


            <div>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#E3AA49]
                  font-bold
                "
              >
                01 · Create desire
              </span>

              <h3
                className="
                  mt-3
                  font-serif
                  text-3xl
                  leading-tight
                  font-bold
                "
              >
                Golden Hour
                Matchdays
              </h3>

              <p className="mt-4 text-sm text-white/55 leading-relaxed">
                Una pieza de gran formato que empieza lejos del estadio
                y convierte el día de partido en una excusa
                para descubrir Andalucía.
              </p>

              <div
                className="
                  mt-5
                  pt-4
                  border-t
                  border-white/10
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-white/35
                "
              >
                Quincenal · 4K · Premium
              </div>

            </div>

          </article>


          {/* Franchise 2 */}

          <article
            className="
              rounded-[30px]
              bg-[#D99A35]
              text-[#17382D]
              p-7
              min-h-[330px]
              flex
              flex-col
              justify-between
            "
          >

            <div className="flex items-center justify-between">

              <Search className="w-7 h-7" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-[#17382D]/40
                "
              >
                4–7 min
              </span>

            </div>


            <div>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#17382D]/55
                  font-bold
                "
              >
                02 · Be discoverable
              </span>

              <h3
                className="
                  mt-3
                  font-serif
                  text-3xl
                  leading-tight
                  font-bold
                "
              >
                The Golden 11
              </h3>

              <p className="mt-4 text-sm text-[#17382D]/65 leading-relaxed">
                Rankings concebidos para búsqueda,
                Shorts y descubrimiento: once lugares,
                sabores, rincones o experiencias que hacen
                que Andalucía aparezca antes de que el viajero pregunte.
              </p>

              <div
                className="
                  mt-5
                  pt-4
                  border-t
                  border-[#17382D]/15
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-[#17382D]/45
                "
              >
                Semanal · Search · Shorts
              </div>

            </div>

          </article>


          {/* Franchise 3 */}

          <article
            className="
              rounded-[30px]
              bg-[#7A3025]
              text-white
              p-7
              min-h-[330px]
              flex
              flex-col
              justify-between
            "
          >

            <div className="flex items-center justify-between">

              <Award className="w-7 h-7 text-[#E6C594]" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-white/35
                "
              >
                30–45 min
              </span>

            </div>


            <div>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#E6C594]
                  font-bold
                "
              >
                03 · Build prestige
              </span>

              <h3
                className="
                  mt-3
                  font-serif
                  text-3xl
                  leading-tight
                  font-bold
                "
              >
                Overtime Talks
              </h3>

              <p className="mt-4 text-sm text-white/55 leading-relaxed">
                Conversaciones de prestigio en lugares irrepetibles.
                Fútbol, gastronomía y creación hablando de todo
                menos del resultado del partido.
              </p>

              <div
                className="
                  mt-5
                  pt-4
                  border-t
                  border-white/10
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-white/35
                "
              >
                Mensual · Longform · IFE
              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ============================================================
          CATALOG
      ============================================================ */}

      <section className="space-y-7">

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
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
              Content library
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
              Andalucía para ver,
              guardar y compartir
            </h2>

          </div>


          <div
            className="
              flex
              items-center
              gap-1
              overflow-x-auto
              p-1
              bg-white
              rounded-full
              border
              border-stone-200
              shadow-sm
              no-scrollbar
            "
          >

            {[
              ['all', 'Todo'],
              ['golden_pitch', 'Golden Pitch'],
              ['passion_field', 'Passion Field'],
              ['golden_11', 'Golden 11'],
              ['overtime_talks', 'Overtime']
            ].map(([id, label]) => (

              <button
                key={id}
                onClick={() => setSelectedFranchise(id)}
                className={`
                  px-4
                  py-2
                  rounded-full
                  text-[11px]
                  font-bold
                  whitespace-nowrap
                  transition
                  ${
                    selectedFranchise === id
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
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {filteredEpisodes.map((video) => (

            <article
              key={video.id}
              onClick={() => setActiveVideoModal(video)}
              className="
                group
                cursor-pointer
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
                  src={video.thumbnailUrl}
                  alt={video.title}
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
                    via-black/10
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      bg-[#D99A35]
                      text-[#17382D]
                      flex
                      items-center
                      justify-center
                      shadow-xl
                      transition
                      group-hover:scale-110
                    "
                  >

                    <Play className="w-5 h-5 fill-current ml-0.5" />

                  </div>

                </div>


                <div
                  className="
                    absolute
                    top-4
                    left-4
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    font-bold
                    text-white
                    bg-black/35
                    backdrop-blur-md
                    rounded-full
                    px-3
                    py-1.5
                  "
                >
                  {video.franchiseLabel}
                </div>


                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    text-[10px]
                    font-mono
                    font-bold
                    text-white
                    bg-black/60
                    rounded-full
                    px-3
                    py-1.5
                  "
                >
                  {video.duration}
                </div>

              </div>


              <div className="p-6">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    font-bold
                    text-[#A7612C]
                  "
                >

                  <MapPin className="w-3.5 h-3.5" />

                  {video.location}

                </div>


                <h3
                  className="
                    mt-3
                    font-serif
                    text-2xl
                    leading-tight
                    font-bold
                    text-[#22382F]
                    group-hover:text-[#B6682D]
                    transition
                  "
                >
                  {video.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-stone-500
                    line-clamp-3
                  "
                >
                  {video.description}
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
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    text-stone-400
                  "
                >

                  <span>{video.views}</span>

                  <span className="flex items-center gap-1">

                    Ver pieza

                    <ChevronRight className="w-3.5 h-3.5" />

                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ============================================================
          DISTRIBUTION
      ============================================================ */}

      <section
        className="
          relative
          overflow-hidden
          rounded-[34px]
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
            -right-28
            -bottom-28
            w-80
            h-80
            rounded-full
            border
            border-white/10
          "
        />

        <div className="relative z-10">

          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-7
            "
          >

            <div>

              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  font-bold
                  text-[#E3AA49]
                "
              >
                Distribución objetivo
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
                YouTube is the hub.

                <span
                  className="
                    block
                    italic
                    text-[#E3AA49]
                    mt-2
                  "
                >
                  Not the limit.
                </span>

              </h2>

            </div>


            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >

              {[
                ['youtube', 'YouTube'],
                ['ife', 'Airlines'],
                ['trains', 'Rail & Hotels'],
                ['fast', 'FAST & CTV']
              ].map(([id, label]) => (

                <button
                  key={id}
                  onClick={() =>
                    setActiveDistributionTab(
                      id as 'youtube' | 'ife' | 'trains' | 'fast'
                    )
                  }
                  className={`
                    px-4
                    py-2
                    rounded-full
                    text-[11px]
                    font-bold
                    transition
                    ${
                      activeDistributionTab === id
                        ? 'bg-[#D99A35] text-[#17382D]'
                        : 'bg-white/8 text-white/65 border border-white/10'
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
              md:grid-cols-4
              gap-4
              mt-10
            "
          >

            <DistributionCard
              icon={<Plane className="w-6 h-6" />}
              title="Airlines / IFE"
              text="Contenido para entretenimiento a bordo en mercados emisores prioritarios."
            />

            <DistributionCard
              icon={<TrainFront className="w-6 h-6" />}
              title="High-Speed Rail"
              text="Piezas de destino en corredores de alta velocidad vinculados a Andalucía."
            />

            <DistributionCard
              icon={<Hotel className="w-6 h-6" />}
              title="Hotels"
              text="Contenido de inspiración y descubrimiento dentro del propio destino."
            />

            <DistributionCard
              icon={<Satellite className="w-6 h-6" />}
              title="FAST / Connected TV"
              text="Explotación del archivo en canales lineales digitales y televisión conectada."
            />

          </div>


          <div
            className="
              mt-8
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
          >

            <div
              className="
                flex
                items-start
                gap-3
              "
            >

              <Target className="w-5 h-5 text-[#E3AA49] shrink-0 mt-0.5" />

              <p
                className="
                  text-sm
                  leading-relaxed
                  text-white/55
                "
              >
                Los operadores y plataformas citados deben entenderse
                como <strong className="text-white">canales objetivo de distribución</strong>,
                sujetos a negociación y acuerdos específicos.
                La propuesta no presupone acuerdos comerciales ya cerrados.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          VIDEO MODAL
      ============================================================ */}

      {activeVideoModal && (

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
              max-w-4xl
              w-full
              overflow-hidden
              shadow-2xl
              border
              border-white/10
            "
          >

            <div
              className="
                relative
                aspect-video
                bg-stone-900
                overflow-hidden
              "
            >

              <img
                src={activeVideoModal.thumbnailUrl}
                alt={activeVideoModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/10
                  to-black/30
                "
              />


              <button
                onClick={() => setActiveVideoModal(null)}
                className="
                  absolute
                  top-5
                  right-5
                  w-10
                  h-10
                  rounded-full
                  bg-black/30
                  backdrop-blur-md
                  border
                  border-white/15
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-white
                  hover:text-black
                "
              >

                <X className="w-4 h-4" />

              </button>


              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >

                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-[#D99A35]
                    text-[#17382D]
                    flex
                    items-center
                    justify-center
                    shadow-2xl
                  "
                >

                  <Play className="w-8 h-8 fill-current ml-1" />

                </div>

              </div>


              <div
                className="
                  absolute
                  left-6
                  right-6
                  bottom-5
                  flex
                  items-end
                  justify-between
                  gap-4
                "
              >

                <div>

                  <div
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.16em]
                      text-[#E3AA49]
                      font-bold
                    "
                  >
                    {activeVideoModal.franchiseLabel}
                  </div>

                  <div className="text-sm text-white mt-1">
                    {activeVideoModal.province}
                  </div>

                </div>


                <div
                  className="
                    text-[10px]
                    font-mono
                    text-white/70
                  "
                >
                  {activeVideoModal.duration} · 4K
                </div>

              </div>

            </div>


            <div className="p-7 sm:p-9">

              <h3
                className="
                  font-serif
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-[#17382D]
                "
              >
                {activeVideoModal.title}
              </h3>


              <p
                className="
                  mt-2
                  text-xs
                  font-mono
                  font-semibold
                  text-[#B6682D]
                "
              >
                International title: "{activeVideoModal.titleIntl}"
              </p>


              <p
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  leading-relaxed
                  text-stone-600
                "
              >
                {activeVideoModal.description}
              </p>


              <div
                className="
                  grid
                  sm:grid-cols-2
                  gap-4
                  mt-6
                "
              >

                <div
                  className="
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
                      tracking-[0.16em]
                      text-[#315D49]
                    "
                  >
                    Identidad sonora
                  </strong>

                  <p className="mt-2 text-sm text-stone-600">
                    {activeVideoModal.audioStyle}
                  </p>

                </div>


                <div
                  className="
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
                      tracking-[0.16em]
                      text-[#B6682D]
                    "
                  >
                    Por qué funciona
                  </strong>

                  <p className="mt-2 text-sm text-stone-600">
                    {activeVideoModal.hookRationale}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}


function DistributionCard({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {

  return (

    <div
      className="
        rounded-[24px]
        border
        border-white/10
        bg-white/5
        p-5
      "
    >

      <div className="text-[#E3AA49]">
        {icon}
      </div>

      <h3
        className="
          mt-4
          font-serif
          text-xl
          font-bold
          text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-xs
          leading-relaxed
          text-white/45
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
