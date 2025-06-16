import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const navLinks = [
  {
    title: "Featured Courses",
    links: ["Development", "UX/UI Design", "Graphic Design", "Video Editing"],
    hrefs: [
      "/development",
      "/ux-ui-design",
      "/graphic-design",
      "/video-editing",
    ],
  },
  {
    title: "Community",
    links: ["Business", "Instructor", "My Account", "Event"],
    hrefs: ["/business", "/instructor", "/my-account", "/event"],
  },
  {
    title: "Quick Link",
    links: ["About Us", "Contact Us", "Blogs", "Courses"],
    hrefs: ["/about-us", "/contact-us", "/blogs", "/courses"],
  },
  {
    title: "Support",
    links: [
      "Modhubag, Moghbazar, Dhaka",
      "exclusive@gmail.com",
      "+88015-88888-9999",
      "+88015-88888-9999",
    ],
    hrefs: [
      "https://www.google.com/maps/place/373%2F4+Modhubag,+Moghbazar,+Dhaka-1217/@23.7592566,90.4019705,15z/data=!4m10!1m2!2m1!1sModhubag,+Moghbazar,+Dhaka!3m6!1s0x3755b940654ebd59:0xcf2605ecb69b96b2!8m2!3d23.7596942!4d90.4116832",
      "mailto:exclusive@gmail.com",
      "tel:+88015-88888-9999",
      "tel:+88015-88888-9999",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-[#1B263B] text-white text-base overflow-hidden">
      <div className="max-w-[1322px] mx-auto px-4">
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
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
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map(
                (Icon, i) => (
                  <span
                    key={i}
                    className="w-[28px] h-[28px] text-[#FFDE59] border border-[#FFDE59] rounded-full flex items-center justify-center"
                  >
                    <Icon className="text-[18px]" />
                  </span>
                )
              )}
            </div>
          </div>

          {/* Nav Links */}
          <nav className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {navLinks.map((section, i) => (
              <div key={i} className="space-y-4">
                <h5 className="text-xl">{section.title}</h5>
                <ul className="space-y-2">
                  {section.links.map((text, j) => (
                    <li key={j}>
                      <Link href={section.hrefs[j]}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="w-full border-t border-white my-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4">
          <p className="text-lg">&copy; 2025 ENSINOR All right reserved.</p>
          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li>
              <Link href="/terms-of-use">Terms Of Use</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
