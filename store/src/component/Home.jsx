import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Api } from '../Api/Api';
import NavBar from './navBar';
import { Link } from 'react-router-dom';

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Home = () => {

    // DATA
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await Api("https://fakestoreapi.com/products");
            setAll(data); // Set the resolved data
        } catch (error) {
            setError("Failed to fetch categories"); // Handle errors
        } finally {
            setLoading(false); // Stop loading once data is fetched
        }
        };

        fetchData(); // Call the async function
    }, []);
    
    // Handle Click for heart, toggling the specific product's heart icon
    const handleHeartClick = (index) => {
        setLiked(prevLiked => ({
            ...prevLiked,
            [index]: !prevLiked[index] // Toggle the state for the specific product
        }));
    };


    if (loading) return <p>Loading...</p>; // Display loading state
    if (error) return <p>{error}</p>;
    return (
        <>
            <div className="main relative">
                <header>
                    <NavBar />
                </header>
                <section className="first_text absolute sm:top-80 sm:left-20 top-56 left-8">
                    <p className=" uppercase sm:text-4xl text-2xl font-extrabold text-white mb-4">
                    Discover Innovation,<br />  Elegance, and Style<br /> Where Technology Meets <br /> Timeless Beauty.
                        </p>
                        <Link to="/store" className='z-0' >
                                <button className="bg-white z-0 hover:bg-white text-black  py-2 px-4 border-b-4 border-white-700 hover:border-white rounded-full">
                                    shop now
                                </button>
                        </Link>
                    </section>
            </div>
            <div className='flex flex-wrap'>
                <section className='bg-white w-full'>
                    <div className="first_images p-8 flex justify-center items-center gap-4 w-full overflow-hidden">
                        <img className='sm:w-1/4 w-1/2' src={img1} alt="" />
                        <img className='sm:w-1/4 w-1/2' src={img2} alt="" />
                        <img className='w-1/4 img3' src={img3} alt="" />
                        <img className='w-1/4 img4' src={img4} alt="" />
                    </div>
                </section>
                <div className='best_seller w-full'>
                    <h1 className='head_best_seller uppercase p-6 text-4xl font-extrabold'>best seller</h1>
                    <div className='flex gap-4 p-6'>
                        {all
                            .filter((_, index) => index === 2 || index === 5 || index === 19 || index === 12)  // Filter for indices 1, 2, 3
                            .map((product, index) => (
                                <div key={index} className="font-bold p-5 product w-1/4 flex flex-col justify-between gap-4">
                                    <img onClick={() => handleHeartClick(index)} className='best_img flex justify-center items-center cursor-pointer' src={product.image} alt="" />
                                    
                                    <div>
                                        <div className='flex justify-between mb-2 '>
                                            <span onClick={() => handleHeartClick(index)} className='text-2xl hover:scale-110 text-red-800'>{liked[index] ? '♥️' : '♡'}</span>
                                            <p className='font-sans'>${product.price}</p>
                                        </div>
                                        <h3>
                                            {product.title.length > 18 ? product.title.slice(0, 17) + '...' : product.title}
                                        </h3>
                                        <div className='flex flex-col'>
                                            <button>view details</button>
                                            <button>add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home
