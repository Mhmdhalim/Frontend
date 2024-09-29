import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex flex-col'>
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
    )
    }

export default Footer
