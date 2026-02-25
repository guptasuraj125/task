import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plans",
      Price: "0 $",
      description: "Keep chatting with your friends and family ",
    },
    {
      name: "Free Plans",
      Price: "399$ rupess",
      description: "Adavnce Tool as compared to Free plan ",
    },
    {
      name: "Pro Plus Plans",
      Price: "1000$ rupess",
      description: "All types of tools and advance fetures available ",
    },
  ];
  return (
    <div id="pricing" className="mb-90 ">
      <h1 className="text-4xl font-bold text-gray-600 mt-20 py-18 text-center">
        Pricing Plans
      </h1>

      {/* FLEX container bahar */}
      <div className="flex justify-center items-center  gap-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-60 text-center text-2xl  border h-70  p-4"
          >
            {plan.name}

            <h1 className="text-sm mt-3">{plan.Price}</h1>

            <h2 className="text-sm mt-8">{plan.description}</h2>

            <button className="mt-20 text-sm px-6 py-2 rounded-md bg-black text-white">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
