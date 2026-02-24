import React from 'react';

// Define responsive image layout classes for each image and position
const galleryImages = [
    // Top Row
    {
        src: "https://i.pinimg.com/1200x/c1/c5/77/c1c577c16d2bf406cb203790bdb1a99c.jpg",
        className: `
            w-[22vw] h-[36vh] bg-black rounded-md overflow-hidden
            xs:w-full xs:h-[28vw] xs:static
        `,
        position: "static"
    },
    {
        src: "https://i.pinimg.com/736x/c5/df/f2/c5dff28b17e01d28c0f5459bccd8f53f.jpg",
        className: `
            w-[26vw] h-[36vh] bg-black rounded-md overflow-hidden
            xs:w-full xs:h-[28vw] xs:static
        `,
        position: "static"
    },
    {
        src: "https://i.pinimg.com/736x/9d/52/d0/9d52d06bba2024cabdb4ec4956c0688d.jpg",
        className: `
            w-[23vw] h-[74.6vh] bg-black rounded-md overflow-hidden
            xs:w-full xs:h-[45vw] xs:static
        `,
        position: "static"
    },

    // Middle Row - Absolutely positioned on laptop, stacked static on mobile
    {
        src: "https://i.pinimg.com/1200x/a7/c7/7b/a7c77bbdab58868ab37296da7d679632.jpg",
        className: `
            absolute top-[20rem] left-0 w-[22vw] h-[36vh] bg-black rounded-md overflow-hidden
            xs:static xs:w-full xs:h-[28vw]
        `,
        position: "middle"
    },
    {
        src: "https://i.pinimg.com/736x/a9/a2/f3/a9a2f3487118b187b72e410db0ed07c3.jpg",
        className: `
            absolute top-[20rem] left-[22.6rem] w-[26vw] h-[36vh] bg-black rounded-md overflow-hidden
            xs:static xs:w-full xs:h-[28vw]
        `,
        position: "middle"
    },

    // Bottom Row - Absolutely positioned on laptop, stacked static on mobile
    {
        src: "https://i.pinimg.com/1200x/aa/b4/65/aab46530c7face09dedfafbf5dc8de54.jpg",
        className: `
            absolute -bottom-[27rem] left-0 w-full h-[50vh] bg-black rounded-md overflow-hidden
            xs:static xs:w-full xs:h-[35vw]
        `,
        position: "bottom"
    }
];

const GalleryImage = ({ src, className }) => (
    <div className={className}>
        <img className="size-full object-cover rounded-md" src={src} alt="" />
    </div>
);

const Gallery = () => {
    return (
        <section className="
            w-full h-[190vh] flex justify-center pt-36
            xs:h-auto xs:pt-16
        ">
            <div className="w-fit xs:w-full">
                <div className='flex flex-col gap-5'>
                    <h1 className="text-center">
                        <span className="relative text-black border border-[#E04200] bg-[#E04200]/30 px-5 py-[.1rem] inline-block align-baseline">
                            <span className="absolute top-0 left-0 w-1 h-1 bg-black -translate-x-1/2 -translate-y-1/2"></span>
                            <span className="absolute top-0 right-0 w-1 h-1 bg-black translate-x-1/2 -translate-y-1/2"></span>
                            <span className="absolute bottom-0 left-0 w-1 h-1 bg-black -translate-x-1/2 translate-y-1/2"></span>
                            <span className="absolute bottom-0 right-0 w-1 h-1 bg-black translate-x-1/2 translate-y-1/2"></span>
                            HEAR FROM OUR STUDENTS
                        </span>
                    </h1>
                    <div className='text-center text-[2.7rem] xs:text-[1.3rem]'>
                        <h1>Moments of Excellence and Achievement <span className=''> Learner </span></h1>
                    </div>
                </div>
                <div className="pt-[7rem] xs:pt-6">
                    <div className="
                        relative flex gap-6
                        xs:static xs:flex-col xs:gap-3
                    ">
                        {/* Render all images in order, so xs:flex-col stacks them naturally */}
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