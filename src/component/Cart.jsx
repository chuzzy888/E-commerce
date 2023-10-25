// Cart.js

import React from 'react';
import { useCart } from 'react-use-cart';
import './Cart.css'

function Cart() {
  const {
    isEmpty,
    cartTotalItems,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <div className="cart-container">
      {isEmpty ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          <h3 className="cart-title">Cart Summary</h3>
          <p className="cart-summary">
            Total Items in Cart: {cartTotalItems} | Total Unique Items in Cart: {totalUniqueItems}
          </p>
          <ul className="cart-items">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <span className="item-name">{item.name}</span>
                </div>
                <div className="item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="quantity-button"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button className="remove-button" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className="empty-cart-button" onClick={emptyCart}>
            Empty Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
