import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Header extends Component {

    state = {
        collapse: false,
        isWideEnough: false,
    };

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <div>
                <header>
                    <Router>
                        <Navbar color="black" dark expand="md" scrolling>
                            <Container>
                                <NavbarBrand href="/">
                                    <strong>Navbar</strong>
                                </NavbarBrand>
                                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                                <Collapse isOpen = { this.state.collapse } navbar>
                                    <NavbarNav left>
                                        <NavItem active>
                                            <NavLink to="#">Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#">Link</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#">Profile</NavLink>
                                        </NavItem>
                                    </NavbarNav>
                                </Collapse>
                            </Container>
                        </Navbar>
                    </Router>
                </header>

            </div>
        );
    }
}
