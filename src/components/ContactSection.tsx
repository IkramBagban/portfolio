import { SocialLink } from "./ui/SocialLink";
import { SOCIAL_LINKS } from "../assets/utils/constants";
import { SectionHeader } from "./ui/SectionHeader";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 pb-24 bg-gradient-to-t from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <SectionHeader title="Get In" highlighted="Touch" />
        <div className="bg-black p-8 rounded-xl border border-green-900/30 max-w-2xl mx-auto">
          <p
            className="text-gray-300
            text-center mb-8"
          >
            Feel free to reach out for projects, collaborations, or just to say
            hello!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialLink key={index} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
