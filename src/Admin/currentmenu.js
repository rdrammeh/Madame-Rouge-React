import React, { Component } from 'react';

export default class AdminCurrentMenu extends Component{
  render() {
    return (
      <div>
        <ul>
          {this.props.menus.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}
