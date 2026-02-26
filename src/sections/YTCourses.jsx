import React, { useEffect, useRef } from 'react'
import { ytCourseData } from '../data/ytcourseData'
import gsap from 'gsap';

const YTCourseCard = React.forwardRef(({ img, title, link }, ref) => (
    <a
        ref={ref}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`
            w-[92vw] h-[5.5rem]
            xs:w-[95vw] xs:h-[5.5rem]
            sm:w-[95vw] sm:h-[6.5rem]
            md:w-[75vw] md:h-[7rem]
            lg:w-[24rem] lg:h-[8rem]
            border border-white/30 rounded-xl flex flex-row items-center justify-center 
            gap-3 sm:gap-5 bg-[#232323] hover:scale-[1.04] transition-transform duration-200 
            px-2 xs:px-3 shadow-md no-underline
        `}
        style={{ textDecoration: "none", maxWidth: "100%" }}
        tabIndex={0}
        aria-label={`${title} YouTube Course`}
    >
        <div className={`
            w-[6.5rem] h-[4rem]
            xs:w-16 xs:h-16
            sm:w-20 sm:h-20
            md:w-[9rem] md:h-[6rem]
            lg:w-[10rem] lg:h-24
            flex-shrink-0 flex items-center justify-center 
            bg-[#191919] rounded-xl overflow-hidden
        `}>
            {img ? (
                <img src={img} alt={title} className='w-full h-full object-cover rounded-xl' />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-[2rem] text-white/30">YT</div>
            )}
        </div>
        <h2 className={`
            text-white text-xs
            xs:text-[1rem]
            sm:text-base
            md:text-lg
            px-1 xs:px-2 text-left flex-1
        `}>{title}</h2>
    </a>
))

const YTCourses = () => {
    const sliderRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const sliderWidth = slider.scrollWidth / 2;

        let tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
        gsap.set(slider, { x: -sliderWidth });

        tl.to(slider, {
            x: 0,
            duration: 20,
        });
        timelineRef.current = tl;

        // Pause/resume handlers
        const handleMouseEnter = () => {
            if (timelineRef.current) timelineRef.current.pause();
        };
        const handleMouseLeave = () => {
            if (timelineRef.current) timelineRef.current.resume();
        };

        slider.addEventListener('mouseenter', handleMouseEnter);
        slider.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            tl.kill();
            slider.removeEventListener('mouseenter', handleMouseEnter);
            slider.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, []);

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
                <div
                    ref={sliderRef}
                    className="flex items-center gap-6 sm:gap-8 lg:gap-10 flex-nowrap w-max will-change-transform"
                >
                    {ytCourseData.map(course => (
                        <YTCourseCard key={course.id} img={course.img} title={course.title} link={course.link} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default YTCourses