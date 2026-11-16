import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // Tracks whether navigation was already triggered via pointer-down
  // so the subsequent click event does not double-fire.
  const navFiredRef = useRef(false);

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

  /** Core scroll-and-close logic shared by both pointer and click paths. */
  const executeNav = (href: string) => {
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    setIsMobileMenuOpen(false);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
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
    }
  };

  /**
   * Desktop click handler — plain onClick is fine on desktop.
   */
  const handleDesktopNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    executeNav(href);
  };

  /**
   * Mobile pointer-down handler fires immediately on first touch/tap,
   * before the 300 ms synthetic-click delay that mobile browsers impose.
   * This is the key fix for the "need to tap twice" bug.
   */
  const handleMobilePointerDown = (e: React.PointerEvent<HTMLAnchorElement>, href: string) => {
    // Only intercept touch/pen, not mouse (mouse already works via onClick)
    if (e.pointerType === 'mouse') return;
    e.preventDefault();
    navFiredRef.current = true;
    executeNav(href);
  };

  /**
   * Mobile click handler — guards against double-firing when pointer-down
   * already handled the navigation.
   */
  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (navFiredRef.current) {
      // Already handled by pointer-down; just reset the flag.
      navFiredRef.current = false;
      return;
    }
    executeNav(href);
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
          onClick={(e) => handleDesktopNavClick(e, '#home')}
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
                onClick={(e) => handleDesktopNavClick(e, link.href)}
                className={`text-xs xl:text-sm font-semibold tracking-wider transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-white'
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
            onClick={(e) => {
              e.currentTarget.blur();
              setIsMobileMenuOpen((prev) => !prev);
            }}
            className="p-2 text-gray-300 hover:text-white focus:outline-none touch-manipulation cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#242424] border-b border-white/10 shadow-2xl"
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 py-5 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  // Fires immediately on first touch — no 300 ms delay
                  onPointerDown={(e) => handleMobilePointerDown(e, link.href)}
                  onClick={(e) => handleMobileClick(e, link.href)}
                  className={`text-sm font-semibold tracking-wider py-3 block transition-colors touch-manipulation select-none ${
                    activeSection === link.id
                      ? 'text-yellow-400'
                      : 'text-gray-300 active:text-yellow-400'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#contact"
                  onPointerDown={(e) => handleMobilePointerDown(e, '#contact')}
                  onClick={(e) => handleMobileClick(e, '#contact')}
                  className="btn-hire text-center w-full text-sm py-2.5 touch-manipulation select-none block"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
