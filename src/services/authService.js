const API_URL = 'http://localhost:5000/api/auth'; // Ensure this is correct

// Register user
export const registerUser = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error registering user: ' + error.message);
    }
};

// Login user
export const login = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error logging in: ' + error.message);
    }
};

// Send OTP
export const sendOtp = async (email) => {
    try {
        const response = await fetch(`${API_URL}/send-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        if (!response.ok) {
            throw new Error('Failed to send OTP');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error sending OTP: ' + error.message);
    }
};

// Verify OTP
export const verifyOtp = async (email, otp) => {
    try {
        const response = await fetch(`${API_URL}/verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp }),
        });
        if (!response.ok) {
            throw new Error('OTP verification failed');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error verifying OTP: ' + error.message);
    }
};
