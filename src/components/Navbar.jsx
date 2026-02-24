import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }
            lastScrollY.current = currentScrollY
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Disable scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
        return () => document.body.classList.remove('overflow-hidden')
    }, [menuOpen])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 text-white 
                flex justify-between items-center px-4 md:px-8 py-2
                shadow-md bg-black/30 backdrop-blur-md backdrop-saturate-150 border-b border-white/20
                ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
            style={{ willChange: 'transform' }}
        >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shrink-0">
                <img className="w-full h-full object-cover rounded-full" src="/images/logo.png" alt="Logo" />
            </div>

            {/* Hamburger for mobile */}
            <button
                className="md:hidden z-50 ml-auto focus:outline-none"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Open menu"
            >
                <span className="block w-8 h-8 relative">
                    <span
                        className={`absolute left-1/2 top-2 block h-[3px] w-6 rounded bg-white transition-all duration-300
                          ${menuOpen ? 'rotate-45 top-4' : '-translate-x-1/2'}`}
                        style={{ transform: menuOpen ? undefined : 'translateX(-50%)' }}
                    ></span>
                    <span
                        className={`absolute left-1/2 top-4 block h-[3px] w-6 rounded bg-white transition-all duration-300
                          ${menuOpen ? 'opacity-0' : '-translate-x-1/2'}`}
                        style={{ transform: menuOpen ? undefined : 'translateX(-50%)' }}
                    ></span>
                    <span
                        className={`absolute left-1/2 top-6 block h-[3px] w-6 rounded bg-white transition-all duration-300
                          ${menuOpen ? '-rotate-45 top-4' : '-translate-x-1/2'}`}
                        style={{ transform: menuOpen ? undefined : 'translateX(-50%)' }}
                    ></span>
                </span>
            </button>

            {/* Nav bar for desktop */}
            <ul className="hidden md:flex gap-8 items-center bg-black px-6 py-3 rounded-md border-b border-r border-white/30">
                <li>
                    <a href="/" className="text-base transition">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-base transition">About</a>
                </li>
                <li>
                    <a href="/blog" className="text-base transition">Blog</a>
                </li>
                <li>
                    <a href="/contact" className="text-base transition">Contact</a>
                </li>
            </ul>
            <ul className="hidden md:flex">
                <li>
                    <button className="px-4 py-2 text-white rounded-full font-medium">
                        Sign
                    </button>
                </li>
            </ul>

            {/* Mobile side menu */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity duration-300
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                aria-hidden={!menuOpen}
                onClick={() => setMenuOpen(false)}
            >
                {/* Side Drawer */}
                <div
                    className={`absolute top-0 right-0 h-full w-[75vw] max-w-xs bg-[#101010] px-8 py-6 flex flex-col gap-8 transform transition-transform duration-300 rounded-l-2xl shadow-lg
                        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col gap-10 h-full justify-between">
                        <div>
                            <div className="w-14 h-14 bg-white rounded-full mb-8 flex items-center justify-center">
                                <img className="w-full h-full object-cover rounded-full" src="/images/logo.png" alt="Logo" />
                            </div>
                            <ul className="flex flex-col gap-6">
                                <li>
                                    <a href="/" className="text-lg transition block" onClick={() => setMenuOpen(false)}>Home</a>
                                </li>
                                <li>
                                    <a href="/about" className="text-lg transition block" onClick={() => setMenuOpen(false)}>About</a>
                                </li>
                                <li>
                                    <a href="/blog" className="text-lg transition block" onClick={() => setMenuOpen(false)}>Blog</a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-lg transition block" onClick={() => setMenuOpen(false)}>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button
                                className="w-full px-4 py-3 text-white rounded-full font-medium bg-gradient-to-r from-[#EF5B00] to-[#E04100]"
                                onClick={() => setMenuOpen(false)}
                            >
                                Sign
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
