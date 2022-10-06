import React from 'react';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
const LandingPage = () => {
    return (
        <div>
            <Home/>
            <Services/>
            <Portfolio/>
        </div>
    );
};

export default LandingPage;