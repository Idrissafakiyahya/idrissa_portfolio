import { useEffect, useState } from "react"
import { getAbout } from "../api/api"

function Navbar() {

  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  const [about, setAbout] = useState(null)

  useEffect(() => {

    async function loadData() {

      const data = await getAbout()
      setAbout(data[0])

    }

    loadData()

  }, [])

  return (

    <nav
      className="navbar fixed-top custom-navbar"
      style={{
        background: dark
          ? "rgba(8,15,30,0.82)"
          : "rgba(255,255,255,0.72)",

        backdropFilter: "blur(18px)",

        borderBottom: dark
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(15,23,42,0.06)",

        transition: "0.4s"
      }}
    >

      <div className="container nav-container">

        {/* ================= LEFT BRAND ================= */}
        <div className="brand-wrap">

          {about && (
            <img
              src={about.header_image}
              alt="logo"
              className="nav-profile"
            />
          )}

          <div className="brand">
            Idrissa
          </div>

        </div>

        {/* ================= CENTER MENU ================= */}
        <div className="d-none d-md-flex nav-center">

          <a href="#home" className="nav-link-custom">
            Home
          </a>

          <a href="#about" className="nav-link-custom">
            About
          </a>

          <a href="#skills" className="nav-link-custom">
            Skills
          </a>

          <a href="#education" className="nav-link-custom">
            Education
          </a>

          <a href="#contact" className="nav-link-custom">
            Contact
          </a>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="nav-right">

          {/* DARK MODE */}
          <button
            onClick={() => setDark(!dark)}
            className="icon-btn-clean"
          >

            <i className={dark
              ? "fa-solid fa-sun"
              : "fa-solid fa-moon"}
            ></i>

          </button>

          {/* MOBILE BUTTON */}
          <button
            className="mobile-toggle d-md-none"
            onClick={() => setOpen(!open)}
          >

            <i className="fa-solid fa-bars"></i>

          </button>

        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (

        <div
          className="mobile-menu"
          style={{
            background: dark
              ? "rgba(8,15,30,0.88)"
              : "rgba(255,255,255,0.82)"
          }}
        >

          <a href="#home" className="mobile-link">
            Home
          </a>

          <a href="#about" className="mobile-link">
            About
          </a>

          <a href="#skills" className="mobile-link">
            Skills
          </a>

          <a href="#education" className="mobile-link">
            Education
          </a>

          <a href="#contact" className="mobile-link">
            Contact
          </a>

        </div>

      )}

    </nav>

  )
}

export default Navbar