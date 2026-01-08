import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Hexagon, Play } from 'lucide-react';
import { INDUSTRIES } from '../data';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5 bg-lux-black">
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-6 leading-none text-white font-oswald uppercase">
            TURN COMPLEX <br />
            DATA INTO <br />
            CLEAR DECISIONS
          </h1>

          <p className="text-xl md:text-2xl text-lux-dim max-w-3xl mx-auto mb-12 font-light">
            Real-time operations intelligence trusted by racing teams, fleet operators, and residential estates.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/industries" className="bg-lux-green text-black px-8 py-4 text-lg font-bold tracking-wide hover:bg-white transition-all flex items-center justify-center group font-oswald uppercase">
              VIEW LIVE DEMOS
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <Link to="/blog/toyota-gr-racing-dashboard" className="mt-20 flex items-center justify-center space-x-3 text-lux-green border border-lux-green/30 bg-lux-green/10 py-4 px-10 rounded-xl inline-flex mx-auto transform hover:scale-105 transition-transform duration-300">
             <Trophy className="w-8 h-8" strokeWidth={1.5} />
             <span className="font-mono text-xl uppercase font-bold tracking-wide">Award-Winner: Toyota GR Racing Analytics</span>
          </Link>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-24 bg-lux-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2 font-oswald uppercase">INTELLIGENCE MADE VISIBLE</h2>
              <p className="text-lux-dim font-mono">Select industry sector to deploy</p>
            </div>
            <Link to="/industries" className="hidden md:flex items-center text-lux-green hover:text-white transition-colors font-mono">
              ALL SECTORS <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INDUSTRIES.filter(ind => ind.id !== 'custom').map((ind) => (
              <Link to={`/industries?sector=${ind.id}`} key={ind.id} className="group block relative overflow-hidden border border-white/10 hover:border-lux-green/50 transition-colors bg-lux-dark rounded-lg">
                <div className="h-64 overflow-hidden relative bg-black">
                   {/* Live Demo Preview via Iframe */}
                   <div className="absolute inset-0 pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                      {/* Scaling the iframe to fit the card while showing a larger viewport view */}
                      <iframe 
                        src={ind.demoUrl} 
                        className="w-[200%] h-[200%] transform scale-50 origin-top-left border-0"
                        title={`${ind.name} Preview`}
                        tabIndex={-1}
                      />
                   </div>
                   
                   {/* Overlay Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-lux-dark via-transparent to-transparent opacity-90"></div>
                   
                   {/* Play Button Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-lux-green text-black rounded-full p-4 shadow-[0_0_20px_rgba(204,255,0,0.5)] transform scale-75 group-hover:scale-100 transition-transform">
                        <Play className="w-8 h-8 fill-current" />
                      </div>
                   </div>
                </div>
                
                <div className="p-8 relative z-10 -mt-10">
                  <div className="flex items-center justify-between mb-4">
                     <Hexagon className="text-lux-green w-8 h-8 bg-lux-black rounded-full" strokeWidth={1.5} fill="#050505" />
                     <ArrowRight className="text-white w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-oswald uppercase">{ind.name}</h3>
                  <p className="text-lux-dim text-sm font-mono border-l-2 border-lux-green pl-3">{ind.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Quote */}
      <section className="py-24 border-y border-white/10 bg-lux-dark">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed text-white mb-8 font-oswald uppercase">
              "We needed a way to make faster pit strategy decisions. Lux Ops delivered a dashboard that showed us exactly what to do, exactly when to do it."
            </blockquote>
            <cite className="text-lux-green font-mono not-italic uppercase tracking-widest">Toyota Gazoo Racing Team</cite>
         </div>
      </section>
    </div>
  );
};