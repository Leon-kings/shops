import React from 'react';
import { Navigate } from 'react-router-dom';
React;
const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
