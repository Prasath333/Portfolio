import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Smooth scroll utility ────────────────────────────────────────────────
   Custom rAF-based scroller with easeInOutCubic.
   Works perfectly on iOS Safari, Android Chrome, and all desktop browsers.
   Native `behavior:'smooth'` is unreliable on mobile — this replaces it.
──────────────────────────────────────────────────────────────────────────── */
let activeScrollRAF: number | null = null;

const smoothScrollTo = (targetY: number, duration = 700) => {
  // Cancel any in-progress scroll
  if (activeScrollRAF !== null) {
    cancelAnimationFrame(activeScrollRAF);
    activeScrollRAF = null;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 1) return;

  const startTime = performance.now();

  // easeInOutCubic — smooth start AND smooth stop, no jerk
  const ease = (t: number): number =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, Math.round(startY + distance * ease(progress)));
    if (progress < 1) {
      activeScrollRAF = requestAnimationFrame(step);
    } else {
      activeScrollRAF = null;
    }
  };

  activeScrollRAF = requestAnimationFrame(step);
};

/* ─── Target Y resolver ────────────────────────────────────────────────── */
const getTargetY = (targetId: string): number => {
  if (targetId === 'home') return 0;
  const el = document.getElementById(targetId);
  if (!el) return 0;
  const navOffset = window.innerWidth < 640 ? 60 : 64;
  const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
  return y > 0 ? Math.round(y) : 0;
};

/* ─── Navbar component ──────────────────────────────────────────────────── */
const Navbar = () => {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setMobileMenu]   = useState(false);
  const [activeSection, setActiveSection]   = useState('home');

  // Stores the section to scroll to after the drawer fully exits
  const pendingNavRef = useRef<string | null>(null);

  /* ── Active section tracker ── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'what-i-built', 'ai-tools', 'contact'];

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      const navOffset = window.innerWidth < 640 ? 60 : 64;
      const scrollPos = window.scrollY + navOffset + 40;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top && scrollPos < top + el.offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home',        id: 'home',        label: 'HOME' },
    { href: '#about',       id: 'about',       label: 'ABOUT' },
    { href: '#skills',      id: 'skills',      label: 'SKILLS' },
    { href: '#experience',  id: 'experience',  label: 'EXPERIENCE' },
    { href: '#projects',    id: 'projects',    label: 'PROJECTS' },
    { href: '#what-i-built',id: 'what-i-built',label: 'SOLUTIONS' },
    { href: '#ai-tools',    id: 'ai-tools',    label: 'AI TOOLS' },
    { href: '#contact',     id: 'contact',     label: 'CONTACT' },
  ];

  /* ── Desktop click: update active state, then scroll after one rAF
        (the rAF ensures React has painted the active-indicator change
         before the scroll starts, eliminating any micro-stutter)       ── */
  const handleDesktopClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    requestAnimationFrame(() => smoothScrollTo(getTargetY(targetId)));
  };

  /* ── Mobile tap: close the drawer first, store the target, then
        scroll ONLY after the drawer exit animation is 100% complete
        via AnimatePresence onExitComplete — zero jerk guaranteed.      ── */
  const handleMobileTap = (href: string) => {
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    pendingNavRef.current = targetId;   // remember where to scroll
    setMobileMenu(false);               // triggers drawer exit animation
  };

  /* Called by AnimatePresence when the drawer has fully disappeared. */
  const handleDrawerExitComplete = () => {
    if (pendingNavRef.current) {
      const targetId = pendingNavRef.current;
      pendingNavRef.current = null;
      smoothScrollTo(getTargetY(targetId));
    }
  };

  /* ── JSX ── */
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

        {/* Desktop nav links */}
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

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenu((prev) => !prev)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none touch-manipulation"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ─────────────────────────────────────────────────────
           onExitComplete fires after the exit animation finishes.
           That's when we start the scroll — zero overlap, zero jerk.
      ──────────────────────────────────────────────────────────────────────── */}
      <AnimatePresence onExitComplete={handleDrawerExitComplete}>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-[#242424] border-b border-white/10 shadow-2xl"
          >
            <div className="px-6 py-3 flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  /* onTouchStart: fires instantly on first tap, no 300 ms delay */
                  onTouchStart={() => handleMobileTap(link.href)}
                  onClick={() => handleMobileTap(link.href)}
                  className={`text-sm font-semibold tracking-wider py-3 w-full text-left transition-colors touch-manipulation ${
                    activeSection === link.id ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  {link.label}
                </button>
              ))}

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
