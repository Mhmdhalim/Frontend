import React, { useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CartContext } from '../product/cartContext';

const CardPage = () => {
    const location = useLocation();
    const { img, title, describtion, price } = location.state;

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
        <div>
            <h1>{title}</h1>
            <div className="flex flex-col items-center">
                <h1 className="text-xl mb-4">Quantity: {count}</h1>
                <div>
                    <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded mr-2">-</button>
                    <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded">+</button>
                    <br />
                    <button onClick={add_cart} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
                </div>
            </div>
            <Link to="/cart" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 block text-center">
                View Cart
            </Link>
        </div>
    );
};

export default CardPage;
