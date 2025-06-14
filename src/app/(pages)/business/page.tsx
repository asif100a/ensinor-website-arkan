import BannerLong from "@/components/Layout/Banners/BannerLong";
import FAQSection from "@/components/sections/business/FAQSection";
import ForBusinesses from "@/components/sections/business/ForBusinesses";
import HowItWorks from "@/components/sections/business/HowItWorks";
import KeyFeatures from "@/components/sections/business/KeyFeatures";
import RequestADemo from "@/components/sections/business/RequestADemo";
import SubscriptionPlans from "@/components/sections/business/SubscriptionPlans";
import WhatOurClientsSay from "@/components/sections/business/WhatOurClientsSay";
import PartnerCompanies from "@/components/sections/PartnerCompanies";
import React from "react";

export default function Business() {
  return (
    <div>
      <BannerLong
        bannerFor="business"
        title="Train Your Team. Engage
Your Customers."
        description="“Online education is electronically supported learning that relies on the Internet for teacher/student interaction and the distribution of class materials.”"
        bannerImage="/images/business/business-banner.png"
      />

      <main>
        <KeyFeatures />
        <ForBusinesses />
        <HowItWorks />
        <SubscriptionPlans />
        <PartnerCompanies title='Partners who trust Us' description='Our platform gives you the freedom to grow your skills at your own pace.' />
        <RequestADemo />
        <WhatOurClientsSay />
        <FAQSection />
      </main>
    </div>
  );
}
