import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-full pt-10 bg-[#1B263B] py-10 text-white text-base">
      <div className="max-w-[1322px] mx-auto">
        <div className="w-full flex gap-16">
          <div className="w-full max-w-[357px] flex flex-col gap-6">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={300}
                  height={150}
                  className="w-[38px] h-[38px] cursor-pointer"
                />
                <Image
                  src="/images/logo-text.png"
                  alt="logo"
                  width={300}
                  height={150}
                  className="w-[168px] h-[26px] cursor-pointer"
                />
              </div>
            </Link>
            {/* Description */}
            <p>
              Ensinor education theme, built specifically for the education
              centers which is dedicated to teaching and involve learners.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="w-[28px] h-[28px] text-[#FFDE59] border border-[#FFDE59] rounded-full flex items-center justify-center">
                <FaFacebookF className="text-[18px]" />
              </span>
              <span className="w-[28px] h-[28px] text-[#FFDE59] border border-[#FFDE59] rounded-full flex items-center justify-center">
                <FaTwitter className="text-[18px]" />
              </span>
              <span className="w-[28px] h-[28px] text-[#FFDE59] border border-[#FFDE59] rounded-full flex items-center justify-center">
                <FaLinkedinIn className="text-[18px]" />
              </span>
              <span className="w-[28px] h-[28px] text-[#FFDE59] border border-[#FFDE59] rounded-full flex items-center justify-center">
                <FaPinterestP className="text-[18px]" />
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="w-full flex gap-16">
            {/* Featured Courses */}
            <div className="w-full space-y-12">
              <h5 className="text-xl">Featured Courses</h5>
              <ul className="space-y-2">
                <li>
                  <Link href={"/development"}>Development</Link>
                </li>
                <li>
                  <Link href={"/ux-ui-design"}>UX/UI Design</Link>
                </li>
                <li>
                  <Link href={"/graphic-design"}>Graphic Design</Link>
                </li>
                <li>
                  <Link href={"/video-editing"}>Video Editing</Link>
                </li>
              </ul>
            </div>
            {/* Community */}
            <div className="w-full space-y-12">
              <h5 className="text-xl">Community</h5>
              <ul className="space-y-2">
                <li>
                  <Link href={"/business"}>Business</Link>
                </li>
                <li>
                  <Link href={"/instructor"}>Instructor</Link>
                </li>
                <li>
                  <Link href={"/my-account"}>My Account</Link>
                </li>
                <li>
                  <Link href={"/event"}>Event</Link>
                </li>
              </ul>
            </div>
            {/* Quick Link */}
            <div className="w-full space-y-12">
              <h5 className="text-xl">Quick Link</h5>
              <ul className="space-y-2">
                <li>
                  <Link href={"/about-us"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/contact-us"}>Contact Us</Link>
                </li>
                <li>
                  <Link href={"/blogs"}>Blogs</Link>
                </li>
                <li>
                  <Link href={"/courses"}>Courses</Link>
                </li>
              </ul>
            </div>
            {/* Support */}
            <div className="w-full space-y-12">
              <h5 className="text-xl">Support</h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={
                      "https://www.google.com/maps/place/373%2F4+Modhubag,+Moghbazar,+Dhaka-1217/@23.7592566,90.4019705,15z/data=!4m10!1m2!2m1!1sModhubag,+Moghbazar,+Dhaka!3m6!1s0x3755b940654ebd59:0xcf2605ecb69b96b2!8m2!3d23.7596942!4d90.4116832!15sChpNb2RodWJhZywgTW9naGJhemFyLCBEaGFrYZIBEmFwYXJ0bWVudF9idWlsZGluZ6oBQRABMh8QASIbEDcSo2_Hp4r5yDgJ5uVKeNHGcGXp_1IH0G5KMhwQAiIYbW9kaHViYWcgbW9naGJhemFyIGRoYWth4AEA!16s%2Fg%2F11rw6747vs?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Modhubag, Moghbazar, Dhaka
                  </Link>
                </li>
                <li>
                  <Link href={"mailto:exclusive@gmail.com"}>
                    exclusive@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href={"tel:+88015-88888-9999"}>+88015-88888-9999</Link>
                </li>
                <li>
                  <Link href={"tel:+88015-88888-9999"}>+88015-88888-9999</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="w-full border-t border-white my-4" />

        {/* Bottom */}
        <div className="flex justify-between items-center">
          <p className="text-lg">&copy; 2025 ENSINOR All right reserved.</p>
          <ul className="flex items-center gap-6">
            <li>
              <Link href={"/terms-of-use"}>Terms Of Use</Link>
            </li>
            <li>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
