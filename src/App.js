import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import MyOrders from "./pages/MyOrders";
import AboutUs from "./pages/aboutUs";
import BecomeSeller from "./pages/BecomeSeller";

const App = () => {
  const { isSignedIn } = useUser();

  return (
    <Router>
      <div className={`flex ${isSignedIn ? "flex-row" : "flex-col"}`}>
        {isSignedIn ? <Sidebar /> : <Navbar />}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {isSignedIn ? <Route path="/home" element={<Home />} /> : null}
            {isSignedIn ? (
              <Route path="/orders" element={<MyOrders />} />
            ) : null}
            {isSignedIn ? (
              <Route path="/aboutus" element={<AboutUs />} />
            ) : null}
            {isSignedIn ? (
              <Route path="/becomeseller" element={<BecomeSeller />} />
            ) : null}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
