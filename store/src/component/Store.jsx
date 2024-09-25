import React, { useState, useEffect, createContext } from "react";
import { Api } from "../Api/Api";
import Home from "./Home";

export const StoreContext = createContext();
const Store = () => {
    // DATA
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors

    // Show More Button
    // Set initial number of products to display
    const [visibleProducts, setVisibleProducts] = useState(5);

    // Function to load more products
    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 5); // Show 5 more products
    };

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
    if (loading) return <p>Loading...</p>; // Display loading state
    if (error) return <p>{error}</p>;
    
    return (
        <>
            <div>
                {all.slice(0, visibleProducts).map((product, index) => (
                    <div key={index} className="product">
                    <h3>{product.title}</h3>
                    </div>
                ))}

                {/* Show "Load More" button only if there are more products to show */}
                {visibleProducts < all.length && (
                    <button onClick={loadMoreProducts}>Load More</button>
                )}
            </div>
        </>
        
    );
};

export default Store;
