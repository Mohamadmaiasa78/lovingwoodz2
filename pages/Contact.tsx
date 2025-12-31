import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-24 px-6">
        <div className="text-center max-w-md bg-[#2C221C]/40 backdrop-blur-md p-12 rounded-sm border border-[#8F9779]/20">
          <CheckCircle className="mx-auto text-[#8F9779] mb-6" size={64} />
          <h1 className="text-4xl mb-4 text-[#F7F5F0]">Inquiry Received</h1>
          <p className="text-[#F7F5F0]/60 mb-8 leading-relaxed">
            Thank you for reaching out to Lovingwoodz. One of our lead designers will review your request and contact you within 48 hours to discuss your vision.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="uppercase tracking-widest text-sm font-bold border-b-2 border-[#F7F5F0] pb-1 text-[#F7F5F0]"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-6xl md:text-8xl mb-8 text-[#F7F5F0]">Start a Project.</h1>
            <p className="text-[#F7F5F0]/60 text-xl mb-12 max-w-md leading-relaxed">
              We welcome private commissions and architectural collaborations across the globe.
            </p>
            
            <div className="space-y-12">
              <div>
                <h3 className="uppercase tracking-widest text-xs font-bold text-[#8F9779] mb-4">Location</h3>
                <p className="text-2xl font-serif italic text-[#F7F5F0]">Nijverheidsweg 24,<br/>6163 BZ, Geleen, NL</p>
              </div>
              <div>
                <h3 className="uppercase tracking-widest text-xs font-bold text-[#8F9779] mb-4">General Enquiries</h3>
                <p className="text-2xl font-serif italic text-[#F7F5F0]">info@lovingwoodz.com<br/>+31 6 45066847</p>
              </div>
            </div>
          </div>

          <div className="bg-[#2C221C]/60 backdrop-blur-lg p-10 md:p-16 shadow-2xl border border-[#8F9779]/20">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#F7F5F0]/50">First Name</label>
                  <input required type="text" className="w-full border-b border-[#8F9779]/30 py-3 focus:border-[#F7F5F0] outline-none transition-colors text-[#F7F5F0] bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#F7F5F0]/50">Last Name</label>
                  <input required type="text" className="w-full border-b border-[#8F9779]/30 py-3 focus:border-[#F7F5F0] outline-none transition-colors text-[#F7F5F0] bg-transparent" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#F7F5F0]/50">Email Address</label>
                <input required type="email" className="w-full border-b border-[#8F9779]/30 py-3 focus:border-[#F7F5F0] outline-none transition-colors text-[#F7F5F0] bg-transparent" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#F7F5F0]/50">Interest</label>
                <select className="w-full border-b border-[#8F9779]/30 py-3 focus:border-[#F7F5F0] outline-none bg-transparent text-[#F7F5F0]">
                  <option className="bg-[#2C221C]">Bespoke Kitchen</option>
                  <option className="bg-[#2C221C]">Custom Furniture</option>
                  <option className="bg-[#2C221C]">Full Interior Solutions</option>
                  <option className="bg-[#2C221C]">Architectural Collaboration</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#F7F5F0]/50">Project Details</label>
                <textarea required rows={4} className="w-full border border-[#8F9779]/20 p-4 focus:border-[#F7F5F0] outline-none transition-colors resize-none text-[#F7F5F0] bg-transparent"></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#2C3E30] text-[#F7F5F0] py-6 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-bold hover:bg-[#8F9779] transition-colors shadow-lg"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}; export default Contact;