import { MdOutlineMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

interface ContactFormData {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export default function Contact() {
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        watch, 
        formState: {errors},
    } = useForm<ContactFormData>()

    const messageValue = watch("message", "")

    const onSubmit = async (data:ContactFormData) => {
        setLoading(true)
        setResult("")

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject || 'Sin asunto',
                    message: data.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setResult('success')
            reset()

            setTimeout(() => {
                setResult("")
            }, 3000)
        } catch (error) {
            setResult('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <section id="contact" className=" scroll-mt-20 font-mono flex">
                <div className="w-2/5 py-15 px-10 border-r ">
                    <p className="uppercase font-mono text-xs text-neutral-400">§ 04 - Última página</p>
                    <h1 className="text-5xl font-serif-libertinus mt-4"> Hablemos</h1>
                    <p className="font-mono text-neutral-500 text-xs my-6">Si estás buscando alguien junior con criterio, ganas y tiempo para aprender, hablemos. Respondo en menos de 24h.</p>

                    <a className="flex items-center gap-2 text-xs/7 text-neutral-800" href="mailto:guissellapl@gmail.com"><MdOutlineMailOutline className="text-neutral-500"/> guissellapl@gmail.com</a>
                    <a className="flex items-center gap-2 text-xs/7 text-neutral-800" href="https://github.com/guiss26"><FiGithub className="text-neutral-500"/> github.com/guiss26</a>
                    <a className="flex items-center gap-2 text-xs/7 text-neutral-800" href="https://www.linkedin.com/in/guissella-perez/"><FiLinkedin className="text-neutral-500"/> linkedin.com/in/guissella-perez</a>
                </div>

                <div className="w-3/5 py-15 px-10">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate id="form" className="border p-6 bg-white text-xs tracking-widest shadow-[5px_5px_0px_0px_rgba(23,23,23,1)] transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(23,23,23,1)]">
                        <div className="flex justify-between text-neutral-400 border-b pb-2">
                            <p>COMPOSE · NUEVO MENSAJE</p>
                            <p>~ / INBOX</p>
                        </div>

                        <fieldset className="mt-5">
                            <div className="flex gap-4 mb-5">
                                <div className="w-1/2 flex flex-col gap-2">
                                    <label htmlFor="name" className="text-neutral-500">NOMBRE *</label>
                                    <input id="name" type="text" className="bg-neutral-300/40 border p-2" placeholder="Franco Lopez" {...register("name", { 
                                        required: "Este campo es requerido", 
                                        pattern: {
                                            value: /^[A-Za-zÀ-ÿ\s]+$/,
                                            message: "El nombre solo puede contener letras"
                                        }
                                    })}/>
                                    {errors.name && (
                                        <span className="text-red-500 normal-case tracking-normal">{errors.name.message}</span>
                                    )}
                                </div>
                                <div className="w-1/2 flex flex-col gap-2">
                                    <label htmlFor="email" className="text-neutral-500">EMAIL *</label>
                                    <input type="email" id="email" className="bg-neutral-300/40 border p-2" placeholder="example@empresa.com" {...register("email", { 
                                        required: "Este campo es requerido",
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: "Introduce un email válido"
                                        },
                                    })} />
                                    {errors.email && (
                                        <span className="text-red-500 normal-case tracking-normal">{errors.email.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mb-5">
                                <label htmlFor="subject" className="text-neutral-500">ASUNTO</label>
                                <input id="subject" type="text" className="bg-neutral-300/40 border p-2" placeholder="Oportunidad junior en..." {...register("subject")} />
                            </div>

                            <div className="flex flex-col gap-2 mb-5">
                                <label htmlFor="message" className="text-neutral-500">MENSAJE *</label>
                                <textarea id="message" maxLength={400} rows={4} className="bg-neutral-300/40 border p-2" placeholder="..." {...register("message", { required: "Este campo es requerido" })}></textarea>
                                {errors.message && (
                                    <span className="text-red-500 normal-case tracking-normal">{errors.message.message}</span>
                                )}
                            </div>
                        </fieldset>

                        <div className="flex justify-between items-center">
                            <p className="text-neutral-400">{messageValue.length}/400</p>
                            <button className="uppercase flex items-center gap-2 text-lime-400 border bg-neutral-950 py-2 px-4 hover:text-neutral-950 hover:bg-lime-400 hover:border border-neutral-950" disabled={loading}>
                                {loading ? "Enviando..." : "Enviar mensaje"}    
                                 <TiLocationArrowOutline size={17}/></button>
                        </div>

                        {result === 'success' && (
                            <p className="mt-3 text-green-700 normal-case tracking-normal">✓ ¡Mensaje enviado! Te responderé lo más pronto posible.</p>
                        )}

                        {result === 'error' && (
                            <p className="mt-3 text-red-600 normal-case tracking-normal">✕ Algo falló. Inténtalo de nuevo o escríbeme directamente por email.</p>
                        )}
                    </form>
                </div>
            </section>
        </>
    )
}