// import logo from './logo.svg';
import React from 'react';
import './App.css';
import SearchBar from './search_bar';
import { useState } from 'react';
import Ingredients from './Ingredients.svg';
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

const posts = [
  { id: '1', name: 'This first post is about React' },
  { id: '2', name: 'This next post is about Preact' },
  { id: '3', name: 'We have yet another React post!' },
  { id: '4', name: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
}

// start by rendering one row (if none selected -> render row)
// if there is something selected, filter Params

function App() {
  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);
  // const selectionMade = false;

  return (
    <div className="App">
      <header className="App-header">
        <h2> What ingredients do you have in your fridge? </h2>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ul>
          {filteredPosts.map((post) => (
            <li kep={post.id}>{post.name}</li>
          ))}
        </ul>
        <img src={Ingredients} alt="Ingredients"/>
        <a href="./recipe.js" target="_blank">
          <Button color="primary" variant="outlined"> Suggest a recipe </Button>
        </a>
      </header>
    </div>
  );
}

export default App;
