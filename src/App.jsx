import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/* ====== APNI DETAILS ====== */
const CONFIG = {
  email: 'saboorejaz201273@gmail.com',
  github: 'https://github.com/saboorejaz201273',
  linkedin: 'https://www.linkedin.com/in/saboor-ejaz-5a98973b4/',
  cv: '/Saboor_Ejaz_CV.pdf', // public/ folder mein hai
}

const PROJECTS = [
  { t: 'Full Stack Ecommerce Website', cat: 'E-Commerce', d: 'Complete ecommerce platform with frontend, backend integration, authentication, shopping cart, and product management.', tags: ['React', 'Node.js', 'Express.js', 'MongoDB'], url: 'https://full-stack-ecommerce-website-fronte-nine.vercel.app/', img: '/projects/ecommerce.jpg', fallback: '/projects/ecommerce.svg' },
  { t: 'Aurum Estates', cat: 'Real Estate', d: 'Luxury real estate platform showcasing premium properties with beautiful layouts and smooth navigation.', tags: ['React', 'CSS', 'JavaScript'], url: 'https://aurum-estates-bice.vercel.app/', img: '/projects/aurum.jpg', fallback: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80' },
  { t: 'Bowsher Flats', cat: 'Real Estate', d: 'Modern real estate website with responsive UI, property listings, premium layouts, inquiry forms, and elegant user experience.', tags: ['React', 'Tailwind CSS', 'JavaScript'], url: 'https://bowsher-flats.vercel.app/', img: '/projects/bowsher.jpg', fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80' },
]

const SERVICES = [
  ['🧩', 'MERN Stack Development', 'MongoDB, Express, React aur Node.js se complete full-stack applications.'],
  ['⚡', 'Next.js Development', 'SEO-friendly aur high-performance Next.js websites.'],
  ['🛠️', 'Laravel & PHP Backend', 'Laravel aur MySQL par dashboards, admin panels aur business apps.'],
  ['🎨', 'UI to React', 'Designs ko clean, reusable aur responsive React components mein convert karna.'],
]

const NAV = ['Home', 'About', 'Work', 'Services', 'Contact']

const Reveal = ({ children, className = '', id }) => (
  <motion.div id={id} className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}>
    {children}
  </motion.div>
)

function Project({ p }) {
  const [src, setSrc] = useState(p.img)
  const onErr = () => setSrc((cur) => (cur === p.img && p.fallback ? p.fallback : null))
  return (
    <Reveal className="pcard">
      <div className="pimg">
        {src && <img loading="lazy" alt={p.t} src={src} onError={onErr} />}
        <span className="pbadge">{p.cat}</span>
      </div>
      <div className="pbody">
        <h3>{p.t}</h3>
        <p>{p.d}</p>
        <div className="pt">{p.tags.map((x) => <span key={x}>{x}</span>)}</div>
        <div className="pfoot">
          <a className="btn primary" href={p.url} target="_blank" rel="noopener noreferrer">View Live Project →</a>
        </div>
      </div>
    </Reveal>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('theme') || 'light' } catch { return 'light' } })
  const [open, setOpen] = useState(false)
  const [photoOk, setPhotoOk] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const send = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\n\n${f.get('msg')}`
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Portfolio inquiry from ' + f.get('name'))}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <nav>
        <div className="wrap">
          <a href="#top" className="logo"><i className="lg">&lt;/&gt;</i>Saboor<span>.</span></a>
          <div className={`links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
            {NAV.map((n) => <a key={n} href={n === 'Home' ? '#top' : `#${n.toLowerCase()}`}>{n}</a>)}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="icon-btn" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? '🌙' : '☀️'}</button>
            <button className="icon-btn burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap">
          <div>
            <span className="badge"><i className="dot" /> Available For Freelance</span>
            <h1>Building Fast, Modern &amp; <span className="grad">Scalable Web Applications</span></h1>
            <p>Main Saboor Ejaz hoon, Full Stack Developer. React, Next.js, Laravel aur Node.js se aisi websites banata hoon jo fast hon, achi dikhein aur visitors ko customers mein convert karein.</p>
            <div className="cta">
              <a href="#work" className="btn primary">View Projects →</a>
              <a href={CONFIG.cv} className="btn ghost" download="Saboor_Ejaz_CV.pdf">Download CV</a>
            </div>
            <div className="chips">{['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Laravel', 'Node.js', 'MongoDB'].map((c) => <span key={c}>{c}</span>)}</div>
            <div className="stats">
              <div><b>20+</b><small>Projects</small></div>
              <div><b>Full Stack</b><small>Frontend + Backend</small></div>
              <div><b>100%</b><small>Responsive</small></div>
            </div>
            <div className="scroll">SCROLL ↓</div>
          </div>
          <div className="photo">
            <div className="avatar">
              {photoOk ? <img src="/profile.jpg" alt="Saboor Ejaz" onError={() => setPhotoOk(false)} /> : 'S'}
            </div>
            <div className="float f1"><i className="gd" />Node.js</div>
            <div className="float f2">⚛️ React.js</div>
          </div>
        </div>
      </header>

      <section id="about">
        <Reveal className="wrap">
          <span className="tag">About Me</span>
          <h2>Turning Ideas Into Digital Experiences</h2>
          <p className="sub">Final-year BSIT student aur freelance Full Stack Developer. Frontend se lekar backend tak, modern aur scalable web applications banata hoon.</p>
          <div className="grid3">
            <div className="card"><div className="ic">💻</div><h3>Languages &amp; Stack</h3><p>JavaScript, PHP, HTML, CSS, React, Next.js, Node.js, Express.js, Laravel, MongoDB, MySQL</p></div>
            <div className="card"><div className="ic">🎓</div><h3>Education</h3><p>BS Information Technology (final year), Ghazi University, Dera Ghazi Khan. CGPA 3.45</p></div>
            <div className="card"><div className="ic">📁</div><h3>Projects</h3><p>20+ client aur personal projects complete</p></div>
          </div>
          <div className="tools">{['VS Code', 'Git / GitHub', 'Vercel', 'Railway', 'Postman', 'MongoDB', 'MySQL'].map((t) => <span key={t}>{t}</span>)}</div>
        </Reveal>
      </section>

      <section id="services">
        <Reveal className="wrap">
          <span className="tag">What I Do</span>
          <h2>Services I Deliver</h2>
          <p className="sub">Clean, fast aur scalable digital solutions, production-grade quality ke saath.</p>
          <div className="grid3 svc">
            {SERVICES.map(([ic, t, d]) => (
              <div className="card" key={t}><div className="ic">{ic}</div><h3>{t}</h3><p>{d}</p><a href="#contact">Open Service →</a></div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="work">
        <div className="wrap">
          <Reveal>
            <span className="tag">My Work</span>
            <h2>Selected Projects</h2>
            <p className="sub">Real-world applications jo performance, scalability aur premium user experience par focus karti hain.</p>
          </Reveal>
          <div className="pgrid">{PROJECTS.map((p) => <Project key={p.url} p={p} />)}</div>
        </div>
      </section>

      <section id="contact">
        <Reveal className="wrap">
          <span className="tag">Contact Me</span>
          <h2>Let's Build Something Amazing</h2>
          <p className="sub">Koi idea ya project hai? Chalo usay modern digital experience bana dete hain.</p>
          <div className="contact" style={{ marginTop: 34 }}>
            <form onSubmit={send}>
              <input name="name" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Your email" required />
              <textarea name="msg" placeholder="Tell me about your project" required />
              <button className="btn primary" type="submit">Send Message →</button>
            </form>
            <div className="info">
              <h3>Saboor Ejaz</h3>
              <p>Full Stack Developer • Freelancer<br />Dera Ghazi Khan, Pakistan</p>
              <p>✉️ <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p>
              <div className="soc">
                <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={`mailto:${CONFIG.email}`}>Email</a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer>© 2026 Saboor Ejaz. All rights reserved.</footer>
    </>
  )
}
