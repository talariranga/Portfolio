import { useState } from "react";
import "./App.css";

import {
  FaAngular,
  FaMobileAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaLaptopCode,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const start = new Date("2022-08-01");
  const now = new Date();

  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const experienceText = `${years} yrs ${months} mos`;

  const skills = [
    "Angular",
    "TypeScript",
    "Ionic",
    "Cordova",
    "Capacitor",
    "HTML5",
    "CSS3",
    "JavaScript",
    // "PostgreSQL",
    // "MySQL",
    "Git",
    "REST APIs",
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <span className="tag">Software Engineer</span>

          <h1>
            Hi, I'm <span>Ranganayakulu Talari</span>
          </h1>

          <div className="typing">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Mobile App Developer",
                2000,
                "Angular Specialist",
                2000,
                "Ionic & Capacitor Developer",
                2000,
              ]}
              repeat={Infinity}
              speed={50}
            />
          </div>

          <p>
            Frontend & Mobile Application Developer with expertise in Angular, Ionic, Capacitor, and Cordova. Experienced in building scalable enterprise applications, payment integrations, and cross-platform mobile apps.
          </p>

          <div className="socials">
            <a href="mailto:thalariranga359@gmail.com">
              <FaEnvelope />
            </a>

            <a
              href="https://linkedin.com/in/talari-ranganayakulu-178463333"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <div className="glass">
          <p>
            Software Engineer with {experienceText} of experience specializing in Angular, Ionic, Cordova, and Capacitor for building scalable web and cross-platform mobile applications. Strong experience in enterprise-grade applications, payment gateway integrations, and RESTful API development. Skilled in delivering responsive UI, performance optimization, and publishing apps to Android and iOS platforms. Comfortable working in Agile environments and collaborating with cross-functional teams to deliver high-quality software solutions.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>

        <div className="skills-groups">

          <div className="skill-group">
            <h3>Frontend Engineering</h3>
            <div className="badges">
              <span>Angular</span>
              <span>React.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Mobile App Development</h3>
            <div className="badges">
              <span>Ionic</span>
              <span>Cordova</span>
              <span>Capacitor</span>
            </div>
          </div>

          {/* <div className="skill-group">
            <h3>Backend / APIs</h3>
            <div className="badges">
              <span>REST APIs</span>
              <span>MySQL</span>
              <span>PostgreSQL</span>
            </div>
          </div> */}

          <div className="skill-group">
            <h3>Mobile App Development</h3>
            <div className="badges">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>SAP Business Application Studio</span>
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="timeline">
          <div className="glass">
            <h3>Hallmark Global Technologies</h3>
            <span>Nov 2024 – Present</span>
            <p>
              Started as a Web Developer working on Angular-based applications, focusing on UI development and REST API integration.
              Later transitioned into Mobile Application Development using Ionic, Cordova, and Capacitor.
              Successfully implemented PayU payment gateway integration in Cordova-based mobile applications.
              Currently working on Android and iOS app development and release management using Ionic, Cordova, and Capacitor.
            </p>
          </div>

          <div className="glass">
            <h3>SyngyMAXIM Solutions</h3>
            <span>Aug 2022 – Oct 2024</span>

            <p>
              Worked as a Web Developer on Angular-based applications, focusing on building
              responsive user interfaces and reusable components. Involved in REST API
              integration, performance optimization, and delivering scalable web applications
              following Agile development practices.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="projects">
          <div className="glass project">
            <FaMobileAlt size={35} />
            <h3>E-Tutor Mobile App</h3>
            <p>
              Mobile learning application designed for exams, student dashboards, teacher dashboards, resource management, and performance analytics with role-based access control. Built using Ionic and Angular with REST API integration to deliver a smooth cross-platform experience across Android and iOS.
            </p>
          </div>

          <div className="glass project">
            <FaMobileAlt size={35} />
            <h3>PayU Payment Gateway Integration</h3>
            <p>
              Integrated PayU payment gateway into a Cordova-based mobile application,
              implementing a secure and seamless payment workflow for Android and iOS platforms.
            </p>
          </div>

          <div className="glass project">
            <FaLaptopCode size={35} />
            <h3>T.I.M.E</h3>
            <p>
              Developed a Student Information System (SIS) for a coaching institute with
              multi-branch support and role-based access control. The system is used by
              administrative staff to manage student inquiries, enrollments, and course-based
              payments. Built using Angular with a focus on clean architecture and dynamic
              feature development based on client requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Let's Connect</h2>

        <p>📧 thalariranga359@gmail.com</p>
        <p>📱 +91 8106949871</p>

        <a
          className="btn"
          href="https://linkedin.com/in/talari-ranganayakulu-178463333"
          target="_blank"
          rel="noreferrer"
        >
          View LinkedIn
        </a>
      </section>
    </div>
  );
}

export default App;