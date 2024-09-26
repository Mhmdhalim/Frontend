import React, { useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CartContext } from './cartContext';

const CardPage = ({ e }) => {
    console.log(e)
    const location = useLocation();
    // Safely destructure properties with defaults
    const { img = '', title = 'Product Title', describtion = 'No Description', price = 0 } = location.state || {};

    const [count, setCount] = useState(1);
    const { addToCart } = useContext(CartContext);

    const increment = () => setCount(count + 1);
    const decrement = () => count > 1 && setCount(count - 1);

    const add_cart = () => {
        const item = {
            img,
            title,
            describtion,
            price,
            total: price * count,
            count
        };
        addToCart(item);
    };

    return (
        <div className="max-w-2xl mx-auto my-10 p-6 border rounded-lg shadow-lg bg-white">
            <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
            <img src={img} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text-gray-700 mb-4">{describtion}</p>
            <div className="flex flex-col items-center mb-6">
                <h2 className="text-xl mb-2">Quantity: {count}</h2>
                <div className="flex items-center">
                    <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded-l-md hover:bg-red-600">-</button>
                    <span className="border-t border-b border-gray-300 text-lg px-4">{count}</span>
                    <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">+</button>
                </div>
                <button onClick={add_cart} className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
                    Add to Cart
                </button>
            </div>
            <Link to="/cart" className="bg-blue-500 text-white px-4 py-2 rounded block text-center hover:bg-blue-600">
                View Cart
            </Link>
        </div>
    );
};

export default CardPage;
