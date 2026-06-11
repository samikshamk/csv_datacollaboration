import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Heading from "./Heading";

function Navbar() {
  const { isDark, toggleDark } = useTheme();

  return (
    <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white dark:bg-gray-900 bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          <Heading title="CSV Collaboration" style="mb-0"/>
        </a>
        <div className="hidden lg:block">
          {/* Theme Toggle */}
          <button
            onClick={toggleDark}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun size={16} className="text-yellow-400" />
            ) : (
              <Moon size={16} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
