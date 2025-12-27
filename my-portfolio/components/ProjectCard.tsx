import { type FC } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 flex flex-col h-full hover:shadow-xl transform hover:-translate-y-1 transition-all border border-gray-100 dark:border-gray-600">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 flex-grow mb-4 leading-relaxed">{description}</p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <li
            key={tech}
            className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full px-3 py-1"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm hover:underline transition-colors"
        >
          🔗 GitHub
        </a>
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm hover:underline transition-colors"
          >
            🌐 Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
