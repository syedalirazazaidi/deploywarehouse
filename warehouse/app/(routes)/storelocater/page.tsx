import React from "react";
import Header from "../../../components/sections/header";
import BannerLocator from "../../../components/pages/storelocater/banner";
import MapLocationComponent from "@/components/pages/storelocater/map";

export default function Locater() {
  return (
    <main>
      <div className="absolute top-0  z-50 w-full">
        <Header />
      </div>
      <BannerLocator />
      <MapLocationComponent/>
    </main>
  );
}
