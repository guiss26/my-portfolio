import { LuMoon } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";

interface navLinks {
    href: string,
    label: string
}

const links: navLinks[] = [
    { href: "#about", label: "SOBRE MÍ" },
    { href: "#projects", label: "PROYECTOS" },
    { href: "#stack", label: "STACK" },
    { href: "#contact", label: "CONTACTO" },
]

export default function Navbar() {

    // const 


    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-b-neutral-950 transition-shadow duration-300 shadow-md">
                <nav className="flex justify-between items-center py-2 px-8">
                    <h3>[ GP ] <span className="text-neutral-500">/ PORTFOLIO</span></h3>

                    <div className="flex items-center gap-5">
                        <ul className="md:flex gap-7">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a className="text-neutral-500 hover:text-neutral-950 text-xs" href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>

                        <button className="border py-2 px-3 hover:text-lime-400 hover:bg-neutral-950 hover:border-neutral-950"> <LuMoon /></button>

                        <a href="/CV_guissellaperez_frontend_developer.pdf" download className="flex items-center gap-2 text-lime-400 border bg-neutral-950 py-2 px-4 hover:text-neutral-950 hover:bg-lime-400 hover:border border-neutral-950 text-xs"> <FiDownload /> DESCARGAR CV</a>
                    </div>
                </nav>
            </header>
        </>
    )
}