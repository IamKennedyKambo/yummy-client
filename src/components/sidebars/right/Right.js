import React, { useEffect, useState } from "react";
import "../sidebars.css";

const Right = () => {
  const [recipeId, setRecipeId] = useState("");
  const [recipe, setRecipe] = useState({});

  window.addEventListener("storage", () => {
    setRecipeId(localStorage.getItem("recipe"));
  });

  const getRecipe = async () => {
    const apiData = await fetch(
      `https://yummy-army.herokuapp.com/recipes/${recipeId}`
    );

    const jsonData = await apiData.json();
    console.log(jsonData);
    console.log(`https://yummy-army.herokuapp.com/recipes/${recipeId}`);
    setRecipe(jsonData);
  };

  useEffect(() => {
    getRecipe();
  }, [recipeId]);

  return (
    <div className="right">
      <img className="recipe-image" src={recipe.imageUrl} alt={recipe.title} />
      <h4>{recipe.title}</h4>
      <h6>{recipe.prepTime}</h6>
      <h6>{recipe.servings}</h6>
      <h6>{recipe.caloriesPerServing}</h6>
      <p>{recipe.description}</p>
      <p>Ingredients</p>
      {recipe.ingredients &&
        recipe.ingredients.map((ingredient) => {
          return <p>{`- ${ingredient}`}</p>;
        })}
      <p>Procedure</p>
      {recipe.steps &&
        recipe.steps.map((step) => {
          return <p>{`- ${step}`}</p>;
        })}
    </div>
  );
};

export default Right;
