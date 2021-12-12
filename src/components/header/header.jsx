import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
    return(
        <header>
            <img alt='logo' src={logo} />
            <p>FrameIt</p>
        </header>
    )
}

export default Header;