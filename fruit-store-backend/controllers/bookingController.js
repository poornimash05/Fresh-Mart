const { sendBookingConfirmation } = require('../../src/utils/emailService');
exports.bookProduct = async (req, res) => {
    const { email, productId, quantity, address, paymentMethod } = req.body;

    // Logic to save booking details to the database can go here
    const bookingDetails = `Product ID: ${productId}, Quantity: ${quantity}, Address: ${address}, Payment Method: ${paymentMethod}`;

    try {
        // Send confirmation email
        await sendBookingConfirmation(email, bookingDetails);
        res.status(200).json({ message: 'Booking confirmed and email sent!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send confirmation email' });
    }
};