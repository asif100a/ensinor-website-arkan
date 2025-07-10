import Image from "next/image";
import React from "react";

const states = [
  {
    icon: "/icons/book-2.svg",
    mainText: "48",
    subText: "Total Courses",
  },
  {
    icon: "/icons/student.svg",
    mainText: "8679",
    subText: "Total Students",
  },
  {
    icon: "/icons/experience.svg",
    mainText: "8+",
    subText: "Years in Experience",
  },
];

export default function States() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {states.map((state) => (
        <div
          key={state.subText}
          className="bg-gray-background text-black-normal p-10 rounded-xl flex justify-center items-center gap-8"
        >
          <Image
            src={state.icon}
            alt={state.subText}
            width={60}
            height={60}
            className="w-[60px] h-[60px]"
          />

          <div className="space-y-2">
            <p className="text-lg font-medium">
              {state.subText}
            </p>
            <h3 className="text-3xl font-semibold">{state.mainText}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}
