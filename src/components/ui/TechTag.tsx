interface TechTagProps {
  tech: string;
}

export const TechTag: React.FC<TechTagProps> = ({ tech }) => (
  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-lg text-sm">
    {tech}
  </span>
);