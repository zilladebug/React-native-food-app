import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "b02e588f";
  const APP_KEY = "8fa1434f2468113e8e08ce97a7bc45b3";
  //STATE
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  //[search] = get new recipes
  useEffect(() => {
    getRecipes();
  }, [query]);

  //STATE
  const getRecipes = async () => {
    const response = await fetch(
      //add {query} in the string to minify the request, when searching
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  //e.target.value = value of the input
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  //Preventing the search function, from requesting all the time.
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  //PROPS
  //Taking info from state, passing it down to props, and then to component recipe.js
  return (
    <div className="app">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
