import React from "react";
import { Link } from "react-router-dom";

const DUMMPY_PRODUCTS = [
  { id: "1", name: "Product 1" },
  { id: "2", name: "Product 2" },
  { id: "3", name: "Product 3" },
];

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      {DUMMPY_PRODUCTS.map((prod) => {
        return (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Products;
