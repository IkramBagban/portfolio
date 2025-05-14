import { SectionHeader } from "./ui/SectionHeader";
import { TechTag } from "./ui/TechTag";

import { Code2, Server, Cloud } from "lucide-react";
const SkillSection = () => {
  return (
    <section id="skills" className="py-16 bg-black">
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
                // "EC2",
                // "S3",
              ],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-green-900/30"
            >
              <h3 className="text-xl font-semibold text-green-500 mb-4 flex items-center">
                <category.icon size={20} className="mr-2" /> {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechTag key={skill} tech={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
