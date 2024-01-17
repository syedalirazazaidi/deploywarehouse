import Image from "next/image";
import React from "react";
import location from "../../public/location.png";
import phone from "../../public/phone.png";
import email from "../../public/email.png";

export default function Footer() {
  return (
    <footer className="text-[#FFFFFF] bg-[#A93838]">
      <div className="container px-5 pt-24 pb-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Frederick Companies</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Logistics Company based in Houston, TX called “Frederick Companies".
            Have hundreds of warehouses all over the united states.Have hundreds
            of units for Full Truckload Dry Van, Reefer Trucks, LTL and more.
          </p>
        </div> */}
        <div className="flex-grow flex flex-wrap   justify-between   text-left">
          <div className="lg:w-1/4 md:w-4/5 w-full px-4 md:px-8">
            <h2 className=" font-bold text-[#FFFFFF] text-[25px] w-full   mb-3">
              Frederick Companies
            </h2>
            <nav className="list-none mb-10">
              <p className="font-medium text-[12px] text-[#FFFFFF] leading-5">
                Logistics Company based in Houston, TX called “Frederick
                Companies". Have hundreds of warehouses all over the united
                states.Have hundreds of units for Full Truckload Dry Van, Reefer
                Trucks, LTL and more.
              </p>
            </nav>
            <div>
              <div className="flex gap-4 my-3">
                <Image src={location} alt="loaction" />
                <p>Houston, TX</p>
              </div>
              <div className="flex gap-4 my-3">
                <Image src={phone} alt="phone" />
                <p>123-456-789</p>
              </div>
              <div className="flex gap-4 my-3">
                <Image src={email} alt="text" />
                <p>Info@domain.com</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4  ">
            <h2 className="  text-[#FFFFFF]  font-bold mb-3">Quick links</h2>
            <nav className="list-none mb-10 leading-10">
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">Home</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">About us</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">News</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">Contact us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="  text-[#FFFFFF]  font-bold mb-3">Quick links</h2>
            <nav className="list-none mb-10 leading-10">
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">Home</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">About us</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">News</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">Contact us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="  text-[#FFFFFF]  font-bold mb-3">Quick links</h2>
            <nav className="list-none mb-10 leading-10">
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">Home</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">About us</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">News</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a className="text-[#FFFFFF] hover:text-gray-800">Contact us</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <hr className=" bg-gray-800  border-3 dark:bg-black mx-20" />
      <p className="py-6 flex justify-center font-medium text-[12px] text-[#FFFFFF]">
        {" "}
        Copyright 2024 Frederick Companies. All Rights Reserved
      </p>
    </footer>
  );
}
