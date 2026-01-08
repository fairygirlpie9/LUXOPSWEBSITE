import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Monitor, Hexagon } from 'lucide-react';
import { INDUSTRIES } from '../data';
import { IndustryData } from '../types';
import { PricingSection } from '../components/PricingSection';

export const Industries: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeIndustry, setActiveIndustry] = useState<IndustryData>(INDUSTRIES[0]);

  // Sync state with URL param
  useEffect(() => {
    const sector = searchParams.get('sector');
    if (sector) {
      const found = INDUSTRIES.find(i => i.id === sector);
      if (found) setActiveIndustry(found);
    } else {
      // Default to motorsports if none selected
      setActiveIndustry(INDUSTRIES[0]);
    }
    // Force scroll to top when industry changes
    window.scrollTo(0, 0);
  }, [searchParams]);

  const handleTabChange = (id: string) => {
    setSearchParams({ sector: id });
  };

  return (
    <div className="min-h-screen bg-lux-black pt-8">
      
      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap border-b border-white/10">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => handleTabChange(ind.id)}
              className={`mr-8 pb-4 text-sm font-bold tracking-widest uppercase transition-all relative font-oswald ${
                activeIndustry.id === ind.id 
                  ? 'text-lux-green' 
                  : 'text-lux-dim hover:text-white'
              }`}
            >
              {ind.name}
              {activeIndustry.id === ind.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lux-green shadow-[0_0_10px_rgba(204,255,0,0.5)]"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Embedded Demo Area */}
      <div className="w-full bg-lux-dark border-y border-white/10 relative group">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative w-full h-[80vh]">
            
            {activeIndustry.id !== 'custom' ? (
              <>
                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <span className="bg-lux-black/80 backdrop-blur text-lux-green border border-lux-green/30 px-3 py-1 text-xs font-mono rounded flex items-center">
                     <Monitor className="w-3 h-3 mr-2" /> LIVE DEMO INTERFACE
                  </span>
                </div>
                <iframe
                  key={activeIndustry.demoUrl} // Force reload on change
                  src={activeIndustry.demoUrl}
                  title={`${activeIndustry.name} Demo`}
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-lux-black relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={activeIndustry.imageUrl} 
                    alt="Custom Solution Architecture" 
                    className="w-full h-full object-cover opacity-30 blur-[2px]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lux-black via-lux-black/70 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center p-6 text-center">
                  <Hexagon className="w-24 h-24 text-lux-green mb-8 animate-pulse" strokeWidth={1} />
                  <h3 className="text-4xl font-oswald uppercase text-white mb-4">Architecture Mode</h3>
                  <p className="text-lux-dim max-w-lg text-center mb-8">
                    Custom solutions require secure access authorization. 
                    Contact our engineering team to architect your dedicated environment.
                  </p>
                  <Link to="/contact" className="bg-lux-green text-black px-8 py-3 font-bold uppercase tracking-wide hover:bg-white transition-colors font-oswald">
                    Initiate Consult
                  </Link>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
             <h4 className="text-lux-green font-mono text-sm mb-4 uppercase tracking-wider">
               // {activeIndustry.tagline}
             </h4>
             <h1 className="text-5xl font-bold text-white mb-6 font-oswald uppercase">
               {activeIndustry.name}
             </h1>
             <p className="text-xl text-lux-dim mb-10 leading-relaxed border-l-2 border-white/10 pl-6">
               {activeIndustry.description}
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
               {activeIndustry.features.map((feature, idx) => (
                 <div key={idx} className="flex items-center space-x-3 bg-white/5 p-4 rounded border border-white/5">
                   <CheckCircle className="text-lux-green w-5 h-5 flex-shrink-0" />
                   <span className="text-white font-medium text-sm">{feature}</span>
                 </div>
               ))}
             </div>
             
             <Link to="/contact" className="inline-block bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-lux-green transition-colors font-oswald uppercase">
               DEPLOY FOR YOUR TEAM
             </Link>
          </div>

          {/* Static Image / Context */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-lux-green/20 to-transparent rounded-lg transform translate-x-4 translate-y-4 border border-lux-green/30"></div>
             <img 
              src={activeIndustry.imageUrl} 
              alt={activeIndustry.name} 
              className="relative w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
             />
             <div className="absolute bottom-8 left-8 bg-lux-black/90 p-4 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-lux-dim font-mono mb-1">LATENCY</div>
                <div className="text-2xl text-lux-green font-mono font-bold">12ms</div>
             </div>
          </div>

        </div>
      </div>

      {/* Pricing Section */}
      <div className="border-t border-white/10 py-24 bg-lux-black">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-5xl font-bold text-white font-oswald uppercase mb-16 text-center">
             Deployment Packages
           </h2>
           <PricingSection />
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-white/10 bg-lux-dark py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-5xl font-bold text-white font-oswald uppercase mb-6">
             Ready to deploy {activeIndustry.name} Intelligence?
           </h2>
           <p className="text-xl text-lux-dim mb-10 font-sans max-w-2xl mx-auto">
             Stop guessing. Start knowing. Schedule a technical consultation to see how Lux Ops can transform your efficiency.
           </p>
           <Link to="/contact" className="inline-block bg-lux-green text-black px-10 py-5 font-bold tracking-widest uppercase font-oswald text-lg hover:bg-white transition-colors rounded-sm">
             Schedule Strategy Call
           </Link>
        </div>
      </div>
    </div>
  );
};