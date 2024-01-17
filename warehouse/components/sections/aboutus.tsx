import React from "react";
import jonedoe from "../../public/donejoy.svg";
import Image from "next/image";
function AboutUs() {
  return (
    <div className="bg-gray-100">
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center gap-12">
            <div className="lg:w-3/12 lg:mb-0 mb-6 p-4 pb-12 bg-[#FFFFFF] relative">
              <div className="h-full text-center">
                <div className="absolute -top-[60px] sm:left-[270px] left-[134px] lg:left-[78px] xl:left-[105px] 2xl:left-[110px]  ">
                  {" "}
                  <Image src={jonedoe} alt="johndoe" />
                </div>
                <p className=" mt-20 text-[#222222] font-regular text-[12px]">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#A93838] mt-6 mb-4" />
                <h2 className="text-[#A93838] font-semibold text-[14px]">
                  John Doe
                </h2>
                <p className=" text-[12px] text-[#222222] font-regular">
                  Senior Product Designer
                </p>
              </div>
            </div>
            <div className="lg:w-3/12 lg:mb-0 mb-6 p-4 pb-12 bg-[#FFFFFF] relative">
              <div className="h-full text-center">
                <div className="absolute -top-[60px] sm:left-[270px] left-[134px] lg:left-[78px]  xl:left-[105px] 2xl:left-[110px] ">
                  {" "}
                  <Image src={jonedoe} alt="johndoe" />
                </div>
                <p className=" mt-20 text-[#222222] font-regular text-[12px]">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#A93838] mt-6 mb-4" />
                <h2 className="text-[#A93838] font-semibold text-[14px]">
                  John Doe
                </h2>
                <p className=" text-[12px] text-[#222222] font-regular">
                  Senior Product Designer
                </p>
              </div>
            </div>
            <div className="lg:w-3/12 lg:mb-0 mb-6 p-4 pb-12 bg-[#FFFFFF] relative">
              <div className="h-full text-center">
                <div className="absolute -top-[60px] sm:left-[270px] left-[134px] lg:left-[78px]  xl:left-[105px] 2xl:left-[110px] ">
                  {" "}
                  <Image src={jonedoe} alt="johndoe" />
                </div>
                <p className=" mt-20 text-[#222222] font-regular text-[12px]">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#A93838] mt-6 mb-4" />
                <h2 className="text-[#A93838] font-semibold text-[14px]">
                  John Doe
                </h2>
                <p className=" text-[12px] text-[#222222] font-regular">
                  Senior Product Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
