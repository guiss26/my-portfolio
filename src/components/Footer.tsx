
export default function Footer() {
    return (
        <>
            <footer className="bg-neutral-900 text-white/80">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-10">
                        <h2 className="font-mono text-xs/8 text-neutral-400">COLOFÓN</h2>
                        <h3 className="font-serif-libertinus text-4xl text-white">Gracias por leer hasta aquí.</h3>
                        <p className="font-mono text-neutral-400 text-xs/6">Sitio web diseñado y desarrollado por Guissella Pérez. Hecho con React + Vite, TypeScript y Tailwind CSS.</p>
                    </div>

                    <div className="md:w-1/4 p-10 border-y border-y-neutral-600 md:border-y-0 md:border-x md:border-x-neutral-600">
                        <h2 className="font-mono text-xs/8 text-neutral-400">SOCIAL</h2>
                        <ul>
                            <li className="text-xs/6 text-white font-mono hover:text-lime-400"><a href="https://github.com/guiss26">GitHub ↗</a></li>
                            <li className="text-xs/6 text-white font-mono hover:text-lime-400"><a href="https://www.linkedin.com/in/guissella-perez/">LinkedIn ↗</a></li>
                            <li className="text-xs/6 text-white font-mono hover:text-lime-400"><a href="mailto:guissellapl@gmail.com">Email ↗</a></li>
                        </ul>
                    </div>
                    <div className="md:w-1/4 p-10">
                        <h2 className="font-mono text-xs/8 text-neutral-400">ÍNDICE</h2>
                        <ul>
                            <li className="text-xs/6 text-white font-mono hover:text-lime-400"><a href="#about">01 • Sobre mí</a></li>
                            <li className="text-xs/6 text-white font-mono hover:text-lime-400"><a href="#projects">02 • Proyectos</a></li>
                            <li className="text-xs/6 text-white font-mono hover:text-lime-400"><a href="#stack">03 • Stack</a></li>
                            <li className="text-xs/6 text-white font-mono hover:text-lime-400"><a href="#contacto">04 • Contacto</a></li>
                        </ul>
                    </div>
                </div>
                <div className="font-mono flex justify-between text-[13px] py-3 px-10 border-t border-t-neutral-600 text-neutral-500 tracking-widest">
                    <p>© 2026 • GUISSELLA PÉREZ. TODOS LOS DERECHOS RESERVADOS</p>

                    <p className="flex items-center gap-3"><span className="w-2 h-2 bg-lime-400"></span> [ STATUS: OPEN TO WORK ]</p>
                </div>
            </footer>
        </>
    )
}