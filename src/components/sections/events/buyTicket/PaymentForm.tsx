import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function PaymentForm() {
  return (
    <Card className="w-full border-none shadow-none bg-[#F3F6F7] p-6">
      <div>
        <CardContent>
          <form className="text-lg grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Full Name */}
            <div className="grid gap-3">
              <Label htmlFor="fullName" className=" text-lg">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your Full name"
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
            {/* Email Address */}
            <div className="grid gap-3">
              <Label htmlFor="email" className=" text-lg">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                required
              />
            </div>
            {/* Organization */}
            <div className="grid gap-3">
              <Label htmlFor="organizationName" className=" text-lg">
                Organization <span className="text-red-500">*</span>
              </Label>
              <Input
                id="organizationName"
                type="text"
                placeholder="Enter your organization name"
                className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                required
              />
            </div>
            {/* Profession */}
            <div className="col-span-2 grid gap-3">
              <Label htmlFor="profession" className=" text-lg">
                Profession <span className="text-red-500">*</span>
              </Label>
              <Input
                id="profession"
                type="text"
                placeholder="Enter your profession"
                className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                required
              />
            </div>
            {/* Country */}
            <div className="grid gap-3">
              <Label htmlFor="country" className=" text-lg">
                Country <span className="text-red-500">*</span>
              </Label>
              <Input
                id="country"
                type="text"
                placeholder="Enter your country"
                className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                required
              />
            </div>
            {/* City */}
            <div className="grid gap-3">
              <Label htmlFor="city" className=" text-lg">
                City <span className="text-red-500">*</span>
              </Label>
              <Input
                id="city"
                type="text"
                placeholder="Enter your city"
                className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                required
              />
            </div>

            <button className="col-span-2 w-full bg-yellow-primary text-black-primary text-lg font-medium py-3 rounded hover:bg-yellow-500 cursor-pointer">
              Payment Now
            </button>
          </form>
        </CardContent>
      </div>
    </Card>
  );
}
