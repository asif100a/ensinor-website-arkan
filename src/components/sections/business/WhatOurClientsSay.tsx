import Testimonial from "@/components/custom-ui/cards/Testimonial";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function WhatOurClientsSay() {
  const testimonials = [
    {
      clientName: "Shahid Hasan",
      designation: "UI/UX Design",
      ratings: 5,
      text: "Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education more accessible and convenient. Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education",
    },
  ];

  return (
    <section className="custom-container space-y-12">
      {/* Title & Description */}
      <div className="w-full max-w-[605px] mx-auto space-y-4 text-center">
        <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
          What Our Clients Say
        </h1>
        <p className="text-black-secondary text-lg">
          Hear from companies that have transformed their training programs with
          Train Flow Academy.
        </p>

        <div className="flex justify-center items-center gap-2.5">
          {/* Client (images) */}
          <div className="h-fit w-fit flex items-center -space-x-3">
            <Image
              src="/images/banner/students/student-1.png"
              alt="Student 1"
              width={48}
              height={48}
              className="w-[48px] h-[48px] object-contain"
            />
            <Image
              src="/images/banner/students/student-2.png"
              alt="Student 2"
              width={48}
              height={48}
              className="w-[48px] h-[48px] object-contain"
            />
            <Image
              src="/images/banner/students/student-3.png"
              alt="Student 3"
              width={48}
              height={48}
              className="w-[48px] h-[48px] object-contain"
            />
          </div>
          {/* Rate */}
          <span className="border-l border-[#B2B2B2] pl-2.5 flex items-center gap-1.5">
            <FaStar className="text-3xl text-yellow-500" />{" "}
            <span className="text-[32px] font-semibold text-black-primary">
              5.0
            </span>
          </span>
          <span className="text-sm font-semibold text-black-secondary">
            Rated by 19 people on google
          </span>
        </div>
      </div>

      {/* Testimonials */}
      <>
        <div className="hidden lg:flex items-center relative">
          {/* Left part */}
          <div className="absolute left-0 z-0">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-r from-[#FFFFFF26] to-[#FFFFFF]"></div>
            <Testimonial
              clientName={testimonials[0].clientName}
              designation={testimonials[0].designation}
              ratings={testimonials[0].ratings}
              text={testimonials[0].text}
            />
          </div>

          {/* Middle part */}
          <div className="flex items-center gap-8 mx-auto z-10">
            {/* Previous Button */}
            <button className="bg-[#E6E6E6] text-[#8D8D8D] w-[60px] h-[60px] rounded-full flex items-center justify-center hover:bg-[#E6E6E6] transition-colors cursor-pointer">
              <FaArrowLeftLong className="text-xl" />
            </button>
            <Testimonial
              clientName={testimonials[0].clientName}
              designation={testimonials[0].designation}
              ratings={testimonials[0].ratings}
              text={testimonials[0].text}
            />
            {/* Next Button */}
            <button className="bg-[#E6E6E6] text-[#8D8D8D] w-[60px] h-[60px] rounded-full flex items-center justify-center hover:bg-[#E6E6E6] transition-colors cursor-pointer">
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>
          {/* Right part */}
          <div className="absolute right-0 z-0">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-l from-[#FFFFFF26] to-[#FFFFFF]"></div>
            <Testimonial
              clientName={testimonials[0].clientName}
              designation={testimonials[0].designation}
              ratings={testimonials[0].ratings}
              text={testimonials[0].text}
            />
          </div>
        </div>

        <div className="block lg:hidden w-fit space-y-8 mx-auto lg:mx-0 mt-8 lg:mt-0">
          {[...testimonials].map((testimonial, index) => (
            <Testimonial
              key={index}
              clientName={testimonial.clientName}
              designation={testimonial.designation}
              ratings={testimonial.ratings}
              text={testimonial.text}
            />
          ))}

          <div className="flex items-center justify-center lg:justify-start gap-8">
            {/* Previous Button */}
            <button className="bg-[#E6E6E6] text-[#8D8D8D] w-[60px] h-[60px] rounded-full flex items-center justify-center hover:bg-[#E6E6E6] transition-colors">
              <FaArrowLeftLong className="text-xl" />
            </button>
            {/* Next Button */}
            <button className="bg-[#FFF5CC] text-[#CCB247] w-[60px] h-[60px] rounded-full flex items-center justify-center hover:bg-yellow-200 transition-colors">
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>
        </div>
      </>
    </section>
  );
}
