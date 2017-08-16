import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RecipeForm from './recipe_new/recipe_form';


ReactDOM.render(
  (<BrowserRouter>
    <div>
       <App/>
   </div>
  </BrowserRouter>
  ), document.getElementById('root'));

registerServiceWorker();


// ingredients: [{amount: [amounts, amount]}, measurement: []]
