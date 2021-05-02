import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import SelectedFood from './select_food.js'

// start by rendering one row (if none selected -> render row)
// if there is something selected, filter Params

// home page
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div class = "row"></div>
        <div class = "row">
          <h5 class = "col s7"> What ingredients do you have in your fridge? </h5>
        </div>
        <SelectedFood/>
        <div class = "row">
          <Link to="/recipes">
            <button class = "col s2 offset-s5"> Suggest a recipe </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
