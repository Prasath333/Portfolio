import { motion } from 'framer-motion';
import { 
  GraduationCap, Award, Briefcase, CheckCircle2, 
  Terminal, Globe, Sparkles 
} from 'lucide-react';

const About = () => {
  const coreStrengths = [
    'Component Architecture & Strict TSX',
    'REST API Integration & Axios Interceptors',
    'Zustand & Redux State Stores',
    'Modular Custom React Hooks',
    'Material UI & Tailwind Responsive Design',
    'AI-Assisted Accelerated Development'
  ];

  const quickStats = [
    { label: 'Current Role', value: 'Junior Developer', sub: 'Coherent Pixels Pvt Ltd' },
    { label: 'Core Expertise', value: 'Web & App Development', sub: 'React, TypeScript, Zustand' },
    { label: 'Education', value: 'B.Sc. IT (67%)', sub: 'SNMV College, Coimbatore' },
    { label: 'Certification', value: 'Java Full Stack', sub: 'Yuva Sakthi Academy' },
  ];

  const languages = ['English', 'Tamil', 'Malayalam'];

  return (
    <section id="about" className="portfolio-section bg-[#282828] border-t border-white/5">
      <div className="portfolio-container">
        
        {/* Section Heading with Clean White & Yellow Styling */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#f5a623]" />
            <p className="section-tag !mb-0">About Me</p>
          </div>
          <h2 className="section-title">Professional Background & Profile</h2>
          <p className="section-subtitle mt-3 max-w-2xl">
            Passionate Web & App Developer committed to building clean, high-performance web applications with modern architectures and strict engineering standards.
          </p>
        </motion.div>

        {/* Top Feature Narrative & Quick Snapshot Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="editorial-card p-7 sm:p-9 lg:p-11 mb-8 border border-white/10 hover:border-yellow-400/40 transition-colors"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Narrative Bio */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5 text-[#f5a623] mb-1">
                <Briefcase size={22} />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Developer at Coherent Pixels Pvt Ltd
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                I am a passionate <strong className="text-white font-semibold">Web & App Developer</strong> based in Coimbatore, Tamil Nadu. Currently at <strong className="text-white font-semibold">Coherent Pixels Pvt Ltd</strong> (September 2024 – Present), I engineer production-grade enterprise web and mobile user interfaces using React, TypeScript, and modern state architectures.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                My daily work centers on translating complex client workflows and operational requirements into responsive, scalable UI components. I emphasize writing strictly typed, reusable TSX components, resilient REST API integrations, and intuitive user experiences.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-yellow-400">
                <Terminal size={15} />
                <span>Clean Code • Modular Architecture • Fast Delivery</span>
              </div>
            </div>

            {/* Right Column: 4 Clean Snapshot Metrics (Clean White & Yellow Only) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              {quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#252525] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-yellow-400 mb-1">
                    {stat.label}
                  </p>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-gray-400 leading-tight">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Bottom Two Balanced Cards: Core Practices vs Education & Credentials */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Core Engineering Practices (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7"
          >
            <div className="editorial-card p-7 sm:p-9 h-full flex flex-col justify-between border border-white/10 hover:border-white/20 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-[#242424] border border-white/10 flex items-center justify-center text-yellow-400">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Applied Engineering Practices</h3>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                  Production principles and development practices implemented across daily enterprise feature delivery, code reviews, and UI component construction.
                </p>

                {/* 6 Practices Checklist */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {coreStrengths.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#252525] border border-white/10 hover:border-yellow-400/30 transition-colors"
                    >
                      <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-200 font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Dedicated to clean Git workflows, zero type errors, and continuous UI improvement.</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Education, Credentials & Spoken Languages (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Box */}
            <div className="editorial-card p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#242424] border border-white/10 flex items-center justify-center text-yellow-400">
                  <GraduationCap size={20} />
                </div>
                <span className="text-[11px] font-semibold text-gray-300 bg-[#242424] px-2.5 py-1 rounded border border-white/10">
                  2016 – 2019
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-yellow-400 mb-1">
                Degree Education
              </p>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                B.Sc. in Information Technology
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mb-2">
                SNMV Arts & Science College, Coimbatore
              </p>
              <p className="text-xs text-gray-400">
                Graduated with <strong className="text-white font-semibold">67% Score</strong>.
              </p>
            </div>

            {/* Certification Box */}
            <div className="editorial-card p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#242424] border border-white/10 flex items-center justify-center text-yellow-400">
                  <Award size={20} />
                </div>
                <span className="text-[11px] font-semibold text-gray-300 bg-[#242424] px-2.5 py-1 rounded border border-white/10">
                  Oct 2023 – July 2024
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-yellow-400 mb-1">
                Professional Certification
              </p>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                Java Full Stack Development
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mb-1">
                Yuva Sakthi Academy, Coimbatore
              </p>
              <p className="text-xs text-gray-400">
                Comprehensive training in full stack engineering, database modeling, and frontend integration.
              </p>
            </div>

            {/* Languages Spoken */}
            <div className="editorial-card p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Globe size={16} className="text-yellow-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Languages Spoken
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-[#252525] border border-white/10 text-gray-200 rounded-md text-xs font-semibold flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span>{lang}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;