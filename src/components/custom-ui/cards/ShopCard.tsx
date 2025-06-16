import { ShopTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ShopCard({
  _id,
  thumbnail,
  title,
  description,
  productManager,
  price,
}: ShopTypes) {
  return (
    <div className="lg:max-w-xs w-full bg-[#F3F6F7] text-lg rounded-[12px] overflow-hidden p-5 space-y-4">
      {/* Image Section */}
      <Image
        src={thumbnail}
        alt="Event Thumbnail"
        width={284}
        height={230}
        className="w-full h-[230px] rounded-[8px] object-cover"
      />

      {/* Content Section */}
      <div className="space-y-4">
        {/* Title */}
        <div>
          <Link href={`/shop/details/${_id}`}>
            <h2 className="text-xl font-medium text-black-primary hover:text-yellow-500">
              {title || "Shop Title"}
            </h2>
          </Link>
        </div>
        {/* Description */}
        <p className="text-lg text-black-secondary">
          {description || "Shop Description"}
        </p>
        {/* Product manager & Price */}
        <div className="flex items-center justify-between">
          <p className="text-base font-normal text-black-secondary">
            By {productManager || "Product Manager"}
          </p>
          <p className="text-black text-xl font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
}
