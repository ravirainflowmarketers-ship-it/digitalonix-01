import novaBankLogo from '@/assets/images/nova_bank_logo_1784320100248.jpg';

export const portfolioCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'website-design', name: 'Website Design' },
  { id: 'ecommerce', name: 'Ecommerce' },
  { id: 'seo', name: 'SEO' },
  { id: 'logo-design', name: 'Logo Design' },
];

export const portfolioProjects = [
  {
    id: '1',
    slug: 'nexus-tech-website',
    title: 'Nexus Tech Corporate Website',
    category: 'website-design',
    categoryName: 'Website Design',
    shortDescription: 'A complete digital transformation for a leading tech enterprise.',
    industry: 'Technology',
    completionYear: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
    clientObjective: 'Nexus Tech needed a modern, high-performing corporate website that reflected their innovative approach and enterprise-level solutions.',
    businessChallenge: 'Their legacy website was slow, difficult to navigate, and failing to convert enterprise leads.',
    strategy: 'We implemented a headless architecture with Next.js and Sanity CMS to ensure lightning-fast performance and seamless content management.',
    results: {
      traffic: '+45%',
      conversion: '+120%',
      pageSpeed: '98/100'
    },
    gallery: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
    ]
  },
  {
    id: '2',
    slug: 'urban-threads-ecommerce',
    title: 'Urban Threads Ecommerce',
    category: 'ecommerce',
    categoryName: 'Ecommerce',
    shortDescription: 'High-converting Shopify Plus store for a premium fashion brand.',
    industry: 'Retail & Fashion',
    completionYear: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    tags: ['Shopify', 'React', 'Tailwind CSS'],
    featuredImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80',
    clientObjective: 'To create an immersive, lightning-fast shopping experience that increases average order value and mobile conversions.',
    businessChallenge: 'High cart abandonment rates on mobile devices and a convoluted checkout process.',
    strategy: 'We designed a mobile-first Shopify custom theme focusing on product discovery and a frictionless, one-page checkout.',
    results: {
      traffic: '+20%',
      conversion: '+65%',
      pageSpeed: '92/100'
    },
    gallery: [
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1fac08b042?w=800&q=80',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80'
    ]
  },
  {
    id: '3',
    slug: 'apex-fitness-seo',
    title: 'Apex Fitness SEO Campaign',
    category: 'seo',
    categoryName: 'SEO',
    shortDescription: 'Dominating local search results for a premium gym chain.',
    industry: 'Health & Fitness',
    completionYear: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    tags: ['Technical SEO', 'Content Strategy', 'Local SEO'],
    featuredImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80',
    clientObjective: 'To rank #1 for high-intent fitness and gym-related keywords in their city.',
    businessChallenge: 'Fierce competition from national gym chains and poor local search visibility.',
    strategy: 'We executed a comprehensive Local SEO strategy, including technical optimization, localized content creation, and high-authority link building.',
    results: {
      traffic: '+210%',
      conversion: '+85%',
      pageSpeed: 'N/A'
    },
    gallery: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80'
    ]
  },
  {
    id: '4',
    slug: 'nova-bank-rebrand',
    title: 'Nova Bank Brand Identity',
    category: 'logo-design',
    categoryName: 'Logo Design',
    shortDescription: 'A modern, trustworthy visual identity for a digital-first bank.',
    industry: 'Finance',
    completionYear: '2024',
    thumbnail: novaBankLogo,
    tags: ['Illustrator', 'Figma', 'Brand Strategy'],
    featuredImage: novaBankLogo,
    clientObjective: 'Nova Bank needed a fresh logo and brand identity that communicated trust, innovation, and digital accessibility.',
    businessChallenge: 'Their old logo felt outdated and did not appeal to the millennial and Gen Z demographics.',
    strategy: 'We crafted a minimalist, bold logo and a cohesive visual system using deep blues and vibrant accents to convey stability and modernity.',
    results: {
      traffic: 'N/A',
      conversion: 'N/A',
      pageSpeed: 'N/A'
    },
    gallery: [
      'https://images.unsplash.com/photo-1616803140344-6682afb13cda?w=800&q=80',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80'
    ]
  }
];
