import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [disabled, setDisabled] = useState(false);

  const handleAddToCart = () => {
    onAddToCart();
    setDisabled(true);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button disabled={disabled} onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
