import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img alt='logo' src={logo} />
                <p>FrameIT</p>
            </Link>
        </header>
    )
}

export default Header;