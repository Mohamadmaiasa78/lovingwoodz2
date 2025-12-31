import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Video */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover brightness-[0.4]"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-wooden-details-and-furniture-41444-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#2C221C] to-transparent pointer-events-none z-10"></div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-white text-5xl md:text-8xl mb-8 leading-tight">
            Timeless Woodcraft.<br/><span className="italic font-serif text-white">Made to Measure.</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Interieurs voor de mooiste momenten in je leven. Ambachtelijk vakmanschap vertaald naar moderne luxe.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-[#2C3E30]/80 backdrop-blur-sm text-white px-10 py-5 text-sm tracking-widest uppercase font-bold hover:bg-[#1C2E20] transition-all group shadow-2xl"
          >
            Start je project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Intro Section - Video instead of image */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <span className="uppercase tracking-[0.4em] text-[#8F9779] text-xs font-bold mb-6 block">Onze Filosofie</span>
            <h2 className="text-4xl md:text-6xl mb-10 leading-snug font-serif text-[#F7F5F0]">De kracht van puur materiaal.</h2>
            <p className="text-[#F7F5F0]/70 text-lg leading-relaxed mb-10 font-light">
              Hout brengt sfeer, karakter en rust in huis. Geen mm is hetzelfde, elk stukje leeft en vertelt z’n eigen verhaal. Wij gebruiken dit unieke karakter om interieurs te maken die echt iets voor je doen.
            </p>
            <Link to="/about" className="group inline-flex items-center gap-4 text-[#8F9779] font-bold transition-all text-sm uppercase tracking-widest">
              <span className="border-b-2 border-[#8F9779] pb-1 group-hover:text-[#F7F5F0] group-hover:border-[#F7F5F0] transition-all">Ontdek ons verhaal</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#8F9779]/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
            <div className="relative h-[600px] overflow-hidden shadow-2xl">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-carpenter-sanding-a-piece-of-wood-34538-large.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Grid with Videos */}
      <section className="py-32 px-6 border-t border-[#8F9779]/10">
        <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl mb-6 font-serif text-[#F7F5F0]">Maatwerk in Beeld</h2>
            <p className="text-[#F7F5F0]/60 font-light text-lg">Een selectie van onze meest recente realisaties, vastgelegd in beweging.</p>
          </div>
          <Link to="/portfolio" className="uppercase tracking-widest text-sm font-bold flex items-center gap-3 hover:text-[#8F9779] text-[#F7F5F0] transition-colors group">
            Bekijk alle projecten <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Eiken Slat Wall", category: "Woonkamer", video: "https://assets.mixkit.co/videos/preview/mixkit-bright-kitchen-with-wooden-elements-41441-large.mp4" },
            { title: "Zwevend Meubel", category: "Badkamer", video: "https://assets.mixkit.co/videos/preview/mixkit-living-room-with-wooden-furniture-and-plants-41434-large.mp4" },
            { title: "Bespoke Dining", category: "Keuken", video: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-wooden-details-and-furniture-41444-large.mp4" }
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden mb-8 aspect-[4/5] bg-[#4A3728]/20 shadow-xl relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                >
                  <source src={item.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8F9779] font-bold block mb-3">{item.category}</span>
              <h3 className="text-2xl font-serif text-[#F7F5F0] group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;