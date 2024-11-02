import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../redux/cartSlice';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src="https://via.placeholder.com/50" alt={item.name} />
          <div>{item.name}</div>
          <div>${item.price}</div>
          <div className="cart-buttons">
            <button onClick={() => dispatch(decreaseItem(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseItem(item.id))}>+</button>
          </div>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
      <div className="total">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <button disabled style={{ cursor: 'not-allowed' }}>Checkout (Coming Soon)</button>
    </div>
  );
};

export default CartPage;
