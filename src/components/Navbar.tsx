import { LuMoon } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";

interface NavLinks {
    href: string,
    label: string
}

const links: NavLinks[] = [
    { href: "#about", label: "SOBRE MÍ" },
    { href: "#projects", label: "PROYECTOS" },
    { href: "#stack", label: "STACK" },
    { href: "#contact", label: "CONTACTO" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // scrolleando hacia abajo y ya pasó los 100px primeros
                setHidden(true)
                setIsOpen(false)
            } else {
                // scroll hacia arriba
                setHidden(false)
            }

            lastScrollY.current = currentScrollY

        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 bg-neutral-200/50 backdrop-blur-md border-b border-b-neutral-950 transition-shadow duration-300 shadow-md tracking-widest ${
                hidden ? "-translate-y-full" : "translate-y-0"
                }`}>
                <nav className="flex justify-between items-center py-2 px-8">
                    <a href="#hero">
                        <h3>[ GP ] <span className="tracking-wide text-neutral-500">/ PORTFOLIO</span></h3>
                    </a>

                    <div className="flex items-center gap-5">
                        <ul className="hidden lg:flex gap-7">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a className="text-neutral-500 hover:text-neutral-950 text-xs" href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>

                        <button className="border py-2 px-3 hover:text-lime-400 hover:bg-neutral-950 hover:border-neutral-950"> <LuMoon /></button>

                        <a href="/CV_guissellaperez_frontend_developer.pdf" download className="hidden lg:flex items-center gap-2 text-lime-400 border bg-neutral-950 py-2 px-4 hover:text-neutral-950 hover:bg-lime-400 hover:border border-neutral-950 text-xs"> <FiDownload /> DESCARGAR CV</a>

                        <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
                            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                        </button>
                    </div>
                </nav>

                {isOpen && (
                    <ul className="lg:hidden flex flex-col items-center gap-5 py-6 border-t border-neutral-950 bg-neutral-200/95 backdrop-blur-md">
                        {links.map((link) => (
                            <li key={link.href} className="hover:bg-lime-400 px-3 ">
                                <a href={link.href} className="text-neutral-600 hover:text-neutral-950 text-xs" onClick={() => setIsOpen(false)}>{link.label}</a>
                            </li>
                        ))}
                        <li>
                            <a href="/CV_guissellaperez_frontend_developer.pdf" download className="flex items-center gap-2 text-lime-400 border bg-neutral-950 py-2 px-4 hover:text-neutral-950 hover:bg-lime-400 hover:border-neutral-950 text-xs">
                                <FiDownload /> DESCARGAR CV
                            </a>
                        </li>
                    </ul>
                )}
            </header>
        </>
    )
}