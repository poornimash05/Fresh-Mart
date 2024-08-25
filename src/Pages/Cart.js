import React from 'react';
import { getCartItems, removeFromCart } from '../services/cartService';

const Cart = () => {
    const cartItems = getCartItems();

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
    };

    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>No items in cart yet.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.price} x {item.quantity}
                            <button onClick={() => handleRemoveFromCart(item)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;