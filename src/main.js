import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Homepage from './Homepage/homepage'
import Recipes from './recipe_index/Recipes';
import NewUser from './usersnew/newuser'
import Show from './recipeshow/show'
import Login from './login/Login'

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          {/* <Route path="/users/:id" component={Login}/> */}
          <Route exact path="/recipes" component={Recipes}/>
          <Route path="/users/new" component={NewUser}/>
          <Route path="/sessions/new" component={Login}/>
          <Route path="/recipes/:id" component={Show}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
