import React from 'react';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
const LandingPage = () => {
    return (
        <div>
            <Home/>
            <Services/>
            <Resume/>
            <Portfolio/>
            <Contact/>
        </div>
    );
};

export default LandingPage;