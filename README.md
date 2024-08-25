# Getting Started with Create React App

--->Fresh Mart<---

Fresh, Vibrant, and Delicious!
At Fresh Mart, we are committed to delivering the freshest and highest-quality groceries, fruits, and vegetables directly to your doorstep. Our platform ensures a delightful shopping experience for all our customers.

1. Features:
   - User Registration with OTP Verification: Secure registration process that verifies users
     via OTP sent to their email.
   - User Login: Quick login for returning users using email and password.
   - Product Display: Browse a wide selection of fresh fruits, vegetables, and groceries.
   - Shopping Cart: Add items to your cart and manage quantities easily.
   - Checkout Process: Provide your address and payment method to complete your order.
   - Email Notifications: Receive confirmation emails for successful bookings.
     
2. Project Structure:
fresh-mart/
├── public/                  # Static files
│   ├── index.html
│   └── favicon.ico
├── src/                     # Source files
│   ├── assets/              # Images and other static assets
│   ├── components/          # Reusable components
│   │   ├── Auth/            # Authentication components
│   │   │   ├── Login.js     # Login component
│   │   │   ├── Register.js  # Registration component
│   │   ├── Product/         # Product-related components
│   │   │   ├── ProductList.js # Display list of products
│   │   │   ├── ProductItem.js # Individual product display
│   │   ├── Cart/            # Shopping cart component
│   │   │   ├── Cart.js      # Cart management
│   │   ├── Checkout/        # Checkout component
│   │   │   ├── Checkout.js  # Checkout process
│   ├── services/            # API services
│   │   ├── authService.js   # Authentication service
│   │   ├── productService.js # Product fetching service
│   │   ├── cartService.js    # Cart management service
│   │   └── bookingService.js  # Booking service
│   ├── App.js               # Main application component
│   └── index.js             # Entry point of the application
├── .env                     # Environment variables
├── package.json             # Project metadata and dependencies
└── README.md                # Documentation for the project

3. Installation:
   - Clone the repository:
         git clone https://github.com/YOUR_USERNAME/fresh-mart.git
         cd fresh-mart
   - Install dependencies:
         npm install
   - Set up environment variables:
     Create a .env file in the root directory and add your database connection string and email
     credentials:
        DATABASE_URL=your_database_url
        EMAIL_USER=your_email@gmail.com
        EMAIL_PASS=your_email_password
   - Run the application:
        npm start

4. Usage:
   - Navigate to http://localhost:3000 in your web browser to access the Fresh Mart application.
   - Register a new account or log in if you already have an account.
   - Browse products, add them to your cart, and proceed to checkout.

5. Contributing: If you would like to contribute to Fresh Mart, please fork the repository and 
    submit a pull request. Any contributions, suggestions, or improvements are welcome!
