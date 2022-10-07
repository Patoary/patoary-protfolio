import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import * as FaIcons from 'react-icons/fa';
import * as AiIons from 'react-icons/ai';
import './Navbar.css';
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false, 'nav-toggler');
    return (
        <>
            <nav className="navbar">
                <Link to='/' className='nav-brand'>Patoary</Link>
                <ul
                    className={sidebar ? 'nav-menu active' : 'nav-menu'}
                    onClick={() => setSidebar(!sidebar)}
                >
                    <Link smooth to='/landing#home' className='nav-link'>Home</Link>
                    <Link smooth to='/landing#services' className='nav-link'>Service</Link>
                    <Link smooth to='/landing#resume' className='nav-link'>Resume</Link>
                    <Link smooth to='/landing#portfolio' className='nav-link'>portfolio</Link>
                    <Link smooth to='/about' className='nav-link'>About</Link>
                    <Link smooth to='/landing#contact' className='nav-link'>Contact</Link>
                </ul>
                <div>
                    <button className='nav-toggler' onClick={() => setSidebar(!sidebar)}>
                        {sidebar ? (<Link to='#'><AiIons.AiOutlineClose /></Link>)
                            :
                            (<Link to='#'><FaIcons.FaBars /></Link>)}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;