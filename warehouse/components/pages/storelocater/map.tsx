"use client";
import { Search } from "lucide-react";
import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import warehouse from "../../../public/Warehouse.svg";
import Link from "next/link";
export default function MapLocationComponent() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  return (
    <section className="text-gray-600 body-font relative">
      <h2 className="flex justify-center mt-5 font-extrabold text-[24px] text-[#222222] uppercase">
        find us near you
      </h2>
      {/* <p>{process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}</p> */}
      <div className="flex justify-center mt-2">
        <div className="h-[2px] w-24 bg-[#A93838] rounded" />
      </div>
      <div className=" flex justify-center mx-auto container my-4 relative">
        <Input
          ref={autoCompleteRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter location and zip code"
          className="pl-2 "
        />
        <Search className="absolute right-10 top-2.5 h-4 w-6 text-muted-foreground" />
      </div>
      <div className="container  px-5 gap-12 mt-12 pb-24 mx-auto  flex sm:flex-nowrap flex-wrap">
        <Card className="lg:w-1/4  h-[400px] md:w-1/2 border 2  bg-white flex flex-col md:ml-auto w-48 md:py-8 mt-8 md:mt-0">
          <div className="flex items-center gap-4 mx-auto container">
            <Image src={warehouse} alt="warehouse" />
            {/* <h2 className="text-gray-900 text-lg mb-1 font-medium title-font"></h2> */}
            <p className="font-bold text-[12px] text-[#545454]">
              Frederick Companies Tompkins Ave Brooklyn place
            </p>
          </div>
          {/* <Card className="h-96"></Card> */}
          {/* <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message 
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div> */}
        </Card>
        <div className="mx-auto w-2/3"><iframe width="100%" height="600" frameBorder="0" scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20S406%20Tomplins%20Ave,Brooklyntreet,%20Dublin,%20Ireland+(My%20BusiFrederick%20Companies%20Tompkins%20Ave%20Brooklynness%20Name)&amp;t=&amp;z=2&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>
        {/* <div className="mx-auto w-2/3">
      <iframe
        className="w-full focus:outline-none"
        height="400"
        frameBorder="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20S406%20Tomplins%20Ave,Brooklyntreet,%20Dublin,%20Ireland+(My%20BusiFrederick%20Companies%20Tompkins%20Ave%20Brooklynness%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Google Map"
      >
        <Link href="https://www.maps.ie/population/">Calculate population in area</Link>
      </iframe>
    </div> */}
        {/* <div style="width: 100%"> */}
        {/* <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20S406%20Tomplins%20Ave,Brooklyntreet,%20Dublin,%20Ireland+(My%20BusiFrederick%20Companies%20Tompkins%20Ave%20Brooklynness%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Calculate population in area
            </a>
          </iframe> */}
          {/* </div> */}
          {/* <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <div className="w-full">
          
            <iframe
             width="100%"
            height="100%"
           className="absolute inset-0"
           title="map"
            frameBorder={0}
           marginHeight={0}
            marginWidth={0}
            scrolling="no" 
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
              
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }} 
         />*/}
        {/* </div> */}
      </div>
    </section>
  );
}
