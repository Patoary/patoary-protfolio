import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import Services from './pages/Services/Services';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className='mx-12'>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="landing#home" element={<Home />} />
        <Route path="landing#portfolio" element={<Portfolio />} />
        <Route path="landing#resume" element={<Resume />} />
        <Route path="landing#services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="project/:id" element={<ProjectDetails/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
