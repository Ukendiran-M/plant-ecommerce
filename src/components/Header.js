import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header>
      <Link to="/">Home</Link> | 
      <Link to="/products">Products</Link> | 
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} /> Cart ({totalQuantity})
      </Link>
    </header>
  );
};

export default Header;
