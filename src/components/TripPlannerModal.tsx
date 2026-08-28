import { useState } from 'react';

import {
  Compass,
  Calendar,
  Train,
  Sparkles,
  Check,
  Trash2,
  ArrowRight,
  Printer,
  X,
  MapPin,
  Film,
  Utensils,
  Landmark,
  Trees,
  Route,
  Clock3
} from 'lucide-react';

import { EXPERIENCE_ROUTES } from '../data/mockData';


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

  const [arrivalHub, setArrivalHub] =
    useState<'sevilla' | 'malaga'>('sevilla');

  const [selectedInterests, setSelectedInterests] =
    useState<string[]>([
      'cine',
      'gastronomia',
      'legado'
    ]);

  const [generatedItinerary, setGeneratedItinerary] =
    useState<any[] | null>(null);


  if (!isOpen) return null;


  const toggleInterest = (interest: string) => {

    if (selectedInterests.includes(interest)) {

      if (selectedInterests.length > 1) {

        setSelectedInterests(
          selectedInterests.filter(
            item => item !== interest
          )
        );

      }

    } else {

      setSelectedInterests([
        ...selectedInterests,
        interest
      ]);

    }

  };


  const handleGenerateItinerary = () => {

    const daysSchedule: any[] = [];


    /* DAY 1 */

    daysSchedule.push({

      day: 1,

      title: 'The Match & Golden Seville',

      subtitle:
        'El partido es el comienzo, no el final del viaje.',

      stops: [

        {
          time: '09:30',
          place: 'Real Alcázar de Sevilla',
          type: 'Screen & Heritage',
          note:
            'Patrimonio, arquitectura y una localización reconocible internacionalmente.'
        },

        {
          time: '14:00',
          place: 'Triana & Guadalquivir',
          type: 'The Third Half',
          note:
            'Gastronomía local y paseo junto al río.'
        },

        {
          time: '18:30',
          place: 'Plaza de España · Golden Hour',
          type: 'Andalucía on Screen',
          note:
            'Una de las imágenes cinematográficas más reconocibles de Sevilla.'
        },

        {
          time: '20:30',
          place: 'La Cartuja · Match Time',
          type: 'World Cup',
          note:
            'El momento que concentra la atención global.'
        }

      ]

    });


    /* DAY 2 */

    if (tripDays >= 2) {

      daysSchedule.push({

        day: 2,

        title: 'Córdoba · History You Can Taste',

        subtitle:
          'Patrimonio y gastronomía conectados por alta velocidad.',

        stops: [

          {
            time: '10:00',
            place: 'Sevilla → Córdoba',
            type: 'High-Speed Rail',
            note:
              'Conexión ferroviaria como puerta a una segunda provincia.'
          },

          {
            time: '11:15',
            place: 'Mezquita-Catedral',
            type: 'Timeless Andalusia',
            note:
              'Una de las grandes referencias patrimoniales de Andalucía.'
          },

          {
            time: '14:00',
            place: 'Córdoba gastronómica',
            type: 'The Third Half',
            note:
              'Tradición y alta cocina como parte del viaje.'
          },

          {
            time: '18:00',
            place: 'Centro histórico & patios',
            type: 'Heritage',
            note:
              'Una última experiencia antes del regreso.'
          }

        ]

      });

    }


    /* DAY 3 */

    if (tripDays >= 3) {

      daysSchedule.push({

        day: 3,

        title: 'Cádiz & Jerez · The Atlantic South',

        subtitle:
          'Océano, gastronomía y cultura del vino.',

        stops: [

          {
            time: '10:00',
            place: 'Jerez de la Frontera',
            type: 'Wine Culture',
            note:
              'Descubrir la cultura y el paisaje vinculados al vino de Jerez.'
          },

          {
            time: '13:30',
            place: 'Gastronomía de la Bahía',
            type: 'The Third Half',
            note:
              'Producto atlántico y cocina del territorio.'
          },

          {
            time: '18:00',
            place: 'La Caleta · Cádiz',
            type: 'Andalucía on Screen',
            note:
              'Atardecer atlántico y una localización vinculada al cine.'
          },

          {
            time: '21:30',
            place: 'Barrio de La Viña',
            type: 'Local Life',
            note:
              'Una noche para vivir la ciudad desde dentro.'
          }

        ]

      });

    }


    /* DAY 4 */

    if (tripDays >= 4) {

      daysSchedule.push({

        day: 4,

        title: 'Granada · The Timeless South',

        subtitle:
          'Una jornada entre patrimonio, ciudad y paisaje.',

        stops: [

          {
            time: '09:30',
            place: 'Viaje hacia Granada',
            type: 'Territory',
            note:
              'El desplazamiento forma también parte del descubrimiento.'
          },

          {
            time: '13:00',
            place: 'Granada gastronómica',
            type: 'The Third Half',
            note:
              'Sabores locales antes de descubrir la ciudad histórica.'
          },

          {
            time: '17:00',
            place: 'Mirador de San Nicolás',
            type: 'The Wild South',
            note:
              'Alhambra, Albaicín y Sierra Nevada en una misma mirada.'
          },

          {
            time: '20:30',
            place: 'Alhambra',
            type: 'Timeless Andalusia',
            note:
              'El gran cierre patrimonial del viaje.'
          }

        ]

      });

    }


    /* DAYS 5-7 */

    if (tripDays >= 7) {

      daysSchedule.push({

        day: 5,

        title: 'Málaga · Mediterranean Energy',

        subtitle:
          'Cultura urbana, Mediterráneo y gastronomía.',

        stops: [

          {
            time: '10:00',
            place: 'Centro histórico de Málaga',
            type: 'City',
            note:
              'Una mañana para recorrer la ciudad a pie.'
          },

          {
            time: '13:30',
            place: 'Mercado & gastronomía malagueña',
            type: 'The Third Half',
            note:
              'Producto mediterráneo y cocina local.'
          },

          {
            time: '17:30',
            place: 'Málaga cultural',
            type: 'Culture',
            note:
              'Museos y patrimonio urbano.'
          },

          {
            time: '20:30',
            place: 'Mediterranean Sunset',
            type: 'Coast',
            note:
              'El Mediterráneo como cierre de jornada.'
          }

        ]

      });


      daysSchedule.push({

        day: 6,

        title: 'Jaén · The Sea of Olive Trees',

        subtitle:
          'Paisaje, aceite y patrimonio interior.',

        stops: [

          {
            time: '10:00',
            place: 'Paisaje del olivar',
            type: 'Territory',
            note:
              'Un paisaje cultural que define gran parte del interior andaluz.'
          },

          {
            time: '13:30',
            place: 'Experiencia de AOVE',
            type: 'Gastronomy',
            note:
              'El aceite como producto, cultura y experiencia.'
          },

          {
            time: '17:00',
            place: 'Úbeda / Baeza',
            type: 'Heritage',
            note:
              'Patrimonio renacentista y ciudades históricas.'
          }

        ]

      });


      daysSchedule.push({

        day: 7,

        title: 'Huelva · Atlantic Nature',

        subtitle:
          'Naturaleza, costa y producto atlántico.',

        stops: [

          {
            time: '10:00',
            place: 'Entorno natural de Huelva',
            type: 'The Wild South',
            note:
              'Una Andalucía de espacios abiertos y naturaleza.'
          },

          {
            time: '14:00',
            place: 'Producto de Huelva',
            type: 'The Third Half',
            note:
              'Gastronomía vinculada al territorio.'
          },

          {
            time: '18:00',
            place: 'Atlantic Sunset',
            type: 'Coast',
            note:
              'El viaje termina frente al Atlántico.'
          }

        ]

      });

    }


    setGeneratedItinerary(daysSchedule);

  };


  const savedRouteObjects =
    EXPERIENCE_ROUTES.filter(
      route => savedStops.includes(route.id)
    );


  const interests = [

    {
      id: 'cine',
      label: 'On Screen',
      sublabel: 'Cine & localizaciones',
      icon: <Film className="w-5 h-5" />
    },

    {
      id: 'gastronomia',
      label: 'The Third Half',
      sublabel: 'Gastronomía',
      icon: <Utensils className="w-5 h-5" />
    },

    {
      id: 'legado',
      label: 'Timeless',
      sublabel: 'Cultura & patrimonio',
      icon: <Landmark className="w-5 h-5" />
    },

    {
      id: 'activa',
      label: 'Wild South',
      sublabel: 'Naturaleza & costa',
      icon: <Trees className="w-5 h-5" />
    }

  ];


  return (

    <div
      className="
        fixed
        inset-0
        z-[80]
        bg-[#07130F]/80
        backdrop-blur-md
        flex
        items-center
        justify-center
        p-3
        sm:p-5
      "
    >

      <div
        className="
          bg-[#F8F5EE]
          rounded-[30px]
          max-w-6xl
          w-full
          overflow-hidden
          shadow-2xl
          max-h-[94vh]
          flex
          flex-col
          border
          border-white/10
        "
      >

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            relative
            overflow-hidden
            bg-[#17382D]
            text-white
            px-6
            py-7
            sm:px-8
            md:px-10
            md:py-9
          "
        >

          <div
            className="
              absolute
              -right-20
              -top-24
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
              flex
              items-start
              justify-between
              gap-6
            "
          >

            <div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  font-bold
                  text-[#E3AA49]
                "
              >

                <Compass className="w-4 h-4" />

                My Andalucía

              </div>


              <h2
                className="
                  mt-3
                  font-serif
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  leading-none
                "
              >
                Build your journey.

                <span
                  className="
                    block
                    italic
                    text-[#E3AA49]
                    mt-2
                  "
                >
                  Stay for Andalucía.
                </span>

              </h2>


              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  sm:text-base
                  leading-relaxed
                  text-white/55
                "
              >
                El partido te trae hasta aquí.
                Ahora dinos cuánto tiempo tienes y
                qué Andalucía quieres descubrir.
              </p>

            </div>


            <button
              onClick={onClose}
              className="
                w-10
                h-10
                rounded-full
                bg-white/10
                border
                border-white/10
                text-white
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-[#17382D]
                transition
                shrink-0
              "
            >
              <X className="w-4 h-4" />
            </button>

          </div>

        </div>


        {/* =====================================================
            SCROLL CONTENT
        ===================================================== */}

        <div
          className="
            overflow-y-auto
            flex-1
            p-6
            sm:p-8
            md:p-10
            space-y-10
          "
        >

          {/* SAVED STOPS */}

          {savedRouteObjects.length > 0 && (

            <section>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  mb-4
                "
              >

                <div>

                  <div
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      font-bold
                      text-[#A7612C]
                    "
                  >
                    Already on your list
                  </div>

                  <h3
                    className="
                      mt-1
                      font-serif
                      text-2xl
                      font-bold
                      text-[#17382D]
                    "
                  >
                    Tus lugares guardados
                  </h3>

                </div>


                <span
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#D99A35]
                    text-[#17382D]
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-black
                  "
                >
                  {savedRouteObjects.length}
                </span>

              </div>


              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {savedRouteObjects.map((stop) => (

                  <div
                    key={stop.id}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white
                      border
                      border-stone-200
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-[#17382D]
                    "
                  >

                    <MapPin className="w-3.5 h-3.5 text-[#A7612C]" />

                    {stop.name}

                    <span className="text-stone-400">
                      · {stop.province}
                    </span>


                    <button
                      onClick={() =>
                        onToggleSaveStop(stop.id)
                      }
                      className="
                        ml-1
                        text-stone-300
                        hover:text-[#7A3025]
                      "
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                  </div>

                ))}

              </div>

            </section>

          )}


          {/* =====================================================
              STEP 1 — DAYS
          ===================================================== */}

          <section>

            <StepHeader
              number="01"
              title="How long are you staying?"
              subtitle="Elige cuánto quieres prolongar el viaje."
            />


            <div
              className="
                grid
                grid-cols-3
                gap-3
                mt-5
              "
            >

              {[2, 4, 7].map((days) => (

                <button
                  key={days}
                  onClick={() => {
                    setTripDays(days);
                    setGeneratedItinerary(null);
                  }}
                  className={`
                    rounded-[22px]
                    border
                    px-4
                    py-6
                    text-left
                    transition-all
                    ${
                      tripDays === days
                        ? 'bg-[#17382D] text-white border-[#17382D] shadow-lg'
                        : 'bg-white text-[#17382D] border-stone-200 hover:border-[#D99A35]'
                    }
                  `}
                >

                  <div
                    className="
                      font-serif
                      text-4xl
                      sm:text-5xl
                      font-bold
                    "
                  >
                    {days}
                  </div>

                  <div
                    className={`
                      mt-1
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      font-bold
                      ${
                        tripDays === days
                          ? 'text-[#E3AA49]'
                          : 'text-stone-400'
                      }
                    `}
                  >
                    days
                  </div>

                </button>

              ))}

            </div>

          </section>


          {/* =====================================================
              STEP 2 — ARRIVAL
          ===================================================== */}

          <section>

            <StepHeader
              number="02"
              title="Where does your journey begin?"
              subtitle="Selecciona tu principal punto de entrada."
            />


            <div
              className="
                grid
                sm:grid-cols-2
                gap-3
                mt-5
              "
            >

              <ArrivalCard
                selected={arrivalHub === 'sevilla'}
                title="Sevilla"
                subtitle="World Cup Host City"
                detail="SVQ · AVE · La Cartuja"
                onClick={() => {
                  setArrivalHub('sevilla');
                  setGeneratedItinerary(null);
                }}
              />


              <ArrivalCard
                selected={arrivalHub === 'malaga'}
                title="Málaga"
                subtitle="Mediterranean Gateway"
                detail="AGP · High-Speed Rail · Costa del Sol"
                onClick={() => {
                  setArrivalHub('malaga');
                  setGeneratedItinerary(null);
                }}
              />

            </div>

          </section>


          {/* =====================================================
              STEP 3 — INTERESTS
          ===================================================== */}

          <section>

            <StepHeader
              number="03"
              title="What is your Andalucía?"
              subtitle="Combina intereses. Tu viaje no tiene por qué elegir solo uno."
            />


            <div
              className="
                grid
                sm:grid-cols-2
                lg:grid-cols-4
                gap-3
                mt-5
              "
            >

              {interests.map((interest) => {

                const selected =
                  selectedInterests.includes(
                    interest.id
                  );

                return (

                  <button
                    key={interest.id}
                    onClick={() => {
                      toggleInterest(interest.id);
                      setGeneratedItinerary(null);
                    }}
                    className={`
                      rounded-[22px]
                      p-5
                      text-left
                      border
                      min-h-[145px]
                      flex
                      flex-col
                      justify-between
                      transition-all
                      ${
                        selected
                          ? 'bg-[#D99A35] border-[#D99A35] text-[#17382D] shadow-md'
                          : 'bg-white border-stone-200 text-[#17382D] hover:border-[#D99A35]'
                      }
                    `}
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      {interest.icon}

                      {selected && (
                        <Check className="w-4 h-4 stroke-[3]" />
                      )}

                    </div>


                    <div>

                      <div
                        className="
                          font-serif
                          text-xl
                          font-bold
                        "
                      >
                        {interest.label}
                      </div>

                      <div
                        className={`
                          mt-1
                          text-[10px]
                          ${
                            selected
                              ? 'text-[#17382D]/60'
                              : 'text-stone-400'
                          }
                        `}
                      >
                        {interest.sublabel}
                      </div>

                    </div>

                  </button>

                );

              })}

            </div>

          </section>


          {/* GENERATE */}

          <div className="flex justify-center py-2">

            <button
              onClick={handleGenerateItinerary}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#17382D]
                px-7
                sm:px-9
                py-4
                text-sm
                font-bold
                text-white
                shadow-xl
                hover:bg-[#214C3D]
                transition
                active:scale-95
              "
            >

              <Sparkles className="w-4 h-4 text-[#E3AA49]" />

              Build my {tripDays}-day Andalucía

              <ArrowRight
                className="
                  w-4
                  h-4
                  transition-transform
                  group-hover:translate-x-1
                "
              />

            </button>

          </div>


          {/* =====================================================
              RESULT
          ===================================================== */}

          {generatedItinerary && (

            <section
              className="
                pt-9
                border-t
                border-stone-300
                space-y-7
              "
            >

              {/* RESULT HEADER */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  bg-[#17382D]
                  text-white
                  p-7
                  sm:p-8
                "
              >

                <div
                  className="
                    absolute
                    -right-14
                    -bottom-20
                    font-serif
                    text-[180px]
                    leading-none
                    font-black
                    text-white/[0.035]
                  "
                >
                  {tripDays}
                </div>


                <div className="relative z-10">

                  <div
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      font-bold
                      text-[#E3AA49]
                    "
                  >
                    Your Andalucía · Concept Journey
                  </div>


                  <h3
                    className="
                      mt-3
                      font-serif
                      text-3xl
                      sm:text-4xl
                      font-bold
                    "
                  >
                    From the match
                    to the journey.
                  </h3>


                  <p
                    className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-white/55
                    "
                  >
                    {tripDays} días · Entrada por{' '}
                    {
                      arrivalHub === 'sevilla'
                        ? 'Sevilla'
                        : 'Málaga'
                    }
                    {' · '}
                    {selectedInterests.length} intereses
                    {' · '}
                    {savedRouteObjects.length} lugares guardados
                  </p>

                </div>

              </div>


              {/* DAYS */}

              <div className="space-y-5">

                {generatedItinerary.map(
                  (dayItem) => (

                    <div
                      key={dayItem.day}
                      className="
                        grid
                        md:grid-cols-12
                        gap-5
                        rounded-[26px]
                        bg-white
                        border
                        border-stone-200
                        p-6
                        sm:p-7
                      "
                    >

                      {/* DAY NUMBER */}

                      <div
                        className="
                          md:col-span-2
                          md:border-r
                          md:border-stone-200
                        "
                      >

                        <div
                          className="
                            font-serif
                            text-5xl
                            font-bold
                            text-[#D99A35]
                          "
                        >
                          {String(dayItem.day).padStart(2, '0')}
                        </div>

                        <div
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.18em]
                            font-bold
                            text-stone-400
                          "
                        >
                          Day
                        </div>

                      </div>


                      {/* DAY CONTENT */}

                      <div className="md:col-span-10">

                        <h4
                          className="
                            font-serif
                            text-2xl
                            font-bold
                            text-[#17382D]
                          "
                        >
                          {dayItem.title}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-sm
                            text-stone-400
                          "
                        >
                          {dayItem.subtitle}
                        </p>


                        <div
                          className="
                            mt-6
                            space-y-4
                          "
                        >

                          {dayItem.stops.map(
                            (
                              stop: any,
                              index: number
                            ) => (

                              <div
                                key={index}
                                className="
                                  flex
                                  gap-4
                                  items-start
                                "
                              >

                                <div
                                  className="
                                    w-[58px]
                                    shrink-0
                                    pt-0.5
                                    text-[11px]
                                    font-mono
                                    font-bold
                                    text-[#A7612C]
                                  "
                                >
                                  {stop.time}
                                </div>


                                <div
                                  className="
                                    relative
                                    flex-1
                                    border-l
                                    border-stone-200
                                    pl-5
                                    pb-2
                                  "
                                >

                                  <div
                                    className="
                                      absolute
                                      -left-[4.5px]
                                      top-1
                                      w-2
                                      h-2
                                      rounded-full
                                      bg-[#D99A35]
                                    "
                                  />


                                  <div
                                    className="
                                      text-[9px]
                                      uppercase
                                      tracking-[0.12em]
                                      font-bold
                                      text-stone-400
                                    "
                                  >
                                    {stop.type}
                                  </div>


                                  <div
                                    className="
                                      mt-1
                                      text-sm
                                      font-bold
                                      text-[#17382D]
                                    "
                                  >
                                    {stop.place}
                                  </div>


                                  <div
                                    className="
                                      mt-1
                                      text-xs
                                      leading-relaxed
                                      text-stone-500
                                    "
                                  >
                                    {stop.note}
                                  </div>

                                </div>

                              </div>

                            )
                          )}

                        </div>

                      </div>

                    </div>

                  )
                )}

              </div>


              {/* PRINT */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  justify-between
                  gap-4
                  rounded-[24px]
                  bg-[#EEE7DA]
                  p-6
                "
              >

                <div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-bold
                      text-[#17382D]
                    "
                  >

                    <Route className="w-4 h-4 text-[#A7612C]" />

                    Your Andalucía

                  </div>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-stone-500
                    "
                  >
                    Prototipo de itinerario personalizable.
                  </p>

                </div>


                <button
                  onClick={() =>
                    window.print()
                  }
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    border
                    border-stone-300
                    px-5
                    py-3
                    text-xs
                    font-bold
                    text-[#17382D]
                    hover:bg-[#17382D]
                    hover:text-white
                    transition
                  "
                >

                  <Printer className="w-4 h-4" />

                  Imprimir viaje

                </button>

              </div>

            </section>

          )}

        </div>

      </div>

    </div>

  );

}


/* =========================================================
   HELPERS
========================================================= */


function StepHeader({
  number,
  title,
  subtitle
}: {
  number: string;
  title: string;
  subtitle: string;
}) {

  return (

    <div
      className="
        flex
        gap-4
        items-start
      "
    >

      <div
        className="
          font-mono
          text-xs
          font-black
          text-[#D99A35]
          pt-1
        "
      >
        {number}
      </div>


      <div>

        <h3
          className="
            font-serif
            text-2xl
            sm:text-3xl
            font-bold
            text-[#17382D]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-stone-500
          "
        >
          {subtitle}
        </p>

      </div>

    </div>

  );

}


function ArrivalCard({
  selected,
  title,
  subtitle,
  detail,
  onClick
}: {
  selected: boolean;
  title: string;
  subtitle: string;
  detail: string;
  onClick: () => void;
}) {

  return (

    <button
      onClick={onClick}
      className={`
        rounded-[22px]
        p-5
        text-left
        border
        transition-all
        ${
          selected
            ? 'bg-[#17382D] border-[#17382D] text-white shadow-lg'
            : 'bg-white border-stone-200 text-[#17382D] hover:border-[#D99A35]'
        }
      `}
    >

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <Train
          className={`
            w-5
            h-5
            ${
              selected
                ? 'text-[#E3AA49]'
                : 'text-[#A7612C]'
            }
          `}
        />

        {selected && (
          <Check className="w-4 h-4 text-[#E3AA49]" />
        )}

      </div>


      <h4
        className="
          mt-5
          font-serif
          text-2xl
          font-bold
        "
      >
        {title}
      </h4>


      <div
        className={`
          mt-1
          text-xs
          font-semibold
          ${
            selected
              ? 'text-white/60'
              : 'text-stone-500'
          }
        `}
      >
        {subtitle}
      </div>


      <div
        className={`
          mt-4
          text-[9px]
          uppercase
          tracking-[0.13em]
          ${
            selected
              ? 'text-[#E3AA49]'
              : 'text-stone-400'
          }
        `}
      >
        {detail}
      </div>

    </button>

  );

}
