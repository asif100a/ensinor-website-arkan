import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";

export default function RequestADemo() {
  return (
    <section className="custom-container space-y-10">
      <div className="w-full space-y-12">
        <div className="w-full max-w-[544px] space-y-6">
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight max-w-[610px] w-full z-10">
            Request a Demo
          </h1>
          <p className="text-black-secondary text-lg">
            Fill out the form below and our team will get in touch with you
            shortly to schedule a personalized demo.
          </p>
        </div>

        <div className="flex gap-12 items-center">
          <Card className="w-full border-none shadow-none bg-[#F3F6F7] p-6">
            <div>
              <CardContent>
                <form className="text-lg grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* First Name */}
                  <div className="grid gap-3">
                    <Label htmlFor="firstName" className=" text-lg">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                      required
                    />
                  </div>
                  {/* Last Name */}
                  <div className="grid gap-3">
                    <Label htmlFor="lastName" className=" text-lg">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                      required
                    />
                  </div>
                  {/* Organization Email */}
                  <div className="col-span-2 grid gap-3">
                    <Label htmlFor="email" className=" text-lg">
                      Organization Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                      required
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="grid gap-3">
                    <Label htmlFor="phoneNumber" className=" text-lg">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="text"
                      placeholder="Enter your phone number"
                      className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                      required
                    />
                  </div>
                  {/* Your Role */}
                  <div className="grid gap-3">
                    <Label htmlFor="role" className=" text-lg">
                      Your Role <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="role"
                      type="text"
                      placeholder="e.g. HR Manager, Learmng & Development"
                      className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                      required
                    />
                  </div>
                  {/* Company Size */}
                  <div className="grid gap-3">
                    <Label htmlFor="companySize" className=" text-lg">
                      Company Size <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="companySize"
                      type="text"
                      placeholder="e.g. 25, 50, 100.+ employes"
                      className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                      required
                    />
                  </div>
                  {/* Number of People to Train */}
                  <div className="grid gap-3">
                    <Label htmlFor="numberOfPeople" className=" text-lg">
                      Number of People to Train{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="numberOfPeople"
                      type="text"
                      placeholder="e.g. 25, 50, 100+"
                      className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                      required
                    />
                  </div>
                  {/* What are your organization's training needs? */}
                  <div className="col-span-2 grid gap-3">
                    <Label htmlFor="trainingNeeds" className=" text-lg">
                      What are your {"organization's"} training needs?{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="trainingNeeds"
                      type="text"
                      placeholder="e.g. Customer sers'te trainarq compliance trairung"
                      className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                      required
                    />
                  </div>
                </form>
              </CardContent>
            </div>
          </Card>

          <Image
            src="/images/business/request-a-demo.png"
            alt="For Businesses"
            width={425}
            height={500}
            className="w-[425px] h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
