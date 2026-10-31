import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "PulseBoard",
    type: "Analytics dashboard",
    description:
      "A modern analytics dashboard for exploring business metrics, revenue trends, traffic sources, and transactions.",
    stack: ["React", "JavaScript", "Vite"],
    live: "https://pulse-board-eta-beryl.vercel.app/",
    github: "https://github.com/engrGoodluck/PulseBoard",
    color: "lavender",
    status: "LIVE DEMO",
  },
  {
    number: "02",
    name: "GoodPay",
    type: "Fintech application",
    description:
      "A fintech project built to explore digital payment workflows, authentication, and backend application development.",
    stack: ["Node.js", "Express", "PostgreSQL"],
    live: "https://good-pay.vercel.app/",
    github: "https://github.com/engrGoodluck/GoodPay",
    color: "mint",
    status: "IN DEVELOPMENT",
  },
  {
    number: "03",
    name: "Nilaxai Group",
    type: "Real estate website",
    description:
      "A modern bilingual real estate website for Nilaxai Group, featuring English and Lao translations, property information, and a polished responsive experience.",
    stack: ["React", "JavaScript", "Vite", "CSS"],
    live: "https://nilaxai-group-co.vercel.app/",
    github: "https://github.com/engrGoodluck/Nilaxai-Real-estate-website",
    color: "mint",
    status: "LIVE DEMO",
  },
  {
    number: "04",
    name: "Save The Milk",
    type: "Motherhood & Baby Care E-commerce",
    description:
      "A premium e-commerce website concept for motherhood, baby nutrition, maternal care, and breastmilk shipping services, featuring a modern shopping experience and elegant responsive design.",
    stack: ["React", "JavaScript", "Vite", "CSS"],
    live: "https://save-the-milk.vercel.app/",
    github: "https://github.com/engrGoodluck/Save-The-Milk",
    color: "lavender",
    status: "LIVE DEMO",
  },
];

const skills = [
  { name: "HTML & CSS", group: "Frontend", level: "Web foundations" },
  { name: "JavaScript", group: "Frontend", level: "Interactive web apps" },
  { name: "React", group: "Frontend", level: "Component-based UI" },
  {
    name: "Node.js & Express",
    group: "Backend",
    level: "Server-side development",
  },
  { name: "PHP", group: "Backend", level: "Web development" },
  {
    name: "MySQL & PostgreSQL",
    group: "Database",
    level: "Relational databases",
  },
  { name: "WordPress", group: "Websites", level: "Website development" },
  { name: "Email automation", group: "Marketing", level: "CRM & workflows" },
  { name: "Postman", group: "Tools", level: "API testing" },
];

function FloatingOrb({ className = "" }) {
  return <span aria-hidden="true" className={`floating-orb ${className}`} />;
}


function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.color}`}>
      <div className="project-art">
        <div className="project-art-top">
          <span className="mini-window-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="project-art-label">{project.type}</span>
        </div>

        {project.name === "PulseBoard" ? (
          <div className="mini-dashboard">
            <div className="mini-metric">
              <span>Total revenue</span>
              <strong>$48,294</strong>
              <i>↗ 12.8%</i>
            </div>
            <div className="mini-chart">
              {[35, 54, 43, 72, 60, 88, 67, 96, 75, 100, 82, 92].map(
                (height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ),
              )}
            </div>
            <div className="mini-chart-caption">
              <span>Revenue overview</span>
              <span>Last 12 months</span>
            </div>
          </div>
        ) : project.name === "Nilaxai Group" ? (
          <div className="nilaxai-art">
            <div className="nilaxai-brand-row">
              <span className="nilaxai-mark">N</span>
              <div>
                <strong>NILAXAI</strong>
                <small>GROUP OF COMPANIES</small>
              </div>
            </div>

            <div className="nilaxai-property-scene">
              <span className="nilaxai-sun" />
              <div className="nilaxai-building building-back" />
              <div className="nilaxai-building building-front" />
              <div className="nilaxai-ground" />
            </div>

            <div className="nilaxai-art-footer">
              <span>REAL ESTATE</span>
              <span>ENGLISH · LAO</span>
            </div>
          </div>
        ) : project.name === "Save The Milk" ? (
          <div className="savemilk-art">
            <div className="savemilk-brand">
              <span className="savemilk-flower">✿</span>
              <strong>save the milk</strong>
              <small>MOTHERHOOD · CARE · LOVE</small>
            </div>

            <div className="savemilk-products">
              <div className="savemilk-product savemilk-bottle">
                <span>♡</span>
                <strong>baby</strong>
                <small>care</small>
              </div>

              <div className="savemilk-product savemilk-box">
                <span>✿</span>
                <strong>mother</strong>
                <small>wellness</small>
              </div>

              <div className="savemilk-product savemilk-kit">
                <span>♡</span>
                <strong>milk</strong>
                <small>shipping kit</small>
              </div>
            </div>

            <div className="savemilk-art-footer">
              <span>MADE FOR MOTHERHOOD</span>
              <span>SHOP WITH LOVE ♡</span>
            </div>
          </div>
        ) : (
          <div className="goodpay-art">
            <div className="goodpay-symbol">
              G<span>+</span>
            </div>
            <strong>GoodPay</strong>
            <span>Digital finance concept</span>
            <div className="goodpay-balance">
              <small>Account overview</small>
              <b>•••• •••• ••••</b>
              <i>Secure payment experience</i>
            </div>
          </div>
        )}

        <span className="art-number">{project.number}</span>
      </div>

      <div className="project-card-body">
        <div className="project-status">
          <span />
          {project.status}
        </div>

        <h3>
          {project.name}
          <span className="accent-dot">.</span>
        </h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.live && (
            <a
              className="project-action primary-action"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live preview <span>↗</span>
            </a>
          )}

          <a
            className="project-action secondary-action"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            Source code <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [activeSkill]);

  const skillGroups = ["All", ...new Set(skills.map((skill) => skill.group))];
  const visibleSkills =
    activeSkill === "All"
      ? skills
      : skills.filter((skill) => skill.group === activeSkill);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <div className="ambient-background" aria-hidden="true">
        <FloatingOrb className="orb-one" />
        <FloatingOrb className="orb-two" />
        <FloatingOrb className="orb-three" />
        <div className="ambient-grid" />
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Goodluck Isaac home">
          <span className="brand-mark">
            g<span>.</span>
          </span>
          <span className="brand-name">
            goodluck<span>isaac</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Expertise
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a
            className="nav-cta"
            href="https://github.com/engrGoodluck"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            GitHub <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability-pill">
              <span className="availability-dot" /> BUILDING DIGITAL EXPERIENCES
            </div>
            <p className="hero-eyebrow">
              FULL-STACK DEVELOPER · WEB · AUTOMATION
            </p>
            <h1>
              I turn bold ideas into{" "}
              <span className="gradient-text">digital experiences.</span>
            </h1>
            <p className="hero-description">
              I'm <strong>Goodluck Isaac</strong> — a developer and digital
              specialist working across web applications, WordPress websites,
              and email marketing automation.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↘</span>
              </a>
              <a className="button button-glass" href="#contact">
                Let's connect <span>↗</span>
              </a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars">
                <span>JS</span>
                <span>WP</span>
                <span>API</span>
              </div>
              <p>
                <strong>Code meets creativity.</strong>
                <br />
                From websites to automated workflows.
              </p>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Animated abstract portfolio illustration"
          >
            <div className="visual-halo halo-one" />
            <div className="visual-halo halo-two" />
            <div className="glass-orbit orbit-one" />
            <div className="glass-orbit orbit-two" />
            <div className="hero-glass-card main-glass-card">
              <div className="glass-card-header">
                <span className="live-indicator" /> DIGITAL STUDIO{" "}
                <span className="header-sparkle">✳</span>
              </div>
              <div className="glass-card-title">Ideas, meet execution.</div>
              <div className="glass-card-subtitle">
                Web development · Automation · Product thinking
              </div>
              <div className="glass-card-visual">
                <div className="visual-shape shape-blue" />
                <div className="visual-shape shape-purple" />
                <div className="visual-shape shape-coral" />
                <div className="visual-glass-tile">
                  <span>g.</span>
                </div>
              </div>
              <div className="glass-card-footer">
                <span>DESIGN WITH PURPOSE</span>
                <span>✦ 2026</span>
              </div>
            </div>
            <div className="floating-chip chip-code">
              <span>{`</>`}</span> Full-stack
            </div>
            <div className="floating-chip chip-react">
              <span>✳</span> React & UI
            </div>
            <div className="floating-chip chip-auto">
              <span>↗</span> Automation
            </div>
            <div className="visual-caption">
              A little logic. A lot of imagination.
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="intro-strip section-wrap reveal" id="about">
          <div className="intro-label">
            <span>01</span> A LITTLE ABOUT ME
          </div>
          <div className="intro-content">
            <h2>
              More than code.
              <br />
              <span className="muted-heading">I build useful things.</span>
            </h2>
            <p>
              My work connects technology, websites, and marketing systems. I
              enjoy turning ideas into practical digital experiences — from
              developing applications and responsive websites to building email
              campaigns and automation workflows.
            </p>
            <a
              className="inline-link"
              href="https://www.linkedin.com/in/buildwithrobert"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <span>↗</span>
            </a>
          </div>
          <div className="intro-sticker" aria-hidden="true">
            <span>BUILD</span>
            <b>✳</b>
            <span>CREATE</span>
          </div>
        </section>

        <section className="expertise-section section-wrap" id="skills">
          <div className="section-heading reveal">
            <div>
              <p className="section-kicker">02 / WHAT I BRING</p>
              <h2>
                Skills with <span className="gradient-text">range.</span>
              </h2>
            </div>
            <p>
              From front-end details to back-end logic, websites, and automation
              — the right tools for the job.
            </p>
          </div>
          <div className="skill-filter reveal" aria-label="Filter skills">
            {skillGroups.map((group) => (
              <button
                key={group}
                className={
                  activeSkill === group
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setActiveSkill(group)}
              >
                {group}
              </button>
            ))}
          </div>
          <div className="skills-grid">
            {visibleSkills.map((skill, index) => (
              <article
                className="skill-card reveal"
                key={skill.name}
                style={{ "--delay": `${(index % 4) * 70}ms` }}
              >
                <span className="skill-card-icon">
                  {["✳", "⌘", "◈", "↗", "⌁"][index % 5]}
                </span>
                <span className="skill-group-label">{skill.group}</span>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
                <span className="skill-card-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading project-section-heading reveal">
            <div>
              <p className="section-kicker">03 / SELECTED WORK</p>
              <h2>
                Things I've{" "}
                <span className="gradient-text">brought to life.</span>
              </h2>
            </div>
            <p>
              Real repositories. Working demos where available. More experiments
              on the way.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
            <article className="coming-soon-card reveal">
              <div className="coming-icon">✳</div>
              <span className="section-kicker">UP NEXT</span>
              <h3>
                More in the making<span className="accent-dot">.</span>
              </h3>
              <p>
                An e-commerce experience, an advanced calculator, and a real
                estate website are on the roadmap.
              </p>
              <div className="coming-progress">
                <span />
                <span />
                <span />
              </div>
              <span className="coming-label">THE PORTFOLIO KEEPS GROWING</span>
            </article>
          </div>
        </section>

        <section
          className="certifications-section section-wrap"
          id="certifications"
        >
          <div className="section-heading reveal">
            <div>
              <p className="section-kicker">04 / LEARNING & GROWTH</p>
              <h2>
                Certifications &amp;{" "}
                <span className="gradient-text">learning.</span>
              </h2>
            </div>
            <p>
              Continuous learning, practical skills, and a commitment to growing
              with the technology I use.
            </p>
          </div>

          <div className="certifications-grid">
            <article className="certification-card reveal">
              <div className="certification-icon">✳</div>
              <span className="certification-year">2023</span>
              <h3>SEO Certification</h3>
              <p className="certification-provider">Udemy</p>
              <p>
                Training in search engine optimization and the fundamentals of
                improving website visibility.
              </p>

              <a
                className="project-action primary-action"
                href="/certificates/seo-certificate.png"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate <span>↗</span>
              </a>
            </article>

            <article className="certification-card reveal">
              <div className="certification-icon">↗</div>
              <span className="certification-year">2021</span>
              <h3>GoHighLevel CRM Expertise</h3>
              <p className="certification-provider">GoHighLevel CRM</p>
              <p>
                CRM workflows, marketing automation, and digital customer
                management.
              </p>

              <a
                className="project-action primary-action"
                href="/certificates/ghl-certificate.jpg"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate <span>↗</span>
              </a>
            </article>
          </div>
        </section>

        <section className="contact-section section-wrap reveal" id="contact">
          <div className="contact-orb" aria-hidden="true">
            <span>g.</span>
          </div>
          <div className="contact-copy">
            <p className="section-kicker">05 / HAVE A PROJECT IN MIND?</p>
            <h2>
              Let's make something{" "}
              <span className="gradient-text">matter.</span>
            </h2>
            <p>
              Have an idea, a project, or an opportunity? I'd love to hear what
              you're working on.
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href="mailto:goodluckemeka65@gmail.com"
              >
                Email me <span>↗</span>
              </a>
              <a
                className="button button-glass"
                href="https://www.linkedin.com/in/buildwithrobert"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span>↗</span>
              </a>
            </div>
          </div>
          <div className="contact-details">
            <div>
              <span>EMAIL</span>
              <a href="mailto:goodluckemeka65@gmail.com">
                goodluckemeka65@gmail.com
              </a>
            </div>
            <div>
              <span>GITHUB</span>
              <a
                href="https://github.com/engrGoodluck"
                target="_blank"
                rel="noreferrer"
              >
                github.com/engrGoodluck ↗
              </a>
            </div>
            <div>
              <span>LINKEDIN</span>
              <a
                href="https://www.linkedin.com/in/buildwithrobert"
                target="_blank"
                rel="noreferrer"
              >
                Connect professionally ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">
            g<span>.</span>
          </span>
          <span className="brand-name">
            goodluck<span>isaac</span>
          </span>
        </a>
        <p>Designed with curiosity. Built with code.</p>
        <span>© {new Date().getFullYear()} Goodluck Isaac</span>
      </footer>
    </div>
  );
}

export default App;
