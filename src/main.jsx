import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Download,
  MapPin, Menu, X, GraduationCap, Trophy, ShieldCheck, Sparkles,
  Gamepad2, Flag, Cpu, Zap, Code2
} from "lucide-react";
import "./styles.css";

const projects = [
 {number:"01",title:"CyberRanger",subtitle:"Red / Blue Cybersecurity Research Platform",category:"Research",type:"cyber",featured:true,thumbnail:"https://raw.githubusercontent.com/abhitiwari12/cyberranger/main/docs/presentation/images/mission_control_overview.png",description:"A local red/blue research loop built around an intentionally vulnerable DVWA lab. It generates bounded test candidates, evaluates real responses with a blue-side detector, records evidence for human triage and tracks experiments through a mission-control dashboard.",stack:["Python","FastAPI","Docker Compose","Laya","Gemini API"],proof:"Research prototype",context:"Independent research · Controlled local lab",github:"https://github.com/abhitiwari12/cyberranger"},
 {number:"02",title:"Binance Futures Trading Bot",subtitle:"Python CLI · Exchange API integration",category:"Automation",type:"trading",thumbnail:"/assets/projects/binance-trading.svg",description:"A modular command-line trading bot built to understand exchange API workflows. It supports MARKET, LIMIT and STOP orders, BUY and SELL sides, input validation and request/error logging. Documented for Binance Futures Testnet.",stack:["Python","python-binance","argparse","Logging"],proof:"Testnet project · No real-money execution",github:"https://github.com/abhitiwari12/binance-trading-bot"},
 {number:"03",title:"Fraud Detection Dashboard",subtitle:"Financial transactions · Machine learning",category:"AI / ML",type:"fraud",thumbnail:"/assets/projects/fraud-dashboard.svg",description:"A Streamlit dashboard for analysing transaction data with a saved machine-learning model. Upload a CSV, use demo data or enter a transaction manually, then inspect fraud predictions, confidence scores and visual summaries.",stack:["Python","Scikit-learn","Streamlit","Pandas","Plotly"],proof:"Random Forest model · SMOTE training workflow",github:"https://github.com/abhitiwari12/fraud-detection"},
 {number:"04",title:"MisinfoScan",subtitle:"Misinformation signal analysis prototype",category:"AI / ML",type:"misinfo",thumbnail:"/assets/projects/misinfoscan.svg",description:"A Flask web app that analyses news text or URLs for possible misinformation signals. Heuristic checks look at sensational phrases, capitalisation, punctuation and source-domain signals. A screening prototype, not an independent fact-checking system.",stack:["Python","Flask","HTML","CSS","JavaScript"],proof:"Hackathon demo · Heuristic signal analysis",github:"https://github.com/abhitiwari12/misinfo-detector"},
 {number:"05",title:"Smart Investment Planner",subtitle:"Interactive investment recommendation dashboard",category:"Finance / Data",type:"investment",thumbnail:"/assets/projects/investment-planner.svg",description:"A Streamlit dashboard that scores investment options against a selected risk profile, age group, time horizon and financial goal. Includes compound-growth and SIP calculations, Monte Carlo scenarios, inflation-adjusted projections and Excel export.",stack:["Python","Streamlit","Pandas","NumPy","Plotly"],proof:"Exploratory finance tool · Configurable assumptions",github:"https://github.com/abhitiwari12/investment-planner"},
 {number:"06",title:"theScientist",subtitle:"Multi-agent AI research assistant",category:"University",type:"scientist",thumbnail:"https://raw.githubusercontent.com/abhitiwari12/thescientist/main/output/knowledge_graph.png",description:"A team-built research assistant that retrieves academic papers, builds a knowledge graph, identifies research gaps, proposes hypotheses, reviews them adversarially and generates a structured manuscript.",stack:["Python","CrewAI","LangChain","ChromaDB","NetworkX"],context:"Semester VI · Agentic AI · Team project",github:"https://github.com/abhitiwari12/thescientist",report:"/MiniProject_Report_D&G_AgenticAI.pdf"},
 {number:"07",title:"Mini Compiler",subtitle:"End-to-end compiler with visualisation",category:"University",type:"compiler",thumbnail:"https://raw.githubusercontent.com/TanishaMajmundar/mini-compiler-visualizer/main/docs/screenshots/main-screen.png",description:"A hand-written compiler for a small C-like language, covering lexical, syntax and semantic analysis, parse-tree visualisation, intermediate code and optimisation.",stack:["Python","Streamlit","Graphviz"],context:"Semester VII · Compiler Design · Team project",github:"https://github.com/TanishaMajmundar/mini-compiler-visualizer",live:"https://mini-compiler-visualizer-otvezg8am6edqyyrjagaml.streamlit.app/",report:"/23BTAI62_TiwariAbhi_MiniProjectReport.pdf"},
 {number:"08",title:"SolarTwin AI",subtitle:"Digital twin for solar PV plants",category:"University",type:"solar",thumbnail:"/assets/projects/solar-twin.svg",description:"A Phase-1 prototype for solar PV predictive maintenance, combining a physics-based reference model, AI/ML prediction and anomaly detection, SCADA/MQTT telemetry, a FastAPI backend and a React dashboard.",stack:["Python","FastAPI","React","XGBoost","MQTT"],context:"Semester VII · Software Project Management · Individual project",proof:"Phase-1 prototype",report:"/AbhiTiwari_120.pdf"},
 {number:"09",title:"Real-Time Age, Gender & Skin-Tone Prediction",subtitle:"Computer vision · multi-attribute estimates",category:"AI / ML",type:"realtime-cv",thumbnail:"/assets/projects/realtime-cv.svg",description:"An experimental computer-vision project documented around OpenCV face detection and separate TensorFlow/Keras models for age, gender and skin-tone estimates. This repository currently contains documentation and setup metadata only; the implementation and trained model weights are not included. Model outputs may be inaccurate and require informed consent.",stack:["Python","OpenCV","TensorFlow / Keras","Streamlit"],proof:"Documentation and setup only · No source code or model weights in this repository",context:"Experimental estimates only · Not for profiling or high-impact decisions",github:"https://github.com/abhitiwari12/Realtime-AGE-GENDER-SKINTONE-Prediction"}
];

const experiences = [
 {date:"MAY — JUL 2026",role:"AI / ML Intern",company:"Microweb Solutions",place:"Ahmedabad",text:"Worked on practical machine-learning workflows using Python and Scikit-learn — from data preprocessing and exploratory analysis to feature engineering and model evaluation.",tags:["Python","Scikit-learn","Data Analysis"]},
 {date:"JUN — JUL 2024",role:"Social Media Intern",company:"Karma Foundation",place:"Ahmedabad",text:"Managed content across LinkedIn, Instagram and Facebook, and worked on improving audience engagement through data-informed content strategies.",tags:["Content","Social Media","Engagement"]}
];
const chapters=[{number:"01",label:"About",id:"origin"},{number:"02",label:"Beyond campus",id:"formation"},{number:"03",label:"Volunteering",id:"volunteering"},{number:"04",label:"Projects",id:"work"},{number:"05",label:"Experience",id:"field"},{number:"06",label:"Contact",id:"horizon"}];

function ProjectCard({project,index}) {
 return <article className={"project-card reveal "+(project.featured?"project-card-featured ":"")+(project.closing?"project-card-closing":"")} style={{"--reveal-delay":(index%2)*90+"ms"}}><div className="project-art"><img className="project-thumbnail" src={project.thumbnail} alt={project.title+" project preview"} loading="lazy"/><span className="project-number">{project.number} / 09</span>{project.featured&&<span className="project-featured-tag"><Zap size={12}/> SIGNATURE BUILD</span>}</div><div className="project-details"><div className="project-meta"><span>{project.category}</span><span>BUILD LOG / {project.number}</span></div><h3>{project.title}</h3><div className="project-subtitle">{project.subtitle}</div><p>{project.description}</p><div className="project-stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div>{(project.proof||project.context)&&<div className="project-context">{project.proof||project.context}</div>}{project.context&&project.proof&&<div className="project-context project-context-extra">{project.context}</div>}<div className="project-actions">{project.github&&<a href={project.github} target="_blank" rel="noreferrer">SOURCE CODE <ArrowUpRight size={13}/></a>}{project.live&&<a href={project.live} target="_blank" rel="noreferrer">LIVE DEMO <ArrowUpRight size={13}/></a>}{project.report&&<a href={project.report} target="_blank" rel="noreferrer">PROJECT REPORT <ArrowUpRight size={13}/></a>}</div></div></article>;
}

function App() {
 const [menuOpen,setMenuOpen]=useState(false);
 const [filter,setFilter]=useState("All");
 const [activeChapter,setActiveChapter]=useState("origin");
 const [progress,setProgress]=useState(0);
 const filteredProjects=useMemo(()=>projects.filter(p=>filter==="All"||p.category===filter),[filter]);

 useEffect(()=>{
   const nodes=document.querySelectorAll(".reveal");
   if(!("IntersectionObserver" in window)){nodes.forEach(n=>n.classList.add("is-visible"));return;}
   const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:"0px 0px -38px 0px"});
   nodes.forEach(node=>{if(!node.classList.contains("is-visible"))observer.observe(node);});
   return ()=>observer.disconnect();
 },[filter]);

 useEffect(()=>{
   const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?Math.min(100,window.scrollY/max*100):0);};
   window.addEventListener("scroll",update,{passive:true});update();
   const sections=chapters.map(c=>document.getElementById(c.id)).filter(Boolean);
   if(!("IntersectionObserver" in window))return ()=>window.removeEventListener("scroll",update);
   const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActiveChapter(visible.target.id);},{rootMargin:"-25% 0px -58% 0px",threshold:[0,.1,.3,.6]});
   sections.forEach(section=>observer.observe(section));
   return ()=>{window.removeEventListener("scroll",update);observer.disconnect();};
 },[]);

 return <div className="journey-site" id="top">
  <div className="global-progress" style={{width:progress+"%"}}/><div className="ambient-grid" aria-hidden="true"/>
  <header className="journey-header">
   <a className="journey-logo" href="#top">AT<span>.</span><small>ABHI TIWARI</small></a>
   <nav className={menuOpen?"journey-nav journey-nav-open":"journey-nav"} id="journey-navigation">{chapters.map(c=><a key={c.id} href={"#"+c.id} className={activeChapter===c.id?"nav-active":""} onClick={()=>setMenuOpen(false)}><span>{c.number}</span>{c.label}</a>)}</nav>
   <div className="header-end"><span className="system-status"><i/> OPEN TO GET IN TOUCH</span><a className="header-hello" href="mailto:tiwariabhi1211@gmail.com">SAY HELLO <ArrowUpRight size={13}/></a><button className="journey-menu" type="button" onClick={()=>setMenuOpen(!menuOpen)} aria-controls="journey-navigation" aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button></div>
  </header>
  <main>
   <section className="journey-hero" id="beginning">
    <div className="hero-copy">
      <div className="hero-eyebrow">B.Tech Computer Science · AI & Machine Learning</div>
      <p className="hero-greeting">Hi, I'm Abhi Tiwari.</p>
      <h1>Curious by nature.<br/><em>A builder by choice.</em></h1>
      <p className="hero-lede">I'm studying Computer Science at Karnavati University, exploring AI & Machine Learning, and learning by making things. Outside class, you'll usually find me around cricket, kabaddi or NCC.</p>
      <div className="hero-role-strip"><span>AI & ML STUDENT</span><i/><span>NCC C CERTIFICATE</span><i/><span>DISCIPLINE VICE CHAIRPERSON · AAYAM</span></div>
      <div className="hero-buttons"><a className="journey-primary" href="#work">SEE WHAT I'VE BUILT <ArrowDown size={15}/></a><a className="journey-secondary" href="/Abhi-Tiwari-CV.pdf" target="_blank" rel="noreferrer"><Download size={15}/> DOWNLOAD CV</a></div>
    </div>
    <div className="hero-scene">
      <div className="scene-photo"><img src="/assets/abhi-portrait.jpg" alt="Abhi Tiwari"/><span className="photo-caption"><b>ABHI TIWARI</b><small>AHMEDABAD, INDIA</small></span></div>
      <div className="scene-float scene-float-a"><span>COMPUTER SCIENCE<br/><b>AI & MACHINE LEARNING</b></span></div>
    </div>
   </section>
   <div className="signal-marquee" aria-label="A few things about me"><div className="signal-track"><span>AI & MACHINE LEARNING</span><i>·</i><span>CRICKET</span><i>·</i><span>KABADDI</span><i>·</i><span>NCC</span><i>·</i><span>BUILDING SIDE PROJECTS</span></div></div>

   <section className="chapter-section origin-section" id="origin">
    <div className="chapter-index reveal"><span>01</span><i/><span>A LITTLE ABOUT ME</span></div><div className="origin-grid"><div className="origin-heading reveal"><h2>Still learning.<br/>Always <em>trying.</em></h2><p>I like understanding how things work, then seeing whether I can make something useful out of what I've learned.</p></div><div className="origin-story reveal"><div className="story-marker"><span>2023</span><i/></div><div className="story-content">
      <span className="story-label">EDUCATION · 2023 — 2027</span>
      <div className="education-university">
        <img src="https://pbs.twimg.com/profile_images/1204439829519503366/RMMR6rvz_400x400.jpg" alt="Karnavati University logo" loading="lazy"/>
        <div className="education-university-name">
          <h3>Karnavati University</h3>
          <span className="education-accreditation">NAAC A+ Accredited</span>
        </div>
      </div>
      <h4 className="education-degree">B.Tech · Computer Science & Engineering</h4>
      <p>Specialisation in Artificial Intelligence & Machine Learning at the Unitedworld Institute of Technology (UIT). University has given me room to experiment, work with different people and learn through hands-on projects.</p>
      <div className="story-tags"><span>AI & MACHINE LEARNING</span><span>UNITEDWORLD INSTITUTE OF TECHNOLOGY</span><span>GANDHINAGAR, GUJARAT</span></div>
    </div><div className="story-next"><span>WHAT I DO OUTSIDE CLASS</span><ArrowDown size={16}/></div></div></div>
        <div className="origin-foot reveal"><span>RIGHT NOW</span><b>Studying, building and playing.</b><span>AHMEDABAD, INDIA <i/></span></div>
   </section>

   <section className="formation-section" id="formation"><div className="formation-inner section-wrap">
    <div className="chapter-index chapter-index-light reveal"><span>02</span><i/><span>BEYOND THE CLASSROOM</span></div>
    <div className="formation-heading reveal"><div><h2>Some things<br/>you learn <em>outside.</em></h2></div><p>Sport, NCC and student leadership have shaped my university experience just as much as my coursework.</p></div>
    <div className="formation-card-grid">
      <article className="formation-card ncc-compact-card reveal">
        <div className="formation-card-head">
          <img className="ncc-emblem" src="https://images.seeklogo.com/logo-png/37/1/national-cadet-corps-logo-png_seeklogo-371256.png" alt="National Cadet Corps emblem" loading="lazy"/>
          <span className="formation-card-kicker">NATIONAL CADET CORPS</span>
        </div>
        <h3>NCC <em>C Certificate.</em></h3>
        <p>Being an NCC cadet has taught me discipline, teamwork and responsibility. I've also attended two CATC camps.</p>
        <div className="formation-card-tags"><span>C CERTIFICATE</span><span>02 CATC CAMPS</span></div>
      </article>
      <article className="formation-card leadership-compact-card reveal">
        <div className="formation-card-head">
          <Flag size={19}/>
          <span className="formation-card-kicker">STUDENT LEADERSHIP</span>
        </div>
        <h3>Discipline Vice <em>Chairperson.</em></h3>
        <p>Helping manage discipline and coordination during college events and activities with the AAYAM committee.</p>
        <a className="aayam-compact-link" href="https://aayam.online/team" target="_blank" rel="noreferrer" aria-label="Visit the AAYAM team page">
          <img className="aayam-logo" src="/assets/aayam-logo.svg" alt="AAYAM logo" loading="lazy"/>
          <span className="aayam-name"><strong>AAYAM</strong><small>UIT Students' Committee</small></span>
          <span className="aayam-card-link">VIEW TEAM <ArrowUpRight size={12}/></span>
        </a>
      </article>
      <article className="formation-card sports-compact-card reveal">
        <div className="formation-card-head">
          <Trophy size={19}/>
          <span className="formation-card-kicker">UNIVERSITY SPORTS</span>
        </div>
        <h3>Cricket & <em>Kabaddi.</em></h3>
        <p>Part of KU's main sports teams. Represented the university in All India University Kabaddi and won an inter-university tournament.</p>
        <div className="formation-card-tags"><span>KU MAIN TEAM</span><span>ALL INDIA UNIVERSITY</span></div>
      </article>
      <article className="formation-card curiosity-compact-card reveal">
        <div className="formation-card-head">
          <Sparkles size={19}/>
          <span className="formation-card-kicker">THE MINDSET</span>
        </div>
        <h3>Ideas don't <em>sit still.</em></h3>
        <p>AI, products, startups, random questions and the satisfaction of turning a rough thought into something real.</p>
        <div className="formation-card-tags"><span>AI & PRODUCTS</span><span>ALWAYS EXPLORING</span></div>
      </article>
    </div>
   </div></section>

   <section className="volunteer-section chapter-section" id="volunteering"><div className="volunteer-inner section-wrap">
    <div className="chapter-index reveal"><span>03</span><i/><span>VOLUNTEERING & EVENT CREW</span></div>
    <div className="volunteer-heading reveal"><div><h2>Being part of<br/>something <em>bigger.</em></h2></div><p>A few university and conference events where I volunteered in different capacities and got to work as part of a team.</p></div>
    <div className="volunteer-grid">
      <article className="volunteer-card reveal">
        <div className="volunteer-badge-frame"><img src="/assets/volunteering/security-team.webp" alt="Karnavati University Student Security Council Team Security badge, Freshers 2K25" loading="lazy"/></div>
        <div className="volunteer-card-body">
          <div className="volunteer-meta"><span>FRESHERS 2K25</span><span>01 / 04</span></div>
          <h3>Team Security</h3>
          <p>Karnavati University · Student Security Council</p>
        </div>
      </article>
      <article className="volunteer-card reveal">
        <div className="volunteer-badge-frame"><img src="/assets/volunteering/aria-ro-crew.webp" alt="AriaRo4.0 National Level Technical Symposium crew badge" loading="lazy"/></div>
        <div className="volunteer-card-body">
          <div className="volunteer-meta"><span>TECHNICAL SYMPOSIUM</span><span>02 / 04</span></div>
          <h3>AriaRo 4.0</h3>
          <p>A National Level Technical Symposium</p>
        </div>
      </article>
      <article className="volunteer-card reveal">
        <div className="volunteer-badge-frame"><img src="/assets/volunteering/garba-access.webp" alt="Karnavati University Garba Mahotsav all area access badge, 27 to 30 September 2025" loading="lazy"/></div>
        <div className="volunteer-card-body">
          <div className="volunteer-meta"><span>27–30 SEPTEMBER 2025</span><span>03 / 04</span></div>
          <h3>Garba Mahotsav</h3>
          <p>Karnavati University</p>
        </div>
      </article>
      <article className="volunteer-card reveal">
        <div className="volunteer-badge-frame"><img src="/assets/volunteering/isppd-conference.webp" alt="Ahmedabad 44th ISPPD National Conference 2023 IT badge" loading="lazy"/></div>
        <div className="volunteer-card-body">
          <div className="volunteer-meta"><span>AHMEDABAD · 2023</span><span>04 / 04</span></div>
          <h3>44th ISPPD</h3>
          <p>ISPPD National Conference</p>
        </div>
      </article>
    </div>
   </div></section>


   <section className="build-section chapter-section" id="work"><div className="section-wrap">
    <div className="chapter-index reveal"><span>04</span><i/><span>PROJECTS</span></div><div className="build-heading reveal"><div><h2>A few things<br/>I've <em>built.</em></h2></div><p>Here are some projects I've worked on during university and in my own time. Each one taught me something different.</p></div>
    <div className="build-countline reveal"><span><b>{String(projects.length).padStart(2,"0")}</b> PROJECTS</span><span>SELECT A SIGNAL TO FILTER <ArrowDown size={13}/></span></div>
    <div className="project-filters reveal" role="group" aria-label="Filter projects">{["All","Research","Automation","AI / ML","Finance / Data","University"].map(item=><button type="button" key={item} aria-pressed={filter===item} className={filter===item?"filter-active":""} onClick={()=>setFilter(item)}>{item}</button>)}<span className="filter-results">{String(filteredProjects.length).padStart(2,"0")} RESULTS</span></div>
    <div className="journey-project-grid">{filteredProjects.map((project,i)=><ProjectCard key={project.number} project={project} index={i}/>)}</div>
    <div className="build-end reveal"><span>THERE'S ALWAYS ANOTHER IDEA</span><a href="https://github.com/abhitiwari12" target="_blank" rel="noreferrer">FOLLOW THE CODE <ArrowUpRight size={14}/></a></div>
   </div></section>

   <section className="field-section" id="field"><div className="field-inner section-wrap">
    <div className="chapter-index chapter-index-light reveal"><span>05</span><i/><span>EXPERIENCE</span></div><div className="field-heading reveal"><h2>Learning by<br/><em>doing the work.</em></h2><p>A couple of opportunities that helped me take what I was learning and apply it with real teams.</p></div>
    <div className="field-timeline">{experiences.map((item,i)=><article className="field-entry reveal" key={item.company}><div className="field-date"><span>0{i+1}</span><b>{item.date}</b></div><div className="field-node"><i/></div><div className="field-entry-content"><div className="field-company">{item.company}<span> / {item.place}</span></div><h3 className="field-role-title">{item.role}</h3><p>{item.text}</p><div className="field-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}<article className="field-entry field-education reveal"><div className="field-date"><span>NOW</span><b>2023 — 2027</b></div><div className="field-node"><i/></div><div className="field-entry-content"><div className="field-company">THE FOUNDATION</div><h3>Karnavati University</h3><p>B.Tech Computer Science · Artificial Intelligence & Machine Learning.</p><div className="field-tags"><span>LEARNING</span><span>EXPERIMENTING</span><span>GROWING</span></div></div></article></div>
   </div></section>

   <section className="sidequest-section"><div className="sidequest-inner section-wrap"><div className="sidequest-copy reveal"><div className="chapter-index"><span>A SIDE PROJECT</span><i/><span>MADE FOR FUN</span></div><h2>A little game<br/>I made: <em>GEORUSH.</em></h2><p>GEORUSH is a geography guessing game I built for fun. It brings together maps, quick decisions and a bit of friendly competition. Give it a try.</p><a className="sidequest-button" href="/games/georush/index.html" target="_blank" rel="noreferrer">ENTER GEORUSH <ArrowUpRight size={15}/></a></div><div className="georush-art reveal"><div className="geo-grid"/><div className="geo-top"><span>ABHI'S GAME CORNER</span><span>V1.3 / PLAYABLE</span></div><div className="geo-routes"><i/><i/><i/></div><div className="geo-pin geo-pin-a"/><div className="geo-pin geo-pin-b"/><div className="geo-title">GEO<br/><em>RUSH</em></div><div className="geo-bottom"><span>INDIA / WORLD / MIXED</span><Gamepad2 size={19}/></div></div></div></section>

   <section className="inspiration-chapter section-wrap reveal"><div className="inspiration-visual"><div className="inspiration-halo"/><span className="inspiration-18">18</span><img src="/assets/virat-kohli-user-photo.png" alt="Virat Kohli celebrating for India" loading="lazy"/><span className="inspiration-tag">INDIA / THE STANDARD</span></div><div className="inspiration-text"><div className="chapter-index"><span>ONE OF MY INSPIRATIONS</span><i/><span>CRICKET</span></div><h2>Always inspired<br/>by <em>the game.</em></h2><p>I've always admired Virat Kohli — not just for his cricket, but for the consistency and work ethic behind it. Cricket is a big part of my life, and that mindset is something I try to carry into everything else.</p><div className="inspiration-values"><span>01 / DISCIPLINE</span><span>02 / SELF-BELIEF</span><span>03 / CONSISTENCY</span></div></div></section>

   <section className="horizon-section" id="horizon"><div className="horizon-stars" aria-hidden="true"/><div className="horizon-content section-wrap"><div className="chapter-index chapter-index-light reveal"><span>06</span><i/><span>GET IN TOUCH</span></div><div className="horizon-orbit reveal"><div className="horizon-core">NEXT<br/><span>CHAPTER</span></div><i className="horizon-orbit-one"/><i className="horizon-orbit-two"/><i className="horizon-orbit-three"/><span className="horizon-spark">✳</span></div><div className="horizon-copy reveal"><span className="horizon-overline">THANKS FOR MAKING IT THIS FAR</span><h2>Have something<br/>in <em>mind?</em></h2><p>I'm always happy to meet people, hear about interesting projects and explore opportunities where I can learn and contribute.</p><a href="mailto:tiwariabhi1211@gmail.com" className="horizon-contact"><Mail size={16}/> GET IN TOUCH <ArrowUpRight size={16}/></a></div></div>
    <footer className="journey-footer section-wrap"><a className="footer-logo" href="#top">AT<span>_</span></a><div className="footer-socials"><a href="https://github.com/abhitiwari12" target="_blank" rel="noreferrer"><Github size={15}/> GITHUB</a><a href="https://www.linkedin.com/in/abhi-tiwari-18715727b/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LINKEDIN</a><a href="/Abhi-Tiwari-CV.pdf" target="_blank" rel="noreferrer"><Download size={15}/> RÉSUMÉ</a></div><span className="footer-credit">© {new Date().getFullYear()} ABHI TIWARI </span><a className="back-top" href="#top">BACK TO TOP ↑</a></footer>
   </section>
  </main>
 </div>;
}
createRoot(document.getElementById("root")).render(<App/>);
