import { SectionHeader } from './ui/SectionHeader'
import {
  Github,
  ExternalLink,

} from "lucide-react";
import { TechTag } from './ui/TechTag';
const ProjectSection = () => {
  return (
     <section id="projects" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeader title="Featured" highlighted="Projects" />
          {[
            {
              title: "iTranscoder",
              description: "A highly scalable video transcoding application that takes videos and converts them into multiple formats.",
              details: [
                "Users can upload videos and track the progress and status of transcoding in real-time. After successful processing, users receive download links for the transcoded videos which they can share with others.",
                "The application is designed with scalability in mind, handling high volumes of video processing efficiently through distributed architecture.",
              ],
              tech: ["React", "Node.js", "FFmpeg", "AWS Lambda", "S3", "Docker", "Redis"],
              links: [
                { href: "https://itranscoder.ibmeet.xyz", label: "Live Demo" },
                { href: "https://github.com/ikramBagban/itranscoder", label: "GitHub", icon: Github },
              ],
            },
            {
              title: "Docker VM Cleanup GitHub Action",
              description: "A GitHub Action that enables remote SSH access to VMs for Docker cleanup operations, maintaining infrastructure hygiene.",
              details: [
                "This action automatically performs the following tasks on remote VMs via SSH:",
                "- Prunes all dangling Docker images",
                "- Removes exited containers older than a specified number of days",
                "- Removes unused images not associated with any containers",
              ],
              tech: ["GitHub Actions", "Docker", "SSH", "Shell Scripting", "DevOps"],
              links: [{ href: "https://github.com/ikramBagban/docker-pruner", label: "View Action" }],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-xl border border-green-900/30 hover:border-green-500/30 transition-all duration-300 mb-6"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-green-500 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-6 space-y-3 text-gray-400">
                    {project.details.map((detail, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: detail }} />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <TechTag  key={tech} tech={tech} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 py-1.5 rounded-lg flex items-center text-sm transition-all duration-300 ${
                          i === 0
                            ? "bg-green-700 hover:bg-green-600 text-white"
                            : "border border-green-600 text-green-400 hover:bg-green-900/30"
                        }`}
                      >
                        {link.label} {link.icon ? <link.icon size={14} className="ml-1" /> : <ExternalLink size={14} className="ml-1" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              {
                title: "DevOps & Deployment Automation",
                description:
                  "Automated end-to-end deployment workflows using GitHub Actions and ArgoCD with GitOps. Containerized many applications & deployed on AWS EC2 and Kubernetes clusters. Delivered static websites using S3 with CDN integration for fast global access. Also explored Auto Scaling Groups (ASGs) and managed Docker-based deployments to streamline project delivery.",
                tech: ["GitHub Actions", "ArgoCD", "GitOps", "Kubernetes", "EC2", "S3", "CloudFront", "Docker", "ASG"],
              },
              {
                title: "Open Source Contributions",
                description: "Active contributor to open source repositories, helping maintain and improve community projects.",
                link: { href: "https://github.com/ikramBagban", label: "View Profile" },
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black p-5 rounded-xl border border-green-900/30 hover:border-green-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-green-500 mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-3">{item.description}</p>
                {item.tech && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tech.map((tech) => (
                      <span key={tech} className="bg-green-900/20 text-green-400 px-2 py-0.5 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-sm flex items-center"
                  >
                    {item.link.label} <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProjectSection