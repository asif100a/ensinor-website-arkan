"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import React from "react";
import "@/custom_style/style.css";
import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";

export default function VerifyAccount() {
    const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    // Redirect to a success page or show a success message
    router.push("/create-new-password");
  };

  return (
   <div>
    {/* Banner Section */}
    <BannerPrimary title="Verify your Account" />

     <section className="w-full h-full py-16 text-[#2D2D2D] text-xl flex justify-center items-center">
      <Card className="w-full max-w-[872px] border-none shadow-none bg-[#F3F6F7] p-[52px]">
        <CardContent>
          <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
            <InputOTP maxLength={6} className="shadow-none text-lg">
              <InputOTPGroup className="flex items-center gap-2">
                <InputOTPSlot
                  index={0}
                  className="w-[100px] h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                />
                <InputOTPSlot
                  index={1}
                  className="w-[100px] h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                />
                <InputOTPSlot
                  index={2}
                  className="w-[100px] h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                />
                <InputOTPSlot
                  index={3}
                  className="w-[100px] h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                />
                <InputOTPSlot
                  index={4}
                  className="w-[100px] h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                />
                <InputOTPSlot
                  index={5}
                  className="w-[100px] h-[68px] bg-[#FFFFFF] text-[#2D2D2D] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                />
              </InputOTPGroup>
            </InputOTP>
            <div className="w-full flex items-center justify-between">
                <p>Didn’t receive the code?</p>
              <button
                type="button"
                className="cursor-pointer text-[#1877F7]"
              >
                Resend
              </button>
            </div>
            <Button
              type="submit"
              className="w-full h-14 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
            >
              Verify email
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
   </div>
  );
}
