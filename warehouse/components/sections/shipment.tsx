import React from "react";

export default function Shipment() {
  return (
    <section className="text-gray-600 body-font ">
      <div className="md:container px-4 md:px-60 py-4 md:py-12 md:mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="text-[#A93838] font-extrabold text-[25px] md:text-[30px]">
              25,000+
            </h2>
            <p className="leading-relaxed font-regular text-[13px] text-[#515151]">
              Shipment Delivered
            </p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="text-[#A93838] font-extrabold text-[25px] md:text-[30px]">1000+</h2>
            <p className="leading-relaxed font-regular text-[13px] text-[#515151]">
              Repeated Customers
            </p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="text-[#A93838] font-extrabold text-[25px] md:text-[30px]">250+</h2>
            <p className="leading-relaxed font-regular text-[13px] text-[#515151]">
              Daily Customers
            </p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="text-[#A93838] font-extrabold text-[25px] md:text-[30px]">100+</h2>
            <p className="leading-relaxed font-regular text-[13px] text-[#515151]">
              Vehicles Fleet
            </p>
          </div>
        </div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className=" font-semibold title-font mb-4 text-[#222222] text-[24px]">
                THE ULTIMATE TRANSPORT
              </h1>
              <p className="font-medium text-[13px] text-[#515151]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultrices urna non magna
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-[#FFFFFF] bg-[#A93838] border-0 py-2 px-8 focus:outline-none hover:bg-[#A93838] rounded text-lg">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
