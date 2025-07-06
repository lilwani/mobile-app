import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

export default function verify(req, res, next) {
    try {
        const auth = req.headers.authorization;
        if (auth) {
            const userToken = auth.split(' ')[1];
            const result = jwt.verify(userToken, process.env.SECRET_ACC_KEY);
            req.user = result;
            console.log(`Verification of request successful`);
            next();
        } else {
            console.log(`Verification has failed`);
            return res.status(401).json({
                message: {
                    isError: true,
                    errorMessage: 'No token received !',
                },
            });
        }
    } catch (error) {
        console.log(`auth/verify(): Error while verifying token - ${error}`);
        return res.status(401).json({
            message: {
                isError: true,
                errorMessage: error,
            },
        });
    }
}

export const generateAccessToken = (user) => {
    try {
        const accessToken = jwt.sign(
            { id: user.id },
            process.env.SECRET_ACC_KEY,
            {
                expiresIn: process.env.ACC_TOKEN_EXPIRY || '5s',
            },
        );
        return accessToken;
    } catch (error) {
        console.error(`auth/generateAccessToken : Error occured : ${error}`);
        throw Error(error);
    }
};

export const generateRefreshToken = (user) => {
    try {
        const refreshToken = jwt.sign(
            { id: user.id },
            process.env.SECRET_REF_KEY,
            {
                expiresIn: process.env.REF_TOKEN_EXPIRY || '10s',
            },
        );
        return refreshToken;
    } catch (error) {
        console.error(`auth/generateRefreshToken : Error occured : ${error}`);
        throw Error(error);
    }
};
