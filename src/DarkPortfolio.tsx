import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { scrollToSection } from "./assets/utils/helpers";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import Header from "./components/ui/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/ui/Footer";
import { NAV_ITEMS } from "./assets/utils/constants";

interface Props {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
export default function Portfolio({
  isDarkMode,
  toggleDarkMode,
}: Props) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      setIsScrolled(window.scrollY > 10);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-lufga">
      <Header
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}

      />

      <HeroSection setMobileMenuOpen={setMobileMenuOpen} />

      <AboutSection />

      <ExperienceSection />

      <ProjectSection />

      <SkillSection />

      <ContactSection />

      <Footer />

      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => scrollToSection("hero", setMobileMenuOpen)}
          className="bg-green-600 hover:bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-green-900/20 transition-all duration-300"
        >
          <ChevronUp size={24} className="" />
        </button>
      </div>
    </div>
  );
}
