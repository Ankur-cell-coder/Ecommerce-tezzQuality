import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink">Product</Link>
        <Link className="navLink">About</Link>
        <Link className="navLink">Contact</Link>
      </div>

      <div>
        <span className="cartCount">
          <Link to="/cart"> Cart:{items.length}</Link>
        </span>
        <Link className="navLink">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
