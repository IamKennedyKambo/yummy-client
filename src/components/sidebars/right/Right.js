import React, { useEffect, useState } from "react";
import "../sidebars.css";

const Right = () => {
  const [recipeId, setRecipeId] = useState("");
  const [recipe, setRecipe] = useState({});

  window.addEventListener("storage", () => {
    setRecipeId(localStorage.getItem("recipe"));
  });

  const getRecipe = async () => {
    try {
      const apiData = await fetch(
        `https://yummy-army.herokuapp.com/recipes/${recipeId}`
      );

      const jsonData = await apiData.json();
      setRecipe(jsonData);
    } catch (error) {}
  };

  const renderView = () => {
    if (Array.isArray(recipe) || Object.entries(recipe).length === 0) {
      console.log(recipe);
      return <p>Click on a recipe to view its details</p>;
    } else {
      return (
        <div>
          <img
            className="recipe-image"
            src={recipe.imageUrl}
            alt={recipe.title}
          />
          <h4>{recipe.title}</h4>
          <h6>{recipe.prepTime}</h6>
          <h6>{recipe.servings}</h6>
          <h6>{recipe.caloriesPerServing}</h6>
          <p>{recipe.description}</p>
          <p>{recipe.ingredients && `Ingredients`}</p>
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient) => {
              return <p>{`- ${ingredient}`}</p>;
            })}
          <p>{recipe.ingredients && `Steps`}</p>
          {recipe.steps &&
            recipe.steps.map((step) => {
              return <p>{`- ${step}`}</p>;
            })}
        </div>
      );
    }
  };

  useEffect(() => {
    getRecipe();
  }, [recipeId]);

  return <div className="right">{renderView()}</div>;
};

export default Right;
