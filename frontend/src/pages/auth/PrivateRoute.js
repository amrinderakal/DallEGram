import React from "react";
import HomePage from "../Homepage";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return currentUser ? <Navigate to="/homepage" /> : <Navigate to="/login" />;
}
