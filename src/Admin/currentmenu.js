import React, { Component } from 'react';
import { Link }  from 'react-router-dom';


export default class AdminCurrentMenu extends Component{
  render() {
    return (
      <div>
        <ul>
          {this.props.menus.map(item => <li key={item.id}><Link to={`/recipes/${item.id}`}>{item.name}</Link></li>)}
        </ul>
      </div>
    )
  }
}
