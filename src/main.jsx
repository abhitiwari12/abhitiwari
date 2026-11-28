import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Code2, Download, ExternalLink,
  Github, Linkedin, Mail, MapPin, Menu, X, GraduationCap, Trophy,
  Heart, Gamepad2, Sparkles, Zap, Terminal, Cpu, Activity
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "CyberRanger",
    subtitle: "Red / Blue Cybersecurity Research Platform",
    category: "Research",
    type: "cyber",
    description: "A local red/blue research loop built around an intentionally vulnerable DVWA lab. It generates bounded test candidates, evaluates real responses with a blue-side detector, records evidence for human triage and tracks experiments through a mission-control dashboard.",
    stack: ["Python", "FastAPI", "Docker Compose", "Laya", "Gemini API"],
    status: "Research prototype",
    meta: "Independent research · Controlled local lab",
    github: "https://github.com/abhitiwari12/cyberranger",
    featured: true
  },
  {
    number: "02",
    title: "Fraud Detection System",
    subtitle: "Machine learning · Classification",
    category: "AI / ML",
    type: "fraud",
    description: "A machine-learning experiment that looks for suspicious patterns in transaction data and helps flag activity that deserves a closer look.",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    metric: "85% model accuracy"
  },
  {
    number: "03",
    title: "Misinformation Detector",
    subtitle: "NLP · Language models",
    category: "AI / ML",
    type: "misinfo",
    description: "Exploring how natural language processing and language models can help identify misleading content and bring more context to information online.",
    stack: ["Python", "NLP", "Text Classification"]
  },
  {
    number: "04",
    title: "AI Investment Planner",
    subtitle: "Data · Predictive modelling",
    category: "AI / ML",
    type: "investment",
    description: "A data-led experiment using historical trends to generate investment insights and make financial information easier to explore.",
    stack: ["Python", "Data Analysis", "Predictive Modelling"]
  },
  {
    number: "05",
    title: "theScientist",
    subtitle: "Multi-agent AI research assistant",
    category: "University",
    type: "scientist",
    description: "A team-built research assistant that retrieves academic papers, builds a knowledge graph, identifies research gaps, proposes hypotheses, reviews them adversarially and generates a structured manuscript.",
    stack: ["Python", "CrewAI", "LangChain", "ChromaDB", "NetworkX"],
    meta: "Semester VI · Agentic AI · Team project",
    github: "https://github.com/abhitiwari12/thescientist",
    report: "/MiniProject_Report_D&G_AgenticAI.pdf"
  },
  {
    number: "06",
    title: "Mini Compiler",
    subtitle: "End-to-end compiler with visualisation",
    category: "University",
    type: "compiler",
    description: "A hand-written compiler for a small C-like language, covering lexical, syntax and semantic analysis, parse-tree visualisation, intermediate code and optimisation.",
    stack: ["Python", "Streamlit", "Graphviz"],
    meta: "Semester VII · Compiler Design · Team project",
    github: "https://github.com/TanishaMajmundar/mini-compiler-visualizer",
    live: "https://mini-compiler-visualizer-otvezg8am6edqyyrjagaml.streamlit.app/",
    report: "/23BTAI62_TiwariAbhi_MiniProjectReport.pdf"
  },
  {
    number: "07",
    title: "SolarTwin AI",
    subtitle: "Digital twin for solar PV plants",
    category: "University",
    type: "solar",
    description: "A Phase-1 prototype for solar PV predictive maintenance, combining a physics-based reference model, AI/ML prediction and anomaly detection, SCADA/MQTT telemetry, a FastAPI backend and a React dashboard.",
    stack: ["Python", "FastAPI", "React", "XGBoost", "MQTT"],
    meta: "Semester VII · Software Project Management · Individual project",
    report: "/AbhiTiwari_120.pdf",
    status: "Phase-1 prototype"
  }
];

const experiences = [
  {
    date: "MAY — JUL 2026",
    role: "AI / ML Intern",
    company: "Microweb Solutions",
    place: "Ahmedabad",
    text: "Worked on practical machine-learning workflows using Python and Scikit-learn — from data preprocessing and exploratory analysis to feature engineering and model evaluation.",
    tags: ["Python", "Scikit-learn", "Data Analysis"]
  },
  {
    date: "JUN — JUL 2024",
    role: "Social Media Intern",
    company: "Karma Foundation",
    place: "Ahmedabad",
    text: "Managed content across LinkedIn, Instagram and Facebook, and worked on improving audience engagement through data-informed content strategies.",
    tags: ["Content", "Social Media", "Engagement"]
  }
];

function ProjectVisual({ type }) {
  if (type === "cyber") return (
    <div className="visual-cyber">
      <div className="terminal-top"><span className="terminal-lights"><i/><i/><i/></span><span>CYBERRANGER / LOCAL LAB</span><span>SYS 01</span></div>
      <div className="terminal-content">
        <div className="terminal-line"><b>RED</b><span>candidate generated</span><em>›</em></div>
        <div className="terminal-line"><b>BLUE</b><span>response evaluated</span><em>✓</em></div>
        <div className="terminal-line"><b>REVIEW</b><span>evidence queued</span><em>+</em></div>
        <div className="terminal-rule"></div>
        <div className="terminal-meta"><span>DVWA SANDBOX</span><span><i/> ISOLATED ENVIRONMENT</span></div>
      </div>
      <div className="visual-index">01 / INDEPENDENT RESEARCH</div>
    </div>
  );
  if (type === "fraud") return (
    <div className="visual-fraud">
      <div className="fraud-top"><span>TRANSACTION REVIEW</span><span>LIVE MODEL</span></div>
      <div className="fraud-amount">₹4,250</div>
      <div className="fraud-caption">Unusual activity detected</div>
      <div className="fraud-status"><span>●</span> FLAGGED FOR REVIEW</div>
      <div className="fraud-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
    </div>
  );
  if (type === "misinfo") return (
    <div className="visual-misinfo">
      <div className="misinfo-sheet">
        <span>CLAIM CHECK / 01</span>
        <strong>Is this information reliable?</strong>
        <i/><i/><i/>
        <div className="misinfo-check"><b>✓</b> CONTEXT REVIEW</div>
      </div>
      <div className="misinfo-orbit">?</div>
    </div>
  );
  if (type === "investment") return (
    <div className="visual-investment">
      <div className="investment-top"><span>MARKET TRENDS</span><b>↗</b></div>
      <svg viewBox="0 0 420 170" role="img" aria-label="Illustrative market trend line">
        <path d="M8 140 L64 116 L112 128 L166 78 L218 92 L274 42 L328 58 L410 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 140 L64 116 L112 128 L166 78 L218 92 L274 42 L328 58 L410 12 L410 165 L8 165Z" fill="currentColor" opacity=".10"/>
        {[8,64,112,166,218,274,328,410].map((x,i)=><circle key={x} cx={x} cy={[140,116,128,78,92,42,58,12][i]} r="4" fill="currentColor"/>)}
      </svg>
      <div className="investment-bottom"><span>HISTORICAL DATA</span><span>MODEL INSIGHTS</span></div>
    </div>
  );
  if (type === "scientist") return (
    <div className="visual-scientist">
      <svg viewBox="0 0 420 190" role="img" aria-label="Research papers connected in a knowledge graph">
        <g stroke="currentColor" strokeOpacity=".55" strokeWidth="1.5"><path d="M54 94 L151 40 L285 75 L188 152 L54 94 M151 40 L188 152 M285 75 L357 145 M54 94 L42 157 M151 40 L357 145 M285 75 L188 152"/></g>
        <g fill="#c9f36a" stroke="#17221d" strokeWidth="2"><circle cx="54" cy="94" r="9"/><circle cx="151" cy="40" r="12"/><circle cx="285" cy="75" r="10"/><circle cx="188" cy="152" r="9"/><circle cx="357" cy="145" r="7"/><circle cx="42" cy="157" r="6"/></g>
        <circle cx="218" cy="91" r="21" fill="#f3f0e7" stroke="#c9f36a" strokeWidth="3"/>
        <path d="M209 91h18M218 82v18" stroke="#17221d" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span>RESEARCH PAPERS → CONNECTED IDEAS</span>
    </div>
  );
  if (type === "compiler") return (
    <div className="visual-compiler">
      <div className="code-window"><span>main.py</span><i/><i/><i/><i/><i/></div>
      <div className="compiler-flow"><b>LEX</b><em>→</em><b>PARSE</b><em>→</em><b>CODE</b></div>
      <div className="compiler-result"><span>INTERMEDIATE OUTPUT</span><strong>t1 = a + b</strong><strong>t2 = t1 * c</strong></div>
    </div>
  );
  return (
    <div className="visual-solar">
      <div className="solar-sun"/>
      <div className="solar-panels">{Array.from({length:12},(_,i)=><i key={i}/>)}</div>
      <div className="solar-label"><span>PV OUTPUT</span><b>OPTIMISE ↗</b></div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={"project-card project-" + project.type + (project.featured ? " project-featured" : "")}>
      <div className="project-art">
        <ProjectVisual type={project.type}/>
        {project.featured && <span className="featured-label"><Zap size={12}/> FEATURED BUILD</span>}
      </div>
      <div className="project-copy">
        <div className="project-meta"><span>{project.category}</span><span>{project.number} / 07</span></div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div>
        {(project.metric || project.status) && <div className="project-proof">{project.metric || project.status}</div>}
        {project.meta && <p className="project-context">{project.meta}</p>}
        <div className="project-links">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a>}
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14}/></a>}
          {project.report && <a href={project.report} target="_blank" rel="noreferrer">Project report <ArrowUpRight size={14}/></a>}
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const nav = [["Work", "#work"], ["About", "#about"], ["Experience", "#experience"], ["Play", "#play"]];
  const visibleProjects = projects.filter(project => filter === "All" || project.category === filter);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(node => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell" id="top">
      <div className="site-noise" aria-hidden="true"/>
      <header className="header">
        <a className="wordmark" href="#top" aria-label="Abhi Tiwari home">AT<span>.</span></a>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          {nav.map(([label, href])=><a key={label} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-right">
          <span className="header-location"><span/> AHMEDABAD, IN</span>
          <a className="header-contact" href="mailto:tiwariabhi1211@gmail.com">LET'S TALK <ArrowUpRight size={14}/></a>
          <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid-mark" aria-hidden="true"/>
          <div className="hero-copy">
            <div className="hero-kicker"><span className="availability-dot"/> COMPUTER SCIENCE · AI & MACHINE LEARNING</div>
            <p className="hero-intro">Hey, I'm Abhi Tiwari.</p>
            <h1>Curiosity<br/><span>looks good</span><br/>in <em>progress.</em></h1>
            <p className="hero-description">I build with AI, explore ideas that might become something bigger, and learn by doing. Currently studying Computer Science at Karnavati University.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDown size={15}/></a>
              <a className="button button-quiet" href="/Abhi-Tiwari-CV.pdf" target="_blank" rel="noreferrer"><Download size={15}/> View résumé</a>
            </div>
            <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span className="hero-line"/></div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-halo"/>
            <div className="portrait-frame">
              <img src="/assets/abhi-portrait.jpg" alt="Abhi Tiwari" className="portrait-image"/>
              <div className="portrait-index">FIG. 01 — THE HUMAN</div>
            </div>
            <div className="portrait-float portrait-float-top"><Cpu size={15}/> AI / ML BUILDER</div>
            <div className="portrait-float portrait-float-bottom"><MapPin size={14}/> AHMEDABAD, INDIA</div>
            <div className="portrait-asterisk">✳</div>
            <div className="portrait-side-note">A LITTLE BIT OF EVERYTHING <span>↙</span></div>
          </div>
          <div className="hero-coordinate">23°01' N&nbsp; 72°34' E</div>
          <div className="hero-number">01</div>
        </section>

        <section className="marquee-strip" aria-label="Interests">
          <div className="marquee-track">
            <span>ARTIFICIAL INTELLIGENCE</span><i>✳</i><span>BUILDING THINGS</span><i>✳</i><span>CRICKET</span><i>✳</i><span>STARTUP IDEAS</span><i>✳</i><span>KABADDI</span><i>✳</i><span>NEW EXPERIENCES</span><i>✳</i>
            <span>ARTIFICIAL INTELLIGENCE</span><i>✳</i><span>BUILDING THINGS</span><i>✳</i><span>CRICKET</span><i>✳</i><span>STARTUP IDEAS</span><i>✳</i><span>KABADDI</span><i>✳</i><span>NEW EXPERIENCES</span><i>✳</i>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-top reveal">
            <div><span className="section-index">01 / SELECTED WORK</span><h2>Things I’ve<br/><em>put into motion.</em></h2></div>
            <p className="section-aside">A collection of experiments, builds and university projects. Some are polished. Some are still teaching me things.</p>
          </div>
          <div className="filter-bar reveal" role="group" aria-label="Filter projects">
            {["All", "Research", "AI / ML", "University"].map(item=><button key={item} className={filter===item ? "filter-button active" : "filter-button"} onClick={()=>setFilter(item)}>{item}</button>)}
            <span className="filter-count">{String(visibleProjects.length).padStart(2,"0")} PROJECTS</span>
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project,i)=><div className={"project-reveal reveal" + (project.featured ? " project-reveal-featured" : "")} key={project.number} style={{transitionDelay:(i%3)*70+"ms"}}><ProjectCard project={project}/></div>)}
          </div>
          <div className="all-work-link reveal"><span>MORE CODE, EXPERIMENTS & HALF-FORMED IDEAS</span><a href="https://github.com/abhitiwari12" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={15}/></a></div>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner section-wrap">
            <div className="about-intro reveal">
              <span className="section-index">02 / BEYOND THE SCREEN</span>
              <h2>More than<br/><em>just code.</em></h2>
              <p>I like the mix of technology, people and the unexpected things you learn when you step outside your comfort zone. College has been as much about teams and experiences as it has been about code.</p>
              <a className="inline-link" href="mailto:tiwariabhi1211@gmail.com">Say hello sometime <ArrowUpRight size={15}/></a>
            </div>
            <div className="about-facts">
              <article className="fact-card fact-sport reveal"><Trophy size={21}/><span>SPORTS</span><h3>Cricket &<br/>Kabaddi.</h3><p>Part of the university sports community; represented the university in All India University Kabaddi and won an inter-university tournament.</p></article>
              <article className="fact-card fact-lead reveal"><Sparkles size={21}/><span>LEADERSHIP</span><h3>Show up.<br/>Take charge.</h3><p>Discipline Vice Chairperson, AAYAM — the UIT Student Committee.</p></article>
              <article className="fact-card fact-ncc reveal"><Heart size={21}/><span>NCC</span><h3>Discipline<br/>beyond campus.</h3><p>NCC cadet with a C Certificate and experience at two CATC camps.</p></article>
              <article className="fact-card fact-ideas reveal"><Zap size={21}/><span>ALWAYS CURIOUS</span><h3>Ideas don't<br/>sit still.</h3><p>Interested in AI, products, startups and finding useful ways to connect the dots.</p></article>
            </div>
          </div>
        </section>

        <section className="inspiration-section section-wrap reveal" id="inspiration">
          <div className="inspiration-art">
            <div className="inspiration-number">18</div>
            <img src="/assets/virat-kohli-user-photo.png" alt="Virat Kohli celebrating for India" loading="lazy"/>
            <span className="inspiration-caption">THE STANDARD / INDIA</span>
          </div>
          <div className="inspiration-copy">
            <span className="section-index">A LITTLE PERSONAL INSPIRATION</span>
            <h2>Play with<br/><em>intent.</em></h2>
            <p>Virat Kohli is one of the reasons I fell deeper in love with cricket. Beyond the shots and the celebrations, it’s the discipline, intensity and belief that stay with me. A reminder to bring the same energy to whatever I choose to do.</p>
            <div className="inspiration-values"><span>01 / DISCIPLINE</span><span>02 / SELF-BELIEF</span><span>03 / CONSISTENCY</span></div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-top reveal">
            <div><span className="section-index">03 / EXPERIENCE</span><h2>Where I’ve<br/><em>shown up.</em></h2></div>
            <p className="section-aside">Learning how ideas move from a screen into real teams, real work and real people.</p>
          </div>
          <div className="experience-list">
            {experiences.map((item,i)=><article className="experience-row reveal" key={item.company}>
              <div className="experience-date">{item.date}</div>
              <div className="experience-main"><h3>{item.role}</h3><div className="experience-company">{item.company}<span> / {item.place}</span></div><p>{item.text}</p><div className="experience-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>
              <span className="experience-number">0{i+1}</span>
            </article>)}
          </div>
          <div className="education-line reveal"><GraduationCap size={19}/><span>2023 — 2027</span><strong>B.Tech Computer Science · AI & Machine Learning</strong><small>Karnavati University</small></div>
        </section>

        <section className="play-section" id="play">
          <div className="play-inner section-wrap">
            <div className="play-copy reveal">
              <span className="section-index">04 / SIDE QUEST</span>
              <h2>Sometimes,<br/>you just make<br/><em>a game.</em></h2>
              <p>GEORUSH is a geography guessing game I built for the joy of building. Five rounds, a ticking clock and one question: how well do you know your distances?</p>
              <a className="button button-lime" href="/games/georush/index.html" target="_blank" rel="noreferrer">Play GEORUSH <ArrowUpRight size={16}/></a>
            </div>
            <div className="game-art reveal">
              <div className="game-grid-lines"/>
              <span className="game-kicker">ABHI'S GAME CORNER / V1.3</span>
              <div className="game-orbit"><span className="game-pin pin-one"/><span className="game-pin pin-two"/><span className="game-route"/></div>
              <div className="game-title">GEO<br/><em>RUSH</em></div>
              <div className="game-bottom"><span>INDIA · WORLD · MIXED</span><Gamepad2 size={19}/></div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-top section-wrap">
            <div className="footer-copy reveal"><span className="section-index">05 / YOUR TURN</span><h2>Got an idea?<br/><em>Let's talk.</em></h2><p>For collaborations, opportunities, interesting conversations or just to say hello.</p></div>
            <div className="footer-links reveal">
              <a className="footer-email" href="mailto:tiwariabhi1211@gmail.com"><Mail size={18}/> tiwariabhi1211@gmail.com <ArrowUpRight size={16}/></a>
              <a href="https://github.com/abhitiwari12" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a>
              <a href="https://www.linkedin.com/in/abhi-tiwari-18715727b/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a>
              <a href="/Abhi-Tiwari-CV.pdf" target="_blank" rel="noreferrer"><Download size={17}/> Résumé <ExternalLink size={13}/></a>
            </div>
          </div>
          <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} ABHI TIWARI</span><span>MADE WITH CURIOSITY · AHMEDABAD, INDIA</span><a href="#top">BACK TO TOP ↑</a></div>
        </footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
