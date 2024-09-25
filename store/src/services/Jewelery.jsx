import React, { useState, useEffect } from 'react';
import { Api } from '../Api/Api';
import Card from "../product/card";
import NavBar from '../component/navBar';
import AddToCartButton from '../product/AddToCartButton'; // Import the reusable AddToCartButton

const Jewelery = () => {
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Api("https://fakestoreapi.com/products/category/jewelery");
                setAll(data); 
            } catch (error) {
                setError("Failed to fetch categories");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center align-middle flex-wrap">
                {all.map((item) => (
                    <div key={item.id} className="p-4 border">
                        <Card
                            title={item.title}
                            img={item.image}
                            describtion={item.description}
                            price={item.price}
                        />
                        {/* Use the reusable AddToCartButton */}
                        <AddToCartButton item={item} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Jewelery;
