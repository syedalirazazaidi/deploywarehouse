import React from "react";
import Image from "next/image";
import blog1 from "../../public/blog1.svg";
import blog2 from "../../public/blog2.svg";
import blog3 from "../../public/blog3.svg";

export default function Blog() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-center text-[#A93838] mb-20 uppercase">
          our blogs <br />
          <span className="font-medium text-[12px] text-[#222222] lowercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices urna non magna faucibus elementum. Pellentesque venenatis
            odio quam,
          </span>
          <div className="flex justify-center mt-2">
            <div className="h-1 w-32 bg-[#A93838] rounded" />
          </div>
        </h1>
        <div className="flex flex-wrap   -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full  overflow-hidden">
              <Image
                src={blog1}
                alt="blog2"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />

              <div className="flex gap-4  mt-2">
                <div className=" my-4 ">
                  <div className="border-2 border-[#A93838] w-12 p-2  rounded-lg">
                    <h2 className="text-[#A93838] text-[12px] font-semibold  text-center items-center">
                      20 <br />
                      JULY
                    </h2>
                  </div>
                </div>

                <div className="p-2 mb-2">
                  <h2 className="tracking-widest text-xs title-font font-semibold text-[14px] text-[#222222] mb-1">
                    Lorem ipsum dolor sit amet dolor sit amet
                  </h2>

                  <p className="text-[12px] text-[#222222] mb-3 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultrices urna non magn faucibus elementum. Pellentesque
                    venens odio quam,Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed ultrices urna non magna faucibus
                    elementum.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-[#A93838] font-medium text-[14px] items-center md:mb-2 lg:mb-0">
                      Countinue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full  overflow-hidden">
              <Image
                src={blog2}
                alt="blog2"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div className="flex gap-4">
                <div className=" my-4  mb-2">
                  <div className="border-2 border-[#A93838] w-12 p-2  rounded-lg">
                    <h2 className="text-[#A93838] text-[12px] font-semibold  text-center items-center">
                      20 <br />
                      JULY
                    </h2>
                  </div>
                </div>
                <div className="p-2 ">
                  <h2 className="tracking-widest text-xs title-font font-semibold text-[14px] text-[#222222] mb-1">
                    Lorem ipsum dolor sit amet dolor sit amet
                  </h2>

                  <p className="text-[12px] text-[#222222] mb-3 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultrices urna non magn faucibus elementum. Pellentesque
                    venens odio quam,Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed ultrices urna non magna faucibus
                    elementum.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-[#A93838] font-medium text-[14px] items-center md:mb-2 lg:mb-0">
                      Countinue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full  overflow-hidden">
              <Image
                src={blog3}
                alt="blog2"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div className="flex gap-4">
                <div className=" my-4 mb-2 ">
                  <div className="border-2 border-[#A93838] w-12 p-2  rounded-lg">
                    <h2 className="text-[#A93838] text-[12px] font-semibold  text-center items-center">
                      20 <br />
                      JULY
                    </h2>
                  </div>
                </div>
                <div className="p-2 ">
                  <h2 className="tracking-widest text-xs title-font font-semibold text-[14px] text-[#222222] mb-1">
                    Lorem ipsum dolor sit amet dolor sit amet
                  </h2>

                  <p className="text-[12px] text-[#222222] mb-3 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultrices urna non magn faucibus elementum. Pellentesque
                    venens odio quam,Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed ultrices urna non magna faucibus
                    elementum.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-[#A93838] font-medium text-[14px] items-center md:mb-2 lg:mb-0">
                      Countinue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
