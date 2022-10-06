import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import Services from './pages/Services/Services';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="landing#home" element={<Home />} />
        <Route path="landing#portfolio" element={<Portfolio />} />
        <Route path="landing#resume" element={<Resume />} />
        <Route path="landing#services" element={<Services />} />
        <Route path="landing#contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
