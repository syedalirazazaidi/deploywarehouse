import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex  md:justify-between  md:py-8 mx-6 lg:mx-2 xl:mx-2 2xl:mx-12">
      <div className="text-gray-600 body-font w-full">
        <div className="flex md:flex-wrap md:p-5 flex-col md:flex-row items-center">
          <div className="flex justify-between gap-60 mt-4 md:mt-2">
            <h2 className="text-[16px] md:text-[25px]  w-full font-bold text-[#FFFFFF]">
              Frederick Companies
            </h2>
            <div className="md:hidden mt-4">
              <Sheet>
                <SheetTrigger asChild>
                  <div className=" cursor-pointer">
                    <Menu color="#FF5B46" size={36} />
                  </div>
                </SheetTrigger>
                <SheetContent className="bg-red-400 ">
                  <SheetHeader className="mt-10">
                    <SheetTitle className="hover:text-red-100 cursor-pointer hover:underline">
                      <Link href="/">Home</Link>
                    </SheetTitle>
                    <SheetTitle className="hover:text-red-100 cursor-pointer hover:underline">
                      <Link href="/aboutus">About us</Link>
                    </SheetTitle>
                    <SheetTitle className="hover:text-red-100 cursor-pointer hover:underline">
                      <Link href="/news">News</Link>
                    </SheetTitle>
                    <SheetTitle className="hover:text-red-100 cursor-pointer hover:underline">
                      <Link href="/careers">Careers</Link>
                    </SheetTitle>
                    <SheetTitle className="hover:text-red-100 cursor-pointer hover:underline">
                      <Link href="/contact">Contact us</Link>
                    </SheetTitle>
                    {/* <SheetDescription>Hi develoepr</SheetDescription> */}
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              {/* <Menu color="white" width={32} /> */}
            </div>
          </div>

          <div
            className="hidden flex-1 lg:ml-2 xl:ml-34 2xl:ml-44 md:flex flex-wrap items-center text-base xl:justify-center lg:justify-center mt-4 md:mt-0
          
       
          "
          >
            <Link
              href="/"
              className="lg:mr-10 xl:mr-16 text-[#FFFFFF] font-semibold text-[12px] hover:text-gray-100 hover:cursor-pointer"
            >
              HOME
            </Link>
            <Link
              href="/aboutus"
              className="lg:mr-10 xl:mr-16 text-[#FFFFFF] font-semibold text-[12px] hover:text-gray-100 hover:cursor-pointer"
            >
              ABOUT US
            </Link>

            {/* <a className="lg:mr-10 xl:mr-16 text-[#FFFFFF] font-semibold text-[12px] hover:text-gray-100 hover:cursor-pointer">
              SERVICES
            </a> */}
            <Link
              href="/news"
              className="lg:mr-10 xl:mr-16 text-[#FFFFFF] font-semibold text-[12px] hover:text-gray-100 hover:cursor-pointer"
            >
              NEWS
            </Link>
            <Link
              href="/careers"
              className="lg:mr-10 xl:mr-16 text-[#FFFFFF] font-semibold text-[12px] hover:text-gray-100 hover:cursor-pointer"
            >
              CAREERS
            </Link>
            <Link
              href="/contact"
              className="lg:mr-10 xl:mr-16 text-[#FFFFFF] font-semibold text-[12px] hover:text-gray-100 hover:cursor-pointer"
            >
              CONTACT US
            </Link>
          </div>
          <Button className="hover:bg-[#FF5B46] hidden md:block bg-[#FF5B46] text-[14px] font-semibold text-[#FFFFFF] leading-[16px] rounded-sm px-6 mt-4 md:mt-0">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
