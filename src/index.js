import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, IndexRoute, Switch} from 'react-router';
import {BrowserRouter, browserHistory} from 'react-router-dom';
import App from './App';
import Recipes from './recipe_index/Recipes';
import Homepage from './Homepage/homepage'
import Show from './recipeshow/show'
import NewUser from './usersnew/newuser'
import registerServiceWorker from './registerServiceWorker';
import Header from './header';


ReactDOM.render(
  (<BrowserRouter>
    <div>
       <App/>
   </div>
  </BrowserRouter>
  ), document.getElementById('root'));

registerServiceWorker();
