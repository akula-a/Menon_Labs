import React from 'react';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

function Recommendations() {
    return (
        <div className = "Recommendation">
        <br/>
        <div class = "row">
          <h5 class = "col s7"> This recipe needs  </h5>
        </div>

        <div class = "row">
          <div class = "card col s3 center" id = "card"> 
            <div class="card-image">
              <img src={require('./ingredients_placeholder.png').default} alt="Ingredient"/>
            </div>
          </div>
          <div class = "card col s3 center" id = "card"> 
            <div class="card-image">
              <img src={require('./ingredients_placeholder.png').default} alt="Ingredient"/>
            </div>
          </div>
          <div class = "card col s3 center" id = "card"> 
            <div class="card-image">
              <img src={require('./ingredients_placeholder.png').default} alt="Ingredient"/>
            </div>
          </div>
        </div>

        </div>
    )
}

export default Recommendations;