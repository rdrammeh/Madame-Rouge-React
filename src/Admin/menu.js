import React, { Component } from 'react';

export default class AdminMenus extends Component{
  render() {
    return (
      <ul>
        {this.props.menus}
      </ul>

    )
  }
}
