import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import MyOrders from "./pages/MyOrders";
import BecomeSeller from "./pages/BecomeSeller";
import DetailPage from "./pages/ProductDetail";
import AddProperty from "./pages/AddProduct";
import PropertyDetail from "./pages/ProductDetail";
import AboutUs from "./pages/aboutUs";

const App = () => {
  const { isSignedIn } = useUser();

  return (
    <Router>
      <div className={`flex ${isSignedIn ? "flex-row" : "flex-col"}`}>
        {isSignedIn ? <Sidebar /> : <Navbar />}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {isSignedIn && <Route path="/home" element={<Home />} />}
            {isSignedIn && <Route path="/orders" element={<MyOrders />} />}
            {isSignedIn && <Route path="/becomeseller" element={<BecomeSeller />} />}
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/addProduct" element={<AddProperty />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
