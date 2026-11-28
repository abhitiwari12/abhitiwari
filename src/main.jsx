import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Gamepad2, GraduationCap, Code2, Mail, Github, Linkedin, Download, Sparkles, MapPin, Menu, X, Coffee, Heart } from "lucide-react";
import "./styles.css";

const projects = [
  { tag:"BUILD / AI", title:"Fraud Detection System", desc:"A machine-learning experiment that looks for suspicious patterns in transaction data.", tone:"paper", stat:"85% model accuracy", visual:"fraud", href:"https://github.com/abhitiwari12" },
  { tag:"BUILD / NLP", title:"Misinformation Detector", desc:"Exploring how language models and NLP techniques can help identify misleading content.", tone:"darkcard", stat:"Text classification", visual:"misinfo", href:"https://github.com/abhitiwari12" },
  { tag:"BUILD / DATA", title:"AI Investment Planner", desc:"A data-led experiment using historical trends to generate investment insights.", tone:"limecard", stat:"Predictive modelling", visual:"investment", href:"https://github.com/abhitiwari12" }
];



const academicProjects = [
  {
    tag:"AGENTIC AI · SEMESTER VI · TEAM PROJECT",
    title:"theScientist — Multi-Agent AI Scientist",
    desc:"A multi-agent research assistant that retrieves academic papers, builds a knowledge graph, identifies research gaps, proposes testable hypotheses, reviews them adversarially and generates a structured research manuscript.",
    stack:"Python · CrewAI · LangChain · ChromaDB · NetworkX · ArXiv · Semantic Scholar",
    visual:"scientist",
    href:"https://github.com/abhitiwari12/thescientist",
    report:"/MiniProject_Report_D&G_AgenticAI.pdf",
    meta:"Karnavati University · Guided by Ms Vaishnavi Chauhan"
  },
  {
    tag:"COMPILER DESIGN · SEMESTER VII · TEAM PROJECT",
    title:"End-to-End Mini Compiler with Phase Visualisation",
    desc:"A hand-written compiler for a small C-like language. It demonstrates lexical, syntax and semantic analysis, parse-tree visualisation, Three Address Code, quadruples, triples and code optimisation.",
    stack:"Python · Streamlit · Graphviz · Git · GitHub",
    visual:"compiler",
    href:"https://github.com/TanishaMajmundar/mini-compiler-visualizer",
    live:"https://mini-compiler-visualizer-otvezg8am6edqyyrjagaml.streamlit.app/",
    report:"/23BTAI62_TiwariAbhi_MiniProjectReport.pdf",
    meta:"Karnavati University · Guided by Ms Neha Minocha"
  },
  {
    tag:"SOFTWARE PROJECT MANAGEMENT · SEMESTER VII · INDIVIDUAL PROJECT",
    title:"SolarTwin AI — Digital Twin for Solar PV Plants",
    desc:"A Phase-1 prototype for solar photovoltaic predictive maintenance, combining a physics-based PV reference model, AI/ML prediction and anomaly detection, SCADA/MQTT telemetry, a FastAPI backend and a React dashboard.",
    stack:"Python · FastAPI · React · TypeScript · XGBoost · LSTM Autoencoder · MQTT · SQLite",
    visual:"solar",
    href:null,
    report:"/AbhiTiwari_120.pdf",
    meta:"Karnavati University · Guided by Dr Sohil Shah",
    status:"Phase-1 prototype"
  }
];

const allProjects = [
  {
    kind:"independent research",
    tag:"CYBERSECURITY · RED/BLUE RESEARCH",
    title:"CyberRanger — Red/Blue Cybersecurity Research Platform",
    desc:"A local red/blue research loop built around an intentionally vulnerable DVWA lab. It generates bounded test candidates, evaluates real responses with a blue-side detector, records evidence for human triage and tracks experiments through a mission-control dashboard.",
    stack:"Python · FastAPI · Docker Compose · Laya · Gemini API",
    visual:"cyber",
    href:"https://github.com/abhitiwari12/cyberranger",
    meta:"Independent research project · Controlled local lab",
    status:"Research prototype"
  },
  ...projects.map(project => ({ ...project, kind:"personal" })),
  ...academicProjects.map(project => ({ ...project, kind:"academic" }))
];

const journey = [
  { year:"2023 — NOW", title:"Karnavati University", label:"THE COLLEGE CHAPTER", text:"B.Tech in Computer Science, specialising in AI & Machine Learning. Learning, building, meeting people and collecting stories along the way.", icon:GraduationCap },
  { year:"2025 — NOW", title:"AAYAM · Student Committee", label:"LEADERSHIP", text:"Discipline Vice Chairperson — a chance to take responsibility, work with people and help make campus life happen.", icon:Sparkles },
  { year:"CAMPUS LIFE", title:"Sports, teams & NCC", label:"BEYOND THE CLASSROOM", text:"Part of the university sports community, a cricket and kabaddi player, and an NCC cadet. Some of the best lessons happen outside lectures.", icon:Heart },
  { year:"ALONG THE WAY", title:"Learning by doing", label:"SMALL STEPS, REAL LESSONS", text:"Taking ideas from class into projects, trying new responsibilities and learning from the people I get to work with.", icon:Code2 }
];

function ProjectArtwork({type,stat}){
  if(type==="cyber") return <div className="art-terminal">
    <div className="terminal-bar"><i/><i/><i/><span>LOCAL LAB / CYBERRANGER</span></div>
    <div className="terminal-body">
      <p><b>RED</b><span>candidate generated</span><em>›</em></p>
      <p><b>BLUE</b><span>response evaluated</span><em>✓</em></p>
      <p><b>REVIEW</b><span>evidence queued</span><em>+</em></p>
    </div>
    <div className="terminal-foot"><span>DVWA SANDBOX</span><span>● ISOLATED</span></div>
  </div>;
  if(type==="fraud") return <div className="art-fraud">
    <div className="fraud-ticket"><span>TRANSACTION REVIEW</span><strong>₹4,250</strong><small>Unusual activity detected</small><b>FLAGGED</b></div>
    <div className="fraud-orbit"><i/><i/><i/><span/></div>
  </div>;
  if(type==="misinfo") return <div className="art-misinfo">
    <div className="misinfo-paper"><span>CLAIM CHECK / 01</span><strong>Is this information reliable?</strong><div className="misinfo-lines"><i/><i/><i/></div><b><span>✓</span> CONTEXT REVIEW</b></div>
    <div className="misinfo-mark">?</div>
  </div>;
  if(type==="investment") return <div className="art-investment">
    <div className="investment-label"><span>MARKET TRENDS</span><b>↗</b></div>
    <svg viewBox="0 0 320 112" role="img" aria-label="Illustrative investment trend">
      <path d="M8 92 L56 78 L96 84 L140 52 L180 61 L224 30 L270 38 L312 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 92 L56 78 L96 84 L140 52 L180 61 L224 30 L270 38 L312 10 L312 108 L8 108Z" fill="currentColor" opacity=".10"/>
      {[8,56,96,140,180,224,270,312].map((x,i)=><circle key={x} cx={x} cy={[92,78,84,52,61,30,38,10][i]} r="3.2" fill="currentColor"/>)}
    </svg>
    <div className="investment-periods"><span>PAST DATA</span><span>MODEL INSIGHTS</span></div>
  </div>;
  if(type==="scientist") return <div className="art-scientist">
    <svg viewBox="0 0 320 135" role="img" aria-label="Research papers connected in a knowledge graph">
      <g stroke="currentColor" strokeOpacity=".55" strokeWidth="1.5"><path d="M56 70 L137 34 L246 62 L166 108 L56 70 M137 34 L166 108 M246 62 L277 112 M56 70 L43 116 M137 34 L277 112"/></g>
      <g fill="#e6c36c" stroke="#173f2e" strokeWidth="2"><circle cx="56" cy="70" r="8"/><circle cx="137" cy="34" r="10"/><circle cx="246" cy="62" r="9"/><circle cx="166" cy="108" r="8"/><circle cx="277" cy="112" r="6"/><circle cx="43" cy="116" r="5"/></g>
      <circle cx="166" cy="68" r="17" fill="#f2ead9" stroke="#d9bf7f" strokeWidth="2"/>
      <path d="M160 68h12M166 62v12" stroke="#1f4d37" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span>RESEARCH PAPERS → CONNECTED IDEAS</span>
  </div>;
  if(type==="compiler") return <div className="art-compiler">
    <div className="compiler-code"><span>01</span><i/><i/><i/><i/></div>
    <div className="compiler-stages"><b>LEX</b><em>→</em><b>PARSE</b><em>→</em><b>CODE</b></div>
    <div className="compiler-output"><span>OUTPUT</span><strong>t1 = a + b</strong><strong>t2 = t1 * c</strong></div>
  </div>;
  if(type==="solar") return <div className="art-solar">
    <div className="solar-sun"/>
    <div className="solar-panel"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
    <div className="solar-reading"><span>PV OUTPUT</span><strong>↗ OPTIMISE</strong></div>
  </div>;
  return <div className="art-general"><span>{stat || "PROJECT NOTES"}</span></div>;
}

function App(){
  const [menuOpen,setMenuOpen] = React.useState(false);
  const [scrollProgress,setScrollProgress] = React.useState(0);
  React.useEffect(()=>{
    const updateProgress=()=>{
      const scrollable=document.documentElement.scrollHeight-window.innerHeight;
      setScrollProgress(scrollable>0 ? (window.scrollY/scrollable)*100 : 0);
    };
    window.addEventListener("scroll",updateProgress,{passive:true});
    updateProgress();
    return ()=>window.removeEventListener("scroll",updateProgress);
  },[]);
  const nav=[["The journey","#journey"],["Experience","#experience"],["Things I made","#projects"],["GEORUSH","#play"]];
  return <div className="site-shell">
    <div className="reading-progress" style={{width:scrollProgress+"%"}}></div>
    <div className="grain"></div>
    <header className="topbar">
      <a className="brand" href="#top">abhi<span>tiwari</span><b>.online</b></a>
      <nav className={menuOpen?"nav open":"nav"}>{nav.map(([n,h])=><a key={h} href={h} onClick={()=>setMenuOpen(false)}>{n}</a>)}</nav>
      <div className="top-actions"><a className="tiny-pill" href="mailto:tiwariabhi1211@gmail.com"><Coffee size={13}/> Say hello</a><button className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button></div>
    </header>

    <main id="top">
      <section className="hero hinge-hero">
        <div className="hero-copy hinge-profile-copy">
          <div className="eyebrow"><span className="live-dot"></span> A LITTLE MORE ABOUT ME</div>
          <div className="profile-kicker">THE PERSON, NOT JUST THE PORTFOLIO</div>
          <h1>Abhi Tiwari<span className="profile-age">21</span></h1>
          <div className="profile-details"><span><MapPin size={14}/> Ahmedabad, India</span><span><GraduationCap size={14}/> Karnavati University</span><span><Code2 size={14}/> AI &amp; ML</span></div>
          <p className="hero-lede">Curious by nature. Usually building something, following cricket, playing a sport or saying yes to an idea that sounds interesting. This is my little corner — a mix of work, people, passions and everything in between.</p>
          <div className="profile-interest-tags"><span>Cricket 🏏</span><span>AI &amp; Tech</span><span>Kabaddi</span><span>Startups</span><span>Learning new things</span></div>
          <div className="hero-cta"><a className="btn primary" href="#prompts">Get to know me <ArrowUpRight size={16}/></a><a className="text-link" href="#projects">Things I've made <span>↗</span></a></div>
          <div className="profile-presence"><span className="live-dot"></span> Currently studying, building &amp; figuring it out</div>
        </div>
        <div className="hero-visual hinge-photo-visual">
          <div className="photo-frame">
            <div className="photo-placeholder personal-photo"><img className="profile-photo" src="/assets/abhi-portrait.jpg" alt="Abhi Tiwari" /><div className="photo-stamp">THAT'S ME</div><div className="photo-note">ABHI · THE HUMAN BEHIND THE CODE<br/><small>Curious by nature · Building as I go</small></div></div>
            <div className="tape"></div>
          </div>
          <div className="floating-note note-one">Probably thinking of an idea <span>✳</span></div>
          <div className="floating-note note-two">Cricket · Kabaddi · NCC</div>
          <div className="scribble">nice to meet you!</div>
        </div>
      </section>

      <section className="intro-strip">
        <div><span className="strip-label">THE SHORT VERSION</span><p>Computer Science student at <strong>Karnavati University</strong>, specialising in AI & ML. I like building useful things, trying weird ideas and saying yes to new experiences.</p></div>
        <a href="/Abhi-Tiwari-CV.pdf" className="cv-link" target="_blank"><Download size={15}/> My résumé <ArrowUpRight size={14}/></a>
      </section>

      <section className="section prompts-section" id="prompts">
        <div className="section-head"><div><span className="eyebrow">A FEW PROMPTS, HINGE-STYLE</span><h2>Get to know <em>me.</em></h2></div><p>Not a résumé section.<br/>Just the bits that make me, me.</p></div>
        <div className="prompt-grid">
          <article className="prompt-card prompt-wide"><span className="prompt-label">MY SIMPLE PLEASURES</span><h3>Cricket that goes down to the last over, good conversations, discovering a new idea and the feeling of finally getting something to work.</h3><span className="prompt-doodle">✳</span></article>
          <article className="prompt-card prompt-photo-card"><span className="prompt-label">I GEEK OUT ON…</span><h3>AI, startups, SaaS ideas and how everyday things could be made a little smarter.</h3><span className="prompt-sticker">CURIOUS<br/>BY DEFAULT</span></article>
          <article className="prompt-card prompt-light"><span className="prompt-label">A RANDOM FACT ABOUT ME</span><h3>I'm equally happy discussing a machine-learning model, a cricket match or a completely random business idea.</h3></article>
          <article className="prompt-card prompt-green"><span className="prompt-label">THE WAY TO WIN ME OVER</span><h3>Be genuine. Match the energy. Have a sense of humour. And please, bring good stories.</h3><span className="prompt-heart">♡</span></article>
        </div>
        <div className="profile-interests"><span className="interests-heading">A FEW THINGS I LOVE</span><span>🏏 Cricket</span><span>🏆 Kabaddi</span><span>💻 Building things</span><span>🤖 AI &amp; ML</span><span>🇮🇳 Team India</span><span>✨ New experiences</span></div>
      </section>

      <section className="kohli-feature" id="my-inspiration">
        <div className="kohli-paper-edge" aria-hidden="true"></div>
        <div className="kohli-portrait-panel">
          <span className="kohli-side-note">MY ALL-TIME FAVOURITE</span>
          <div className="kohli-portrait-halo"></div>
          <div className="kohli-big-18">18</div>
          <img className="kohli-cutout" src="/assets/virat-kohli-user-photo.png" alt="Virat Kohli celebrating in India whites" loading="lazy" />
          <div className="kohli-photo-caption"><span>INDIA</span><strong>VIRAT KOHLI</strong><small>THE ONE AND ONLY · 18</small></div>
          <span className="kohli-crown" aria-hidden="true">♛</span>
        </div>
        <div className="kohli-copy">
          <span className="eyebrow">THE BIGGEST GREEN FLAG IN MY CRICKET FEED</span>
          <h2>Virat<br/><em>Kohli.</em></h2>
          <p className="kohli-intro">Some people make you fall in love with a sport. For me, he's one of them.</p>
          <p className="kohli-body">I've followed Virat for the cricket, but what stays with me is the intensity, discipline and belief he brings to the game. The standards he sets for himself remind me to keep working, keep learning and give my best — whether it's on the field, in college or while building something new.</p>
          <div className="kohli-values">
            <span><b>01</b> Discipline</span><span><b>02</b> Self-belief</span><span><b>03</b> Consistency</span>
          </div>
          <div className="kohli-footer-row">
            <span className="kohli-fan-note">Match day mood: emotionally invested. 🇮🇳</span>
            <a className="kohli-link" href="https://www.bcci.tv/" target="_blank" rel="noreferrer">Follow Indian cricket <ArrowUpRight size={14}/></a>
          </div>
        </div>
      </section>
      <section className="section journey-section" id="journey">
        <div className="section-head"><div><span className="eyebrow">A FEW CHAPTERS</span><h2>How I got <em>here.</em></h2></div><p>Still a work in progress.<br/>These are a few stops along the way.</p></div>
        <div className="journey-list">{journey.map((item,i)=>{const Icon=item.icon;return <article className="journey-item" key={item.title}><div className="journey-year">{item.year}</div><div className="journey-pin"><Icon size={17}/></div><div className="journey-content"><span className="card-kicker">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></div><span className="chapter-no">0{i+1}</span></article>})}</div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-head"><div><span className="eyebrow">WORK & REAL-WORLD LEARNING</span><h2>Places I've <em>worked.</em></h2></div><p>A couple of roles that gave me a taste<br/>of working with real teams and goals.</p></div>
        <div className="experience-list">
          <article className="experience-card experience-ai">
            <div className="experience-top"><span className="card-kicker">AI / MACHINE LEARNING</span><span className="experience-date">MAY — JUL 2026</span></div>
            <h3>AI/ML Intern</h3>
            <div className="experience-company">Microweb Solutions <span>· Ahmedabad</span></div>
            <p>Worked on practical machine-learning workflows using Python and Scikit-learn — from data preprocessing and exploratory analysis to feature engineering and model evaluation.</p>
            <div className="experience-tags"><span>Python</span><span>Scikit-learn</span><span>Data Analysis</span><span>Feature Engineering</span></div>
          </article>
          <article className="experience-card experience-social">
            <div className="experience-top"><span className="card-kicker">CONTENT & COMMUNICATION</span><span className="experience-date">JUN — JUL 2024</span></div>
            <h3>Social Media Intern</h3>
            <div className="experience-company">Karma Foundation <span>· Ahmedabad</span></div>
            <p>Managed content across LinkedIn, Instagram and Facebook, and worked on improving audience engagement through data-informed content strategies.</p>
            <div className="experience-tags"><span>Social Media</span><span>Content</span><span>Engagement</span></div>
          </article>
        </div>
      </section>

      <section className="journal-note">
        <span className="note-pin">✳ A LITTLE ABOUT ME</span>
        <p>If it's interesting, I'm probably curious about it. If it's challenging, I'm probably trying it.</p>
        <span className="note-sign">— Abhi</span>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-head">
          <div><span className="eyebrow">PROJECTS, EXPERIMENTS & COURSEWORK</span><h2>Things I've <em>made.</em></h2></div>
          <p>Personal builds, university projects<br/>and ideas I wanted to try.</p>
        </div>
        <p className="work-intro">A mix of things I've worked on inside and outside college — from small experiments to larger research prototypes.</p>
        <div className="work-grid">
          {allProjects.map((project,i)=><article className={`work-card ${i===0 ? "work-card-featured" : ""}`} key={project.title}>
            <div className={`work-card-art art-${project.visual || "general"}`}>
              <div className="work-card-art-head">
                <span>{project.kind === "academic" ? "UNIVERSITY PROJECT" : project.kind === "independent research" ? "INDEPENDENT RESEARCH" : "PERSONAL PROJECT"}</span>
                <span>0{i+1}</span>
              </div>
              <ProjectArtwork type={project.visual || "general"} stat={project.stat}/>
            </div>
            <div className="work-card-content">
              <span className="work-category">{project.tag}</span>
              <h3>{project.title}</h3>
              <p className="work-desc">{project.desc}</p>
              {project.stack && <div className="work-techs">
                {project.stack.split(" · ").slice(0,5).map(tech=><span key={tech}>{tech}</span>)}
                {project.stack.split(" · ").length>5 && <small>+{project.stack.split(" · ").length-5} more</small>}
              </div>}
              {project.stat && <p className="work-stat-note">{project.stat}</p>}
              <div className="work-card-footer">
                {project.meta && <p className="work-meta">{project.meta}{project.status ? " · "+project.status : ""}</p>}
                <div className="work-links">
                  {project.href && <a href={project.href} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14}/></a>}
                  {project.report && <a href={project.report} target="_blank" rel="noreferrer">Report <ArrowUpRight size={14}/></a>}
                </div>
              </div>
            </div>
          </article>)}
        </div>
        <div className="github-line"><span>More experiments and source code live on GitHub.</span><a href="https://github.com/abhitiwari12" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15}/></a></div>
      </section>

      <section className="play-section" id="play">
        <div className="play-inner"><div><span className="eyebrow light">OFF THE CLOCK</span><h2>Not everything<br/>has to be <em>productive.</em></h2><p>Some things are made just for the fun of it. GEORUSH is one of those — a city-distance guessing game I built, with quick rounds, maps and a little friendly competition.</p><a className="btn cream" href="/games/georush/index.html" target="_blank" rel="noreferrer">Play GEORUSH <ArrowUpRight size={16}/></a></div><div className="play-doodle"><Gamepad2 size={94} strokeWidth={1}/><span className="doodle-star">✳</span><span className="doodle-caption">PLAY / MAKE / REPEAT</span></div></div>
        <div className="game-feature">
          <div className="game-feature-art"><span className="game-stamp">ABHI'S GAME CORNER</span><div className="game-map-doodle">↗</div><span className="game-art-title">GEO<br/>RUSH</span><span className="game-art-sub">HOW WELL DO YOU KNOW YOUR DISTANCES?</span></div>
          <div className="game-feature-copy"><span className="card-kicker">MY GAME · V1.3</span><h3>GEORUSH</h3><p>Five rounds. Twenty seconds each. Guess the distance between two cities, lock in your answer and see how close you got.</p><div className="game-tags"><span>India</span><span>World</span><span>Mixed</span><span>Map-based</span></div><div className="game-feature-bottom"><span>Best possible score: 5,000</span><a href="/games/georush/index.html" target="_blank" rel="noreferrer">Play the game <ArrowUpRight size={15}/></a></div></div>
        </div>
      </section>

      <footer className="footer">
        <div><span className="eyebrow light">THAT'S THE TOUR</span><h2>Have a good one.<br/><em>And say hello.</em></h2></div>
        <div className="footer-right"><a className="mail-button" href="mailto:tiwariabhi1211@gmail.com"><Mail size={17}/> tiwariabhi1211@gmail.com <ArrowUpRight size={15}/></a><div className="socials"><a href="https://github.com/abhitiwari12" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/abhi-tiwari-18715727b/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Abhi Tiwari</span><span>Made with curiosity, somewhere in Ahmedabad.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);
