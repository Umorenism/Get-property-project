import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
