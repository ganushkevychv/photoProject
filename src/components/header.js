import { Link } from "gatsby"
import React from 'react';
import PropTypes from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge } from 'reactstrap';


  class Header extends React.Component{
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      const subMenu = {
        color:"white",
        textAlign:"end",
      }
      return (
        <div className="container-menu">
          <Navbar fixed="top" light expand="sm">
          <div className="container">
  
          <NavbarBrand href="/"><Badge color="danger">Trojmiasto</Badge></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink style={subMenu} href="/about"><Badge color="danger">About</Badge></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={subMenu}  href="/info"><Badge color="danger">Info</Badge></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={subMenu}  href="/contact"><Badge color="danger">Contacts</Badge></NavLink>
                </NavItem>
              </Nav>
            </Collapse>   
          </div>
           
          </Navbar>
        </div>
      );
    }
  }
  
  Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Header.defaultProps = {
    siteTitle: ``,
  }

export default Header;