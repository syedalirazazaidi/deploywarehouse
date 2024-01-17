import Image from "next/image";
import React from "react";
import aeroplane from "../../public/aeroplane.png";
import truck from "../../public/truckrect.svg";
import rectship from "../../public/rectship.svg";

export default function Offer() {
  return (
    <section className="text-gray-600 body-font  -mt-12">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-center text-[#A93838] mb-20 uppercase">
          what we offer <br />
          <span className="font-medium text-[12px] text-[#222222] lowercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices urna non magna faucibus elementum. Pellentesque venenatis
            odio quam,
          </span>
          <div className="flex justify-center mt-2">
            <div className="h-1 w-32 bg-[#A93838] rounded" />
          </div>
        </h1>
        <div className="flex flex-wrap justify-center -m-4">
          <div className="w-full  xl:w-1/4 md:w-1/2 p-4">
            <div className="   rounded-lg bg-gray-100">
              <Image
                src={aeroplane}
                alt="warehouse"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <h3 className="tracking-widest text-[222222]  text-[14px] font-medium title-font p-4">
                AIR FREIGHT
              </h3>
              <div className="h-[2px] w-16 bg-[#A93838] ml-4  rounded " />

              <p className="text-[#515151] font-regular text-[13px] p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultrices urna non magna faucibus elementum. Pellentesque
                venenatis odio quam,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed ultrices urna non magna faucibus elementum.
                Pellentesque venenatis odio quam,
              </p>
              <h2 className=" text-[#A93838] font-medium text-[14px]  px-4 my-2 ">
                Read More
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="   rounded-lg bg-gray-100">
              <Image
                src={truck}
                alt="warehouse"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <h3 className="tracking-widest text-[222222]  text-[14px] font-semibold title-font p-4">
                ROADWAY FREIGHT
              </h3>
              <div className="h-[2px] w-16 bg-[#A93838] ml-4  rounded" />

              <p className="text-[#515151] font-regular text-[13px] p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultrices urna non magna faucibus elementum. Pellentesque
                venenatis odio quam,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed ultrices urna non magna faucibus elementum.
                Pellentesque venenatis odio quam,
              </p>
              <h2 className=" text-[#A93838] font-medium text-[14px]  px-4 my-2 ">
                Read More
              </h2>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4 ">
            <div className="   rounded-lg bg-gray-100">
              <Image
                src={aeroplane}
                alt="warehouse"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <h3 className="tracking-widest text-[222222]  text-[14px] font-semibold title-font p-4">
                OCEAN FREIGHT
              </h3>
              <div className="h-[2px] w-16 bg-[#A93838] ml-4  rounded" />

              <p className="text-[#515151] font-regular text-[13px] p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultrices urna non magna faucibus elementum. Pellentesque
                venenatis odio quam,Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed ultrices urna non magna faucibus elementum.
                Pellentesque venenatis odio quam,
              </p>
              <h2 className=" text-[#A93838] font-medium text-[14px]  px-4 my-2 ">
                Read More
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
