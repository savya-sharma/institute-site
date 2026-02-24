import React from 'react'
import About from './About'
import CoursePanel from './CoursePanel'
import Testimonial from './Testimonial'
import YTCourses from './YTCourses'
import Gallery from './Gallery'
import Footer from './Footer'

const Hero = () => {
    return (
        <>

            <section className="hero w-full min-h-screen h-screen text-white flex items-center justify-center px-4 md:px-8">
                <div className="flex flex-col items-center text-center gap-6 md:gap-8 w-full max-w-8xl">
                    <span className="text-[#E04200] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] font-semibold">LEARN. BUILD. GETPLACED.</span>
                    <h1 className="font-[regular] leading-snug sm:leading-tight md:leading-none text-[2rem] sm:text-[2.7rem] md:text-[4rem] font-bold">
                        Become The FullStack Engineer <br className="hidden sm:block" />
                        That{' '}
                        <span className="relative border border-[#E04200] bg-[#E04200]/30 px-2 py-1 inline-block align-baseline">
                            <span className="absolute top-0 left-0 w-1 h-1 bg-white -translate-x-1/2 -translate-y-1/2"></span>
                            <span className="absolute top-0 right-0 w-1 h-1 bg-white translate-x-1/2 -translate-y-1/2"></span>
                            <span className="absolute bottom-0 left-0 w-1 h-1 bg-white -translate-x-1/2 translate-y-1/2"></span>
                            <span className="absolute bottom-0 right-0 w-1 h-1 bg-white translate-x-1/2 translate-y-1/2"></span>
                            Companies
                        </span>{' '}
                        Want To Hire!
                    </h1>
                    <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] opacity-90 max-w-xl">
                        Join a growing community to learn real-world tech careers at FSL.
                    </p>
                    <div>
                        <button
                            className="relative overflow-hidden cursor-pointer text-[1rem] sm:text-[1.1rem] text-white font-bold px-6 py-2 sm:px-10 sm:py-3 rounded-xl bg-gradient-to-r from-[#EF5B00] to-[#E04100] border-0 border-t-1 border-white/60 tracking-wider shadow-md transition-shadow duration-300 hover:shadow-[0_12px_48px_10px_rgba(224,66,0,0.48),0_2px_32px_12px_rgba(16,16,16,0.30)] group h-[2.8em] flex items-center justify-center"
                            style={{ minWidth: '12rem' }}
                        >
                            <span className="block absolute left-0 right-0 w-full h-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-full translate-y-0">
                                Start Journey
                            </span>
                            <span className="block absolute left-0 right-0 w-full h-full flex items-center justify-center transition-all duration-300 translate-y-full group-hover:translate-y-0">
                                Start Journey
                            </span>
                        </button>
                    </div>
                </div>
            </section>


            <CoursePanel />
            <Testimonial />
            <YTCourses />
            <Gallery />
            <Footer />
        </>
    )
}

export default Hero