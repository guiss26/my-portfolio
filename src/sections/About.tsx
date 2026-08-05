
export default function About() {
    return (
        <>
            <section id="about" className="scroll-mt-20 border-y dark:border-neutral-200 md:flex dark:bg-neutral-950">
                <div className="md:w-1/3 py-15 px-10 border-b dark:border-neutral-200 border-neutral-300 md:border-r md:border-black">
                    <p className="uppercase font-mono text-xs text-neutral-400">§ 01 - Capitulo</p>
                    <h1 className="text-5xl font-serif-libertinus mt-4 dark:text-white">Sobre mí</h1>

                    <dl className="space-y-4 text-xs font-mono mt-6">
                        <div className="grid grid-cols-2 border-b dark:border-neutral-600 border-neutral-300 pb-2 md:flex md:flex-col md:gap-2 lg:flex-row lg:justify-between">
                            <dt className="text-neutral-500 lg:w-1/2">DISPONIBILIDAD</dt>
                            <dd className="text-[12px] lg:w-1/2 dark:text-neutral-300">Full-time / Junior</dd>
                        </div>

                        <div className="grid grid-cols-2 border-b dark:border-neutral-600 border-neutral-300 pb-2 md:flex md:flex-col md:gap-2 lg:flex-row lg:justify-between">
                            <dt className="text-neutral-500 lg:w-1/2">UBICACIÓN</dt>
                            <dd className="text-[12px] lg:w-1/2 dark:text-neutral-300">Remoto / Híbrido / Presencial</dd>
                        </div>

                        <div className="grid grid-cols-2 border-b dark:border-neutral-600 border-neutral-300 pb-2 md:flex md:flex-col md:gap-2 lg:flex-row lg:justify-between">
                            <dt className="text-neutral-500 lg:w-1/2">IDIOMAS</dt>
                            <dd className="text-[12px] lg:w-1/2 dark:text-neutral-300">ES (Nativo) · EN (B1)</dd>
                        </div>

                        <div className="grid grid-cols-2 border-b dark:border-neutral-600 border-neutral-300 pb-2 md:flex md:flex-col md:gap-2 lg:flex-row lg:justify-between">
                            <dt className="text-neutral-500 lg:w-1/2">FOCO</dt>
                            <dd className="text-[12px] lg:w-1/2 dark:text-neutral-300">Frontend · UI</dd>
                        </div>
                    </dl>
                </div>

                <div className="md:w-2/3 py-15 px-10 font-mono">
                    <p className="uppercase text-xs text-neutral-400 mb-4">Una entrevista breve conmigo mismo</p>

                    <p className="leading-relaxed text-[17px] text-neutral-800 first-letter:font-serif-libertinus first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:italic dark:text-white">Soy una desarrolladora graduada de un bootcamp de Desarrollo Web Full-Stack y titulada en Desarrollo de Aplicaciones Multiplataforma. Apasionada por el frontend, donde combino creatividad, lógica y atención al detalle para construir interfaces funcionales y centradas en el usuario. Vengo del autoaprendizaje, de leer documentación y armar proyectos para entender, no solo para mostrar.</p>
                    
                    <div className="flex items-center gap-4 my-8 clear-left">
                        <hr className="flex-1 border-neutral-400"/>
                        <p className="font-serif-libertinus italic text-lg text-neutral-900 dark:text-white whitespace-nowrap">"Hacer menos, pero con intención."</p>
                        <hr className="flex-1 border-neutral-400" />
                    </div>
                    <p className="leading-relaxed text-[17px] text-neutral-800 dark:text-white">Busco mi primera experiencia laboral en un equipo donde pueda aportar trabajo serio y aprender de personas con más kilómetros que yo. Me interesan los productos cuidados: los que tienen tipografía pensada, estados de error claros y un fondo que respeta el contenido.</p>
                </div>
            </section>
        </>
    )
}