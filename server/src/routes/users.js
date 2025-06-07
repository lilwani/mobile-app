import { Router } from 'express';
import verify, {
    generateAccessToken,
    generateRefreshToken,
} from '../auth/index.js';
import dotenv from 'dotenv';
dotenv.config();

export const usersDB = [
    {
        id: 100,
        userName: 'yash',
        password: 'yashlol@2025',
        isAdmin: true,
        token: '',
        adminId: 1,
    },
    {
        id: 101,
        userName: 'moti',
        password: 'motihaha@2025',
        isAdmin: true,
        token: '',
        adminId: 2,
    },
    {
        id: 102,
        userName: 'lala',
        password: 'lalahehe@2j286',
        isAdmin: true,
        token: '',
        adminId: 3,
    },
];

const users = Router();

users.get('/getAllUsers', (req, res) => {
    res.status(200).json({ message: { isError: false, data: usersDB } });
});

users.post('/login', (req, res) => {
    try {
        console.log(`Inside /login path`);
        const { username, password } = req.body;
        let userIndex = null;
        let user = null;
        for (const index of usersDB.keys()) {
            if (
                usersDB[index].userName === username &&
                usersDB[index].password === password
            ) {
                userIndex = index;
                user = usersDB[userIndex];
            }
        }
        console.log(
            `Index is ${userIndex}. and data is ${JSON.stringify(
                usersDB[userIndex],
            )}`,
        );
        if (user) {
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);
            usersDB[userIndex]['token'] = refreshToken;
            return res.status(200).json({
                message: {
                    isError: false,
                    data: {
                        userName: usersDB[userIndex]['userName'],
                        token: accessToken,
                    },
                },
            });
        } else {
            return res.status(401).json({
                message: {
                    isError: true,
                    errorMessage:
                        'User cannot be authenticated. Please check your credentials',
                },
            });
        }
    } catch (error) {
        console.error(`users/post/login : Error occured - ${error}`);
        return res.status(500).json({
            message: {
                isError: true,
                errorMessage: 'Something wrong happened while logging in user.',
            },
        });
    }
});

users.post('/signup', (req, res) => {
    try {
        const { username, password, makeAdmin } = req.body;
        const nextUserID = usersDB.length + 100;
        usersDB.push({
            id: nextUserID,
            userName: username,
            password: password,
            isAdmin: makeAdmin,
            token: [],
            adminId: usersDB.length,
        });
        const userObj = {
            id: nextUserID,
        };
        const accessToken = generateAccessToken(userObj);
        const refreshToken = generateRefreshToken(userObj);
        usersDB[usersDB.length - 1]['token'] = refreshToken;
        return res.status(200).json({
            message: {
                isError: false,
                data: { userName: username, token: accessToken },
            },
        });
    } catch (error) {
        console.error(`users/post/signup : Error occured : ${error}`);
        return res.status(500).json({
            message: {
                isError: true,
                errorMessage: 'Something wrong happened while signing up user.',
            },
        });
    }
});

users.post('/logout', verify, (req, res) => {
    try {
        console.log(`User decided to log out.`);
        for (const userItem of usersDB) {
            if (userItem.id === `${req.user.id}`) {
                userItem.token = '';
            }
        }
        return res.status(200).json({
            message: { isError: false, data: 'User logged out successfully' },
        });
    } catch (error) {
        console.error(`users/logout : Error occured : ${error}`);
        return res.status(500).json({
            message: {
                isError: true,
                errorMessage:
                    'Something wrong happened while logging out user.',
            },
        });
    }
});

export default users;
