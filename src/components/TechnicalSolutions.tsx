import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, Network, ShieldCheck, Cpu, CheckSquare, Table, 
  ArrowUpRight, X, CheckCircle2, Sparkles, Terminal
} from 'lucide-react';

interface SolutionItem {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  icon: React.ReactNode;
  highlights: string[];
}

const TechnicalSolutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  const solutions: SolutionItem[] = [
    {
      id: 'reusable-components',
      title: 'Reusable Component Systems & Data Tables',
      category: 'UI Architecture',
      problem: 'Enterprise portals (PRISM & SBIOA) had fragmented table logic, repetitive pagination, and styling inconsistencies across 15+ admin screens.',
      solution: 'Architected a modular component library in TypeScript (TSX) featuring centralized data tables with customizable column definitions, sorting, debounced search, and responsive cards.',
      impact: 'Accelerated feature development velocity by 40% and eliminated duplicate table and pagination boilerplate.',
      technologies: ['React.js', 'TypeScript', 'Material UI', 'Tailwind CSS', 'Memoization'],
      icon: <Table className="text-[#f5a623]" size={22} />,
      highlights: [
        'Generic TypeScript interfaces for type-safe row data',
        'Custom hook for client-side multi-column filtering and pagination',
        'Centralized status badges and standardized action dropdowns'
      ]
    },
    {
      id: 'rest-axios',
      title: 'REST API Client with Request/Response Interceptors',
      category: 'API Integration',
      problem: 'Handling token expiration, session timeouts, and network error handling inconsistently across 30+ asynchronous API calls.',
      solution: 'Configured a unified Axios instance with request interceptors for automatic Bearer token injection and response interceptors for global error toasts and standardized response formatting.',
      impact: 'Created seamless network error resilience and simplified authentication state across the entire application.',
      technologies: ['Axios', 'REST API', 'JWT Flow', 'Custom Hooks', 'Error Handling'],
      icon: <Network className="text-yellow-400" size={22} />,
      highlights: [
        'Centralized request interceptors attaching Bearer JWT tokens',
        'Global response error handling with user-friendly notification intercepts',
        'Strict TypeScript response payload definitions'
      ]
    },
    {
      id: 'rbac-routing',
      title: 'Role-Based Access Control & Protected Routing',
      category: 'Security & Navigation',
      problem: 'Multi-role platforms (Vendor Admin, Finance, Client) required strictly guarded views without content flashing or broken navigation states.',
      solution: 'Engineered a permission-based dynamic routing hierarchy using React Router, protecting sensitive routes with auth state verification and dynamic navigation rendering.',
      impact: 'Ensured zero unauthorized route access and provided clean role-tailored sidebar layouts for different user tiers.',
      technologies: ['React Router', 'Context API', 'TypeScript', 'Auth Guards'],
      icon: <ShieldCheck className="text-[#f5a623]" size={22} />,
      highlights: [
        'Route wrapper components enforcing role claims before render',
        'Seamless redirection to login with query return URLs',
        'Dynamic navigation bar items filtered by verified user roles'
      ]
    },
    {
      id: 'zustand-telemetry',
      title: 'Granular State Management for Real-Time Telemetry',
      category: 'State Architecture',
      problem: 'High-frequency telemetry data streams in the Windesco IoT dashboard triggered excessive parent re-renders and UI sluggishness.',
      solution: 'Implemented lightweight Zustand store slices with shallow state selectors, isolating streaming telemetry updates solely to active visualization widgets.',
      impact: 'Reduced dashboard re-render cycles by over 60%, delivering smooth 60fps chart rendering during continuous asset data feeds.',
      technologies: ['Zustand', 'React Hooks', 'Chart Widgets', 'Performance Optimization'],
      icon: <Cpu className="text-yellow-400" size={22} />,
      highlights: [
        'Decoupled telemetry state from root UI component trees',
        'Fine-grained selector subscriptions avoiding unnecessary re-renders',
        'Predictable action dispatchers for asset filter changes'
      ]
    },
    {
      id: 'form-validation',
      title: 'Dynamic Multi-Step Form Validation Wizards',
      category: 'Form Engineering',
      problem: 'Multi-stage financial applications in Zenvo required complex multi-step fields, conditional validation rules, and progress persistence.',
      solution: 'Engineered step-by-step form wizards utilizing react-hook-form with modular validation schemas, preventing invalid submissions and caching partial progress.',
      impact: 'Delivered intuitive applicant flows with immediate inline validation feedback and zero data loss on step changes.',
      technologies: ['react-hook-form', 'Material UI', 'Form Validation', 'TypeScript'],
      icon: <CheckSquare className="text-[#f5a623]" size={22} />,
      highlights: [
        'Modular schema validations per wizard step',
        'Reactive calculations for financial fields and EMI estimates',
        'Accessible field error states and keyboard navigation'
      ]
    },
    {
      id: 'cross-platform',
      title: 'Responsive & Cross-Device Frontend Engineering',
      category: 'Frontend Performance',
      problem: 'Industrial monitoring dashboards and enterprise tables required flawless usability on both 4K monitoring monitors and field tablets/mobiles.',
      solution: 'Designed fluid mobile-first layouts using Tailwind CSS and Material UI breakpoints, converting complex data tables into swipeable card views on compact screens.',
      impact: 'Achieved 100% responsive coverage across phone, tablet, laptop, and ultrawide desktop monitors.',
      technologies: ['Tailwind CSS', 'Material UI', 'Responsive Design', 'CSS Grid'],
      icon: <Layers className="text-yellow-400" size={22} />,
      highlights: [
        'Fluid CSS grid and flexbox architectures with zero horizontal overflow',
        'Adaptive table-to-card transformations for mobile viewports',
        'Touch-optimized button tap targets and legible typography scaling'
      ]
    }
  ];

  return (
    <section id="what-i-built" className="portfolio-section bg-[#282828] border-t border-white/5">
      <div className="portfolio-container">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <Terminal size={16} className="text-[#f5a623]" />
            <p className="section-tag !mb-0">Engineering Practice</p>
          </div>
          <h2 className="section-title">What I Built & Solved</h2>
          <p className="section-subtitle mt-2">
            Real-world frontend architectures, architectural problems, and practical solutions engineered across production enterprise web and app projects.
          </p>
        </motion.div>

        {/* 6 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="editorial-card p-6 sm:p-7 flex flex-col justify-between h-full group hover:border-[#f5a623]/40 transition-all duration-200"
            >
              <div>
                {/* Category & Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#242424] border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 bg-[#242424] px-2.5 py-1 rounded border border-white/5">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>

                {/* The Challenge / Problem */}
                <div className="mb-3.5 p-3 rounded-lg bg-[#262626] border border-white/5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#f5a623] mb-1">
                    The Challenge
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    {item.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div className="mb-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Engineered Solution
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    {item.solution}
                  </p>
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 mb-4 border-t border-white/5">
                  {item.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#242424] border border-white/10 text-gray-300 rounded text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="px-2 py-0.5 bg-[#242424] border border-white/10 text-gray-400 rounded text-[11px]">
                      +{item.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedSolution(item)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-[#292929] hover:bg-[#383838] border border-white/10 hover:border-yellow-400/40 text-gray-200 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>Review Solution</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detailed Technical Solution Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#2b2b2b] border border-white/15 rounded-xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#242424] hover:bg-[#383838] text-gray-400 hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f5a623] bg-[#f5a623]/10 px-2.5 py-1 rounded border border-[#f5a623]/25">
                  {selectedSolution.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">Architecture Deep-Dive</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 pr-8">
                {selectedSolution.title}
              </h3>

              {/* Challenge Box */}
              <div className="p-4 rounded-lg bg-[#242424] border border-white/10 mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#f5a623] mb-1">
                  The Problem & Architectural Constraints:
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedSolution.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                  Engineering Solution:
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedSolution.solution}
                </p>
              </div>

              {/* Key Implementation Highlights */}
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#f5a623] mb-2">
                  Key Technical Highlights:
                </p>
                <div className="space-y-2">
                  {selectedSolution.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Callout */}
              <div className="p-3.5 rounded-lg bg-[#242424]/80 border border-white/10 mb-6 flex items-start gap-2.5">
                <Sparkles size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-300">
                  <strong className="text-yellow-400 font-semibold">Recruiter Takeaway: </strong>
                  {selectedSolution.impact}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {selectedSolution.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-[#242424] border border-white/10 text-gray-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechnicalSolutions;

