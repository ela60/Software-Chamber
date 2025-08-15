"use client";
import Image from "next/image";

export default function ContactFooter() {
  return (
    <footer className="bg-gradient-to-r from-green to-green-950 text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">LET’S TALK</h2>
          <p className="text-gray-300 text-sm md:text-base">
            A new era of energy, elegance, and elite competition begins here.
            Where passion meets performance on the court like never before.
          </p>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-2">Social media</h3>
           <ul className="flex flex-col gap-2 text-sm md:text-base">
  {/* First Row */}
  <li className="flex gap-4">
    {["Instagram", "Twitter", "Tiktok"].map((item) => (
      <span
        key={item}
        className="flex items-center gap-1 hover:text-gray-400 cursor-pointer"
      >
        {item}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    ))}
  </li>

  {/* Second Row */}
  <li className="flex gap-4">
    {["Facebook", "LinkedIn", "YouTube"].map((item) => (
      <span
        key={item}
        className="flex items-center gap-1 hover:text-gray-400 cursor-pointer"
      >
        {item}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    ))}
  </li>
</ul>

          </div>
        </div>

        {/* Middle Section */}
        <div className="space-y-4 text-sm md:text-base">
          <div>
            <h4 className="font-semibold">ADDRESS</h4>
            <p className="text-gray-300">1901 Thornridge Cir, Shiloh, Hawaii 81063</p>
          </div>
          <div>
            <h4 className="font-semibold">PHONE</h4>
            <p className="text-gray-300">+1 (872) 206-3969</p>
          </div>
          <div>
            <h4 className="font-semibold">EMAIL</h4>
            <p className="text-gray-300">hello@transit.com</p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full">
          <Image
            src="/Rectangle 6.png" 
            alt="Team meeting"
            width={400}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <p>2024 Software Chamber All Right Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-200">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
