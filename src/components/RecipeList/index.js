import React from "react";
import "./index.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      <h1 className="recipe-heading">Recipes</h1>
      {recipes.map((recipe, index) => (
        <div className="recipe-item" key={index}>
          <h3 className="title">{recipe.title}</h3>
          <p>Rating: {recipe.rating}</p>
          <p>Calories: {recipe.calories}</p>
          <p>Protein: {recipe.protein}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
