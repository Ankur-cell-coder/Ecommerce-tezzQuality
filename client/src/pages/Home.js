import React from "react";
import Products from "../components/Products";

function Home() {
  return (
    <div>
      <h2 className="heading"> Welcome to the Kishan Guru Store</h2>
      <section>
        <h3>Our Products</h3>
        <Products />
      </section>
    </div>
  );
}

export default Home;
