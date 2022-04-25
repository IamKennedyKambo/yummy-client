import React from "react";
import "./recipes.css";

const Recipe = ({ data }) => {
  const recipe = data || {
    title: "Ugali",
    prepTime: "25 minutes",
    servings: 2,
    cuisine: "german",
    imageUrl: "https://image.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vel.",
    ingredients: ["Water", "Maize meal"],
    steps: [
      "Boil water in a pan",
      "Add maize meal",
      "Stir till all lumps break down and theres no flour",
      "Cover",
    ],
  };

  const updateLocalStorage = () => {
    window.localStorage.setItem("recipe", recipe._id);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="recipe-card" onClick={() => updateLocalStorage()}>
      <img className="recipe-image" src={recipe.imageUrl} alt={recipe.title} />
      <div className="recipe-content">
        <h5>{recipe.title}</h5>
        <p>{recipe.cuisine}</p>
      </div>
    </div>
  );
};

export default Recipe;
