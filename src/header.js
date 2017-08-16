import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './App.css'
class Header extends Component {
  render() {

      if(sessionStorage.length === 0 ){

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
      else{
      return (
          <header>
            <Navbar brand='Madame Rouge' right className="transparent z-depth-0">
              <NavItem href='/recipes'>Recipes</NavItem>
              <NavItem href={`/users/${sessionStorage.userId}`}>Profile</NavItem>
              {/* Future feature */}
              {/* <NavItem href='/sessions/new'>Log Out</NavItem> */}
              <NavItem href="/recipes/new">New Recipe</NavItem>
            </Navbar>
          </header>
      );
    }
  }
}

export default Header;
