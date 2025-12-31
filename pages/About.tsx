import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <span className="uppercase tracking-[0.3em] text-[#8F9779] text-xs font-bold mb-4 block">About us</span>
          <h1 className="text-5xl md:text-7xl mb-12 max-w-4xl font-serif text-[#F7F5F0]">Driven by a passion for wood.</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-32">
          <div className="aspect-[4/5] overflow-hidden bg-[#4A3728]">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/595d4778be6594bb746dd8ca/7cbb9564-aac9-4d40-b715-d78aaa859d2c/interiorbythijs-lovingwoodz-luxehouteninterieurs.jpg?format=750w" 
              alt="Artisan Woodworking Workshop" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8 py-8">
            <h2 className="text-3xl italic font-serif text-[#F7F5F0]">A Legacy of Craft</h2>
            <p className="text-[#F7F5F0]/70 text-lg leading-relaxed font-light">
               Het begon ooit in het schuurtje naast mijn ouderlijke huis. Tussen het stof en wat oud gereedschap maakte ik vroeger al mijn eerste projectjes. Geen grote plannen, maar altijd nieuwsgierig. Daar heb ik geleerd hoe iets eenvoudigs als hout karakter krijgt als je het met aandacht maakt. 
 
  Ik ontdekte al vroeg mijn ambitie om dingen te bedenken en te ontwerpen. In mijn eerste opleiding Bouwkunde leerde ik vervolgens alles over de samenhang tussen ontwerp en maken. Daar kregen mijn ideeën verder vorm en mijn ontwerpen werden tastbaar. Die mix van ontwerpen en maken is wie ik ben en vormt ook het creatieve hart van lovingwoodz. 
            </p>
            <p className="text-[#F7F5F0]/70 text-lg leading-relaxed font-light">
              Interieurs hebben voor mij altijd iets speciaals gehad. Het is het gevoel dat je krijgt als je ergens binnenloopt. Het gevoel dat je iets unieks ervaart. Dat gevoel ontwerp ik. In mijn stijl vind je warme en tijdloze elementen terug, verrijkt met ambachtelijke details. Dat wordt gemaakt in eigen beheer en met eigen handen. Ik geloof in hout, niet alleen omdat het mooi is maar omdat het leeft, het verbindt, het vertelt verhalen. Dat gebruiken we om interieurs te maken die echt iets voor je doen. Wij maken interieurs voor de mooiste momenten in je leven.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-[#8F9779]/30">
              <div>
                <h4 className="font-bold text-3xl mb-1 text-[#F7F5F0]">14+</h4>
                <p className="text-[#F7F5F0]/50 text-sm uppercase tracking-widest">Jaar ervaring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;