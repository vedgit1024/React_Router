import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    return navigate("/products");
  }
  return (
    <>
      <h1>Home</h1>;
      <button onClick={handleClick}>Click Here To View Products</button>
    </>
  );
};

export default Home;
