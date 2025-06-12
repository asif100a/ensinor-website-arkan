import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import BestQualityOnlineCourses from "@/components/sections/aboutUs/BestQualityOnlineCourses";
import LearnNewSkills from "@/components/sections/aboutUs/LearnNewSkills";
import MeetOurExpertTeacher from "@/components/sections/aboutUs/MeetOurExpertTeacher";
import GreatConversation from "@/components/sections/GreatConversation";
import PartnerCompanies from "@/components/sections/PartnerCompanies";
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
        <BestQualityOnlineCourses />
        <LearnNewSkills />
        <PartnerCompanies title="Work with Us" description="Our platform gives you the freedom to grow your skills at your own pace." />
        <GreatConversation />
        <MeetOurExpertTeacher />
      </main>
    </div>
  );
}
