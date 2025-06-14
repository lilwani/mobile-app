import cors from 'cors';

const whiteListURL = process.env.WHITELIST_FRONTEND_URL.split(',');

const config = cors({
    origin: whiteListURL,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'POST'],
});

export { config };
