import React, { useEffect, useState } from "react";
import img from "./Button (1).png";
import img0 from "./Button.png";
import img1 from "./Icon Container (8).png";
import img2 from "./Icon Container (9).png";
import img3 from "./Icon Container (10).png";
import img4 from "./Icon Container (11).png";
import { useTodoStore } from "./store";

let arr2 = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];
const Careers = () => {
  let { users, get, delUser, addUser, editUser } = useTodoStore();

  useEffect(() => {
    get();
  }, []);

  let [addModal, setaddModal] = useState(false);
  let [addName, setaddName] = useState("");
  let [addDec, setaddDec] = useState("");

  let [editModal, seteditModal] = useState(false);
  let [editName, seteditName] = useState("");
  let [editDec, seteditDec] = useState("");
  let [idx, setidx] = useState("");

  function openModal(e) {
    seteditModal(true);
    seteditName(e.name);
    seteditDec(e.dec);
    setidx(e.id);
  }

  return (
    <div className="py-5 space-y-20 ">
      <article className="px-5 flex justify-between">
        <div className="text-[35px] uppercase  text-white font-semibold bg-[#1A1A1A]  w-3/5 p-10">
          <p className="flex flex-wrap items-center gap-2.5 pt-10">
            Unlock Your Potential
            <img src={img0} alt="" />
          </p>
          <p>in the Digital World</p>
        </div>

        <div className="bg-[#1A1A1A]  border border-[#0F0F0F] rounded-xl w-[38%]">
          <p className="p-5 text-2xl font-medium text-[#F9EFEC] uppercase ">
            At NexGen
          </p>

          <p className="text-[#B3B3B2] text-[15px] p-5">
            We believe in fostering a dynamic and collaborative work environment
            that empowers our team members to excel in their respective fields.
            Join us to be part of a passionate and innovative team dedicated to
            crafting exceptional digital solutions for clients across the globe.
            We are committed to nurturing talent, encouraging professional
            growth, and creating a workplace where creativity thrives.
          </p>

          <div className="flex items-center gap-5 p-5">
            <img className="rotate-[135deg]" src={img} alt="" />
            <p className=" text-[18px] font-medium text-[#B3B3B2] uppercase ">
              Know More
            </p>
          </div>
        </div>
      </article>

      <article className="space-y-5 w-[95%] mx-auto">
        <div className="bg-[#1A1A1A] flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl">
          <h1 className="text-[35px] font-[600] text-[#F9EFEC]">
            Join Our Team at NexGen
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {arr2.map((e, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A]  border border-[#0F0F0F] rounded-xl p-5 space-y-5"
            >
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2.5 text-2xl font-medium  uppercase ">
                  <img src={e.img} alt="" />
                  Web Designer
                </p>
                <p className="flex items-center gap-2.5 text-[#B3B3B2] uppercase text-xl font-medium ">
                  <img src={img} alt="" />
                  View Details
                </p>
              </div>

              <p className="text-[#B3B3B2] text-[18px]">
                <span className="font-medium text-2xl uppercase text-white">
                  Skills
                </span>
                <br />
                Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
                etc.), strong understanding of UI/UX design principles,
                responsive design expertise.
              </p>

              <button className=" text-[18px] font-medium text-black w-full py-2 bg-[#CE7D63] uppercase rounded ">
                Apply NoW
              </button>
            </div>
          ))}
        </div>
      </article>

      <article className="space-y-5 w-[95%] mx-auto">
        <div className="bg-[#1A1A1A] flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl">
          <h1 className="text-[35px] font-[600] text-[#F9EFEC]">
            How to Apply
          </h1>

          <div>
            <button
              onClick={() => setaddModal(true)}
              className="bg-[#CE7D63] text-black font-medium px-2.5 text-2xl rounded"
            >
              Add +
            </button>
          </div>
        </div>

        <div>
          {addModal && (
            <div
              style={{ backdropFilter: "blur(6px)" }}
              className="bg-[rgba(0,0,0,0.3)] fixed z-50 flex inset-0 items-center justify-center"
            >
              <div className="p-5 flex flex-col gap-5 rounded-2xl shadow bg-black">
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Name"
                  value={addName}
                  onChange={(e) => setaddName(e.target.value)}
                />
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Dec"
                  value={addDec}
                  onChange={(e) => setaddDec(e.target.value)}
                />
                <button
                  className="bg-[#CE7D63] px-2.5 py-1 rounded"
                  onClick={() =>
                    addUser({
                      id: Date.now().toString(),
                      name: addName,
                      dec: addDec,
                    })
                  }
                >
                  Save
                </button>
                <button
                  className="bg-red-300 px-2.5 py-1 rounded"
                  onClick={() => setaddModal(false)}
                >
                  close
                </button>
              </div>
            </div>
          )}

          {editModal && (
            <div
              style={{ backdropFilter: "blur(6px)" }}
              className="bg-[rgba(0,0,0,0.3)] fixed z-50 flex inset-0 items-center justify-center"
            >
              <div className="p-5 flex flex-col gap-5 rounded-2xl shadow bg-black">
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Name"
                  value={editName}
                  onChange={(e) => seteditName(e.target.value)}
                />
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Dec"
                  value={editDec}
                  onChange={(e) => seteditDec(e.target.value)}
                />

                <button
                  className="bg-[#CE7D63] px-2.5 py-1 rounded"
                  onClick={() =>
                    editUser(
                      {
                        id: idx,
                        name: editName,
                        dec: editDec,
                      },
                      () => seteditModal(false)
                    )
                  }
                >
                  save
                </button>
                <button
                  className="bg-red-300 px-2.5 py-1 rounded"
                  onClick={() => seteditModal(false)}
                >
                  close
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-4 gap-5">
          {users.map((e, i) => (
            <div
              key={e.id}
              className="bg-[#1A1A1A]  border border-[#0F0F0F] rounded-xl"
            >
              <p className="p-5 text-[#81807E] text-xl ">Step 0{i+1}</p>

              <p className="p-5 text-xl font-medium bg-[#1F1F1F] text-[#F9EFEC] uppercase border-y-2 border-[#262626] ">
                {e.name}
              </p>

              <p className="text-[#B3B3B2] text-[18px] p-5">{e.dec}</p>

              <div className="flex items-center gap-5 p-5">
                <button
                  onClick={() => delUser(e.id)}
                  className=" text-[18px] font-medium text-red-300 uppercase "
                >
                  Delete
                </button>
                <button
                  onClick={() => openModal(e)}
                  className=" text-[18px] font-medium text-blue-300 uppercase "
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Careers;
