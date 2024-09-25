import React, { useContext } from 'react';
import { CartContext } from './cartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    // Calculate the total cost for all items in the cart
    const totalCartPrice = cart.reduce((total, item) => total + item.total, 0);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="border p-4 mb-2 flex justify-between">
                            <div className="flex">
                                <img src={item.img} alt={item.title} className="w-16 h-16 mr-4" />
                                <div>
                                    <h2 className="font-bold">{item.title}</h2>
                                    <p>{item.describtion}</p>
                                    <p>Price per item: ${item.price}</p>
                                    <p>Quantity: {item.count}</p>
                                    <p>Total for this item: ${item.total}</p> {/* Show total price for this item */}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="text-xl font-bold mt-4">
                        Total Cart Price: ${totalCartPrice} {/* Show total price for all items */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
