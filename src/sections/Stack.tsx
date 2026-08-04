
export default function Stack() {

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

    return (
        <>
            <section id="stack" className="min-h-screen scroll-mt-20b border-y flex">
                <div className="w-1/4 p-10 border-r">
                    <p className="uppercase font-mono text-xs text-neutral-400">§ 03 - Directorio</p>
                    <h1 className="text-5xl font-serif-libertinus mt-4">Stack</h1>
                    <p className="font-mono text-neutral-500 text-xs mt-6">Lo que uso a diario. No una lista de logos, un mapa de trabajo real.</p>
                </div>

                <div className="w-3/4 p-10">
                    <div className="border text-xs bg-neutral-200/60">
                        <div className="text-[13px] flex justify-between border-b py-2 px-5 tracking-widest">
                            <p>~ / SKILLS</p>
                            <p className="text-neutral-400">LS -LA</p>
                        </div>
                        <dl>
                            {skillCategories.map((category) => (
                                <div key={category.folder} className="grid grid-cols-[200px_1fr] border-b border-neutral-400">
                                    <dt className="tracking-wide border-r border-neutral-400 px-4 py-3">
                                        <p className="text-neutral-600 text-xs "><span className="text-neutral-900 font-bold">&gt;</span> drwxr-xr-x</p>
                                        <p className="text-neutral-950">./{category.folder} </p>
                                    </dt>
                                    <dd className="flex flex-wrap gap-3 px-4 py-3 font-mono">
                                        {category.skills.map((skill) => (
                                            <span key={skill} className="border border-neutral-800 px-3 py-2 text-neutral-900 bg-white hover:bg-lime-400">{skill} </span>
                                        ))}
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        <p className="flex items-center gap-3 py-1 px-5 border-t">$ echo "learning &gt; knowing" <span className=" w-2 h-3 bg-neutral-900 animate-terminal-blink border-l-2 border-neutral-950"></span></p>
                    </div>
                </div>
            </section>
        </>
    )
}