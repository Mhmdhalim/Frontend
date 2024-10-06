import React, { useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CartContext } from './cartContext';
import NavBar from '../component/navBar';
import Footer from '../component/Footer';

const CardPage = () => {
    const location = useLocation();
    // Safely destructure properties with defaults
    const { img = '', title = 'Product Title', description = 'No Description', price = 0 } = location.state || {};
    const bg_status = true;
    const [count, setCount] = useState(1);
    const { addToCart } = useContext(CartContext);

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
    };

    return (
        <>
            <div className='flex flex-col gap-10 justify-center'>
                {/* NAVBAR */}
                <div className="h-20 mb-10">
                    <NavBar bg={bg_status} />
                </div>
                <div className='p-10 w-full flex sm:flex-row flex-col gap-6 items-center'>
                    <div className=''>
                        <img src={img} alt="" className='' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <h1 className='text-4xl font-extrabold'>{ title }</h1>
                        <p className='text-xl font-bold'>${price}</p>
                        <p className='font-semibold'>{description}</p>
                        <div className="flex items-center justify-start gap-5">
                            <input 
                                type="number" 
                                value={count} 
                                onChange={(e) => setCount(Math.max(1, e.target.value))} 
                                className="p-2 text-center border border-grey w-14 rounded" 
                                min="0" 
                            />
                            <button onClick={add_cart} className="bg-black hover:opacity-90 text-white font-bold py-2 px-4 rounded ">
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


//  <div className="max-w-2xl mx-auto my-10 p-6 border rounded-lg shadow-lg bg-white">
//             <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
//             <img src={img} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
//             <p className="text-gray-700 mb-4">{describtion}</p>
//             <div className="flex flex-col items-center mb-6">
//                 <h2 className="text-xl mb-2">Quantity: {count}</h2>
//                 <div className="flex items-center">
//                     <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded-l-md hover:bg-red-600">-</button>
//                     <span className="border-t border-b border-gray-300 text-lg px-4">{count}</span>
//                     <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">+</button>
//                 </div>
//                 <button onClick={add_cart} className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
//                     Add to Cart
//                 </button>
//             </div>
//             <Link to="/cart" className="bg-blue-500 text-white px-4 py-2 rounded block text-center hover:bg-blue-600">
//                 View Cart
//             </Link>
//         </div> i want handel the product the image in left and other in fornation in right make the add to cart buuton and the fo cart