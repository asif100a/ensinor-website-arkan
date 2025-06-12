import Image from "next/image";
import React from "react";

export default function LearnNewSkills() {
  const features = [
    {
      title: "Expert Tutors",
      description:
        "Backed by professional credentials and practical expertise, our tutors bring valuable insights and personalized support to every learner.",
      icon: "/icons/graduation.svg",
    },
    {
      title: "Effective Courses",
      description:
        "Transform your skills with courses that work. Designed to empower you with practical knowledge and measurable progress.",
      icon: "/icons/book-2.svg",
    },
    {
      title: "Earn Certificate",
      description:
        "Receive a verified certificate upon course completion—an official recognition of your skills and achievement.",
      icon: "/icons/certificate-2.svg",
    },
  ];

  return (
    <section className="custom-container space-y-12">
      {/* Title & Description */}
      <div className="w-full max-w-[605px] mx-auto space-y-3 text-center">
        <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
          Learn New Skills
        </h1>
        <p className="text-black-secondary text-lg">
          Our platform gives you the freedom to grow your skills at your own
          pace.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="space-y-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {features.slice(0, 3).map((feature) => (
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
