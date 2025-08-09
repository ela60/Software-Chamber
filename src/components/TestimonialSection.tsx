'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  quote: string;
  author: {
    name: string;
    position: string;
    company: string;
    avatar: string;
  };
  companyLogo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet commodo.",
    author: {
      name: "Alex Larkins",
      position: "Art Director",
      company: "Airbnb",
      avatar: "/Base.png",
    },
    companyLogo: "/logo.png", 
  },
  {
    id: 2,
    quote:
      "Absolutely fantastic service and design quality. Our brand has grown thanks to their amazing work.",
    author: {
      name: "Sarah Jones",
      position: "Marketing Lead",
      company: "Shopify",
      avatar: "/Base.png",
    },
    companyLogo: "/logo.png",
  },
  {
    id: 3,
    quote:
      "They exceeded our expectations in every way possible. Highly recommended!",
    author: {
      name: "James Carter",
      position: "CEO",
      company: "TechNova",
      avatar: "/Base.png",
    },
    companyLogo: "/logo.png",
  },
];

const TestimonialSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Don’t just take our word for it.
          
          Hear <br /> what <span className='text-[#A5A5A5]'>our clients say</span> 
        </h1>
      </div>

      {/* Testimonial Slider */}
      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative"
          >
            {/* Quote Marks with Shine */}
            <motion.div
              className="absolute -top-6 left-6 text-teal-500/40 text-6xl select-none"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              “
            </motion.div>

            {/* Quote Text */}
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
              {current.quote}
            </p>

            {/* Author */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.06 },
                },
              }}
              className="flex items-center justify-between"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center">
                <img
                  src={current.author.avatar}
                  alt={current.author.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{current.author.name}</div>
                  <div className="text-gray-400 text-sm">
                    {current.author.position} at {current.author.company}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-xl font-bold">
                {current.companyLogo}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === index ? 'bg-teal-500' : 'bg-gray-600'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
