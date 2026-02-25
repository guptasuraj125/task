import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0E1624] text-[#A7B0C0]">
      <div className="max-w-[1200px] mx-auto px-6 pt-14">

     
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-10 border-b border-[#1F2A3A]">
          
          <div className="flex items-center gap-6">
            <button className="border border-[#2A3547] text-[#C9D1E1] text-sm px-6 py-2.5 rounded-md hover:border-[#3A475C] transition">
              Contact us
            </button>
            <p className="text-sm text-[#8B95A7]">
              Mumbai, Maharashtra, India
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <button className="bg-[#19B394] hover:bg-[#17A286] text-white text-sm font-medium px-8 py-3 rounded-md">
              Get started with Task!
            </button>
            <span className="text-sm text-[#8B95A7] mt-3 underline cursor-pointer">
              or see our plans & pricing
            </span>
          </div>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-12 py-14 text-sm">

          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">
              TASK
            </h3>
            <ul className="space-y-3">
              <li>Features</li>
              <li>Pricing</li>
              <li>Free Trial</li>
              <li>Success Stories</li>
              <li>Insights</li>
              <li>News</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">
              HELP
            </h3>
            <ul className="space-y-3">
              <li>Knowledge Base</li>
              <li>Academy</li>
              <li>API Documentation</li>
            </ul>

            <h3 className="text-white font-semibold mt-10 mb-5 tracking-wide">
              COMMUNITY
            </h3>
            <ul className="space-y-3">
              <li>Blog</li>
              <li>Webinars</li>
              <li>Ambassador Program</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">
              TOOLS
            </h3>
            <ul className="space-y-3">
              <li>SEO Tools</li>
              <li>Keyword Research</li>
              <li>Competitor Analysis</li>
              <li>Content Optimizer</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>About Us</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Privacy Policy</li>
              <li>Security</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">
              FOLLOW US
            </h3>
            <ul className="space-y-3">
              <li>Twitter</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">
              LANGUAGE
            </h3>
            <p>English</p>
          </div>

        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          
          <div className="flex items-center gap-3">
            <span className="text-[#FF642D] text-2xl">●</span>
            <span className="text-white font-semibold tracking-wide">
              Task
            </span>
          </div>

          <p className="text-sm text-[#8B95A7] mt-4 md:mt-0">
            © 2026 Task. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;