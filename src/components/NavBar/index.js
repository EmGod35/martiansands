import React from 'react';
import './NavBar.css'

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
  } from './NavbarElements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                        <h1 className="navbar-logo">Martian Sands</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/gallery" activeStyle>
                        Gallery
                    </NavLink>
                    <NavLink to="/Music" activeStyle>
                        Music
                    </NavLink>
                    <NavLink to="/Shop" activeStyle>
                        Shop
                    </NavLink>
                    <NavLink to="/About" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar
