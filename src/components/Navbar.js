import React, { useState } from 'react';
import { SignInButton, SignUpButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold">MyApp</Link>
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <div className={`fixed top-0 right-0 bg-gray-800 w-64 h-full md:static md:flex md:items-center md:space-x-4 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
              <Link to="/" className="py-2 px-4 hover:bg-gray-700 rounded">Home</Link>
              {isSignedIn && <Link to="/dashboard" className="py-2 px-4 hover:bg-gray-700 rounded">Dashboard</Link>}
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 mt-auto md:mt-0">
              {!isSignedIn ? (
                <>
                  <SignInButton>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      Sign Up
                    </button>
                  </SignUpButton>
                </>
              ) : (
                <Link to="/dashboard" className="py-2 px-4 hover:bg-gray-700 rounded">Dashboard</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
