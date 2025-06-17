import Image from "next/image";
import React from "react";

export default function WeAreHereToHelp() {
  const contacts = [
    {
      contactName: "Customer Support",
      address: "Modhubag, Moghbazar, Dhaka",
      phoneNumber: "+880 1772177831",
      email: "polashsrp8@gmail.com",
    },
    {
      contactName: "Contact Address",
      address: "Modhubag, Moghbazar, Dhaka",
      phoneNumber: "+880 1772177831",
      email: "polashsrp8@gmail.com",
    },
    {
      contactName: "Main Office Address",
      address: "Modhubag, Moghbazar, Dhaka",
      phoneNumber: "+880 1772177831",
      email: "polashsrp8@gmail.com",
    },
  ];
  return (
    <section className="custom-container space-y-12">
      {/* Title & Description */}
      <div className="w-full max-w-[605px] mx-auto space-y-3 text-center">
        <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
          {"We're"} here to help!
        </h1>
        <p className="text-black-secondary text-lg">
          Whether you have a question, need technical support, or just want
          guidance navigating the platform, our team is always ready to assist
          you. Your satisfaction is our priority, and {"we're"} committed to
          providing quick and effective solutions whenever you need us.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-6 relative">
        {/* Left Background image */}
        <Image
          src="/images/contact-us/left-image.png"
          alt="Location"
          width={240}
          height={240}
          className="hidden lg:block w-[240px] h-[240px] absolute -top-1/3 -left-20 z-0"
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {contacts.map((contact) => (
            <div
              key={contact.email}
              className="max-w-[424px] w-full bg-gray-background text-lg text-black-secondary px-9 py-6 rounded-xl space-y-6 z-10"
            >
              {/* Contact Name */}
              <h6 className="text-[22px] font-medium text-center">
                {contact.contactName}
              </h6>
              <div className="flex flex-col items-center gap-5">
                {/* Address */}
                <p className="flex items-center gap-3">
                  <Image
                    src="/icons/location.svg"
                    alt="Location"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span>{contact.address}</span>
                </p>
                {/* Phone Number */}
                <p className="flex items-center gap-3">
                  <Image
                    src="/icons/call.svg"
                    alt="Location"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span>{contact.phoneNumber}</span>
                </p>
                {/* Email */}
                <p className="flex items-center gap-3">
                  <Image
                    src="/icons/message.svg"
                    alt="Location"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span>{contact.email}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Background image */}
        <Image
          src="/images/contact-us/right-image.png"
          alt="Location"
          width={230}
          height={130}
          className="hidden lg:block w-[230px] h-[130px] absolute -bottom-1/5 -right-13 z-0"
        />
      </div>
    </section>
  );
}
