"use client";

import { useState } from "react";

interface TechStack {
  name: string;
  color: string;
  bgColor: string;
}

interface Industry {
  name: string;
  images: string[];
}

const TechStackPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('design');

  const techStacks: TechStack[] = [
    { name: 'Shopify', color: 'text-green-400', bgColor: 'bg-green-500' },
    { name: 'WooCommerce', color: 'text-purple-400', bgColor: 'bg-purple-500' },
    { name: 'Drupal', color: 'text-blue-400', bgColor: 'bg-blue-500' },
    { name: 'Django', color: 'text-pink-400', bgColor: 'bg-pink-500' },
    { name: 'Swift', color: 'text-orange-400', bgColor: 'bg-orange-500' }
  ];

  const industries: Industry[] = [
    {
      name: 'eCommerce',
      images: [
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
      ]
    },
    {
      name: 'Health Care',
      images: [
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
      ]
    },
    {
      name: 'Development',
      images: [
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
      ]
    },
    {
      name: 'Software',
      images: [
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
      ]
    },
    {
      name: 'Entertainment',
      images: [
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
      ]
    },
    {
      name: 'Hospitality',
      images: [
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
      ]
    },
    {
      name: 'Hospitality',
      images: [
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
      ]
    },
    {
      name: 'Manufacturing',
      images: [
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
      ]
    },
    {
      name: 'Energy',
      images: [
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
      ]
    },
    {
      name: 'Auto Market',
      images: [
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Our Stack Powers of
              <br />
              the <span className="text-gray-400">World&apos;s Most</span>
              <br />
              <span className="text-gray-400">Beloved Companies</span>
            </h1>
          </div>
          
          <div className="lg:w-1/2 flex flex-wrap gap-3 justify-end">
            {techStacks.map((tech, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className={`w-3 h-3 rounded-full ${tech.bgColor} mr-2`}></div>
                <span className={`text-sm font-medium ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Project Card */}
        <div className="bg-gradient-to-br from-teal-900/40 to-green-900/40 border border-teal-500/30 rounded-2xl p-8 mb-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          
          <div className="text-center">
            {/* Logo placeholder */}
            <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-8 flex items-center justify-center">
              <div className="w-8 h-8 bg-teal-500 rounded-lg transform rotate-45"></div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Uncover the Design and Development
              <br />
              <span className="text-gray-400">Projects That Set Us Apart</span>
            </h2>
            
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center mx-auto">
              Contact Us
              <div className="ml-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="bg-teal-500 text-black px-6 py-2 rounded-lg font-bold text-lg">
            1950 • 15/5 Ratio
          </div>
          <div className="flex items-center text-teal-400">
            <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
            <span className="text-sm">What&apos;s The Next Action?</span>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-300">{industry.name}</h3>
              </div>
              
              <div className="flex -space-x-2">
                {industry.images.slice(0, 3).map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="w-8 h-8 rounded-full border-2 border-gray-800 overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700"></div>
                  </div>
                ))}
                {industry.images.length > 3 && (
                  <div className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center">
                    <span className="text-xs text-gray-300">
                      +{industry.images.length - 3}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-teal-400 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-white rounded-full opacity-40"></div>
      <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-teal-300 rounded-full opacity-50"></div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TechStackPortfolio;