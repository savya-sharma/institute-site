import React, { useRef, useEffect } from 'react';
import { testimonialData } from '../data/testimonialData';
import gsap from 'gsap';
import CompanySlider from './CompanySlider';

const CARD_GAP = 50; // px

const TestimonialCard = React.forwardRef(({ name, position, testimonial, image }, ref) => (
    <div
        ref={ref}
        className={`
            testimonial-card
            w-[30vw] h-[25vh]
            sm:w-[80vw] sm:h-auto
            xs:w-[90vw] xs:h-auto
            items-start bg-black flex-shrink-0 flex p-4 transition-transform flex flex-col text-white 
            border-r border-r-[0.5px] border-white/30 rounded-xl border-t border-t-1 border-white/40
            min-w-[250px] max-w-[480px]
            xs:min-w-[200px] xs:max-w-[95vw]
        `}
    >
        <div className='w-full flex border-b pb-4 border-gray-400'>
            <div className="w-20 h-20 min-w-[5rem] min-h-[5rem] max-w-[10rem] max-h-[10rem] xs:w-16 xs:h-16 xs:min-w-[4rem] xs:min-h-[4rem] xs:max-w-[4rem] xs:max-h-[4rem] overflow-hidden flex items-center justify-center mr-4">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <div>
                <h2 className="testimonial-name font-semibold text-lg text-white xs:text-base">{name}</h2>
                <span className="testimonial-role text-sm text-gray-200 mb-2 xs:text-xs">{position}</span>
            </div>
        </div>

        <div className="ml-4 pt-4 xs:ml-2 xs:pt-2">
            <p className="testimonial-text text-white text-sm mt-1 xs:text-xs">"{testimonial}"</p>
        </div>
    </div>
));

const Testimonial = () => {
    const sliderRef = useRef(null);
    const cardRefs = useRef([]);
    const tlRef = useRef(null); // Store GSAP timeline for access in event handlers

    // Helper for clearing refs on rerender
    cardRefs.current = [];

    useEffect(() => {
        const slider = sliderRef.current;
        const cards = cardRefs.current;

        if (!slider || !cards.length) return;

        // Clone cards once for seamless scroll
        const clones = cards.map(card => {
            const clone = card.cloneNode(true);
            slider.appendChild(clone);
            return clone;
        });

        const cardWidth = cards[0].offsetWidth;
        const distance = (cardWidth + CARD_GAP) * cards.length;

        slider.style.width = `${distance * 2 - CARD_GAP}px`;

        const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
        tl.to(slider, { x: -distance, duration: 50 });
        tlRef.current = tl;

        // Pause/resume on hover handlers
        const handleMouseEnter = () => {
            if (tlRef.current) tlRef.current.pause();
        };
        const handleMouseLeave = () => {
            if (tlRef.current) tlRef.current.resume();
        };
        slider.addEventListener('mouseenter', handleMouseEnter);
        slider.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            tl.kill();
            // Remove clones (tracked directly since refs are mutated DOM nodes, not mapped to state)
            clones.forEach(clone => slider.removeChild(clone));
            slider.removeEventListener('mouseenter', handleMouseEnter);
            slider.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <section className="
                w-full min-h-screen pt-[9rem]
                flex flex-col gap-[6rem] bg-black testimonial-section
                xs:pt-[4.2rem]
            ">
                <div>
                    <div className='flex flex-col gap-5'>
                        <h1 className="text-center">
                            <span className="relative text-white/80 border border-[#E04200] bg-[#E04200]/30 px-5 py-[.1rem] inline-block align-baseline">
                                <span className="absolute top-0 left-0 w-1 h-1 bg-white -translate-x-1/2 -translate-y-1/2"></span>
                                <span className="absolute top-0 right-0 w-1 h-1 bg-white translate-x-1/2 -translate-y-1/2"></span>
                                <span className="absolute bottom-0 left-0 w-1 h-1 bg-white -translate-x-1/2 translate-y-1/2"></span>
                                <span className="absolute bottom-0 right-0 w-1 h-1 bg-white translate-x-1/2 translate-y-1/2"></span>
                                HEAR FROM OUR STUDENTS
                            </span>
                        </h1>
                        <h1 className='text-white text-center text-[2.7rem] xs:text-[1.3rem]'>
                            We're Here To Help <span className=''> Learner </span> To Become <br className="xs:hidden" /> Industry- Ready Developer
                        </h1>
                    </div>

                    <div
                        className="relative overflow-hidden mt-[7rem] w-screen max-w-full xs:mt-10 xs:px-2"
                    >
                        <div
                            ref={sliderRef}
                            className="
                                flex flex-nowrap gap-8 will-change-transform
                                xs:gap-3
                            "
                        >
                            {testimonialData.map((testimonial, idx) => (
                                <TestimonialCard
                                    key={testimonial.id}
                                    {...testimonial}
                                    ref={el => cardRefs.current[idx] = el}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <CompanySlider />
                </div>
            </section>
        </>
    );
};

export default Testimonial;