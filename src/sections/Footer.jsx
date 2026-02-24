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
            <section className="w-full relative bg-black border-tr-rounded-xl min-h-[60vh] h-[90vh] xs:min-h-[unset] xs:h-auto">
                <div className='overlay absolute top-0 left-0 right-0'>
                    <div className='absolute top-[10rem] right-[10rem] w-[15vw]'><img className='size-full object-cover' src="/images/modelImg-2.png" alt="" /></div>
                    <div className='absolute top-[17rem] left-0 w-[10vw]'><img className='size-full object-cover' src="/images/modelImg-4.png" alt="" /></div>
                </div>
                <div className="text-white pt-[7rem] xs:pt-8 px-2 xs:px-2">
                    <h1 className="text-[12rem] leading-none flex justify-center xs:text-[2.3rem] xs:leading-[2.7rem] xs:pt-[1rem] xs:text-center whitespace-nowrap xs:whitespace-normal">
                        Full Stack learning
                    </h1>

                    <div className="w-full flex justify-between items-start pt-[7rem] px-10 gap-x-4 xs:pt-8 xs:px-0 xs:flex-col xs:items-center xs:gap-y-10">
                        {/* Logo + Social Links */}
                        <div className="flex flex-col items-center xs:w-full">
                            <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shrink-0 xs:w-12 xs:h-12">
                                <img className="w-full h-full object-cover rounded-full" src="/images/logo.png" alt="Logo" />
                            </div>
                            <div className="flex gap-5 mt-8 text-[1.5rem] xs:text-[1.2rem]">
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

                        {/* Info Columns */}
                        <div className="xs:w-full">
                            <div className="flex gap-[6rem] xs:gap-8 xs:flex-col xs:w-full">
                                <ul className="flex flex-col gap-5 xs:gap-2 xs:w-full">
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
                                <ul className="flex flex-col gap-5 xs:gap-2 xs:w-full">
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer