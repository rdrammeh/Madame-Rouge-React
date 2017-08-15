import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, IndexRoute, Switch} from 'react-router';
import {BrowserRouter, browserHistory} from 'react-router-dom';
import Recipes from './recipe_index/Recipes';
import Homepage from './Homepage/homepage'

import Show from './recipeshow/show';
import registerServiceWorker from './registerServiceWorker';
import {Button, Icon} from 'react-materialize';

import NewUser from './usersnew/newuser'
import Login from './login/Login';


ReactDOM.render(
  (<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/recipes/:id" component={Show}/>
      <Route path="/recipes" component={Recipes}/>
      <Route path="/users/new" component={NewUser}/>
      <Route path="/recipes" component={Recipes}/>
      <Route path="/users" component={Recipes}/>
      <Route path="/sessions/new" component={Login}/>
      <Route path="/recipes/:id" component={Show}/>

    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));

registerServiceWorker();
