import React from "react";
import Chips from "../components/home/chips/Chips";
import Recipes from "../components/home/recipes/Recipes";
import Search from "../components/home/Search";

const Home = () => {
  return (
    <div>
      <Search />
      <Chips />
      <Recipes />
    </div>
  );
};

export default Home;
