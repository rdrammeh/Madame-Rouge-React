import './App.css';
import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar brand='logo' right>
    	     <NavItem href='get-started.html'>Recipes</NavItem>
    	      <NavItem href='components.html'>Signup</NavItem>
            <NavItem href='get-started.html'>Login</NavItem>
          </Navbar>
      </div>
    );
  }
}

export default Header;
