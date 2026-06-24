import React from "react";

function Product({ title, price, image, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={title}
        className="product-image"
        loading="lazy"
      />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">₹{price.toLocaleString("en-IN")}</p>
      <button className="add-cart-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;