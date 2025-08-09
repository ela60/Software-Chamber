"use client";
export default function ServiceCard() {
  return (
    <section className="flex justify-center mt-20 relative z-10">
      <div className="bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-[340px] relative border border-gray-700">
        <h3 className="text-xl font-semibold mb-2">Software Service Solutions</h3>
        <p className="text-gray-400 text-sm mb-4">
          Plan, track, and manage projects with precision tools.
        </p>
        <button className="px-4 py-2 bg-cyan-400 text-black rounded-full hover:bg-cyan-300">
          Discover
        </button>

        {/* Floating mini-cards */}
        <div className="absolute -top-10 -left-28 bg-gray-700/80 backdrop-blur-md px-4 py-2 rounded-lg text-sm border border-gray-600">
          Website Development
        </div>
        <div className="absolute top-1/2 -left-32 bg-gray-700/80 backdrop-blur-md px-4 py-2 rounded-lg text-sm border border-gray-600">
          Mobile App Development
        </div>
        <div className="absolute -top-10 -right-40 bg-gray-700/80 backdrop-blur-md px-4 py-2 rounded-lg text-sm border border-gray-600">
          UI/UX Engineering
        </div>
        <div className="absolute top-1/2 -right-36 bg-gray-700/80 backdrop-blur-md px-4 py-2 rounded-lg text-sm border border-gray-600">
          Software Services
        </div>
      </div>
    </section>
  );
}
