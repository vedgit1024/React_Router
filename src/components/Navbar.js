import React from "react";
import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   return <h2>Navbar</h2>;
// };
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <ul className={classes["nav-list"]}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
