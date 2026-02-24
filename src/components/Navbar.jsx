import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import gsap from 'gsap'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
]

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const lastScrollY = useRef(0)
    const sideMenuRef = useRef(null)
    const gsapTweenRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
                setShowNavbar(false)
                setMenuOpen(false)
            } else {
                setShowNavbar(true)
            }
            lastScrollY.current = currentScrollY
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (!sideMenuRef.current) return

        if (gsapTweenRef.current) {
            gsapTweenRef.current.kill()
            gsapTweenRef.current = null
        }

        if (menuOpen) {
            gsap.set(sideMenuRef.current, { x: '100%', opacity: 1, display: 'flex' })
            gsapTweenRef.current = gsap.to(sideMenuRef.current, {
                x: 0,
                duration: 0.45,
                ease: 'power3.out',
                onStart: () => {
                    gsap.set(sideMenuRef.current, { pointerEvents: 'auto' })
                }
            })
        } else {
            gsapTweenRef.current = gsap.to(sideMenuRef.current, {
                x: '100%',
                duration: 0.36,
                ease: 'power3.in',
                onComplete: () => {
                    gsap.set(sideMenuRef.current, { display: 'none', pointerEvents: 'none' })
                }
            })
        }
    }, [menuOpen])

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 text-white
                    flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2
                    shadow-md bg-black/30 backdrop-blur-md backdrop-saturate-150 border-b border-white/20
                    ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
                style={{ willChange: 'transform' }}
            >
                {/* Logo */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full shrink-0 flex items-center justify-center">
                    <img className="w-full h-full object-cover rounded-full" src="/images/logo.png" alt="Logo" />
                </div>

                {/* Nav Links - hidden on phones, visible on tablet+ */}
                <ul className="hidden sm:flex gap-8 items-center bg-black px-6 py-3 rounded-md border-b border-r border-white/30">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href} className="text-base transition-colors duration-200 hover:text-[#E04200]">{link.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Sign Button - hidden on phones, visible on tablet+ */}
                <ul className="hidden sm:flex">
                    <li>
                        <button className="px-4 py-2 text-white rounded-full font-medium transition-colors duration-200 hover:text-[#E04200]">
                            Sign
                        </button>
                    </li>
                </ul>

                {/* Hamburger Button - phone only */}
                <button
                    className="sm:hidden text-white text-2xl p-2 rounded-md transition-colors hover:bg-white/10"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {/* Full Screen Side Slide Menu (Right to Left) - phone only */}
            <div
                ref={sideMenuRef}
                className="sm:hidden fixed inset-0 z-[100] flex-col items-center justify-center gap-9 opacity-100 pointer-events-none bg-black/95 backdrop-blur-md"
                style={{
                    display: 'none',
                    willChange: 'transform',
                }}
            >
                {/* Close (X) Button */}
                <button
                    className="absolute top-6 right-7 text-3xl text-white hover:bg-white/10 p-2 rounded-md transition-colors"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    tabIndex={menuOpen ? 0 : -1}
                >
                    <FaTimes />
                </button>
                <ul className="flex flex-col items-center gap-8">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-white text-2xl sm:text-3xl font-semibold transition-colors hover:text-[#E04200]"
                                onClick={() => setMenuOpen(false)}
                                tabIndex={menuOpen ? 0 : -1}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className="mt-4 px-8 py-3 text-white text-lg rounded-xl bg-gradient-to-r from-[#EF5B00] to-[#E04100] font-bold tracking-wider"
                    tabIndex={menuOpen ? 0 : -1}
                >
                    Sign
                </button>
            </div>
        </>
    )
}

export default Navbar
