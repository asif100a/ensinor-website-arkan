"use client";

import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import React, { useState } from "react";
import "@/custom_style/style.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import PaymentSuccessful from "@/components/custom-ui/popups/PaymentSuccessful";

export default function ShopDetails() {
  const params = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <div>
      <BannerPrimary
        title="Shop Details"
        link={{ name: "Shop Details", url: `/shop/details/${params.id}` }}
      />

      <main className="custom-container">
        <section className="w-full flex items-center justify-between gap-15 p-6 bg-gray-background rounded-[20px]">
          {/* Left side */}
          <Image
            src="/images/shop/details/shop-details.png"
            alt="For Businesses"
            width={484}
            height={450}
            className="w-[484px] h-[450px] rounded-[20px]"
          />

          {/* Right side */}
          <div className="space-y-6">
            <div className="space-y-3.5">
              <h4 className="text-2xl font-semibold text-black-primary">
                UX/UI Responsive Web Design
              </h4>

              <h4 className="text-2xl font-semibold text-black-secondary space-x-1">
                Price : <span className="text-black-normal">$120</span>
              </h4>

              <h5 className="text-xl font-normal text-black-normal">
                Categories:{" "}
                <span className="text-yellow-primary">Painting</span>
              </h5>
            </div>

            <div className="text-base font-normal text-black-secondary space-y-2.5">
              <h5 className="text-xl font-semibold">Book description</h5>

              <p>
                We are a creative platform dedicated to showcasing original
                artwork from talented artists around the world. From hand-drawn
                sketches and digital illustrations to paintings, animations, and
                mixed media, our goal is to connect art lovers with meaningful
                visual experiences.
              </p>
              <p>
                Whether {"you're"} here to discover new artists, purchase
                one-of-a-kind pieces, or share your own creations, our space is
                built to celebrate creativity in all its forms. We believe in
                the power of art to inspire, communicate, and bring people
                together.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-6">
              <button className="w-full bg-white text-[#262626] text-[22px] border-2 border-yellow-primary py-3 rounded-lg font-medium hover:bg-yellow-500 cursor-pointer">
                Add to Card
              </button>

              <button
                onClick={() => setIsPopupOpen(true)}
                className="w-full bg-yellow-primary py-3 text-[#262626] text-[22px] rounded-lg font-medium hover:bg-yellow-500 cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          </div>
        </section>

        {isPopupOpen && <PaymentSuccessful />}
      </main>
    </div>
  );
}
