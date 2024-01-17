import React from "react";
import Header from "../../../components/sections/header";
import AboutBanner from "../../../components/pages/aboutus/banner";
import AboutHistory from "../../../components/pages/aboutus/history";
import AboutShipment from "../../../components/pages/aboutus/shipment";
import AboutTrusted from "../../../components/pages/aboutus/trust";
import AboutServices from "../../../components/pages/aboutus/team";

export default function Aboutus() {
  return (
    <main>
      <div className="absolute top-0  z-50 w-full">
        <Header />
      </div>
      <AboutBanner />
      <AboutHistory />
      <AboutShipment />
      <AboutTrusted />
      <AboutServices />
    </main>
  );
}
