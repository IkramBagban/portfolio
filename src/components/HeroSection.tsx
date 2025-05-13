import { ChevronRight, Code2, Server } from "lucide-react";
import React from "react";
import { scrollToSection } from "../assets/utils/helpers";

interface HeroSectionProps {
  setMobileMenuOpen: (open: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setMobileMenuOpen }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-16 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="text-green-500">Ikram Bagban</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Fullstack Developer & DevOps Engineer
            </p>
            <p className="text-gray-400 mb-8 text-lg">
              Building scalable applications with modern technologies. From
              frontend interfaces to robust backend systems and DevOps
              pipelines.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection("projects", setMobileMenuOpen)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300"
              >
                View Projects <ChevronRight size={20} className="ml-2" />
              </button>
              <button
                onClick={() => scrollToSection("contact", setMobileMenuOpen)}
                className="border border-green-600 text-green-500 hover:bg-green-900/30 px-6 py-3 rounded-lg transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-green-400 to-green-700 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Code2 size={64} className="mx-auto text-green-500 mb-4" />
                    <p className="text-xl font-bold text-green-500">
                      Fullstack & DevOps
                    </p>
                    <p className="text-gray-400 text-sm">Developer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black rounded-full border-2 border-green-500 flex items-center justify-center">
                <Server size={36} className="text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
