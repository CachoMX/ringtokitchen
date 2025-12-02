export const BRAND_COLORS = {
  primaryNavy: '#01335D',
  energyRed: '#F04833',
  warmTaupe: '#BF9B81',
  softGray: '#E9E9E9',
  white: '#FFFFFF',
  textDark: '#01335D',
  textLight: '#666666',
};

export const COMPANY_INFO = {
  name: 'Ring to Kitchen AI',
  tagline: 'From ring to kitchen — AI that speaks restaurant',
  email: 'hello@ringtokitchen.ai',
  phone: '+1 (448) 229-9561',
  website: 'ringtokitchen.ai',
  calendlyUrl: 'https://calendly.com/austin-vwdd/ring-to-kitchen-ai',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/ringtokitchen-ai',
  instagram: 'https://www.instagram.com/ringtokitchen.ai',
};

export const PRICING_TIERS = [
  {
    name: 'Starter',
    price: 249,
    description: 'Perfect for small cafés and single locations',
    features: [
      { text: '500 minutes/month (~17 min/day)', included: true },
      { text: '2 concurrent phone lines', included: true },
      { text: 'Basic order processing', included: true },
      { text: 'Email support', included: true },
      { text: '1 system integration', included: true },
      { text: 'Custom voice options', included: false },
      { text: 'Priority support', included: false },
      { text: 'Advanced analytics', included: false },
    ],
    cta: 'Get Started',
    highlighted: false,
    bestFor: 'Small cafés, single location',
  },
  {
    name: 'Professional',
    price: 499,
    description: 'For growing restaurants and multi-location operators',
    features: [
      { text: '2,000 minutes/month (~67 min/day)', included: true },
      { text: '5 concurrent phone lines', included: true },
      { text: 'Advanced order + reservation processing', included: true },
      { text: 'Priority support (24h response)', included: true },
      { text: '3 system integrations', included: true },
      { text: 'Custom voice options', included: true },
      { text: 'Daily reporting', included: true },
      { text: 'Advanced analytics', included: true },
    ],
    cta: 'Get Started',
    highlighted: true,
    bestFor: 'Growing restaurants, 1-2 locations',
  },
  {
    name: 'Enterprise',
    price: 999,
    description: 'For high-volume chains with custom needs',
    features: [
      { text: 'Unlimited minutes', included: true },
      { text: 'Unlimited concurrent phone lines', included: true },
      { text: 'Full feature set', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Unlimited integrations', included: true },
      { text: 'Custom voice options', included: true },
      { text: 'Real-time analytics dashboard', included: true },
      { text: 'API access', included: true },
    ],
    cta: 'Contact Sales',
    highlighted: false,
    bestFor: 'Multi-location chains, high volume',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Maria García',
    restaurant: 'La Cocina',
    location: 'Miami, FL',
    image: '👨‍🍳',
    rating: 5,
    quote: 'We reduced missed calls by 87%. Ring to Kitchen AI handles our peak hours perfectly. Our team can finally breathe during dinner service.',
  },
  {
    name: 'James Chen',
    restaurant: 'Downtown Delivery Co.',
    location: 'Chicago, IL',
    image: '👩‍💼',
    rating: 5,
    quote: 'The AI handles our 3 locations flawlessly. Order accuracy jumped to 99.2%. This wasn\'t just a phone system upgrade—it transformed our operations.',
  },
  {
    name: 'Sofia Mendoza',
    restaurant: 'Café Verde',
    location: 'Los Angeles, CA',
    image: '🧑‍🍳',
    rating: 5,
    quote: 'This little AI agent gave me my life back. I went from answering phones all day to actually managing my business. Best investment ever.',
  },
  {
    name: 'David Park',
    restaurant: 'Seoul Kitchen',
    location: 'New York, NY',
    image: '👨‍💼',
    rating: 5,
    quote: 'Our reservation system went from chaotic to seamless. The AI understands accents and complex orders better than I expected.',
  },
];

export const VALUE_PROPOSITIONS = [
  {
    icon: '📞',
    title: '24/7 AI Support',
    description: 'Your AI agent never clocks out. Answer calls, take orders, manage reservations around the clock.',
  },
  {
    icon: '⚡',
    title: 'Reduce Wait Times',
    description: 'Eliminate missed calls and order delays. Process customer interactions instantly.',
  },
  {
    icon: '📈',
    title: 'Increase Revenue',
    description: 'More orders taken. More reservations booked. More customers served.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    icon: '📱',
    title: 'Customer Calls',
    description: 'Your customer dials your restaurant number',
  },
  {
    number: 2,
    icon: '🤖',
    title: 'AI Answers',
    description: 'Our AI agent answers naturally in seconds',
  },
  {
    number: 3,
    icon: '📝',
    title: 'Takes Action',
    description: 'Processes orders, books reservations, answers questions',
  },
  {
    number: 4,
    icon: '✅',
    title: 'Syncs Data',
    description: 'Integrates seamlessly with your POS and systems',
  },
];

export const USE_CASES = [
  {
    icon: '🍕',
    title: 'Fast Casual',
    description: 'High-volume order processing during peak hours',
  },
  {
    icon: '🍽️',
    title: 'Fine Dining',
    description: 'Elegant reservation management and special requests',
  },
  {
    icon: '🚚',
    title: 'Food Trucks',
    description: 'Mobile ordering and location updates',
  },
  {
    icon: '🏢',
    title: 'Multi-Location Chains',
    description: 'Centralized AI management across all locations',
  },
  {
    icon: '☕',
    title: 'Cafés & Bakeries',
    description: 'Morning rush order handling and pickup coordination',
  },
];
