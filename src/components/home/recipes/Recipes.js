import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./recipes.css";

const Content = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const rawData = await fetch("https://yummy-army.herokuapp.com/recipes");
      const jsonData = await rawData.json();
      console.log(jsonData);
      setRecipes(jsonData);
    } catch (error) {}
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="recipe-parent">
      {recipes.map((recipe) => {
        return <Recipe data={recipe} />;
      })}
    </div>
  );
};

export default Content;
