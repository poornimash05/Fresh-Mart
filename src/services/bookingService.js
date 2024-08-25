const API_URL = 'http://localhost:5000/api/booking'; // Ensure this is correct

// Complete booking
export const completeBooking = async (cartItems, email, address, paymentMethod) => {
    try {
        const response = await fetch(`${API_URL}/book`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, products: cartItems, address, paymentMethod }),
        });
        if (!response.ok) {
            throw new Error('Booking failed');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error completing booking: ' + error.message);
    }
};