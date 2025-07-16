import React from "react";
import logo from './Logo.png'
import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-black text-white">
      <header className="flex items-center gap-5 bg-[#1A1A1A] text-[#81807E] justify-between p-2.5 relative top-2.5 mx-3 rounded">
        <img src={logo  } alt="" />
        <div className="flex items-center gap-5 uppercase font-semibold">

        <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"/"}>   <p>Home</p> </Link>
        <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"servise"}>   <p>Services</p> </Link>
        <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"Projects"}>   <p>Projects</p> </Link>
        <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"About"}>   <p>About</p> </Link>
        <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"Careers"}>   <p>Careers</p> </Link>
        <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"Blogs"}>   <p>Blogs</p> </Link>
        <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"Blogs2"}>   <p>Blogs 2</p> </Link>
        <Link className="bg-[#CE7D63] text-black rounded px-2.5 py-1 " to={"Contact"}>   <p className="bg-[#CE7D63] text-black rounded px-2.5 py-1 ">Contact Us</p> </Link>
        </div>
      </header>
      <main className="pt-5">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
