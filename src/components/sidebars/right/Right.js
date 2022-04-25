import React, { useEffect, useState } from "react";
import "../sidebars.css";
import { IoTimeSharp } from "react-icons/io5";
import { GiHotMeal } from "react-icons/gi";
import { IoIosFlame } from "react-icons/io";
import styled from "styled-components";
import Click from "../../../assets/click.svg";

const Right = () => {
  const [recipeId, setRecipeId] = useState("");
  const [recipe, setRecipe] = useState({});

  window.addEventListener("storage", () => {
    setRecipeId(localStorage.getItem("recipe"));
  });

  const steps = recipe.steps && recipe.steps.toString().split(",");
  const ingredients =
    recipe.ingredients && recipe.ingredients.toString().split(",");

  const renderView = () => {
    if (Array.isArray(recipe) || Object.entries(recipe).length === 0) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            height: "100%",
          }}
        >
          <img style={{ width: "8rem" }} src={Click} alt="cooking-svg" />
          <p style={{ textAlign: "center" }}>Click on a recipe to see more</p>
        </div>
      );
    } else {
      return (
        <div className="right-parent">
          <img
            className="right-recipe-image"
            src={recipe.imageUrl}
            alt={recipe.title}
          />
          <div className="right-recipe-content">
            <p>{recipe.title}</p>
            <div className="first">
              <WrapperDiv>
                <IoTimeSharp />
                <p>{recipe.prepTime}</p>
              </WrapperDiv>
              <WrapperDiv>
                <GiHotMeal />
                <p>{recipe.servings}</p>
              </WrapperDiv>
              <WrapperDiv>
                <IoIosFlame />
                <p>{recipe.caloriesPerServing}</p>
              </WrapperDiv>
            </div>

            <BorderedDiv>
              <p>{recipe.description}</p>
            </BorderedDiv>
            <BorderedDiv>
              <p>{recipe.ingredients && `Ingredients`}</p>
              {recipe.ingredients &&
                ingredients.map((ingredient) => {
                  return <p>{`- ${ingredient}`}</p>;
                })}
            </BorderedDiv>
            <BorderedDiv>
              <p>{recipe.steps && `Steps`}</p>
              {recipe.steps &&
                steps.map((step) => {
                  return <p>{`- ${step}`}</p>;
                })}
            </BorderedDiv>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const apiData = await fetch(
          `https://yummy-army.herokuapp.com/recipes/${recipeId}`
        );

        const jsonData = await apiData.json();
        setRecipe(jsonData);
      } catch (error) {}
    };

    getRecipe();
  }, [recipeId]);

  return <div className="right">{renderView()}</div>;
};

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const BorderedDiv = styled.div`
  border: 1px orange solid;
  border-radius: 0.5rem;
  padding: 10px;
  background: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default Right;
