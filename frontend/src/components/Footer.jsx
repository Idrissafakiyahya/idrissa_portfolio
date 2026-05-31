import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa"

import { FaEnvelope } from "react-icons/fa6"

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* LEFT */}
                <div className="footer-box footer-profile">

                    <img
                        src="/pic32.jpeg"
                        alt="Idrissa"
                        className="footer-profile-pic"
                    />

                    <h3>Idrissa Yahya</h3>

                </div>

                {/* QUICK LINKS */}
                <div className="footer-box">

                    <h4>Quick Links</h4>

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>

                </div>

                {/* SOCIALS */}
                <div className="footer-box">

                    <h4>Follow Me</h4>

                    <div className="socials">

                        <a
                            href="https://github.com/Idrissafakiyahya"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/idrissa-yahya-6660b02a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://www.instagram.com/idris_syahya?utm_source=qr&igsh=bWZ0ZHBrcWxrcGFy"
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://wa.me/255655132389"
                            target="_blank"
                        >
                            <FaWhatsapp />
                        </a>

                        <a
                            href="mailto:idrissafakiyahya2003@gmail.com"
                        >
                            <FaEnvelope />
                        </a>

                    </div>

                </div>

            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Idrissa Yahya.
                    All Rights Reserved.
                </p>

            </div>

        </footer>

    )
}

export default Footer