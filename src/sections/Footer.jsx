import React from 'react'
import { FaYoutube, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const socialLinks = [
    {
        href: 'https://www.youtube.com/',
        label: 'YouTube',
        icon: <FaYoutube />,
    },
    {
        href: 'https://www.linkedin.com/',
        label: 'LinkedIn',
        icon: <FaLinkedin />,
    },
    {
        href: 'https://www.instagram.com/',
        label: 'Instagram',
        icon: <AiFillInstagram />,
    },
];

const Footer = () => {
    return (
        <>
            <section className="w-full relative bg-black border-tr-rounded-xl min-h-[60vh] h-[80vh] xs:min-h-[unset] xs:h-auto sm:min-h-[unset] sm:h-auto md:min-h-[unset] md:h-auto lg:min-h-[70vh] lg:h-[95vh]">
                <div className='overlay absolute top-0 left-0 right-0 hidden lg:block'>
                    <div className='absolute top-[13rem] right-[10rem] w-[15vw]'><img className='size-full object-cover' src="/images/modelImg-2.png" alt="" /></div>
                    <div className='absolute top-[17rem] left-0 w-[10vw]'><img className='size-full object-cover' src="/images/modelImg-4.png" alt="" /></div>
                </div>
                <div className="text-white pt-[4rem] xs:pt-6 sm:pt-8 md:pt-10 lg:pt-[7rem] px-2">
                    {/* Hide heading on phone screens (md:hidden = visible only on md and up) */}
                    <h1 className="
                        leading-none flex justify-center text-center whitespace-nowrap
                        text-[2rem] xs:text-[2.3rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[8rem] xl:text-[12rem]
                        xs:whitespace-normal sm:whitespace-normal md:whitespace-normal
                        xs:leading-[2.5rem] sm:leading-tight md:leading-tight
                        hidden md:flex
                    ">
                        Full Stack learning
                    </h1>

                    {/* PHONE/TABLET: vertical stacked order */}
                    <div className="
                        w-full px-4 xs:px-2 sm:px-4 md:px-6 lg:px-10 gap-x-40
                        flex flex-col
                        xs:gap-y-8
                        sm:gap-y-8
                        md:hidden
                    ">
                        {/* Logo */}
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 xs:w-12 xs:h-12 md:w-20 md:h-20 mb-4">
                            <img className="w-full h-full object-cover rounded-full" src="/images/logo.png" alt="Logo" />
                        </div>
                        {/* Social Icons */}
                        <div className="flex gap-5 mb-8 text-[1.5rem] xs:text-[1.2rem]">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="transition-colors duration-200"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        {/* ABOUT */}
                        <ul className="flex flex-col gap-5 xs:gap-2 w-full max-w-[22rem]">
                            <h5 className="text-[1.1rem] xs:text-[1rem] font-bold">ABOUT</h5>
                            <li className="text-[.9rem] xs:text-[.93rem]">
                                <a
                                    href="/about"
                                    className="text-white/60 hover:text-[#E04200] transition-colors duration-200"
                                >
                                    AboutUs
                                </a>
                            </li>
                            <li className="text-[.9rem] xs:text-[.93rem]">
                                <a
                                    href="/support"
                                    className="text-white/60 hover:text-[#E04200] transition-colors duration-200"
                                >
                                    Support
                                </a>
                            </li>
                            <li className="text-[.9rem] xs:text-[.93rem]">
                                <a
                                    href="/contact"
                                    className="text-white/60 hover:text-[#E04200] transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        {/* CONTACT */}
                        <ul className="flex flex-col gap-5 xs:gap-2 w-full max-w-[22rem] mt-8">
                            <h5 className="text-[1.1rem] xs:text-[1rem] font-bold">CONTACT</h5>
                            <li className="flex flex-col gap-2 xs:gap-1">
                                <span className="text-[1rem] xs:text-[.97rem]">Online: 11am - 8pm</span>
                                <a
                                    href="tel:+91987654321"
                                    className="text-white/60 hover:text-[#E04200] transition-colors duration-200"
                                >
                                    +91 987654321
                                </a>
                            </li>
                            <li className="flex flex-col gap-2 xs:gap-1">
                                <span className="text-[1rem] xs:text-[.97rem]">Offline: 11am - 8pm</span>
                                <a
                                    href="tel:+91987654321"
                                    className="text-white/60 hover:text-[#E04200] transition-colors duration-200"
                                >
                                    +91 987654321
                                </a>
                                <a
                                    href="mailto:fullstacklearning@.com"
                                    className="text-white hover:text-[#E04200] transition-colors duration-200 break-all"
                                >
                                    fullstacklearning@.com
                                </a>
                            </li>
                            <li className="mt-2 xs:mt-1 xs:text-[.97rem]">
                                Address
                            </li>
                        </ul>
                    </div>

                    {/* DESKTOP: side-by-side as before */}
                    <div className="
                        w-full flex justify-between items-start pt-[3rem] lg:pt-[7rem] 
                        px-4 sm:px-4 md:px-6 lg:px-10 gap-x-40
                        hidden md:flex-row md:items-start md:flex
                    ">
                        {/* Logo + Social Links aligned to the left */}
                        <div className="flex flex-col items-center xs:w-full md:items-start md:w-[22rem]">
                            <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shrink-0 xs:w-12 xs:h-12">
                                <img className="w-full h-full object-cover rounded-full" src="/images/logo.png" alt="Logo" />
                            </div>
                            <div className="flex gap-5 mt-8 text-[1.5rem] xs:text-[1.5rem]">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                        className="transition-colors duration-200"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                        {/* Info Columns aligned to the right */}
                        <div className="w-[50%] md:ml-auto flex flex-col">
                            <div className="flex gap-[6rem] xs:gap-8 xs:w-full">
                                <ul className="flex flex-col gap-5 xs:gap-4 xs:w-full">
                                    <h5 className="text-[1.1rem] xs:text-[1rem] font-bold">ABOUT</h5>
                                    <li className="text-[.9rem] xs:text-[.93rem]">
                                        <a
                                            href="/about"
                                            className="text-white/60 hover:text-[#E04200] transition-colors duration-200"
                                        >
                                            AboutUs
                                        </a>
                                    </li>
                                    <li className="text-[.9rem] xs:text-[.93rem]">
                                        <a
                                            href="/support"
                                            className="text-white/60 hover:text-[#E04200] transition-colors duration-200"
                                        >
                                            Support
                                        </a>
                                    </li>
                                    <li className="text-[.9rem] xs:text-[.93rem]">
                                        <a
                                            href="/contact"
                                            className="text-white/60 hover:text-[#E04200] transition-colors duration-200"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                                <ul className="flex flex-col gap-5 xs:gap-2 w-full">
                                    <h5 className="text-[1.1rem] xs:text-[1rem] font-bold">CONTACT</h5>
                                    <li className="flex flex-col gap-2 xs:gap-4">
                                        <span className="text-[1rem] xs:text-[.97rem]">Online: 11am - 8pm</span>
                                        <a
                                            href="tel:+91987654321"
                                            className="text-white/60 hover:text-[#E04200] transition-colors duration-200"
                                        >
                                            +91 987654321
                                        </a>
                                    </li>
                                    <li className="flex flex-col gap-2 xs:gap-4">
                                        <span className="text-[1rem] xs:text-[.97rem]">Offline: 11am - 8pm</span>
                                        <a
                                            href="tel:+91987654321"
                                            className="text-white/60 hover:text-[#E04200] transition-colors duration-200"
                                        >
                                            +91 987654321
                                        </a>
                                        <a
                                            href="mailto:fullstacklearning@.com"
                                            className="text-white hover:text-[#E04200] transition-colors duration-200 break-all"
                                        >
                                            fullstacklearning@.com
                                        </a>
                                    </li>
                                    <li className="mt-2 xs:mt-3 xs:text-[.97rem]">
                                        Address
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer