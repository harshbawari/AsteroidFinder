import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/head.css';

class Head extends Component {

    render() {
        return(
            <div>
                <div className="justify-content-center">
                    <h1>
                        Asteroid Finder
                    </h1>
                </div>
            </div>
        );
    }
}

export default Head;