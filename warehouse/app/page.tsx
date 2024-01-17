import AboutUs from "@/components/sections/aboutus";
import Banner from "@/components/sections/banners";
import Blog from "@/components/sections/blog";
import Features from "@/components/sections/features";
import Header from "@/components/sections/header";
import Shipment from "@/components/sections/shipment";
import Shipping from "@/components/sections/shipping";
import Offer from "@/components/sections/weoffer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="absolute top-0  z-50 w-full">
        <Header />
      </div>
      <Banner />
      <Features />
      <Offer />
      <Shipment />
      <AboutUs />
      <Shipping />
      <Blog />
    </main>
  );
}
