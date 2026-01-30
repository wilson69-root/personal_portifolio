"use client";
import { type FC, useRef, useState, useEffect } from "react";
import Typewriter from "../components/Typewriter";
import Section from "../components/Section";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import FadeIn from "../components/FadeIn";


const skills = [
  {
    category: "IT Support & Systems 🛠️",
    items: ["Hardware Troubleshooting", "Software Installation", "Linux", "Microsoft Suite"],
  },
  {
    category: "Software Development & Technical Tools 💻",
    items: ["Python", "Web Development", "MySQL", "HTML/CSS"],
  },
  {
    category: "Cloud & Databases ☁️",
    items: ["Cloud Computing", "MySQL", "Backend Development", "Database Management"],
  },
  {
    category: "Soft Skills 🤝",
    items: ["Communication", "Problem Solving", "Adaptability", "Team Collaboration", "Time Management", "Willingness to Learn"],
  },
];

const projects = [
  {
    title: "Uplift_One 🎥",
    description:
      "Privacy-first platform that enables the creation and management of AA-style meetings while prioritizing anonymity, trust, and user safety.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebRTC"],
    githubLink: "https://github.com/wilson-kevinngatia/uplift_one",
    demoLink: "https://uplift-one.vercel.app",
  },
  {
    title: "FundiConnect 🤝",
    description:
      "Modern service marketplace platform built during Power Learn Project bootcamp, connecting customers with trusted service providers using AI-powered matching and real-time location services.",
    techStack: ["React", "AI Integration", "Location Services", "Backend APIs"],
    githubLink: "https://github.com/wilson-kevinngatia/fundiconnect",
  },
];

const certifications = [
  {
    name: "AI for Software Engineering",
    provider: "Power Learn Project",
    link: "https://drive.google.com/file/d/1zYdQC0-tlDWpIIXwolYsTO1wH6K4ecnT/view?usp=drive_link",
  },
  {
    name: "ALX AI Starter Kit",
    provider: "ALX africa",
    link: "https://drive.google.com/file/d/1_qvME7CornVICjW070QlciiXMgYKehYV/view?usp=drive_link",
  },
  {
    name: "Cloud Practitioner Certification",
    provider: "Ajira Digital Programme",
    link: "https://www.credly.com/badges/168a06ee-38a1-4954-8ee2-69cebca130b9/public_url",
  },

];

const HomePage: FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 min-h-screen">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Hero Section */}
      <Section className="relative pt-32 pb-32 text-center overflow-hidden dark:bg-slate-900">
        {/* Aurora Background Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none opacity-60 dark:opacity-40">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-indigo-100 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium animate-fade-in-up shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Welcome to my portfolio
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 tracking-tighter drop-shadow-sm leading-[1.1]">
            Wilson Kevin <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 animate-gradient-x">Ngatia</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-medium text-slate-600 dark:text-slate-300 mb-8 flex flex-wrap items-center justify-center gap-2 tracking-tight">
            <span>Hi, I'm a</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-1">
              <Typewriter text="Tech Professional" speed={90} />
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-4 flex items-center justify-center gap-2 font-medium">
            <span className="text-2xl">🇰🇪</span> Karatina, Nyeri, Kenya
          </p>

          <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-light">
            Motivated and adaptable aspiring tech professional with hands-on exposure to computer
            fundamentals and introductory cloud technologies. <span className="text-slate-900 dark:text-slate-200 font-medium">Problem Solver. Builder. Learner.</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <a
              href="/cv/Wilson_CV.pdf"
              download
              className="group px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-full font-bold text-lg shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <span>Download CV</span>
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="⚡ Skills" className="py-32 relative" id="skills">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto relative z-10">
          {skills.map((group) => (
            <SkillCard key={group.category} category={group.category} items={group.items} />
          ))}
        </div>
      </Section>

      {/* Work Experience Section */}
      <Section title="💼 Work Experience" className="py-32 relative">
        <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-800/20 -skew-y-3 z-0 transform origin-top-left scale-110"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all p-10 border border-white/50 dark:border-slate-700/50">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Computer Lab Assistant</h3>
                <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium">Antioch Baptist Church Computer Labs</p>
              </div>
              <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full text-sm font-semibold tracking-wide mt-4 md:mt-0">2022 - Present</span>
            </div>
            <ul className="space-y-4 text-lg text-slate-600 dark:text-slate-300/90">
              <li className="flex items-start gap-4">
                <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0 text-xl">•</span>
                <span>Ensure user satisfaction and retention by providing responsive tech support</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0 text-xl">•</span>
                <span>Deliver computer application training to enhance user proficiency</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0 text-xl">•</span>
                <span>Troubleshoot, install and configure hardware systems</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0 text-xl">•</span>
                <span>Actively involved in church website development, focusing on backend and databases</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="🚀 Featured Projects" className="py-32" ref={projectsRef} id="projects">
        <div className="grid gap-10 md:grid-cols-2 max-w-7xl mx-auto">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.title}
              title={proj.title}
              description={proj.description}
              techStack={proj.techStack}
              githubLink={proj.githubLink}
              demoLink={proj.demoLink}
            />
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section title="🎓 Learning" className="py-32 bg-slate-50/50 dark:bg-slate-900/50 relative">
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto relative z-10">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-[calc(50%-2rem)] bg-white dark:bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all p-8 border border-slate-100 dark:border-slate-700/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.516L20.297 19H3.703L12 5.516z" /></svg>
              </div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{cert.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">{cert.provider}</p>
                </div>
              </div>
              <div className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                View Certificate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="💬 Let's Connect" className="py-32 text-center relative overflow-hidden" id="contact">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <p className="mb-12 text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Interested in collaborating or have a proposition? <br />
            <span className="text-slate-900 dark:text-white font-medium">I'd love to hear from you.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:wilsonkevinngatia@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold border border-slate-200 dark:border-slate-700"
            >
              <span className="text-2xl">📧</span>
              <span>Email</span>
            </a>
            <a
              href="tel:+254717854140"
              className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold border border-slate-200 dark:border-slate-700"
            >
              <span className="text-2xl">📱</span>
              <span>Phone</span>
            </a>
            <a
              href="https://github.com/wilson-kevinngatia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold border border-slate-200 dark:border-slate-700"
            >
              <span className="text-2xl">🐙</span>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/wilson-kevin-ngatia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold border border-slate-200 dark:border-slate-700"
            >
              <span className="text-2xl">🔗</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 text-center transition-colors duration-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Wilson Kevin Ngatia. Built with <span className="text-indigo-400">Next.js</span> & <span className="text-cyan-400">Tailwind CSS</span>.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  );
};

export default HomePage;
