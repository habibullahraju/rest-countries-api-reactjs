import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="./home">Home</a><a href="./contries">Countries</a><a href="./blog">Blogs</a><a href="./about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;