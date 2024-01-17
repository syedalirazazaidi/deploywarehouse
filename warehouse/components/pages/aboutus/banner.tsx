import React from "react";
import about from "../../../public/aboutusbg.svg";
export default function AboutBanner() {
  return (
    <section
      style={{
        backgroundImage: `url(${about.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "120vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
      className="text-gray-600 body-font  "
    >
      <section className="text-gray-600 body-font mb-24">
        <div className="md:container  px-5 py-24 md:mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h2 className="z-50 text-[30px]  md:text-[50px] font-extrabold text-[#FFFFFF] md:w-[623px] md:h-[122px] leading-[50px]">
              About us
            </h2>

            <p className="z-50 font-medium md:text-[18px] text-[#FFFFFF] md:w-[663px] md:h-[44px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultrices urna non magna faucibus elementum. Pellentesque venenatis
              odio quam,
            </p>
          </div>
          <div className="z-50">
            <button className=" flex mx-auto  text-white bg-[#A93838] border-0 py-2 px-6 md:py-2 md:px-8 focus:outline-none hover:bg-[#A93838] rounded-sm text-sm md:text-lg">
              READ MORE
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
