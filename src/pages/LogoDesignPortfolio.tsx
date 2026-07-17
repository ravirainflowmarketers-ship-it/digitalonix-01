import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { logoCategories, logoProjects } from '@/data/logoPortfolio';

export default function LogoDesignPortfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return logoProjects;
    return logoProjects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO 
        title="Logo Design Portfolio | Custom Branding by Digitalonix" 
        description="Explore our portfolio of premium logo designs and brand identities. We craft custom logos that build strong, memorable businesses."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-900 relative overflow-hidden">
        {/* Abstract animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-950 opacity-90"></div>
          
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full opacity-20 blur-[100px]"
            style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }}
          />
          <motion.div 
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 40, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-20 blur-[100px]"
            style={{ background: 'radial-gradient(circle, #4f46e5, transparent 70%)' }}
          />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 text-purple-300 text-sm font-medium tracking-wide mb-8 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              Creative Branding Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
              Logo Designs That Build <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">Strong & Memorable Brands</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
              We create custom, strategically crafted logos that capture your brand's essence, establishing a professional and recognizable identity that resonates with your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-white text-gray-900 hover:bg-gray-100 rounded-full group" asChild>
                <a href="#portfolio-grid">
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10" asChild>
                <Link to="/contact">Start Your Branding Project</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
          >
            {[
              { label: 'Custom Logos Designed', value: '120+' },
              { label: 'Happy Branding Clients', value: '85+' },
              { label: 'Industries Served', value: '20+' },
              { label: 'Client Satisfaction', value: '98%' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-purple-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section id="portfolio-grid" className="py-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <div className="flex items-center gap-2 mr-2 text-gray-500 font-medium hidden sm:flex">
              <Filter className="w-5 h-5" /> Filter:
            </div>
            {logoCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 shadow-sm'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group"
                >
                  <Link to={`/portfolio/logo-design/${project.slug}`} className="block h-full">
                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                        <img 
                          src={project.thumbnail} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-6 left-6 z-20 flex gap-2">
                          <span className="bg-white/95 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                            {project.style}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow bg-white relative">
                        {/* Floating Action Button */}
                        <div className="absolute right-8 -top-8 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-30">
                          <ArrowRight className="w-6 h-6" />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                          <span className="text-sm font-medium text-gray-400">{project.completionYear}</span>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {project.shortDescription}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-gray-100">
                          <div className="text-sm font-medium text-purple-600 uppercase tracking-wider">
                            {project.industry}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 bg-white rounded-[2rem] border border-gray-100 max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found in this category</h3>
              <p className="text-gray-500 mb-8">Try selecting a different style or viewing all projects.</p>
              <Button onClick={() => setActiveCategory('all')} variant="outline" className="rounded-full">
                View All Logos
              </Button>
            </motion.div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Build Your Brand Identity?</h2>
          <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto font-light">
            Let's create a custom logo that captures your vision and connects with your target audience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-purple-900 hover:bg-gray-100" asChild>
              <Link to="/contact">Start Your Logo Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/20 hover:bg-white/10" asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
