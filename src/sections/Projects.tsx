import casaDonPetro from '../assets/casa-don-petro.jpg'
import sprintFlow from '../assets/sprint-flow-3.png'
import celestialBloom from '../assets/celestial-bloom.png'
import apiNoctiluca from '../assets/api-Noctiluca.png'
import tarotCards from '../assets/tarot-cards.png'
import polinizadoresAmerica from '../assets/polinizadoreas-america.png'
import nitrogeno from '../assets/nitrogeno.png'
import piedrasAngulares from '../assets/piedras-angulares.png'
import { FiGithub } from "react-icons/fi";
import Pagination from '../components/Pagination'
import { useState } from 'react'

interface ProjectList {
    id: number;
    photo: string;
    alt: string;
    title: string;
    description: string;
    tools: string[];
    code: string;
}

const projectsArray: ProjectList[] = [
    { // Casa Don petro
        id: 1,
        photo: casaDonPetro,
        alt: 'casa-don-petro-hero',
        title: 'Casa Don Petro',
        description: 'Rediseño responsive y optimización técnica mediante la protección anti-spam y sincronización de reseñas de Google para bar-restaurante en Madrid.',
        tools: ['WordPress', 'Elementor', 'Plugins'],
        code: 'https://casadonpetro.com/'
    },
    { // SprintFlow
        id: 2,
        photo: sprintFlow,
        alt: 'sprintflow-dashboard-admin',
        title: 'SprintFlow',
        description: 'Aplicación fullstack para mejorar la gestión ágil de proyectos basado es Scrum con métricas en tiempo real, calculadora de puntos de usuario, de las velocidades reales y ponderadas.',
        tools: ['React', 'Node.js', 'MongoDB', 'Material UI', 'JWT', 'Bcrypt'],
        code: 'https://github.com/orgs/SprintFlow/repositories'
    },
    { // Celestial Bloom
        id: 3,
        photo: celestialBloom,
        alt: 'celestial-bloom-hero',
        title: 'Celestial Bloom: blog de astronomía y botánica',
        description: 'Blog de astronomía y botánica con gestión de usuarios y roles. Los usuarios leen artículos mientras los administradores gestionan el contenido completo.',
        tools: ['React', 'CSS', 'Cloudinary', 'TypeScript', 'MongoDB'],
        code: 'https://github.com/orgs/Sylva-Organization/repositories'
    },
    { // API-Noctiluca
        id: 4,
        photo: apiNoctiluca,
        alt: 'noctiluca-gallery-photos',
        title: 'API-Noctiluca',
        description: 'Creación de aplicación fullstack del proyecto Noctiluca (Cuaderno de campo de Campo de Mariposas). Este trabajo se centra en construir y mantener tanto backend (API y lógica de servidor) como el frontend del sistema.',
        tools: ['React', 'Tailwind CSS', 'MongoDB', 'MySQL', 'Cloudinary'],
        code: 'https://github.com/API-Noctiluca'
    },
    { // Tarot
        id: 5,
        photo: tarotCards,
        alt: 'tarot-reading-cards',
        title: 'Cartas del Tarot',
        description: 'Aplicación web del Tarot místico, donde se pueden visualizar las cartas del tarot y a su vez, las mujeres del mundo de la ciencia y tecnoloía asociadas. Lectura de cartas pasado, presente y futuro.',
        tools: ['React', 'CSS', 'JavaScript', 'API externa'],
        code: 'https://github.com/guiss26/tarot-cards'
    },
    { // Polinizadores de América
        id: 6,
        photo: polinizadoresAmerica,
        alt: 'polinizadores-gallery',
        title: 'Polinizadores de América',
        description: 'Aplicación web sobre polinizadores de América (mariposas), cuaderno de campo digital para documentar y conservar polinizadores de toda América en peligro de extinción',
        tools: ['React', 'CSS', 'Tailwind CSS', 'JavaScript', 'json-server'],
        code: 'https://github.com/irinatiron/polinizadores-america-mariposas'
    },
    { // Nitrógeno
        id: 7,
        photo: nitrogeno,
        alt: 'history-nitrogeno',
        title: 'Tabla periódica: Nitrógeno',
        description: 'Creación de una aplicación web sobre el elemento Nitrógeno de la tabla periódica, como medio para aprender y conocer más acerca de dicho elemento de manera dinámica.',
        tools: ['HTML', 'CSS', 'JavaScript'],
        code: 'https://github.com/guiss26/nitrogeno.git'
    },
    { // Piedras Angulares
        id: 8,
        photo: piedrasAngulares,
        alt: 'piedras-angulares-cards',
        title: 'Piedras Angulares',
        description: 'Creación de una aplicación web sobre mujeres en la ciencia que tuvieron un aporte importante pero pasaron desapercibidas.',
        tools: ['HTML', 'CSS', 'JavaScript'],
        code: 'https://github.com/guiss26/piedras-angulares'
    }
]

export default function Projects() {
    const [page, setPage] = useState(1)
    const perPage = 3 // 3 proyectos por página

    const max = Math.ceil(projectsArray.length / perPage)

    const visibleProjects = projectsArray.slice(
        (page - 1) * perPage,
        (page - 1) * perPage + perPage
    )

    return (
        <>
            <section id="projects" className=" scroll-mt-20 font-mono flex border-b">
                <div className="w-1/3 py-15 px-10 border-r">
                    <p className="uppercase font-mono text-xs text-neutral-400">§ 02 - Obra seleccionada</p>
                    <h1 className="text-5xl font-serif-libertinus mt-4"> Proyectos</h1>
                </div>
                <div className="w-2/3 py-15 px-10 text-[17px] text-neutral-700">
                    <p>Una pequeña curaduría de trabajos hechos para entender, no solo mostrar. Cada uno de ellos me ha ido dando la experiencia necesaria para seguir adelante con el siguiente y enfrentarme a nuevos retos.</p>
                </div>
            </section>

            <section className="py-10 font-mono">
                <article className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-9 p-10'>
                    {visibleProjects.map((project) => (
                        <div key={project.id} className='bg-neutral-300 shadow-[5px_5px_0px_0px_rgba(23,23,23,1)] flex flex-col h-full'>
                            <figure className='h-60 object-cover'>
                                <img src={project.photo} alt={project.alt} className='h-full w-full' />
                            </figure>

                            <figcaption className='text-left p-6 flex flex-col justify-between flex-1'>
                                <div>
                                    <h3 className='font-bold font-serif-libertinus mb-2'>{project.title} </h3>
                                    <p className='text-neutral-600 text-[13px]/4'>{project.description}</p>
                                </div>

                                <div>
                                    <div className='mt-4 inline-flex gap-1.5 flex-wrap'>
                                        {project.tools.map((tool) => (
                                            <span key={tool} className='bg-white py-0.5 px-3 border border-neutral-800 text-neutral-800 text-[12px]'>{tool}</span>
                                        ))}
                                    </div>

                                    <div>
                                        <a href={project.code} className='inline-flex gap-1 font-medium mt-2 text-xs items-center'><FiGithub />Código</a>
                                    </div>
                                </div>
                            </figcaption>
                        </div>
                    ))}
                </article>

                <Pagination page={page} setPage={setPage} max={max}/>
            </section>
        </>
    )
}