import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./recipes.css";
import styled from "styled-components";

const Content = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes(query);
  };

  const getRecipes = async (query) => {
    try {
      const rawData = await fetch(
        `https://yummy-army.herokuapp.com/recipes?title=${query}`
      );

      console.log(`https://yummy-army.herokuapp.com/recipes?title=${query}`);
      const jsonData = await rawData.json();
      setRecipes(jsonData);
    } catch (error) {}
  };

  useEffect(() => {
    getRecipes(query);
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <RoundedInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search keyword"
        />
      </form>

      <div className="recipe-parent">
        {recipes.map((recipe) => {
          return <Recipe data={recipe} />;
        })}
      </div>
    </div>
  );
};

const RoundedInput = styled.input`
  outline: none;
  border-radius: 20px;
  width: 90%;
  height: 5vh;
  border: none;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding: 10px;
  position: relative;
`;

export default Content;
