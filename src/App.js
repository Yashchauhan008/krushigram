import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => {
  const { isSignedIn } = useUser();

  return (
    <Router>
      <div className="flex">
        {isSignedIn ? <Sidebar /> : <Navbar />}
        <div className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            {isSignedIn && <Route path="/dashboard" element={<Dashboard />} />}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
