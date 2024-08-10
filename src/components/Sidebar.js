import React, { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FiHome, FiMenu, FiGrid, FiChevronDown } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaPersonDotsFromLine } from "react-icons/fa6";
=======
import { FiHome, FiMenu, FiGrid } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
>>>>>>> 997a541e9222c7bbb85c2a5bf9ba5440e3493bd9

const Sidebar = () => {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(true);
  const [isSeller, setIsSeller] = useState(true); // Simulated isSeller state
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <div
        className={`inline-block transition-transform h-screen bg-gray-800 text-white flex flex-col ${
          isOpen ? "w-64" : "w-15"
        } transition-width duration-500`}
      >
        <div
          className={`flex items-center justify-${
            isOpen ? "between" : "center"
          } p-4`}
        >
          {isOpen && (
            <h1 className="text-2xl font-bold bg-success p-2 rounded me-3">
              KRUSHIGRAM
            </h1>
          )}
          <button onClick={toggleSidebar} className="focus:outline-none">
            <FiMenu size={24} />
          </button>
        </div>
        <nav
          className={`flex flex-col ${
            isOpen ? "items-start p-2" : "items-center"
          } justify-center space-y-4 mt-8`}
        >
          <Link
            to="/home"
            className="flex items-center justify-center p-2 hover:bg-gray-700 rounded"
          >
            <FiHome size={24} />
            {isOpen && <span className="ml-4">Home</span>}
          </Link>
          {isSignedIn && (
<<<<<<< HEAD
            <Link
              to="/myOrder"
              className="flex items-center justify-center p-2 hover:bg-gray-700 rounded"
            >
              <MdOutlineShoppingCart size={24} />
              {isOpen && <span className="ml-4">My Order</span>}
            </Link>
          )}
          {isSignedIn && isSeller && (
            <div className="w-full">
              <div
                className="flex items-center justify-center p-2 hover:bg-gray-700 rounded cursor-pointer"
                onClick={toggleDropdown}
              >
                <FaPersonDotsFromLine size={24} />
                {isOpen && <span className="ml-4">Become a Seller</span>}
                <FiChevronDown
                  size={24}
                  className={`transform transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {dropdownOpen && (
                <div className="ml-8 mt-2">
                  <Link
                    to="/addProduct"
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    {isOpen && <span>Add Product</span>}
                  </Link>
                  <Link
                    to="/seeCustomers"
                    className="block p-2 hover:bg-gray-700 rounded"
                  >
                    {isOpen && <span>See Customers</span>}
                  </Link>
                </div>
              )}
            </div>
          )}
          {isSignedIn && (
            <Link
              to="/aboutus"
              className="flex items-center justify-center p-2 hover:bg-gray-700 rounded"
            >
              <FcAbout size={24} />
              {isOpen && <span className="ml-4">About Us</span>}
            </Link>
=======
            <>
              <Link
                to="/orders"
                className="flex items-center justify-center p-2 hover:bg-gray-700 rounded"
              >
                <MdOutlineShoppingCart size={24} />
                {isOpen && <span className="ml-4">My Order</span>}
              </Link>
              <Link
                to="/aboutus"
                className="flex items-center justify-center p-2 hover:bg-gray-700 rounded"
              >
                <FcAbout size={24} />

                {isOpen && <span className="ml-4">About US</span>}
              </Link>
            </>
>>>>>>> 997a541e9222c7bbb85c2a5bf9ba5440e3493bd9
          )}
        </nav>
        <div className={`mt-auto p-4 ${isOpen ? "text-left" : "text-center"}`}>
          {!isSignedIn ? (
            <div className="flex flex-col space-y-2">
              <SignInButton mode="modal">
                <button className="flex items-center justify-center w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded focus:outline-none">
                  <FiHome size={24} />
                  {isOpen && <span className="ml-4">Sign In</span>}
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="flex items-center justify-center w-full py-2 px-4 bg-green-500 hover:bg-green-700 rounded focus:outline-none">
                  <FiGrid size={24} />
                  {isOpen && <span className="ml-4">Sign Up</span>}
                </button>
              </SignUpButton>
            </div>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
