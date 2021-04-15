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

    var selectedItems = Array(0);
    // var selectionMade = false; 
    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredItems = filterItems(items, searchQuery);

    return (
        <div class = "SearchItems">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div class = "row">
            {selectedItems.map((item) => ( <p key={item.id}>{item.name}</p> ))}
        </div>
        <div class = "row"> <p> </p> </div>
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
    </div>
)

}

export default SelectedFood;