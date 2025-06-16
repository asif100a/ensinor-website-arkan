import Image from "next/image";
import React from "react";

export default function ForBusinesses() {
  const features = [
    {
      title: "Corporate training",
      description:
        "Quickly onboard new employees and upskill your existing team with standardized, trackable training programs that ensure consistent knowledge across your organization.",
    },
    {
      title: "Partner onboarding",
      description:
        "Equip your business partners with the knowledge they need through dedicated training portals, reducing support requests and accelerating their time to productivity.",
    },
    {
      title: "Customer education",
      description:
        "Help customers get the most from your products with interactive tutorials and guided courses, leading to higher satisfaction rates and reduced support costs.",
    },
    {
      title: "Compliance or certification programs",
      description:
        "Ensure your team stays compliant with industry regulations through regular, trackable training with automated certification tracking and renewal notifications",
    },
    {
      title: "Coaching Customers",
      description:
        "Launch and grow your coaching business by delivering personalized support and development programs. Build stronger customer relationships while guiding them to success through one-on-one or group coaching.",
    },
  ];
  return (
    <section className="custom-container space-y-12">
      {/* Title & Description */}
      <div className="w-full max-w-[904px] mx-auto space-y-3 text-center">
        <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
          For Businesses
        </h1>
        <p className="text-black-secondary text-lg">
          A complete solution to empower your team, partners, and customers
          through impactful training — perfect for corporate learning, partner
          enablement, customer education, and compliance programs.
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center gap-12">
        <Image
          src="/images/business/for-businesses.png"
          alt="For Businesses"
          width={612}
          height={665}
          className="md:w-[612px] w-full h-auto md:h-[665px]"
        />
        <ul className="w-full space-y-8">
          {/* UX/UI Design */}
          {features.map((feature) => (
            <li key={feature.title} className="w-full space-y-3">
              <div className="w-full flex items-center gap-2">
                <Image
                  src="/icons/tick-mark.svg"
                  alt="Tick Mark"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] object-contain"
                />
                <h6 className="text-black-normal font-semibold">
                  {feature.title}
                </h6>
              </div>
              <p className="text-lg font-normal text-black-secondary">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
