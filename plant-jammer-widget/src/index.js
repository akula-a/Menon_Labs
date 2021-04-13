import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.js';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Recipes from './recipe.js';


// ReactDOM.render(route,
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const route = (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recipe" component={Recipes} />
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(route, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
