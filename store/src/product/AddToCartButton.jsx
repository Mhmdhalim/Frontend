import React, { useContext } from 'react';
import { CartContext } from './cartContext'; // Import CartContext to access the cart functionality

const AddToCartButton = ({ item }) => {
    const { addToCart } = useContext(CartContext); // Use CartContext to add items to the cart

    // Function to handle adding an item to the cart
    const handleAddToCart = () => {
        const cartItem = {
            img: item.image,
            title: item.title,
            describtion: item.description,
            price: item.price,
            count: 1, // Start with 1 item when added to cart
            total: item.price // Total price is the price * quantity
        };
        addToCart(cartItem); // Use the addToCart function from CartContext
        alert(`${item.title} added to cart`);
    };

    return (
        <button onClick={handleAddToCart} className="bg-black text-white px-4 py-2 mt-2 rounded w-32">
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
