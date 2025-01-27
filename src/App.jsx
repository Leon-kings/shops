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
// checkout
import CheckOut from "./components/payment/CheckOut";
//  dashboards
import Profile from "./components/dashboard/admin/components/profile/Profile";
import Userview from "./components/dashboard/admin/components/userview/Userview";
import Settings from "./components/dashboard/admin/components/settings/Settings";
import Postview from "./components/dashboard/admin/components/postview/Postview";
import Messageview from "./components/dashboard/admin/components/messageview/Messageview";
import Testimonyview from "./components/dashboard/admin/components/testimonyview/Testimonyview";
import CreateUser from "./components/dashboard/admin/components/createuser/CreateUser";
import CreateMessage from "./components/dashboard/admin/components/message/CreateMessage";
import CreatePost from "./components/dashboard/admin/components/post/CreatePost";
import CreateTestimony from "./components/dashboard/admin/components/testmony/Testimony";
import Address from "./universal/address/Address";
// user dashboard
import Udashboard from "./components/dashboard/user/Udashboard";
import USettings from "./components/dashboard/user/components/settings/Settings";
import Umessages from "./components/dashboard/user/components/messages/Umessages";
import UTestimony from "./components/dashboard/user/components/testimony/Testimony";
import UPost from "./components/dashboard/user/components/post/Post";
import CreateMessageUser from "./components/dashboard/user/components/messages/CreateMessageUser";
import CreateTestimonyUser from "./components/dashboard/user/components/testimony/CreateTestimonyUser";
import CreatePostUser from "./components/dashboard/user/components/post/CreatePostUser";
import UProfile from "./components/dashboard/user/components/profile/Profile";
import Details from "./components/cart/appliances/components/Details";
import Log from "./components/logs/Logout";

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
            <Route path="/Details/:id" element={<Details />} />
            <Route path="/Fquestion" element={<Fquestion />} />
            <Route path="/Who/we/are" element={<Address />} />
            <Route path="/Contacts" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Market" element={<Market />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Features" element={<Features />} />
            {/* dashboard link */}
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Udashboard" element={<Udashboard />} />
            <Route path="/5010/Userview" element={<Userview />} />
            <Route path="/5010/Postview" element={<Postview />} />
            <Route path="/5010/Testimony" element={<Testimonyview />} />
            <Route path="5010/Message" element={<Messageview />} />
            <Route path="/Settings" element={<Settings />} />
            <Route
              path="/5040/Create/Testimony/245678"
              element={<CreateTestimony />}
            />
            <Route
              path="/5040/Create/Message/245678"
              element={<CreateMessage />}
            />
            <Route path="/Profile/Dashboard" element={<Profile />} />
            <Route path="/5040/Create/Post/245678" element={<CreatePost />} />
            <Route path="/5040/Create/User/245678" element={<CreateUser />} />
            {/* user dshboard */}
            <Route path="/302010/Settings" element={<USettings />} />
            <Route path="/302015/Message" element={<Umessages />} />
            <Route
              path="/5044/Create/Message/245678"
              element={<CreateMessageUser />}
            />
            <Route path="/302020/Testimony" element={<UTestimony />} />
            <Route
              path="/5044/Create/Testimony/245678"
              element={<CreateTestimonyUser />}
            />
            <Route path="/302025/Post" element={<UPost />} />
            <Route path="/302005/Profile" element={<UProfile />} />
            <Route
              path="/5044/Create/Post/245678"
              element={<CreatePostUser />}
            />
            {/* payment */}
            <Route path="/CheckOut" element={<CheckOut />} />
            {/* Private Route */}
            <Route
              path="/Udashboard"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/LogOut"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Log />
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
