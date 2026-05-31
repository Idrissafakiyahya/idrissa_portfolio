import { useEffect, useState, useRef } from "react"
import { getSkills, getCertificates, getTools } from "../api/api"

function Skills() {

    const [skills, setSkills] = useState([])
    const [certs, setCerts] = useState([])
    const [tools, setTools] = useState([])
    const [animate, setAnimate] = useState(false)

    const sectionRef = useRef(null)

    useEffect(() => {

        async function loadData() {
            const s = await getSkills()
            const c = await getCertificates()
            const t = await getTools()

            setSkills(s || [])
            setCerts(c || [])
            setTools(t || [])
        }

        loadData()

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]

                if (entry.isIntersecting) {

                    // reset first so animation can replay
                    setAnimate(false)

                    setTimeout(() => {
                        setAnimate(true)
                    }, 100)

                } else {
                    // reset when leaving section
                    setAnimate(false)
                }
            },
            { threshold: 0.4 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }

    }, [])

    return (
        <section className="skills"  id="skills" ref={sectionRef}>

            {/* TITLE */}
            <div className="skills-heading">
                <span>MY EXPERTISE</span>
                <h2>Skills & Certifications</h2>
            </div>

            {/* TOP SECTION */}
            <div className="skills-top">

                {/* TECHNICAL SKILLS */}
                <div className="skills-box blue-shadow">
                    <h3>Technical Skills</h3>

                    {skills.map((skill, i) => {

                        let width = 40
                        const level = skill.level?.toLowerCase()

                        if (level === "beginner") width = 50
                        if (level === "intermediate") width = 70
                        if (level === "advanced") width = 90

                        return (
                            <div className="skill-item" key={i}>
                                <p>{skill.name}</p>

                                <div className="progress">
                                    <span
                                        style={{
                                            width: animate ? `${width}%` : "0%"
                                        }}
                                    ></span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* CERTIFICATIONS */}
                <div className="skills-box blue-shadow">
                    <h3>Certifications</h3>

                    <div className="cert-grid">

                        {certs.map((cert, i) => (
                            <div className="cert-item" key={i}>
                                <h4>{cert.name}</h4>

                                <div className="cert-row">
                                    <span className="cert-label">Issued:</span>
                                    <span className="cert-value">{cert.source}</span>
                                </div>

                                <div className="cert-row">
                                    <span className="cert-label">Mode:</span>
                                    <span className="cert-value">{cert.mode}</span>
                                </div>

                                <div className="cert-row">
                                    <span className="cert-label">Year:</span>
                                    <span className="cert-value">{cert.year}</span>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>

            {/* TOOLS */}
            <div className="skills-box full blue-shadow">
                <h3>Tools & Technologies</h3>

                <div className="tools-list">
                    {tools.map((tool, i) => (
                        <span key={i}>{tool.label}</span>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills