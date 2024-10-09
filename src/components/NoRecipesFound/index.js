import React from "react";
import "./index.css";

const NoRecipesImage = () => {
  return (
    <div className="no-recipes">
      <img
        src="https://norecipes.com/wp-content/uploads/2023/04/logo.png"
        alt="No Recipes Available"
        className="image"
      />
    </div>
  );
};

export default NoRecipesImage;
