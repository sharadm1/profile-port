import { useState } from 'react'
import portrait from './assets/pp-cutout.png'
import './App.css'

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'REST APIs',
]

const services = [
  {
    number: '01',
    title: 'AI FULL STACK DEVELOPMENT',
    description:
      'End-to-end web products that bring thoughtful interfaces together with dependable, intelligent backends.',
  },
  {
    number: '02',
    title: 'FRONTEND DEVELOPMENT',
    description:
      'Fast, responsive interfaces built with care for accessibility, detail, and the way people actually use them.',
  },
  {
    number: '03',
    title: 'BACKEND & API DEVELOPMENT',
    description:
      'Clear, maintainable services and APIs designed to keep products reliable as they grow.',
  },
  {
    number: '04',
    title: 'AI & AUTOMATION',
    description:
      'Practical AI features and workflows that solve a real product need, not just add novelty.',
  },
  {
    number: '05',
    title: 'MOBILE DEVELOPMENT',
    description:
      'Mobile experiences with a consistent visual language and a natural feel across screen sizes.',
  },
  {
    number: '06',
    title: 'DEVOPS & TOOLS',
    description:
      'Useful delivery and development workflows that make shipping and maintaining software simpler.',
  },
]

const projects = [
  {
    number: '01',
    type: 'WEB APP',
    title: 'Shotify',
    description:
      'Photographer discovery platform with location-based search, profile galleries and a responsive, polished interface.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    live: 'https://shotify.vercel.app',
    code: 'https://github.com/sharadm1',
  },
  {
    number: '02',
    type: 'PORTFOLIO',
    title: 'Personal Portfolio',
    description:
      'Dark, animation-driven portfolio with a rising portrait hero, scrolling skills band and a fully responsive layout.',
    tags: ['React', 'CSS', 'Vite'],
    live: '',
    code: 'https://github.com/sharadm1',
  },
  {
    number: '03',
    type: 'UI / LOGIC',
    title: 'Calculator App',
    description:
      'Clean calculator with keyboard support, operator highlighting and a live expression preview.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    live: '',
    code: 'https://github.com/sharadm1',
  },
]

const navLinks = [
  ['HOME', '#home'],
  ['ABOUT', '#about'],
  ['SERVICE', '#services'],
  ['PROJECT', '#projects'],
  ['CONTACT', '#contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          SHARAD MANE<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navLinks.map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <p className="hero-kicker">SOFTWARE DEVELOPER · AVAILABLE FOR WORK</p>

          {/* Layer 1 (back): giant text */}
          <h1 className="hero-title" id="hero-title">
            PORTFOLIO
          </h1>

          {/* Layer 2: glow */}
          <span className="hero-photo-glow" aria-hidden="true" />

          {/* Layer 3 (front): transparent PNG rising from bottom */}
          <div className="hero-photo" aria-hidden="true">
            <img
              src={portrait}
              alt=""
              className="hero-profile-picture"
              fetchPriority="high"
            />
          </div>

          {/* Layer 4: UI */}
          <div className="hero-bottom">
            <p className="hero-role">
              <strong>Software</strong> <em>Developer</em>
            </p>

            <a className="round-link" href="#about" aria-label="Explore the portfolio">
              <span aria-hidden="true">↘</span>
            </a>

            <a className="pill-link" href="#contact">
              Contact <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-signature" aria-hidden="true">
            <span>SM</span>
            <span className="signature-line" />
            <span>DESIGN · CODE · BUILD</span>
          </div>

          <span className="hero-index" aria-hidden="true">
            01 / 04
          </span>
        </section>

        {/* ================= INTRO ================= */}
        <section
          className="intro-section section-wrap"
          id="about"
          aria-labelledby="intro-title"
        >
          <div className="intro-art" aria-hidden="true">
            <img
              src="/my-picture.jpeg"
              alt="Profile picture"
              className="intro-profile-picture"
            />
            <span className="intro-monogram">SM</span>
            <span className="intro-art-label">A LITTLE ABOUT ME</span>
            <span className="intro-art-orbit" />
          </div>

          <div className="intro-copy">
            <p className="eyebrow">01 — INTRODUCTION</p>
            <h2 className="display-title" id="intro-title">
              Intro<span>.</span>
            </h2>
            <div className="intro-card">
              <p>
                Hey, I’m <strong>Sharad Mane</strong>. I’m a passionate Software
                Developer who enjoys turning ideas into clean, scalable, and
                user-friendly software. I love solving complex problems, learning
                new technologies, and building applications that are both
                functional and enjoyable to use.
              </p>
              <p>
                From designing intuitive interfaces to developing robust backend
                systems, I enjoy working across the stack and bringing complete
                products to life.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SKILLS BAND ================= */}
        <div className="skills-band" aria-label="Technologies">
          <div className="skills-track">
            {[...skills, ...skills].map((skill, index) => (
              <span className="skill-item" key={`${skill}-${index}`}>
                {skill}
                <span aria-hidden="true">✳</span>
              </span>
            ))}
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <section
          className="services-section"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="services-heading section-wrap">
            <p className="eyebrow">02 — WHAT I DO</p>
            <h2 className="display-title" id="services-title">
              WHAT I
              <br />
              <span>CAN DO</span>
            </h2>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <details className="service-row" key={service.number}>
                <summary>
                  <span className="service-number">{service.number}</span>
                  <span className="service-title">{service.title}</span>
                  <span className="service-arrow" aria-hidden="true">
                    ↘
                  </span>
                </summary>
                <p className="service-description">{service.description}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section
          className="projects-section section-wrap"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="projects-heading">
            <div>
              <p className="eyebrow">03 — SELECTED WORK</p>
              <h2 className="display-title" id="projects-title">
                Projects<span>.</span>
              </h2>
            </div>
            <p className="projects-note">
              A few things I’ve built — clean interfaces, real features, shipped
              and live.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE ↗
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CODE ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <a className="project-link" href="#contact">
            Have a project in mind? <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      {/* ================= FOOTER / CONTACT ================= */}
      <footer className="contact-section" id="contact">
        <div className="contact-top section-wrap">
          <div className="contact-main">
            <p className="eyebrow">CONNECT WITH ME</p>
            <a className="contact-email" href="mailto:sharadm1012@gmail.com">
              sharadm1012@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <nav className="footer-navigation" aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
            </nav>
          </div>

          <div className="contact-aside">
            <h2>
              Let’s build
              <br />
              something.
            </h2>
            <p>Open to thoughtful collaborations and new opportunities.</p>
            <a className="light-button" href="mailto:sharadm1012@gmail.com">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="social-row section-wrap" aria-label="Social profiles">
          <a
            href="https://www.linkedin.com/in/sharad-m-97b286150"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>
          <a
            href="https://github.com/sharadm1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.instagram.com/pvt.pratikkkkk?vrfl=a3ZwaWQ3b2R0Zm8="
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM ↗
          </a>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          SHARAD MANE
        </div>
        <div className="legal-row section-wrap">
          <span>© 2026 Sharad Mane. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App