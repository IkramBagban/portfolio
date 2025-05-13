import {
  Code2,
  Database,
} from "lucide-react";
import { SectionHeader } from './ui/SectionHeader';
import { ExperienceItem } from './ui/ExperienceItem';

const ExperienceSection = () => {
  return (
     <section id="experience" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeader title="Work" highlighted="Experience" />
          <div className="space-y-8">
            <ExperienceItem
              title="Full Stack Developer"
              company="HHMaster"
              period="May 2024 – May 2025"
              location="Remote"
              icon={Database}
              projects={[
                {
                  name: "Dyfana: Multi-Service Platform",
                  tech: ["React.js", "Node.js", "TypeScript", "TailwindCSS", "JWT"],
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
                  tech: ["Next.js", "Typescript", "TailwindCSS", "ShadCN", "DHTMLX"],
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
                  tech: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS"],
                  description: [
                    "Developed a booking platform connecting music engineers with creative professionals.",
                    "Built a scheduling system with session reminders and last-minute booking capabilities.",
                    "Implemented location-based search functionality to find music professionals by area.",
                    "Created user and professional dashboards with profile management and booking history.",
                  ],
                },
              ]}
            />
            <ExperienceItem
              title="Frontend Developer Intern"
              company="Iqra Technology"
              period="March 2023 – September 2023"
              location="Aurangabad, Maharashtra"
              icon={Code2}
              projects={[
                {
                  name: "Modern Laundry",
                  tech: ["React Native", "Redux Toolkit", "Context API", "Axios"],
                  description: [
                    "Developed a service-based laundry management mobile app using React Native with Redux Toolkit for state management.",
                    "Implemented service selection features allowing users to select services, add items to cart, and place orders.",
                    "Enabled users to view order history and track current orders.",
                    "Implemented authentication functionalities including login, signup, and guest login.",
                  ],
                },
              ]}
            />
            <ExperienceItem
              title="Bachelor of Computer Applications"
              company="Bamu University"
              period="2021 – 2024"
              location="Aurangabad, Maharashtra"
              icon={Database}
              projects={[]}
            />
          </div>
        </div>
      </section>
  )
}

export default ExperienceSection