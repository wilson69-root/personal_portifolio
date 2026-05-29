import { type FC } from "react";

type SkillCardProps = {
  category: string;
  items: string[];
};

const SkillCard: FC<SkillCardProps> = ({ category, items }) => {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-lg">
      <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1.5 text-sm font-medium text-[var(--muted)] bg-[var(--background)] rounded-md border border-[var(--border)]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
