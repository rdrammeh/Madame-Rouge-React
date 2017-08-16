import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Recipes from './recipe_index/Recipes';
import Homepage from './Homepage/homepage'
import NewUser from './usersnew/newuser'
import Show from './recipeshow/show'
import Login from './login/Login'
import ShowUser from './users/show'

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/users/new" component={NewUser}/>
          <Route exact path="/users" component={Recipes}/>
          <Route exact path="/recipes" component={Recipes}/>
          <Route path="/sessions/new" component={Login}/>
          <Route path="/users/:id" component={ShowUser}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
