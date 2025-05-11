import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import UserDashboard from "./pages/dashboard/UserDashboard";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/admin-dashboard/*" // Add wildcard to handle nested routes
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-dashboard/*" // Add wildcard to handle nested routes
          element={
            <PrivateRoute allowedRoles={["user"]}>
              <UserDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;