import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <Navbar brand='logo' right>
          	<NavItem href='/homepage'>Homepage</NavItem>
          	<NavItem href='/#/recipes'>Recipes</NavItem>
          </Navbar>
        </header>
    </div>
    );
  }
}

export default Header;
