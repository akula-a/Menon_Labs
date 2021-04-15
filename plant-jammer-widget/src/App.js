import React from 'react';
import './App.css';
import { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import Popup from './customize_popup.js';
import SelectedFood from './select_food.js'

// start by rendering one row (if none selected -> render row)
// if there is something selected, filter Params

// home page
function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class = "row"></div>
        <div class = "row">
          <h5 class = "col s7"> What ingredients do you have in your fridge? </h5>
          <button class = "col s2 offset-s2" onClick={togglePopup}> Customize your recipe </button>
        </div>
        {isOpen && <Popup
          content={<>
            <h6>What are your dietary restrictions?</h6><br/>
            <div class = "row">
              <button class = "col s3 offset-s1">Vegan</button>
              <button class = "col s3 offset-s1">Vegetarian</button>
              <button class = "col s3 offset-s1">Gluten Free</button><br/>
            </div>
            <h6>How many people are you serving?</h6><br/>
            <h6>What are your cost restrictions?</h6><br/>
            <div class = "row">
              <button class = "col s3 offset-s5">Confirm preferences</button>
            </div>
          </>}
          handleClose={togglePopup}
        />}
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
