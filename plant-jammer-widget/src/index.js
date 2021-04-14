import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// for routing to different pages
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import Recipes from './recipe.js';


// ReactDOM.render(
//   <React.StrictMode>
//     <Recipes />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const route = (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recipes" component={Recipes} />
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(route, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
