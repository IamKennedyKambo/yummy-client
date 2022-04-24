import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    servings: 0,
    difficulty: "",
    caloriesPerServing: 100,
    ingredients: [],
    steps: [],
    prepTime: "",
  });

  const onValueChange = (propertyName) => (event) => {
    setState((state) => ({
      ...state,
      [propertyName]: event.target.value,
    }));
  };
  return (
    <form>
      <MaterialTextField
        placeholder="Enter title"
        value={state.title}
        onChange={onValueChange("title")}
      />
      <MaterialTextField
        placeholder="Enter servings"
        value={state.servings}
        onChange={onValueChange("servings")}
      />
      <MaterialTextField
        placeholder="Enter calories"
        value={state.caloriesPerServing}
        onChange={onValueChange("caloriesPerServing")}
      />
      <MaterialTextField
        placeholder="Enter prepTime"
        value={state.prepTime}
        onChange={onValueChange("prepTime")}
      />
      <MaterialTextField
        placeholder="Enter cuisine"
        value={state.cuisine}
        onChange={onValueChange("cuisine")}
      />
      <MaterialTextField
        placeholder="Enter difficulty"
        value={state.difficulty}
        onChange={onValueChange("difficulty")}
      />
      <MaterialTextField
        style={{ width: "32.2rem", padding: "10px" }}
        placeholder="Enter description"
        onChange={onValueChange("description")}
        type="textarea"
        value={state.description}
      />
    </form>
  );
};

const MaterialTextField = styled.input`
  outline: none;
  border-radius: 4px;
  width: 10rem;
  height: 5vh;
  border: none;
  margin: 0.5rem;
  padding: 10px;
`;

export default Form;
