"use client";
import React, { useState } from "react";

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Pro",
      desc: "For beginners and individual projects",
      monthly: 139.95,
      features: [
        "Up to 5 websites to monitor",
        "Keyword research tools",
        "Competitor analysis tools",
        "Position Tracking",
        "Backlinks",
        "Site Audit",
        "MCP Access",
      ],
      button: "Try for free",
      sub: "or subscribe",
    },
    {
      name: "Guru",
      desc: "For small businesses",
      monthly: 249.95,
      features: [
        "Up to 15 websites to monitor",
        "Historical data",
        "Multi-location and device data",
        "Content optimization tools",
      ],
      button: "Try for free",
      sub: "or subscribe",
    },
    {
      name: "Business",
      desc: "For agencies and mid-market companies",
      monthly: 499.95,
      features: [
        "Up to 40 websites to monitor",
        "Share of Voice",
        "Extended limits",
        "API access",
        "Migration from third-party tools",
      ],
      button: "Subscribe",
      sub: "or try custom plan",
    },
  ];

  return (
    <section id="pricing" className="bg-[#F3F4F6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            SEO Classic Plans
          </h1>

          <div className="mt-6 md:mt-0 flex items-center bg-white rounded-full p-1 border">
            <button
              onClick={() => setYearly(false)}
              className={`px-6 py-2 rounded-full text-sm ${
                !yearly ? "bg-gray-200" : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-6 py-2 rounded-full text-sm ${
                yearly ? "bg-gray-200" : ""
              }`}
            >
              Annually
            </button>
            <span className="ml-3 text-xs bg-orange-500 text-white px-3 py-1 rounded-full">
              save up to 17%
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => {
            const price = yearly
              ? (plan.monthly * 12 * 0.83).toFixed(2)
              : plan.monthly.toFixed(2);

            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-8 flex flex-col"
              >
                <h2 className="text-2xl font-semibold text-gray-900">
                  {plan.name}
                </h2>
                <p className="text-gray-500 mt-1">{plan.desc}</p>

                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${price}
                  </span>
                  <span className="text-gray-500 text-sm">/mo</span>
                </div>

                <button className="mt-6 bg-[#16A085] hover:bg-[#149174] text-white py-3 rounded-md font-medium">
                  {plan.button}
                </button>

                <p className="text-sm text-orange-500 mt-2">{plan.sub}</p>

                <div className="border-t my-6"></div>

                <ul className="space-y-3 text-sm text-gray-700">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
