import Image from "next/image";
import React from "react";
import culbg from "../../../public/reactmy.svg";
export default function Culture() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="w-[500px] mb-2 font-extrabold text-[24px] text-[#222222]">
            We promote a culture of growth & <br /> opportunities for our
            company as well our employees
          </h1>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-[#A93838] rounded" />
          </div>
          <div className=" font-normal text-[13px] text-[#222222]">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, co sectetur adipisicing elit.
              Blanditiis deleniti repreh nderit animi est eaque corporis! Nisi,
              as eriores nam amet doloribus, soluta ut re ciendis. Lorem ipsum
              dolor sit amet, co sectetur adipisicing elit. Blanditiis deleniti
              repreh nderit animi est eaque corporis! Nisi, as eriores nam amet
              doloribus, soluta ut re ciendis.
            </p>
            <div className="mb-6">
              <br />
            </div>
            <span className="">
              Lorem ipsum dolor sit amet, co sectetur adipisicing elit.
              Blanditiis deleniti repreh nderit animi est eaque corporis! Nisi,
              as eriores nam amet doloribus, soluta ut re ciendis. Lorem ipsum
              dolor sit amet, co sectetur adipisicing elit. Blanditiis deleniti
              repreh nderit animi est eaque corporis! Nisi, as eriores nam amet
              doloribus, soluta ut re ciendis.
            </span>
          </div>

          <div className="flex justify-center mt-4">
            <button className="py-2 rounded-sm px-12 text-[#FFFFFF] uppercase bg-[#A93838]">
              Job Opening
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image src={culbg} alt="culture" />
        </div>
      </div>
    </section>
  );
}
