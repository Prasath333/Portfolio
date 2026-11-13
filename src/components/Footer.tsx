import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (targetId === 'home') {
      scrollToTop();
      return;
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = window.innerWidth < 640 ? 60 : 64;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;
      window.scrollTo({
        top: offsetPosition > 0 ? Math.round(offsetPosition) : 0,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SOLUTIONS', href: '#what-i-built' },
    { label: 'AI TOOLS', href: '#ai-tools' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[#242424] border-t border-white/5 pt-12 sm:pt-14 pb-10 text-gray-400">
      <div className="portfolio-container">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/5">
          {/* Identity */}
          <div>
            <h3 className="text-2xl font-black text-white tracking-tight">
              PRASATH <span className="text-yellow-400">S</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              Web & App Developer
            </p>
            <p className="text-xs text-gray-400 mt-1.5 max-w-md">
              Dedicated to clean code, thoughtful design, and seamless digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:prasathchinnu13@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-md bg-[#2d2d2d] hover:bg-[#383838] border border-white/5 hover:border-yellow-400/30 flex items-center justify-center text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/prasath-s-7b8b4a1b0/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-md bg-[#2d2d2d] hover:bg-[#383838] border border-white/5 hover:border-yellow-400/30 flex items-center justify-center text-gray-300 hover:text-sky-400 transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://github.com/prasathchinnu13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-md bg-[#2d2d2d] hover:bg-[#383838] border border-white/5 hover:border-yellow-400/30 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://wa.me/919629027475"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-md bg-[#2d2d2d] hover:bg-[#383838] border border-white/5 hover:border-yellow-400/30 flex items-center justify-center text-gray-300 hover:text-emerald-400 transition-colors"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links Navigation */}
        <div className="py-5 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 text-xs font-semibold tracking-wider">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-yellow-400 transition-colors focus:outline-none"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {currentYear} Prasath S. All rights reserved.</p>
          <p>Portfolio designed with modern minimalist editorial standards.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
