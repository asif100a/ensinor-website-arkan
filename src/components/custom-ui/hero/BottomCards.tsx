import Image from "next/image";
import React from "react";

export default function BottomCards() {
  const cards = [
    {
      image: "/images/banner/card-images/card-1.png",
      title: "175+",
      description: "Expert Tutors",
    },
    {
      image: "/images/banner/card-images/card-2.png",
      title: "8k+",
      description: "Online Courses",
    },
    {
      image: "/images/banner/card-images/card-3.png",
      title: "9.5k+",
      description: "Success Students",
    },
    {
      image: "/images/banner/card-images/card-4.png",
      title: "60k",
      description: "Active Students",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative -bottom-[70px] z-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white w-full h-[140px] rounded-lg shadow flex justify-center items-center gap-5"
        >
          <Image
            src={card.image}
            alt={`Card Image ${index + 1}`}
            width={70}
            height={70}
            className="w-[70px] h-[70px] object-cover rounded-t-lg"
          />
          <div>
            <h3 className="font-semibold text-[#505050] text-[38px]">{card.title}</h3>
            <p className="text-[#303030] text-lg font-semibold">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
