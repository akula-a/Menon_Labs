import React from 'react';
import './App.css';
import SearchBar from './search_bar';
import { useState } from 'react';
// import Ingredients from './Ingredients.svg';
import 'materialize-css/dist/css/materialize.min.css';


// import IngredientsHash from './ingredients';

// keeps track of selected food items
// class Food extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       selectedItems: Array(1).fill(null)
//     }
//   }

//   render() {
//     return <h1> Hello world! </h1>
//   }
// }

const items = [
  {id: '1', name: 'acorn squash' },
  {id: '2', name: 'agave nectar'},
  {id: '3', name: 'allspice'}, 
  {id: '4', name: 'almonds'},	
  {id: '5', name: 'almond milk'}, 
  {id: '6', name: 'anise'}
];

const filterItems = (items, query) => {
  if (!query) {
    return items;
  }

  return items.filter((item) => {
    const itemName = item.name.toLowerCase();
    return itemName.includes(query);
  });
}

// start by rendering one row (if none selected -> render row)
// if there is something selected, filter Params

function App() {
  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filtereditems = filterItems(items, searchQuery);
  // const selectionMade = false;

  return (
    <div className="App">
      <header className="App-header">
        <div class = "row"></div>
        <div class = "row">
          <h5 class = "col s7"> What ingredients do you have in your fridge? </h5>
          <button class = "col s2 offset-s2"> Customize your recipe </button>
        </div>
        <div class="row">
          <SearchBar
            class = "col s6"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div class = "row">
          {filtereditems.map((item) => (
            <p key={item.id} class= "center col s2">{item.name}</p>
          ))}
        </div>
        <div class = "row">
          <a href="./recipe.js" target="_blank">
            <button class = "col s2 offset-s5"> Suggest a recipe </button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
