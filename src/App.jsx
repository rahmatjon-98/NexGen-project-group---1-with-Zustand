import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/home";
import Servise from "./pages/home/servise";
import About from "./pages/about/about";
import Projects from "./pages/about/projects";
import Blogs2 from "./pages/blogs/blogs2";
import Blogs from "./pages/careers/blogs";
import Contact from "./pages/blogs/contact";
import Careers from "./pages/careers/careers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="servise" element={<Servise />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="About" element={<About />} />
        <Route path="Blogs2" element={<Blogs2 />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Careers" element={<Careers />} />
      </Route>
    </Routes>
  );
}

export default App;
