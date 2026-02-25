import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "0$",
      description: "Basic features for normal use",
    },
    {
      name: "Basic Plan",
      price: "399$",
      description: "Some extra tools included",
    },
    {
      name: "Pro Plan",
      price: "1000$",
      description: "All tools and premium features",
    },
  ];

  return (
    <div id="pricing" className="mt-20 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Pricing Plans
      </h1>

      <div className="flex flex-col md:flex-row md:justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border p-5 rounded text-center w-full md:w-72"
          >
            <h2 className="text-xl font-semibold">{plan.name}</h2>

            <p className="mt-2 text-lg font-bold">{plan.price}</p>

            <p className="mt-4 text-sm">{plan.description}</p>

            <button className="mt-6 bg-black text-white px-5 py-2 rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;