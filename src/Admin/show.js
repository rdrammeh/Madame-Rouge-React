import React, { Component } from 'react';
import AdminMenus from './adminmenus';
import AdminCurrentMenu from './currentmenu';
import axios from 'axios';

export default class AdminShow extends Component{
  constructor(){
    super()
    this.state = {
      allmenus: [],
      currentmenu: []
    }
  }

componentDidMount(){
  axios.get('http://localhost:8080')
  .then((response) => {
    let currentmenu = response.data.menu_items.map(function(item){
      return {id: item.id, name: item.name}
    })
    console.log(currentmenu);
    this.setState(
      { currentmenu: currentmenu }
    )

  })
}
  render() {
    return (
      <div>
        <h1>Welcome, Madame Rouge</h1>
        <div id="admin_current_menu">
          <p><i>Current Menu</i></p>
          <AdminCurrentMenu menus={this.state.currentmenu} />
        </div>

        <div id="admin_menus">
          <AdminMenus />
        </div>
      </div>
    );
  }
}
