import React, { Component } from 'react';

export default class RecipeTypes extends Component {
  constructor (){
    super();
    this.state = {
      types: ["appetizer", "salad", "main course", "desserts"]
    }
  }
  render() {
    return (
      <div className="Recipe-types">
        <ul>
        {this.state.types.map((type, i) => {
          return (<li key={i}><a onClick={() => {this.props.changeRecipes(type)}}> {type} </a> </li> )
        })}
        </ul>
      </div>
    );
  }
}
