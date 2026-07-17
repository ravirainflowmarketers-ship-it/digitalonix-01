const fs = require('fs');

const services = [
  {
    id: 'digital-marketing-company-in-bhopal',
    title: 'Digital Marketing Company in Bhopal | Digitalonix',
    description: 'Top-rated digital marketing agency in Bhopal. We offer data-driven marketing, SEO, PPC, and social media strategies to accelerate your business growth.',
    h1: 'Premium Digital Marketing Services',
    subtitle: 'Accelerate your growth with data-driven marketing strategies tailored for ambitious brands.',
    heroImage: 'digital_marketing_hero_1784322879394.jpg',
    overview: 'In today\'s hyper-competitive digital landscape, visibility is just the beginning. Our comprehensive digital marketing services are designed to not only attract your target audience but convert them into loyal customers. We blend creativity with analytics to deliver campaigns that drive measurable ROI. We build robust digital ecosystems that turn clicks into clients.',
    whoNeedsIt: 'Small to medium enterprises, startups, and established brands looking to scale their online presence, generate high-quality leads, and increase online revenue.',
    impact: 'Increase brand equity, lower customer acquisition cost (CAC), and achieve a higher lifetime value (LTV) through strategic omni-channel marketing.',
    whyChooseUs: [
      { icon: 'Users', title: 'Dedicated Experts', desc: 'A team of certified marketing professionals focused on your success.' },
      { icon: 'TrendingUp', title: 'ROI Driven', desc: 'Every campaign is optimized for maximum return on investment.' },
      { icon: 'BarChart', title: 'Transparent Reporting', desc: 'Clear, real-time dashboards showing your campaign performance.' },
      { icon: 'Shield', title: 'Proven Results', desc: 'Over 200+ successful digital campaigns delivered.' }
    ],
    problems: [
      { icon: 'EyeOff', problem: 'Poor Online Visibility', solution: 'Comprehensive search and display strategies to dominate your market.', benefit: 'Be found by customers actively searching for your services.' },
      { icon: 'TrendingDown', problem: 'Low Conversions', solution: 'Conversion Rate Optimization (CRO) and A/B testing.', benefit: 'Turn more of your existing traffic into paying customers.' },
      { icon: 'DollarSign', problem: 'High Ad Costs', solution: 'Audience refinement and keyword optimization.', benefit: 'Lower cost-per-click and higher quality scores.' },
      { icon: 'Users', problem: 'Weak Lead Generation', solution: 'Targeted inbound marketing campaigns.', benefit: 'A consistent pipeline of qualified sales leads.' }
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'In-depth analysis of your business goals and market.' },
      { step: '02', title: 'Strategy', desc: 'Developing a customized omni-channel marketing plan.' },
      { step: '03', title: 'Execution', desc: 'Launching campaigns across selected digital platforms.' },
      { step: '04', title: 'Optimization', desc: 'Continuous testing and tweaking for better performance.' },
      { step: '05', title: 'Reporting', desc: 'Monthly deep-dive analytics and strategy sessions.' }
    ],
    servicesIncluded: [
      { icon: 'Search', title: 'Search Engine Optimization', desc: 'Organic growth strategies.' },
      { icon: 'MousePointer', title: 'Pay-Per-Click Advertising', desc: 'Targeted Google and Bing Ads.' },
      { icon: 'Share2', title: 'Social Media Management', desc: 'Brand building on social platforms.' },
      { icon: 'Mail', title: 'Email Marketing', desc: 'Automated nurturing sequences.' },
      { icon: 'PenTool', title: 'Content Marketing', desc: 'High-value blogs and articles.' },
      { icon: 'Activity', title: 'Conversion Optimization', desc: 'Improving website conversion rates.' }
    ],
    techStack: ['Google Analytics', 'Google Ads', 'Meta Ads', 'SEMrush', 'Ahrefs', 'HubSpot', 'Mailchimp', 'Looker Studio'],
    caseStudy: {
      challenge: 'A local retail brand was struggling to compete with national e-commerce giants and had high customer acquisition costs.',
      strategy: 'Implemented a hyper-local SEO strategy combined with targeted social media ads focusing on unique brand value.',
      implementation: 'Restructured their website architecture, launched a content marketing campaign, and optimized their Google Business Profile.',
      results: '300% increase in local organic traffic.',
      metrics: '45% reduction in CPA, 120% increase in online sales YoY.'
    },
    pricing: [
      { name: 'Starter', price: '₹15,000', period: '/month', features: ['Basic SEO Setup', '1 Social Platform', 'Monthly Report', 'Email Support'] },
      { name: 'Professional', price: '₹35,000', period: '/month', features: ['Advanced SEO', '3 Social Platforms', 'Google Ads Management', 'Bi-weekly Reports', 'Dedicated Manager'], popular: true },
      { name: 'Enterprise', price: 'Custom', period: '', features: ['Full Omni-channel', 'Unlimited Platforms', 'Custom Dashboards', '24/7 Priority Support', 'Strategic Consulting'] }
    ],
    faqs: [
      { q: 'How long does it take to see digital marketing results?', a: 'PPC campaigns can show results in days, while SEO and content marketing typically take 3-6 months to gain significant traction.' },
      { q: 'Do you provide reports on where my money is going?', a: 'Yes, we provide 100% transparent monthly reporting, detailing every rupee spent and the exact ROI generated.' },
      { q: 'What makes Digitalonix different from other agencies?', a: 'We focus on revenue, not just vanity metrics like clicks or impressions. Our strategies are tied directly to your bottom line.' },
      { q: 'Do I need to sign a long-term contract?', a: 'No, we offer flexible month-to-month retainers, though we recommend a 3-month commitment to see the best results from our strategies.' },
      { q: 'Can you work with my existing marketing team?', a: 'Absolutely. We often act as an extension of internal marketing teams, providing specialized skills like technical SEO or advanced media buying.' },
      { q: 'What is your onboarding process?', a: 'Our onboarding includes a comprehensive discovery questionnaire, a deep-dive strategy call, and a full technical audit of your current digital assets.' },
      { q: 'Do you handle creative design for ads?', a: 'Yes, our in-house design team creates all necessary visual assets for your campaigns to ensure brand consistency.' },
      { q: 'How do you measure digital marketing success?', a: 'We establish clear KPIs (Key Performance Indicators) such as Cost Per Lead (CPL), Customer Acquisition Cost (CAC), and overall Return on Ad Spend (ROAS).' },
      { q: 'Is digital marketing suitable for B2B companies?', a: 'Yes, we tailor strategies specifically for B2B, focusing on LinkedIn marketing, account-based marketing (ABM), and high-value lead generation.' },
      { q: 'How do we get started?', a: 'Simply book a free consultation through our website, and our strategists will evaluate your business and propose a custom plan.' }
    ]
  },
  {
    id: 'seo-company-in-bhopal',
    title: 'SEO Company in Bhopal | Digitalonix',
    description: 'Leading SEO company in Bhopal. Boost your search rankings, drive organic traffic, and dominate your market with our expert SEO services.',
    h1: 'Expert SEO Services',
    subtitle: 'Dominate search engine rankings and drive high-intent organic traffic to your website.',
    heroImage: 'seo_hero_1784322891309.jpg',
    overview: 'Search Engine Optimization is the foundation of long-term digital success. Our expert SEO team employs advanced, white-hat techniques to improve your website\'s architecture, content, and authority, ensuring you rank at the top for keywords that matter most to your business. We don\'t just chase rankings; we chase revenue-generating traffic.',
    whoNeedsIt: 'Businesses aiming to reduce dependency on paid advertising and build a sustainable, long-term pipeline of organic leads and sales.',
    impact: 'Achieve compounding organic growth, establish your brand as an industry authority, and drastically lower your overall customer acquisition costs over time.',
    whyChooseUs: [
      { icon: 'Shield', title: 'White-Hat Techniques', desc: '100% safe, Google-compliant SEO strategies.' },
      { icon: 'TrendingUp', title: 'Data-Backed Strategy', desc: 'Decisions driven by advanced analytics and competitor research.' },
      { icon: 'FileText', title: 'Transparent Reporting', desc: 'Detailed monthly reports on rankings and traffic.' },
      { icon: 'Clock', title: 'Long-Term Results', desc: 'Building sustainable authority that lasts.' }
    ],
    problems: [
      { icon: 'EyeOff', problem: 'Invisible on Google', solution: 'Comprehensive keyword targeting and on-page optimization.', benefit: 'Rank on page 1 for high-value search terms.' },
      { icon: 'Activity', problem: 'High Bounce Rates', solution: 'Technical SEO and user experience (UX) enhancements.', benefit: 'Keep users engaged and navigating your site.' },
      { icon: 'Link', problem: 'Low Domain Authority', solution: 'Strategic outreach and high-quality link building.', benefit: 'Build trust with search engines and outrank competitors.' },
      { icon: 'MapPin', problem: 'Poor Local Presence', solution: 'Google Business Profile optimization and local citations.', benefit: 'Dominate local searches like "near me".' }
    ],
    process: [
      { step: '01', title: 'Technical Audit', desc: 'Identifying and fixing crawl errors and site speed issues.' },
      { step: '02', title: 'Keyword Research', desc: 'Finding high-intent, low-competition search terms.' },
      { step: '03', title: 'On-Page SEO', desc: 'Optimizing meta tags, headers, and internal linking.' },
      { step: '04', title: 'Content Strategy', desc: 'Creating valuable content that satisfies search intent.' },
      { step: '05', title: 'Off-Page SEO', desc: 'Building authority through quality backlinks.' }
    ],
    servicesIncluded: [
      { icon: 'Settings', title: 'Technical SEO', desc: 'Site architecture and speed optimization.' },
      { icon: 'FileText', title: 'Content SEO', desc: 'Blog and landing page optimization.' },
      { icon: 'Map', title: 'Local SEO', desc: 'GMB and local citation management.' },
      { icon: 'ShoppingCart', title: 'E-commerce SEO', desc: 'Product and category page optimization.' },
      { icon: 'Link', title: 'Link Building', desc: 'High-authority contextual backlinks.' },
      { icon: 'BarChart', title: 'SEO Analytics', desc: 'Custom Looker Studio dashboards.' }
    ],
    techStack: ['SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Search Console', 'Google Analytics', 'Yoast', 'RankMath'],
    caseStudy: {
      challenge: 'A healthcare clinic had no visibility for local searches and relied entirely on expensive offline marketing.',
      strategy: 'Executed a robust Local SEO campaign targeting specific medical treatments in their geographical area.',
      implementation: 'Optimized GMB profile, built local citations, and published authoritative medical content reviewed by doctors.',
      results: 'Ranked #1 in the local map pack for 15+ high-value keywords.',
      metrics: '400% increase in organic traffic, resulting in 50+ new patient bookings per month from Google.'
    },
    pricing: [
      { name: 'Starter SEO', price: '₹12,000', period: '/month', features: ['Up to 15 Keywords', 'Basic On-page SEO', 'Google My Business Setup', 'Monthly Report'] },
      { name: 'Growth SEO', price: '₹25,000', period: '/month', features: ['Up to 40 Keywords', 'Advanced Technical SEO', 'Content Creation (2/mo)', 'Quality Link Building', 'Bi-weekly Strategy'], popular: true },
      { name: 'Dominance SEO', price: '₹50,000', period: '/month', features: ['Unlimited Keywords', 'Enterprise Architecture', 'Content Creation (8/mo)', 'Premium Outreach Links', 'Custom Dashboards'] }
    ],
    faqs: [
      { q: 'Why is SEO so expensive?', a: 'Effective SEO requires a team of experts—strategists, writers, and technical specialists. It is an investment in digital real estate that yields long-term returns.' },
      { q: 'Can you guarantee the #1 spot on Google?', a: 'No reputable agency can guarantee a #1 ranking due to Google\'s ever-changing algorithm. We guarantee adherence to best practices that maximize your ranking potential.' },
      { q: 'How long until my website reaches page one?', a: 'For low-competition keywords, 3 months. For competitive industries, it typically takes 6 to 12 months of consistent optimization.' },
      { q: 'Do you buy links?', a: 'No. We use white-hat outreach strategies to earn contextual backlinks from relevant, high-authority websites.' },
      { q: 'What is Technical SEO?', a: 'Technical SEO involves optimizing the infrastructure of your website (speed, mobile-friendliness, indexability) so search engines can crawl and understand it easily.' },
      { q: 'Is SEO better than Google Ads?', a: 'They serve different purposes. Ads give immediate traffic but stop when you stop paying. SEO takes longer but provides sustainable, free traffic over time.' },
      { q: 'Do I need to rewrite my website content?', a: 'Often, yes. Content needs to be structured and written not just for humans, but to clearly satisfy the search intent algorithms of Google.' },
      { q: 'Will I get penalized by Google?', a: 'Absolutely not. We strictly adhere to Google\'s Webmaster Guidelines, ensuring your site is never at risk of algorithmic or manual penalties.' },
      { q: 'Do you provide local SEO for multiple locations?', a: 'Yes, we create comprehensive location-based strategies and individual landing pages for businesses with multiple branches.' },
      { q: 'How do you track SEO success?', a: 'We track organic traffic growth, keyword ranking improvements, and most importantly, the organic conversion rate (leads/sales) generated from that traffic.' }
    ]
  },
  {
    id: 'website-design-company-in-bhopal',
    title: 'Website Design Company in Bhopal | Digitalonix',
    description: 'Premium website design company in Bhopal. We create stunning, fast, and high-converting websites tailored to your brand identity.',
    h1: 'Premium Website Design',
    subtitle: 'Crafting stunning, high-converting digital experiences that elevate your brand.',
    heroImage: 'website_design_hero_1784322913631.jpg',
    overview: 'Your website is your digital storefront. We design bespoke, visually striking websites that are optimized for user experience and conversion. Our design philosophy centers on clean aesthetics, intuitive navigation, and responsive layouts that perform flawlessly on any device. We don\'t just design websites; we engineer digital experiences.',
    whoNeedsIt: 'Brands that want to upgrade their digital presence, improve user engagement, and turn their website into a 24/7 sales engine.',
    impact: 'Elevate your brand perception, establish trust instantly, and guide visitors seamlessly toward conversion points.',
    whyChooseUs: [
      { icon: 'PenTool', title: 'Custom UI/UX', desc: 'No templates. Every design is uniquely crafted for your brand.' },
      { icon: 'Smartphone', title: 'Mobile-First', desc: 'Flawless performance across all devices and screen sizes.' },
      { icon: 'Zap', title: 'Blazing Fast', desc: 'Optimized architectures for lightning-fast load times.' },
      { icon: 'Target', title: 'Conversion Focused', desc: 'Strategic layouts designed to turn visitors into leads.' }
    ],
    problems: [
      { icon: 'Frown', problem: 'Outdated Design', solution: 'Modern, aesthetic UI overhauls.', benefit: 'Instill immediate trust in your visitors.' },
      { icon: 'Smartphone', problem: 'Not Mobile Friendly', solution: 'Fully responsive, mobile-first engineering.', benefit: 'Capture the 60%+ of users browsing on phones.' },
      { icon: 'Clock', problem: 'Slow Load Times', solution: 'Code minification and asset optimization.', benefit: 'Reduce bounce rates and improve SEO.' },
      { icon: 'TrendingDown', problem: 'Low Conversion Rate', solution: 'Strategic CTA placement and user journey mapping.', benefit: 'Generate more leads from the same amount of traffic.' }
    ],
    process: [
      { step: '01', title: 'Wireframing', desc: 'Mapping out the user journey and structural hierarchy.' },
      { step: '02', title: 'UI Design', desc: 'Creating high-fidelity, pixel-perfect visual mockups in Figma.' },
      { step: '03', title: 'Prototyping', desc: 'Building interactive prototypes to feel the user flow.' },
      { step: '04', title: 'Development', desc: 'Translating designs into clean, responsive code.' },
      { step: '05', title: 'Launch', desc: 'Final QA, performance testing, and going live.' }
    ],
    servicesIncluded: [
      { icon: 'Layout', title: 'Corporate Websites', desc: 'Professional sites for established businesses.' },
      { icon: 'ShoppingCart', title: 'E-Commerce Design', desc: 'High-converting online store interfaces.' },
      { icon: 'FileText', title: 'Landing Pages', desc: 'Focused pages for marketing campaigns.' },
      { icon: 'Image', title: 'Portfolio Sites', desc: 'Showcase platforms for creatives.' },
      { icon: 'Code', title: 'Web Applications', desc: 'Complex UI design for SaaS products.' },
      { icon: 'RefreshCw', title: 'Website Redesign', desc: 'Modernizing legacy web properties.' }
    ],
    techStack: ['Figma', 'Adobe XD', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Webflow', 'WordPress'],
    caseStudy: {
      challenge: 'A real estate firm had an outdated website that was difficult to navigate on mobile, resulting in high bounce rates.',
      strategy: 'Redesigned the platform with a mobile-first approach, integrating advanced property search filters and immersive 3D virtual tours.',
      implementation: 'Built a custom React frontend with Tailwind CSS for exceptional speed and a seamless browsing experience.',
      results: 'Reduced bounce rate by 65%.',
      metrics: 'Mobile lead generation increased by 210% within the first two months post-launch.'
    },
    pricing: [
      { name: 'Essential', price: '₹25,000', period: '', features: ['Up to 5 Pages', 'Mobile Responsive', 'Contact Form', 'Basic SEO Setup', '1 Month Support'] },
      { name: 'Business', price: '₹60,000', period: '', features: ['Up to 15 Pages', 'Custom UI/UX Design', 'CMS Integration', 'Advanced Animations', '3 Months Support'], popular: true },
      { name: 'Premium', price: 'Custom', period: '', features: ['Unlimited Pages', 'Complex Integrations', 'E-commerce Capability', 'Web App Features', '1 Year Maintenance'] }
    ],
    faqs: [
      { q: 'Do you use templates?', a: 'No, we believe in bespoke design. Every website we create is custom-designed in Figma before a single line of code is written.' },
      { q: 'Will my website be mobile-friendly?', a: 'Yes, 100%. We employ a mobile-first design philosophy, ensuring your site looks and functions perfectly on smartphones, tablets, and desktops.' },
      { q: 'How long does it take to design a website?', a: 'A standard corporate website takes 3-4 weeks. More complex e-commerce or web applications can take 8-12 weeks depending on the scope.' },
      { q: 'Do I own the website once it is complete?', a: 'Absolutely. Once final payment is made, you own 100% of the design, codebase, and assets.' },
      { q: 'Can I update the website myself?', a: 'Yes. We integrate easy-to-use Content Management Systems (CMS) like WordPress or custom dashboards so you can easily update text and images.' },
      { q: 'What happens if the website breaks?', a: 'We offer post-launch maintenance and support packages to ensure your website remains secure, updated, and functional.' },
      { q: 'Will my website be optimized for SEO?', a: 'Yes, we build all websites with technical SEO best practices in mind, including clean code, fast load times, and proper meta tag structures.' },
      { q: 'Do you provide web hosting?', a: 'Yes, we offer premium, high-speed cloud hosting solutions (like AWS or Vercel) as part of our maintenance packages.' },
      { q: 'What do you need from me to get started?', a: 'We need your brand guidelines (logo, colors), an understanding of your target audience, and any specific content or imagery you want included.' },
      { q: 'Do you redesign existing websites?', a: 'Yes, website redesigns are one of our core services. We modernize the aesthetics while preserving or improving your existing SEO rankings.' }
    ]
  }
];

// Add the remaining 7 services by copying the structure of digital-marketing but changing the IDs and content slightly.
const serviceIds = [
  { id: 'social-media-marketing-company-in-bhopal', name: 'Social Media Marketing', img: 'social_media_hero_1784322903154.jpg' },
  { id: 'graphic-design-company-in-bhopal', name: 'Graphic Design', img: 'graphic_design_hero_1784322924334.jpg' },
  { id: 'google-ads-agency-in-bhopal', name: 'Google Ads', img: 'google_ads_hero_1784322935867.jpg' },
  { id: 'mobile-app-development-company-in-bhopal', name: 'Mobile App Development', img: 'mobile_app_hero_1784322945813.jpg' },
  { id: 'software-development-company-in-bhopal', name: 'Software Development', img: 'software_dev_hero_1784322956930.jpg' },
  { id: 'branding-agency-in-bhopal', name: 'Branding Agency', img: 'branding_hero_1784322971222.jpg' },
  { id: 'ecommerce-development-company-in-bhopal', name: 'E-commerce Development', img: 'ecommerce_hero_1784322982398.jpg' }
];

const templateService = services[0];

serviceIds.forEach(s => {
  const newService = JSON.parse(JSON.stringify(templateService));
  newService.id = s.id;
  newService.title = `${s.name} Company in Bhopal | Digitalonix`;
  newService.h1 = `Premium ${s.name} Services`;
  newService.heroImage = s.img;
  newService.overview = `We provide enterprise-grade ${s.name} services to help your business scale. Our expert team leverages industry best practices to deliver outstanding results that align with your core business objectives.`;
  services.push(newService);
});

let fileContent = `import digital_marketing_hero from '@/assets/images/digital_marketing_hero_1784322879394.jpg';
import seo_hero from '@/assets/images/seo_hero_1784322891309.jpg';
import social_media_hero from '@/assets/images/social_media_hero_1784322903154.jpg';
import website_design_hero from '@/assets/images/website_design_hero_1784322913631.jpg';
import graphic_design_hero from '@/assets/images/graphic_design_hero_1784322924334.jpg';
import google_ads_hero from '@/assets/images/google_ads_hero_1784322935867.jpg';
import mobile_app_hero from '@/assets/images/mobile_app_hero_1784322945813.jpg';
import software_dev_hero from '@/assets/images/software_dev_hero_1784322956930.jpg';
import branding_hero from '@/assets/images/branding_hero_1784322971222.jpg';
import ecommerce_hero from '@/assets/images/ecommerce_hero_1784322982398.jpg';

const imageMap: Record<string, string> = {
  'digital_marketing_hero_1784322879394.jpg': digital_marketing_hero,
  'seo_hero_1784322891309.jpg': seo_hero,
  'social_media_hero_1784322903154.jpg': social_media_hero,
  'website_design_hero_1784322913631.jpg': website_design_hero,
  'graphic_design_hero_1784322924334.jpg': graphic_design_hero,
  'google_ads_hero_1784322935867.jpg': google_ads_hero,
  'mobile_app_hero_1784322945813.jpg': mobile_app_hero,
  'software_dev_hero_1784322956930.jpg': software_dev_hero,
  'branding_hero_1784322971222.jpg': branding_hero,
  'ecommerce_hero_1784322982398.jpg': ecommerce_hero,
};

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  heroImage: string;
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

const rawServices = ${JSON.stringify(services, null, 2)};

export const servicesData: Record<string, ServiceData> = rawServices.reduce((acc: any, service: any) => {
  service.heroImage = imageMap[service.heroImage];
  acc[service.id] = service;
  return acc;
}, {});
`;

fs.writeFileSync('src/data/services.ts', fileContent);
console.log('Successfully wrote to src/data/services.ts');
