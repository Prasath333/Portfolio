import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Activity, Landmark, School, Check, 
  ArrowUpRight, X, Sparkles, CheckCircle2, MessageSquare, Send
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  role: string;
  icon: React.ReactNode;
  technologies: string[];
  keyFeatures: string[];
  contributions: string[];
  challenge: string;
  solution: string;
  accentColor: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'prism',
      title: 'PRISM',
      subtitle: 'Vendor Management System',
      category: 'Enterprise SaaS',
      description: 'An enterprise-grade vendor and project management platform designed to streamline vendor onboarding, contract milestones, timesheet PO approvals, and financial invoice processing.',
      role: 'Frontend Developer (React, TypeScript)',
      icon: <Database size={22} className="text-[#f5a623]" />,
      technologies: ['React.js', 'TypeScript', 'Material UI', 'REST API', 'React Router', 'Axios'],
      keyFeatures: [
        'Milestone tracking and timesheet approval workflows',
        'Dynamic multi-stage Purchase Order (PO) processing',
        'Centralized data table with column filtering and sorting',
        'Role-based access control and secure API communication'
      ],
      contributions: [
        'Developed reusable TSX data tables handling large vendor datasets with client-side sorting and pagination.',
        'Constructed multi-tiered approval forms with react-hook-form and custom input validation schemas.',
        'Integrated RESTful API endpoints via Axios with automated Bearer token attachment and error toasts.'
      ],
      challenge: 'Managing high-volume timesheets across multiple vendor tiers with nested approval hierarchies and dynamic data filters without lag.',
      solution: 'Engineered centralized, memoized React table components with custom debounce hooks and clean component boundaries, ensuring smooth rendering across large invoice lists.',
      accentColor: '#f5a623'
    },
    {
      id: 'windesco',
      title: 'Windesco',
      subtitle: 'Industrial IoT Dashboard',
      category: 'IoT Telemetry & Analytics',
      description: 'A high-performance real-time telemetry and asset monitoring dashboard for industrial wind turbines, enabling asset managers to track energy yield, sensor anomalies, and maintenance logs.',
      role: 'Frontend Developer (React, TypeScript, Zustand)',
      icon: <Activity size={22} className="text-[#f5a623]" />,
      technologies: ['React.js', 'TypeScript', 'Zustand', 'Data Visualizations', 'Tailwind CSS', 'REST API'],
      keyFeatures: [
        'Real-time streaming telemetry and turbine health metrics',
        'Fast reactive state updates utilizing Zustand store',
        'Interactive performance charts with multi-variable metrics',
        'Responsive layout optimized for operation center displays'
      ],
      contributions: [
        'Architected Zustand store slices for streaming turbine telemetry with selective re-rendering.',
        'Built interactive performance charts with time-series toggles and anomaly warning badges.',
        'Ensured full responsive fidelity across wide operation room screens and mobile monitoring tablets.'
      ],
      challenge: 'High-frequency telemetry updates caused repeated re-rendering of entire parent dashboard cards and sluggish UI interactions.',
      solution: 'Implemented granular Zustand store selectors with shallow comparison, isolating real-time telemetry updates strictly to the relevant sensor chart widgets.',
      accentColor: '#7b61ff'
    },
    {
      id: 'zenvo',
      title: 'Zenvo',
      subtitle: 'Financial Loan Portal',
      category: 'Fintech & Loan Management',
      description: 'A customer-facing loan processing and financial portal with an intuitive multi-step application workflow, administrative review tools, and transparent status pipelines.',
      role: 'Frontend Developer (React, TypeScript, MUI)',
      icon: <Landmark size={22} className="text-[#f5a623]" />,
      technologies: ['React.js', 'TypeScript', 'Material UI', 'React Hook Form', 'Axios', 'REST API'],
      keyFeatures: [
        'Dynamic multi-step loan application form with validations',
        'Admin approval dashboard with applicant evaluation controls',
        'EMI calculator with reactive amortization schedule',
        'Secure document upload integration and verification flow'
      ],
      contributions: [
        'Built dynamic multi-step loan wizard with cross-step state retention and field validation.',
        'Developed an interactive EMI calculation widget with immediate repayment projections.',
        'Created administrative review screens with applicant credit evaluation controls and status badges.'
      ],
      challenge: 'Multi-stage applicant applications required strict conditional validations, partial save progress, and secure document verification.',
      solution: 'Implemented step-by-step form controllers with react-hook-form, separating validation logic into modular schemas with responsive feedback.',
      accentColor: '#f5a623'
    },
    {
      id: 'sbioa',
      title: 'SBIOA',
      subtitle: 'School Management System',
      category: 'Education Portal & Operations',
      description: 'A centralized educational institution management system for student records, academic grade tracking, fee collections, and staff administrative coordination.',
      role: 'Frontend Developer (React, TypeScript, Redux)',
      icon: <School size={22} className="text-[#f5a623]" />,
      technologies: ['React.js', 'TypeScript', 'Redux Toolkit', 'Axios', 'CSS Modules', 'REST API'],
      keyFeatures: [
        'Student profile management and comprehensive academic records',
        'Class scheduling, attendance tracking, and report generation',
        'Centralized Redux state for real-time academic audits',
        'REST API integration with error handling interceptors'
      ],
      contributions: [
        'Managed global academic state using Redux Toolkit slices with typed actions and reducers.',
        'Built centralized student record forms with attendance, grade reports, and export options.',
        'Structured REST API integration with standardized error handling and response parsing.'
      ],
      challenge: 'Synchronizing student academic records, timetable updates, and administrative permissions without data inconsistencies.',
      solution: 'Employed Redux Toolkit with normalized state structures and Axios interceptors for authenticated API calls and real-time state synchronization.',
      accentColor: '#7b61ff'
    }
  ];

  return (
    <section id="projects" className="portfolio-section bg-[#2d2d2d] border-t border-white/5">
      <div className="portfolio-container">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <p className="section-tag">Featured Work</p>
          <h2 className="section-title">Production Projects</h2>
          <p className="section-subtitle mt-2">
            Real-world enterprise applications built with modern React, TypeScript, scalable state architectures, and robust API integrations.
          </p>
        </motion.div>

        {/* Projects 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="editorial-card p-6 sm:p-8 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#242424] border border-white/10 flex items-center justify-center flex-shrink-0">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-gray-400">{project.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 bg-[#242424] px-2.5 py-1 rounded border border-white/5 flex-shrink-0">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {project.description}
                </p>

                {/* Key Functionality */}
                <div className="mb-5 space-y-1.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Key Functionality:
                  </p>
                  {project.keyFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <Check size={14} className="text-[#f5a623] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 mb-5 border-t border-white/5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-[#242424] border border-white/10 text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions: View Details (Modal) & Inquire */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#f5a623] hover:bg-[#e09214] text-gray-950 font-bold text-xs tracking-wider uppercase transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#292929] hover:bg-[#383838] border border-white/10 hover:border-yellow-400/40 text-gray-200 hover:text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    <span>Inquire</span>
                    <MessageSquare size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Recruiter-Focused Featured Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#2b2b2b] border border-white/15 rounded-xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#242424] hover:bg-[#383838] text-gray-400 hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* Title & Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f5a623] bg-[#f5a623]/10 px-2.5 py-1 rounded border border-[#f5a623]/25">
                  {activeProject.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">Production Case Study</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 pr-8">
                {activeProject.title} – {activeProject.subtitle}
              </h3>
              <p className="text-xs font-semibold text-gray-400 mb-5">
                Role: <span className="text-white">{activeProject.role}</span>
              </p>

              {/* Project Overview */}
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Project Overview
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* My Contributions */}
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#f5a623] mb-2">
                  Key Technical Contributions:
                </p>
                <div className="space-y-2">
                  {activeProject.contributions.map((contribution, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>{contribution}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution Box */}
              <div className="p-4 rounded-lg bg-[#242424] border border-white/10 mb-5 space-y-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#f5a623] mb-1">
                    Technical Challenge:
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>
                <div className="pt-2.5 border-t border-white/5">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Sparkles size={14} />
                    <span>Engineered Solution:</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Technologies Used:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-[#242424] border border-white/10 text-gray-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="btn-hire flex-1 justify-center text-xs py-2.5"
                >
                  <Send size={14} />
                  <span>Inquire About {activeProject.title}</span>
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 rounded-md bg-[#242424] hover:bg-[#383838] border border-white/10 text-gray-300 hover:text-white text-xs font-semibold"
                >
                  Close View
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
