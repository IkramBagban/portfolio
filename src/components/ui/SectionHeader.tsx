interface SectionHeaderProps {
  title: string;
  highlighted: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlighted }) => (
  <h2 className="text-3xl font-bold mb-12 text-center">
    <span className="text-white">{title} </span>
    <span className="text-green-500">{highlighted}</span>
  </h2>
);