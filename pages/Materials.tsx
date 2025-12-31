import React from 'react';

const Materials: React.FC = () => {
  const woodTypes = [
    { name: "European Oak", desc: "Classic, durable, and richly grained. Our most popular choice for high-traffic surfaces." },
    { name: "American Walnut", desc: "Dark, moody, and prestigious. Perfect for statement furniture pieces." },
    { name: "Ash", desc: "Light and flexible. Ideal for Scandinavian-inspired minimalist interiors." },
    { name: "Smoked Oak", desc: "A deep, warm tone achieved through a natural fuming process." }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-8 font-serif text-[#F7F5F0]">Pure Materiality</h1>
          <p className="text-[#F7F5F0]/60 text-xl leading-relaxed font-light">
            We work exclusively with raw, natural materials that age with grace and tell a story.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {woodTypes.map((wood, idx) => (
            <div key={idx} className="group border border-[#8F9779]/30 p-8 hover:bg-[#4A3728] transition-colors">
              <h3 className="text-2xl mb-4 italic font-serif text-[#F7F5F0]">{wood.name}</h3>
              <p className="text-[#F7F5F0]/70 leading-relaxed font-light">{wood.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-[#F7F5F0]">Finishing Techniques</h2>
            <p className="text-[#F7F5F0]/70 text-lg leading-relaxed font-light">
              We avoid heavy lacquers that mask the texture of wood. Instead, we use natural oils and waxes that penetrate the fibers, providing protection while maintaining the authentic "open-pore" feel of the wood.
            </p>
            <ul className="space-y-6 text-[#F7F5F0]">
              <li className="flex gap-4">
                <span className="text-[#8F9779] font-bold text-lg">01.</span>
                <span className="font-light">Hand-sanding up to 400 grit for a velvet finish.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#8F9779] font-bold text-lg">02.</span>
                <span className="font-light">Multiple coats of natural hard-wax oil.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#8F9779] font-bold text-lg">03.</span>
                <span className="font-light">Traditional soap-finishing for light woods.</span>
              </li>
            </ul>
          </div>
          <div className="h-[600px] overflow-hidden rounded-sm shadow-xl bg-[#4A3728]">
            <img 
              src="https://images.unsplash.com/photo-1622397333309-3056849bc70b?q=80&w=2000&auto=format&fit=crop" 
              alt="Wood Grain Texture Close-up" 
              className="w-full h-full object-cover grayscale-[0.2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;