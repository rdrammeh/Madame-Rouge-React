import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router';
import Recipes from './recipe_index/Recipes';
import Homepage from './Homepage/homepage'
import NewUser from './usersnew/newuser'
import Show from './recipeshow/show'
import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
         <Header/>
         <Main />
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/users/new" component={NewUser}/>
          <Route path="/recipes" component={Recipes}/>
          <Route path="/users" component={Recipes}/>
          <Route path="/sessions/new" component={Recipes}/>
          <Route path="/recipes/:id" component={Show}/>
        </Switch>
      </div>
    );
  }
}

export default App;
