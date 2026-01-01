import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Maximize2 } from 'lucide-react';

interface ProjectDetail {
  id: string;
  title: string;
  loc: string;
  img: string;
  gallery: string[];
  description: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const projects: ProjectDetail[] = [
    { 
      id: "1",
      title: "Fluted Oak Kitchen", 
      loc: "Amsterdam, NL", 
      category: "Maatwerk Keuken",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
      description: "Een harmonieus samenspel tussen verticale eiken lamellen en modern marmer. In dit project stond de tactiele ervaring van het hout centraal.",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
        "https://images.unsplash.com/photo-1556912177-c54030639a4c?q=80&w=2070",
        "https://images.unsplash.com/photo-1556909212-d5b6043bc573?q=80&w=2070"
      ]
    },
    { 
      id: "2",
      title: "Tambour Media Wall", 
      loc: "Rotterdam, NL", 
      category: "Wandmeubel",
      img: "https://images.unsplash.com/photo-1615873968403-89e068628265?q=80&w=2000&auto=format&fit=crop",
      description: "Dit zwevende meubel in Amerikaans Notenhout dient als het visuele anker van de woonkamer.",
      gallery: [
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000",
        "https://images.unsplash.com/photo-1507652313519-d4c9174996dd?q=80&w=2070"
      ]
    },
    { 
      id: "3",
      title: "Minimalist Vanity", 
      loc: "Utrecht, NL", 
      category: "Badkamer",
      img: "https://images.unsplash.com/photo-1620626011761-9963d7521477?q=80&w=2070&auto=format&fit=crop",
      description: "Een oase van rust gecreëerd door gerookt eiken. Het meubel vloeit naadloos over in de architectuur.",
      gallery: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
        "https://images.unsplash.com/photo-1507652313519-d4c9174996dd?q=80&w=2070"
      ]
    },
    { 
      id: "4",
      title: "The Library Wall", 
      loc: "Antwerpen, BE", 
      category: "Totaal Interieur",
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070&auto=format&fit=crop",
      description: "Van vloer tot plafond, deze bibliotheekwand integreert een verborgen werkplek.",
      gallery: [
        "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070",
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl mb-6 font-serif italic text-[#F7F5F0]">Realisaties</h1>
          <p className="text-[#F7F5F0]/60 text-xl font-light">Unieke interieurs, met trots gemaakt.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p) => (
            <div 
              key={p.id} 
              onClick={() => setSelectedProject(p)}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#4A3728]/20 relative">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl mb-1 font-serif text-[#F7F5F0]">{p.title}</h3>
                  <p className="text-[#F7F5F0]/50 text-sm uppercase tracking-widest">{p.loc}</p>
                </div>
                <Maximize2 size={18} className="text-[#8F9779] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#2C221C] border border-[#8F9779]/20 shadow-2xl overflow-y-auto rounded-sm">
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-8 right-8 z-[110] text-white bg-black/40 p-2 rounded-full hover:bg-[#8F9779] transition-colors"
            >
              <X size={28} />
            </button>

            <div className="p-8 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:sticky lg:top-0 h-fit space-y-8">
                  <span className="uppercase tracking-[0.3em] text-[#8F9779] text-xs font-bold block">{selectedProject.loc}</span>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">{selectedProject.title}</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                  <div className="pt-8 border-t border-[#8F9779]/20">
                    <Link 
                      to="/contact" 
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs hover:text-[#8F9779] transition-colors"
                    >
                      Start een gesprek over dit project <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-8">
                  <img src={selectedProject.img} alt="Hoofdbeeld" className="w-full h-auto shadow-2xl" />
                  {selectedProject.gallery.map((img, i) => (
                    <img key={i} src={img} alt={`Detail ${i}`} className="w-full h-auto shadow-2xl" />
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