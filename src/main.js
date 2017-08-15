import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Recipes from './recipe_index/Recipes';
import Homepage from './Homepage/homepage'
import NewUser from './usersnew/newuser'
import Show from './recipeshow/show'

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/users" component={Recipes}/>
          <Route exact path="/recipes" component={Recipes}/>
          <Route path="/users/new" component={NewUser}/>
          <Route path="/sessions/new" component={Recipes}/>
          <Route path="/recipes/:id" component={Show}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
