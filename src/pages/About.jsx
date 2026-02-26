import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from '../sections/Footer';

const teamMembers = [
    {
        name: "Rohit Jain",
        title: "Founder & CEO.",
        img: "https://i.pinimg.com/1200x/17/1c/2e/171c2e93fc23504f3331b335f7fbff4e.jpg",
    },
    {
        name: "Dheeraj Jangid",
        title: "CFO & Co-Founder.",
        img: "https://i.pinimg.com/736x/5f/42/09/5f42091b45afa0e15ee7dd760dfd43f3.jpg",
    },
    {
        name: "Akshat Sharma",
        title: "Co-Founder & Director.",
        img: "https://i.pinimg.com/736x/d1/8a/2e/d18a2ed82a1750347e6ef707cee92751.jpg",
    },
    {
        name: "Anant Tiwari",
        title: "Head of Student Success",
        img: "https://i.pinimg.com/1200x/2d/cf/d1/2dcfd18ccda2c9a6987d8160911ffbe7.jpg",
    },
]

const Hero = () => {
    const paraRef = useRef(null);

    // gsap to fill the text line by line on scroll
    useEffect(() => {
        const para = paraRef.current;
        if (!para) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: para,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            }
        });

        tl.to(para, { opacity: 1, duration: 1 });

    }, []);

    return (
        <>
            <section className="hero w-full min-h-[60vh] h-[45vh] sm:min-h-[70vh] sm:h-[50vh] text-white">
                <div className='flex h-full items-center justify-center px-3 sm:px-4 md:px-8'>
                    <div className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8 w-full max-w-full sm:max-w-8xl">
                        <span className="text-[#E04200] text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] font-semibold">LEARN. BUILD. GETPLACED.</span>
                        <h1 className="font-[regular] leading-snug xs:leading-snug sm:leading-tight md:leading-[5rem] text-[1.65rem] xs:text-[2rem] sm:text-[2.7rem] md:text-[3.5rem] font-bold">
                            Transforming Learners Into <br className="hidden sm:block" />
                            <span className="relative border border-[#E04200] bg-[#E04200]/30 px-2 py-1 inline-block align-baseline">
                                <span className="absolute top-0 left-0 w-1 h-1 bg-white -translate-x-1/2 -translate-y-1/2"></span>
                                <span className="absolute top-0 right-0 w-1 h-1 bg-white translate-x-1/2 -translate-y-1/2"></span>
                                <span className="absolute bottom-0 left-0 w-1 h-1 bg-white -translate-x-1/2 translate-y-1/2"></span>
                                <span className="absolute bottom-0 right-0 w-1 h-1 bg-white translate-x-1/2 translate-y-1/2"></span>
                                Professional
                            </span>
                        </h1>
                    </div>
                </div>
            </section>

            <section className='w-full min-h-[42vh] sm:min-h-[50vh] flex items-center justify-center px-2 xs:px-4 md:px-8 text-white bg-black text-center py-10 sm:py-0'>
                <div className="flex flex-col gap-4 sm:gap-5 items-center w-full">
                    <div
                        className="rounded-full px-2 xs:px-3"
                        style={{
                            background: 'linear-gradient(to right,rgba(63, 0, 43, 0.61),rgba(252, 233, 246, 0.14))'
                        }}>
                        <h1
                            className="font-bold text-[1.1rem] xs:text-[1.6rem] sm:text-[2.1rem] md:text-[1rem] leading-snug sm:leading-tight md:leading-none px-2 xs:px-4 sm:px-6 py-2 xs:py-3 rounded-full inline-flex items-center gap-2 align-baseline font-light bg-gradient-to-r from-[#FF6200] to-[#F7Dacd] text-transparent bg-clip-text"
                        >
                            <img className='w-4 h-4 xs:w-5 xs:h-5' src="/images/shining.png" alt="" />
                            <span>About FSL</span>
                        </h1>
                    </div>

                    <div className="px-1 xs:px-2 ">
                        <p
                            ref={paraRef}
                            className='text-[0.98rem] xs:text-[1.05rem] sm:text-[1.2rem] md:text-[2.1rem] font-[regular] opacity-[.4] max-w-full sm:max-w-[38rem] md:max-w-[60rem]'
                        >
                            At Full Stack Learning, we are committed to transforming learners into professionals <br className="hidden xs:block" /> by providing them with the necessary tools and guidance to excel in their tech careers.
                        </p>
                    </div>

                    <div className='flex items-center justify-center mt-5 xs:mt-8'>
                        <button
                            className="relative overflow-hidden cursor-pointer text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] text-white font-bold px-4 xs:px-6 py-2 sm:px-10 sm:py-3 rounded-xl bg-gradient-to-r from-[#EF5B00] to-[#E04100] border-0 border-t-1 border-white/60 tracking-wider shadow-md transition-shadow duration-300 hover:shadow-[0_12px_48px_10px_rgba(224,66,0,0.48),0_2px_32px_12px_rgba(16,16,16,0.30)] group h-[2.3em] xs:h-[2.8em] flex items-center justify-center"
                            style={{ minWidth: '12rem', }}
                        >
                            <span className="block absolute left-0 right-0 w-full h-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-full translate-y-0">
                                Let's Contact
                                <IoIosArrowRoundForward />
                            </span>
                            <span className="block absolute left-0 right-0 w-full h-full flex items-center justify-center transition-all duration-300 translate-y-full group-hover:translate-y-0">
                                Let's Contact
                                <IoIosArrowRoundForward />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section className='w-full min-h-[64vh] sm:min-h-screen bg-black text-white pt-[3.2rem] sm:pt-[7rem] pb-12 sm:pb-0'>
                <div>
                    <div className='flex flex-col gap-4 sm:gap-5'>
                        <h1 className="text-center">
                            <span className="relative border border-[#E04200] bg-[#E04200]/30 px-3 xs:px-4 sm:px-5 py-[.1rem] inline-block align-baseline">
                                <span className="absolute top-0 left-0 w-1 h-1 bg-white -translate-x-1/2 -translate-y-1/2"></span>
                                <span className="absolute top-0 right-0 w-1 h-1 bg-white translate-x-1/2 -translate-y-1/2"></span>
                                <span className="absolute bottom-0 left-0 w-1 h-1 bg-white -translate-x-1/2 translate-y-1/2"></span>
                                <span className="absolute bottom-0 right-0 w-1 h-1 bg-white translate-x-1/2 translate-y-1/2"></span>
                                Meet the Team
                            </span>
                        </h1>
                        <div className='text-center mt-2 xs:mt-4 text-[1.15rem] xs:text-[1.3rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.7rem]'>
                            <h1>Shaping careers with knowledge and experience.</h1>
                        </div>
                        {/* employee's */}
                        <div className='w-full flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-8 mt-8'>
                            {teamMembers.map(member => (
                                <div
                                    key={member.name}
                                    className='
                                        w-[90vw] 
                                        xs:w-[350px] 
                                        sm:w-[320px] 
                                        md:w-[270px] 
                                        h-[350px]
                                        border border-white/50 rounded-lg
                                        relative flex items-end justify-start
                                        overflow-hidden shadow-lg group
                                        transition-all duration-300
                                    '
                                    style={{
                                        maxWidth: '95vw',
                                    }}
                                >
                                    <img className='size-full object-cover rounded-lg transition-transform duration-300' src={member.img} alt={member.name} />
                                    {/* Black gradient overlay from bottom to top */}
                                    <div className='absolute inset-0 rounded-lg'
                                        style={{
                                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.96) 20%, rgba(0,0,0,0.0) 100%)',
                                            pointerEvents: 'none',
                                        }}
                                    />
                                    <div className='flex flex-col absolute left-4 bottom-4 z-10'>
                                        <h1 className='font-[regular] text-[1.2rem] sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.7rem]'>{member.name}</h1>
                                        <h2 className='text-[1rem] sm:text-[1.1rem] md:text-[1.05rem]'>{member.title}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Hero