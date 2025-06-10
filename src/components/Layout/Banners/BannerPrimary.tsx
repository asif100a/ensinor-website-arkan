"use client";

import { BannerLink } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

interface BannerPrimaryProps {
  title: string;
  links?: BannerLink[];
}

export default function BannerPrimary({title, links}: BannerPrimaryProps) {
  const pathname = usePathname();

  return (
    <section className="relative w-full h-[380px] bg-[#1B263B] overflow-hidden flex flex-col gap-2 justify-center items-center">
      {/* Left Images */}
      <>
        {/* Decorative Circle */}
        <Image
          src="/images/header/circle.png"
          alt="Decorative Circle"
          width={300}
          height={300}
          className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] object-contain z-0"
        />
        {/* Bulb */}
        <Image
          src="/images/header/bulb.png"
          alt="Bulb Icon"
          width={50}
          height={50}
          className="absolute top-[60px] left-[300px] w-[90px] h-[92px] z-0"
        />
        {/* Globe */}
        <Image
          src="/images/header/globe.png"
          alt="Globe Icon"
          width={50}
          height={50}
          className="absolute bottom-[40px] left-[380px] w-[94px] h-[116px] z-0"
        />
      </>

      {/* Centered Heading */}
      <h1 className="text-[40px] sm:text-[48px] md:text-[56px] text-white font-bold text-center leading-tight max-w-[700px] z-10 px-4">
        {title || "Welcome to Ensinor"}
      </h1>
      {/* Links */}
      {links && links.length > 0 && (
        <div className="text-white text-xl flex items-center gap-2">
            <Link
              href={links[0].url}
              className={`${links[0].url === pathname ? "text-active-link" : "text-inactive-link"} hover:underline`}
            >
              {links[0].title}
            </Link>
            <RiArrowRightSLine className="text-white text-3xl" />
            <Link
              href={links[1].url}
              className={`${links[1].url === pathname ? "text-active-link" : "text-inactive-link"} hover:underline`}
            >
              {links[1].title}
            </Link>
        </div>
      )}

      {/* Right Images */}
      <>
        {/* Decorative Circle */}
        <Image
          src="/images/header/dotted-group.png"
          alt="Decorative Circle"
          width={300}
          height={300}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[154px] h-[154px] object-contain z-0"
        />
        {/* Bulb */}
        <Image
          src="/images/header/react.png"
          alt="Bulb Icon"
          width={50}
          height={50}
          className="absolute top-[60px] right-[300px] w-[78px] h-[86px] z-0"
        />
        {/* Globe */}
        <Image
          src="/images/header/desktop.png"
          alt="Globe Icon"
          width={50}
          height={50}
          className="absolute bottom-[40px] right-[380px] w-[102px] h-[90px] z-0"
        />
      </>

    </section>
  );
}
