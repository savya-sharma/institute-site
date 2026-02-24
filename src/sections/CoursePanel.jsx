import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const CoursePanel = () => {
  const containerRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    if (!containerRef.current) return

    const triggers = cardRefs.current.map((card, idx) => {
      if (!card) return null

      // Pin until next card, last card pins until its bottom
      return ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        end:
          idx === cardRefs.current.length - 1
            ? 'bottom top'
            : `+=${card.offsetHeight}`,
        pin: true,
        pinSpacing: false,
      })
    })

    return () => {
      triggers.forEach((t) => t && t.kill())
    }
  }, [])

  return (
    <section
      className="
        w-full bg-[#F5F5F5] pt-36 rounded-tl-3xl rounded-tr-3xl
        h-[320vh] 2xl:h-[320vh] xl:h-[270vh] lg:h-[240vh]
       md:h-[220vh] sm:h-[180vh] xs:h-[170vh]
      "
    >
      <div>
        <div>
          <div className="flex flex-col gap-5">
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
                text-center mt-4 text-[2.7rem]
                2xl:text-[2.7rem] xl:text-[2.3rem] lg:text-[2.1rem]
                md:text-[2rem] sm:text-[1.7rem] xs:text-[1.2rem]
              "
            >
              Explore Our Free Tutorials
            </h1>
          </div>
          <div className="flex justify-center mt-12">
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
            cards flex flex-col items-center justify-center pt-32
            2xl:pt-32 xl:pt-28 lg:pt-22 md:pt-20 sm:pt-16 xs:pt-8
          "
        >
          {[
            'bg-[#DEDED4]', // Light
            'bg-[#1456E0]', // Blue
            'bg-[#343434]', // Dark
          ].map((bgClass, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`
                w-[80vw] h-[60vh] rounded-xl mb-8
                2xl:w-[80vw] 2xl:h-[60vh]
                xl:w-[70vw] xl:h-[52vh]
                lg:w-[62vw] lg:h-[40vh]
                md:w-[90vw] md:h-[36vh]
                sm:w-[95vw] sm:h-[28vh]
                xs:w-[98vw] xs:h-[19vh]
                ${bgClass}
              `}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursePanel