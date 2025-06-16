import Image from "next/image";
import React from "react";

interface Facility {
  title: string;
  description: string;
}

export default function BestQualityOnlineCourses() {
  const facilities: Facility[] = [
    {
      title: "It provides tools for course creation",
      description:
        "Enrollment management, and tracking learner progress, ensuring a streamlined learning experience.",
    },
    {
      title: "Many LMS platforms include collaborative",
      description:
        "Collaborative features such as discussion forums, messaging, and group projects, which facilitate interaction and communication among learners",
    },
  ];
  return (
    <section className="custom-container">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
        {/* Image Section */}
        <div className="">
          <Image
            src="/images/about-us/best-quality-online-courses.png"
            alt="improve skills"
            width={640}
            height={612}
            className="lg:max-w-[640px] w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-[679px] w-full space-y-8 ">
          <div className="space-y-6">
            <h1 className="text-[36px] sm:text-[40px] md:text-[40px] font-bold text-[#404040] leading-tight max-w-[610px] w-full z-10">
              We Are Providing The Best Quality Online Courses. Our All
              Instructors Are High Expert
            </h1>
            <p className="text-[#505050] text-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humor or randomized words which {"don't"} look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there {"isn't"} anything embarrassing
              hidden in the middle of text.
            </p>
            <ul className="text-[#404040] text-lg pl-6 space-y-5">
              {facilities.map((facility: Facility) => (
                <li key={facility.title}>
                  <h6 className="flex items-center gap-2">
                    <Image
                      src="/icons/tick-mark.svg"
                      alt="Tick Mark"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px] object-contain"
                    />
                    <span className="text-black-primary text-lg font-medium">
                      {facility.title}
                    </span>
                  </h6>
                  <p className="text-base font-normal text-black-secondary">
                    {facility.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3">
            <div className="text-center space-y-3">
              <h3 className="text-[40px] font-semibold text-black-primary">
                16k
              </h3>
              <p className="text-lg font-medium text-black-secondary">
                Enrolled Learner
              </p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-[40px] font-semibold text-black-primary">
                99%
              </h3>
              <p className="text-lg font-medium text-black-secondary">
                Satisfaction Rate
              </p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-[40px] font-semibold text-black-primary">
                9k
              </h3>
              <p className="text-lg font-medium text-black-secondary">
                Awards Winning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
