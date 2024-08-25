const User = require('../models/User');
const { sendOtpEmail } = require('../../src/utils/emailService');
const bcrypt = require('bcryptjs');


let otpVerificationData = {}; // Temporary storage for OTPs

exports.register = async (req, res) => {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    otpVerificationData[email] = { otp, password }; // Store OTP and password temporarily

    // Send OTP via email
    await sendOtpEmail(email, otp);
    res.json({ message: 'OTP sent successfully. Please verify to complete registration.' });
};

exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    if (otpVerificationData[email] && otpVerificationData[email].otp === otp) {
        const { password } = otpVerificationData[email];
        const hashedPassword = await bcrypt.hash(password, 10);

        // Register the user
        await User.create({ email, password: hashedPassword });
        delete otpVerificationData[email]; // Clear OTP after registration
        res.json({ message: 'Registration successful!' });
    } else {
        res.status(400).json({ error: 'Invalid OTP' });
    }
};

// Existing login function remains unchanged
exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        res.json({ id: user.id, email: user.email });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};