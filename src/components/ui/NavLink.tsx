import { scrollToSection } from "../../assets/utils/helpers";

interface NavLinkProps {
  id: string;
  label: string;
  activeSection: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ id, label, activeSection }) => (
  <button
    className={`px-4 py-2 text-sm md:text-base rounded-lg transition-all duration-300 ${
      activeSection === id
        ? "bg-green-700 text-white"
        : "text-gray-300 hover:text-green-400"
    }`}
    onClick={() => scrollToSection  (id, () => {})}
  >
    {label}
  </button>
);