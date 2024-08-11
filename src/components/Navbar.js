import React, { useState } from 'react';
import { SignInButton, SignUpButton, useUser, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-green-700 text-white w-full shadow-md">
      <div className="flex justify-between items-center container">
        {/* Logo and Title */}
        <Link to="/" className="text-3xl font-bold tracking-wide">KRUSHIGRAM</Link>
        
        {/* Hamburger Menu for Mobile */}
        <button className="text-white focus:outline-none md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Links and Features for Desktop and Mobile */}
        <div className={`flex-col md:flex-row md:items-center md:space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          {/* User Auth Buttons */}
          <div className='mb-3'>
            {!isSignedIn ? (
              <div className="flex space-x-2 mt-4 md:mt-0">
                <SignInButton afterSignInUrl="/home">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton afterSignUpUrl="/home">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            ) : (
              <div className="relative mt-4 md:mt-0">
                <button onClick={toggleDropdown} className="flex items-center space-x-2 hover:bg-green-800 p-2 rounded">
                  <FiUser size={24} />
                  <span className="font-semibold">Hi, User</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-md shadow-lg py-2">
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</Link>
                    <Link to="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</Link>
                    <UserButton afterSignOutUrl="/" className="block w-full text-left px-4 py-2 hover:bg-gray-200" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
