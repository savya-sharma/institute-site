import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const CoursePanel = () => {
  const containerRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    if (!containerRef.current) return

    // Only apply ScrollTrigger pin on first and second cards
    const triggers = cardRefs.current.map((card, idx) => {
      if (!card) return null
      if (idx === 0 || idx === 1) {
        // Pin until next card
        return ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: `+=${card.offsetHeight}`,
          pin: true,
          pinSpacing: false,
        })
      }
      // Do not create ScrollTrigger for the third card
      return null
    })

    return () => {
      triggers.forEach((t) => t && t.kill())
    }
  }, [])

  return (
    <section
      className="
        w-full bg-[#F5F5F5] rounded-tl-3xl rounded-tr-3xl
        pt-8 sm:pt-20 lg:pt-36
        h-[110vh] xs:h-[170vh] sm:h-[180vh] md:h-[160vh] lg:h-[200vh] xl:h-[220vh] 2xl:h-[260vh]
      "
    >
      <div>
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
                text-center mt-1 sm:mt-4 text-[1.2rem]
                xs:text-[1.2rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.1rem]
                xl:text-[2.3rem] 2xl:text-[2.7rem]
              "
            >
              Explore Our Free Tutorials
            </h1>
          </div>
          <div className="flex justify-center mt-5 sm:mt-8 lg:mt-12">
            <button
              className="relative overflow-hidden cursor-pointer text-[1rem] sm:text-[1.1rem] text-white font-bold px-6 py-2 sm:px-10 sm:py-3 rounded-xl bg-gradient-to-r from-[#EF5B00] to-[#E04100] border-0 border-t-1 border-white/60 tracking-wider shadow-md transition-shadow duration-300 hover:shadow-[0_12px_48px_10px_rgba(224,66,0,0.48),0_2px_32px_12px_rgba(16,16,16,0.30)] group h-[2.8em] flex items-center justify-center"
              style={{ minWidth: '14rem' }}
            >
              <span className="block absolute left-0 right-0 w-full h-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-full translate-y-0">
                Explore Courses
              </span>
              <span className="block absolute left-0 right-0 w-full h-full flex items-center justify-center transition-all duration-300 translate-y-full group-hover:translate-y-0">
                Explore Courses
              </span>
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="
            cards flex flex-col items-center justify-center
            pt-6 xs:pt-6 sm:pt-14 md:pt-20 lg:pt-22 xl:pt-28 2xl:pt-32
          "
        >
          {[
            'bg-[#DEDED4]', // Light
            'bg-[#1456E0]', // Blue
            'bg-[#343434]', // Dark
          ].map((bgClass, idx, arr) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`
                w-[95vw] h-[25vh] rounded-xl mb-4
                xs:w-[98vw] xs:h-[19vh] xs:mb-4
                sm:w-[95vw] sm:h-[28vh] sm:mb-6
                md:w-[90vw] md:h-[36vh] md:mb-8
                lg:w-[62vw] lg:h-[40vh] lg:mb-8
                xl:w-[70vw] xl:h-[52vh]
                2xl:w-[80vw] 2xl:h-[60vh]
                ${bgClass}
                ${idx === arr.length - 1 ? 'z-20' : 'z-10'}
                relative
              `}
            // Optionally you can use style prop for finer zIndex control
            // style={idx === arr.length - 1 ? { zIndex: 20, position: 'relative' } : { zIndex: 10, position: 'relative' }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursePanel