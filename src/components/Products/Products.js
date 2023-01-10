import React from "react";
import logo from "../../logo.svg";
import './Products.css'
const Products = ({ products }) => {
  console.log(products);
  const { img, id, name, price, quantity } = products;
  return (
    <div>
      <div className="product_wrapper">
        <img src={img ? img : logo} alt="product-img" />
        <h3>{name}</h3>
        <h4>Price : ${price}</h4>
        <h4>Quantity : {quantity}</h4>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Products;
