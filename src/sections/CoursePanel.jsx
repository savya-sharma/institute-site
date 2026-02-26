import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoIosArrowRoundForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const COURSES = [
  {
    id: 1,
    img: '/images/courses/React-Concepts.png',
    title: 'React Elements, JSX, Components, props, & State Explained',
    link: '/images/courses/higher-order-function.png',
  },
  {
    id: 2,
    img: '/images/courses/Components-Detail.png',
    title: 'React Component Explained in Detail',
    link: 'https://youtu.be/_Q_QRp9Mm0Y?si=doNcLEyt1hB_2wCH',
  },
  {
    id: 3,
    img: '/images/courses/Counter-React.png',
    title: 'Create a Counter App in React',
    link: 'https://youtu.be/ZSjv7LxLKUY',
  },
];

const CARD_BACKGROUNDS = [
  {
    className: 'bg-[#fff]',
    background:
      'rgba(255,255,255,0.54)',
    border: '1.5px solid rgba(255,255,255,0.20)',
    boxShadow: '0 4px 32px 0 rgba(180,180,180,0.14)',
    textColor: '',
  },
  {
    className: 'bg-[#EF5B00]',
    background:
      'linear-gradient(110deg, rgba(239, 92, 0, 0.72) 80%, rgba(224,65,0,0.41) 100%)',
    border: '1.5px solid rgba(239,91,0,0.25)',
    boxShadow: '0 4px 32px 0 rgba(224,65,0,0.12)',
    textColor: 'text-white',
  },
  {
    className: 'bg-[#000]',
    background: 'rgba(20, 20, 20, 0.86)',
    border: '1.5px solid rgba(84,84,84,0.32)',
    boxShadow: '0 4px 32px 0 rgba(10, 10, 10, 0.11)',
    textColor: 'text-white',
  },
];

// Card Component
const CourseCard = React.forwardRef(({ course, bgStyles, isLast, idx }, ref) => {
  // For tablet and below, force column layout (image then content). For larger, follow original.
  // We'll use Tailwind's responsive flex-col (sm for >640px, md for >768px) to adjust
  // xs: always column, sm+: can be column, xl+: row if you want (or keep column for consistency if in doubt)
  // To be explicit for tablet (as per the prompt), make flex-col for <lg, flex-row only on lg+
  // Let's use: 'flex flex-col lg:flex-row'

  // Determine button style: for the last two cards (idx 1, idx 2), button is white bg with black text
  const buttonClass =
    (idx === 1 || idx === 2)
      ? 'bg-white text-black px-3'
      : 'bg-black text-white px-3';
  return (
    <div
      ref={ref}
      className={`
        w-full max-w-[95vw] rounded-xl mb-4
        flex flex-col lg:flex-row items-start gap-4 lg:gap-8 p-3 xs:p-4 glass-card
        ${bgStyles.className}
        ${isLast ? 'z-20' : 'z-10'}
        ${bgStyles.textColor}
        relative
        sm:max-w-[95vw] sm:mb-6
        md:max-w-[90vw] md:mb-8
        lg:max-w-[62vw] lg:mb-8
        xl:max-w-[70vw]
        2xl:max-w-[80vw]
      `}
      style={{
        background: bgStyles.background,
        backdropFilter: 'blur(16px) saturate(160%)',
        WebkitBackdropFilter: 'blur(16px) saturate(160%)',
        border: bgStyles.border,
        boxShadow: bgStyles.boxShadow,
        position: 'relative',
        zIndex: isLast ? 20 : 10,
        overflow: 'hidden',
      }}
    >
      <div className="w-full lg:w-auto flex justify-center">
        <div
          className="
            w-full h-[180px]
            xs:w-[38vw] xs:h-[140px]
            sm:w-[30vw] sm:h-[180px]
            md:w-[80vw] md:h-[310px]
            lg:w-[35vw] lg:h-[270px]
            xl:w-[24vw] xl:h-[300px]
            2xl:w-[35vw] 2xl:h-[390px]
            flex items-center
          "
        >
          <img
            className="w-full h-full object-cover rounded-xl"
            src={course.img}
            alt={course.title}
          />
        </div>
      </div>

      <div className='w-full lg:w-auto px-2 xs:px-6 flex flex-col gap-6 lg:gap-10 pt-4 lg:pt-8'>
        <div>
          <h1 className="font-[regular] text-base xs:text-[1.65rem] sm:text-[2.1rem] md:text-[2rem] lg:text-[2.3rem] break-words">
            {course.title}
          </h1>
        </div>
        <div>
          <button
            className={`
              relative overflow-hidden cursor-pointer font-bold rounded-xl 
              ${buttonClass} group flex items-center justify-center
              text-xs
              xs:text-sm xs:px-6 xs:py-2
              sm:text-base sm:px-8 sm:py-3
              md:text-[1.1rem] md:px-10 md:py-4
              w-full lg:w-auto
              px-4
              py-2
              transition-all
              min-h-[2.2rem] min-w-[7rem]
            `}
            style={{
              minWidth: '7rem',
              minHeight: '2.6rem',
              width: '100%',
              maxWidth: '190px'
            }}
          >
            <span className="block absolute flex gap-1 left-0 right-0 w-full h-full items-center justify-center transition-all duration-300 group-hover:-translate-y-full translate-y-0">
              Explore Course
              <IoIosArrowRoundForward />
            </span>
            <span className="block absolute flex gap-1 left-0 right-0 w-full h-full items-center justify-center transition-all duration-300 translate-y-full group-hover:translate-y-0">
              Explore Course
              <IoIosArrowRoundForward />
            </span>
          </button>
        </div>
      </div>

      <div />
    </div>
  );
});

const CoursePanel = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const triggers = cardRefs.current.map((card, idx) => {
      if (!card) return null;
      if (idx === 0 || idx === 1) {
        return ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: `+=${card.offsetHeight}`,
          pin: true,
          pinSpacing: false,
        });
      }
      return null;
    });

    return () => {
      triggers.forEach((t) => t && t.kill());
    };
  }, []);

  return (
    <section
      className="
        w-full bg-[#F0EDE6] rounded-tl-3xl rounded-tr-3xl
        pt-5 xs:pt-8 sm:pt-16 lg:pt-32
        h-auto min-h-[30vh]
      "
    >
      <div>
        {/* Header */}
        <div>
          <div className="flex flex-col gap-2 sm:gap-5">
            <h1 className="text-center">
              <span className="relative border border-[#E04200] bg-[#E04200]/30 px-5 py-[.1rem] inline-block align-baseline">
                <span className="absolute top-0 left-0 w-1 h-1 bg-black -translate-x-1/2 -translate-y-1/2"></span>
                <span className="absolute top-0 right-0 w-1 h-1 bg-black translate-x-1/2 -translate-y-1/2"></span>
                <span className="absolute bottom-0 left-0 w-1 h-1 bg-black -translate-x-1/2 translate-y-1/2"></span>
                <span className="absolute bottom-0 right-0 w-1 h-1 bg-black translate-x-1/2 translate-y-1/2"></span>
                COURSE
              </span>
            </h1>
            <h1
              className="
                text-center mt-1 sm:mt-4 text-[1.1rem]
                xs:text-[1.15rem] sm:text-[1.4rem] md:text-[1.7rem] lg:text-[2rem]
                xl:text-[2.3rem] 2xl:text-[2.5rem]
              "
            >
              Explore Our Free Tutorials
            </h1>
          </div>
          <div className="flex justify-center mt-4 xs:mt-5 sm:mt-8 lg:mt-12">
            <button
              className="
                relative overflow-hidden cursor-pointer font-bold rounded-xl 
                text-xs
                xs:text-sm xs:px-6 xs:py-2
                sm:text-[1.1rem] sm:px-10 sm:py-3
                text-white px-4 py-2
                bg-gradient-to-r from-[#EF5B00] to-[#E04100]
                border-0 border-t-1 border-white/60 tracking-wider shadow-md 
                transition-shadow duration-300
                hover:shadow-[0_12px_48px_10px_rgba(224,66,0,0.48),0_2px_32px_12px_rgba(16,16,16,0.30)] 
                group h-[2.7em] xs:h-[2.8em] flex items-center justify-center
                w-full sm:w-auto
              "
              style={{ minWidth: '12rem', maxWidth: '10px' }}
            >
              <span className="block absolute flex gap-1 left-0 right-0 w-full h-full items-center justify-center transition-all duration-300 group-hover:-translate-y-full translate-y-0">
                Explore Courses
              </span>
              <span className="block absolute flex gap-1 left-0 right-0 w-full h-full items-center justify-center transition-all duration-300 translate-y-full group-hover:translate-y-0">
                Explore Courses
              </span>
            </button>
          </div>
        </div>

        {/* Courses Cards */}
        <div
          ref={containerRef}
          className="
            cards flex flex-col items-center justify-center
            pt-3 xs:pt-6 sm:pt-10 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28
          "
        >
          {COURSES.map((course, idx) => (
            <CourseCard
              key={course.id}
              course={course}
              bgStyles={CARD_BACKGROUNDS[idx]}
              isLast={idx === COURSES.length - 1}
              idx={idx}
              ref={el => cardRefs.current[idx] = el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePanel;