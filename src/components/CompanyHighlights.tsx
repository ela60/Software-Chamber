"use client";

import Image from "next/image";
import {
  FaCloud,
  FaMoneyBillTrendUp,
  FaRegComments,
  FaFlagCheckered,
} from "react-icons/fa6"; // if this fails, change to 'react-icons/fa'

export default function CompanyHighlights() {
  return (
    <section className="py-20 px-6 bg-white text-black">
       
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
           <span className="text-[#27B4A3]">✦✦</span>  At <span className="text-black">Software Chamber</span>,
            <span className="text-[#A5A5A5] font-medium"> we specialize</span> in <br />
           
              turning complex challenges into elegant <br/>  <span className="text-[#A5A5A5] text-2xl">digital solutions ⌓
            </span>
          </h2>
      </div>

     <div className="flex flex-col md:flex-row md:items-stretch gap-8">
  {/* Left Column */}
  <div className="flex-1 flex flex-col justify-center space-y-6 left-[400]">
    <div>
      <h3 className="text-2xl font-bold text-gray-900">20+</h3>
      <p className="text-gray-600">Tech Partners</p>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900">150+</h3>
      <p className="text-gray-600">Project Completed</p>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900">1k+</h3>
      <p className="text-gray-600">Satisfied Customers</p>
    </div>
  </div>

  {/* Center Image */}
  <div className="flex-1 flex items-center justify-center">
    <Image
      src="/Rectangle 6.png"
      alt="Team Meeting"
      width={320}
      height={320}
      className="rounded-xl shadow-xl object-cover h-[320px] w-[320px]"
    />
  </div>

  {/* Right Features */}
  <div className="flex-1 flex flex-col justify-center space-y-6">
    <FeatureItem
      icon={<FaCloud className="text-white" />}
      title="Your Team in the Cloud"
      description="We hire best and brightest talents to build world-class technology"
    />
    <FeatureItem
      icon={<FaMoneyBillTrendUp className="text-white" />}
      title="Grow more with less"
      description="We have a competitive pricing structure"
    />
    <FeatureItem
      icon={<FaFlagCheckered className="text-white" />}
      title="Weekly sprint and reviews"
      description="Our fast release and feedback loop keeps you in the driver's seat"
    />
    <FeatureItem
      icon={<FaRegComments className="text-white" />}
      title="Communication First"
      description="We use modern tools and reviews to collaborate"
    />
  </div>
</div>

    </section>
  );
}

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureItem({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="min-w-[40px] min-h-[40px] rounded-full bg-[#27B4A3] flex items-center justify-center shadow-md">
        {icon}
      </div>
      <div>
        <h4 className="text-md font-bold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
