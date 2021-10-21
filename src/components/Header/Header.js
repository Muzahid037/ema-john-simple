import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />

            <nav className="navb">
                <NavLink to="./shop">Shop</NavLink>
                <NavLink to="./review">Order Review</NavLink>
                <NavLink to="./inventory">Manage Inventory Here</NavLink>
                <NavLink to="./login">Login</NavLink>
                <NavLink to="./register">Register</NavLink>
                {user.displayName && <button onClick={logOut}>{user.displayName} Logout</button> }
            </nav>

            <div className="search-bar">
                <input type="text" placeholder="type here to search"/>
            </div>


        </div>
    );
};

export default Header;