import React, { useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CartContext } from './cartContext';
import NavBar from '../component/navBar';
import Footer from '../component/Footer';

const CardPage = () => {
    const location = useLocation();
    // Safely destructure properties with defaults
    const { img = '', title = 'Product Title', description = 'No Description', price = 0 } = location.state || {};
    const bg_status = false;
    const [count, setCount] = useState(1);
    const { addToCart } = useContext(CartContext);

    // State to manage notification visibility and message
    const [notification, setNotification] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const add_cart = () => {
        const item = {
            img,
            title,
            description,
            price,
            total: price * count,
            count
        };
        addToCart(item);

        // Set the notification message and visibility
        setNotification(`Added to cart 😂😉`);
        setIsVisible(true);

        // Hide the notification after 3 seconds
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    };

    return (
        <>
            <div className='flex flex-col gap-10 justify-center'>
                {/* NAVBAR */}
                <div className="h-20 mb-10">
                    <NavBar bg={bg_status} />
                </div>
                
                {/* Notification Div */}
                {isVisible && (
                    <div className="fixed left-0 top-1/4 transform -translate-y-1/2 p-2 rounded-r-md bg-blue-500 text-white transition-opacity duration-300">
                        {notification}
                    </div>
                )}

                <div className='p-10 w-full flex sm:flex-row flex-col gap-6 items-center'>
                    <div className=''>
                        <img src={img} alt="" className='' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <h1 className='text-4xl font-extrabold'>{title}</h1>
                        <p className='text-xl font-bold'>${price}</p>
                        <p className='font-semibold'>{description}</p>
                        <div className="flex items-center justify-start gap-5">
                            <input 
                                type="number" 
                                value={count} 
                                onChange={(e) => setCount(Math.max(1, e.target.value))} 
                                className="p-2 text-center border border-grey w-14 rounded" 
                                min="1" 
                            />
                            <button onClick={add_cart} className="bg-black hover:opacity-90 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                            <Link to="/cart" className="bg-black hover:opacity-90 text-white font-bold py-2 px-4 rounded">
                                View Cart
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <Footer />
            </div>
        </>
    );
};

export default CardPage;
