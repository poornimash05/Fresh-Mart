
import React, { useState } from 'react';
import { getCartItems, clearCart } from '../../src/services/cartService';
import { completeBooking } from '../../src/services/bookingService';

const Checkout = () => {
    const cartItems = getCartItems();
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleCheckout = async () => {
        try {
            const email = 'user@example.com'; // Replace with actual user email
            await completeBooking(cartItems, email, address, paymentMethod);
            clearCart();
            // Redirect to confirmation page
        } catch (err) {
            console.error('Error completing booking:', err);
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total: {totalPrice}</p>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
            />
            <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
            >
                <option value="">Select Payment Method</option>
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
            </select>
            <button onClick={handleCheckout}>Complete Booking</button>
        </div>
    );
};

export default Checkout;