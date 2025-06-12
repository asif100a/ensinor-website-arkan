import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import LetsTalk from "@/components/sections/constactUs/LetsTalk";
import Map from "@/components/sections/constactUs/Map";
import WeAreHereToHelp from "@/components/sections/constactUs/WeAreHereToHelp";
import React from "react";

export default function ContactUs() {
  return (
    <div>
      <BannerPrimary title="Contact US" link={{name: "Contact Us", url: "/contact-us"}} />

      <main>
        <WeAreHereToHelp />
        <LetsTalk />
        <Map />
      </main>
    </div>
  );
}
