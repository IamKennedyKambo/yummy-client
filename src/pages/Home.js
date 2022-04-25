import React from "react";
import Recipes from "../components/home/recipes/Recipes";
import Search from "../components/home/Search";

const Home = () => {
  return (
    <div>
      <Search />
      <Recipes />
    </div>
  );
};

export default Home;
