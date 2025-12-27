"use client";
import { type FC } from "react";

type NavbarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

const Navbar: FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            WKN
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400 hidden sm:inline">
            Portfolio
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="#skills"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden md:inline"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden md:inline"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden md:inline"
          >
            Contact
          </a>
          
          <button
            onClick={onToggleTheme}
            className="relative w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle dark mode"
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${
                isDark ? "translate-x-7" : "translate-x-0"
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
