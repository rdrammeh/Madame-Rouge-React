import React, { Component } from 'react';
import { Link }  from 'react-router-dom';



export default class RecipeList extends Component {

  render() {
    return (
      <div className="Recipe-list">
        <ul>
        {this.props.recipes.map((recipe, i) => {
          return (<li key={i}><Link to={`/recipes/${recipe.id}`}> {recipe.name}</Link></li> )
        })}
        </ul>
      </div>
    );
  }
}
