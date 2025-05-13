import { SectionHeader } from "./ui/SectionHeader";

import { Code2, Server, Cloud } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader title="About" highlighted="Me" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div
              key={index}
              className="bg-black p-6 rounded-xl border border-green-900/30 hover:border-green-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="bg-green-900/20 p-4 rounded-lg self-start mb-4">
                <item.icon size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-black p-6 rounded-xl border border-green-900/30">
          <p className="text-gray-300 mb-4">
            I'm a fullstack developer and DevOps engineer based in Aurangabad,
            Maharashtra. I specialize in building scalable web applications with
            modern technologies and implementing efficient deployment pipelines.
          </p>
          <p className="text-gray-300">
            With experience in both frontend and backend development, as well as
            DevOps practices, I bring a comprehensive approach to software
            development, from concept to deployment and maintenance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
