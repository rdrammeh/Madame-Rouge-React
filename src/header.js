import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './App.css'
class Header extends Component {
  render() {
    return (
      <header>
        <Navbar brand='Madame Rouge' right className="transparent z-depth-0">
    	     <NavItem href='/recipes'>Recipes</NavItem>
    	      <NavItem href='/users/new'>Signup</NavItem>
            <NavItem href='/sessions/new'>Login</NavItem>
          </Navbar>
      </header>
    );
  }
}

export default Header;
