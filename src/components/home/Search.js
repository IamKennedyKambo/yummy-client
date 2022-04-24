import React from "react";
import styled from "styled-components";
// import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div>
      <RoundedInput placeholder="Enter search keyword" />
      {/* <FaSearch style={{ position: "absolute", left: 0 }} /> */}
    </div>
  );
};

const RoundedInput = styled.input`
  outline: none;
  border-radius: 15px;
  width: 75%;
  height: 4vh;
  border: none;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding: 10px;
  position: relative;
`;
export default Search;
