import React from 'react';
import {Link} from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutinLinks from './SingnedoutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">rdsblog</Link>
                <SignedinLinks/>
                <SignedoutinLinks/>
            </div>
        </nav>
    )
}

export default Navbar;