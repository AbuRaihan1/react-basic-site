import React from "react";
import { useLoaderData } from "react-router-dom";
import Orders from "../Orders/Orders";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const loadProductsData = useLoaderData();

  return (
    <div className="all_wrapper">
      <div className="productsArea">
        {loadProductsData.map((products) => (
          <Products products={products} key={products.id}></Products>
        ))}
      </div>
      <div className="order-area">
        <div>
            <Orders></Orders>
        </div>
      </div>
    </div>
  );
};

export default Shop;
