import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, ChevronDown } from 'lucide-react';
import { INDUSTRIES } from '../data';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesHovered, setIsIndustriesHovered] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  const navLinks = [
    { name: 'Residential', path: '/residential' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'text-lux-green' : 'text-white hover:text-lux-green';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-lux-black text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-lux-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <Hexagon className="h-8 w-8 text-lux-green group-hover:rotate-90 transition-transform duration-500" strokeWidth={2.5} />
              <span className="text-2xl font-bold tracking-wider font-oswald">LUX OPS</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center h-full">
              {/* Industries Dropdown */}
              <div 
                className="relative h-full flex items-center group"
                onMouseEnter={() => setIsIndustriesHovered(true)}
                onMouseLeave={() => setIsIndustriesHovered(false)}
              >
                <Link
                  to="/industries"
                  className={`text-sm font-medium tracking-wide transition-colors font-oswald uppercase flex items-center ${isActive('/industries')}`}
                >
                  Industries <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform" />
                </Link>
                
                {/* Dropdown Content */}
                <div 
                  className={`absolute top-full left-0 w-64 bg-lux-black border border-white/10 shadow-2xl transition-all duration-200 ease-in-out transform origin-top ${isIndustriesHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                >
                  <div className="py-2">
                    {INDUSTRIES.map((ind) => (
                      <Link
                        key={ind.id}
                        to={`/industries?sector=${ind.id}`}
                        className="block px-6 py-3 text-sm text-lux-dim hover:text-lux-green hover:bg-white/5 transition-colors font-oswald uppercase"
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors font-oswald uppercase ${isActive(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-lux-green text-black px-5 py-2 rounded-sm text-sm font-bold tracking-wide hover:bg-white transition-colors font-oswald uppercase"
              >
                SCHEDULE DEMO
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-lux-green"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-lux-black border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="px-3 py-2">
                <span className="block text-sm font-bold text-lux-green mb-2 font-oswald uppercase">INDUSTRIES</span>
                <div className="pl-4 space-y-2 border-l border-white/10">
                   {INDUSTRIES.map((ind) => (
                      <Link
                        key={ind.id}
                        to={`/industries?sector=${ind.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm text-gray-300 hover:text-white"
                      >
                        {ind.name}
                      </Link>
                   ))}
                </div>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-lux-green font-oswald uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center mt-4 bg-lux-green text-black px-5 py-3 font-bold font-oswald uppercase"
              >
                SCHEDULE DEMO
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-lux-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hexagon className="h-6 w-6 text-lux-dim" />
                <span className="text-lg font-bold text-lux-dim font-oswald">LUX OPS SYSTEMS // EST. 2025</span>
              </div>
              <p className="text-lux-dim text-sm max-w-xs font-sans">
                Real-time intelligence for mission-critical operations.
                London, UK.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4 font-oswald text-sm uppercase tracking-wider">PLATFORM</h4>
                <ul className="space-y-2 text-sm text-lux-dim">
                  <li><Link to="/industries" className="hover:text-lux-green">Industries</Link></li>
                  <li><Link to="/residential" className="hover:text-lux-green">Residential</Link></li>
                  <li><Link to="/pricing" className="hover:text-lux-green">Pricing</Link></li>
                  <li><Link to="/blog" className="hover:text-lux-green">Engineering Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 font-oswald text-sm uppercase tracking-wider">COMPANY</h4>
                <ul className="space-y-2 text-sm text-lux-dim">
                  <li><Link to="/about" className="hover:text-lux-green">About</Link></li>
                  <li><Link to="/contact" className="hover:text-lux-green">Contact</Link></li>
                  <li><a href="#" className="hover:text-lux-green">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="text-right">
               <div className="h-6 flex items-center justify-end text-lux-dim text-xs uppercase tracking-widest font-sans">
                 © 2025 LUX OPS.
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};