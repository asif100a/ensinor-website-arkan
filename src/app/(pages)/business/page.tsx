import BannerHome from "@/components/Layout/Banners/BannerHome";
import ForBusinesses from "@/components/sections/business/ForBusinesses";
import HowItWorks from "@/components/sections/business/HowItWorks";
import KeyFeatures from "@/components/sections/business/KeyFeatures";
import React from "react";

export default function Business() {
  return (
    <div>
      <BannerHome
        bannerFor="business"
        title="Train Your Team. Engage
Your Customers."
        description="“Online education is electronically supported learning that relies on the Internet for teacher/student interaction and the distribution of class materials.”"
        bannerImage="/images/business/business-banner.png"
      />

      <div>
        <KeyFeatures />
        <ForBusinesses />
        <HowItWorks />
      </div>
    </div>
  );
}
