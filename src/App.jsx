import React from 'react'
import './App.css'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/privateRoute/PrivateRoutes'
// pages
import Dashboard from './components/dashboard/admin/Dashboard';
import Home from './pages/home/Home';
import Login from './pages/form/login/Login';
import Example from './components/nav/Navbar';
import Footer from './components/footer/Footer';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
<div className="mx-auto">
<BrowserRouter>
  <Example/>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/" element={<Home />} />

        {/* Private Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
<Footer/>
    </BrowserRouter>
</div>
    </>
  )
}