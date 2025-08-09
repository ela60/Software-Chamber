"use client";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

const ContactInfoSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Dribbble', url: '#', icon: '🏀' },
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'YouTube', url: '#', icon: '📺' }
  ];

  const contactInfo: ContactInfo = {
    address: '1920 Pineapple St.\nCarolina, USA\n35951',
    phone: '(929) 829-0001',
    email: 'hello@upward.com'
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Section - Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              LET&apos;S TALK
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-lg">
              A new age of efficiency, elegance, true elite 
              experience, and deep thoughtfulness around 
              every corner. A new dawn of unparalleled quality.
            </p>

            {/* Social Media Section */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6">Social media</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center justify-center p-4 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <span className="text-gray-400 hover:text-white transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-500 text-sm">
              <p>2024 Software Chamber. All Right Reserved</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Info & Image */}
          <div className="lg:col-span-1">
            {/* Contact Information */}
            <div className="mb-8">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">ADDRESS</h3>
                <p className="text-white whitespace-pre-line">
                  {contactInfo.address}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">PHONE</h3>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">EMAIL</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="rounded-xl overflow-hidden bg-gray-800 aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
                {/* Simulate team meeting image */}
                <div className="absolute inset-4 bg-gray-600 rounded-lg opacity-50"></div>
                <div className="absolute top-6 left-6 w-8 h-8 bg-gray-500 rounded-full"></div>
                <div className="absolute top-6 right-6 w-6 h-6 bg-gray-500 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-10 h-3 bg-gray-500 rounded"></div>
                <div className="absolute bottom-6 right-6 w-8 h-3 bg-gray-500 rounded"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gray-500 rounded-full opacity-30"></div>
                </div>
              </div>
              
              {/* Overlay for better visual */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Decorative elements to simulate meeting scene */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/30 rounded-lg backdrop-blur">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  <div>
                    <div className="w-20 h-2 bg-gray-400 rounded mb-1"></div>
                    <div className="w-16 h-1 bg-gray-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;