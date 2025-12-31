import React from 'react';
import { ChevronDown } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToInspiration = () => {
    document.getElementById('inspiration-gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Maatwerk Keukens",
      desc: "Keukens die rust uitstralen. Wij combineren warme houtsoorten met moderne functionaliteit voor het hart van je huis.",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Unieke Meubels",
      desc: "Van eettafels die generaties meegaan tot zwevende badkamermeubels. Elk meubel is een persoonlijk verhaal.",
      img: "https://images.unsplash.com/photo-1620626011761-9963d7521477?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Totaal Interieur",
      desc: "Wandpanelen, kastenwanden en vloeren die naadloos op elkaar aansluiten voor een harmonieus geheel.",
      img: "https://images.unsplash.com/photo-1615873968403-89e068628265?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507652313519-d4c9174996dd?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <header className="mb-24 text-center">
          <h1 className="text-4xl md:text-6xl mb-8 font-serif italic text-[#F7F5F0]">Interieurs voor de mooiste momenten in je leven</h1>
          <button 
            onClick={scrollToInspiration}
            className="inline-flex items-center gap-2 bg-[#2C3E30] text-white px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#8F9779] transition-all mb-16"
          >
            Inspiratie <ChevronDown size={14} />
          </button>
          
          <div className="max-w-4xl mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-[#8F9779]/30 pt-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-serif text-[#F7F5F0]">De kracht van hout</h2>
              <p className="text-[#F7F5F0]/70 leading-relaxed font-light">
                Hout brengt sfeer, karakter en rust in huis. Geen mm is hetzelfde, elk stukje leeft en vertelt z’n eigen verhaal. Het verzacht strakke lijnen en geeft een ruimte écht sfeer.
                Hout verandert mee met de tijd. Dat maakt het niet alleen persoonlijk, maar ook duurzaam. Hout is bij ons altijd het vertrekpunt. Puur materiaal, met aandacht verwerkt in een interieur dat klopt.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-serif text-[#F7F5F0]">Trouw aan vakmanschap</h2>
              <p className="text-[#F7F5F0]/70 leading-relaxed font-light">
                Wij maken interieurs voor iedereen die bewust kiest voor hout. Interieurs voor mensen die anders willen dan anders en kiezen voor karakter en trots. Wij blijven trouw aan het gevoel van echt vakmanschap en de trots van maatwerk. Dat doen we in eigen beheer en met eigen handen.
              </p>
            </div>
          </div>
        </header>

        {/* Services Grid */}
        <section className="space-y-32 mb-32">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full aspect-[4/3] overflow-hidden bg-[#4A3728]">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl font-serif text-[#F7F5F0]">{service.title}</h2>
                <p className="text-[#F7F5F0]/70 text-lg leading-relaxed font-light">{service.desc}</p>
                <div className="h-px w-24 bg-[#8F9779]"></div>
              </div>
            </div>
          ))}
        </section>

        {/* Inspiration Gallery */}
        <section id="inspiration-gallery" className="pt-24 border-t border-[#8F9779]/30">
          <div className="mb-12">
            <span className="uppercase tracking-[0.3em] text-[#8F9779] text-xs font-bold block mb-2">Inspiratie</span>
            <h2 className="text-4xl font-serif text-[#F7F5F0]">Recente Projecten</h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden group bg-[#4A3728]">
                <img 
                  src={img} 
                  alt={`Project ${idx}`} 
                  className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;