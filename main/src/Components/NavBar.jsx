import React from 'react';
import '../Css/NavBar.css'; 
import img1 from '../img/anh01.png';

const Navbar = () => {
    const menuItems = [
        { name: 'New Cars', link: '/new-cars' },
        { name: 'Used Cars', link: '/used-cars' },
        { name: 'Compare', link: '/compare' },
        { name: 'Sell', link: '/sell' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={img1} alt="AutoHunt Logo" width="118" height="32" />
            </div>
            <ul className="navbar-menu">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
                <li>
                    <select className="article-select">
                        <option value="">Article</option>
                        {/* {them article} */}
                    </select>
                    <ul className="dropdown">
                        {}
                    </ul>
                </li>
            </ul>
            <div className="navbar-right">
                <a href="/sign-in" className="sign-in">Sign In</a>
                <select className="language-select">
                    <option value="en">EN</option>
                    {/* Add more language options if needed */}
                </select>
            </div>
        </nav>
    );
}

export default Navbar;
