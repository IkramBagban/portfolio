import React from "react";
import { NavLink } from "./NavLink";
import { NAV_ITEMS } from "../../assets/utils/constants";
import { MenuIcon, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 shadow-lg shadow-green-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-green-500 font-bold text-xl md:text-2xl">
            IB
          </span>
          <span className="ml-2 text-white font-light text-lg md:text-xl">
            Ikram Bagban
          </span>
        </div>
        <button
          className="md:hidden text-white hover:text-green-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
        <nav className="hidden md:flex space-x-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              activeSection={activeSection}
            />
          ))}
          <ThemeSwitcher
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </nav>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 p-4 border-t border-green-900/30">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                id={item.id}
                label={item.label}
                activeSection={activeSection}
              />
            ))}
            <ThemeSwitcher
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
