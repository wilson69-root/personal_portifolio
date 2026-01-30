// ... imports
import { type FC } from "react";

type NavbarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

const Navbar: FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 cursor-default">
            WKN
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400 hidden sm:inline font-medium tracking-wide">
            Portfolio
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a
              href="#skills"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
            </a>
          </div>

          <button
            onClick={onToggleTheme}
            className="relative w-14 h-7 bg-gray-200 dark:bg-slate-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 hover:bg-gray-300 dark:hover:bg-slate-600"
            aria-label="Toggle dark mode"
          >
            <div
              className={`w-5 h-5 rounded-full bg-white dark:bg-slate-200 shadow-sm transform transition-transform duration-300 flex items-center justify-center text-[10px] ${isDark ? "translate-x-7" : "translate-x-0"
                }`}
            >
              {isDark ? "🌙" : "☀️"}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
