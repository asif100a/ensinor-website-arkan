import Link from "next/link";
import React from "react";

interface EventRightSectionProps {
  title: string;
  description: string;
  bgImage: string;
}

export default function EventRightSection({
  title,
  description,
  bgImage,
}: EventRightSectionProps) {
  const query = new URLSearchParams({
    title,
    description,
    bgImage
  }).toString();
  
  return (
    <div className="p-6 bg-gray-background text-black-primary rounded-xl space-y-8">
      <h4 className="text-[22px] font-semibold">This course includes</h4>
      <div className="space-y-5">
        {/* Ticket Price */}
        <p className="flex items-center justify-between">
          <span className="text-base font-medium">Ticket Price :</span>{" "}
          <span className="text-xl font-semibold">$120</span>
        </p>
        {/* Entry fees */}
        <p className="text-base font-medium flex items-center justify-between">
          <span>Entry fees :</span> <span>$ 1 per ticket</span>
        </p>
        {/* Location */}
        <p className="text-base font-medium flex items-center justify-between">
          <span>Location :</span> <span>Modhubag, Moghbazar, Dhaka</span>
        </p>
      </div>

      {/* Button */}
      <Link href={`/events/buy-ticket?${query}`}>
        <button className="w-full bg-yellow-primary text-black-primary text-lg font-medium py-2 rounded hover:bg-yellow-500 cursor-pointer">
          Buy Ticket
        </button>
      </Link>
    </div>
  );
}
