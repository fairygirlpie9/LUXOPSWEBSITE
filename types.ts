export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string; // Markdown-like or HTML string
  excerpt: string;
}

export interface PricingTier {
  name: string;
  price: string;
  pricePrefix?: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  recommended?: boolean;
  cta: string;
  bestFor: string;
}

export interface RetainerTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
}

export interface IndustryData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  demoUrl: string;
  imageUrl: string;
  features: string[];
}