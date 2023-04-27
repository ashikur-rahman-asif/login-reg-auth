import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
            <Link to="/registerrbs">Registerrbs</Link>
        </nav>
    );
};

export default Header;