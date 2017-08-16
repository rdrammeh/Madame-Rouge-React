import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import AdminShow from './Admin/show';
import Homepage from './Homepage/homepage'
import Recipes from './recipe_index/Recipes';
import NewUser from './usersnew/newuser';
import Show from './recipeshow/show';
import Login from './login/Login';
import ShowUser from './users/show';
import RecipeForm from './recipe_new/recipe_form';



class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/recipes" component={Recipes}/>
          <Route exact path="/users/new" component={NewUser}/>
          <Route exact path="/recipes/new" component={RecipeForm} />
          <Route exact path="/sessions/new" component={Login}/>
          <Route path="/users/:id" component={ShowUser}/>
          <Route path="/recipes/:id" component={Show}/>
          <Route path="/admin" component={AdminShow}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
