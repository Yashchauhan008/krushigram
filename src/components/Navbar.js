import React, { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  useUser,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import "../styles/navbar.css"; // Import the CSS file
import "../index.css";

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
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        KRUSHIGRAM
      </Link>
      <div className="navbar-auth">
        {!isSignedIn ? (
          <div className="auth-buttons">
            <SignInButton afterSignInUrl="/home">
              <button class="animated-button">
                <span>Sign in</span>
                <span></span>
              </button>
            </SignInButton>
            <SignUpButton afterSignUpUrl="/home">
              <button class="animated-button">
                <span>Sign up</span>
                <span></span>
              </button>
            </SignUpButton>
          </div>
        ) : (
          <div className="navbar-user-dropdown">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2"
            >
              <FiUser size={24} />
              <span className="font-semibold">Hi, User</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
