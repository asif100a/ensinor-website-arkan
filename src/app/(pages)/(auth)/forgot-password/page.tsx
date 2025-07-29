"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import React from "react";
import "@/custom_style/style.css";
import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";

export default function ForgotPassword() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    // console.log("Form submitted");
    // Redirect to a verification page
    router.push("/verify-account");
  };

  return (
    <div>
      {/* Banner Section */}
      <BannerPrimary title="Forgot Password" />

      <section className="w-full h-full py-16 text-[#2D2D2D] text-xl flex justify-center items-center">
        <Card className="w-full max-w-[872px] border-none shadow-none bg-[#F3F6F7] p-[52px]">
          <CardContent>
            <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
              <div className="grid gap-3">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border-[#E6E6E6] rounded-[8px] input-field-text"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 cursor-pointer text-lg bg-[#FFDE59] text-[#262626] hover:bg-[#FFD700] active:bg-[#FFC700] disabled:bg-[#E6E6E6] disabled:text-[#999999] disabled:cursor-not-allowed"
              >
                Send OTP
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
