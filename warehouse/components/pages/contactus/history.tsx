import React from "react";
import warehouse from "../../../public/Warehouse.svg";
import truck from "../../../public/truck.svg";
import Image from "next/image";
export default function History() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="font-bold text-[24px] mb-2 text-[#A93838]">
              Moon hashtag pop-up try-hard offal truffaut
            </h1>
            <div className="leading-relaxed font-medium text-[12px] text-[#222222]">
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </div>
          </div>
        </div>
      </div>
      <div className="flex container flex-wrap -mt-12 mb-10">
        <div className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
            <Image src={warehouse} alt="warehouse" />
          </div>
          <div className="flex-grow pl-2 md:pl-6">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Warehousing
            </h2>
            <p className="leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultrices urna non magna faucibus elementum.
            </p>
            <a className="mt-3 text-[#A93838] inline-flex items-center">
              Learn More
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
            <Image src={truck} alt="warehouse" />
          </div>
          <div className="flex-grow pl-2 md:pl-6">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Trucking
            </h2>
            <p className="leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultrices urna non magna faucibus elementum.
            </p>
            <a className="mt-3 text-[#A93838] inline-flex items-center">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
