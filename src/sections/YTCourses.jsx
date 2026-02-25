import React, { useEffect, useRef } from 'react'
import { ytCourseData } from '../data/ytcourseData'
import gsap from 'gsap';

const YTCourseCard = React.forwardRef(({ img, title }, ref) => (
    <div
        ref={ref}
        className='w-[16rem] h-[3.5rem] xs:w-[17rem] xs:h-[4rem] sm:w-[18rem] sm:h-[5rem] lg:w-[20rem] lg:h-[6rem] border border-white/30 rounded-xl flex flex-row items-center justify-center gap-3 sm:gap-5 bg-[#232323] hover:scale-[1.04] transition-transform duration-200 shadow-md'
    >
        <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0 flex items-center justify-center bg-[#191919] rounded-xl overflow-hidden">
            {img ? (
                <img src={img} alt={title} className='w-full h-full object-cover rounded-xl' />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-[2rem] text-white/30">YT</div>
            )}
        </div>
        <h2 className='text-white text-sm xs:text-base sm:text-lg px-2 text-left flex-1'>{title}</h2>
    </div>
))

const YTCourses = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const sliderWidth = slider.scrollWidth / 2; // since we'll double the cards

        let tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
        gsap.set(slider, { x: -sliderWidth });

        tl.to(slider, {
            x: 0,
            duration: 20,
        });
    })

    return (
        <section className='w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] lg:min-h-screen bg-black pt-[2rem] sm:pt-[5rem] md:pt-[7rem] lg:pt-[9rem]'>
            <div className='flex flex-col gap-5 px-4'>
                <h1 className="text-center">
                    <span className="relative text-white/80 border border-[#E04200] bg-[#E04200]/30 px-5 py-[.1rem] inline-block align-baseline">
                        <span className="absolute top-0 left-0 w-1 h-1 bg-white -translate-x-1/2 -translate-y-1/2"></span>
                        <span className="absolute top-0 right-0 w-1 h-1 bg-white translate-x-1/2 -translate-y-1/2"></span>
                        <span className="absolute bottom-0 left-0 w-1 h-1 bg-white -translate-x-1/2 translate-y-1/2"></span>
                        <span className="absolute bottom-0 right-0 w-1 h-1 bg-white translate-x-1/2 translate-y-1/2"></span>
                        YOUTUBE
                    </span>
                </h1>
                <h1 className="text-center text-white/80 mt-4 text-[1.5rem] xs:text-[1.7rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.7rem]">
                    Explore our YouTube Courses
                </h1>
            </div>
            <div className='overflow-hidden pt-[2rem] sm:pt-[3rem] md:pt-[5rem] lg:pt-[7rem]'>
                <div ref={sliderRef} className="flex items-center gap-6 sm:gap-8 lg:gap-10 flex-nowrap w-max will-change-transform">
                    {ytCourseData.map(course => (
                        <YTCourseCard key={course.id} img={course.img} title={course.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default YTCourses