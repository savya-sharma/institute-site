import React, { useEffect, useRef } from 'react'
import { ytCourseData } from '../data/ytcourseData'
import gsap from 'gsap';

const YTCourseCard = React.forwardRef(({ img, title }, ref) => (
    <div
        ref={ref}
        className='w-[20rem] h-[6rem] border border-white/30 rounded-xl flex flex-row items-center justify-center gap-5 bg-[#232323] hover:scale-[1.04] transition-transform duration-200 shadow-md'
    >
        <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-[#191919] rounded-xl overflow-hidden">
            {img ? (
                <img src={img} alt={title} className='w-full h-full object-cover rounded-xl' />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-[2.5rem] text-white/30">YT</div>
            )}
        </div>
        <h2 className='text-white text-lg px-2 text-left flex-1'>{title}</h2>
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
        <section className='w-full min-h-screen bg-black pt-[9rem]'>
            <div className='flex flex-col gap-5'>
                <h1 className="text-center">
                    <span className="relative text-white/80 border border-[#E04200] bg-[#E04200]/30 px-5 py-[.1rem] inline-block align-baseline">
                        <span className="absolute top-0 left-0 w-1 h-1 bg-white -translate-x-1/2 -translate-y-1/2"></span>
                        <span className="absolute top-0 right-0 w-1 h-1 bg-white translate-x-1/2 -translate-y-1/2"></span>
                        <span className="absolute bottom-0 left-0 w-1 h-1 bg-white -translate-x-1/2 translate-y-1/2"></span>
                        <span className="absolute bottom-0 right-0 w-1 h-1 bg-white translate-x-1/2 translate-y-1/2"></span>
                        YOUTUBE
                    </span>
                </h1>
                <h1 className="text-center text-[2.7rem] text-white/80 mt-4">Explore our YouTube Courses</h1>
            </div>
            <div className='overflow-hidden pt-[7rem]'>
                <div ref={sliderRef} className="flex items-center gap-10 flex-nowrap w-max will-change-transform">
                    {ytCourseData.map(course => (
                        <YTCourseCard key={course.id} img={course.img} title={course.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default YTCourses