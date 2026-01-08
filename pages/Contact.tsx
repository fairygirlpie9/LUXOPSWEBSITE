import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-lux-black min-h-screen py-24">
       <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             
             {/* Info */}
             <div>
                <h1 className="text-6xl font-bold text-white mb-8 font-oswald uppercase leading-none">INITIATE <br/> CONTACT</h1>
                <p className="text-xl text-lux-dim mb-12 leading-relaxed">
                   Ready to transform your operations data into a competitive advantage? 
                   Our engineering team reviews all inquiries to ensure we are the right fit for your mission-critical objectives.
                </p>

                <div className="space-y-8 mb-16">
                   <div className="flex items-start">
                      <div className="bg-lux-green/10 p-4 rounded border border-lux-green/20 mr-6">
                         <Mail className="w-6 h-6 text-lux-green" />
                      </div>
                      <div>
                         <h3 className="text-white font-bold mb-1 font-oswald uppercase text-xl">Email</h3>
                         <p className="text-lux-dim font-mono">hello@lux-ops.com</p>
                         <p className="text-lux-dim text-sm mt-2">Response time: ~4 hours (Enterprise)</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <div className="bg-lux-green/10 p-4 rounded border border-lux-green/20 mr-6">
                         <MapPin className="w-6 h-6 text-lux-green" />
                      </div>
                      <div>
                         <h3 className="text-white font-bold mb-1 font-oswald uppercase text-xl">HQ</h3>
                         <p className="text-lux-dim font-mono">London, United Kingdom</p>
                         <p className="text-lux-dim text-sm mt-2">Global Remote Operations</p>
                      </div>
                   </div>
                </div>

                <div className="p-8 border border-white/10 rounded-lg bg-white/5">
                   <h4 className="text-lux-green font-bold font-oswald uppercase mb-4">Before you request:</h4>
                   <ul className="space-y-2 text-lux-dim text-sm font-mono list-disc list-inside">
                      <li>We do not offer free trials for custom builds.</li>
                      <li>Minimum engagement starts at $25,000.</li>
                      <li>Please have your data sources identified (API, CSV, SQL).</li>
                   </ul>
                </div>
             </div>

             {/* Detailed Form */}
             <div className="bg-lux-dark border border-white/10 p-8 md:p-10 rounded-xl shadow-2xl">
                <form 
                  name="contact" 
                  method="post" 
                  data-netlify="true" 
                  className="space-y-6"
                >
                   <input type="hidden" name="form-name" value="contact" />

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-lux-dim text-xs font-bold font-mono mb-2 uppercase tracking-wider">First Name *</label>
                         <input type="text" name="firstName" required className="w-full bg-lux-black border border-white/10 p-4 text-white rounded focus:border-lux-green focus:outline-none transition-colors" placeholder="Jane" />
                      </div>
                      <div>
                         <label className="block text-lux-dim text-xs font-bold font-mono mb-2 uppercase tracking-wider">Last Name *</label>
                         <input type="text" name="lastName" required className="w-full bg-lux-black border border-white/10 p-4 text-white rounded focus:border-lux-green focus:outline-none transition-colors" placeholder="Doe" />
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lux-dim text-xs font-bold font-mono mb-2 uppercase tracking-wider">Work Email *</label>
                        <input type="email" name="email" required className="w-full bg-lux-black border border-white/10 p-4 text-white rounded focus:border-lux-green focus:outline-none transition-colors" placeholder="jane@company.com" />
                      </div>
                      <div>
                        <label className="block text-lux-dim text-xs font-bold font-mono mb-2 uppercase tracking-wider">Phone Number</label>
                        <input type="tel" name="phone" className="w-full bg-lux-black border border-white/10 p-4 text-white rounded focus:border-lux-green focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-lux-dim text-xs font-bold font-mono mb-2 uppercase tracking-wider">Company Name *</label>
                         <input type="text" name="company" required className="w-full bg-lux-black border border-white/10 p-4 text-white rounded focus:border-lux-green focus:outline-none transition-colors" />
                      </div>
                      <div>
                         <label className="block text-lux-dim text-xs font-bold font-mono mb-2 uppercase tracking-wider">Job Title</label>
                         <input type="text" name="jobTitle" className="w-full bg-lux-black border border-white/10 p-4 text-white rounded focus:border-lux-green focus:outline-none transition-colors" />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lux-dim text-xs font-bold font-mono mb-2 uppercase tracking-wider">Industry Sector *</label>
                        <select name="industry" required className="w-full bg-lux-black border border-white/10 p-4 text-white rounded focus:border-lux-green focus:outline-none transition-colors appearance-none">
                           <option value="Motorsports">Motorsports</option>
                           <option value="Drone / Aerial Systems">Drone / Aerial Systems</option>
                           <option value="Fleet Logistics">Fleet Logistics</option>
                           <option value="Energy / Utilities">Energy / Utilities</option>
                           <option value="Residential">Residential</option>
                           <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-lux-dim text-xs font-bold font-mono mb-2 uppercase tracking-wider">Estimated Budget *</label>
                        <select name="budget" required className="w-full bg-lux-black border border-white/10 p-4 text-white rounded focus:border-lux-green focus:outline-none transition-colors appearance-none">
                           <option value="">Select Range...</option>
                           <option value="$25k - $50k">$25k - $50k</option>
                           <option value="$50k - $100k">$50k - $100k</option>
                           <option value="$100k+">$100k+</option>
                           <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                   </div>
                   
                   <div>
                      <label className="block text-lux-dim text-xs font-bold font-mono mb-2 uppercase tracking-wider">Target Timeline</label>
                      <select name="timeline" className="w-full bg-lux-black border border-white/10 p-4 text-white rounded focus:border-lux-green focus:outline-none transition-colors appearance-none">
                         <option value="ASAP (Rush)">ASAP (Rush)</option>
                         <option value="1-3 Months">1-3 Months</option>
                         <option value="3-6 Months">3-6 Months</option>
                         <option value="Exploratory">Exploratory</option>
                      </select>
                   </div>

                   <div>
                      <label className="block text-lux-dim text-xs font-bold font-mono mb-2 uppercase tracking-wider">Project Requirements & Data Sources *</label>
                      <textarea name="message" required rows={5} className="w-full bg-lux-black border border-white/10 p-4 text-white rounded focus:border-lux-green focus:outline-none transition-colors" placeholder="Describe your operational challenge. What data do you have available?"></textarea>
                   </div>

                   <button type="submit" className="w-full bg-lux-green text-black font-bold py-5 rounded hover:bg-white transition-colors font-oswald uppercase tracking-widest text-lg mt-4">
                      Submit Inquiry
                   </button>
                </form>
             </div>

          </div>
       </div>
    </div>
  );
};