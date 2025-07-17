import logo from "./Logo.png";
import { Link, Outlet } from "react-router";

import img from "./Button (1).png";
import img1 from "./Icon Container (4).png";
import img2 from "./Icon Container (5).png";
import img3 from "./Icon Container (6).png";
import img4 from "./Icon Container (7).png";

const Layout = () => {
  return (
    <div className="bg-black text-white">
      <header className="flex items-center gap-5 bg-[#1A1A1A] text-[#81807E] justify-between p-2.5 relative top-2.5 mx-3 rounded">
        <img src={logo} alt="" />
        <div className="flex items-center gap-5 uppercase font-semibold">
          <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"/"}>
            {" "}
            <p>Home</p>{" "}
          </Link>
          <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"servise"}>
            {" "}
            <p>Services</p>{" "}
          </Link>
          <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"Projects"}>
            {" "}
            <p>Projects</p>{" "}
          </Link>
          <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"About"}>
            {" "}
            <p>About</p>{" "}
          </Link>
          <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"Careers"}>
            {" "}
            <p>Careers</p>{" "}
          </Link>
          <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"Blogs"}>
            {" "}
            <p>Blogs</p>{" "}
          </Link>
          <Link className="bg-[#0F0F0F] rounded px-2.5 py-1 " to={"Blogs2"}>
            {" "}
            <p>Blogs 2</p>{" "}
          </Link>
          <Link
            className="bg-[#CE7D63] text-black rounded px-2.5 py-1 "
            to={"Contact"}
          >
            {" "}
            <p className="bg-[#CE7D63] text-black rounded px-2.5 py-1 ">
              Contact Us
            </p>{" "}
          </Link>
        </div>
      </header>

      <main className="pt-5">
        <Outlet />
      </main>

      <footer className="space-y-20 w-[95%] mx-auto">


        <article className="">
          <div className="bg-[#1A1A1A] w-[100%] m-auto flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl">
            <h1 className="text-[35px] font-[600] text-[#F9EFEC]">
              Frequently Asked Questions
            </h1>
            <div className="flex items-center gap-[20px] ">
              <img src={img} alt="" />
              <p className="text-[#B3B3B2] font-[500] uppercase">View All</p>
            </div>
          </div>

          <div className="flex items-start justify-between mt-[40px] ">
            <div className="w-[750px] flex flex-col gap-[15px]">
              <div className="bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl">
                <div className="w-[630px] flex flex-col items-start gap-[15px]">
                  <h2 className="text-[#F9EFEC] text-[18px] font-[700] border-b-2  border-[#262626] pb-[25px]">
                    How long does it take to complete a web development project?
                  </h2>
                  <p className="text-[#B3B3B2] font-[500]">
                    The timeline varies depending on the project's complexity
                    and requirements. Our team strives to deliver projects on
                    time while maintaining the highest quality standards.
                  </p>
                </div>
                <button className="text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]">
                  -
                </button>
              </div>
              <div className="bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl">
                <div className="w-[630px] flex flex-col items-start gap-[15px]">
                  <h2 className="text-[#F9EFEC] text-[18px] font-[700] ">
                    Can you handle large-scale mobile app development projects?
                  </h2>
                </div>
                <button className="text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]">
                  +
                </button>
              </div>
              <div className="bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl">
                <div className="w-[630px] flex flex-col items-start gap-[15px]">
                  <h2 className="text-[#F9EFEC] text-[18px] font-[700] ">
                    Can you integrate third-party APIs into our mobile app?
                  </h2>
                </div>
                <button className="text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]">
                  +
                </button>
              </div>
              <div className="bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl">
                <div className="w-[630px] flex flex-col items-start gap-[15px]">
                  <h2 className="text-[#F9EFEC] text-[18px] font-[700] ">
                    How do you ensure cross-platform compatibility for mobile
                    apps?
                  </h2>
                </div>
                <button className="text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]">
                  +
                </button>
              </div>
              <div className="bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl">
                <div className="w-[630px] flex flex-col items-start gap-[15px]">
                  <h2 className="text-[#F9EFEC] text-[18px] font-[700] ">
                    What is your approach to user experience (UX) design?
                  </h2>
                </div>
                <button className="text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]">
                  +
                </button>
              </div>
            </div>

            <div className="w-[500px] bg-[#1A1A1A] p-[30px] rounded-xl flex flex-col items-start gap-[25px]">
              <h1 className="text-[#F9EFEC] font-[500] text-[22px]">
                Ask your question
              </h1>
              <div className="flex flex-col items-start gap-[15px] border-t-2 border-[#262626] w-[95%] pt-[20px]">
                <label className="text-[#F3DFD8] font-bold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-[#0F0F0F] text-[#676665] w-[95%] font-bold py-[8px] rounded-xl px-[15px]"
                />
                <label className="text-[#F3DFD8] font-bold">Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-[#0F0F0F] text-[#676665] w-[95%] font-bold py-[8px] rounded-xl px-[15px]"
                />
                <label className="text-[#F3DFD8] font-bold">
                  Your Question
                </label>
                <textarea
                  type="text"
                  placeholder="Enter Your Question Here ....."
                  className="bg-[#0F0F0F] text-[#676665] w-[95%] max-h-32 min-h-32 font-bold rounded-xl p-[15px]"
                ></textarea>
                <button className="bg-[#CE7D63] text-[#0F0F0F] font-bold m-auto w-[98%] py-[10px] rounded-xl">
                  Send Your Message
                </button>
              </div>
            </div>
          </div>
        </article>

        <article className="bg-[#CE7D63] p-[40px]  rounded-xl">
          <div className="w-[95%] m-auto text-[#0F0F0F] flex items-center justify-between">
            <div className="w-[900px] flex flex-col items-start gap-[20px]">
              <h1 className="text-[40px] font-[500]">
                Ready to Transform Your Digital Presence?
              </h1>
              <p className="text-[#262626] font-[500]">
                Take the first step towards digital success with NexGen by your
                side. Our team of experts is eager to craft tailored solutions
                that drive growth for your business.
              </p>
            </div>

            <button className="bg-[#0F0F0F] text-white font-[500] px-[25px] py-[9px] rounded-xl">
              Get in Touch
            </button>
          </div>
        </article>

        <article className="bg-[#1A1A1A] p-3  flex items-center gap-2.5 rounded-xl">
          <p className="text-[#676665] "> on Social Media</p>
          <div className="w-2 h-2 bg-[#CE7D63] rounded-full"></div>
          <p className="text-[#676665] ">Follow Us on Social Media</p>
          <div className="w-2 h-2 bg-[#CE7D63] rounded-full"></div>
          <p className="text-[#676665] ">Follow Us on Social Media</p>
          <div className="w-2 h-2 bg-[#CE7D63] rounded-full"></div>
          <p className="text-[#676665] ">Follow Us on Social Media</p>
          <div className="w-2 h-2 bg-[#CE7D63] rounded-full"></div>
          <p className="text-[#676665] ">Follow Us on Social Media</p>
          <div className="w-2 h-2 bg-[#CE7D63] rounded-full"></div>
          <p className="text-[#676665] ">Follow Us on Social Media</p>
          <div className="w-2 h-2 bg-[#CE7D63] rounded-full"></div>
          <p className="text-[#676665] ">Follow</p>
        </article>

        <article className=" flex items-start justify-between gap-5 pb-10">
          <div className="w-2/5 grid grid-cols-2 gap-5">
            <div className="bg-[#1A1A1A] p-[20px] rounded-xl space-y-4">
              <div className="flex justify-between items-center pb-5">
                <img className="w-2/10" src={img1} alt="" />
                <img className="w-2/10" src={img} alt="" />
              </div>
              <h1 className="text-[#F9EFEC] font-[600] text-[22px] uppercase">
                INSTAGRAM
              </h1>
              <p className="text-[#B3B3B2] font-[500]">
                Share visually appealing snippets of our projects.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-[20px] rounded-xl space-y-4">
              <div className="flex justify-between items-center pb-5">
                <img className="w-2/10" src={img2} alt="" />
                <img className="w-2/10" src={img} alt="" />
              </div>
              <h1 className="text-[#F9EFEC] font-[600] text-[22px] uppercase">
                Twitter
              </h1>
              <p className="text-[#B3B3B2] font-[500]">
                Tweet about interesting coding challenges you've overcome.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-[20px] rounded-xl space-y-4">
              <div className="flex justify-between items-center pb-5">
                <img className="w-2/10" src={img3} alt="" />
                <img className="w-2/10" src={img} alt="" />
              </div>
              <h1 className="text-[#F9EFEC] font-[600] text-[22px] uppercase">
                Dribbble
              </h1>
              <p className="text-[#B3B3B2] font-[500]">
                Share visually appealing snippets of our projects.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-[20px] rounded-xl space-y-4">
              <div className="flex justify-between items-center pb-5">
                <img className="w-2/10" src={img4} alt="" />
                <img className="w-2/10" src={img} alt="" />
              </div>
              <h1 className="text-[#F9EFEC] font-[600] text-[22px] uppercase">
                Behance
              </h1>
              <p className="text-[#B3B3B2] font-[500]">
                Share visually appealing snippets of our projects.
              </p>
            </div>
          </div>

          <div className="w-[58%] grid grid-row-3  gap-5">
            <div className="bg-[#1A1A1A] p-[25px] rounded-xl">
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start gap-[10px]">
                  <h2 className="text-[#F3DFD8] font-[500] text-[20px]">
                    Home
                  </h2>
                  <ul className="flex flex-col items-start gap-[10px] text-[#81807E] font-[500]">
                    <li>Why Us</li>
                    <li>About Us</li>
                    <li>Testimonials</li>
                    <li>FAQ’s</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-[10px]">
                  <h2 className="text-[#F3DFD8] font-[500] text-[20px]">
                    Services
                  </h2>
                  <ul className="flex flex-col items-start gap-[10px] text-[#81807E] font-[500]">
                    <li>Web Development</li>
                    <li>App Development</li>
                    <li>Web Design</li>
                    <li>Digital Marketing</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-[10px]">
                  <h2 className="text-[#F3DFD8] font-[500] text-[20px]">
                    Projects
                  </h2>
                  <ul className="flex flex-col items-start gap-[10px] text-[#81807E] font-[500]">
                    <li>Klothink</li>
                    <li>Zenith</li>
                    <li>Novus</li>
                    <li>Apex</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-[10px]">
                  <h2 className="text-[#F3DFD8] font-[500] text-[20px]">
                    Blogs
                  </h2>
                  <ul className="flex flex-col items-start gap-[10px] text-[#81807E] font-[500]">
                    <li>Business</li>
                    <li>Design</li>
                    <li>Development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between">
              <div className="space-y-5">
                <p className="text-[#676665] font-[600] text-[18px]">
                  Newsletter
                </p>
                <h1 className="text-[#F9EFEC] font-[500] text-[22px]">
                  Subscribe To our Newsletter
                </h1>
              </div>

              <input
                type="text"
                placeholder="Enter your email"
                className="border-b py-[9px]  px-[25px]"
              />
              <img src={img} alt="" />
            </div>

            <div className="bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between">
              <div className=" flex flex-col items-start gap-[10px]">
                <p className="text-[#B3B3B2] font-[600] text-[18px]">
                  © 2024 NextGen. All rights reserved.
                </p>
              </div>
              <p className="text-[#B3B3B2] font-[500]">
                Terms & Conditions Privacy Policy
              </p>
            </div>
          </div>
        </article>
      </footer>
    </div>
  );
};

export default Layout;
