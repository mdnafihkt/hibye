import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const SOCKET_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export default function App() {
  return (
    <Router>
      <AppRoutes SOCKET_URL={SOCKET_URL} />
    </Router>
  );
}
