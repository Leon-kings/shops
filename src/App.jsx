import React from "react";
import "./App.css";
React.App;
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoutes";
// pages
import Dashboard from "./components/dashboard/admin/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/form/login/Login";
import Example from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Fquestion from "./pages/fquestion/Fquestion";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Market from "./pages/market/Market";
import Features from "./pages/new/Features";
import Register from "./pages/form/register/Register";
import CheckOut from "./components/payment/CheckOut";
import Profile from "./components/dashboard/admin/components/profile/Profile";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <div className="mx-auto w-full">
        <BrowserRouter>
          <Example />
          <Routes>
            {/* Public Routes */}
            <Route
              path="/login"
              element={<Login onLogin={() => setIsAuthenticated(false)} />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/Fquestion" element={<Fquestion />} />
            <Route path="/Contacts" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Market" element={<Market />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            {/* payment */}
            <Route path="/CheckOut" element={<CheckOut />} />
            {/* Private Route */}
            {/* <Route
              path="/Dashboard"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </PrivateRoute>
              }
            /> */}
            <Route
              path="/Udashboard"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
                        <Route
              path="/Profile/Dashboard"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
