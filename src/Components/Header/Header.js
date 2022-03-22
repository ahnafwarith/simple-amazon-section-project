import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/order-reviews">Order Reviews</a>
                <a href="/me">Me</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;