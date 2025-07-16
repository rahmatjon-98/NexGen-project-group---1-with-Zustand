import React from "react";
import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-black text-white">
      <header className="flex items-center gap-5 bg-[#1A1A1A] text-[#81807E] justify-center p-5">
        <Link to={"/"}>   <p>Home</p> </Link>
        <Link to={"servise"}>   <p>Services</p> </Link>
        <Link to={"Projects"}>   <p>Projects</p> </Link>
        <Link to={"About"}>   <p>About</p> </Link>
        <Link to={"Careers"}>   <p>Careers</p> </Link>
        <Link to={"Blogs"}>   <p>Blogs</p> </Link>
        <Link to={"Blogs2"}>   <p>Blogs 2</p> </Link>
        <Link to={"Contact"}>   <p className="bg-[#CE7D63] text-black">Contact Us</p> </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
