import { useEffect, useRef, useState } from "react"
import { getProjects } from "../api/api"
import { Link } from "react-router-dom"

function Projects() {

    const [projects, setProjects] = useState([])
    const scrollRef = useRef(null)

    // LOAD PROJECTS
    useEffect(() => {

        async function load() {

            const data = await getProjects()
            setProjects(data)

        }

        load()

    }, [])

    // AUTO SLIDE
    useEffect(() => {

        const container = scrollRef.current

        if (!container || projects.length === 0) return

        const interval = setInterval(() => {

            const card = container.querySelector(".project-card")

            if (!card) return

            const cardWidth = card.offsetWidth + 20

            const maxScroll =
                container.scrollWidth - container.clientWidth

            // IF END → RETURN TO START
            if (container.scrollLeft >= maxScroll - 5) {

                container.scrollTo({
                    left: 0,
                    behavior: "smooth"
                })

            } else {

                container.scrollBy({
                    left: cardWidth,
                    behavior: "smooth"
                })

            }

        }, 6000)

        return () => clearInterval(interval)

    }, [projects])

    return (

        <section className="projects" id="projects">

            {/* HEADER */}
            <div className="projects-head">

                <span>MY WORK</span>

                <h2>Featured Projects</h2>

            </div>

            {/* SCROLL CONTAINER */}
            <div className="projects-scroll" ref={scrollRef}>

                {projects.map((project) => (

                    <div className="project-card" key={project.id}>

                        {/* IMAGE */}
                        <div className="project-img">

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                        </div>

                        {/* CONTENT */}
                        <div className="project-content">

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            {/* TECH */}
                            <div className="project-tech">

                                {project.tech?.map((tech, index) => (
                                    <span key={index}>
                                        {tech}
                                    </span>
                                ))}

                            </div>

                            {/* BUTTONS */}
                            <div className="project-buttons">

                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="btn-live"
                                >
                                    Live
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="btn-git"
                                >
                                    GitHub
                                </a>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            {/* BUTTON */}
            <div className="projects-more">

                <Link
                    to="/projects"
                    className="explore-btn"
                >
                    Explore More Projects →
                </Link>

            </div>

        </section>

    )
}

export default Projects