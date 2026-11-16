import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'what-i-built', 'ai-tools', 'contact'];

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      const navOffset = window.innerWidth < 640 ? 60 : 64;
      const scrollPosition = window.scrollY + navOffset + 40;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', id: 'home', label: 'HOME' },
    { href: '#about', id: 'about', label: 'ABOUT' },
    { href: '#skills', id: 'skills', label: 'SKILLS' },
    { href: '#experience', id: 'experience', label: 'EXPERIENCE' },
    { href: '#projects', id: 'projects', label: 'PROJECTS' },
    { href: '#what-i-built', id: 'what-i-built', label: 'SOLUTIONS' },
    { href: '#ai-tools', id: 'ai-tools', label: 'AI TOOLS' },
    { href: '#contact', id: 'contact', label: 'CONTACT' },
  ];

  /** Scroll to section — shared by desktop and mobile. */
  const scrollToSection = (targetId: string) => {
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        const navOffset = window.innerWidth < 640 ? 60 : 64;
        const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top: top > 0 ? Math.round(top) : 0, behavior: 'smooth' });
      }
    }
  };

  /** Desktop nav click — works perfectly with onClick on non-touch devices. */
  const handleDesktopClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    scrollToSection(targetId);
  };

  /**
   * Mobile nav tap.
   * Uses <button> elements in the drawer (not <a> tags) so there is
   * ZERO 300 ms touch delay — buttons respond instantly on all mobile browsers.
   * onTouchStart fires the moment a finger touches the screen.
   * We close the drawer first, then scroll in a rAF so there's no
   * race between state update and scroll position calculation.
   */
  const handleMobileTap = (href: string) => {
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    setIsMobileMenuOpen(false);

    // One animation frame lets React flush the drawer-close update,
    // then we scroll with no layout conflict.
    requestAnimationFrame(() => {
      scrollToSection(targetId);
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#252525]/95 backdrop-blur-md shadow-lg py-3.5 border-b border-white/5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="portfolio-container flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleDesktopClick(e, '#home')}
          className="flex items-baseline gap-2 text-2xl sm:text-3xl font-black text-white tracking-tight hover:text-yellow-400 transition-colors flex-shrink-0 touch-manipulation"
        >
          <span>PRASATH</span>
          <span className="text-yellow-400">S</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleDesktopClick(e, link.href)}
                className={`text-xs xl:text-sm font-semibold tracking-wider transition-colors duration-200 relative py-1 ${
                  isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none touch-manipulation"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="lg:hidden bg-[#242424] border-b border-white/10 shadow-2xl"
          >
            <div className="px-6 py-4 flex flex-col">
              {navLinks.map((link) => (
                /*
                 * KEY FIX: <button> instead of <a>.
                 * Buttons have NO 300 ms tap-delay on any mobile browser.
                 * onTouchStart fires the instant the finger touches — first tap works.
                 */
                <button
                  key={link.id}
                  type="button"
                  onTouchStart={() => handleMobileTap(link.href)}
                  onClick={() => handleMobileTap(link.href)}
                  className={`text-sm font-semibold tracking-wider py-3 w-full text-left transition-colors touch-manipulation ${
                    activeSection === link.id
                      ? 'text-yellow-400'
                      : 'text-gray-300 active:text-yellow-400'
                  }`}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {link.label}
                </button>
              ))}

              {/* Hire Me */}
              <div className="pt-3 pb-1">
                <button
                  type="button"
                  onTouchStart={() => handleMobileTap('#contact')}
                  onClick={() => handleMobileTap('#contact')}
                  className="btn-hire text-center w-full text-sm py-2.5 touch-manipulation"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
