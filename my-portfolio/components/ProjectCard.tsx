import { type FC } from "react";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
  image?: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-lg group">
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h3>

        <p className="text-[var(--muted)] mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium text-[var(--muted)] bg-[var(--background)] rounded border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex gap-4 pt-4 border-t border-[var(--border)]">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            <Github size={18} />
            Code
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
