import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, IndexRoute, Switch} from 'react-router';
import {BrowserRouter, browserHistory} from 'react-router-dom';
import Recipes from './recipe_index/Recipes';
import Homepage from './Homepage/homepage'
import Show from './recipeshow/show'
import registerServiceWorker from './registerServiceWorker';
import RecipeForm from './recipe_new/recipe_form';

ReactDOM.render(
  (<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/recipes/new" component={RecipeForm}/>
      <Route path="/recipes" component={Recipes}/>
      <Route path="/recipes/:id" component={Show}/>
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));

registerServiceWorker();


// ingredients: [{amount: [amounts, amount]}, measurement: []]
