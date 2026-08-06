
interface SkillCategory {
    folder: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    { folder: "frontend", skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript(ES6+)', 'TypeScript', 'React (v18+)', 'React Router', 'React Hook Form', 'Material-UI', 'Wordpress'] },
    { folder: "backend", skills: ['Node.js', 'Express', 'Sequelize', 'Mongoose'] },
    { folder: "data", skills: ['MySQL, MongoDB'] },
    { folder: "testing", skills: ['Jest', 'Supertest', 'Vitest', 'TDD'] },
    { folder: "security", skills: ['JWT', 'Bcrypt'] },
    { folder: "tooling", skills: ['Git/GitHub', 'Postman', 'Figma', 'VSCode', 'Docker (básico)'] }
]

export default function Stack() {

    return (
        <>
            <section id="stack" className="scroll-mt-20b border-y md:flex dark:bg-neutral-900 dark:border-neutral-200">
                <div className="md:w-1/4 py-15 px-10 border-b dark:border-neutral-200 border-neutral-300 md:border-r md:border-black">
                    <p className="uppercase font-mono text-xs text-neutral-400">§ 03 - Directorio</p>
                    <h1 className="text-5xl font-serif-libertinus mt-4 dark:text-white">Stack</h1>
                    <p className="font-mono text-neutral-500 text-xs mt-6 dark:text-neutral-300">Tecnologías y herramientas con las que trabajo.</p>
                </div>

                <div className="md:w-3/4 py-15 px-10">
                    <div className="border dark:border-neutral-200 text-xs bg-neutral-200/60 dark:bg-neutral-950">
                        <div className="text-[13px] flex justify-between border-b dark:border-neutral-200 dark:text-neutral-400 py-2 px-5 tracking-widest">
                            <p>~ / SKILLS</p>
                            <p className="text-neutral-400">LS -LA</p>
                        </div>
                        <dl>
                            {skillCategories.map((category) => (
                                <div key={category.folder} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] border-b border-neutral-400">
                                    <dt className="tracking-wide border-r border-neutral-400 px-4 py-3">
                                        <p className="text-neutral-600 text-xs dark:text-neutral-500"><span className="text-neutral-900 font-bold dark:text-neutral-400">&gt;</span> drwxr-xr-x</p>
                                        <p className="text-neutral-950 dark:text-neutral-200">./{category.folder} </p>
                                    </dt>
                                    <dd className="flex flex-wrap gap-3 px-4 py-3 font-mono">
                                        {category.skills.map((skill) => (
                                            <span key={skill} className="border border-neutral-800 dark:border-neutral-200 px-3 py-2 text-neutral-900 bg-white dark:bg-neutral-800 dark:text-neutral-300 hover:bg-lime-400 text-[13px]">{skill} </span>
                                        ))}
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        <p className="flex items-center gap-3 py-2 px-5 border-t text-[13px] dark:text-neutral-400">$ echo "learning &gt; knowing" <span className=" w-2 h-3 bg-neutral-900 dark:bg-white animate-terminal-blink border-l-2 border-neutral-950"></span></p>
                    </div>
                </div>
            </section>
        </>
    )
}