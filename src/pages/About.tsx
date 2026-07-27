import { Link } from 'react-router-dom';
import { motion, animate, useInView } from 'framer-motion';
import { Target, Users, Zap, Award, ArrowRight, CheckCircle, TrendingUp, Shield, BarChart, Heart, Lightbulb, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { useEffect, useState, useRef } from 'react';

function CountUp({ end, suffix = "", decimals = 0, duration = 2 }: { end: number, suffix?: string, decimals?: number, duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, end, {
        duration,
        onUpdate: (val) => setValue(val),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [end, inView, duration]);

  return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>;
}

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | Digitalonix" 
        description="Learn more about Digitalonix, Bhopal's leading premium digital agency driving business growth through technology and marketing." 
      />
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900 to-gray-900 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Bhopal's Leading Digital Agency</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
                We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Digitalonix</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-300 font-medium mb-8 tracking-wide">
                Bhopal's Leading Performance-Driven Digital Agency
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                We don't just build websites and run campaigns. We build <strong className="text-white font-normal">digital empires</strong>. Partner with us to scale your business through data-driven marketing, intelligent automation, and premium design.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0 shadow-[0_8px_30px_-4px_rgba(147,51,234,0.3)] hover:shadow-[0_12px_40px_-4px_rgba(147,51,234,0.4)] h-14 px-8 text-lg transition-all duration-300 hover:-translate-y-1" asChild>
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/5 h-14 px-8 text-lg transition-all duration-300 hover:-translate-y-1" asChild>
                  <Link to="/portfolio">Explore Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Social Proof Section */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                <CountUp end={200} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium tracking-wide text-sm uppercase">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                <CountUp end={150} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium tracking-wide text-sm uppercase">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                <CountUp end={3} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium tracking-wide text-sm uppercase">Years of Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                <CountUp end={4.9} decimals={1} suffix="/5" />
              </div>
              <div className="text-gray-600 font-medium tracking-wide text-sm uppercase">Google Rating</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
          >
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-[2rem] overflow-hidden bg-gray-100 aspect-[4/5] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] group">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                   alt="Digitalonix Team" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent flex items-end p-10">
                   <div className="text-white">
                     <div className="font-bold text-3xl mb-2 tracking-tight">A Dedicated Team</div>
                     <div className="text-white/90 text-lg font-light">Committed to your absolute success</div>
                   </div>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-bold mb-6 tracking-wider uppercase border border-purple-100">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                Not Just An Agency.<br/>Your Strategic Growth Partner.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                  Digitalonix is a premium, full-service digital agency based in Bhopal. We specialize in transforming businesses into dominant online brands through <strong className="text-gray-900 font-semibold">precision-engineered websites, high-impact marketing, and intelligent AI automation.</strong>
                </p>
                <p>
                  What makes us different? We don't believe in vanity metrics. We focus entirely on <strong className="text-gray-900 font-semibold">measurable growth and performance.</strong> Your business goals become our ultimate priority, and we deploy a tailored mix of strategy, technology, and creativity to get you there.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-purple-600 shrink-0" />
                  <span className="font-semibold text-gray-900">Proven ROI-Focused Strategies</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-purple-600 shrink-0" />
                  <span className="font-semibold text-gray-900">Premium Quality Execution</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-purple-600 shrink-0" />
                  <span className="font-semibold text-gray-900">Transparent Communication</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-purple-600 shrink-0" />
                  <span className="font-semibold text-gray-900">Long-Term Partnerships</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Our Mission Section */}
      <section className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-bold mb-8 tracking-wider uppercase border border-white/20 backdrop-blur-sm">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-[1.15] tracking-tight">
              To empower ambitious businesses with the digital architecture required to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">dominate their markets</span>.
            </h2>
            <div className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light space-y-6">
              <p>
                We believe that every business has the potential to scale infinitely online. However, poor design, lack of strategy, and outdated technology hold them back.
              </p>
              <p>
                Our mission is to eliminate those barriers. We provide <strong className="text-white font-semibold">data-driven decisions</strong>, <strong className="text-white font-semibold">pixel-perfect design</strong>, and <strong className="text-white font-semibold">relentless execution</strong> to ensure you stay miles ahead of your competition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Why Choose Digitalonix? Section */}
      <section className="py-24 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Why Choose Digitalonix?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We operate differently. No fluff, no vanity metrics. Just pure, <strong className="font-semibold text-gray-900">execution-driven strategies</strong> that scale your revenue and elevate your brand.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Result-Oriented Strategies", desc: "We design campaigns focused squarely on generating leads, conversions, and revenue, avoiding metrics that don't impact your bottom line.", colorClass: "bg-purple-50 text-purple-600 group-hover:bg-purple-100" },
              { icon: BarChart, title: "Data-Driven Decision Making", desc: "Every action we take is backed by deep analytics and hard data. We test, measure, and optimize to guarantee continuous improvement.", colorClass: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100" },
              { icon: Users, title: "Experienced Team", desc: "A highly skilled collective of industry veterans, technical experts, and creative visionaries working synergistically on your brand.", colorClass: "bg-blue-50 text-blue-600 group-hover:bg-blue-100" },
              { icon: TrendingUp, title: "ROI-Focused Execution", desc: "We view our services as an investment, not an expense. Our frameworks are engineered to deliver a significant return on every dollar spent.", colorClass: "bg-pink-50 text-pink-600 group-hover:bg-pink-100" },
              { icon: Zap, title: "Transparent Communication", desc: "Total visibility into your campaigns with clear, comprehensive reporting. You will always know exactly how your investment is performing.", colorClass: "bg-teal-50 text-teal-600 group-hover:bg-teal-100" },
              { icon: Award, title: "Premium Quality Standard", desc: "We refuse to deliver average work. From code structure to ad copywriting, everything we produce meets the highest standard of excellence.", colorClass: "bg-orange-50 text-orange-600 group-hover:bg-orange-100" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${item.colorClass} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Core Values Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The foundational principles that guide every decision, strategy, and interaction at Digitalonix.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Honesty and radical transparency in all our partnerships.", color: "text-purple-600 bg-purple-50 group-hover:bg-purple-100" },
              { icon: Lightbulb, title: "Innovation", desc: "Constantly adapting to leverage the bleeding edge of technology.", color: "text-indigo-600 bg-indigo-50 group-hover:bg-indigo-100" },
              { icon: Clock, title: "Accountability", desc: "Taking absolute ownership of your outcomes and our execution.", color: "text-blue-600 bg-blue-50 group-hover:bg-blue-100" },
              { icon: TrendingUp, title: "Performance", desc: "A relentless commitment to exceeding baseline metrics.", color: "text-pink-600 bg-pink-50 group-hover:bg-pink-100" },
              { icon: Heart, title: "Client Success", desc: "Your growth is the only metric that truly validates our work.", color: "text-green-600 bg-green-50 group-hover:bg-green-100" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mx-auto ${item.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Founder Message Section */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-gray-100 relative group hover:shadow-[0_20px_50px_-4px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            <svg className="absolute top-10 left-10 md:top-14 md:left-14 w-16 h-16 md:w-24 md:h-24 text-purple-100 group-hover:text-purple-200 transition-colors duration-500 -z-0" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <div className="relative z-10 pl-4 md:pl-12 pt-8 md:pt-12">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-snug font-semibold mb-12 tracking-tight">
                "We didn't start Digitalonix to be just another agency. We started it because we saw businesses being underserved by vanity metrics and outdated strategies. We built this company to be a true growth partner—one that cares deeply about your bottom line, operates with absolute integrity, and delivers premium, world-class execution."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 overflow-hidden shrink-0 border-2 border-white shadow-lg">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl">Leadership Team</div>
                  <div className="text-purple-600 font-semibold tracking-wide uppercase text-sm mt-1">Digitalonix</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
              Let's Build Something <br className="hidden md:block"/> Powerful Together
            </h2>
            <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Stop leaving revenue on the table. Partner with a dedicated team of experts to accelerate your digital growth journey today.
            </p>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-50 h-16 px-12 text-xl font-semibold shadow-[0_8px_30px_-4px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 rounded-full" asChild>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
