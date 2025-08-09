"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isExpanded?: boolean;
}

const FAQSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([2]); 

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What software development services does your company offer?",
      answer: "We offer comprehensive software development services including web development, mobile app development, custom software solutions, cloud services, and digital transformation consulting."
    },
    {
      id: 2,
      question: "What industries do you specialize in?",
      answer: "We serve clients across diverse industries including healthcare, e-commerce, fintech, logistics, and beyond. Our team has extensive experience building solutions for startups, enterprises, and everything in between, bringing industry-specific knowledge to every project we undertake.",
      isExpanded: true
    },
    {
      id: 3,
      question: "What sets your company apart from the competition?",
      answer: "Our unique combination of technical expertise, industry experience, and customer-centric approach sets us apart. We focus on delivering high-quality solutions that are scalable, secure, and tailored to your specific business needs."
    },
    {
      id: 4,
      question: "Is my project idea and information kept confidential?",
      answer: "Absolutely. We take confidentiality very seriously and sign NDAs with all our clients. Your project ideas, business information, and proprietary data are fully protected and never shared with third parties."
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isExpanded = (id: number) => expandedItems.includes(id);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-4xl font-bold text-gray-900 leading-tight">
              Comprehensive Answers to the Most
              <br />
              <span className="inline-flex items-center">
                <span className="text-teal-500 mr-2">✨</span>
                Common Questions
              </span>
              <span className="text-gray-500"> About Our</span>
              <br />
              <span className="text-gray-500">Services</span> and How We 
              <span className="text-gray-900"> Work</span>
              <span className="ml-2">📈</span>
            </h1>
          </div>

          {/* FAQ Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-gray-900">FAQ</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">All FAQ</span>
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900 pr-8 ">
                  {item.question}
                </span>
                <div
                  className={`flex-shrink-0 transform transition-transform duration-300 text-white ${
                    isExpanded(item.id) ? "-rotate-0 bg-teal-500 rounded-full text-white " : "rotate-0 bg-black rounded-full "
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isExpanded(item.id) ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isExpanded(item.id) ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQSection;
