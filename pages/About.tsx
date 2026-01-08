import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-lux-black min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-12 font-oswald uppercase">ABOUT LUX OPS</h1>
        
        <div className="max-w-none">
          <p className="text-2xl text-lux-green font-light mb-8 leading-relaxed font-sans">
            Founded in 2025, Lux Ops was born from a simple observation: decision-makers are drowning in data but starving for clarity.
          </p>
          
          <p className="text-lux-dim mb-6 text-lg font-sans leading-relaxed">
            Traditional dashboards like Grafana and Tableau show you the data. But they don't tell you what to do with it. We built Lux Ops to bridge that gap combining beautiful, movie-grade UI design with intelligent decision engines.
          </p>

          <h3 className="text-white font-bold text-2xl mt-12 mb-4 font-oswald uppercase">Our Mission</h3>
          <div className="border-l-4 border-lux-green pl-6 py-2 bg-white/5 rounded-r-lg mb-8">
            <p className="text-white text-xl italic font-sans">
              "Build dashboards that don't just show data they show decisions."
            </p>
          </div>

          <h3 className="text-white font-bold text-2xl mt-12 mb-4 font-oswald uppercase">We Believe</h3>
          <ul className="space-y-4 list-none pl-0">
             <li className="flex items-center text-lux-dim font-sans text-lg">
               <span className="w-2 h-2 bg-lux-green rounded-full mr-4"></span>
               Beautiful design isn't optional it's essential for fast decision-making.
             </li>
             <li className="flex items-center text-lux-dim font-sans text-lg">
               <span className="w-2 h-2 bg-lux-green rounded-full mr-4"></span>
               AI should recommend actions, not just analyze past data.
             </li>
             <li className="flex items-center text-lux-dim font-sans text-lg">
               <span className="w-2 h-2 bg-lux-green rounded-full mr-4"></span>
               Two weeks is enough time to transform operations.
             </li>
          </ul>
        </div>
      </div>
    </div>
  );
};