import { Router } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const usersDB = [
    {
        id: 100,
        userName: 'yash',
        password: 'yashlol@2025',
        isAdmin: true,
        token: [],
    },
    {
        id: 101,
        userName: 'moti',
        password: 'motihaha@2025',
        isAdmin: false,
        token: [],
    },
];

const users = Router();

const generateAccessToken = (user) => {
    const accessToken = jwt.sign(
        { id: user.id, isAdmin: user.isAdmin },
        process.env.SECRET_ACC_KEY,
        {
            expiresIn: '20s',
        },
    );
    return accessToken;
};

const generateRefreshToken = (user) => {
    const refreshToken = jwt.sign(
        { id: user.id, isAdmin: user.isAdmin },
        process.env.SECRET_REF_KEY,
        {
            expiresIn: '40s',
        },
    );
    return refreshToken;
};

users.post('/login', (req, res) => {
    try {
        console.log(`Inside /login path`);
        const { username, password } = req.body;
        let userIndex = null;
        const user = usersDB.find((userObj, idx) => {
            userObj.userName === username && userObj.password === password;
            userIndex = idx;
            return true;
        });
        if (user) {
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);
            usersDB[userIndex]['token'].push(refreshToken);
            res.status(200).json({
                message: {
                    userObj: {
                        uName: user.userName,
                        isAdmin: user.isAdmin,
                        accToken: accessToken,
                        refToken: refreshToken,
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

users.post('/signup', (req, res) => {
    try {
        const { username, password } = req.body;
        const nextUserID = usersDB.length + 100;
        usersDB.push({
            id: nextUserID,
            userName: username,
            password: password,
            isAdmin: true,
            token: [],
        });
        const userObj = {
            id: nextUserID,
            isAdmin: usersDB[usersDB.length - 1]['isAdmin'],
        };
        const accessToken = generateAccessToken(userObj);
        const refreshToken = generateRefreshToken(userObj);
        usersDB[usersDB.length - 1]['token'].push(refreshToken);
        res.status(200).json({
            message: {
                userObj: {
                    uName: username,
                    isAdmin: usersDB[usersDB.length - 1]['isAdmin'],
                    accToken: accessToken,
                    refToken: refreshToken,
                },
            },
        });
    } catch (error) {
        console.error(`users/post/signup : Error occured : ${error}`);
    }
});

export default users;
