import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface ProjectDetail {
  title: string;
  loc: string;
  img: string;
  gallery: string[];
  description: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const projects: ProjectDetail[] = [
    { 
      title: "Fluted Oak Kitchen", 
      loc: "Amsterdam, NL", 
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
      description: "Een moderne interpretatie van een landelijke keuken, waarbij de verticale eiken latten zorgen voor diepte en ritme.",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
        "https://images.unsplash.com/photo-1556912177-c54030639a4c?q=80&w=2070",
        "https://images.unsplash.com/photo-1556909212-d5b6043bc573?q=80&w=2070"
      ]
    },
    { 
      title: "Tambour Media Wall", 
      loc: "Rotterdam, NL", 
      img: "https://images.unsplash.com/photo-1615873968403-89e068628265?q=80&w=2000&auto=format&fit=crop",
      description: "Een zwevend wandmeubel met schuifdeuren van massief notenhout, ontworpen om alle techniek onzichtbaar te integreren.",
      gallery: [
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000",
        "https://images.unsplash.com/photo-1507652313519-d4c9174996dd?q=80&w=2070"
      ]
    },
    { 
      title: "Minimalist Vanity", 
      loc: "Utrecht, NL", 
      img: "https://images.unsplash.com/photo-1620626011761-9963d7521477?q=80&w=2070&auto=format&fit=crop",
      description: "Badkamermeubel in gerookt eiken, gecombineerd met een naadloos blad van natuursteen.",
      gallery: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
        "https://images.unsplash.com/photo-1507652313519-d4c9174996dd?q=80&w=2070"
      ]
    },
    { 
      title: "Handle-less Walnut Storage", 
      loc: "Den Haag, NL", 
      img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop",
      description: "Kastenwand van vloer tot plafond zonder handgrepen, uitgevoerd in warm Amerikaans notenhout.",
      gallery: [
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000"
      ]
    },
    { 
      title: "Architectural Slat Staircase", 
      loc: "Eindhoven, NL", 
      img: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070&auto=format&fit=crop",
      description: "Een trap als sculptuur. De houten lamellen lopen door over drie verdiepingen voor een spectaculair lijnenspel.",
      gallery: [
        "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070"
      ]
    },
    { 
      title: "Bespoke Library Wall", 
      loc: "Antwerpen, BE", 
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070&auto=format&fit=crop",
      description: "Maatwerk boekenkast met geïntegreerde verlichting en een verborgen deur naar de werkruimte.",
      gallery: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070"
      ]
    },
  ];

  return (
    <div className="pt-32 pb-24 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl mb-6 font-serif italic text-[#F7F5F0]">Portfolio</h1>
          <p className="text-[#F7F5F0]/60 text-xl font-light">Unieke interieurs, met trots gemaakt.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedProject(p)}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#4A3728]">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl mb-1 font-serif text-[#F7F5F0]">{p.title}</h3>
                  <p className="text-[#F7F5F0]/50 text-sm uppercase tracking-widest">{p.loc}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs uppercase tracking-widest font-bold border-b border-[#F7F5F0] text-[#F7F5F0]">Bekijk Project</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal Pop-up */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#2C221C] border border-[#8F9779]/20 shadow-2xl overflow-y-auto rounded-sm scrollbar-hide">
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-8 right-8 z-[70] text-white hover:text-[#8F9779] transition-colors bg-black/50 p-2 rounded-full"
            >
              <X size={32} />
            </button>

            <div className="p-8 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Text Content */}
                <div className="lg:sticky lg:top-0 h-fit space-y-8">
                  <span className="uppercase tracking-[0.3em] text-[#8F9779] text-xs font-bold block">{selectedProject.loc}</span>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">{selectedProject.title}</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                  <div className="pt-8">
                    <button 
                      onClick={() => window.location.href='#/contact'}
                      className="inline-flex items-center gap-3 text-[#8F9779] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
                    >
                      Interesse in een soortgelijk project? <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Gallery Images */}
                <div className="lg:col-span-2 space-y-8">
                  <img 
                    src={selectedProject.img} 
                    alt="Main view" 
                    className="w-full aspect-[16/10] object-cover shadow-2xl border border-white/5"
                  />
                  {selectedProject.gallery.map((img, i) => (
                    <img 
                      key={i} 
                      src={img} 
                      alt={`Detail ${i}`} 
                      className="w-full h-auto object-cover shadow-2xl border border-white/5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;