import { Router } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const usersDB = [
    {
        id: 1,
        userName: 'yash',
        password: 'yashlol@2025',
        isAdmin: true,
    },
    {
        id: 2,
        userName: 'moti',
        password: 'motihaha@2025',
        isAdmin: false,
    },
];

const users = Router();

users.post('/login', (req, res) => {
    try {
        console.log(`Inside /login path`);
        const { username, password } = req.body;
        const user = usersDB.find(
            (userObj) =>
                userObj.userName === username && userObj.password === password,
        );
        if (user) {
            const resToken = jwt.sign(
                { id: user.id, isAdmin: user.isAdmin },
                process.env.SECRET_KEY,
            );
            res.status(200).json({
                message: {
                    userObj: {
                        uName: user.userName,
                        isAdmin: user.isAdmin,
                        token: resToken,
                    },
                },
            });
        } else {
            res.status(401).json({
                message:
                    'User cannot be authenticated. Please check your credentials',
            });
        }
    } catch (error) {
        console.error(`users/post/login : Error occured - ${error}`);
    }
});

export default users;
