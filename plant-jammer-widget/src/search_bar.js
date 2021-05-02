import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

// citation: https://www.emgoto.com/react-search-bar/

const SearchBar = ({searchQuery, setSearchQuery}) => (
    <div class = "row">
        <form action="/" method = "get" class = "offset-s3 col s6" id = "search">
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
            <button type="submit" class = "col s3 offset-s5" id="search-btn">
                Search
            </button>
        </form>
    </div>
);

// export default Search;
export default SearchBar;