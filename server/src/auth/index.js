import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

export default function verify(req, res, next) {
    try {
        const auth = req.headers.authorization;
        if (auth) {
            const userToken = auth.split(' ')[1];
            const result = jwt.verify(userToken, process.env.SECRET_KEY);
            console.log(result);
            next();
        } else {
            res.status(401).json({
                message: 'You do not have authorization !',
            });
        }
    } catch (error) {
        console.log(`auth/verify(): Error while verifying token - ${error}`);
    }
}

