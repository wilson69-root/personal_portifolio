// ... imports
import { type FC } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
  image?: string; // Prepared for future image
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800/80 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(99,102,241,0.1)] dark:shadow-none dark:hover:shadow-none transition-all duration-500 overflow-hidden flex flex-col h-full hover:-translate-y-2 group border border-transparent hover:border-indigo-100 dark:border-slate-700/50 relative">
      <div className="p-8 flex flex-col h-full relative z-10">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-sm font-semibold rounded-full border border-slate-100 dark:border-slate-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex gap-6 pt-6 border-t border-slate-100 dark:border-slate-700/50">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <span className="text-xl">📦</span> Code
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <span className="text-xl">🚀</span> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
