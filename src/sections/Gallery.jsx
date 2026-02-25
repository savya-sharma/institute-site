import React from 'react';

// Mobile-first: base classes = phone layout, lg: = laptop layout
const galleryImages = [
    {
        src: "/images/galImg1.jpg",
        className: "w-full h-[45vw] bg-black rounded-md overflow-hidden lg:w-[22vw] lg:h-[36vh]",
    },
    {
        src: "/images/galImg2.jpg",
        className: "w-full h-[45vw] bg-black rounded-md overflow-hidden lg:w-[26vw] lg:h-[36vh]",
    },
    {
        src: "/images/galImg7.jpg",
        className: "w-full h-[55vw] bg-black rounded-md overflow-hidden lg:w-[23vw] lg:h-[74.6vh]",
    },
    {
        src: "/images/galImg4.jpg",
        className: "w-full h-[45vw] bg-black rounded-md overflow-hidden lg:absolute lg:top-[20rem] lg:left-0 lg:w-[22vw] lg:h-[36vh]",
    },
    {
        src: "/images/galImg5.jpg",
        className: "w-full h-[45vw] bg-black rounded-md overflow-hidden lg:absolute lg:top-[20rem] lg:left-[22.6rem] lg:w-[26vw] lg:h-[36vh]",
    },
    {
        src: "/images/galImg6.png",
        className: "w-full h-[45vw] bg-black rounded-md overflow-hidden lg:absolute lg:-bottom-[27rem] lg:left-0 lg:w-full lg:h-[50vh]",
    },
];

const GalleryImage = ({ src, className }) => (
    <div className={className}>
        <img className="size-full object-cover rounded-md" src={src} alt="" />
    </div>
);

const Gallery = () => {
    return (
        <section className="w-full h-auto pt-10 pb-12 flex justify-center overflow-hidden sm:pt-12 md:pt-16 lg:h-[190vh] lg:pt-36 lg:pb-0">
            <div className="w-full px-3 sm:px-4 md:px-6 lg:w-fit lg:px-4">
                <div className='flex flex-col gap-5'>
                    <h1 className="text-center">
                        <span className="relative text-black border border-[#E04200] bg-[#E04200]/30 px-5 py-[.1rem] inline-block align-baseline">
                            <span className="absolute top-0 left-0 w-1 h-1 bg-black -translate-x-1/2 -translate-y-1/2"></span>
                            <span className="absolute top-0 right-0 w-1 h-1 bg-black translate-x-1/2 -translate-y-1/2"></span>
                            <span className="absolute bottom-0 left-0 w-1 h-1 bg-black -translate-x-1/2 translate-y-1/2"></span>
                            <span className="absolute bottom-0 right-0 w-1 h-1 bg-black translate-x-1/2 translate-y-1/2"></span>
                            GALLERY
                        </span>
                    </h1>
                    <div className='text-center mt-4 text-[1.5rem] xs:text-[1.7rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.7rem]'>
                        <h1>Moments of Excellence and Achievement</h1>
                    </div>
                </div>
                <div className="pt-5 sm:pt-6 md:pt-8 lg:pt-[7rem]">
                    <div className="flex flex-col gap-3 sm:gap-4 lg:relative lg:flex-row lg:gap-6">
                        {galleryImages.map((img, idx) => (
                            <GalleryImage key={`gallery-image-${idx}`} {...img} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;