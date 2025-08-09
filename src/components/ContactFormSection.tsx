"use client";
import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  message: string;
}

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Let&apos;s talk about your next
            <br />
            project.{" "}
            <span className="text-gray-500 font-normal">We&apos;re here to help.</span>
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
            Deliver personalized experiences to your customers <br />
            with AI-powered recommendation engines and <br />
            dynamic content generation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 w-full h-full">
            <div className="h-full rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img
                src="/contact.png"
                alt="Contact Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2 w-full h-full">
            <form onSubmit={handleSubmit} className="space-y-5 h-full px-2 sm:px-0">
              {/* First Name */}
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-teal-500 outline-none transition"
                required
              />

              {/* Last Name */}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-teal-500 outline-none transition"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-teal-500 outline-none transition"
                required
              />

              {/* Phone with +1 and dropdown arrow */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pl-14 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-teal-500 outline-none transition"
                />
                <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 text-sm select-none">
                  +1
                </span>
                <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 pointer-events-none select-none">
                  ▼
                </span>
              </div>

              {/* Job Title */}
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-teal-500 outline-none transition"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-teal-500 outline-none resize-none transition"
              />

              {/* Submit Button */}
              <div className="pt-4 flex gap-4">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 flex items-center justify-center"
                >
                  Submit
                  <div className="ml-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
