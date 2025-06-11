"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import SignUp from "@/components/Pages/SignUp";
import SignIn from "@/components/Pages/SignIn";
import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";

export default function Login() {
  const [activeTab, setActiveTab] = useState<string>("signIn");

  return (
    <div>
      {/* Banner Section */}
      <BannerPrimary
        title={
          activeTab === "signIn"
            ? "Welcome Back! Sign In to Continue"
            : "Welcome To ENSINOR! Create An Account"
        }
      />

      <section className="w-full h-full py-16 text-[#2D2D2D] text-xl flex justify-center items-center">
        <Card className="w-full max-w-[872px] border-none shadow-none bg-[#F3F6F7] p-[52px]">
          <div className="w-full px-6 text-[#737373] font-semibold flex justify-between">
            <button
              onClick={() => setActiveTab("signUp")}
              className={`${
                activeTab === "signUp" &&
                "text-[#FFDE59] border-b-2 border-[#FFDE59]"
              } w-full cursor-pointer`}
            >
              SIGN UP
            </button>
            <button
              onClick={() => setActiveTab("signIn")}
              className={`${
                activeTab === "signIn" &&
                "text-[#FFDE59] border-b-2 border-[#FFDE59]"
              } w-full cursor-pointer`}
            >
              SIGN IN
            </button>
          </div>
          {activeTab === "signIn" ? (
            <SignIn setActiveTab={setActiveTab} />
          ) : (
            <SignUp setActiveTab={setActiveTab} />
          )}
        </Card>
      </section>
    </div>
  );
}
