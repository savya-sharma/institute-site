import React, { useRef, useEffect } from 'react'
import { companiesLogo } from '../data/companySliderData'
import gsap from 'gsap'

const CompanySlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Get the width of the slider to calculate animation distance
        const sliderWidth = slider.scrollWidth / 2; // since we'll double the logos

        let tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
        gsap.set(slider, { x: -sliderWidth }); // Start at left
        tl.to(slider, {
            x: 0,
            duration: 10,
        });

        return () => {
            tl.kill();
            gsap.set(slider, { x: 0 });
        };
    }, []);

    // Duplicate companiesLogo array for seamless infinite scroll
    const logos = [...companiesLogo, ...companiesLogo];

    return (
        <section>
            <div className="overflow-hidden py-6 sm:py-10 w-full">
                <div
                    ref={sliderRef}
                    className="flex items-center gap-5 sm:gap-8 lg:gap-10 flex-nowrap w-max will-change-transform"
                >
                    {logos.map((company, idx) => (
                        <img
                            key={company.id + '-' + idx}
                            src={company.img}
                            alt={`Company logo ${company.id}`}
                            className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CompanySlider