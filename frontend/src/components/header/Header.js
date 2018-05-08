import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                                            <Link to="/">Home</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="/add">Add Item</Link>
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
