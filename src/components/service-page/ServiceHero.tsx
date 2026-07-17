import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import type { ServiceData } from '@/data/services';

export default function ServiceHero({ data }: { data: ServiceData }) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900 to-gray-900 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Premium Enterprise Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              {data.h1}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0 shadow-lg shadow-purple-500/25 h-14 px-8" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/5 h-14 px-8" asChild>
                <a href="tel:+916268366806">Call +91 62683 66806</a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-800">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-sm text-gray-400">4.9/5 Google Rating</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>&lt; 2 Hrs</span>
                </div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-1">10+ Years</div>
                <div className="text-sm text-gray-400">Of Experience</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>500+</span>
                </div>
                <div className="text-sm text-gray-400">Clients Served</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[2.5rem] blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
              <img 
                src={data.heroImage} 
                alt={data.h1}
                className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating UI Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Accelerated Growth</div>
                  <div className="text-sm text-gray-300">Data-driven strategies for scale</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Just importing a lucide icon for the floating element that wasn't at the top
import { TrendingUp } from 'lucide-react';
