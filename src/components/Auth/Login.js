import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
const Login = () => {
    //const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await login(email, password);
            // Store user data in context or local storage
            navigate('/products'); // Redirect to products page after login
        } catch (err) {
            setError(err.message);
        }
    };
    
    return (
        <div className="login-container">
            <div className="screen">
                <div className="screen__content">
                
                    <form className="login" onSubmit={handleLogin}>
                    <h1>Login</h1>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                className="login__input"
                            />
                            <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                        </div>
                        <button className="button login__submit" type="submit">
                            <span className="button__text">Login</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <a href="/register" className="nav-link">Register</a>
                    <br></br>
                    <a href="/login" className="nav-link">Forgot Password?</a>
                
                    {error && <p className="error">{error}</p>}
                    
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
            
        </div>
    );
};

export default Login;