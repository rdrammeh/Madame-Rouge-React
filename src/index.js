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

ReactDOM.render(
  (<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/recipes/:id" component={Show}/>
      <Route path="/recipes" component={Recipes}/>
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));

registerServiceWorker();
