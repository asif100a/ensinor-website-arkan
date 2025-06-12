import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <BannerPrimary
        title="About Us"
        link={{ name: "about us", url: "/about-us" }}
      />

      {/* Main content */}
      <main>
        
      </main>
    </div>
  );
}
