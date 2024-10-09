// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import Pagination from "./components/Pagination";
import NoRecipesFound from "./components/NoRecipesFound";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [caloriesFilter, setCaloriesFilter] = useState(null);
  const [proteinFilter, setProteinFilter] = useState(null);

  const fetchRecipes = async () => {
    let url = `https://episearch-backend.onrender.com//search?q=${query}&page=${page}&size=10`;

    if (caloriesFilter) {
      url += `&calories_gt=${caloriesFilter}`;
    }
    if (proteinFilter) {
      url += `&protein_gt=${proteinFilter}`;
    }
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.recipes);
    setTotal(data.total);
  };

  useEffect(() => {
    fetchRecipes();
  }, [query, page, caloriesFilter, proteinFilter]);

  return (
    <div className="app">
      <div className="left-half">
        <SearchBar
          setQuery={setQuery}
          setCaloriesFilter={setCaloriesFilter}
          setProteinFilter={setProteinFilter}
        />
      </div>
      <div className="right-half">
        {recipes.length === 0 ? (
          <NoRecipesFound />
        ) : (
          <>
            <RecipeList recipes={recipes} />
            <Pagination total={total} page={page} setPage={setPage} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
