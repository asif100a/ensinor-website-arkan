import Image from "next/image";
import React from "react";

export default function SubscriptionPlans() {
  const plans = [
    {
      name: "NGO",
      price: 199,
      icon: "/icons/graduation.svg",
      planType: "mo",
      category: "Non-profits",
      facilities: [
        "Up to 50 users",
        "5 training courses",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      name: "SME",
      price: 399,
      icon: "/icons/building-house.svg",
      planType: "mo",
      category: "Most popular",
      facilities: [
        "Up to 200 users",
        "15 training courses",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
      ],
    },
    {
      name: "Enterprise",
      price: 999,
      icon: "/icons/development.svg",
      planType: "year",
      category: "Full Power",
      facilities: [
        "Unlimited users",
        "Unlimited courses",
        "Full analytics suite",
        "Dedicated account manager",
        "Advanced security features",
        "API access",
      ],
    },
  ];

  return (
    <section className="custom-container space-y-12">
      {/* Title, Description & Plan */}
      <div className="w-full max-w-[605px] mx-auto space-y-3 text-center">
        <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
          Subscription Plans
        </h1>
        <p className="text-black-secondary text-lg">
          Choose the perfect plan for your {"organization's"} size and needs.
        </p>

        {/* Plan Toggle */}
        <div className="w-fit overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700 mx-auto">
          <div className="sm:-mx-0.5 flex">
            <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-blue-500 rounded-lg">
              Monthly
            </button>
            <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 bg-transparent rounded-lg hover:bg-gray-200">
              Yearly
            </button>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="w-full grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="w-full px-6 py-8 transition-colors duration-300 transform rounded-lg bg-gray-background overflow-hidden relative flex flex-col grow"
          >
            {/* Category */}
            <div className="absolute top-0 right-0 w-fit h-fit px-6 py-2.5 bg-yellow-primary rounded-bl-4xl">
              <p className="text-lg text-black-secondary font-medium text-center">
                {plan.category}
              </p>
            </div>

            {/* Top contents */}
            <div className="text-center space-y-6 mt-[38px]">
              <div className="space-y-1">
                <Image
                  src={plan.icon}
                  alt="check-circle"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] mx-auto"
                />

                <p className="text-xl font-semibold text-black-primary dark:text-gray-100">
                  {plan.name}
                </p>
              </div>

              <h4 className="text-5xl font-semibold text-black-primary dark:text-gray-100">
                ${plan.price}
                <span className="text-xl font-medium dark:text-gray-400">
                  /{plan.planType}
                </span>
              </h4>
            </div>

            {/* Facilities */}
            <ul className="mt-8 space-y-5">
              {plan.facilities.map((facility: string) => (
                <li key={facility} className="flex items-center">
                  <Image
                    src="/icons/check-circle.svg"
                    alt="check-circle"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px]"
                  />
                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    {facility}
                  </span>
                </li>
              ))}
            </ul>

            <button className="w-full px-4 py-3.5 mt-10 font-medium tracking-wide text-black-normal capitalize transition-colors duration-300 transform bg-yellow-primary rounded-lg hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
