import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSolutions from './components/TechnicalSolutions';
import AITools from './components/AITools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <TechnicalSolutions />
        <AITools />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
