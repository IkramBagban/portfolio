import { ExternalLink } from "lucide-react";

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
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  location,
  icon: Icon,
  projects,
}) => (
  <div className="relative">
    <div className="absolute top-0 left-6 h-full w-0.5 bg-green-900"></div>
    <div className="flex gap-4">
      <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center z-10">
        <Icon size={24} className="text-white" />
      </div>
      <div className="bg-gray-900 p-6 rounded-xl border border-green-900/30 flex-1">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-green-500">{company}</p>
          </div>
          <div className="text-gray-400 mt-2 md:mt-0">
            <p>{period}</p>
            <p className="text-sm">{location}</p>
          </div>
        </div>
        {projects.map((project, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-medium text-green-400 mb-2">{project.name}</h4>
            <p className="text-gray-400 text-sm mb-2">{project.tech.join(", ")}</p>
            <ul className="text-gray-300 space-y-2 list-disc ml-5">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 text-green-400 hover:text-green-300"
              >
                Visit site <ExternalLink size={16} className="ml-1" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);