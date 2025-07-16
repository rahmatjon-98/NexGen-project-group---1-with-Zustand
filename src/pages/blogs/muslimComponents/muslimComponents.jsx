import React, { useEffect, useState } from "react";
import { useToDoAsyncStore } from "../muslimComponents/store";
import { Modal, Button, Input, Checkbox } from "antd";

const MuslimComponents = () => {
  let { data, get, deleteUser, addNewUser, editUser, changeStatus } =
    useToDoAsyncStore();

  useEffect(() => {
    get();
  }, []);

  // add
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const showModal = () => {
    setIsModalOpenAdd(true);
  };

  const handleCancelAdd = () => {
    setIsModalOpenAdd(false);
  };

  let [inpAddImg, setInpAddImg] = useState("");
  let [inpAddName, setInpAddName] = useState("");
  let [inpAddDescription, setInpAddDescription] = useState("");
  let [inpAddStatus, setInpAddStatus] = useState(false);

  function addUser() {
    let newUser = {
      img: inpAddImg,
      name: inpAddName,
      description: inpAddDescription,
      status: inpAddStatus == "active" ? true : false,
    };
    addNewUser(newUser);
    setIsModalOpenAdd(false);
  }

  // edit
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };

  let [inpEditImg, setInpEditImg] = useState("");
  let [inpEditName, setInpEditName] = useState("");
  let [inpEditDescription, setInpEditDescription] = useState("");
  let [inpEditStatus, setInpEditStatus] = useState(false);
  let [idx, setIdx] = useState(null);

  function openEditDialog(e) {
    setIdx(e.id);
    setIsModalOpenEdit(true);
    setInpEditImg(e.img);
    setInpEditName(e.name);
    setInpEditDescription(e.description);
    setInpEditStatus(e.status);
  }

  function edit() {
    let updated = {
      img: inpEditImg,
      name: inpEditName,
      description: inpEditDescription,
      status: inpEditStatus == "active" ? true : false,
    };
    editUser(idx, updated);
    setIsModalOpenEdit(false);
  }
  return (
    <div className="flex flex-col items-end gap-5">
      {/* // add  */}
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpenAdd}
        onOk={addUser}
        onCancel={handleCancelAdd}
      >
        <article className="flex flex-col gap-3">
          <Input
            placeholder="Img..."
            value={inpAddImg}
            onChange={(e) => setInpAddImg(e.target.value)}
          />
          <Input
            placeholder="Name..."
            value={inpAddName}
            onChange={(e) => setInpAddName(e.target.value)}
          />
          <Input
            placeholder="Description..."
            value={inpAddDescription}
            onChange={(e) => setInpAddDescription(e.target.value)}
          />
          <select
            className="border-1 border-gray-300 p-[6px] rounded-lg"
            value={inpAddStatus}
            onChange={(e) => setInpAddStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </article>
      </Modal>

      {/* // edit  */}
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpenEdit}
        onOk={edit}
        onCancel={handleCancelEdit}
      >
        <article className="flex flex-col gap-3">
          <Input
            placeholder="Img..."
            value={inpEditImg}
            onChange={(e) => setInpEditImg(e.target.value)}
          />
          <Input
            placeholder="Name..."
            value={inpEditName}
            onChange={(e) => setInpEditName(e.target.value)}
          />
          <Input
            placeholder="Description..."
            value={inpEditDescription}
            onChange={(e) => setInpEditDescription(e.target.value)}
          />
          <select
            className="border-1 border-gray-300 p-[6px] rounded-lg"
            value={inpEditStatus}
            onChange={(e) => setInpEditStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </article>
      </Modal>
      <section className="grid md:grid-cols-3 gap-3 p-3 rounded-lg shadow-lg border-1 border-gray-900">
        <article className="flex items-center justify-between md:col-span-3 gap-5 md:p-7 p-5 rounded-lg bg-[#1A1A1A]">
          <h2 className="text-4xl font-bold">Related Blogs</h2>
          <div className="flex items-center gap-3">
            <img src="/imgMuslim/arrow.png" className="w-10 h-10" alt="arrow" />
            <p className="text-lg text-[#B3B3B2]">ALL Blogs</p>
          </div>
        </article>
        {data.map((e) => (
          <article
            key={e.id}
            className="flex flex-col gap-2 p-3 rounded-lg bg-[#1A1A1A] drop-shadow-2xl relative"
          >
            <img src={e.img} className="w-full h-52" alt={e.name} />
            <div className="flex flex-col gap-2 p-3 mt-3">
              <h3
                className={
                  e.status
                    ? "text-xl font-semibold"
                    : "text-xl text-red-500 font-semibold"
                }
              >
                {e.name}
              </h3>
              <div className="text-[#B3B3B2]">
                {e.description.length > 110 ? (
                  <p>
                    {e.description.slice(0, 110)}
                    <span className="text-blue-500 font-bold cursor-pointer hover:underline underline-offset-2">
                      ...read more
                    </span>
                  </p>
                ) : (
                  <p>{e.description}</p>
                )}
              </div>
              <div className="flex items-center gap-3 mt-3">
                <img
                  src="/imgMuslim/arrow.png"
                  className="w-10 h-10"
                  alt="arrow"
                />
                <p className="text-lg text-[#B3B3B2]">Read Full Blog</p>
              </div>
            </div>
            <div className="flex items-center gap-3 absolute top-5 right-5 text-xl">
              <i
                onClick={() => deleteUser(e.id)}
                className="fa-solid fa-trash-can text-red-500 cursor-pointer hover:text-red-400 transition delay-75"
              ></i>
              <i
                onClick={() => openEditDialog(e)}
                className="fa-solid fa-pen text-blue-500 cursor-pointer hover:text-blue-400 transition delay-75"
              ></i>
              <Checkbox checked={e.status} onChange={() => changeStatus(e)} />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default React.memo(MuslimComponents);
