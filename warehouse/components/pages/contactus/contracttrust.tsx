import Image from "next/image";
import React from "react";
import kiko from "../../../public/kikoman.svg";
import sharp from "../../../public/sharp.svg";
import hisenberg from "../../../public/hisense.svg";
import pioneer from "../../../public/pioneer.svg";
import maruchun from "../../../public/maruchan.svg";
import steve from "../../../public/steve.svg";

export default function ContractTrusted() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mt-16 px-5 bt-12 pb-24 mx-auto">
        <div
          className="flex justify-center 
        text-[#222222] font-extrabold uppercase text-[24px]
        items-center  flex-col  "
        >
          <h1>trusted by</h1>
        </div>
        <div className="flex justify-center mt-2">
          <div className="h-1 w-32 bg-[#A93838] rounded" />
        </div>
        <div className="flex flex-wrap items-center justify-center  -m-4">
          <div className="lg:w-1/6 md:w-1/6 p-4 ">
            <Image src={kiko} alt="" />
          </div>
          <div className="lg:w-1/6 md:w-1/6 p-4 ">
            <Image src={sharp} alt="" />
          </div>
          <div className="lg:w-1/6 md:w-1/6 p-4 ">
            <Image src={hisenberg} alt="" />
          </div>

          <div className="lg:w-1/6 md:w-1/6 p-4 ">
            <Image src={pioneer} alt="" />
          </div>
          <div className="lg:w-1/6 md:w-1/6 p-4 ">
            <Image src={maruchun} alt="" />
          </div>
          <div className="lg:w-1/6 md:w-1/6 p-4">
            <Image src={steve} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
