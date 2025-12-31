import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C3E30]/90 backdrop-blur-md text-[#F7F5F0]/60 py-20 px-6 border-t border-[#8F9779]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <h2 className="text-[#F7F5F0] text-3xl font-serif mb-6">Lovingwoodz</h2>
          <p className="max-w-sm mb-8 leading-relaxed text-sm">
            Interieurs voor de mooiste momenten in je leven. Ambachtelijk vakmanschap en de trots van maatwerk.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/lovingwoodz/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8F9779] transition-colors text-[#F7F5F0]">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[#F7F5F0] uppercase tracking-widest text-xs mb-6 font-bold">Studio & Werkplaats</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-[#F7F5F0]">
              <MapPin size={16} className="mt-1 flex-shrink-0 text-[#8F9779]" /> 
              <span>Nijverheidsweg 24<br/>6163 BZ, Geleen</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="flex-shrink-0 text-[#8F9779]" /> 
              <a href="tel:+31645066847" className="hover:text-[#F7F5F0] transition-colors">+31 6 45066847 (Thijs)</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="flex-shrink-0 text-[#8F9779]" /> 
              <a href="mailto:info@lovingwoodz.com" className="hover:text-[#F7F5F0] transition-colors">info@lovingwoodz.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#F7F5F0] uppercase tracking-widest text-xs mb-6 font-bold">Openingstijden</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Clock size={16} className="mt-1 flex-shrink-0 text-[#8F9779]" />
              <span>Ma t/m vr: 08:00 - 16:30</span>
            </li>
            <li className="pt-2 italic text-xs leading-relaxed text-[#F7F5F0]/40">
              Wil je graag langskomen? Maak dan vooraf even een afspraak zodat we zeker weten dat we je goed kunnen ontvangen.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#F7F5F0] uppercase tracking-widest text-xs mb-6 font-bold">Navigatie</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-[#8F9779] transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#8F9779] transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#8F9779] transition-colors">Portfolio</Link></li>
            <li><Link to="/materials" className="hover:text-[#8F9779] transition-colors">Materialen</Link></li>
            <li><Link to="/contact" className="hover:text-[#8F9779] transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#F7F5F0]/10 text-xs flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Lovingwoodz. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#F7F5F0] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#F7F5F0] transition-colors">Algemene Voorwaarden</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;