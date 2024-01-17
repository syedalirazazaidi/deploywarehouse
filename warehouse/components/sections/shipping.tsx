import React from "react";
import Image from "next/image";
import bgform from "../../public/formbg.svg";
export default function Shipping() {
  return (
    <section
      className="text-gray-600 body-font bg-[#A93838] "
      style={{
        backgroundImage: `url(${bgform.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        //  minHeight: "120vh",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-[#FFFFFF] font-extrabold text-[24px] uppercase">
            lets discuss your shipping
          </h1>
          <p className="text-[#FFFFFF] font-medium  text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices urna non magna faucibus elementum. Pellentesque venenatis
            odio quam,
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-10 md:gap-20">
          <input
            type="email"
            className="placeholder-white w-[324px] peer py-3 pe-0 ps-8 block  bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:red-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
            placeholder="Enter name"
          />
          <div className="absolute  inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></div>
          <input
            type="email"
            className="placeholder-white w-[324px] peer py-3 pe-0 ps-8 block  bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-red-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
            placeholder="Enter email"
          />
          <div className="absolute  inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></div>
          <input
            type="email"
            className="placeholder-white w-[324px] peer py-3 pe-0 ps-8 block  bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-red-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
            placeholder="Enter phone"
          />
          <div className="absolute  inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></div>
        </div>

        <button className="flex mx-auto mt-16 text-[#A93838] bg-[#FFFFFF] border-0 py-2 px-8 focus:outline-none hover:bg-[#FFFFFF] rounded font-semibold text-[14px]">
          SEND NOW
        </button>
      </div>
    </section>
  );
}
