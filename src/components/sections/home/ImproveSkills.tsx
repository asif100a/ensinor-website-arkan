import Image from "next/image";
import React from "react";
import "@/custom_style/style.css";

export default function ImproveSkills() {
  const facilities = [
    "Skilled and experienced coaches.",
    "35K+ review with 5 star rating",
    "30 Days Free Trial",
  ];
  return (
    <section className="custom-container">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-start lg:items-center justify-between gap-8 pt-12 lg:pt-24">
        <div className="lg:max-w-[679px] w-full space-y-8">
          <div className="space-y-6">
            <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-[#404040] leading-tight max-w-[610px] w-full z-10">
              Improve Your Skills Learn With Us From Anywhere
            </h1>
            <p className="text-[#505050] text-lg">
              Rapidiously iterate enabled meta-services vis-a-vis world-class
              quality vectors. Collaboratively recaptiualize proof relationships
              via ubiquitous leadership skills.
            </p>
            <ul className="text-[#404040] text-lg pl-6 space-y-5">
              {facilities.map((facility, index) => (
                <li key={index}>
                  <p className="flex items-center gap-2">
                    <Image
                      src="/icons/tick-mark.svg"
                      alt="Tick Mark"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px] object-contain"
                    />
                    <span>{facility}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-yellow-primary text-[#262626] text-lg font-medium px-6 py-2.5 rounded-[8px] hover:bg-yellow-500 transition-colors flex items-center">
            <span>Read More</span>
            <Image
              src="/icons/curve-arrow.svg"
              alt="Curve Arrow"
              width={12.5}
              height={12.5}
              className="w-[12.5px] h-[12.5px] object-contain ml-2"
            />
          </button>
        </div>

        {/* Image Section */}
        <div className="md:max-w-1/2 lg:max-w-full w-full h-full">
          <Image
            src="/images/home/improve-skills/improve-skills.png"
            alt="improve skills"
            width={600}
            height={400}
            className="max-w-[600px] w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
