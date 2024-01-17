import BannerContact from "@/components/pages/contactus/banner";
import History from "@/components/pages/contactus/history";
import AboutUs from "@/components/sections/aboutus";
import Blog from "@/components/sections/blog";
import Header from "@/components/sections/header";
import Shipment from "@/components/sections/shipment";
import Shipping from "@/components/sections/shipping";
import Offer from "@/components/sections/weoffer";
import React from "react";
import ContractTrusted from "../../../components/pages/contactus/contracttrust";
import ContactForm from "../../../components/pages/contactus/form";

export default function page() {
  return (
    <main>
      <div className="absolute top-0  z-50 w-full">
        <Header />
      </div>

      <BannerContact />
      <ContactForm />
      <ContractTrusted />
      {/* <History />
      <Offer />
      <Shipment />
      <AboutUs />
      <Shipping />
      <Blog /> */}
    </main>
  );
}
