import Image from "next/image";
import React from "react";

interface TestimonialProps {
  clientName: string
  designation: string
  ratings: number
  text: string
}

export default function Testimonial({
  clientName,
  designation,
  ratings,
  text
}: TestimonialProps) {
  return (
    <div className="max-w-[526px] w-full bg-gray-secondary rounded-[12px] text-lg p-4">
      {/* Image and Info Section */}
      <div className="flex justify-center items-center space-x-4">
        <Image
          src="/images/home/about-us/user1.png"
          alt="Profile"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{clientName}</h3>
          <p className="text-sm text-gray-600">{designation}</p>
        </div>
      </div>

      {/* Rating Section */}
      <div className="flex justify-center items-center mt-2">
        {Array(ratings)
          .fill(null)
          .map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
      </div>

      {/* Description Section */}
      <p className="text-[#707070] text-center mt-2">
        {text}
      </p>
    </div>
  );
}
