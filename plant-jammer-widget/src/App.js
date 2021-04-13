import React from 'react';
import './App.css';
import SearchBar from './search_bar';
import { useState } from 'react';
// import Ingredients from './Ingredients.svg';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import items from './ingredient_list.js';

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

// home page
function App() {
  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredItems = filterItems(items, searchQuery);
  // const selectionMade = false;
  const selectedItems = [];

  // iconClicked(item) {
  //   selectedItems.concat(item);
  //   selectionMade = true;
  // onClick = {this.iconClicked(item)}
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div class = "row"></div>
        <div class = "row">
          <h5 class = "col s7"> What ingredients do you have in your fridge? </h5>
          <button class = "col s2 offset-s2"> Customize your recipe </button>
        </div>
        <div class = "row"> <p> </p> </div>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery} />
        <div class = "row">
          {selectedItems.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
        <div class = "row">
          {filteredItems.map((item) => (
              <img src={item.id} class= "center col s1 offset-s1" alt="Icon" id="icon"/>
            ))}
        </div>
        <div class = "row">
            {filteredItems.map((item) => (
              <p key={item.id} class= "center col s2">{item.name}</p>
            ))}
        </div>
        <div class = "row">
          <Link to="./recipe.js">
            <button class = "col s2 offset-s5"> Suggest a recipe </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
