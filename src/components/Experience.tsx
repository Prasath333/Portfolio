import { motion } from 'framer-motion';
import { 
  Calendar, MapPin, CheckCircle2, Briefcase, 
  Sparkles, Code2, ShieldCheck, ArrowUpRight 
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Junior Developer',
      company: 'Coherent Pixels Pvt Ltd',
      location: 'Coimbatore, Tamil Nadu',
      period: 'September 2024 – Present',
      type: 'Full-time',
      description:
        'Engineering enterprise-grade React web and mobile applications with TypeScript, scalable component architecture, predictable state stores, and responsive design systems.',
      technologies: [
        'React.js',
        'TypeScript',
        'Material UI',
        'Tailwind CSS',
        'Zustand',
        'Redux Toolkit',
        'Axios',
        'Git & GitHub'
      ],
      achievements: [
        'Developed and maintained production-grade web applications using React and TypeScript (TSX).',
        'Implemented React Hooks (useState, useEffect, useContext, useReducer) and tailored custom hooks for stateful logic reusability.',
        'Engineered dynamic client-side routing structures using React Router with nested layout hierarchies.',
        'Built comprehensive data collection forms with react-hook-form and strict schema validation.',
        'Managed application-wide state using Zustand, Redux Toolkit, and React Context API.',
        'Designed high-fidelity responsive user interfaces with Material UI (MUI) and Tailwind CSS.',
        'Constructed reusable design components and centralized data table modules for enterprise workflows.',
        'Integrated RESTful APIs via Axios with authentication token handling and standardized error intercepts.'
      ],
      current: true,
      badge: 'Current Role'
    },
    {
      title: 'Process Associate at P2P',
      company: 'KG Invicta Services Pvt Ltd',
      location: 'Coimbatore, Tamil Nadu',
      period: 'March 2021 – August 2022',
      type: 'Full-time',
      description:
        'Managed enterprise financial data reconciliation, invoice processing workflows, operational audits, and multi-region business pipeline operations.',
      technologies: [
        'SAP ERP',
        'DCIW System',
        'Financial Reconciliation',
        'SAP T-Codes',
        'Data Auditing',
        'Process Optimization'
      ],
      achievements: [
        'Executed Bank Entry Reconciliation for Latam region operations with high accuracy standards.',
        'Troubleshot and resolved invoice processing discrepancies across business deal pipelines.',
        'Managed operational audits and financial workflows using SAP & DCIW systems.',
        'Demonstrated proficiency in transaction processing and SAP T-Codes.'
      ],
      current: false,
      badge: 'Previous Experience'
    }
  ];

  const highlights = [
    {
      icon: <Briefcase size={20} className="text-yellow-400" />,
      label: 'Active Position',
      value: 'Junior Developer',
      detail: 'Coherent Pixels Pvt Ltd (Sept 2024 – Present)'
    },
    {
      icon: <Code2 size={20} className="text-yellow-400" />,
      label: 'Core Focus',
      value: 'Web & App Development',
      detail: 'React, TypeScript, Zustand & Responsive UI'
    },
    {
      icon: <ShieldCheck size={20} className="text-yellow-400" />,
      label: 'Delivery Standards',
      value: 'Production Engineering',
      detail: 'Strict typing, reusable components & REST APIs'
    }
  ];

  return (
    <section id="experience" className="portfolio-section bg-[#282828] border-t border-white/5">
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
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <p className="section-tag !mb-0">Career Journey</p>
          </div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle mt-3 max-w-2xl">
            My professional background in frontend engineering, enterprise application delivery, and production software development.
          </p>
        </motion.div>

        {/* Top 3 Summary Highlight Cards (Spacious & Clean White/Yellow) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10 lg:mb-14">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="editorial-card p-5 sm:p-6 flex items-start gap-4 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#242424] border border-white/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-yellow-400 mb-0.5">
                  {item.label}
                </p>
                <h3 className="text-base font-bold text-white truncate mb-1">
                  {item.value}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Experience Cards Stack with Generous Spacing and Strict White/Yellow Borders */}
        <div className="space-y-8 lg:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.65 }}
              className={`editorial-card p-7 sm:p-9 lg:p-11 relative overflow-hidden transition-all duration-300 border ${
                exp.current 
                  ? 'border-yellow-400/40 hover:border-yellow-400/70' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Card Header: Role, Company, Period & Location */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 pb-6 mb-7 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {exp.title}
                    </h3>
                    {exp.current ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f5a623]/15 text-yellow-400 border border-yellow-400/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        {exp.badge}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#242424] text-gray-400 border border-white/10">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-lg font-semibold text-gray-300 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400 font-normal">{exp.type}</span>
                  </p>
                </div>

                {/* Date & Location Badges (White and Yellow/Gray Borders Only) */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                  <div className="flex items-center gap-2 bg-[#242424] px-3.5 py-2 rounded-lg border border-white/10 text-xs sm:text-sm text-gray-300 font-medium">
                    <Calendar size={15} className="text-yellow-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#242424] px-3.5 py-2 rounded-lg border border-white/10 text-xs sm:text-sm text-gray-300 font-medium">
                    <MapPin size={15} className="text-gray-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Role Summary */}
              <div className="mb-7">
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal max-w-4xl">
                  {exp.description}
                </p>
              </div>

              {/* Technologies Applied Pills */}
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                  <Sparkles size={14} className="text-yellow-400" />
                  <span>Technologies & Tools Applied</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 bg-[#242424] hover:bg-[#303030] border border-white/10 text-gray-200 rounded-md text-xs sm:text-sm font-medium transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Contributions & Responsibilities (Clean, Spacious 2-Column Grid) */}
              <div className="pt-7 border-t border-white/10">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-yellow-400 mb-5">
                  Key Contributions & Engineering Deliverables:
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white/[0.02] transition-colors"
                    >
                      <CheckCircle2 
                        size={17} 
                        className="text-yellow-400 flex-shrink-0 mt-0.5" 
                      />
                      <span className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout / Discussion CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 lg:mt-14 p-6 sm:p-8 rounded-xl bg-[#262626] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Want to learn more about my development workflow?
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Explore the detailed technical solutions and production architecture case studies engineered for these platforms.
            </p>
          </div>
          <a
            href="#what-i-built"
            className="btn-resume flex-shrink-0 text-xs py-2.5 px-5 flex items-center gap-2"
          >
            <span>Review Built Solutions</span>
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;