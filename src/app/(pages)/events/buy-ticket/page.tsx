import BannerDynamicBG from "@/components/Layout/Banners/BannerDynamicBG";
import React from "react";
import '@/custom_style/style.css';
import PaymentForm from "@/components/sections/events/buyTicket/PaymentForm";

export default function BuyTicket() {
  return (
    <div>
      <BannerDynamicBG />

      <main className="custom-container">
        <section className="space-y-8">
          {/* Title & Description */}
          <div className="space-y-3">
            <h1 className="text-5xl font-semibold text-black-primary">Fill up the form and book your event ticket!</h1>
            <p className="text-lg font-normal text-black-secondary">Fill out the form below and our team will get in touch with you shortly to schedule a personalized
demo.</p>
          </div>
          {/* Payment Form */}
          <PaymentForm />
        </section>
      </main>
    </div>
  );
}
