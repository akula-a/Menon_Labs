import React from 'react';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import Popup from './customize_popup.js';
import { useState } from 'react'
import PopupForm from './popup_content.js';
// import { Link } from 'react-dom';

function Recipe() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return (
    <div className = "Recipe">
        <br/>
        <div class = "row">
          <h5 class = "col s7"> Choose a recipe based on your preferences  </h5>
          <button class = "col s2 offset-s2" onClick={togglePopup}> Customize your recipe </button>
        </div>

        {isOpen && <Popup content={<> <PopupForm/> </>}
          handleClose={togglePopup}
        />}

        <div class = "row">
          <div class = "card col s3 center" id = "card"> 
            <div class="card-image">
              <img src={require('./recipe_placeholder.png').default} alt="Recipe"/>
              <span class="card-title">Tempeh and Veggie Mix</span>
            </div>
          </div>
          <div class = "card col s3 center" id = "card"> 
            <div class="card-image">
              <img src={require('./recipe_placeholder.png').default} alt="Recipe"/>
              <span class="card-title">Tempeh and Veggie Mix</span>
            </div>
          </div>
          <div class = "card col s3 center" id = "card"> 
            <div class="card-image">
              <img src={require('./recipe_placeholder.png').default} alt="Recipe"/>
              <span class="card-title">Tempeh and Veggie Mix</span>
            </div>
          </div>
        </div>

        <div class = "row">
          <a href='./recommendations'> 
            <button class = "col s2 offset-s5"> Find ingredients </button>
          </a>
        </div>
    </div>
  )
  
}

export default Recipe;
