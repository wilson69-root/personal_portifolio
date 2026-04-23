"use client";
import { type FC, useRef, useState, useEffect } from "react";
import Typewriter from "../components/Typewriter";
import Section from "../components/Section";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import ChatWidget from "../components/ChatWidget";
import { Mail, Phone, Github, Linkedin, ArrowRight } from "lucide-react";

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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--accent)/15%,transparent)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-sm font-medium text-[var(--muted)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Welcome to my portfolio
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Wilson Kevin{" "}
            <span className="gradient-text">Ngatia</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-[var(--muted)] mb-6 flex flex-wrap items-center gap-2">
            <span>Hi, I&apos;m a</span>
            <span className="text-[var(--foreground)] font-semibold border-b-2 border-[var(--accent)] pb-0.5">
              <Typewriter text="Tech Professional" speed={90} />
            </span>
          </h2>

          <p className="text-lg text-[var(--muted)] mb-4 flex items-center gap-2">
            <span className="text-xl">🇰🇪</span> Karatina, Nyeri, Kenya
          </p>

          <p className="max-w-2xl text-lg text-[var(--muted)] mb-12 leading-relaxed">
            Motivated and adaptable aspiring tech professional with hands-on exposure to computer
            fundamentals and introductory cloud technologies.{" "}
            <span className="text-[var(--foreground)] font-medium">Problem Solver. Builder. Learner.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--accent)] transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </button>
            <a
              href="/cv/index.html"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] font-semibold rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              View CV
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Section title="⚡ Skills" className="bg-[var(--background)]" id="skills">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {skills.map((group) => (
            <SkillCard key={group.category} category={group.category} items={group.items} />
          ))}
        </div>
      </Section>

      {/* Work Experience Section */}
      <Section title="💼 Work Experience" className="bg-[var(--card-bg)] border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--background)]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">Security Guard</h3>
                <p className="text-[var(--accent)] font-medium">Hatari security services</p>
              </div>
              <span className="px-3 py-1 text-sm font-medium text-[var(--muted)] bg-[var(--card-bg)] rounded-md border border-[var(--border)] w-fit">
                2020 - Present
              </span>
            </div>
            <ul className="space-y-3 text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Access Control and Monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Ensuring the safety of personnel, property, and assets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Maintaining Incident reports</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Conducting patrols and inspections</span>
              </li>
            </ul>
          </div>

          <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--background)]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">Computer Lab Assistant</h3>
                <p className="text-[var(--accent)] font-medium">Antioch Baptist Church Computer Labs</p>
              </div>
              <span className="px-3 py-1 text-sm font-medium text-[var(--muted)] bg-[var(--card-bg)] rounded-md border border-[var(--border)] w-fit">
                2018 - 2019
              </span>
            </div>
            <ul className="space-y-3 text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Ensure user satisfaction and retention by providing responsive tech support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Deliver computer application training to enhance user proficiency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Troubleshoot, install and configure hardware systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Actively involved in church website development, focusing on backend and databases</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="🚀 Featured Projects" className="bg-[var(--background)]" ref={projectsRef} id="projects">
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
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
      <Section title="🎓 Learning" className="bg-[var(--card-bg)] border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:border-[var(--accent)] transition-all"
            >
              <h3 className="font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-[var(--muted)] mb-4">{cert.provider}</p>
              <span className="text-sm font-medium text-[var(--accent)] flex items-center gap-1">
                View Certificate
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="💬 Let's Connect" className="bg-[var(--background)]" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-12 text-lg text-[var(--muted)]">
            Interested in collaborating or have a proposition?{" "}
            <span className="text-[var(--foreground)] font-medium">I&apos;d love to hear from you.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:wilsonkevinngatia@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="tel:+254717854140"
              className="flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <Phone size={20} />
              Phone
            </a>
            <a
              href="https://github.com/wilson-kevinngatia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/wilson-kevin-ngatia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--border)] bg-[var(--card-bg)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Wilson Kevin Ngatia. Built with{" "}
            <span className="text-[var(--accent)]">Next.js</span> &{" "}
            <span className="text-[var(--accent)]">Tailwind CSS</span>.
          </p>
        </div>
      </footer>

      <ScrollToTop />
      <ChatWidget />
    </main>
  );
};

export default HomePage;
