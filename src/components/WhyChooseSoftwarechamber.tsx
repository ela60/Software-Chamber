'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const WhyChooseSoftwarechamber: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Efficiency',
      description:
        'Software Chamber specializes in creating innovative solutions that enhance operational efficiency and support businesses growth.',
      icon: '⚡',
    },
    {
      id: 2,
      title: 'Adaptability',
      description:
        'Software Chamber specializes in creating powerful AI solutions that can adapt to changing business environments in diverse industries.',
      icon: '🔄',
    },
    {
      id: 3,
      title: 'Scalability',
      description:
        'Software Chamber specializes in creating innovative solutions that can scale with your business as it grows and secure communications platforms.',
      icon: '📈',
    },
    {
      id: 4,
      title: 'Precision',
      description:
        'Software Chamber specializes in creating innovative solutions that provide precise analytics and insights to help businesses make informed decisions.',
      icon: '🎯',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, rotate: 1, y: 20 },
    visible: { opacity: 1, rotate: 0, y: 0, transition: { duration: 0.5 } },
  };

  const FeatureCard: React.FC<{ feature: Feature; isUp: boolean; isLast: boolean }> = ({
    feature,
    isUp,
    isLast,
  }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: '0 0 20px rgba(13, 148, 136, 0.3)',
      }}
      transition={{ duration: 0.2 }}
      className={`relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 max-w-sm ${
        isUp ? 'mt-0' : 'mt-10'
      }`}
    >
      {/* Icon at top-right */}
      <motion.div
        whileHover={{ rotate: 4 }}
        transition={{ duration: 0.2 }}
        className="absolute top-5 right-5 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-lg shadow-md"
      >
        {feature.icon}
      </motion.div>

      {/* Title aligned straight */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 text-left">
        {feature.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* Arrow */}
     
    </motion.div>
  );

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <br />
            Softwarechamber
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center">
              Let’s Discuss
              <GoArrowUpRight
                className="bg-white text-black ml-2 rounded-full p-1"
                size={22}
              />
            </button>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isUp={index % 2 === 0}
              isLast={index === features.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseSoftwarechamber;
