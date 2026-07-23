const fs = require('fs');
const path = require('path');

const services = [
  { id: 'digital-marketing-company-in-bhopal', title: 'Digital Marketing', desc: 'Complete digital growth strategies tailored to scale brands online. We combine data, creativity, and performance marketing to drive measurable results.' },
  { id: 'ai-automations', title: 'AI Automations', desc: 'Smart AI-powered systems that automate workflows, lead management, customer responses, and business operations to save time and increase efficiency.' },
  { id: 'google-ads-agency-in-bhopal', title: 'Paid Ads', desc: 'High-converting ad campaigns across Google, Meta, and other platforms designed to maximize ROI and generate quality leads and sales.' },
  { id: 'social-media-marketing-company-in-bhopal', title: 'Social Media Marketing', desc: 'Strategic content planning, growth strategies, and engagement techniques to build strong brand presence and loyal communities.' },
  { id: 'google-my-business', title: 'Google My Business Optimization', desc: 'Optimize and manage your GMB profile to increase local visibility, drive traffic, and generate more local leads.' },
  { id: 'seo-company-in-bhopal', title: 'SEO', desc: 'Data-driven SEO strategies to improve rankings, increase organic traffic, and boost long-term online visibility.' },
  { id: 'website-design-company-in-bhopal', title: 'Website Design', desc: 'Conversion-focused, modern, and responsive websites designed to elevate your brand and turn visitors into customers.' },
  { id: 'pr-management', title: 'PR Management', desc: 'Strategic media placements and brand positioning to build credibility, authority, and public trust.' },
  { id: 'content-creation', title: 'Content Creation', desc: 'High-quality, engaging content tailored for websites, ads, and social media to strengthen brand messaging and audience connection.' },
  { id: 'video-editing', title: 'Video Editing', desc: 'Professional video editing that enhances storytelling, boosts engagement, and increases social media performance.' },
  { id: 'graphic-design-company-in-bhopal', title: 'Graphic Designing', desc: 'Creative and impactful visuals including branding, social media creatives, ads, and marketing materials.' },
];

let servicesData = `import digital_marketing_hero from '@/assets/images/digital_marketing_hero_1784322879394.jpg';
import seo_hero from '@/assets/images/seo_hero_1784322891309.jpg';
import social_media_hero from '@/assets/images/social_media_hero_1784322903154.jpg';
import website_design_hero from '@/assets/images/website_design_hero_1784322913631.jpg';
import graphic_design_hero from '@/assets/images/graphic_design_hero_1784322924334.jpg';
import google_ads_hero from '@/assets/images/google_ads_hero_1784322935867.jpg';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  heroImage?: string;
  overview: string;
  whoNeedsIt: string;
  impact: string;
  whyChooseUs: { icon: string; title: string; desc: string; }[];
  problems: { icon: string; problem: string; solution: string; benefit: string; }[];
  process: { step: string; title: string; desc: string; }[];
  servicesIncluded: { icon: string; title: string; desc: string; }[];
  techStack: string[];
  caseStudy: { challenge: string; strategy: string; implementation: string; results: string; metrics: string; };
  pricing: { name: string; price: string; period: string; features: string[]; popular?: boolean; }[];
  faqs: { q: string; a: string; }[];
}

const rawServices = [
`;

for (const s of services) {
  servicesData += `  {
    "id": "${s.id}",
    "title": "${s.title} Services | Digitalonix",
    "description": "${s.desc}",
    "h1": "Premium ${s.title} Services",
    "subtitle": "${s.desc}",
    "heroImage": "digital_marketing_hero_1784322879394.jpg",
    "overview": "${s.desc} Our approach focuses on delivering measurable ROI through data-driven execution and continuous optimization.",
    "whoNeedsIt": "Brands and businesses looking to scale their operations, enhance their online presence, and drive meaningful conversions.",
    "impact": "Drive immediate results while building long-term brand equity and sustainable growth engines.",
    "whyChooseUs": [
      { "icon": "Target", "title": "Result Oriented", "desc": "We focus purely on metrics that matter to your bottom line." },
      { "icon": "Zap", "title": "Fast Execution", "desc": "Rapid deployment and continuous iteration." },
      { "icon": "Users", "title": "Expert Team", "desc": "Seasoned professionals handling your campaigns." },
      { "icon": "BarChart", "title": "Data Driven", "desc": "Every decision backed by solid analytics." }
    ],
    "problems": [
      { "icon": "EyeOff", "problem": "Low Visibility", "solution": "Strategic positioning", "benefit": "Stand out in your market" },
      { "icon": "TrendingDown", "problem": "Poor Conversion", "solution": "Optimization frameworks", "benefit": "Higher ROI on spend" },
      { "icon": "Clock", "problem": "Slow Growth", "solution": "Scalable systems", "benefit": "Accelerated trajectory" },
      { "icon": "DollarSign", "problem": "Wasted Budget", "solution": "Targeted allocation", "benefit": "Maximum efficiency" }
    ],
    "process": [
      { "step": "01", "title": "Discovery", "desc": "Deep dive into your goals and current positioning." },
      { "step": "02", "title": "Strategy", "desc": "Developing a custom roadmap for success." },
      { "step": "03", "title": "Execution", "desc": "Implementing the strategy with precision." },
      { "step": "04", "title": "Optimization", "desc": "Continuous testing and refinement." },
      { "step": "05", "title": "Scaling", "desc": "Amplifying what works to maximize returns." }
    ],
    "servicesIncluded": [
      { "icon": "CheckCircle", "title": "Strategy Setup", "desc": "Complete foundational setup." },
      { "icon": "Activity", "title": "Active Management", "desc": "Daily monitoring and optimization." },
      { "icon": "BarChart", "title": "Performance Reporting", "desc": "Detailed transparent analytics." },
      { "icon": "Headphones", "title": "Dedicated Support", "desc": "Direct access to your team." }
    ],
    "techStack": ["Analytics", "Performance Tracking", "Optimization Tools", "Reporting Dashboards"],
    "caseStudy": {
      "challenge": "Client needed to aggressively scale their presence in a saturated market.",
      "strategy": "Deployed a high-impact, multi-channel approach focused on quick wins and sustainable growth.",
      "implementation": "Executed custom frameworks over a 90-day sprint.",
      "results": "Significant increase in primary KPIs across the board.",
      "metrics": "250% increase in overall performance metrics within 3 months."
    },
    "pricing": [
      { "name": "Starter", "price": "Custom", "period": "/mo", "features": ["Core Services", "Basic Reporting", "Email Support"] },
      { "name": "Growth", "price": "Custom", "period": "/mo", "features": ["Advanced Services", "Custom Dashboards", "Priority Support"], "popular": true },
      { "name": "Enterprise", "price": "Custom", "period": "/mo", "features": ["Full Suite", "Dedicated Team", "Strategic Consulting"] }
    ],
    "faqs": [
      { "q": "How quickly can we see results?", "a": "Initial results can often be seen within the first 30 days, with compounding growth over 3-6 months." },
      { "q": "Do you provide regular reporting?", "a": "Yes, we provide completely transparent, regular reporting on all key metrics." },
      { "q": "Is there a long-term contract?", "a": "We offer flexible terms, though we recommend a minimum engagement period to see optimal results." },
      { "q": "How do we get started?", "a": "Book a consultation call with our team to discuss your specific needs and goals." }
    ]
  },
`;
}

servicesData += `];

export const servicesData = rawServices.reduce((acc, service) => {
  acc[service.id] = service;
  return acc;
}, {} as Record<string, ServiceData>);
`;

fs.writeFileSync(path.join(__dirname, 'src/data/services.ts'), servicesData);
console.log("Services generated!");
