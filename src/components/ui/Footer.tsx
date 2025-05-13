import { SOCIAL_LINKS } from '../../assets/utils/constants'

const Footer = () => {
  return (
     <footer className="bg-black py-6 border-t border-green-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© {new Date().getFullYear()} Ikram Bagban. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-all duration-300"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Designed & Developed with <span className="text-green-500">❤</span>
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer