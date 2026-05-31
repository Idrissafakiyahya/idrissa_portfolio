import { useEffect, useState } from "react"
import { getAbout } from "../api/api"

function Hero() {

    const [about, setAbout] = useState(null)

    const roles = [
        "Data Scientist",
        "ML Engineer",
        "Full Stack Developer"
    ]

    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)

    // FETCH DATABASE DATA
    useEffect(() => {

        async function loadData() {

            const data = await getAbout()

            setAbout(data[0])

        }

        loadData()

    }, [])

    // TYPING EFFECT
    useEffect(() => {

        const currentRole = roles[index]

        if (charIndex < currentRole.length) {

            const timeout = setTimeout(() => {

                setText(prev => prev + currentRole.charAt(charIndex))
                setCharIndex(prev => prev + 1)

            }, 100)

            return () => clearTimeout(timeout)

        } else {

            const erase = setTimeout(() => {

                setText("")
                setCharIndex(0)

                setIndex(prev =>
                    prev === roles.length - 1 ? 0 : prev + 1
                )

            }, 2000)

            return () => clearTimeout(erase)

        }

    }, [charIndex, index])

    if (!about) return <div>Loading...</div>

    return (

        <section section id="home" className="coder-hero">

            <div className="coder-container">

                {/* LEFT */}
                <div className="coder-left">

                    <span className="hero-small">
                        Hi, I'm
                    </span>

                    {/* DATABASE NAME */}
                    <h1 className="coder-name">
                        {about.full_name}
                    </h1>

                    {/* STATIC TYPING EFFECT */}
                    <div className="typing-text">

                        {text}

                        <span className="cursor">|</span>

                    </div>

                    {/* STATIC DESCRIPTION */}
                    <div className="hero-desc-box">

                        <p className="hero-desc">

                            I build scalable web applications and intelligent
                            machine learning systems that solve real-world
                            problems using modern technologies and clean
                            architecture.

                        </p>

                    </div>

                    {/* STATIC BUTTONS */}
                    <div className="hero-buttons">

                        <a href="#" className="btn-cv">
                            Resume
                        </a>

                        <a href="#contact" className="btn-contact">
                            Contact
                        </a>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="coder-right">

                    {/* DATABASE IMAGE */}
                    <img
                        src={about.profile_image}
                        alt="profile"
                    />

                </div>

            </div>

        </section>

    )
}

export default Hero