import React, { Component } from 'react';
import AdminMenus from './adminmenus';
import AdminCurrentMenu from './currentmenu';
import axios from 'axios';

export default class AdminShow extends Component{
  constructor(){
    super()
    this.state = {
      allmenus: [],
      currentmenu: [],
      activemenu: []
    };
    this.onMenuClick = this.onMenuClick.bind(this);
  }
onMenuClick(id){
  axios.get(`http://localhost:8080/menus/`+id)
  .then((response) => {
    let activemenu = response.data.menu_items.map(function(item){
      return {id: item.id, name: item.name}
      }
    );
    this.setState({ activemenu: activemenu });
    }
  )
}

componentDidMount(){
  axios.get('http://localhost:8080')
  .then((response) => {
    let currentmenu = response.data.menu_items.map(function(item){
      return {id: item.id, name: item.name, dish_type: item.dish_type}
    })
    this.setState(
      { currentmenu: currentmenu, activemenu: currentmenu }
    )
  })

  axios.get('http://localhost:8080/madame')
  .then((response) => {
    let allmenus = response.data.map(function(menu) {
      return {id: menu.id, start_at: menu.start_at }
    })
    this.setState(
      { allmenus: allmenus}
    )
  })
}

  render() {
    return (
      <div>
        <h1>Welcome, Madame Rouge</h1>
        <div id="admin_current_menu">
          <p><i>Current Menu</i></p>
          <AdminCurrentMenu menus={this.state.activemenu} />
        </div>

        <div id="admin_menus">
          <p><i>Weekly Menu History</i></p>
          <AdminMenus selectmenu={this.onMenuClick} allmenus={this.state.allmenus}/>
        </div>
      </div>
    );
  }
}
