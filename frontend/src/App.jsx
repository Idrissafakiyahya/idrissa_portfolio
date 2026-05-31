import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import EducationExperience from "./components/EducationExperience"
import AllProjects from "./pages/AllProjects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <EducationExperience />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={<AllProjects />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App