import React, { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../Api/Api";
import NavBar from "../component/navBar";
import Footer from "../component/Footer";
import AddToCartButton from "../product/AddToCartButton";
import Loading from "../product/Loading";
import Error from "../product/Error";

export const StoreContext = createContext();

const Furniture = () => {
    // DATA
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors
    const bg_status = false;

    // Show More Button
    const [visibleProducts, setVisibleProducts] = useState(4); // Initial number of visible products
    const [liked, setLiked] = useState({}); // Track liked status for each product

    // Function to load more products
    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 4); // Load 5 more products each time
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Api("https://fakestoreapi.com/products");
                setAll(data); // Set the fetched data
            } catch (error) {
                setError("Failed to fetch categories"); // Handle errors
            } finally {
                setLoading(false); // Stop loading once data is fetched
            }
        };

        fetchData(); // Call the async function
    }, []);

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

    if (loading) return <Loading loading={loading} />;
    if (error) return <Error error={error} />;
    return (
        <>
            <div className="flex flex-col gap-10 justify-center">
                {/* NAVBAR */}
                <div className="h-20 sm:mb-28 mb-5"><NavBar bg={bg_status} /></div>
                
                {/* HEAD */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="uppercase font-bold sm:text-7xl text-3xl mb-5">Furniture</h1>
                    <div className="flex gap-3 justify-center items-center">
                        <Link to="/" className="text-lg">Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                        <Link to="/jewelery" className="sm:text-2xl text-xl text-blue-600">Furniture</Link>    
                    </div>
                </div>

                {/* PRODUCTS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-20 w-full">
                    {all.slice(0, visibleProducts).map((product, index) => (
                        <div key={index} className="relative p-5 product font-bold group">
                            <div className="relative">
                                <div className="best_img h-96 p-2 flex justify-center items-center cursor-pointer relative  group">
                                    <img
                                    src={product.image}
                                    alt="Your Alt Text"
                                    className="w-full h-full transform transition-transform duration-300 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <AddToCartButton item={product} />
                                <button
                                    className="bg-slate-700 text-white px-4 py-2 mt-2 rounded w-32"
                                    onClick={(e) => handleViewDetails(product)}
                                >
                                    View Details
                                </button>
                            </div>
                            <div className="mt-4">
                                <div className="cursor-pointer flex justify-between mb-2">
                                    <span
                                        className="cursor-pointer text-2xl hover:scale-110 text-black"
                                        onClick={() => setLiked({ ...liked, [index]: !liked[index] })}
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

                {/* Show "Load More" button only if there are more products to show */}
                <div className="flex justify-center items-start mt-4">
                    {visibleProducts < all.length && (
                        <button
                            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                            onClick={loadMoreProducts}
                        >
                            Load More...
                        </button>
                    )}
                </div>

                {/* FOOTER */}
                <Footer />
            </div>
        </>
    );
};

export default Furniture;
