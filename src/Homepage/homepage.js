import React, { Component } from 'react';
import axios from 'axios';
import Appetizer from './Appetizer';
import Salad from './Salad';
import Entree from './Entree';
import Dessert from './Dessert';

let menu =  {recipes :[
  { id: 1,
    name: "chicken",
    type: "app"
}, { id: 2,
      name: "lettuce",
      type: "salad"
},{ id: 3,
    name: "steak",
    type: "entree"
},
{ id: 4,
    name: "chocolate",
    type: "dessert"
},] }

export default class Homepage extends Component {
  constructor(){
    super()
    this.state = {
      app: [],
      salad: [],
      entree: [],
      dessert: []

    }
  }

filterMenuItem(menu, type){
    var filterItem = menu.filter(function findApps(recipe){
      return recipe.type === type})
    return filterItem
  }

  componentWillMount(){
    // axios.get('')
    // .then((response) => {
    //   this.setState({app: filterMenu(response.data)})
    // })

    //This wil need to added into the axios call. it is currently only here because of dummy data
    this.setState({salad: this.filterMenuItem(menu.recipes,"salad")})
    this.setState({dessert: this.filterMenuItem(menu.recipes,"dessert")})
    this.setState({entree: this.filterMenuItem(menu.recipes,"entree")})
    this.setState({app: this.filterMenuItem(menu.recipes,"app")})
  }

  render() {
    return (
      <div className="App">
        <div className="menu-card">
          <section className="menu-list">
          <h1>This Week's Menu </h1>
          <h2>Appetizer</h2>
            <Appetizer apps={this.state.app}/>
          <h2>Salad</h2>
            <Salad salads={this.state.salad}/>
          <h2>Entree</h2>
            <Entree entrees={this.state.entree}/>
          <h2>Dessert</h2>
            <Dessert desserts={this.state.dessert}/>
          </section>
        </div>
      </div>
    );
  }
}
