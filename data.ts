import { BlogPost, IndustryData, PricingTier, RetainerTier } from './types';

export const BLOG_POSTS: BlogPost[] = [
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

      <h3 class="text-xl font-bold text-lux-green mb-2 font-oswald uppercase">What we can do for you</h3>
      <p class="mb-6">While this project was built for racing, our underlying decision engine works for any industry. We build custom, high-performance dashboards that integrate with your existing APIs whether you're tracking logistics fleets, monitoring drone swarms, or managing energy grids. We specialize in taking complex data streams and turning them into simple, clear instructions for your team. No bloat, no confusion, just the intelligence you need, displayed exactly when you need it. From small teams to enterprise operations, we can deploy a custom solution in as little as two weeks.</p>
      
      <div class="text-center mt-12 py-8 border-t border-white/10">
        <h3 class="text-3xl font-bold text-lux-green mb-8 font-oswald uppercase tracking-wide">Ready To Build Yours?</h3>
        <a href="#/contact" class="inline-block bg-lux-green text-black px-10 py-4 font-bold tracking-widest hover:bg-white transition-colors uppercase rounded-sm">
          Start Project
        </a>
      </div>
    `
  }
];

export const INDUSTRIES: IndustryData[] = [
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
    id: 'drones',
    name: 'Aerial Systems',
    tagline: 'Drone & UAV Command',
    description: 'Coordinate drone swarms, monitor battery levels, and execute mission plans with precision.',
    demoUrl: 'https://luxopsaerial.netlify.app/',
    imageUrl: 'https://i.ibb.co/8gk7zPbw/drones-lux-ops.jpg',
    features: ['Swarm Coordination', 'Battery Management', 'Flight Path Visualization', 'Payload Monitoring']
  },
  {
    id: 'fleets',
    name: 'Fleet Ops',
    tagline: 'Global Logistics Visibility',
    description: 'Track assets, predict maintenance needs, and optimize delivery routes in real-time.',
    demoUrl: 'https://luxopsfleet.netlify.app/',
    imageUrl: 'https://i.ibb.co/7dx1fyD4/fleets-vans-lux-ops.jpg',
    features: ['Route Optimization', 'Maintenance Prediction', 'Fuel Efficiency', 'Driver Safety Score']
  },
  {
    id: 'custom',
    name: 'Custom Solutions',
    tagline: 'Bespoke Operations Architecture',
    description: 'Tailored intelligence systems for unique operational challenges. From energy grids to maritime logistics, we build the interface your data deserves.',
    demoUrl: '', // Intentionally empty to trigger contact placeholder
    imageUrl: 'https://i.ibb.co/mF4qx9Hw/robots-lux-ops.jpg',
    features: ['Custom API Integration', 'Proprietary Models', 'On-prem Deployment', '24/7 War Room Support']
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'PROFESSIONAL',
    price: '$25,000',
    priceSuffix: '/ ONE-TIME BUILD',
    description: 'Real-time intelligence for operational teams.',
    recommended: false,
    features: [
      'Up to 3 API sources',
      'Up to 4 dashboard views',
      '15-20 AI rules',
      '10 user seats',
      'Custom styling',
      '2-week deployment',
      '60 days support',
      'Browser based',
      'Optional Monthly Retainer'
    ],
    cta: 'BOOK DEMO',
    bestFor: 'Single teams, Clear scope, Standard APIs'
  },
  {
    name: 'ENTERPRISE',
    price: '$60,000',
    pricePrefix: 'STARTING AT',
    description: 'Mission-critical command centers.',
    recommended: true,
    features: [
      'Unlimited APIs',
      'Unlimited views',
      '30+ AI rules or ML',
      'Unlimited users',
      'Fully bespoke design',
      '1-2 week priority',
      '6 months support',
      'White-label option',
      'Dedicated account mgr',
      'Optional Monthly Retainer'
    ],
    cta: 'BOOK DEMO',
    bestFor: 'Mission-critical ops, Multi-location, Complex integrations'
  }
];

export const RETAINER_TIERS: RetainerTier[] = [
  {
    name: 'MAINTENANCE',
    price: '$2,500',
    period: '/ MONTH',
    description: 'Ensure your command center stays operational 24/7.',
    features: [
       'Server Health Monitoring',
       'Security Patches & Updates',
       '48-hour Support SLA',
       'Monthly Performance Report'
    ]
  },
  {
    name: 'GROWTH',
    price: '$5,000',
    period: '/ MONTH',
    description: 'Continuous evolution of your operational intelligence.',
    features: [
       'Everything in Maintenance',
       '10 Hours Dedicated Dev Time',
       'Priority 4-hour Support SLA',
       'Quarterly Strategy Review'
    ]
  }
];