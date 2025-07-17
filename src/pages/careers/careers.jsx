import React from "react";
import img from "./Button (1).png";

let arr = [
  { num: "01" },
  { num: "02" },
  { num: "03" },
  { num: "04" },
  { num: "05" },
  { num: "06" },
  { num: "07" },
  { num: "08" },
];
const Careers = () => {
  return (
    <div className="py-5 space-y-20 ">
      <article className="space-y-5 w-[95%] mx-auto">
        <div className="bg-[#1A1A1A] flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl">
          <h1 className="text-[35px] font-[600] text-[#F9EFEC]">
            How to Apply
          </h1>
          {/* <div className="flex items-center gap-[20px] ">
                    <img src={img} alt="" />
                    <p className="text-[#B3B3B2] font-[500] uppercase">
                      ALL Testimonials
                    </p>
                  </div> */}
        </div>

        <div className="grid grid-cols-4 gap-5">
          {arr.map((e) => (
            <div className="bg-[#1A1A1A]  border border-[#0F0F0F] rounded-xl">
              <p className="p-5 text-[#81807E] text-xl ">Step {e.num}</p>

              <p className="p-5 text-2xl font-medium bg-[#1F1F1F] text-[#F9EFEC] uppercase border-y-2 border-[#262626] ">
                Explore Job Listings
              </p>

              <p className="text-[#B3B3B2] text-[18px] p-5">
                Visit our website's "Careers" page to explore the current job
                listings. Review the various roles available and select the
                position that aligns with your skills, experience, and career
                aspirations.
              </p>

              <div className="flex items-center gap-5 p-5">
                <img className="rotate-[135deg]" src={img} alt="" />
                <p className=" text-[18px] font-medium text-[#B3B3B2] uppercase ">
                  Know More
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="space-y-5 w-[95%] mx-auto">
        <div className="bg-[#1A1A1A] flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl">
          <h1 className="text-[35px] font-[600] text-[#F9EFEC]">
            Testimonials
          </h1>
          <div className="flex items-center gap-[20px] ">
            <img src={img} alt="" />
            <p className="text-[#B3B3B2] font-[500] uppercase">
              ALL Testimonials
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {arr.map((e) => (
            <div className="bg-[#1A1A1A]  border border-[#0F0F0F] rounded-xl">
              <p className="p-5 text-[#81807E] text-xl ">Step {e.num}</p>

              <p className="p-5 text-2xl font-medium bg-[#1F1F1F] text-[#F9EFEC] uppercase border-y-2 border-[#262626] ">
                Explore Job Listings
              </p>

              <p className="text-[#B3B3B2] text-[18px] p-5">
                Visit our website's "Careers" page to explore the current job
                listings. Review the various roles available and select the
                position that aligns with your skills, experience, and career
                aspirations.
              </p>

              <div className="flex items-center gap-5 p-5">
                <img className="rotate-[135deg]" src={img} alt="" />
                <p className=" text-[18px] font-medium text-[#B3B3B2] uppercase ">
                  Know More
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Careers;
