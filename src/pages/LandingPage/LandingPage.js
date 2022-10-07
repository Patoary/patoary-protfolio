import React from 'react';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
const LandingPage = () => {
    return (
        <div>
            <Home/>
            <Services/>
            <Resume/>
            <Portfolio/>
        </div>
    );
};

export default LandingPage;