import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { usersDB } from './users.js';
import { generateAccessToken, generateRefreshToken } from '../auth/index.js';
dotenv.config();

const authRoute = express.Router();

authRoute.get('/refreshToken', (req, res) => {
    try {
        const { userId } = req.body;
        if (userId) {
            const { token } = usersDB.find(
                (item) => item.id === `${userObj.id}`,
            );
            if (token) {
                const result = jwt.verify(token, process.env.SECRET_REF_KEY);
                console.log(
                    'Refresh token is still valid. Create a new one and pass to client',
                );
                const acc_token = generateAccessToken(result);
                const ref_token = generateRefreshToken(result);
                for (const user of usersDB) {
                    if (user.id === `${result.id}`) {
                        user.token = ref_token;
                    }
                }
                res.status(200).json({
                    message: {
                        isError: false,
                        data: acc_token,
                    },
                });
            } else {
                return res.status(500).json({
                    message: {
                        isError: true,
                        errorMessage: 'Server could not find user. Re-login',
                    },
                });
            }
        } else {
            return res.status(400).json({
                message: {
                    isError: true,
                    errorMessage: 'User Id not passed.',
                },
            });
        }
    } catch (error) {
        console.error(`auth/refreshToken : Error occured : ${error}`);
        return res
            .send(500)
            .json({ message: { isError: true, errorMessage: error } });
    }
});

export { authRoute };
