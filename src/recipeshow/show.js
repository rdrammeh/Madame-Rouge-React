import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import axios from 'axios'

class Show extends Component {
  constructor(){
    super()
    this.state = {
      recipe: null,
      ingredients: null,
      author: null,
    }
  }
  componentDidMount(){
     axios.get('http://localhost:8080/recipes/'+this.props.match.params.id)
       .then((response)=>{
         this.setState({recipe: response.data.recipe, ingredients: response.data.ingredients, author: response.data.author})
       })
   }

  render() {
    let ingredients = this.state.ingredients? this.state.ingredients : [];
    let recipe = this.state.recipe
    let {directions, difficulty, preptime, name, dish_type} = this.state.recipe ? this.state.recipe : '';
    let {username} = this.state.author ? this.state.author : '';
    return (
      <div>
        <ul id="recipe-wrapper">
          <li>Name: {name}</li>
          <li>Dish type: {dish_type}</li>
          <li>Author: {username}</li>
          <li>Prep time: {preptime}</li>
          <li>Difficulty: {difficulty}</li>
        </ul>
        <Tabs>
          <TabList id="tabular">
            <Tab>Ingredients</Tab>
            <Tab>Directions</Tab>
          </TabList>
          <TabPanel>
            <h2>Ingredients</h2>
            {ingredients.map(function(item, index){
              return <p key={ index }>{item.amount} {item.measurement} of {item.name} </p>
            })}
          </TabPanel>
          <TabPanel>
            <h2>Directions</h2>
            <p>{directions}</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
};

export default Show;
