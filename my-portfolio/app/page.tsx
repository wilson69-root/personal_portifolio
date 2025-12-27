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
    items: ["Python", "Web Development", "MySQL", "HTML/CSS", "JavaScript"],
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
    link: "#", // Replace with actual certificate link
  },
  {
    name: "Cloud Practitioner Certification",
    provider: "Ajira Digital Programme",
    link: "#", // Replace with actual badge link
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
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-24 text-center bg-blue-50/50 bg-dot-pattern dark:bg-gray-900">

        <h1 className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 dark:from-blue-400 dark:to-teal-300">
          Wilson Kevin Ngatia 🚀
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-8">
          <Typewriter text="Tech Professional" speed={100} />
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-2">
          📍 Karatina, Nyeri, Kenya
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Motivated and adaptable aspiring tech professional with hands-on exposure to computer
          fundamentals and introductory cloud technologies. Enthusiastic about developing skills
          in a professional setting through problem-solving and continuous improvement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-medium"
          >
            🎯 View Projects
          </button>
          <a
            href="/cv/Wilson CV.pdf"
            download
            className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-xl shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-medium"
          >
            📄 Download CV
          </a>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="⚡ Skills" className="py-16 bg-gray-50 dark:bg-gray-800" id="skills">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <SkillCard key={group.category} category={group.category} items={group.items} />
          ))}
        </div>
      </Section>

      {/* Work Experience Section */}
      <Section title="💼 Work Experience" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-md p-6 border-l-4 border-blue-600 dark:border-blue-400">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Computer Lab Assistant</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Antioch Baptist Church Computer Labs</p>
              </div>
              <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">2022 - Present</span>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span>Ensure user satisfaction and retention by providing responsive tech support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span>Deliver computer application training to enhance user proficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span>Troubleshoot, install and configure hardware systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span>Actively involved in church website development, focusing on backend and databases</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="🚀 Featured Projects" className="py-16 bg-gray-50 dark:bg-gray-800" ref={projectsRef} id="projects">
        <div className="grid gap-8 md:grid-cols-2">
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
      <Section title="🎓 Certifications & Learning" className="py-16 bg-white dark:bg-gray-900">
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-6 hover:shadow-md transition-all border-l-4 border-blue-600 dark:border-blue-400"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{cert.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{cert.provider}</p>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="💬 Let's Connect" className="py-16 bg-gray-50 dark:bg-gray-800 text-center" id="contact">
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Interested in collaborating or have a question? I'd love to hear from you!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:wilsonkevinngatia@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all font-medium"
          >
            <span>📧</span>
            <span>Email</span>
          </a>
          <a
            href="tel:+254717854140"
            className="flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all font-medium"
          >
            <span>📱</span>
            <span>Phone</span>
          </a>
          <a
            href="https://github.com/wilson-kevinngatia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all font-medium"
          >
            <span>🐙</span>
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/wilson-kevin-ngatia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all font-medium"
          >
            <span>🔗</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-8 text-center transition-colors duration-300">
        <p className="text-sm">
          © {new Date().getFullYear()} Wilson Kevin Ngatia. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
      
      <ScrollToTop />
    </main>
  );
};

export default HomePage;
