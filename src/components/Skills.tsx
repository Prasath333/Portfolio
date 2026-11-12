import { motion } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, 
  SiTailwindcss, SiMui, SiBootstrap, SiRedux, SiAxios, 
  SiGit, SiGithub, SiPostman, SiJson
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { 
  Network, Database, CheckSquare, Layers, Route, 
  Smartphone, Layout, Cpu, Sparkles, Sliders
} from 'lucide-react';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  description: string;
  gridCols: string;
  skills: SkillItem[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      description: 'Core web standards, component-driven UI engineering, and modern styling libraries.',
      gridCols: 'grid-cols-2 sm:grid-cols-4',
      skills: [
        { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <SiCss className="text-[#1572B6]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Material UI', icon: <SiMui className="text-[#007FFF]" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },
      ],
    },
    {
      title: 'Application & UI Architecture',
      description: 'Modular component structures, reusable design patterns, and cross-platform layouts.',
      gridCols: 'grid-cols-2 sm:grid-cols-2',
      skills: [
        { name: 'Component Systems', icon: <Layout className="text-yellow-400" size={22} /> },
        { name: 'Custom React Hooks', icon: <Sliders className="text-yellow-400" size={22} /> },
        { name: 'Mobile-First UI', icon: <Smartphone className="text-yellow-400" size={22} /> },
        { name: 'Responsive Layouts', icon: <Layers className="text-yellow-400" size={22} /> },
      ],
    },
    {
      title: 'State Management',
      description: 'Predictable application state architectures, reactive data flows, and store modularity.',
      gridCols: 'grid-cols-2 sm:grid-cols-2',
      skills: [
        { name: 'Zustand', icon: <Cpu className="text-yellow-400" size={22} /> },
        { name: 'Redux Toolkit', icon: <SiRedux className="text-[#764ABC]" /> },
        { name: 'Context API', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'React Hooks', icon: <SiReact className="text-yellow-400" /> },
      ],
    },
    {
      title: 'API Integration & Data Handling',
      description: 'RESTful API integration, dynamic client routing, and robust data validation.',
      gridCols: 'grid-cols-2 sm:grid-cols-3',
      skills: [
        { name: 'REST API', icon: <Network className="text-yellow-400" size={22} /> },
        { name: 'Axios', icon: <SiAxios className="text-[#5A29E4]" /> },
        { name: 'CRUD Operations', icon: <Database className="text-yellow-400" size={22} /> },
        { name: 'React Router', icon: <Route className="text-yellow-400" size={22} /> },
        { name: 'Form Validation', icon: <CheckSquare className="text-yellow-400" size={22} /> },
        { name: 'JSON & Web Data', icon: <SiJson className="text-[#38BDF8]" /> },
      ],
    },
    {
      title: 'Developer Tools & Workflows',
      description: 'Source control, API debugging, modern code editors, and streamlined team workflows.',
      gridCols: 'grid-cols-2 sm:grid-cols-2',
      skills: [
        { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <SiGithub className="text-white" /> },
        { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
        { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      ],
    },
    {
      title: 'AI-Assisted Engineering',
      description: 'Accelerated development through context-aware AI tools, agents, and rapid prototyping.',
      gridCols: 'grid-cols-2 sm:grid-cols-2',
      skills: [
        { name: 'Cursor IDE', icon: <Sparkles className="text-yellow-400" size={22} /> },
        { name: 'Claude AI', icon: <Sparkles className="text-yellow-400" size={22} /> },
        { name: 'Antigravity Agent', icon: <Sparkles className="text-yellow-400" size={22} /> },
        { name: 'ChatGPT', icon: <Sparkles className="text-yellow-400" size={22} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="portfolio-section bg-[#2d2d2d] border-t border-white/5">
      <div className="portfolio-container">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <p className="section-tag !mb-0">Technical Expertise</p>
          </div>
          <h2 className="section-title">Core Skills & Modern Tooling</h2>
          <p className="section-subtitle mt-2">
            A comprehensive overview of frontend frameworks, state management libraries, API patterns, and development tools I work with daily.
          </p>
        </motion.div>

        {/* 6 Skill Categories Grid (Clean White/Yellow Borders) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.08, duration: 0.6 }}
              className="editorial-card p-6 sm:p-7 flex flex-col justify-between h-full border border-white/10 hover:border-yellow-400/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                </div>
                <p className="text-xs text-gray-400 mb-5 leading-relaxed font-normal">
                  {category.description}
                </p>
              </div>

              {/* Skills Badges Grid */}
              <div className={`grid ${category.gridCols} gap-2 sm:gap-2.5 pt-4 border-t border-white/10`}>
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col items-center justify-center p-2.5 sm:p-3 bg-[#262626] hover:bg-[#333333] border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200 group text-center"
                  >
                    <div className="text-xl sm:text-2xl mb-1 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-gray-200 group-hover:text-white leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;