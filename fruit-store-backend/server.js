const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const dotenv = require('dotenv');
const pool = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

pool.connect()
    .then(() => console.log('PostgreSQL connected'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/booking', bookingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});