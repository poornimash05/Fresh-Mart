import React, { useState } from 'react';
import { registerUser } from '../../services/authService';
//import { useLocation } from 'react-router-dom';
import './Register.css'; // Create a CSS file for custom styles
import { sendOtp, verifyOtp } from '../../services/authService';
const Register = () => {
    //const location = useLocation();
    const [email, setEmail] = useState(''); // Get email from login page
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const [success, setSuccess] = useState('');
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser(email, password);
            // Redirect to login or dashboard
        } catch (err) {
            setError(err.message);
        }
    };
    const handleSendOtp = async (e) => {
        e.preventDefault();
        try {
            await sendOtp(email);
            setStep(2); // Move to OTP verification step
            setSuccess('OTP sent to your email. Please check your inbox.');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            await verifyOtp(email, otp);
            // Registration successful, redirect or show success message
            setSuccess('Registration successful! You can now log in.');
            setStep(1); // Reset to initial step
        } catch (err) {
            setError(err.message);
        }
    };

   
    return (
        <div className="register-container">
            <div className="screen">
                <div className="screen__content">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                <h1>Register</h1>
                {step === 1 ? (
                    <form className="register" onSubmit={handleSendOtp}>
                        <div className="register__field">
                        <i className="register__icon fas fa-user"></i>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                                className="register__input"
                                required
                            />
                        </div>
                        <div className="register__field">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="register__input"
                                required
                            />
                        </div>
                        
                        <button className="button login__submit" type="submit">
                            <span className="button__text">Register</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                        <a href="/login" className="nav-link">Login</a>
                        </form>

            ) : (
                <form onSubmit={handleVerifyOtp}>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        required
                    />
                    <button type="submit">Verify OTP</button>
                </form>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        
    );
};

export default Register;