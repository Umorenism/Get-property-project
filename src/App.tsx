// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // import "bootstrap-icons/font/bootstrap-icons.css";

// // import Header from "./components/Header";
// // import Hero from "./components/Hero";
// import { Header } from "./components/Header";

// import HomeScreen from "./components/HomeScreen";
// import Login from "./auth/Login";
// import Signup from "./auth/Signup";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/" element={<HomeScreen />} />
//         <Route path="/about" element={<div>About Page</div>} />
//         <Route path="/services" element={<div>Services Page</div>} />
//         <Route path="/contact" element={<div>Contact Page</div>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Header } from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import AgentSignup from "./auth/Agentsignup";
import AdminSignup from "./auth/AdminSignup";

// Dummy function to check if user is signed in (this should be replaced with real authentication logic)
const checkAuth = () => {
  const user = localStorage.getItem("user"); // Example: checking localStorage
  return user ? JSON.parse(user) : null;
};

// PrivateRoute component to protect routes
const PrivateRoute = ({ element, ...rest }: any) => {
  const isAuthenticated = checkAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App: React.FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authenticatedUser = checkAuth();
    setUser(authenticatedUser);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/agent" element={<AgentSignup />} />
        <Route path="/signup/admin" element={<AdminSignup />} />
        <Route path="/" element={<HomeScreen />} /> {/* HomeScreen is public */}
        {/* Protected routes */}
        <Route
          path="/about"
          element={<PrivateRoute element={<div>About Page</div>} />}
        />
        <Route
          path="/services"
          element={<PrivateRoute element={<div>Services Page</div>} />}
        />
        <Route
          path="/contact"
          element={<PrivateRoute element={<div>Contact Page</div>} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
