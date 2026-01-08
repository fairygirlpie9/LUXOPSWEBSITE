import React from 'react';
import { CheckCircle, Plus } from 'lucide-react';
import { PRICING_TIERS, RETAINER_TIERS } from '../data';
import { Link } from 'react-router-dom';

export const PricingSection: React.FC = () => {
  return (
    <div className="w-full">
      {/* Main Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
        {PRICING_TIERS.map((tier) => (
          <div 
            key={tier.name}
            className={`relative flex flex-col p-12 transition-all duration-300 bg-lux-black ${
              tier.recommended 
                ? 'border-2 border-lux-green' 
                : 'border border-zinc-800'
            }`}
          >
            {tier.recommended && (
              <div className="absolute top-0 right-0 bg-lux-green text-black px-6 py-2 text-sm font-bold tracking-wider uppercase font-oswald">
                POPULAR
              </div>
            )}

            <div className="mb-10">
              <h3 className={`text-4xl font-oswald font-bold uppercase mb-6 ${tier.recommended ? 'text-lux-green' : 'text-white'}`}>
                {tier.name}
              </h3>
              
              <div className="flex flex-col items-start mb-4">
                {tier.pricePrefix && (
                   <span className="text-gray-400 font-mono text-sm uppercase tracking-wider mb-1">{tier.pricePrefix}</span>
                )}
                <div className="flex items-baseline">
                  <span className="text-5xl md:text-6xl font-bold text-white font-mono tracking-tighter">{tier.price}</span>
                  {tier.priceSuffix && (
                     <span className="text-gray-500 ml-3 font-mono text-sm uppercase">{tier.priceSuffix}</span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-400 font-mono text-lg mt-4">
                  {tier.description}
              </p>
            </div>

            <div className="flex-grow">
               <ul className="space-y-4 mb-12">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className={`w-5 h-5 mr-4 flex-shrink-0 ${tier.recommended ? 'text-lux-green' : 'text-lux-green'}`} strokeWidth={2} />
                    <span className="text-white font-mono text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link
                to="/contact"
                className={`block w-full py-5 text-center font-bold tracking-widest uppercase font-oswald text-lg mb-8 transition-transform hover:-translate-y-1 ${
                  tier.recommended
                    ? 'bg-lux-green text-black'
                    : 'bg-white text-black'
                }`}
              >
                {tier.cta}
              </Link>
              
              <div className="border-t border-white/10 pt-6">
                 <span className="block text-gray-500 font-mono text-xs uppercase mb-2">BEST FOR:</span>
                 <p className="text-gray-400 font-mono text-sm leading-relaxed">{tier.bestFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Retainer Info Footer */}
      <div className="max-w-5xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-oswald uppercase tracking-wide mb-4">
              OPTIONAL MONTHLY RETAINERS
            </h2>
            <p className="text-lux-dim text-lg font-mono">
              Post-launch support packages to keep your operations running at peak efficiency.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RETAINER_TIERS.map((retainer) => (
              <div key={retainer.name} className="border border-white/10 bg-lux-dark p-8 rounded-lg hover:border-lux-green/30 transition-colors">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white font-oswald uppercase mb-1">{retainer.name}</h3>
                      <p className="text-lux-dim text-sm font-mono">{retainer.description}</p>
                    </div>
                    <div className="text-right">
                       <div className="text-2xl font-bold text-lux-green font-mono">{retainer.price}</div>
                       <div className="text-xs text-gray-500 font-mono">{retainer.period}</div>
                    </div>
                 </div>
                 <ul className="space-y-3">
                    {retainer.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300 font-mono">
                         <Plus className="w-3 h-3 text-lux-green mr-3" />
                         {feat}
                      </li>
                    ))}
                 </ul>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};