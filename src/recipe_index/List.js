import React, { Component } from 'react';
import { Link }  from 'react-router-dom';


let recipes = [ {
  id: 1,
  name: "chicken"
},{
  id: 2,
  name: "steak"
},{
  id: 3,
  name: "popcorn"
},{
  id: 4,
  name: "burger"
},{
  id: 5,
  name: "something"
}]


export default class RecipeList extends Component {

  render() {
    return (
      <div className="Recipe-list">
        <ul>
        {this.props.recipes.map((recipe, i) => {
          return (<li key={i}><a> {recipe.name}</a></li> )
        })}
        </ul>
      </div>
    );
  }
}
