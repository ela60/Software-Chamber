"use client";

interface ProcessStep {
  id: number;
  label: string;
  position: { x: number; y: number };
  isActive?: boolean;
}

const SoftwareDevelopmentProcess: React.FC = () => {
  const processSteps: ProcessStep[] = [
    { id: 1, label: 'Code', position: { x: 50, y: 350 } },
    { id: 2, label: 'Build', position: { x: 120, y: 280 } },
    { id: 3, label: 'Test', position: { x: 200, y: 230 } },
    { id: 4, label: 'Release', position: { x: 300, y: 210 } },
    { id: 5, label: 'Deploy', position: { x: 420, y: 240 } },
    { id: 6, label: 'Monitor', position: { x: 480, y: 310 } },
    { id: 7, label: 'Build', position: { x: 520, y: 380 } }
  ];

  // Generate SVG path for the circular workflow
  const generatePath = () => {
    const pathCommands = processSteps.map((step, index) => {
      const command = index === 0 ? 'M' : 'L';
      return `${command} ${step.position.x} ${step.position.y}`;
    }).join(' ');
    
    return pathCommands;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-teal-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-teal-300 rounded-full opacity-50"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="border-r border-white"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
            <span className="text-teal-300 text-sm font-medium">SIMPLE YET ROBUST SOLUTION</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Software
            <br />
            <span className="text-gray-400">Development Process</span>
          </h1>
          
          <p className="text-gray-400 text-lg  mx-auto mb-8">
            Deliver personalized experiences to your customers with AI-powered recommendation <br />
            engines  and dynamic content generation.
          </p>
          
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center mx-auto">
            Contact Us
            <div className="ml-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Process Visualization */}
        <div className="relative flex items-center justify-center">
          {/* Central Globe */}
          <div className="relative w-80 h-80 mx-auto">
            {/* Globe base */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-teal-700/40 backdrop-blur-sm border border-teal-500/30">
              {/* Dotted pattern on globe */}
              <div className="absolute inset-8 rounded-full">
                <div className="grid grid-cols-8 gap-2 h-full opacity-40">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 h-1 bg-teal-300 rounded-full"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animation: 'pulse 3s infinite'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/10 to-transparent blur-xl"></div>
            </div>

            {/* SVG for connecting lines and process steps */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 600 500"
              style={{ transform: 'translate(-110px, -60px)' }}
            >
              {/* Dotted connecting path */}
              <path
                d={generatePath()}
                fill="none"
                stroke="rgba(45, 212, 191, 0.4)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
              
              {/* Process step circles and labels */}
              {processSteps.map((step, index) => (
                <g key={step.id}>
                  {/* Step circle */}
                  <circle
                    cx={step.position.x}
                    cy={step.position.y}
                    r="20"
                    fill="rgba(17, 24, 39, 0.8)"
                    stroke="rgba(45, 212, 191, 0.6)"
                    strokeWidth="2"
                    className="hover:fill-teal-900 transition-colors duration-300"
                  />
                  
                  {/* Step number */}
                  <text
                    x={step.position.x}
                    y={step.position.y + 5}
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    {step.id}
                  </text>
                  
                  {/* Step label */}
                  <text
                    x={step.position.x}
                    y={step.position.y - 35}
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="600"
                    className="hover:fill-teal-300 transition-colors duration-300"
                  >
                    {step.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SoftwareDevelopmentProcess;