import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './App.css'
import axios from 'axios'
class Header extends Component {
  logOut(){
    debugger
    sessionStorage.clear()
    axios.get('https://madamerouge8080.herokuapp.com/logout')
    .then((response) =>{
      sessionStorage.clear()
    })
    .catch((response) =>{
      sessionStorage.clear()
    })
  }
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
              <NavItem href="/recipes/new">New Recipe</NavItem>
              <NavItem href='/recipes'>Recipes</NavItem>
              <NavItem href={`/users/${sessionStorage.userId}`}>Profile</NavItem>
              <NavItem onClick={this.logOut} href="/">Log Out</NavItem>
            </Navbar>
          </header>
      );
    }
  }
}

export default Header;
