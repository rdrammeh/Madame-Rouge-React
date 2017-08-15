import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';


class Show extends Component {
  constructor(){
    super()
    this.state = {
      recipe: null,
      ingredient: null,
    }
  }
  // componentDidMount(){
  //    axios.get('')
  //      .then((response)=>{
  //        this.setState({recipe: response.data, ingredient: response.data.ingredients})
  //      })
  //  }

  render() {
    let Ingredient = ["Eggs", "Salt", "Water"] || this.state.ingredients
    let Recipe = {
      'direction': 'Boil eggs in hot water untill it is hard. Peel egg shells and add salt to taste.'
    } || this.state.recipe
    let {direction} = Recipe
    return (
      <div>
        <ul id="recipe-wrapper">
          <li>Name: Hard Boiled Eggs</li>
          <li>Author: Steve</li>
          <li>Prep time: 7 mins</li>
          <li>Difficulty: 1</li>
        </ul>
        <Tabs>
          <TabList id="tabular">
            <Tab>Ingredients</Tab>
            <Tab>Directions</Tab>
          </TabList>
          <TabPanel>
            <h2>Ingredients</h2>
            {Ingredient.map(function(item, index){
              return <p key={ index }>{item}</p>
            })}
          </TabPanel>
          <TabPanel>
            <h2>Directions</h2>
            <p>{direction}</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
};

export default Show;
