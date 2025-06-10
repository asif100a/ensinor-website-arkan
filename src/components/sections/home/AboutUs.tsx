import Testimonial from "@/components/custom-ui/cards/Testimonial";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <section className="custom-container flex justify-between items-start">
      {/* Left Side */}
      <div className="space-y-8">
        {[1, 2].map((item, index) => (
          <Testimonial key={index} />
        ))}

        <div className="flex items-center gap-8">
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

      {/* Right Side */}
      <div className="flex flex-col items-center justify-center relative">
        <div className="absolute top-0 right-5 bg-white w-[260px] h-[140px] rounded-xl shadow-lg flex justify-center items-center gap-5">
          <div>
            <h3 className="font-semibold text-[#505050] text-[38px]">4.7</h3>
            {/* Icons */}
            <FaStar className="inline-block text-[#FDBA25]" />
            <p className="text-[#303030] text-lg font-semibold">
              Based on 15367 ratings
            </p>
          </div>
        </div>

        <div className="">
          <Image
            src="/images/home/about-us/about-us.png"
            alt="improve skills"
            width={600}
            height={400}
            className="max-w-[600px] w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-[734px] w-full space-y-6">
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight max-w-[610px] w-full z-10">
            {"Here's"} What Our Students Say About Us
          </h1>
          <p className="text-black-secondary text-lg">
            Supposing so be resolving breakfast am or perfectly. It drew a hill
            from me. Valley by oh twenty direct me so. Departure defective
            arranging rapturous did believe him all had supported.
          </p>
        </div>
      </div>
    </section>
  );
}
