import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/Logo.png';
function Header() {
    return (
        <header>
            <div className={'header__content'}>
            <div className={'header__logo'}>
                <img src={logo} alt='img'/>
            </div>
            <h1> Unlimited movies, TV shows, and more. </h1>
            <h2> Watch anywhere. Cancel anytime. </h2>
            <nav className={'header__nav'}>
                <Link to="/ReactNetflixHome">Home</Link>            
                <Link to="/ReactNetflixMediaCenter">Media Center</Link>    
            </nav>
            </div>
        </header>
    )
}

export default Header