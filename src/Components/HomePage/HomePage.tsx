import React, { useState, ChangeEvent, FormEvent } from "react";
import { GrAddCircle } from "react-icons/gr";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import {
  AiOutlineUser,
  AiFillGithub,
  AiOutlineDelete,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdAttachFile } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { RiSendPlane2Line } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import pin from "../../../public/output-onlinegiftools.gif";

import { BiMessageSquareDots } from "react-icons/bi";

const HomePage = () => {
  const [message, setMessage] = useState("");
  const [messageData, setMessageData] = useState([]);
  const [messageDataStore, setMessageDataStore] = useState([]);
  console.log(messageData);

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  // const handleAddMessage = () => {
  //   if (message.trim() !== "") {
  //     setMessageData({ ...messageData, [message]: message });

  //     setMessage("");
  //     // Clear the input field after adding the message
  //   }
  // };

  const handleAddMessage = (e: any) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setMessageData([...messageData, message]);
      // Here, we use the spread operator to create a new array with the added message.

      setMessage("");
    }
  };

  const image =
    "data:image/jpeg;base64,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";
  const data = [
    {
      name: "Aliya Bhatt",
      description: "Hello Everyone",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    // More objects...
  ];
  return (
    <div className="bg-indigo-300 h-screen ">
      <div className="bg-gray-600 w-auto h-screen  flex">
        <div className="left bg-gray-700">
          <div className="chat_logo  flex justify-center mt-5">
            <span>
              <BiMessageSquareDots
                style={{ fontSize: "2rem", color: "#5C6BC0" }}
              />
            </span>
          </div>
          <ul className="bg-gray-700  overflow-hidden mt-20 opacity-60 ">
            <li className="p-5">
              <AiOutlineUser style={{ fontSize: "2rem" }} />
            </li>
            <li className="p-5">
              <MdDarkMode style={{ fontSize: "2rem" }} />
            </li>
            <li className="p-5">
              <AiFillGithub style={{ fontSize: "2rem" }} />
            </li>
            <li className="p-5">
              <AiOutlineDelete style={{ fontSize: "2rem" }} />
            </li>
            <li className="p-5">
              <AiOutlineLogout style={{ fontSize: "2rem" }} />
            </li>
          </ul>
        </div>
        <div className="middle p-2 border-r border-slate-500  ">
          <div className="bg-transparent  flex flex-col items-center gap-0 ">
            {/* profile */}
            <div className=" flex  rounded-xl gap-1 mt-4 w-full">
              <img
                className="w-[60px] h-[60px]   rounded-full "
                src="https://t3.ftcdn.net/jpg/05/59/43/98/360_F_559439863_BoLPm1txcZr0OOqA1hs93FnNEPnpmMaH.jpg"
                alt=""
              />
              <div className="name_info px-2">
                <h2 className="text-lg font-medium">John Doe</h2>
                <p className="text-sm flex items-center  ">
                  sample status
                  <span>
                    <AiOutlineEdit
                      style={{ color: "#9a97fc", padding: "1px" }}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center m-2 ">
              <div className=" bg-gray-500 mx-2  rounded-xl  p-2 text-xs w-full  ">
                <input
                  type="text"
                  className="bg-transparent"
                  placeholder="Add new chat"
                />
              </div>
              <span>
                <IoIosAdd style={{ fontSize: "3rem", color: "#726dfe" }} />
              </span>
            </div>
          </div>

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#726dfe] flex justify-evenly p-2 rounded-xl shadow-lg mt-4">
              <img
                className="w-[44px] h-[44px] rounded-full"
                src={item.imageUrl}
                alt=""
              />
              <div className="name_info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="right w-full h-screen ">
          <div className=" border-b mb-2 border-slate-500 ">
            <div className="bg-transparent flex justify-start ml-2 p-2 rounded-xl gap-2 mt-4">
              <img
                className="w-[44px] h-[44px] rounded-full"
                src={image}
                alt=""
              />
              <div className="name_info">
                <h2>name</h2>
                <p>hello world</p>
              </div>
            </div>
          </div>

          <div>
            {!messageData ? (
              <div className="flex items-center justify-center flex-col  w-full  mt-40 ">
                <p className="">no message here yet...</p>
                <div>
                  {" "}
                  <img src={pin} alt="" />
                </div>
              </div>
            ) : (
              <div>
                <div className="chat chat-start  ">
                  <div className="chat-bubble  bg-[#36318d99] text-white ">
                    It's over Anakin, <br />I have the high ground.
                  </div>
                </div>

                {messageData.map((msg: any, index: any) => (
                  <div key={index} className="chat chat-end">
                    <div className="chat-bubble  bg-[#443fdb] text-white ">
                      {msg}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="absolute bottom-10 w-[70%] flex justify-center  items-center ">
            <div className=" bg-gray-500  w-[70%]  rounded-full  p-2 text-base mx-10 flex items-center gap-2 ">
              <span>
                <MdAttachFile
                  style={{
                    fontSize: "2rem",
                    color: "#443fdb",
                    transform: "rotate(0deg)",
                  }}
                />
                {/* <IoAddCircleOutline /> */}
              </span>
              {/* new input */}
              {/* <input
    type="text"
    className="bg-transparent w-full outline-none"
    placeholder="Add new chat"
    value={message}
    autoComplete="current-message"
    onChange={handleChange}
  /> */}
              <div>
                <input
                  type="text"
                  className="bg-transparent w-full outline-none"
                  placeholder="Add new chat"
                  value={message}
                  autoComplete="current-message"
                  onChange={handleChange}
                />

                {/* <ul>
            {messageData.map((msg: any, index: any) => (
              <li key={index}>{msg}</li>
            ))}
          </ul> */}
              </div>

              {/* <input
    type="text"
    className="bg-transparent w-full outline-none"
    placeholder="Add new chat"
    value={message}
    autoComplete="currnt-message"
    // onClick={() => {}}
  /> */}
            </div>
            <span className="bg-[#726dfe] p-2 rounded-full -mx-6 ">
              <RiSendPlane2Line
                style={{ fontSize: "1.5rem", color: "white " }}
                onClick={handleAddMessage}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
