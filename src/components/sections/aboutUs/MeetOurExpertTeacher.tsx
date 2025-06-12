import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function MeetOurExpertTeacher() {
  const teachers = [
    {
      name: "Adam",
      designation: "Lead Team",
      image: "/images/about-us/teacher-1.png",
      ratings: "4.7 (520 Rating)",
    },
    {
      name: "Muskan Tanaz",
      designation: "UX Design Lead",
      image: "/images/about-us/teacher-4.png",
      ratings: "4.7 (520 Rating)",
    },
    {
      name: "Abraham",
      designation: "Frontend Developer",
      image: "/images/about-us/teacher-3.png",
      ratings: "4.7 (520 Rating)",
    },
    {
      name: "John Doe",
      designation: "Python Developer",
      image: "/images/about-us/teacher-4.png",
      ratings: "4.7 (520 Rating)",
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {teachers.map((teacher) => (
          <div key={teacher.name} className="relative w-fit h-fit rounded-xl overflow-hidden group">
            <Image
              src={teacher.image}
              alt={teacher.name}
              width={312}
              height={340}
              className="max-w-[312px] w-full max-h-[340px] h-full"
            />
            <div
              className={`w-full absolute bottom-0 left-0 right-0 z-10 text-white bg-[#1B263B] mx-auto py-4 rounded-t-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100`}
            >
              <div className="w-fit mx-auto text-base font-normal space-y-2">
                <div>
                  <h6 className="text-[22px] font-semibold">{teacher.name}</h6>
                  <p>{teacher.designation}</p>
                </div>
                <p className="flex items-center gap-1">
                  <FaStar className="text-xl text-yellow-star" />{" "}
                  <span className="font-medium">{teacher.ratings}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
