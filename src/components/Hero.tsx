import { motion } from 'framer-motion';
import profileImage from '../assets/Confident Portrait in White Shirt.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen bg-[#2b2b2b] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-16 pb-0 overflow-hidden w-full border-b border-white/5"
    >
      {/* Subtle Studio Backlight behind Portrait */}
      <div className="absolute top-1/4 right-5 lg:right-20 w-[360px] sm:w-[480px] lg:w-[560px] h-[360px] sm:h-[480px] lg:h-[560px] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="portfolio-container flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-14 items-center min-h-[calc(100vh-5.5rem)]">
          
          {/* LEFT SIDE: Clean, Reference-Inspired Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 min-w-0 flex flex-col justify-center py-8 lg:py-16 self-center"
          >
            {/* Greeting in Warm Yellow */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-[#f5a623] font-bold text-lg md:text-xl tracking-wide mb-2.5"
            >
              Hello !
            </motion.p>

            {/* Main Heading & Professional Designation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="space-y-1.5 mb-5"
            >
              <h1 className="text-4xl sm:text-5xl md:text-5.5xl lg:text-5xl xl:text-[3.75rem] font-black text-white leading-[1.1] tracking-tight break-words">
                I'm PRASATH S
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f5a623] leading-tight">
                Web & App Developer
              </h2>
            </motion.div>

            {/* Simple, Neat & Unique Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-[#b8bcc8] text-base md:text-lg leading-relaxed max-w-lg mb-8 font-normal"
            >
              Turning ideas into fast, responsive, and accessible digital products — crafted with clean architecture and an eye for detail.
            </motion.p>

            {/* Two Clean CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <a
                href="#contact"
                className="btn-hire flex-shrink-0"
              >
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                download="Prasath_S_Resume.pdf"
                className="btn-resume flex-shrink-0"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Profile Photograph — properly sized & centered */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 min-w-0 relative flex items-end justify-center lg:justify-end self-end w-full pt-4 lg:pt-0"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[330px] lg:max-w-[360px] xl:max-w-[400px] flex justify-center items-end z-10">
              <img
                src={profileImage}
                alt="Prasath S - Web & App Developer"
                className="w-full h-auto max-h-[360px] sm:max-h-[420px] md:max-h-[460px] lg:max-h-[520px] xl:max-h-[560px] object-contain object-bottom pointer-events-none select-none block"
                style={{
                  filter: 'drop-shadow(0 16px 28px rgba(0, 0, 0, 0.6))',
                }}
              />

              {/* Bottom Subtle Grounding Vignette */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#2b2b2b] to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;