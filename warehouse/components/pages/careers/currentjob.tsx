import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Job() {
  return (
    <section className="bg-gray-200 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <h1 className="font-extrabold text-[24px] text-[#222222] mb-6 text-center uppercase">
            current job openings
          </h1>
          <Card className="p-4 bg-[#FFFFFF] rounded-none border-1">
            <p className="text-[#222222] font-semibold text-[14px]">Keywords</p>
            <div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-none border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="example : Manager ,Forklifter"
                />
                <div className="px-2 absolute inset-y-0 right-0 flex items-center">
                  <Search />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-10  flex-col md:flex-row flex-wrap justify-between">
              <div className=" flex flex-col  items-left ">
                <label
                  htmlFor="currency"
                  className="text-[#222222] font-semibold text-[14px]"
                >
                  Department
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full w-[405px] md:w-[250px] rounded-md border-2 bg-gray py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm"
                >
                  <option>Select Department</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
              </div>
              <div className=" flex flex-col items-left ">
                <label
                  htmlFor="currency"
                  className="text-[#222222] font-semibold text-[14px]"
                >
                  Location
                </label>
                <select
                  id="currency"
                  name="currency"
                  className=" w-[405px] md:w-[250px] h-full rounded-md border-2 bg-gray py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm"
                >
                  <option>Select Location</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
              </div>
              <div className="flex gap-10 md:gap-2  justify-between md:justify-center  md:flex-row items-center mt-4 py-4 ">
                <Button className="px-10 hover:bg-white rounded-none bg-white border border-black uppercase text-[#222222] font-semibold text-[14px]">
                  Reset
                </Button>
                <Button className="px-10 hover:bg-[#A93838] rounded-none bg-[#A93838] border border-black uppercase text-[#FFFFFF] font-semibold text-[14px]">
                  search
                </Button>
              </div>
            </div>
          </Card>

          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <Card className="h-full  p-8  bg-[#FFFFFF] rounded-none border-1">
                  <div className="flex justify-between">
                    <h2 className="font-semibold py-2 text-[14px] text-[#222222]">
                      Warehouse Assistant
                    </h2>
                    <h2 className="text-[12px] text-[#222222] font-regular">
                      Day ago
                    </h2>
                  </div>
                  <p className="text-[12px] font-semibold text-[#545454]">
                    Location:
                    <span className="text-[12px] font-normal text-[#545454]">
                      Texas
                    </span>
                  </p>
                  <p className="text-[12px] font-semibold text-[#545454]">
                    Type:
                    <span className="text-[12px] font-normal text-[#545454]">
                      Full-Time
                    </span>
                  </p>
                  <div className="flex justify-between mt-4 text-[12px] font-normal text-[#222222]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ultrices urna non magna faucibus elementum.
                      Pellentesque venenatis odio quam,
                    </p>
                    <Button className="bg-[#B1B1B1] font-semibold text-[14px] text-[#FFFFFF]">
                      Apply
                    </Button>
                  </div>
                  {/* </div> */}
                </Card>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <Card className="h-full  p-8  bg-[#FFFFFF] rounded-none border-1">
                  <div className="flex justify-between">
                    <h2 className="font-semibold py-2 text-[14px] text-[#222222]">
                      Warehouse Assistant
                    </h2>
                    <h2 className="text-[12px] text-[#222222] font-regular">
                      Day ago
                    </h2>
                  </div>
                  <p className="text-[12px] font-semibold text-[#545454]">
                    Location:
                    <span className="text-[12px] font-normal text-[#545454]">
                      Texas
                    </span>
                  </p>
                  <p className="text-[12px] font-semibold text-[#545454]">
                    Type:
                    <span className="text-[12px] font-normal text-[#545454]">
                      Full-Time
                    </span>
                  </p>
                  <div className="flex justify-between mt-4 text-[12px] font-normal text-[#222222]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ultrices urna non magna faucibus elementum.
                      Pellentesque venenatis odio quam,
                    </p>
                    <Button className="bg-[#B1B1B1] font-semibold text-[14px] text-[#FFFFFF]">
                      Apply
                    </Button>
                  </div>
                </Card>
              </div>

              <div className="p-4 md:w-1/2 w-full">
                <Card className="h-full  p-8  bg-[#FFFFFF] rounded-none border-1">
                  <div className="flex justify-between">
                    <h2 className="font-semibold py-2 text-[14px] text-[#222222]">
                      Warehouse Assistant
                    </h2>
                    <h2 className="text-[12px] text-[#222222] font-regular">
                      Day ago
                    </h2>
                  </div>
                  <p className="text-[12px] font-semibold text-[#545454]">
                    Location:
                    <span className="text-[12px] font-normal text-[#545454]">
                      Texas
                    </span>
                  </p>
                  <p className="text-[12px] font-semibold text-[#545454]">
                    Type:
                    <span className="text-[12px] font-normal text-[#545454]">
                      Full-Time
                    </span>
                  </p>
                  <div className="flex justify-between mt-4 text-[12px] font-normal text-[#222222]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ultrices urna non magna faucibus elementum.
                      Pellentesque venenatis odio quam,
                    </p>
                    <Button className="bg-[#B1B1B1] font-semibold text-[14px] text-[#FFFFFF]">
                      Apply
                    </Button>
                  </div>
                  {/* </div> */}
                </Card>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <Card className="h-full  p-8  bg-[#FFFFFF] rounded-none border-1">
                  <div className="flex justify-between">
                    <h2 className="font-semibold py-2 text-[14px] text-[#222222]">
                      Warehouse Assistant
                    </h2>
                    <h2 className="text-[12px] text-[#222222] font-regular">
                      Day ago
                    </h2>
                  </div>
                  <p className="text-[12px] font-semibold text-[#545454]">
                    Location:
                    <span className="text-[12px] font-normal text-[#545454]">
                      Texas
                    </span>
                  </p>
                  <p className="text-[12px] font-semibold text-[#545454]">
                    Type:
                    <span className="text-[12px] font-normal text-[#545454]">
                      Full-Time
                    </span>
                  </p>
                  <div className="flex justify-between mt-4 text-[12px] font-normal text-[#222222]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ultrices urna non magna faucibus elementum.
                      Pellentesque venenatis odio quam,
                    </p>
                    <Button className="bg-[#B1B1B1] font-semibold text-[14px] text-[#FFFFFF]">
                      Apply
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
