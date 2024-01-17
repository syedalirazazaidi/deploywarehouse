import Image from "next/image";
import React from "react";
import warehouse from "../../public/Warehouse.svg";
import truck from "../../public/truck.svg";
import Handshake from "../../public/Handshake.svg";
import fork from "../../public/fork.svg";
import Factory from "../../public/Factory.svg";

export default function Features() {
  return (
    <section className="text-gray-600 body-font -mt-12">
      <div className="md:container px-5 py-24 md:mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-center text-[#A93838] mb-20 uppercase">
          features <br />
          <span className="font-medium text-[12px] text-[#222222] lowercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices urna non magna faucibus elementum. Pellentesque venenatiss
            odio quam,
          </span>
          <div className="flex justify-center mt-2">
            <div className="h-1 w-32 bg-[#A93838] rounded" />
          </div>
        </h1>

        <h3 className="container mx-auto"></h3>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
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
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
              <Image src={Handshake} alt="warehouse" />
            </div>
            <div className="flex-grow pl-2 md:pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Brokering
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
              <Image src={fork} alt="warehouse" />
            </div>
            <div className="flex-grow pl-2 md:pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Transloading
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
              <Image src={Factory} alt="warehouse" />
            </div>
            <div className="flex-grow pl-2 md:pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Industrial Storage Yards
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
      </div>
    </section>
  );
}
