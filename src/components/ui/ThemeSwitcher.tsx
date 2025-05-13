import React from 'react'
import {motion} from 'motion/react'
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher: React.FC<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <motion.button
      className={`p-2 rounded-full ${isDarkMode ? 'text-white hover:text-green-500' :'bg-blue-100 hover:bg-blue-200'} text-blue-600 transition-all duration-300`}
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      whileHover={{ scale: 1.1 }}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon  size={20} />}
    </motion.button>
  );
};
export default ThemeSwitcher