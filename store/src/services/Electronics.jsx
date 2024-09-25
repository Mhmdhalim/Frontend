import React from 'react'
import { useState, useEffect } from 'react';
import { Api } from '../Api/Api';

const Electronics = () => {
    // DATA
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(true);  // State to handle loading
    const [error, setError] = useState(null);  // State to handle errors

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Api("https://fakestoreapi.com/products/categories/electronics");
                setAll(data); // Set the resolved data
            } catch (error) {
                setError("Failed to fetch categories");  // Handle errors
            } finally {
                setLoading(false);  // Stop loading once data is fetched
            }
        };

        fetchData(); // Call the async function
    }, []);

    if (loading) return <p>Loading...</p>; // Display loading state
    if (error) return <p>{error} kk</p>; 
    
    return (
        <div>
        
        </div>
    )
}

export default Electronics
