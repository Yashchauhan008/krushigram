import React from "react";
import "../index.css";
import { SignInButton } from "@clerk/clerk-react";
import SplineViewer from "../components/SplineViewer";
import "../styles/landing.css";
import "../index.css"

const LandingPage = () => {
  const handleLoad = (spline) => {
    // Example: Scale an object named "Cube"
    const object = spline.findObjectByName("Cube");
    if (object) {
      object.scale.set(2, 2, 2); // Scale the object by 2x
    }

    // Example: Move an object named "Sphere"
    const sphere = spline.findObjectByName("Sphere");
    if (sphere) {
      sphere.position.set(0, 5, 0); // Move the object to a new position
    }
  };

  return (
    <>
      {/* Hero Section */}

      <div
        style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        <SplineViewer
          url="https://prod.spline.design/x-tnQMCrwNreC9p8/scene.splinecode"
          onLoad={handleLoad}
        />
        <div className="l-home" style={{ position: "relative", zIndex: 1 }}>
          <h1 className="">
            The All-in-One Farm <br />
            to Fork Platform
          </h1>
          <p className="">
            Unlock the power of local food. Start your free trial today to see
            why farms, food hubs, grocers, and restaurants choose Local Line as
            their exclusive local food commerce platform.
          </p>
          <SignInButton afterSignInUrl="/home">
          <button class="animated-button">
                <span>sign in</span>
                <span></span>
              </button>
          </SignInButton>

          {/* Other content */}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
