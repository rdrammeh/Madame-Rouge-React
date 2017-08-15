import React, { Component } from 'react';
import AdminMenus from './menu';
import AdminCurrenMenu from './currentmenu';

export default class AdminShow extends Component{
  constructor(){
    super()
    this.state = {
      menus: [],
      currentmenu: []
    }
  }

  allMenus(){
    const menus = menu.find
  }
  render() {
    return (
      <h1>Welcome, Madame Rouge</h1>
      <div>
        <div id="admin_menus">
          <p>Menu Record</p>
          <AdminMenus />
        </div>

        <div id="admin_current_menu">
          <AdminCurrentMenu />
        </div>
      </div>
    );
  }
}
