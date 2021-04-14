import React from 'react';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import Popup from './customize_popup.js';
import { useState } from 'react'

function Recommendations() {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
 
    return (
        <div className = "Recommendation">
        <br/>
        <div class = "row">
          <h5 class = "col s7"> This recipe needs  </h5>
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

        <div class = "row">
          <div class = "card-panel col s3 center" id = "ingredient-card"> Ingredient 1 </div>
          <div class = "card-panel col s3 center" id = "ingredient-card"> Ingredient 2 </div>
          <div class = "card-panel col s3 center" id = "ingredient-card"> Ingredient 3 </div>
          <div class = "card-panel col s3 center" id = "ingredient-card"> Ingredient 4 </div>
        </div>

        </div>
    )
}

export default Recommendations;