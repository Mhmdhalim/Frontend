import React, { useEffect, useState } from 'react';
import { Api } from '../Api/Api';
import NavBar from './navBar';
import { Link, useNavigate } from 'react-router-dom';
import { useWishList } from '../product/wishListContext';  // <-- Import this
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

import homeVideo from '../assets/homeVideo.mp4'
import AddToCartButton from '../product/AddToCartButton';

const Home = () => {
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [liked, setLiked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(null);

    const itemsPerSlide = 3;

    const { addToWishList, wishListItems } = useWishList();  // <-- Use wishlist context

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Api("https://fakestoreapi.in/api/products");
                setAll(data.products);
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
                img: product.image,
                title: product.title,
                description: product.description,
                price: product.price,
            },
        });
    };

    // HANDEL NEXT AND PREV BUTTONS
    const nextSlide = () => {
        setSlideDirection('right');
        if (currentIndex < all.length - itemsPerSlide) {
        setCurrentIndex(currentIndex + itemsPerSlide);
        } else {
        setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        setSlideDirection('left');
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex - itemsPerSlide);
        } else {
        setCurrentIndex(all.length - itemsPerSlide);
        }
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
                Discover Innovation,
                <br /> Elegance, and Style
                <br /> Where Technology Meets <br /> Timeless Beauty.
                </p>
                <Link to="/store" className="z-0">
                <button className="bg-white z-0 hover:bg-white text-black py-2 px-4 border-b-4 border-white-700 hover:border-white rounded-full">
                    Shop Now
                </button>
                </Link>
            </section>
            </div>
            {/* Fixed Imgaes */}
            <div className="flex flex-wrap p-10">
            <section className="bg-white w-full">
                <div className="first_images p-8 flex justify-center items-center gap-4 w-full overflow-hidden">
                <img className="sm:w-1/4 w-1/2" src={img1} alt="" />
                <img className="sm:w-1/4 w-1/2" src={img2} alt="" />
                <img className="w-1/4 img3" src={img3} alt="" />
                <img className="w-1/4 img4" src={img4} alt="" />
                </div>
            </section>
            {/* BEST SELLERS */}
            <div className="best_seller w-full p-20">
                <h1 className="head_best_seller uppercase px-[-50px] sm:text-4xl text-2xl font-extrabold">
                    Best Seller
                </h1>
                <div className="best_seller_all flex justify-center items-center gap-10 p-4">
                {all
                    .filter(
                    (_, index) =>
                        index === 1 || index === 3 || index === 2 || index === 4
                    )
                    .map((product, index) => (
                    <div
                        key={index}
                        className="font-bold p-5 product w-1/4 flex flex-col sm:flex-row justify-between gap-4 group"
                    >
                        <div className="relative">
                            <img
                                className="best_img flex justify-center items-center  cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                src={product.image}
                                alt={product.title}
                                onClick={() => handleHeartClick(product, index)} // <-- Update to pass product
                            />
                        </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <AddToCartButton item={product} />
                                <button
                                    className="bg-black text-white px-4 py-2 mt-2 rounded w-32"
                                    onClick={(e) => handleViewDetails(product)}
                                >
                                    View Details
                                </button>
                            </div>
                        <div>
                        <div className="cursor-pointer flex justify-between mb-2">
                            <span
                            onClick={() => handleHeartClick(product, index)}
                            className="cursor-pointer text-2xl hover:scale-110 text-black"
                            >
                            {liked[index] ? "♥️" : "♡"}
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
            {/* VIDEO */}
            <div className="bg-white w-full p-5 flex justify-center align-middle relative z-0">
                <video loop autoPlay muted src={homeVideo}></video>
                <div className="P_video absolute top-96 left-20 z-10 text-[#f6f2e2]">
                    <p className="w-[500px] font-semibold text-lg mb-6">
                        <span className='font-extrabold text-4xl mb-3 inline-block'>Mousa Exclusive Collection </span><br />
                        Step into a realm of unparalleled style and sophistication with
                        Mousa. Curate your perfect wardrobe with our exquisite selection
                        of clothing, cutting-edge electronics, and stunning jewelry.
                        Experience the perfect blend of luxury and modernity. Discover
                        your unique look today!
                    </p>
                    <Link to="/store" className="z-0">
                        <button className="video_btn bg-white z-0 hover:bg-white text-[#2c2c21] py-2 px-4 border-b-4 border-white-700 hover:border-white rounded-full">
                        Shop Now
                        </button>
                    </Link>
                </div>
                </div>

                {/* MORE PRODUCTS */}
                <div className="best_seller w-full relative p-20">
                    <h1 className="head_best_seller uppercase sm:text-4xl text-2xl font-extrabold text-center mb-10">
                        Ypu may also like
                    </h1>
                    <div className="carousel-container relative flex justify-center items-center">
                        {/* Prev Button */}
                        <button
                        onClick={prevSlide}
                        className="button prev absolute left-0 p-3 bg-gray-500 bg-opacity-50 text-white rounded-full hover:bg-opacity-80 z-10"
                        >
                        Prev
                        </button>

                        {/* Products Display */}
                        <div className="product-list best_seller_all w-full flex justify-center items-center gap-10 p-4">
                        {all
                            .map((product, index) => (
                            <div
                                    key={index}
                                    className={`product ${slideDirection === 'right' ? 'slide-in-right' : 'slide-in-left'} font-bold p-5 product w-1/3 flex flex-col sm:flex-row justify-between gap-4 group`}
                            >
                                <div className="relative">
                                <img
                                    className="best_img w-full h-auto object-cover cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    src={product.image}
                                    alt={product.title}
                                    onClick={() => handleHeartClick(product, index)} // <-- Update to pass product
                                />
                                </div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <AddToCartButton item={product} />
                                <button
                                    className="bg-black text-white px-4 py-2 mt-2 rounded w-32"
                                    onClick={(e) => handleViewDetails(product)}
                                >
                                    View Details
                                </button>
                                </div>
                                <div>
                                <div className="cursor-pointer flex justify-between mb-2">
                                    <span
                                    onClick={() => handleHeartClick(product, index)}
                                    className="cursor-pointer text-2xl hover:scale-110 text-black"
                                    >
                                    {liked[index] ? "♥️" : "♡"}
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

                        {/* Next Button */}
                        <button
                        onClick={nextSlide}
                        className="absolute right-0 p-3 bg-gray-500 bg-opacity-50 text-white rounded-full hover:bg-opacity-80 z-10"
                        >
                        Next
                        </button>
                    </div>
                </div>
                {/* SIGN IN */}
                <div className='p-5 h-72 w-full bg-white'>
                    <div className='px-10 bg-blue-600 h-full flex justify-between items-center'>
                        <p className='text-4xl font-bold text-white w-[450px] tracking-wide leading-6'>
                            Sign up to our newsletter <br /> & get 20% Off
                        </p>
                        <button class="bg-white text-gray-800 text-3xl font-bold py-4 px-8 border-b-4 border-blue-700 ">
                            SIGN UP FOR FREE
                        </button>
                    </div>
                </div>
                {/* FOOTER */}
                <footer className='flex justify-between items-start gap-20 p-8 w-full'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-gray-800 '>Mosua</h1>
                        <p>Your trusted fashion companion</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold text-gray-800 uppercase'>navigation</h1>
                        <Link>Home</Link>
                        <Link>Shop</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold text-gray-800 uppercase'>categories</h1>
                        <Link>Clothes</Link>
                        <Link>Clothes</Link>
                        <Link>Clothes</Link>
                        <Link>Clothes</Link>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold text-gray-800 uppercase'>social</h1>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Home;