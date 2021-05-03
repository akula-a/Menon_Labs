import React from 'react'; 
import items from './ingredient_list.js';
import SearchBar from './search_bar';
import { useState } from 'react';

const filterItems = (items, query) => {
    if (!query) {
      return items;
    }
  
    return items.filter((item) => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(query);
    });
}
  
// keeps track of selected food items
function SelectedFood() {

    // for search bar
    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredItems = filterItems(items, searchQuery);

    // selecting food items
    const [foodList, setList] = useState([]);
    const imageClick = (item) => {
        setList(foodList.concat(item));
    };

    let ListTemplate;
    ListTemplate = foodList.map((item) =>
        <li key={item.id}>{item.name}</li>
    );

    return (
        <div class = "SearchItems">
        <div class = "row">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} class = "col s6 offset-s3"/>
        </div>
        <h6 class = "col s2 center"> Selected Food Items </h6>
        <ul class = "col s2 center "> {ListTemplate} </ul>
        <div class = "row"></div>
        <div class = "row">
            {filteredItems.map((item) => (
            <img src={item.id} class= "center col s1 offset-s1" alt="Icon" id="icon" 
            onClick={() => imageClick(item)} />
            ))}
        </div>
        <div class = "row">
            {filteredItems.map((item) => (
            <p key={item.id} class= "center col s2">{item.name}</p>
            ))}
        </div>
        
    </div>
)

}

export default SelectedFood;