

interface SocialLinkProps {
  link: {
    name: string;
    href: string;
    icon: React.ElementType;
    username: string;
    highlighted: boolean;
  };
}

export const SocialLink: React.FC<SocialLinkProps> = ({ link }) => (
  <a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`bg-gray-900 p-4 rounded-lg flex items-center hover:bg-gray-800 transition-all duration-300 ${
      link.highlighted
        ? "hover:scale-[1.02] border border-green-600 shadow-[0_0_10px_#22c55e40]"
        : ""
    }`}
  >
    <div className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center mr-3">
      <link.icon size={20} className="text-green-500" />
    </div>
    <div>
      <p className={`text-sm ${link.highlighted ? "text-green-400 font-semibold" : "text-gray-400"}`}>
        {link.name}
      </p>
      <p className="text-white font-medium">{link.username}</p>
    </div>
  </a>
);
