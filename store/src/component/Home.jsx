import React, { useEffect, useState } from 'react';
import { Api } from '../Api/Api';
import NavBar from './navBar';
import { Link, useNavigate } from 'react-router-dom';
import { useWishList } from '../product/wishListContext';  // <-- Import this
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import AddToCartButton from '../product/AddToCartButton';

const Home = () => {
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [liked, setLiked] = useState(false);

    const { addToWishList, wishListItems } = useWishList();  // <-- Use wishlist context

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Api("https://api.escuelajs.co/api/v1/products");
                setAll(data);
            } catch (error) {
                setError("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleHeartClick = (product, index) => {
        setLiked((prevLiked) => ({
            ...prevLiked,
            [index]: !prevLiked[index],
        }));

        if (!wishListItems.some(item => item.id === product.id)) {
            addToWishList(product);  // <-- Add product to wishlist
        }
    };

    const navigate = useNavigate();

    const handleViewDetails = (product) => {
        navigate("/card-page", {
            state: {
                img: product.images,
                title: product.title,
                description: product.description,
                price: product.price,
            },
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className="main relative">
                <header>
                    <NavBar />
                </header>
                <section className="first_text absolute sm:top-80 sm:left-20 top-56 left-8">
                    <p className="uppercase sm:text-4xl text-2xl font-extrabold text-white mb-4">
                        Discover Innovation,<br />  Elegance, and Style<br /> Where Technology Meets <br /> Timeless Beauty.
                    </p>
                    <Link to="/store" className='z-0'>
                        <button className="bg-white z-0 hover:bg-white text-black py-2 px-4 border-b-4 border-white-700 hover:border-white rounded-full">
                            Shop Now
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
                <div className="best_seller w-full">
                    <h1 className="head_best_seller uppercase p-6 text-4xl font-extrabold">Best Seller</h1>
                    <div className="flex gap-4 p-6">
                        {all
                            .filter((_, index) => index === 1 || index === 29 || index === 16 || index === 45)
                            .map((product, index) => (
                                <div key={index} className="font-bold p-5 product w-1/4 flex flex-col justify-between gap-4 group">
                                    <div className="relative">
                                        <img
                                            className="best_img flex justify-center items-center cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            src={product.images}
                                            alt={product.title}
                                            onClick={() => handleHeartClick(product, index)} // <-- Update to pass product
                                        />
                                    </div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        <AddToCartButton item={product} />
                                        <button className="bg-black text-white px-4 py-2 mt-2 rounded w-32" onClick={(e) => handleViewDetails(product)}>View Details</button>
                                    </div>
                                    <div>
                                        <div className="cursor-pointer flex justify-between mb-2">
                                            <span
                                                onClick={() => handleHeartClick(product, index)}
                                                className="cursor-pointer text-2xl hover:scale-110 text-black"
                                            >
                                                {liked[index] ? '♥️' : '♡'}
                                            </span>
                                            <p className="font-sans">${product.price}</p>
                                        </div>
                                        <h3>
                                            {product.title.length > 18
                                                ? product.title.slice(0, 17) + "..."
                                                : product.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
