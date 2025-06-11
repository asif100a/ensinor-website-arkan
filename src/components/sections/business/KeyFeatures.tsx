import React from "react";
import "@/custom_style/style.css";
import Image from "next/image";

export default function KeyFeatures() {
  const keyFeatures = [
    {
      title: "Invite-Only Access",
      description:
        "Control who joins with secure, one-time email links. Restrict access to only your team or specific customers.",
      icon: "/icons/mail-box.svg",
    },
    {
      title: "Customizable Content",
      description:
        "Assign specific courses or modules per group or individual. Tailor training paths to different roles or needs.",
      icon: "/icons/settings.svg",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor employee/customer engagement and completion status with detailed dashboards and reports.",
      icon: "/icons/progress-completed.svg",
    },
    {
      title: "Group Management",
      description:
        "Organize users by department, client, or training type. Create custom groups for targeted learning paths.",
      icon: "/icons/users.svg",
    },
    {
      title: "Automated Reminders",
      description:
        "Keep learners on track with scheduled email notifications for upcoming deadlines and course completions.",
      icon: "/icons/ringing-clock.svg",
    },
  ];

  return (
    <section className="custom-container space-y-12">
      {/* Title & Description */}
      <div className="w-full max-w-[605px] mx-auto space-y-3 text-center">
        <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
          Key Features
        </h1>
        <p className="text-black-secondary text-lg">
          Everything you need to train your team and engage your customers
          effectively.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="space-y-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {/* UX/UI Design */}
          {keyFeatures.slice(0, 3).map((feature) => (
            <div
              key={feature.title}
              className="max-w-[424px] w-full bg-gray-background px-9 py-6 rounded-xl space-y-6"
            >
              <div className="w-fit h-fit p-3 bg-yellow-secondary rounded-full mx-auto">
                <Image
                  src={feature.icon}
                  alt="Course image"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px]"
                />
              </div>
              <div>
                <div className="text-[#303030] text-lg font-semibold text-center space-y-2.5">
                  <h4>{feature.title}</h4>
                  <p className="text-base font-normal text-black-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-fit grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {/* UX/UI Design */}
          {keyFeatures.slice(3).map((feature) => (
            <div
              key={feature.title}
              className="max-w-[424px] w-full bg-gray-background px-9 py-6 rounded-xl space-y-6"
            >
              <div className="w-fit h-fit p-3 bg-yellow-secondary rounded-full mx-auto">
                <Image
                  src={feature.icon}
                  alt="Course image"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px]"
                />
              </div>
              <div>
                <div className="text-[#303030] text-lg font-semibold text-center space-y-2.5">
                  <h4>{feature.title}</h4>
                  <p className="text-base font-normal text-black-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
