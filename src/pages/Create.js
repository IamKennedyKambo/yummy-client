import React, { useState } from "react";
import styled from "styled-components";
import SimpleFileUpload from "react-simple-file-upload";

const Create = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    servings: null,
    difficulty: "",
    imageUrl: "",
    caloriesPerServing: null,
    ingredients: "",
    steps: "",
    prepTime: "",
  });

  const onValueChange = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const clearState = () => {
    setState({
      title: "",
      description: "",
      servings: null,
      difficulty: "",
      imageUrl: "",
      caloriesPerServing: null,
      ingredients: "",
      steps: "",
      prepTime: "",
    });
  };

  const uploadEntry = () => {
    const recipeRequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    };

    try {
      fetch("https://yummy-army.herokuapp.com/recipes", recipeRequestOptions)
        .then((res) => res.json())
        .then((message) => {
          clearState();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFile = (url) => {
    setState((state) => ({
      ...state,
      imageUrl: url,
    }));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <RecipeBanner>
        <h4>Add your own recipe</h4>
        <p style={{ fontSize: "0.75rem" }}>
          Share your mastery in the kitchen with the world and be a delight to
          someone's kitchen.
        </p>
      </RecipeBanner>
      <Grid1 rows={3}>
        <MaterialTextField
          placeholder="Enter title"
          value={state.title}
          name="title"
          onChange={onValueChange}
        />
        <MaterialTextField
          placeholder="Enter servings"
          value={state.servings}
          name="servings"
          onChange={onValueChange}
        />
        <MaterialTextField
          placeholder="Enter calories"
          value={state.caloriesPerServing}
          name="caloriesPerServing"
          onChange={onValueChange}
        />
        <MaterialTextField
          placeholder="Enter prepTime"
          value={state.prepTime}
          name="prepTime"
          onChange={onValueChange}
        />
        <MaterialTextField
          placeholder="Enter cuisine"
          value={state.cuisine}
          name="cuisine"
          onChange={onValueChange}
        />
        <MaterialTextField
          placeholder="Enter difficulty"
          value={state.difficulty}
          name="difficulty"
          onChange={onValueChange}
        />
      </Grid1>

      <Grid2>
        <MaterialTextArea
          rows="4"
          placeholder="Enter description"
          name="description"
          value={state.description}
          onChange={onValueChange}
        />
        <MaterialTextArea
          rows="4"
          name="ingredients"
          onChange={onValueChange}
          value={state.ingredients}
          placeholder="Enter comma separated ingredients"
        />
      </Grid2>

      <MaterialTextArea
        rows="4"
        name="steps"
        value={state.steps}
        onChange={onValueChange}
        placeholder="Enter comma separated steps"
      />

      <Grid2>
        <MaterialBox>
          <SimpleFileUpload
            apiKey="f6e4616573bf24820217b9b0f65d76fe"
            onSuccess={handleFile}
            style={{ width: "100%", height: "100%" }}
          />
        </MaterialBox>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <ColoredButton onClick={() => clearState()}>
            Clear Fields
          </ColoredButton>
          <ColoredButton onClick={() => uploadEntry()}>
            Submit Entry
          </ColoredButton>
        </div>
      </Grid2>
    </div>
  );
};

const MaterialTextField = styled.input`
  outline: none;
  border-radius: 4px;
  width: 100%;
  height: 5vh;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

const MaterialTextArea = styled.textarea`
  outline: none;
  border-radius: 4px;
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

const MaterialBox = styled.div`
  background-color: white;
  width: 100%;
  height: 20vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const Grid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ColoredButton = styled.button`
  margintop: 2rem;
  marginbottom: 2rem;
  background: orange;
  height: 25%;
  border: none;
  color: white;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const RecipeBanner = styled.div`
  background-color: orange;
  color: white;
  width: 100%;
  text-align: start;
  box-shadow: 0 4px 8px 0 rgba(4, 105, 236, 0.2);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export default Create;
