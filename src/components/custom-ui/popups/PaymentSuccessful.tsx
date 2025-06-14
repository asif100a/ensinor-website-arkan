import Image from "next/image";
import Link from "next/link";
import React from "react";

// interface PaymentSuccessfulProps {
  
// }

export default function PaymentSuccessful() {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-20">
      <div className="max-w-[550px] w-full bg-white p-6 rounded-lg shadow-lg text-center space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <Image
              src="/icons/success.svg"
              alt="Success"
              width={90}
              height={90}
              className="w-[90px] h-[90px] mx-auto"
            />

            <div className="text-black-normal space-y-2">
              <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
              <p className="text-lg font-normal">
                Your payment has been successfully completed.{" "}
              </p>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            You can now download your file using the button below. {"We've"}{" "}
            also sent a download link to your email feel free to access it from
            there anytime.
          </p>
        </div>

        <div className="w-full flex items-center justify-between gap-6">
          <Link href={"/"} className="w-full">
            <button className="w-full bg-white border border-yellow-primary text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-300 cursor-pointer">
              Back To Home
            </button>
          </Link>
          <button className="w-full bg-yellow-primary text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-500 cursor-pointer">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
}
