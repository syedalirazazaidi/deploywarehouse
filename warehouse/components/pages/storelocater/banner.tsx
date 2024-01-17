import React from "react";
import location from "../../../public/locationbg.svg";
export default function BannerLocator() {
  return (
    <section
      style={{
        backgroundImage: `url(${location.src})`,
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
            <h2 className="uppercase z-50 text-[30px]  md:text-[50px] font-extrabold text-[#FFFFFF] md:w-[623px] md:h-[122px] leading-[50px]">
              our locations
            </h2>
          </div>
        </div>
      </section>
    </section>
  );
}
