import React, { Component } from 'react';

export default class AdminMenus extends Component{
  render() {
    return (
      <div>
        <ul>
          {this.props.allmenus.map(menu => <li key={menu.id}>{menu.start_at}</li>)}
        </ul>
      </div>
    )
  }
}
