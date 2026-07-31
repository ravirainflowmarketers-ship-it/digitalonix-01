import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function CountUp({ to, duration = 2, decimals = 0 }: { to: number; duration?: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Monitor, ShoppingCart, Search, 
  TrendingUp, Share2, MousePointerClick, Palette, Smartphone, 
  Globe, Edit3, LayoutTemplate, Shield, Plus, Minus,
  HeartPulse, Home as HomeIcon, GraduationCap, ShoppingBag, Landmark, 
  Utensils, Plane, Cpu, Factory, Scale, Dumbbell, Sparkles,
  Zap, BarChart, Lock, Lightbulb, Users, Clock, BrainCircuit, Target, MapPin, Megaphone, PenTool, Video, LineChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';


const services = [
  { icon: TrendingUp, title: 'Digital Marketing', desc: 'Complete digital growth strategies tailored to scale brands online. We combine data, creativity, and performance marketing to drive measurable results.', color: 'bg-red-100 text-red-600', group: 'group-hover:bg-red-600 group-hover:text-white', path: '/digital-marketing-company-in-bhopal' },
  { icon: BrainCircuit, title: 'AI Automations', desc: 'Smart AI-powered systems that automate workflows, lead management, customer responses, and business operations to save time and increase efficiency.', color: 'bg-indigo-100 text-indigo-600', group: 'group-hover:bg-indigo-600 group-hover:text-white', path: '/ai-automation-company-in-bhopal' },
  { icon: Target, title: 'Paid Ads', desc: 'High-converting ad campaigns across Google, Meta, and other platforms designed to maximize ROI and generate quality leads and sales.', color: 'bg-yellow-100 text-yellow-600', group: 'group-hover:bg-yellow-600 group-hover:text-white', path: '/google-ads-agency-in-bhopal' },
  { icon: LineChart, title: 'Performance Marketing', desc: 'ROI-focused marketing strategies designed to maximize conversions, optimize ad spend, and scale your business profitably.', color: 'bg-sky-100 text-sky-600', group: 'group-hover:bg-sky-600 group-hover:text-white', path: '/performance-marketing-company-in-bhopal' },
  { icon: Share2, title: 'Social Media Marketing', desc: 'Strategic content planning, growth strategies, and engagement techniques to build strong brand presence and loyal communities.', color: 'bg-pink-100 text-pink-600', group: 'group-hover:bg-pink-600 group-hover:text-white', path: '/social-media-marketing-company-in-bhopal' },
  { icon: MapPin, title: 'Google My Business Optimization', desc: 'Optimize and manage your GMB profile to increase local visibility, drive traffic, and generate more local leads.', color: 'bg-emerald-100 text-emerald-600', group: 'group-hover:bg-emerald-600 group-hover:text-white', path: '/google-my-business' },
  { icon: Search, title: 'SEO', desc: 'Data-driven SEO strategies to improve rankings, increase organic traffic, and boost long-term online visibility.', color: 'bg-orange-100 text-orange-600', group: 'group-hover:bg-orange-600 group-hover:text-white', path: '/seo-company-in-bhopal' },
  { icon: LayoutTemplate, title: 'Website Design', desc: 'Conversion-focused, modern, and responsive websites designed to elevate your brand and turn visitors into customers.', color: 'bg-purple-100 text-purple-600', group: 'group-hover:bg-purple-600 group-hover:text-white', path: '/website-design-company-in-bhopal' },
  { icon: Megaphone, title: 'PR Management', desc: 'Strategic media placements and brand positioning to build credibility, authority, and public trust.', color: 'bg-blue-100 text-blue-600', group: 'group-hover:bg-blue-600 group-hover:text-white', path: '/pr-management' },
  { icon: PenTool, title: 'Content Creation', desc: 'High-quality, engaging content tailored for websites, ads, and social media to strengthen brand messaging and audience connection.', color: 'bg-cyan-100 text-cyan-600', group: 'group-hover:bg-cyan-600 group-hover:text-white', path: '/content-creation' },
  { icon: Video, title: 'Video Editing', desc: 'Professional video editing that enhances storytelling, boosts engagement, and increases social media performance.', color: 'bg-rose-100 text-rose-600', group: 'group-hover:bg-rose-600 group-hover:text-white', path: '/video-editing' },
  { icon: Palette, title: 'Graphic Designing', desc: 'Creative and impactful visuals including branding, social media creatives, ads, and marketing materials.', color: 'bg-teal-100 text-teal-600', group: 'group-hover:bg-teal-600 group-hover:text-white', path: '/graphic-design-company-in-bhopal' },
];

const features = [
  { icon: Zap, title: 'Lightning-Fast Delivery', desc: 'We value your time and deliver high-quality projects on schedule without compromising on excellence.' },
  { icon: BarChart, title: 'ROI-Focused Strategy', desc: 'Every decision we make is backed by data, ensuring maximum return on your digital investments.' },
  { icon: Lock, title: 'Transparent & Trustworthy', desc: 'No hidden fees or confusing jargon. We maintain clear communication throughout the entire process.' },
  { icon: Lightbulb, title: 'Innovation-Led Solutions', desc: 'We stay ahead of the curve, utilizing the latest technologies to give your business a competitive edge.' },
  { icon: Users, title: 'Dedicated Account Managers', desc: 'You get a single point of contact who understands your business and acts as your internal advocate.' },
  { icon: Clock, title: 'Long-Term Partnership', desc: 'We don\'t disappear after delivery — we grow with you, every step of the way.' }
];

const industries = [
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: HomeIcon, name: 'Real Estate' },
  { icon: GraduationCap, name: 'Education' },
  { icon: ShoppingBag, name: 'E-commerce' },
  { icon: Landmark, name: 'Finance' },
  { icon: Utensils, name: 'Restaurant' },
  { icon: Plane, name: 'Travel' },
  { icon: Cpu, name: 'Technology' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Scale, name: 'Legal' },
  { icon: Dumbbell, name: 'Fitness' },
  { icon: Sparkles, name: 'Beauty' }
];

const testimonials = [
  {
    name: 'Rajeev Sharma',
    role: 'CEO',
    company: 'TechVision India',
    content: 'Digitalonix completely transformed our online presence. Their web development and SEO strategies resulted in a 300% increase in our organic traffic within just six months. Highly recommended!',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Marketing Director',
    company: 'Aura Lifestyle',
    content: 'The team at Digitalonix is exceptional. They built a stunning e-commerce platform for us and their Google Ads campaigns delivered immediate ROI. They truly are the best digital agency in Bhopal.',
    rating: 5
  },
  {
    name: 'Amit Verma',
    role: 'Founder',
    company: 'Verma Properties',
    content: 'We struggled to generate quality leads before partnering with Digitalonix. Their holistic approach to digital marketing and branding has elevated our real estate business to the next level.',
    rating: 5
  }
];

const faqs = [
  {
    question: 'How much does a professional website cost in Bhopal?',
    answer: 'The cost of a professional website in Bhopal depends entirely on your specific requirements, such as the complexity of the design, the number of pages, custom functionalities (like e-commerce or booking systems), and integration needs. For a basic informative website, pricing can start from an affordable range, while comprehensive, custom-built e-commerce platforms or enterprise solutions require a more significant investment. At Digitalonix, we offer transparent pricing after a thorough discovery call to ensure you get exactly what your business needs for sustainable growth.'
  },
  {
    question: 'How long does it take to see results from SEO?',
    answer: 'SEO is a long-term strategy. While some initial improvements can be seen within the first month due to technical optimizations, significant organic growth typically takes 3 to 6 months. This timeline depends on your industry competitiveness, current website authority, and the consistency of the content strategy. We provide monthly transparent reports so you can track the continuous progress of your campaigns.'
  },
  {
    question: 'Do you provide website maintenance and support after launch?',
    answer: 'Absolutely. We believe that launching a website is just the beginning. We offer comprehensive maintenance packages that include regular security updates, performance monitoring, bug fixes, and content updates to ensure your digital asset remains secure, fast, and up-to-date at all times.'
  },
  {
    question: 'Why should I choose Digitalonix over other agencies?',
    answer: 'Digitalonix stands out through our commitment to measurable results and uncompromising quality. With over 200 successful projects, a 4.9-star rating, and a team of 25+ experts, we do not just build websites—we build digital empires. Our ISO-certified processes ensure transparency, and our focus is entirely on generating tangible business growth (ROI) for our clients.'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
      <SEO 
        title="Digitalonix | Top Digital Agency in Bhopal" 
        description="Bhopal's most trusted digital agency. We specialize in Web Development, SEO, and Digital Marketing to build digital empires and drive real growth."
      />

      {/* 1) HERO SECTION */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-24 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-950 opacity-100"></div>
          {/* Subtle floating particles background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
          
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-600/30 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-indigo-600/30 rounded-full blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold text-white mb-8 tracking-tight leading-[1.1]">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-sm">Digital Empires</span><br className="hidden md:block" /> That Drive Real Growth
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Digitalonix is one of Bhopal's most trusted Digital Marketing Agencies. From stunning websites to powerful SEO and marketing campaigns—we transform your vision into real, measurable business success.
            </p>

            {/* Service tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm text-gray-200">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"><CheckCircle className="w-4 h-4 text-purple-400"/> Digital Marketing & SMM</span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"><CheckCircle className="w-4 h-4 text-purple-400"/> Web Development & SEO</span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"><CheckCircle className="w-4 h-4 text-purple-400"/> Branding & Design</span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"><CheckCircle className="w-4 h-4 text-purple-400"/> Content Creation & Paid Ads</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all shadow-lg shadow-purple-600/30 group" asChild>
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 font-semibold backdrop-blur-sm transition-all" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Stats row */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-white/10 pt-12"
            >
              {[
                { label: 'Projects Delivered', value: 200, suffix: '+', suffixColor: 'text-yellow-400' },
                { label: 'Happy Clients', value: 150, suffix: '+', suffixColor: 'text-yellow-400' },
                { label: 'Google Rating', value: 4.9, suffix: '★', decimals: 1, suffixColor: 'text-yellow-400' },
                { label: 'Client Retention Rate', value: 98, suffix: '%', suffixColor: 'text-yellow-400' }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
                    <CountUp to={stat.value} decimals={stat.decimals || 0} />
                    {stat.suffix && <span className={`text-3xl ${stat.suffixColor} ml-1`}>{stat.suffix}</span>}
                  </div>
                  <div className="text-sm text-purple-300 font-medium uppercase tracking-wider group-hover:text-purple-200 transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2) WHAT WE DO SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Full-Service Digital Solutions That Deliver Results</h2>
            <p className="text-lg text-gray-600">From strategy to execution, we offer everything your business needs to dominate the digital landscape and achieve sustainable growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={service.path} className="block bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${service.color} ${service.group}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) ABOUT SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-gray-100">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="Digitalonix Team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-5xl font-bold mb-2">3+</div>
                  <div className="text-lg font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Bhopal's Most Trusted Digital Partner</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since our inception in 2019, Digitalonix has been driven by a singular mission: to empower businesses with cutting-edge digital solutions. We combine creative design with robust engineering and data-driven marketing to help brands thrive in the modern economy.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  '3+ Years of Digital Excellence',
                  '200+ Successful Projects Delivered',
                  'Expert Team of 10+ Professionals',
                  'ISO-Certified Quality Processes',
                  '95% Client Satisfaction Guarantee',
                  '98% Dedicated Support'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg shadow-purple-600/20" asChild>
                  <Link to="/about">Discover Our Story</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold" asChild>
                  <Link to="/contact">Talk to Experts</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) WHY CHOOSE US (Dark Section) */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Why Businesses Choose Digitalonix</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Premium Custom Illustration */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
            >
              <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm relative h-full min-h-[400px] flex items-center justify-center">
                <svg width="100%" height="400px" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain p-6">
                  <circle cx="250" cy="200" r="150" fill="#7c3aed" opacity="0.2" filter="blur(40px)" />
                  <circle cx="350" cy="100" r="100" fill="#8b5cf6" opacity="0.2" filter="blur(30px)" />
                  
                  <path d="M 100 300 L 400 300 C 410 300 415 305 410 315 L 90 315 C 85 305 90 300 100 300 Z" fill="#1e1b4b" />
                  <rect x="130" y="150" width="240" height="150" rx="8" fill="#312e81" stroke="#4c1d95" strokeWidth="4" />
                  <path d="M 150 270 L 190 230 L 230 250 L 300 180" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="300" cy="180" r="6" fill="#fff" />
                  <rect x="150" y="240" width="20" height="40" rx="2" fill="#7c3aed" opacity="0.6" />
                  <rect x="180" y="220" width="20" height="60" rx="2" fill="#7c3aed" opacity="0.6" />
                  <rect x="210" y="250" width="20" height="30" rx="2" fill="#7c3aed" opacity="0.6" />
                  <rect x="240" y="210" width="20" height="70" rx="2" fill="#7c3aed" opacity="0.6" />
                  <rect x="270" y="170" width="20" height="110" rx="2" fill="#8b5cf6" />
                  
                  <g transform="translate(320, 80) rotate(45)">
                    <path d="M0,40 C0,40 10,10 20,0 C30,10 40,40 40,40 C40,40 30,30 20,30 C10,30 0,40 0,40 Z" fill="#ffffff" />
                    <path d="M20,0 C30,10 40,40 40,40 L30,30 L20,30 Z" fill="#e2e8f0" />
                    <path d="M10,40 L0,60 L20,50 Z" fill="#7c3aed" />
                    <path d="M30,40 L40,60 L20,50 Z" fill="#8b5cf6" />
                    <circle cx="20" cy="25" r="4" fill="#1e1b4b" />
                    <path d="M15,50 C15,50 20,70 25,50 Z" fill="#f59e0b" />
                  </g>
                  
                  <rect x="80" y="180" width="60" height="110" rx="8" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="3" />
                  <rect x="88" y="190" width="44" height="90" rx="4" fill="#4c1d95" />
                  <circle cx="110" cy="240" r="15" fill="none" stroke="#8b5cf6" strokeWidth="3" />
                  <path d="M 110 240 L 115 235" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  
                  <path d="M 400 150 L 405 160 L 415 165 L 405 170 L 400 180 L 395 170 L 385 165 L 395 160 Z" fill="#fff" opacity="0.8" />
                  <path d="M 120 100 L 122 106 L 128 108 L 122 110 L 120 116 L 118 110 L 112 108 L 118 106 Z" fill="#8b5cf6" opacity="0.6" />
                  <path d="M 220 80 L 223 90 L 233 93 L 223 96 L 220 106 L 217 96 L 207 93 L 217 90 Z" fill="#fff" opacity="0.9" />
                  <circle cx="380" cy="250" r="3" fill="#8b5cf6" />
                  <circle cx="150" cy="120" r="4" fill="#7c3aed" />
                  <circle cx="420" cy="100" r="2" fill="#fff" />
                  
                  <rect x="360" y="260" width="40" height="25" rx="4" fill="#7c3aed" opacity="0.8" />
                  <rect x="365" y="265" width="15" height="4" rx="2" fill="#fff" />
                  <rect x="365" y="275" width="25" height="4" rx="2" fill="#fff" opacity="0.5" />
                  
                  <rect x="50" y="120" width="45" height="30" rx="6" fill="#8b5cf6" opacity="0.7" />
                  <path d="M60 135 L70 140 L85 128" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>

            {/* Right side: Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mb-4 group-hover:bg-purple-600/40 transition-colors">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5) OUR PROCESS (6 STEPS) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">How We Turn Your Vision Into Digital Reality</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Discovery & Strategy', desc: 'We analyze your business, target audience, and competition to formulate a winning digital plan.' },
              { num: '02', title: 'Design & Prototype', desc: 'Our creative team crafts wireframes and pixel-perfect designs aligned with your brand identity.' },
              { num: '03', title: 'Development', desc: 'Using modern frameworks, we build clean, scalable, and responsive architectures.' },
              { num: '04', title: 'Testing & QA', desc: 'Rigorous testing ensures performance, security, and flawless cross-device compatibility.' },
              { num: '05', title: 'Launch & Deploy', desc: 'We handle the deployment process smoothly, ensuring a perfect go-live experience.' },
              { num: '06', title: 'Growth & Support', desc: 'Post-launch, we provide continuous marketing, maintenance, and analytics-driven optimization.' }
            ].map((step, i) => (
              <div key={i} className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 -right-4 text-[8rem] font-bold text-gray-50 opacity-50 group-hover:text-purple-50 transition-colors select-none leading-none">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="text-purple-600 font-bold text-xl mb-4">{step.num}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) INDUSTRIES WE SERVE */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Industries We Serve</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <ind.icon className="w-10 h-10 text-gray-400 group-hover:text-purple-600 mb-4 transition-colors" />
                <span className="font-semibold text-gray-700 group-hover:text-gray-900 text-sm text-center">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7) TESTIMONIALS */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">What Our Clients Say About Us</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl font-bold text-gray-900">4.9/5</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-gray-600">on Google (33+ Verified Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
                <div className="text-yellow-400 flex mb-6">
                  {[...Array(test.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 italic">"{test.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center font-bold text-purple-700">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{test.name}</h4>
                    <p className="text-sm text-gray-500">{test.role}, {test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8) BLOG SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Digital Marketing Tips & Trends</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', cat: 'SEO', title: 'The Ultimate Guide to Local SEO in 2026', desc: 'Learn how to dominate local search results and drive foot traffic to your physical store using advanced GMB strategies.' },
              { num: '02', cat: 'Web Development', title: 'Why Site Speed is Critical for Conversions', desc: 'Discover the hidden impact of core web vitals on your bottom line and how to optimize your architecture.' },
              { num: '03', cat: 'Marketing', title: 'Maximizing ROI with Omni-channel Marketing', desc: 'A strategic approach to integrating your email, social, and search campaigns for a seamless customer journey.' }
            ].map((blog, i) => (
              <div key={i} className="group relative bg-gray-50 rounded-[2.5rem] p-8 overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="absolute -bottom-6 -right-6 text-[10rem] font-black text-gray-200/50 group-hover:text-purple-100/50 transition-colors select-none leading-none z-0">
                  {blog.num}
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6">
                    {blog.cat}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-8 line-clamp-3">{blog.desc}</p>
                  <Link to="#" className="inline-flex items-center font-bold text-purple-600 group-hover:text-purple-800 transition-colors">
                    Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9) FAQ SECTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-purple-200 shadow-md' : 'border-gray-200 shadow-sm'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-gray-900 text-lg pr-8">{faq.question}</span>
                  {openFaq === i ? (
                    <Minus className="w-5 h-5 text-purple-600 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10) FINAL CTA SECTION */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tight">
            Let's Build Something <br className="hidden md:block"/> Extraordinary Together
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-purple-900 hover:bg-gray-100 font-bold shadow-xl" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 font-bold backdrop-blur-sm" asChild>
              <a href="tel:+916268366806">+91 62683 66806</a>
            </Button>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white border-t border-white/10 pt-12 max-w-3xl mx-auto"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="text-center">
              <div className="text-3xl font-bold mb-1"><CountUp to={200} /><span className="text-yellow-400">+</span></div>
              <div className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Projects</div>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="w-px h-10 bg-white/20 hidden md:block"></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="text-center">
              <div className="text-3xl font-bold mb-1 flex justify-center items-center gap-1"><CountUp to={4.9} decimals={1} /> <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /></div>
              <div className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Rating</div>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="w-px h-10 bg-white/20 hidden md:block"></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="text-center">
              <div className="text-3xl font-bold mb-1"><CountUp to={98} /><span className="text-yellow-400">%</span></div>
              <div className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Client Retention Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
