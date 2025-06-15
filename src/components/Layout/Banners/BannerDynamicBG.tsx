"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function BannerDynamicBG() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const bgImage = searchParams.get("bgImage");

  return (
    <section
      style={{
        backgroundImage: bgImage ? `url(${bgImage}) ` : undefined,
        backgroundColor: bgImage ? undefined : "#1B263B",
      }}
      className={`relative w-full h-[300px] text-white overflow-hidden rounded-b-[20px] bg-cover bg-center`}
    >
      <div className="w-full h-full bg-gradient-to-b from-[#00000066] to-[#00000099] flex flex-col gap-2 justify-center items-center">
        <h1 className="text-[30px] sm:text-[36px] md:text-[40px] font-bold text-center leading-tight max-w-[700px] z-10 px-4">
          {title || "Welcome to Ensinor"}
        </h1>
        <p className="text-base font-normal">
          {description || "Description place..."}
        </p>
      </div>
    </section>
  );
}
