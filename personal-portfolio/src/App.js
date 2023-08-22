import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectList from "./pages/ProjectList";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Home />
      <About />
      <ProjectList />
      <Contact /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
