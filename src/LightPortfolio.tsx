"use client";

import { useState, useEffect } from "react";
import {
  Github,
  ChevronRight,
  Code2,
  Server,
  Database,
  Cloud,
  ExternalLink,
  MenuIcon,
  X,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS, SOCIAL_LINKS } from "./assets/utils/constants";
import ThemeSwitcher from "./components/ui/ThemeSwitcher";

const scrollToSection = (
  sectionId: string,
  setMobileMenuOpen: (open: boolean) => void
) => {
  setMobileMenuOpen(false);
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

interface NavLinkProps {
  id: string;
  label: string;
  activeSection: string;
}

const NavLink: React.FC<NavLinkProps> = ({ id, label, activeSection }) => (
  <button
    className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
      activeSection === id
        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
    }`}
    onClick={() => scrollToSection(id, () => {})}
  >
    {label}
  </button>
);

interface SectionHeaderProps {
  title: string;
  highlighted: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlighted,
}) => (
  <motion.h2
    className="text-4xl md:text-5xl font-bold text-center mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="text-gray-800">{title} </span>
    <span className="text-blue-600">{highlighted}</span>
  </motion.h2>
);

interface TechTagProps {
  tech: string;
}

const TechTag: React.FC<TechTagProps> = ({ tech }) => (
  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-all duration-300">
    {tech}
  </span>
);

interface SocialLinkProps {
  link: {
    name: string;
    href: string;
    icon: React.ElementType;
    username: string;
    highlighted: boolean;
  };
}

const SocialLink: React.FC<SocialLinkProps> = ({ link }) => (
  <motion.a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 ${
      link.highlighted ? "border-2 border-blue-500" : "border border-gray-200"
    }`}
    whileHover={{ scale: 1.05 }}
  >
    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
      <link.icon size={20} className="text-blue-600" />
    </div>
    <div>
      <p
        className={`text-sm ${
          link.highlighted ? "text-blue-600 font-semibold" : "text-gray-600"
        }`}
      >
        {link.name}
      </p>
      <p className="text-gray-800 font-medium">{link.username}</p>
    </div>
  </motion.a>
);

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  icon: React.ElementType;
  projects: {
    name: string;
    tech: string[];
    description: string[];
    link?: string;
  }[];
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  location,
  icon: Icon,
  projects,
  index,
}) => (
  <motion.div
    className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className="flex items-center mb-4">
      <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
        <Icon size={24} className="text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-blue-600">{company}</p>
      </div>
    </div>
    <div className="text-gray-600 mb-4">
      <p>{period}</p>
      <p className="text-sm">{location}</p>
    </div>
    {projects.map((project, i) => (
      <div key={i} className="mb-6">
        <h4 className="text-lg font-medium text-blue-600 mb-2">
          {project.name}
        </h4>
        <p className="text-gray-600 text-sm mb-2">{project.tech.join(", ")}</p>
        <ul className="text-gray-700 space-y-2 list-disc ml-5">
          {project.description.map((desc, j) => (
            <li key={j}>{desc}</li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-700"
          >
            Visit site <ExternalLink size={16} className="ml-1" />
          </a>
        )}
      </div>
    ))}
  </motion.div>
);

interface Props {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function LightPortfolio({ isDarkMode, toggleDarkMode }: Props) {
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
    <div className="bg-gray-100 text-gray-800 min-h-screen font-lufga">
      {/* <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        h1, h2, h3, h4 {
          font-family: 'Poppins', sans-serif;
        }
      `}</style> */}

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600 font-bold text-2xl">IB</span>
            <span className="ml-2 text-gray-800 font-medium text-xl">
              Ikram Bagban
            </span>
          </motion.div>
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-gray-800 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
            <nav className="hidden md:flex items-center space-x-2">
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
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white p-4 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-100"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-gray-800">Hi, I'm </span>
                <span className="text-blue-600">Ikram Bagban</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                Fullstack Developer & DevOps Engineer
              </p>
              <p className="text-gray-600 mb-8 text-lg max-w-lg">
                Building scalable applications with modern technologies. From
                frontend interfaces to robust backend systems and DevOps
                pipelines.
              </p>
              <div className="flex space-x-4">
                <motion.button
                  onClick={() => scrollToSection("projects", setMobileMenuOpen)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  View Projects <ChevronRight size={20} className="ml-2" />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("contact", setMobileMenuOpen)}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative p-4 bg-white rounded-2xl shadow-2xl transform hover:rotate-3 transition-transform duration-300">
                <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Code2 size={64} className="mx-auto text-white mb-4" />
                    <p className="text-xl font-bold text-white">
                      Fullstack & DevOps
                    </p>
                    <p className="text-gray-200 text-sm">Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="About" highlighted="Me" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Code2,
                title: "Frontend Development",
                description:
                  "Building responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks like Tailwind.",
              },
              {
                icon: Server,
                title: "Backend Development",
                description:
                  "Developing robust APIs and server-side applications using Node.js, TypeScript, and various database technologies.",
              },
              {
                icon: Cloud,
                title: "DevOps Engineering",
                description:
                  "Implementing CI/CD pipelines, container orchestration, and cloud infrastructure using Docker, Kubernetes, AWS, and GitOps.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="bg-blue-50 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 mb-4">
              I'm a fullstack developer and DevOps engineer based in Aurangabad,
              Maharashtra. I specialize in building scalable web applications
              with modern technologies and implementing efficient deployment
              pipelines.
            </p>
            <p className="text-gray-600">
              With experience in both frontend and backend development, as well
              as DevOps practices, I bring a comprehensive approach to software
              development, from concept to deployment and maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeader title="Work" highlighted="Experience" />
          <div className="space-y-8">
            {[
              {
                title: "Full Stack Developer",
                company: "HHMaster",
                period: "May 2024 – May 2025",
                location: "Remote",
                icon: Database,
                projects: [
                  {
                    name: "Dyfana: Multi-Service Platform",
                    tech: [
                      "React.js",
                      "Node.js",
                      "TypeScript",
                      "TailwindCSS",
                      "JWT",
                    ],
                    description: [
                      "Developed a user-facing website enabling customers to book services like transportation, hotels, Umrah, and guides with advanced search filters and interactive Google Maps.",
                      "Implemented sign-in, sign-up, and forgot password functionalities.",
                      "Built a comprehensive admin interface to manage users, guides, and service approvals.",
                      "Developed portals for service providers to create and manage their packages.",
                    ],
                    link: "https://dyfana.com",
                  },
                  {
                    name: "FDIS Plan",
                    tech: [
                      "Next.js",
                      "Typescript",
                      "TailwindCSS",
                      "ShadCN",
                      "DHTMLX",
                    ],
                    description: [
                      "Integrated DHTMLX Gantt chart for tracking project timelines and task management.",
                      "Implemented drag-and-drop functionality for assigning employees to tasks.",
                      "Implemented CRUD functionalities for services, employees, and roles.",
                      "Developed export features for task details to PDF and Excel formats.",
                    ],
                    link: "http://fdis.ibmeet.xyz",
                  },
                  {
                    name: "Amuzic - Music Professional Booking Platform",
                    tech: [
                      "TypeScript",
                      "Next.js",
                      "PostgreSQL",
                      "Tailwind CSS",
                    ],
                    description: [
                      "Developed a booking platform connecting music engineers with creative professionals.",
                      "Built a scheduling system with session reminders and last-minute booking capabilities.",
                      "Implemented location-based search functionality to find music professionals by area.",
                      "Created user and professional dashboards with profile management and booking history.",
                    ],
                  },
                ],
              },
              {
                title: "Frontend Developer Intern",
                company: "Iqra Technology",
                period: "March 2023 – September 2023",
                location: "Aurangabad, Maharashtra",
                icon: Code2,
                projects: [
                  {
                    name: "Modern Laundry",
                    tech: [
                      "React Native",
                      "Redux Toolkit",
                      "Context API",
                      "Axios",
                    ],
                    description: [
                      "Developed a service-based laundry management mobile app using React Native with Redux Toolkit for state management.",
                      "Implemented service selection features allowing users to select services, add items to cart, and place orders.",
                      "Enabled users to view order history and track current orders.",
                      "Implemented authentication functionalities including login, signup, and guest login.",
                    ],
                  },
                ],
              },
              {
                title: "Bachelor of Computer Applications",
                company: "Bamu University",
                period: "2021 – 2024",
                location: "Aurangabad, Maharashtra",
                icon: Database,
                projects: [],
              },
            ].map((exp, index) => (
              <ExperienceItem key={index} index={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Featured" highlighted="Projects" />
          {[
            {
              title: "iTranscoder",
              description:
                "A highly scalable video transcoding application that takes videos and converts them into multiple formats.",
              details: [
                "Users can upload videos and track the progress and status of transcoding in real-time. After successful processing, users receive download links for the transcoded videos which they can share with others.",
                "The application is designed with scalability in mind, handling high volumes of video processing efficiently through distributed architecture.",
              ],
              tech: [
                "React",
                "Node.js",
                "FFmpeg",
                "AWS Lambda",
                "S3",
                "Docker",
                "Redis",
              ],
              links: [
                { href: "https://itranscoder.ibmeet.xyz", label: "Live Demo" },
                {
                  href: "https://github.com/ikramBagban/itranscoder",
                  label: "GitHub",
                  icon: Github,
                },
              ],
            },
            {
              title: "Docker VM Cleanup GitHub Action",
              description:
                "A GitHub Action that enables remote SSH access to VMs for Docker cleanup operations, maintaining infrastructure hygiene.",
              details: [
                "This action automatically performs the following tasks on remote VMs via SSH:",
                "- Prunes all dangling Docker images",
                "- Removes exited containers older than a specified number of days",
                "- Removes unused images not associated with any containers",
              ],
              tech: [
                "GitHub Actions",
                "Docker",
                "SSH",
                "Shell Scripting",
                "DevOps",
              ],
              links: [
                {
                  href: "https://github.com/ikramBagban/docker-pruner",
                  label: "View Action",
                },
              ],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-6 space-y-3 text-gray-600">
                {project.details.map((detail, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: detail }} />
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <TechTag key={tech} tech={tech} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                {project.links.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-full flex items-center text-sm transition-all duration-300 ${
                      i === 0
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.label}{" "}
                    {link.icon ? (
                      <link.icon size={14} className="ml-1" />
                    ) : (
                      <ExternalLink size={14} className="ml-1" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              {
                title: "DevOps & Deployment Automation",
                description:
                  "Automated end-to-end deployment workflows using GitHub Actions and ArgoCD with GitOps. Containerized many applications & deployed on AWS EC2 and Kubernetes clusters. Delivered static websites using S3 with CDN integration for fast global access. Also explored Auto Scaling Groups (ASGs) and managed Docker-based deployments to streamline project delivery.",
                tech: [
                  "GitHub Actions",
                  "ArgoCD",
                  "GitOps",
                  "Kubernetes",
                  "EC2",
                  "S3",
                  "CloudFront",
                  "Docker",
                  "ASG",
                ],
              },
              {
                title: "Open Source Contributions",
                description:
                  "Active contributor to open source repositories, helping maintain and improve community projects.",
                link: {
                  href: "https://github.com/ikramBagban",
                  label: "View Profile",
                },
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-lg font-bold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                {item.tech && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tech.map((tech) => (
                      <TechTag key={tech} tech={tech} />
                    ))}
                  </div>
                )}
                {item.link && (
                  <motion.a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.link.label}{" "}
                    <ExternalLink size={14} className="ml-1" />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeader title="Technical" highlighted="Skills" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend",
                icon: Code2,
                skills: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React.js",
                  "React Native",
                  "Next.js",
                  "Tailwind CSS",
                ],
              },
              {
                title: "Backend",
                icon: Server,
                skills: ["Node.js", "PostgreSQL", "Prisma", "Redis", "Kafka"],
              },
              {
                title: "DevOps",
                icon: Cloud,
                skills: [
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "GitOps",
                  "ArgoCD",
                  "EC2",
                  "S3",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                  <category.icon size={20} className="mr-2" /> {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TechTag key={skill} tech={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-blue-50 to-purple-100"
      >
        <div className="container mx-auto px-4">
          <SectionHeader title="Get In" highlighted="Touch" />
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 text-center mb-8">
              Feel free to reach out for projects, collaborations, or just to
              say hello!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SOCIAL_LINKS.map((link, index) => (
                <SocialLink key={index} link={link} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Ikram Bagban. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm">
              Designed & Developed with{" "}
              <span className="text-blue-400">✨</span>
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Floating Action */}
      <motion.div
        className="fixed bottom-6 right-6 z-30"
        whileHover={{ scale: 1.1 }}
      >
        <button
          onClick={() => scrollToSection("hero", setMobileMenuOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        >
          <ChevronUp size={24} />
        </button>
      </motion.div>
    </div>
  );
}
