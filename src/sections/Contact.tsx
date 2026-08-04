import { MdOutlineMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    return (
        <>
            <section id="contact" className="min-h-screen scroll-mt-20 font-mono flex">
                <div className="w-2/5 py-15 px-10 border-r ">
                    <p className="uppercase font-mono text-xs text-neutral-400">§ 01 - Última página</p>
                    <h1 className="text-5xl font-serif-libertinus mt-4"> Hablemos</h1>
                    <p className="font-mono text-neutral-500 text-xs my-6">Si estás buscando alguien junior con criterio, ganas y tiempo para aprender, hablemos. Respondo en menos de 24h.</p>

                    <a className="flex items-center gap-2 text-xs/7 text-neutral-800" href="mailto:guissellapl@gmail.com"><MdOutlineMailOutline className="text-neutral-500"/> guissellapl@gmail.com</a>
                    <a className="flex items-center gap-2 text-xs/7 text-neutral-800" href="https://github.com/guiss26"><FiGithub className="text-neutral-500"/> github.com/guiss26</a>
                    <a className="flex items-center gap-2 text-xs/7 text-neutral-800" href="https://www.linkedin.com/in/guissella-perez/"><FiLinkedin className="text-neutral-500"/> linkedin.com/in/guissella-perez</a>
                </div>

                <div className="w-3/5 py-15 px-10">
                    <form id="form" className="border p-6 bg-white text-xs tracking-widest shadow-[5px_5px_0px_0px_rgba(23,23,23,1)] transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(23,23,23,1)]">
                        <div className="flex justify-between text-neutral-400 border-b pb-2">
                            <p>COMPOSE · NUEVO MENSAJE</p>
                            <p>~ / INBOX</p>
                        </div>

                        <fieldset className="mt-5">
                            <div className="flex gap-4 mb-5">
                                <div className="w-1/2 flex flex-col gap-2">
                                    <label htmlFor="" className="text-neutral-500">NOMBRE *</label>
                                    <input type="text" className="bg-neutral-300/40 border p-2" placeholder="Franco Lopez"/>
                                </div>
                                <div className="w-1/2 flex flex-col gap-2">
                                    <label htmlFor="" className="text-neutral-500">EMAIL *</label>
                                    <input type="email" className="bg-neutral-300/40 border p-2" placeholder="example@empresa.com"/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mb-5">
                                <label htmlFor="" className="text-neutral-500">ASUNTO</label>
                                <input type="text" className="bg-neutral-300/40 border p-2" placeholder="Oportunidad junior en..."/>
                            </div>

                            <div className="flex flex-col gap-2 mb-5">
                                <label htmlFor="" className="text-neutral-500">MENSAJE *</label>
                                <textarea name="" id="" rows={4} className="bg-neutral-300/40 border p-2" placeholder="..."></textarea>
                            </div>
                        </fieldset>

                        <div className="flex justify-between items-center">
                            <p className="text-neutral-400">0/400</p>
                            <button className="uppercase flex items-center gap-2 text-lime-400 border bg-neutral-950 py-2 px-4 hover:text-neutral-950 hover:bg-lime-400 hover:border border-neutral-950">Enviar mensaje <TiLocationArrowOutline size={17}/></button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}