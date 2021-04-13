import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

// citation: https://www.emgoto.com/react-search-bar/

const SearchBar = ({searchQuery, setSearchQuery}) => (
    <form action="/" method = "get">
        <label htmlFor = "header-search">
            <span className = "hidden"> </span>
        </label>
        <input 
            value = {searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type = "text"
            id = "header-search"
            placeholder = "Search for ingredients that you have"
            name="s" />
        <button type="submit"><i class="material-icons">search</i></button>
    </form>
);

// export default Search;
export default SearchBar;