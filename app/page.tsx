import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import StudyHistory from './components/StudyHistory';
import StudySkills from './components/StudySkills';
import TopButton from './components/TopButton';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <StudySkills />
      <Projects />
      <StudyHistory />
      <Contact />
      <Footer />
      <TopButton />
    </>
  );
}
