import { motion } from 'framer-motion';

interface AITool {
  name: string;
  tagline: string;
  description: string;
  category: string;
  logo: React.ReactNode;
}

const AITools = () => {
  const tools: AITool[] = [
    {
      name: 'Cursor',
      tagline: 'AI-First Code Editor',
      category: 'IDE & Code Gen',
      description: 'Contextual codebase indexing, multi-file atomic edits, predictive inline completions, and rapid component development.',
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M12 2L2 7.2v9.6L12 22l10-5.2V7.2L12 2zm0 2.4l7.6 3.96v7.28L12 19.6 4.4 15.64V8.36L12 4.4zM7 9l5 2.6L17 9l-5 6.5L7 9z"/>
        </svg>
      )
    },
    {
      name: 'Claude',
      tagline: 'Anthropic AI Engine',
      category: 'Architecture & Logic',
      description: 'System design reasoning, complex algorithmic refactoring, TypeScript type safety verification, and detailed documentation.',
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M12 2a1.2 1.2 0 0 1 1.18 1l.7 3.5a1.2 1.2 0 0 0 .94.94l3.5.7a1.2 1.2 0 0 1 0 2.36l-3.5.7a1.2 1.2 0 0 0-.94.94l-.7 3.5a1.2 1.2 0 0 1-2.36 0l-.7-3.5a1.2 1.2 0 0 0-.94-.94l-3.5-.7a1.2 1.2 0 0 1 0-2.36l3.5-.7a1.2 1.2 0 0 0 .94-.94l.7-3.5A1.2 1.2 0 0 1 12 2zm6.5 12.5a.8.8 0 0 1 .78.65l.38 1.9a.8.8 0 0 0 .62.62l1.9.38a.8.8 0 0 1 0 1.56l-1.9.38a.8.8 0 0 0-.62.62l-.38 1.9a.8.8 0 0 1-1.56 0l-.38-1.9a.8.8 0 0 0-.62-.62l-1.9-.38a.8.8 0 0 1 0-1.56l1.9-.38a.8.8 0 0 0 .62-.62l.38-1.9a.8.8 0 0 1 .78-.65z"/>
        </svg>
      )
    },
    {
      name: 'Kiro',
      tagline: 'Autonomous Dev IDE',
      category: 'Spec Engineering',
      description: 'Spec-driven UI scaffolding, autonomous implementation passes, structured test generation, and task breakdown.',
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8-6.8 3.8-6.8-3.8L12 4.2zM5 8.9l6 3.3v6.9l-6-3.3V8.9zm14 6.9l-6 3.3v-6.9l6-3.3v6.9z"/>
        </svg>
      )
    },
    {
      name: 'Antigravity',
      tagline: 'Google DeepMind Agent',
      category: 'Agentic Coding',
      description: 'Autonomous codebase-wide audits, interactive pair programming, terminal automation, and full-stack sprints.',
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'ChatGPT',
      tagline: 'OpenAI Intelligence',
      category: 'Problem-Solving',
      description: 'Debugging complex error traces, exploring modern library APIs, regex validation, and iterative prototyping.',
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-6.27 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .4-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.5 4.5zm-9.66-4.12a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.85-3.37v2.33a.08.08 0 0 1-.04.06l-4.84 2.8a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97v5.67a.77.77 0 0 0 .38.68l5.82 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.9zm16.6 3.85l-5.84-3.38 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.5 4.5 0 0 1-.68 8.1V12.4a.79.79 0 0 0-.4-.65zm2.01-3.02l-.14-.08-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.3 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.79 2.76a.79.79 0 0 0-.39.68zm1.1-2.36l2.6-1.5 2.61 1.5v3l-2.6 1.5-2.61-1.5z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="ai-tools" className="portfolio-section bg-[#282828] border-t border-white/5">
      <div className="portfolio-container">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <p className="section-tag">Modern Productivity</p>
          <h2 className="section-title">AI-Assisted Development</h2>
          <p className="section-subtitle mt-2">
            Leveraging state-of-the-art AI developer tools to accelerate component delivery, ensure code quality, and solve complex frontend engineering problems.
          </p>
        </motion.div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="editorial-card p-5 sm:p-6 flex flex-col justify-between h-full group hover:border-yellow-400/40 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#242424] border border-white/10 flex items-center justify-center text-white group-hover:text-yellow-400 group-hover:border-yellow-400/30 transition-all duration-200">
                    {tool.logo}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-400 bg-[#242424] px-2 py-0.5 rounded border border-white/5">
                    {tool.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 group-hover:text-yellow-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-[11px] font-semibold text-[#f5a623] mb-2.5">
                  {tool.tagline}
                </p>

                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                  {tool.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span>Integrated</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AITools;
