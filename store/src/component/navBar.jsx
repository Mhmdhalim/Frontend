import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../product/cartContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu open/close
  const [scrolling, setScrolling] = useState(false); // State to track scrolling
  const { cartCount } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change value if you want to trigger earlier/later
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`h-12 fixed ticker bg-light-gray ${
          scrolling ? "bg-white text-black" : "text-white"
        }`}
      >
        <div className="ticker-content">
          <p
            className={` ${
              scrolling ? "bg-white text-black" : "text-white"
            } w-full sm:text-[16px] text-[13px] font-bold text-center whitespace-nowrap`}
          >
            🛍️ Huge Discounts on Clothes! | 💻 Up to 30% off Electronics! | 💎
            Exclusive Jewelry Collections Available Now!
          </p>
        </div>
      </div>

      <nav
        className={`p-3 sm:h-16 py-0 text-white transition-all duration-300 ${
          scrolling ? "bg-white text-black" : ""
        }`} // Background changes on scroll
      >
        <div className="sm:p-3 p-2 px-6 container mx-auto flex justify-between items-center align-middle">
          <div
            className={`hidden md:flex gap-3 uppercase justify-center items-center ${
              scrolling ? "bg-white text-black" : ""
            }`}
          >
            <Link
              to="/store"
              className={` text-xl font-bold ${
                scrolling ? "bg-white text-black" : "nav-link"
              }`}
            >
              Shop
            </Link>
            <Link
              to="/mens"
              className={`text-sm  ${
                scrolling ? "bg-white text-black" : "nav-link"
              }`}
            >
              Men
            </Link>
            <Link
              to="/women"
              className={` text-sm ${
                scrolling ? "bg-white text-black" : "nav-link"
              }`}
            >
              Women
            </Link>
            <Link
              to="/jewelery"
              className={` text-sm ${
                scrolling ? "bg-white text-black" : "nav-link"
              }`}
            >
              Jewelery
            </Link>
            <Link
              to="/electronics"
              className={` text-sm ${
                scrolling ? "bg-white text-black" : "nav-link"
              }`}
            >
              Electronics
            </Link>
          </div>

          <div className="flex justify-center gap-6">
            <Link
              to="/"
              className={`headnav font-bold uppercase sm:text-5xl text-3xl cursor-pointer tracking-wide ${
                scrolling ? "bg-white text-black" : "nav-link text-white"
              }`}
            >
              M<span className="emoji sm:text-3xl text-2xl">🐸</span> usa
            </Link>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex gap-8 font-bold justify-center items-center">
            <Link
              to="/"
              className={` text-sm ${
                scrolling ? "bg-white text-black" : "nav-link"
              }`}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={` text-sm ${
                scrolling ? "bg-white text-black" : "nav-link"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className={` text-sm ${
                scrolling ? "bg-white text-black" : "nav-link"
              }`}
            >
              About
            </Link>
            <Link
              to="/cart" 
              className={` text-xl  ${
                scrolling ? "bg-white text-black" : "nav-link"
              }`}
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-[40px]" />
              {cartCount > 0 && (
                <span className={`absolute top-[34px] right-[30.5px] ${scrolling ? "bg-white text-black" : "bg-black text-white"} text-sm rounded-full px-2`}>
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div
            className={`md:hidden ${scrolling ? "bg-white text-black" : ""}`}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="sm:text-4xl text-[30px] cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          {/* Dropdown Menu for small screens */}
          {isOpen && (
            <div
              className={`absolute top-12 right-0 ${
                scrolling ? "bg-white text-black" : ""
              } w-full shadow-sm md:hidden`}
            >
              <ul className="flex flex-col items-start justify-center px-9">
                <li className="my-2">
                  <Link
                    to="/"
                    className="hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/store"
                    className="hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    Shop
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/cart"
                    className="navbar-cart-link hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    Cart
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/about"
                    className="hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
