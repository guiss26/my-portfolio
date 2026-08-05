import { BsArrowDownRight } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";

export default function Hero() {
    return (
        <>
            <section id="hero" className="scroll-mt-20 md:flex">
                {/* Izquierda */}
                <div className="border-b border-neutral-300 md:border-r md:border-black md:w-2/5 p-10">
                    <p className="flex items-center gap-3 text-xs tracking-widest text-neutral-400"><span className="w-3 h-3 bg-lime-400 border border-neutral-950"></span> [ STATUS: READY ]</p>

                    <div className="border border-neutral-950 p-5 mt-6 bg-white">
                        <div className="flex items-center justify-between border-b border-neutral-300 pb-1">
                            <p className="uppercase text-neutral-400 text-[11px] tracking-widest">~ / portfolio - bash</p>

                            <div className="flex gap-2">
                                <span className="w-3 h-3 bg-white border border-neutral-950"></span>
                                <span className="w-3 h-3 bg-white border border-neutral-950"></span>
                                <span className="w-3 h-3 bg-lime-400 border border-neutral-950"></span>
                            </div>
                        </div>

                        <ul className="mt-3">
                            <li className="text-xs/5 text-neutral-600 font-mono"><span className="text-neutral-300">$</span> whoami</li>
                            <li className="text-xs/5 text-neutral-600 font-mono"><span className="text-neutral-300"> &gt;</span> guissella_perez</li>
                            <li className="text-xs/5 text-neutral-600 font-mono"><span className="text-neutral-300">$</span> cat status.txt</li>
                            <li className="text-xs/5 text-neutral-600 font-mono"><span className="text-neutral-300">&gt;</span> disponible para trabajar</li>
                        </ul>
                    </div>

                    <dl className="space-y-4 text-xs font-mono mt-6">
                        <div className="grid grid-cols-2 md:flex md:flex-col md:gap-2 lg:flex-row lg:justify-between">
                            <dt className="text-neutral-500 lg:w-1/2">ROL</dt>
                            <dd className="text-[12px] lg:w-1/2">Desarrolladora Frontend Junior</dd>
                        </div>

                        <div className="grid grid-cols-2 md:flex md:flex-col md:gap-2 lg:flex-row lg:justify-between">
                            <dt className="text-neutral-500 lg:w-1/2">UBICACIÓN</dt>
                            <dd className="text-[12px] lg:w-1/2">Madrid, España</dd>
                        </div>

                        <div className="grid grid-cols-2 md:flex md:flex-col md:gap-2 lg:flex-row lg:justify-between">
                            <dt className="text-neutral-500 lg:w-1/2">EMAIL</dt>
                            <dd className="text-[12px] lg:w-1/2">guissellapl@gmail.com</dd>
                        </div>
                    </dl>
                </div>

                {/* Derecha */}
                <div className="md:w-3/5 p-10">
                    <div className="font-mono uppercase text-xs tracking-widest text-neutral-400 flex justify-between">
                        <p className="">VOL. 01 · Edición portfolio</p>
                        <p>2026</p>
                    </div>

                    <h1 className="leading-none font-serif-libertinus text-8xl mt-5">
                        <span className="block text-neutral-900">Guissella</span>
                        <span className="flex items-center gap-3">
                            <span className="block italic text-neutral-500">Pérez</span>
                            <span className="w-8 h-15 bg-lime-400 animate-terminal-blink border-l-2 border-neutral-920"></span>
                        </span>
                    </h1>

                    <p className="text-neutral-600 tracking-normal font-mono mt-4 text-sm">Apasionada por crear experiencias digitales a través de interfaces con criterio, código limpio y curiosidad digital.</p>

                    <div className="flex gap-3 text-[10px] md:text-[13px] mt-8 tracking-widest">
                        <a href="#projects" className="flex items-center gap-3 uppercase text-lime-400 border bg-neutral-950 py-1 px-4 hover:text-neutral-950 hover:bg-lime-400 hover:border border-neutral-950">Ver proyectos <BsArrowDownRight /> </a>
                        <a href="#contact" className="flex items-center gap-3 uppercase border py-1 px-3 hover:text-lime-400 hover:bg-neutral-950 hover:border-neutral-950">Trabajemos juntos <BsArrowUpRight /> </a>
                    </div>
                </div>
            </section>
        </>
    )
}