import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe.jsx";
function App() {
  const APP_ID = "dc34792b";
  const APP_KEY = "3eab1a651f78f58e8b394f905f3efa21";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cake");

  const onSubmitHandler = () => {
    setQuery(search);
    setSearch("");
  };
  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const result = await response.json();
      console.log(result.hits);
      setRecipes(result.hits);
    }
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          className="search-button"
          onClick={onSubmitHandler}
        >
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => {
          return (
            <Recipe
              img={recipe.recipe.image}
              name={recipe.recipe.label}
              cal={recipe.recipe.calories}
              ing={recipe.recipe.ingredients}
              key={recipe.recipe.label}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
