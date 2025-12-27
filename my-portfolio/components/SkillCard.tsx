import { type FC } from "react";

type SkillCardProps = {
  category: string;
  items: string[];
};

const SkillCard: FC<SkillCardProps> = ({ category, items }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-all border-t-4 border-blue-500 dark:border-blue-400">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{category}</h3>
      <ul className="grid grid-cols-2 gap-2">
        {items.map((skill) => (
          <li
            key={skill}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-gray-800 dark:text-gray-200 text-sm rounded-lg px-3 py-2 text-center hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/40 dark:hover:to-blue-700/40 transition-all"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
