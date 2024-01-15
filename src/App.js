import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import Projects from './components/Project';
import Experience from './components/Experience';
import Skills from './components/Skill';
import About from './components/Presentation';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <Experience/>
    <About/>
    <Projects/>
    <Blog/>
    <Contact/>
    
    </>
  );
}

export default App;
