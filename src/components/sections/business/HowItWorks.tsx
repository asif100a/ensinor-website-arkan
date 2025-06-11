import Image from "next/image";
import React from "react";

export default function HowItWorks() {
  const facilities = [
    {
      title: "Create Courses",
      description:
        "Easily build interactive courses with our intuitive course builder.",
      icon: "/icons/mail-box.svg",
    },
    {
      title: "Schedule Events",
      description:
        "Host live training sessions, webinars, and workshops for your audience,",
      icon: "/icons/settings.svg",
    },
    {
      title: "Invite Participants",
      description:
        "Seamlessly invite employees or customers to access your training content.",
      icon: "/icons/progress-completed.svg",
    },
    {
      title: "Monitor Progress",
      description:
        "Track completion rates and engagement with detailed analytics dashboards.",
      icon: "/icons/progress-completed.svg",
    },
  ];

  return (
    <section className="custom-container space-y-12">
      {/* Title & Description */}
      <div className="w-full max-w-[605px] mx-auto space-y-3 text-center">
        <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
          How It Works
        </h1>
        <p className="text-black-secondary text-lg">
          Our platform makes it easy to create, manage, and deliver training
          content.
        </p>
      </div>

      {/* Facilities */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {facilities.map((facility) => (
          <div
            key={facility.title}
            className="w-full bg-gray-background px-9 py-6 rounded-xl space-y-6"
          >
            <div className="w-fit h-fit p-3 bg-yellow-secondary rounded-full mx-auto">
              <Image
                src={facility.icon}
                alt="Course image"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
            </div>
            <div>
              <div className="text-[#303030] text-lg font-semibold text-center space-y-2.5">
                <h4>{facility.title}</h4>
                <p className="text-base font-normal text-black-secondary">
                  {facility.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
