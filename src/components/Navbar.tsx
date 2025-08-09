"use client";
export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 py-6 relative z-10">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-cyan-400 rounded"></div>
        <span className="text-lg font-semibold">Software Chamber</span>
      </div>
      <button className="border border-cyan-400 px-5 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition">
        Contact Us
      </button>
    </header>
  );
}
