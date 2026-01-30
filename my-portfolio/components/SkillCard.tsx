// ... imports
import { type FC } from "react";

type SkillCardProps = {
  category: string;
  items: string[];
};

const SkillCard: FC<SkillCardProps> = ({ category, items }) => {
  return (
    <div className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(99,102,241,0.1)] dark:shadow-none dark:hover:shadow-none transition-all duration-500 hover:-translate-y-2 group border border-transparent hover:border-indigo-100 dark:border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2.5">
        {items.map((skill) => (
          <li
            key={skill}
            className="bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg px-4 py-2 transition-all group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 cursor-default"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
