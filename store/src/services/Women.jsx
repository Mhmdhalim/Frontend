import React from 'react'
import { useState, useEffect } from 'react';
import { Api } from '../Api/Api';

const Women = () => {
    // DATA
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(true);  // State to handle loading
    const [error, setError] = useState(null);  // State to handle errors

    const [women, setWomen] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Api("https://fakestoreapi.com/products");
                setAll(data); // Set the resolved data
                const mensClothing = data.filter(product => product.category === "women's clothing");
                setWomen(mensClothing);
            } catch (error) {
                setError("Failed to fetch categories");  // Handle errors
            } finally {
                setLoading(false);  // Stop loading once data is fetched
            }
        };

        fetchData(); // Call the async function
    }, []);

    if (loading) return <p>Loading...</p>; // Display loading state
    if (error) return <p>{error}</p>; 
    return (
        <div>
        
        </div>
    )
}

export default Women
