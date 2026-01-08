// --- DATA ---
const INDUSTRIES = [
    {
        id: 'motorsports',
        name: 'Motorsports',
        tagline: 'Track-side Intelligence',
        description: 'Optimize lap times, manage fuel strategy, and monitor vehicle health in milliseconds. Used by top-tier racing teams globally.',
        demoUrl: 'https://gr86strategy.netlify.app/',
        imageUrl: 'https://i.ibb.co/r20kTnvW/motorsports-lux-ops.jpg',
        features: ['Real-time Telemetry', 'Tire Degradation Models', 'Fuel Strategy AI', 'Driver Delta Analysis']
    },
    {
        id: 'fleets',
        name: 'Fleets',
        tagline: 'Global Logistics Visibility',
        description: 'Track assets, predict maintenance needs, and optimize delivery routes in real-time.',
        demoUrl: 'https://luxopsfleet.netlify.app/',
        imageUrl: 'https://i.ibb.co/7dx1fyD4/fleets-vans-lux-ops.jpg',
        features: ['Route Optimization', 'Maintenance Prediction', 'Fuel Efficiency', 'Driver Safety Score']
    },
    {
        id: 'aerial',
        name: 'Aerial',
        tagline: 'Drone & UAV Command',
        description: 'Coordinate drone swarms, monitor battery levels, and execute mission plans with precision.',
        demoUrl: 'https://luxopsaerial.netlify.app/',
        imageUrl: 'https://i.ibb.co/8gk7zPbw/drones-lux-ops.jpg',
        features: ['Swarm Coordination', 'Battery Management', 'Flight Path Visualization', 'Payload Monitoring']
    },
    {
        id: 'custom',
        name: 'Custom Solutions',
        tagline: 'Bespoke Operations Architecture',
        description: 'Tailored intelligence systems for unique operational challenges. From energy grids to maritime logistics, we build the interface your data deserves.',
        demoUrl: '',
        imageUrl: 'https://i.ibb.co/mF4qx9Hw/robots-lux-ops.jpg',
        features: ['Custom API Integration', 'Proprietary Models', 'On-prem Deployment', '24/7 War Room Support']
    }
];

const BLOG_POSTS = [
    {
        id: 'toyota-gr-racing-dashboard',
        title: 'How I designed the Toyota GR Racing Best In Realtime Analytics Dashboard',
        date: 'Wednesday 7th January 2025',
        image: 'https://i.ibb.co/SD0nVCv6/blog-toyota-lux-ops.jpg',
        excerpt: 'Transforming massive amounts of raw telemetry data into actionable intelligence for race engineers.',
        content: `
          <h3 class="text-xl font-bold text-lux-green mb-2 font-oswald uppercase">Inspiration</h3>
          <p class="mb-6">The project was primarily inspired by the critical need for race engineers to make instant, data-driven decisions in the high-pressure environment of a live race. I recognised that winning often depends on the speed and accuracy of strategic calls. My goal was to create a tool that transforms massive amounts of raw telemetry data into actionable intelligence, directly enhancing driver insights and team performance during race-day decision-making for the GR Cup Series.</p>
          <h3 class="text-xl font-bold text-lux-green mb-2 font-oswald uppercase">What it does</h3>
          <p class="mb-6">The GR Cup Real-Time Dashboard Simulator is a browser-based analytics and strategy tool designed for use by a race engineer on a tablet. It provides a real-time, visual experience of the race. It shows live standings and telemetry, while dynamically tracking all cars on the Barber Motorsports Park circuit, highlighting the selected car in red. The tool features a Strategy Impact panel displaying critical metrics like Tire Status and degradation, and competitor Gap Ahead/Behind. Most importantly, it uses AI to provide an immediate, data-driven recommendation (e.g., PUSH) and calculates the optimal Pit Stop window.</p>
          <h3 class="text-xl font-bold text-lux-green mb-2 font-oswald uppercase">How I built it</h3>
          <p class="mb-6">The dashboard was built using JavaScript and the three.js library for the visualisation and car movement. For data, I used the anonymised CSV files provided for the competition, including the Analysis Endurance and Weather data for Race 1, to simulate a live data feed. Creating the track layout involved tracing the Barber circuit on Google Maps, converting the file from KML to TXT, and then rendering it as an SVG to plot the animated car positions.</p>
          <div class="text-center mt-12 py-8 border-t border-white/10">
            <h3 class="text-3xl font-bold text-lux-green mb-8 font-oswald uppercase tracking-wide">Ready To Build Yours?</h3>
            <a href="contact.html" class="inline-block bg-lux-green text-black px-10 py-4 font-bold tracking-widest hover:bg-white transition-colors uppercase rounded-sm">Start Project</a>
          </div>
        `
    }
];

const PRICING_TIERS = [
    {
        name: 'PROFESSIONAL',
        price: '$25,000',
        priceSuffix: '/ ONE-TIME BUILD',
        description: 'Real-time intelligence for operational teams.',
        recommended: false,
        features: ['Up to 3 API sources', 'Up to 4 dashboard views', '15-20 AI rules', '10 user seats', 'Custom styling', '2-week deployment', '60 days support', 'Browser based', 'Optional Monthly Retainer'],
        cta: 'BOOK DEMO',
        bestFor: 'Single teams, Clear scope, Standard APIs'
    },
    {
        name: 'ENTERPRISE',
        price: '$60,000',
        pricePrefix: 'STARTING AT',
        description: 'Mission-critical command centers.',
        recommended: true,
        features: ['Unlimited APIs', 'Unlimited views', '30+ AI rules or ML', 'Unlimited users', 'Fully bespoke design', '1-2 week priority', '6 months support', 'White-label option', 'Dedicated account mgr', 'Optional Monthly Retainer'],
        cta: 'BOOK DEMO',
        bestFor: 'Mission-critical ops, Multi-location, Complex integrations'
    }
];

const RETAINER_TIERS = [
    {
        name: 'MAINTENANCE',
        price: '$2,500',
        period: '/ MONTH',
        description: 'Ensure your command center stays operational 24/7.',
        features: ['Server Health Monitoring', 'Security Patches & Updates', '48-hour Support SLA', 'Monthly Performance Report']
    },
    {
        name: 'GROWTH',
        price: '$5,000',
        period: '/ MONTH',
        description: 'Continuous evolution of your operational intelligence.',
        features: ['Everything in Maintenance', '10 Hours Dedicated Dev Time', 'Priority 4-hour Support SLA', 'Quarterly Strategy Review']
    }
];

// --- LAYOUT FUNCTIONS ---

function renderHeader() {
    const currentPath = window.location.pathname;
    const isIndustries = currentPath.includes('industries.html');
    const isResidential = currentPath.includes('residential.html');
    const isBlog = currentPath.includes('blog');
    const isAbout = currentPath.includes('about.html');
    const isContact = currentPath.includes('contact.html');
    
    // Helper for active class
    const getActiveClass = (isActive) => isActive ? 'text-lux-green' : 'text-white hover:text-lux-green';

    // Dropdown items only show the main 3 industries (Motorsports, Fleets, Aerial)
    const dropdownIndustries = INDUSTRIES.filter(ind => ind.id !== 'custom');

    return `
    <header class="sticky top-0 z-50 w-full bg-lux-black/90 backdrop-blur-md border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <a href="index.html" class="flex items-center space-x-3 group">
                    <i class="ph-bold ph-hexagon text-3xl text-lux-green group-hover:rotate-90 transition-transform duration-500"></i>
                    <span class="text-2xl font-bold tracking-wider font-oswald text-white">LUX OPS</span>
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex space-x-8 items-center h-full">
                    <div class="relative h-full flex items-center group cursor-pointer">
                        <a href="industries.html" class="text-sm font-medium tracking-wide transition-colors font-oswald uppercase flex items-center ${getActiveClass(isIndustries)}">
                            Industries <i class="ph-bold ph-caret-down ml-1 group-hover:rotate-180 transition-transform"></i>
                        </a>
                        <!-- Dropdown -->
                        <div class="absolute top-full left-0 w-64 bg-lux-black border border-white/10 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-in-out">
                            <div class="py-2">
                                ${dropdownIndustries.map(ind => `
                                    <a href="industries.html?sector=${ind.id}" class="block px-6 py-3 text-sm text-lux-dim hover:text-lux-green hover:bg-white/5 transition-colors font-oswald uppercase">
                                        ${ind.name}
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <a href="residential.html" class="text-sm font-medium tracking-wide transition-colors font-oswald uppercase ${getActiveClass(isResidential)}">Residential</a>
                    <a href="blog.html" class="text-sm font-medium tracking-wide transition-colors font-oswald uppercase ${getActiveClass(isBlog)}">Blog</a>
                    <a href="about.html" class="text-sm font-medium tracking-wide transition-colors font-oswald uppercase ${getActiveClass(isAbout)}">About</a>
                    <a href="contact.html" class="bg-lux-green text-black px-5 py-2 rounded-sm text-sm font-bold tracking-wide hover:bg-white transition-colors font-oswald uppercase">
                        Contact
                    </a>
                </nav>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button id="mobile-menu-btn" class="text-white hover:text-lux-green">
                        <i class="ph-bold ph-list text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile Nav (Hidden by default) -->
        <div id="mobile-menu" class="hidden md:hidden bg-lux-black border-b border-white/10">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                 <div class="px-3 py-2">
                    <span class="block text-sm font-bold text-lux-green mb-2 font-oswald uppercase">INDUSTRIES</span>
                    <div class="pl-4 space-y-2 border-l border-white/10">
                       ${dropdownIndustries.map(ind => `
                          <a href="industries.html?sector=${ind.id}" class="block text-sm text-gray-300 hover:text-white">${ind.name}</a>
                       `).join('')}
                    </div>
                 </div>
                 <a href="residential.html" class="block px-3 py-2 text-base font-medium text-white hover:text-lux-green font-oswald uppercase">Residential</a>
                 <a href="blog.html" class="block px-3 py-2 text-base font-medium text-white hover:text-lux-green font-oswald uppercase">Blog</a>
                 <a href="about.html" class="block px-3 py-2 text-base font-medium text-white hover:text-lux-green font-oswald uppercase">About</a>
                 <a href="contact.html" class="block w-full text-center mt-4 bg-lux-green text-black px-5 py-3 font-bold font-oswald uppercase">Contact</a>
            </div>
        </div>
    </header>
    `;
}

function renderFooter() {
    return `
    <footer class="bg-lux-black border-t border-white/10 pt-16 pb-8 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <i class="ph-bold ph-hexagon text-xl text-lux-dim"></i>
                        <span class="text-lg font-bold text-lux-dim font-oswald">LUX OPS SYSTEMS // EST. 2025</span>
                    </div>
                    <p class="text-lux-dim text-sm max-w-xs font-sans">
                        Real-time intelligence for mission-critical operations. London, UK.
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <div>
                        <h4 class="text-white font-bold mb-4 font-oswald text-sm uppercase tracking-wider">PLATFORM</h4>
                        <ul class="space-y-2 text-sm text-lux-dim">
                            <li><a href="industries.html" class="hover:text-lux-green">Industries</a></li>
                            <li><a href="residential.html" class="hover:text-lux-green">Residential</a></li>
                            <li><a href="pricing.html" class="hover:text-lux-green">Pricing</a></li>
                            <li><a href="blog.html" class="hover:text-lux-green">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4 font-oswald text-sm uppercase tracking-wider">COMPANY</h4>
                        <ul class="space-y-2 text-sm text-lux-dim">
                            <li><a href="about.html" class="hover:text-lux-green">About</a></li>
                            <li><a href="contact.html" class="hover:text-lux-green">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="text-right">
                     <div class="h-6 flex items-center justify-end text-lux-dim text-xs uppercase tracking-widest font-sans">
                         © 2025 LUX OPS.
                     </div>
                </div>
            </div>
        </div>
    </footer>
    `;
}

// --- INIT FUNCTION ---

function initApp() {
    // Inject Header & Footer
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');
    
    if (headerContainer) headerContainer.innerHTML = renderHeader();
    if (footerContainer) footerContainer.innerHTML = renderFooter();

    // Mobile Menu Logic
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.onclick = () => {
            menu.classList.toggle('hidden');
        };
    }
}

// Call init when DOM loads
document.addEventListener('DOMContentLoaded', initApp);

// --- HELPER COMPONENTS ---

function renderPricingSection() {
    return `
    <div class="w-full">
      <!-- Main Pricing Tiers -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
        ${PRICING_TIERS.map(tier => `
          <div class="relative flex flex-col p-12 transition-all duration-300 bg-lux-black ${tier.recommended ? 'border-2 border-lux-green' : 'border border-zinc-800'}">
            ${tier.recommended ? '<div class="absolute top-0 right-0 bg-lux-green text-black px-6 py-2 text-sm font-bold tracking-wider uppercase font-oswald">POPULAR</div>' : ''}

            <div class="mb-10">
              <h3 class="text-4xl font-oswald font-bold uppercase mb-6 ${tier.recommended ? 'text-lux-green' : 'text-white'}">
                ${tier.name}
              </h3>
              
              <div class="flex flex-col items-start mb-4">
                ${tier.pricePrefix ? `<span class="text-gray-400 font-mono text-sm uppercase tracking-wider mb-1">${tier.pricePrefix}</span>` : ''}
                <div class="flex items-baseline">
                  <span class="text-5xl md:text-6xl font-bold text-white font-mono tracking-tighter">${tier.price}</span>
                  ${tier.priceSuffix ? `<span class="text-gray-500 ml-3 font-mono text-sm uppercase">${tier.priceSuffix}</span>` : ''}
                </div>
              </div>
              
              <p class="text-gray-400 font-mono text-lg mt-4">
                  ${tier.description}
              </p>
            </div>

            <div class="flex-grow">
               <ul class="space-y-4 mb-12">
                ${tier.features.map(feature => `
                  <li class="flex items-start">
                    <i class="ph-bold ph-check-circle text-xl mr-4 flex-shrink-0 text-lux-green"></i>
                    <span class="text-white font-mono text-sm">
                      ${feature}
                    </span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div>
              <a href="contact.html" class="block w-full py-5 text-center font-bold tracking-widest uppercase font-oswald text-lg mb-8 transition-transform hover:-translate-y-1 ${tier.recommended ? 'bg-lux-green text-black' : 'bg-white text-black'}">
                ${tier.cta}
              </a>
              
              <div class="border-t border-white/10 pt-6">
                 <span class="block text-gray-500 font-mono text-xs uppercase mb-2">BEST FOR:</span>
                 <p class="text-gray-400 font-mono text-sm leading-relaxed">${tier.bestFor}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Retainer Info Footer -->
      <div class="max-w-5xl mx-auto">
         <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white font-oswald uppercase tracking-wide mb-4">
              OPTIONAL MONTHLY RETAINERS
            </h2>
            <p class="text-lux-dim text-lg font-mono">
              Post-launch support packages to keep your operations running at peak efficiency.
            </p>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${RETAINER_TIERS.map(retainer => `
              <div class="border border-white/10 bg-lux-dark p-8 rounded-lg hover:border-lux-green/30 transition-colors">
                 <div class="flex justify-between items-start mb-6">
                    <div>
                      <h3 class="text-2xl font-bold text-white font-oswald uppercase mb-1">${retainer.name}</h3>
                      <p class="text-lux-dim text-sm font-mono">${retainer.description}</p>
                    </div>
                    <div class="text-right">
                       <div class="text-2xl font-bold text-lux-green font-mono">${retainer.price}</div>
                       <div class="text-xs text-gray-500 font-mono">${retainer.period}</div>
                    </div>
                 </div>
                 <ul class="space-y-3">
                    ${retainer.features.map(feat => `
                      <li class="flex items-center text-sm text-gray-300 font-mono">
                         <i class="ph-bold ph-plus text-lux-green mr-3"></i>
                         ${feat}
                      </li>
                    `).join('')}
                 </ul>
              </div>
            `).join('')}
         </div>
      </div>
    </div>
    `;
}