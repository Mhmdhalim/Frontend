import React, { useState, createContext } from "react";
import NavBar from "../component/navBar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
export const StoreContext = createContext();
    
const Store = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (send to API, email service, etc.)
        console.log(formData);
        alert('Message sent!');
    };
    const bg_status = true;

    return (
        <>
            <div className="flex flex-col gap-10 justify-center">
                {/* NAVBAR */}
                <div className="h-20 sm:mb-28 mb-5"><NavBar bg={bg_status} /></div>
                
                {/* HEAD */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="uppercase font-bold sm:text-7xl text-3xl mb-5">Contact</h1>
                    <div className="flex gap-3 justify-center items-center">
                        <Link to="/" className="text-lg">Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                        <Link to="/women" className="sm:text-2xl text-xl text-blue-600">Contact</Link>    
                    </div>
                </div>
                {/* MAIN SECTION */}
                <section className=" py-12 sm:px-0  px-4" id="contact">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-center items-center">
                            {/* Contact Information */}
                            <div className="bg-white p-6  shadow-lg rounded-lg">
                                    <h3 className="text-4xl font-bold text-center mb-8">Contact Us</h3>
                                    <p className="text-gray-700 mb-6">
                                        We'd love to hear from you! Please reach out to us via the form or the contact information below.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="text-xl font-bold">Phone:</h4>
                                        <p className="text-gray-700">+1 (555) 123-4567</p>
                                        <p className="text-gray-700">+1 (555) 987-6543</p>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-xl font-bold">Address:</h4>
                                        <p className="text-gray-700">123 Mousa, Mansoura, Egypt</p>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-xl font-bold">Email:</h4>
                                        <p className="text-gray-700">Mousa@mousashop.com</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FOOTER */}
                <Footer />
            </div>
        </>
    );
};

export default Store;
