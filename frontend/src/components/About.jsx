import { useEffect, useState } from "react"
import { getAbout } from "../api/api"

function About() {

    const [about, setAbout] = useState(null)

    useEffect(() => {

        async function loadData() {
            const data = await getAbout()
            setAbout(data[0])
        }

        loadData()

    }, [])

    if (!about) return <div className="loading">Loading...</div>

    return (

        <section section id="about" className="about">

            {/* HEADER */}
            <div className="about-head">

                <span className="about-label">
                    About Me
                </span>

                <h2 className="about-title">
                    {about.title}
                </h2>

            </div>

            {/* MAIN */}
            <div className="about-container">

                {/* IMAGE */}
                <div className="about-image">

                    <img
                        src={about.about_image}
                        alt="about"
                    />

                </div>

                {/* TEXT */}
                <div className="about-text">

                    <h3>Who I Am</h3>

                    <p>
                        {about.bio}
                    </p>

                    {/* GRID CARDS */}
                    <div className="about-grid">

                        <div className="about-card">
                            <span className="card-tag">Education</span>
                            <p>BSc in Data Science</p>
                        </div>

                        <div className="about-card">
                            <span className="card-tag">Specialization</span>
                            <p>AI, ML & Backend Systems</p>
                        </div>

                        <div className="about-card">
                            <span className="card-tag">Location</span>
                            <p>{about.location}</p>
                        </div>

                        <div className="about-card">
                            <span className="card-tag">Languages</span>
                            <p>Swahili & English</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default About