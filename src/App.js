import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
<<<<<<< HEAD
import BecomeSeller from './pages/BecomeSeller';
import DetailsPage from './pages/DetailsPage';
import MyOrders from './pages/MyOrder';
import AddProduct from './pages/AddProduct';
=======
import MyOrderList from './components/myorders';
import AboutUs from './pages/aboutUs';
>>>>>>> 997a541e9222c7bbb85c2a5bf9ba5440e3493bd9

const App = () => {
  const { isSignedIn } = useUser();

  return (
    <Router>
      <div className={`flex ${isSignedIn ? 'flex-row' : 'flex-col'}`}>
        {isSignedIn ? <Sidebar /> : <Navbar />}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
<<<<<<< HEAD
            <Route path="/becomeSeller" element={<BecomeSeller />} />
            <Route path="/detailPage" element={<DetailsPage />} />
            <Route path="/myOrder" element={<MyOrders />} />
            <Route path="/addProduct" element={<AddProduct />} />


            {isSignedIn && <Route path="/dashboard" element={<Dashboard />} />}
=======
            <Route path="/orders" element={<MyOrderList />} />
            <Route path="/aboutus" element={<AboutUs/>} />
            {/* {isSignedIn && <Route path="/home" element={<Dashboard />} />} */}
>>>>>>> 997a541e9222c7bbb85c2a5bf9ba5440e3493bd9
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
