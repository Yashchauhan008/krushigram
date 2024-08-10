import React from "react";
import "../index.css";
import { SignInButton } from "@clerk/clerk-react";

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div id="HomePage" className="hero-section text-center text-white">
        <div className="overlay">
          <div className="container">
            <h1 className="fw-bold fs-1 mb-3 animate-fade-in">
              The All-in-One Farm to Fork Platform
            </h1>
            <p className="lead mb-4 animate-slide-up">
              Unlock the power of local food. Start your free trial today to see
              why farms, food hubs, grocers, and restaurants choose Local Line
              as their exclusive local food commerce platform.
            </p>
            <SignInButton afterSignInUrl="/home">
              <button className="bg-blue-500 btn-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded btn-lg animate-bounce">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
