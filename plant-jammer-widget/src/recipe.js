import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

function Recipes(){
    return (
        <div className = "Recipe">
            <p> Hello world </p>
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <Recipes/>
  </React.StrictMode>,
  document.getElementById('root')
);

export default Recipes;
