import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/' className='nav-link'>About</Link>
                    <Link to='/' className='nav-link'>Resume</Link>
                    <Link to='/' className='nav-link'>protfolio</Link>
                    <Link to='/blogs' className='nav-link'>Blogs</Link>
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