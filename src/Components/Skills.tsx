import { skills } from "../data"

export default function Skills() {


    return (
        <section className="pb-10">
            <div className="responsive-container my-1">
                <h5 className="text-muted text-xl font-medium font-jersey">WHO IS</h5>
                <h2 className="text-5xl text-white font-black">OMAR EMAD?</h2>
            </div>
            <div className="grid gap-5 responsive-container px-5 my-5">
                <p className="text-muted text-2xl font-semibold indent-10">
                    Independent software engineer, 18.
                    I work primarily on systems and performance-oriented software, and build full-stack web applications end to end. I care about correctness, clear design decisions, and understanding systems from first principles rather than relying on abstractions I don’t control.
                </p>
            </div>
            <div className="responsive-container my-1 mt-20">
                <h5 className="text-muted text-xl font-medium font-jersey">YOU WANT TO TALK</h5>
                <h2 className="text-5xl text-white font-black">TECHNICAL?</h2>
            </div>
            <div className="responsive-container h-[1px] bg-muted">

            </div>
            <div className="responsive-container pl-5 my-5 space-y-5">
                {skills.map((section) => (
                    <div key={section.title}>
                        <h4 className="text-3xl text-text font-semibold">
                            {section.title}
                        </h4>

                        <ul className="mt-2 space-y-2 text-xl text-muted pl-5">
                            {section.items.map(({ label, icon: Icon }) => (
                                <li
                                    key={label}
                                    className="flex items-center gap-3"
                                >
                                    <Icon className="text-lg opacity-80" />
                                    <span>{label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
