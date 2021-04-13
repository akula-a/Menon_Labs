import React from 'react';
import './App.css';
import SearchBar from './search_bar';
import { useState } from 'react';
// import Ingredients from './Ingredients.svg';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import items from './ingredient_list.js';
import Popup from './customize_popup.js';

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

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 

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
          <button class = "col s2 offset-s2" onClick={togglePopup}> Customize your recipe </button>
        </div>
        {isOpen && <Popup
          content={<>
            <b class = "center">What are your dietary restrictions?</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button class = "center">Confirm preferences</button>
          </>}
          handleClose={togglePopup}
        />}
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
