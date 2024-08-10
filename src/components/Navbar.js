import React, { useState } from 'react';
import { SignInButton, SignUpButton, useUser, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyApp</Link>
        <button className="text-white focus:outline-none md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <div className={`flex-col md:flex md:flex-row md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link to="/" className="text-lg hover:bg-gray-700 p-2 rounded">Home</Link>
          {isSignedIn && <Link to="/dashboard" className="text-lg hover:bg-gray-700 p-2 rounded">Dashboard</Link>}
          {!isSignedIn ? (
            <>
              <SignInButton afterSignInUrl="/home">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton afterSignUpUrl="/home">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
