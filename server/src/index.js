import express from 'express';
import usersRoutes from './routes/users.js';
import productsRoutes from './routes/products.js';
import dotenv from 'dotenv';
import { authRoute } from './routes/authRoutes.js';
import { config as corsConfig } from './corsConfig.js';

dotenv.config();
const app = express();
const PORT = process.env.NODE_PORT || 4050;

app.use(corsConfig);
app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/auth', authRoute);

app.get('/', (req, res) => {
    console.log(`In here connected`);
    res.status(200).json({
        message: `I am connect to ${process.env.NODE_PORT}`,
    });
});

app.listen(PORT, (err) => {
    if (err) {
        console.log('Error is ', err);
    }
    console.log(`App started at ${PORT} 🚀`);
});
