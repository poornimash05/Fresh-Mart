import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file for custom styles

const LandingPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleKnowMore = (e) => {
        e.preventDefault();
        // Navigate to the login page with the email as a state
        navigate('/login', { state: { email } });
    };

    return (
        <div>
            <header id="header">
                <div className="header-content-div">
                    <a href="#home-sec">
                        <img
                            src="data:image/png;base64,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"
                            alt="Company Logo"
                            id="header-img"
                        />
                    </a>
                    <nav id="nav-bar">
                        <a href="#about" className="nav-link">ABOUT</a>
                        <a href="#varieties" className="nav-link">PRODUCTS</a>
                        <a href="#our-service" className="nav-link">OUR SERVICE</a>
                        <a href="#benefits" className="nav-link">BENEFITS</a>
                        <a href="#contact" className="nav-link">CONTACT</a>
                    </nav>
                </div>
            </header>
            <main>
                <section id="home-sec" className="flexible home-sec">
                    <div className="eye-grabber-img">
                        <img src="https://play-lh.googleusercontent.com/DZGAKkhe79COve4VmShEq3pfCzd0Qn6b0ir8dtYdBCgxF2bPS4lVyET_xZbS0Bhi9ac" alt="My Website logo" />
                    </div>
                    <div className="eye-grabber">
                        <h1>Fresh, Instant, and Delicious!</h1>
                        <h2>
                        100% organicfruits, vegetables and groceries are delivered instantly to your doorstep.
                        </h2>
                        <button className="btn" onClick={() => window.location.href = '#contact'}>
                            Buy Now
                        </button>
                    </div>
                </section>
                <section id="about" className="sec-padding">
                    <h3 className="section-heading">ABOUT US</h3>
                    <div className="sec-content-div flexible">
                        <p>
                            We are a group of people with decades of experience in growing and
                            selling fresh fruits, Vegetables and grocery. At Fresh Cart, we are 
                            committed to delivering the freshest and highest-quality fruits 
                            straight to your doorstep. Our dedicated team works tirelessly to 
                            ensure a delightful shopping experience for all our customers.
                        </p>
                        <br></br>
                        <img src="https://www.britbuyer.co.uk/wp-content/uploads/2021/07/vegetables_delivery.jpg" alt="A man plucking apples from the tree" />
                    </div>
                </section>
                <section id="varieties" className="sec-padding">
                    <h3 className="section-heading">PRODUCTS</h3>
                    <div className="sec-content-div flexible">
                        <div className="tile">
                            <img src="https://www.nutritionadvance.com/wp-content/uploads/2017/12/red-and-green-apples.jpg" alt="Apples" />
                            <h4>Fruits</h4>
                            <p>
                            Fruits are important sources of dietary fibre, vitamins and antioxidants. Although fresh fruits are subject to spoilage, their shelf life can be extended by refrigeration or by the removal of oxygen from their storage or packaging containers. 
                            </p>
                        </div>
                        <div className="tile">
                            <img
                                src="https://www.nutritionadvance.com/wp-content/uploads/2021/09/various-different-herbs-and-spices.jpg"
                                alt="photo of american trel apples"
                            />
                            <h4>Herbs and Spices</h4>
                            <p>
                            Herbs and spices can add a lot of flavor to home-cooked foods and thus make a healthier way of eating more enjoyable.
                            </p>
                        </div>
                        <div className="tile">
                            <img src="https://www.nutritionadvance.com/wp-content/uploads/2021/09/jar-of-tomato-paste.jpg" />
                            <h4>Processed Foods</h4>
                            <p>
                            There are numerous varieties of potatoes with Russet, Yukon Gold, and Marcy being popular varieties. Potatoes generally have a white to yellow flesh and brown skin. You can also buy purple potatoes.
                            </p>
                        </div>
                        <div className="tile">
                            <img src="https://www.nutritionadvance.com/wp-content/uploads/2021/09/various-fermented-foods-in-glass-jars.jpg" alt="photo of Maharaej apples" />
                            <h4>Fermented Food</h4>
                            <p>
                            Cultures around the world all have their own fermented foods, such as kimchi (Korea), natto (Japan), sauerkraut (Germany), tempeh (Indonesia). These foods can be desirable in both taste characteristics and nutritional properties.


                            </p>
                        </div>
                        <div className="tile">
                            <img src="https://leafyplace.com/wp-content/uploads/2021/02/beet.jpg" alt="photo of Hazratbael apples" />
                            <h4>Beets</h4>
                            <p>
                            The most popular variety of beet is the classic dark-purple or red variety. However, you can also buy golden beets, pink beets, and even striped beets.
                            </p>
                        </div>
                        <div className="tile">
                            <img src="https://www.nutritionadvance.com/wp-content/uploads/2017/12/an-avocado-cut-in-half-showing-the-seed-in-the-middle.jpg" alt="photo of Golden Delicious apples" />
                            <h4>Avocados</h4>
                            <p>
                            Avocados are extremely nutrient-dense, and they are rich in fiber, protein, vitamins, and minerals – especially potassium.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="our-service" className="sec-padding">
                    <h3 className="section-heading">OUR SERVICE</h3>
                    <div className="sec-content-div">
                        <div className="bars">
                            <div className="icon-container">
                                <img src="https://i.ibb.co/w6H542X/Fresh.png" alt="" />
                            </div>
                            <div className="txt-container">
                                <h5>Fresh</h5>
                                <p>We deliver fresh apples with a 100% guarantee of freshness.</p>
                            </div>
                        </div>
                        <div className="bars">
                            <div className="icon-container">
                                <img src="https://i.ibb.co/FKNq4Qr/delivered.png" alt="" />
                            </div>
                            <div className="txt-container">
                                <h5>Fast</h5>
                                <p>
                                    We deliver your orders as fast as possible, delivery procedure
                                    begins as soon as apple is plucked from tree.
                                </p>
                            </div>
                        </div>
                        <div className="bars">
                            <div className="icon-container">
                                <img src="https://i.ibb.co/HHQK1wV/happy.png" alt="" />
                            </div>
                            <div className="txt-container">
                                <h5>Satisfying</h5>
                                <p>
                                    We guarantee 100% customer satisfaction. We do our best to make
                                    your purchase experience smooth. But if we mess up somehow you
                                    will get compensated for every inconvenience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="benefits" className="sec-padding">
                    <h3 className="section-heading">BENEFITS</h3>
                    <div className="sec-content-div flexible">
                        <iframe
                            id="video"
                            width="560"
                            title="Benefits of Apple"
                            height="315"
                            src="https://www.youtube.com/embed/W_JOJNztrnI"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
                <section className="sec-padding" id="contact">
                    <h3 className="section-heading">CONTACT</h3>
                    <div className="sec-content-div flexible">
                        <h6>To make an order or just to know more contact us :</h6>
                        
                        <form onSubmit={handleKnowMore}>
                        <br></br>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email Address"
                                required
                            />
                            <button type="submit" className="btn">Know More</button>
                        </form>
                    </div>
                </section>
            </main>
            <footer>
                Created by : 
                <a href="#">Poornima Sharma</a>
            </footer>
        </div>
    );
};

export default LandingPage;