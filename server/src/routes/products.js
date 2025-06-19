import { Router } from 'express';
import verify from '../auth/index.js';

const productsDB = [
    {
        id: 1,
        brand: 'Samsung',
        model: 'Samsung Galaxy S24',
        launchDate: '01-12-2023',
        price: '55000',
        img: 'S24',
        adminId: 1,
    },
    {
        id: 2,
        brand: 'Samsung',
        model: 'Samsung Galaxy S24+',
        launchDate: '01-15-2023',
        price: '58000',
        img: 'S24+',
        adminId: 1,
    },
    {
        id: 3,
        brand: 'Samsung',
        model: 'Samsung Galaxy S25 Ultra',
        launchDate: '05-10-2023',
        price: '98000',
        img: 'S25Ultra',
        adminId: 1,
    },
    {
        id: 4,
        brand: 'Samsung',
        model: 'Samsung Galaxy SFlip 6',
        launchDate: '04-27-2023',
        price: '105000',
        img: 'SFlip6',
        adminId: 1,
    },
    {
        id: 5,
        brand: 'Samsung',
        model: 'Samsung Galaxy SFold',
        launchDate: '08-11-2023',
        price: '110000',
        img: 'SFold',
        adminId: 1,
    },
    {
        id: 6,
        brand: 'Motorola',
        model: 'Motorola Edge 60',
        launchDate: '10-12-2024',
        price: '60000',
        img: 'MEdge60',
        adminId: 2,
    },
    {
        id: 7,
        brand: 'Motorola',
        model: 'Motorola Razor 40',
        launchDate: '10-04-2024',
        price: '45000',
        img: 'MRazor40',
        adminId: 2,
    },
    {
        id: 8,
        brand: 'Google',
        model: 'Google Pixel 4A',
        launchDate: '10-18-2022',
        price: '25000',
        img: 'G4A',
        adminId: 3,
    },
    {
        id: 9,
        brand: 'Google',
        model: 'Google Pixel 6A',
        launchDate: '05-05-2023',
        price: '33000',
        img: 'G6A',
        adminId: 3,
    },
    {
        id: 10,
        brand: 'Google',
        model: 'Google Pixel 8',
        launchDate: '18-07-2024',
        price: '50000',
        img: 'G8',
        adminId: 3,
    },
    {
        id: 11,
        brand: 'Google',
        model: 'Google Pixel 8 Pro',
        launchDate: '01-12-2024',
        price: '62000',
        img: 'G8Pro',
        adminId: 3,
    },
    {
        id: 12,
        brand: 'Google',
        model: 'Google Pixel 9 ProXL',
        launchDate: '01-08-2024',
        price: '95000',
        img: 'G9ProXL',
        adminId: 3,
    },
];

const products = Router();

products.get('/all', verify, (req, res) => {
    try {
        console.log('Inside products');
        res.status(200).send({
            message: { isError: false, data: productsDB },
        });
    } catch (error) {
        console.error(`products/get/all: Error occured : ${error}`);
        return res.status(500).json({
            message: { isError: true, errorMessage: error },
        });
    }
});

products.get('/admin/:id', verify, (req, res) => {
    try {
        console.log('Inside products');
        const prodsOfAdmin = productsDB.filter(
            (item) => item.adminId == `${req.params.id}`,
        );
        console.log(` Admin prods are - ${JSON.stringify(prodsOfAdmin)}`);
        if (prodsOfAdmin.length) {
            res.status(200).send({
                message: { isError: false, data: prodsOfAdmin },
            });
        } else {
            res.status(500).json({
                message: { isError: true, errorMessage: 'No Products found' },
            });
        }
    } catch (error) {
        console.error(`products/get/id: Error occured : ${error}`);
        return res.status(500).json({
            message: { isError: true, errorMessage: error },
        });
    }
});

export default products;
