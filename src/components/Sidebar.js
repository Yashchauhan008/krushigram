import React, { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { FiHome, FiMenu, FiGrid } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { SiSellfy } from "react-icons/si";

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
        style={{ backgroundColor: "#7BE495" }}
        className={`inline-block transition-transform  backdrop-blur-lg text-black shadow-lg flex flex-col ${
          isOpen ? "w-64" : "w-15"
        } transition-width duration-500`}
      >
        <div
          className={`flex items-center justify-${
            isOpen ? "between" : "center"
          } p-4`}
        >
          {isOpen && (
            <h1 className="text-2xl font-bold p-2 rounded me-3">KRUSHIGRAM</h1>
          )}
          <button onClick={toggleSidebar} className="focus:outline-none">
            <FiMenu size={24} />
          </button>
        </div>
        <nav
          className={`flex flex-col ${
            isOpen ? "w-full items-center p-2" : "items-center"
          } justify-center space-y-4 mt-8`}
        >
          <Link
            
            to="/home"
            className="flex items-center justify-center p-2 rounded hover:bg-[#59C596]"
            style={{ width: "100%" }}
          >
            <FiHome size={24} />
            {isOpen && <span className="ml-4">Home</span>}
          </Link>
          {isSignedIn && (
            <>
              <Link
                to="/orders"
                className="flex items-center justify-center p-2 hover:bg-[#59C596] rounded"
              >
                <MdOutlineShoppingCart size={24} />
                {isOpen && <span className="ml-4">My Order</span>}
              </Link>
              <Link
                to="/aboutUs"
                className="flex items-center justify-center p-2 hover:bg-[#59C596] rounded"
              >
                <RiTeamFill size={24} />
                {isOpen && <span className="ml-4">About Us</span>}
              </Link>
              <Link
                to="/becomeseller"
                className="flex items-center justify-center p-2 hover:bg-[#59C596] rounded"
              >
                <SiSellfy size={24} />
                {isOpen && <span className="ml-4">Become Seller</span>}
              </Link>
            </>
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
            <UserButton />
          )}
        </div>  
      </div>
    </>
  );
};

export default Sidebar;