import React from "react";
import { useParams } from "react-router-dom";

const ProductInfoPage = () => {
  let params = useParams();
  // console.log(params);
  return (
    <div>
      <h1>Product Info Page</h1>
      <p>id = {params.id}</p>
    </div>
  );
};

export default ProductInfoPage;
