
const BASE_URL = "http://127.0.0.1:8000/api"

/* ================= HELPER ================= */
async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}/`)

    if (!response.ok) {
        throw new Error(`API Error: ${endpoint}`)
    }

    return response.json()
}

/* ================= PROJECTS ================= */
export function getProjects() {
    return fetchData("projects")
}

/* ================= ABOUT ================= */
export function getAbout() {
    return fetchData("about")
}

/* ================= SKILLS ================= */
export function getSkills() {
    return fetchData("skills")
}

/* ================= CERTIFICATES ================= */
export function getCertificates() {
    return fetchData("certificates")
}

/* ================= TOOLS ================= */
export function getTools() {
    return fetchData("tools")
}

/* ================= EDUCATION ================= */
export function getEducation() {
    return fetchData("education")
}

/* ================= EXPERIENCE ================= */
export function getExperience() {
    return fetchData("experience")
}