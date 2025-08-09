'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Web & Mobile App Development',
      description:
        'Creating responsive web applications and mobile apps that provide seamless user experiences across all devices and platforms.',
      isHighlighted: false,
    },
    {
      id: 2,
      title: 'Application Software Services',
      description:
        'Comprehensive software solutions tailored to your business needs, from concept to deployment and ongoing support.',
      isHighlighted: true,
    },
    {
      id: 3,
      title: 'Software Coding & Optimization',
      description:
        'Expert coding services and performance optimization to ensure your applications run efficiently and effectively.',
      isHighlighted: false,
    },
  ];

  // Framer motion variants for fade up + stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // 100ms stagger
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
      <motion.div
        variants={cardVariants}
        className={`relative rounded-2xl p-6 transition-all duration-300 group
          ${service.isHighlighted
            ? 'bg-teal-500 text-white shadow-lg'
            : 'bg-white text-gray-900 shadow-md hover:shadow-lg'}
        `}
        whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(16, 185, 129, 0.4)' }} // lift 8px + shadow glow
        transition={{ duration: 0.18 }}
      >
        <div className="mb-6">
          <h3
            className={`text-xl font-bold mb-4 leading-tight ${
              service.isHighlighted ? 'text-white' : 'text-gray-900'
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              service.isHighlighted ? 'text-white/90' : 'text-gray-600'
            }`}
          >
            {service.description}
          </p>
        </div>

        {/* Arrow Icon */}
        <div className="flex justify-end">
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
              ${
                service.isHighlighted
                  ? 'bg-white/20 hover:bg-white/30'
                  : 'bg-gray-100 hover:bg-teal-500 group-hover:text-white'
              }
            `}
            // Icon nudges up 6px on card hover
            whileHover={{ y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <motion.svg
              className={`w-5 h-5 transition-colors duration-300 ${
                service.isHighlighted
                  ? 'text-white'
                  : 'text-gray-600 group-hover:text-white'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 6 }} // arrow slides 6px right on hover
              transition={{ duration: 0.18 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Decorative Circles */}
        {service.isHighlighted && (
          <>
            <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/10 rounded-full"></div>
          </>
        )}
      </motion.div>
    );
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Services<span className="text-teal-500">.</span>
          </h1>
          <div className="flex items-center text-gray-600">
            <span className="mr-2 hidden sm:inline">All Services</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
