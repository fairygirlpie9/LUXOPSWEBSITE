import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Home, Users, Thermometer, ShieldCheck, Database, Smartphone, Lock, Monitor } from 'lucide-react';

export const Residential: React.FC = () => {
  return (
    <div className="bg-lux-black min-h-screen">
      {/* Hero */}
      <div className="relative py-24 border-b border-white/10 bg-gradient-to-b from-lux-dark to-lux-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block border border-lux-green/30 px-4 py-1 rounded text-lux-green font-sans text-xs mb-6 uppercase tracking-widest">
            Private Client Services
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-oswald uppercase">
            Residential Estate Management
          </h1>
          <p className="text-xl md:text-2xl text-lux-dim max-w-3xl mx-auto font-light leading-relaxed font-sans">
            Protecting what matters most, from climate-controlled wine cellars to family security.
          </p>
        </div>
      </div>

      {/* Dashboard Embed */}
      <div className="w-full bg-lux-dark border-b border-white/10 relative group">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative w-full h-[80vh]">
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="bg-lux-black/80 backdrop-blur text-lux-green border border-lux-green/30 px-3 py-1 text-xs font-mono rounded flex items-center">
                 <Monitor className="w-3 h-3 mr-2" /> LIVE RESIDENTIAL INTERFACE
              </span>
            </div>
            <iframe
              src="https://majordomoresidential.netlify.app/"
              title="Residential Dashboard Demo"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Intro & Investment */}
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="bg-white/5 border border-white/10 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-white mb-4 font-oswald uppercase">Custom Integration</h3>
            <p className="text-lux-dim mb-6 leading-relaxed font-sans">
                Unlike our commercial dashboards, residential estate systems are bespoke installations tailored to your property portfolio. Pricing reflects the complexity of integration, custom hardware installation, and the white-glove service expected at this level.
            </p>
            <div className="border-t border-white/10 pt-6">
                <p className="text-lux-green font-bold font-sans text-lg">
                    Investment Range: £35K–£150K initial setup, with ongoing monitoring from £500–£3,500/month
                </p>
            </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-8 font-oswald uppercase">What influences your price:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="flex items-start">
                <Home className="w-6 h-6 text-lux-green mr-4 flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-white uppercase font-oswald text-sm">Property Portfolio Size</h4>
                    <p className="text-sm text-lux-dim font-sans mt-1">Monitoring 1 estate vs. 5+ properties globally.</p>
                </div>
            </div>
            <div className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-lux-green mr-4 flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-white uppercase font-oswald text-sm">Asset Protection Scope</h4>
                    <p className="text-sm text-lux-dim font-sans mt-1">Basic environmental monitoring vs. full RFID tracking for art collections and wine inventory.</p>
                </div>
            </div>
            <div className="flex items-start">
                <Thermometer className="w-6 h-6 text-lux-green mr-4 flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-white uppercase font-oswald text-sm">System Integration Depth</h4>
                    <p className="text-sm text-lux-dim font-sans mt-1">Read-only monitoring vs. active control of HVAC, security, and access systems.</p>
                </div>
            </div>
            <div className="flex items-start">
                <Users className="w-6 h-6 text-lux-green mr-4 flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-white uppercase font-oswald text-sm">Support Expectations</h4>
                    <p className="text-sm text-lux-dim font-sans mt-1">Standard business hours vs. 24/7 dedicated concierge.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Configurations */}
      <div className="bg-lux-dark border-y border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-16 font-oswald uppercase">Typical Configurations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Tier 1 */}
                <div className="border border-white/10 bg-lux-black p-8 rounded hover:border-lux-green/50 transition-colors flex flex-col">
                    <div className="mb-6">
                        <Smartphone className="w-10 h-10 text-lux-green mb-4" />
                        <h3 className="text-2xl font-bold text-white font-oswald uppercase mb-2">Single Estate Monitoring</h3>
                        <p className="text-lux-dim font-sans text-sm leading-relaxed min-h-[80px]">
                            Real-time environmental data, security integration, staff tracking, and mobile access across your primary residence.
                        </p>
                    </div>
                    <div className="mt-auto border-t border-white/10 pt-6">
                        <div className="text-xl font-bold text-white font-sans">From £35K</div>
                        <div className="text-sm text-lux-dim font-sans">+ £500/month</div>
                    </div>
                </div>

                {/* Tier 2 */}
                <div className="border-2 border-lux-green bg-lux-black p-8 rounded flex flex-col relative">
                     <div className="absolute top-0 right-0 bg-lux-green text-black px-4 py-1 text-xs font-bold font-oswald uppercase tracking-wider">
                        Popular
                    </div>
                    <div className="mb-6">
                        <Database className="w-10 h-10 text-lux-green mb-4" />
                        <h3 className="text-2xl font-bold text-white font-oswald uppercase mb-2">Multi-Property Command</h3>
                        <p className="text-lux-dim font-sans text-sm leading-relaxed min-h-[80px]">
                            Centralized control across your property portfolio with advanced automation, wine cellar management, and priority support.
                        </p>
                    </div>
                    <div className="mt-auto border-t border-white/10 pt-6">
                        <div className="text-xl font-bold text-white font-sans">From £75K</div>
                        <div className="text-sm text-lux-dim font-sans">+ £1,500/month</div>
                    </div>
                </div>

                {/* Tier 3 */}
                <div className="border border-white/10 bg-lux-black p-8 rounded hover:border-lux-green/50 transition-colors flex flex-col">
                    <div className="mb-6">
                        <Shield className="w-10 h-10 text-lux-green mb-4" />
                        <h3 className="text-2xl font-bold text-white font-oswald uppercase mb-2">Full Concierge Estate</h3>
                        <p className="text-lux-dim font-sans text-sm leading-relaxed min-h-[80px]">
                            Unlimited properties, predictive AI, custom RFID installations for high-value assets, dedicated account manager, and 24/7 emergency response.
                        </p>
                    </div>
                    <div className="mt-auto border-t border-white/10 pt-6">
                        <div className="text-xl font-bold text-white font-sans">From £150K</div>
                        <div className="text-sm text-lux-dim font-sans">+ £3,500/month</div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-20">
                <Link to="/contact" className="inline-flex items-center bg-lux-green text-black px-10 py-5 font-bold tracking-widest uppercase font-oswald text-lg hover:bg-white transition-colors rounded-sm">
                    Schedule a Confidential Consultation
                </Link>
                <div className="mt-10 flex items-start justify-center max-w-2xl mx-auto text-lux-dim text-sm font-sans space-x-3">
                    <Lock className="w-4 h-4 flex-shrink-0 mt-0.5 text-lux-dim/70" />
                    <span className="text-left">All systems include professional installation, ongoing software updates, secure data retention, and our commitment to protecting your privacy and assets.</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};