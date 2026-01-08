import React from 'react';
import { Link } from 'react-router-dom';
import { PricingSection } from '../components/PricingSection';

export const Pricing: React.FC = () => {
  return (
    <div className="bg-lux-black min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Industry Section Header */}
        <div className="text-center mb-16">
           <h1 className="text-5xl md:text-6xl font-bold text-white font-oswald uppercase mb-4">
             Industry Pricing
           </h1>
           <p className="text-lux-dim text-lg font-mono">
             Standard packages for commercial operations and fleets.
           </p>
        </div>

        <PricingSection />

        {/* Residential Pricing Section */}
        <div className="max-w-5xl mx-auto mt-32 border-t border-white/10 pt-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-oswald uppercase tracking-wide mb-8">
              Residential Pricing
            </h2>
            <div className="border border-white/10 bg-lux-dark p-8 rounded-lg hover:border-lux-green/30 transition-colors mx-auto max-w-4xl">
               <p className="text-xl md:text-2xl font-mono text-white leading-relaxed mb-8 max-w-3xl mx-auto">
                  Investment Range: £35K–£150K initial setup, with ongoing monitoring from £500–£3,500/month
               </p>
               <Link to="/contact" className="inline-block bg-lux-green text-black px-8 py-3 font-bold tracking-widest uppercase font-oswald hover:bg-white transition-colors rounded-sm text-base">
                  Get a Custom Quote
               </Link>
            </div>
        </div>

      </div>
    </div>
  );
};