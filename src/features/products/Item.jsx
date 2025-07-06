import React from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Item({ product }) {
    return (
        <li className="my-4 mx-10">
            <Link to={`/products/item/${product.id}`}>
                <Card className="max-w-sm bg-slate-500 rounded-2xl w-[400px] cursor-pointer hover:bg-slate-700">
                    <img
                        src={`/${product.img}.jpg`}
                        className="rounded-lg w-[150px] h-[150px] items-center"
                    />
                    <div className="flex justify-between">
                        <h5 className="text-zinc-300 text-center tracking-widest ">
                            {product.model}
                        </h5>
                        <p className="text-zinc-300 tracking-wider">
                            Rs.{product.price}
                        </p>
                    </div>
                </Card>
            </Link>
        </li>
    );
}
