import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Filter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { portfolioCategories, portfolioProjects } from '@/data/portfolio';

interface PortfolioProps {
  initialCategory?: string;
}

export default function Portfolio({ initialCategory }: PortfolioProps) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');

  // Update URL and state when a category is selected
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      navigate('/portfolio');
    } else {
      navigate(`/portfolio/${categoryId}`);
    }
  };

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return portfolioProjects;
    return portfolioProjects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO 
        title="Our Portfolio | Digitalonix" 
        description="Explore our latest work in web design, SEO, and digital marketing. See how we help businesses grow with premium digital solutions."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 bg-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 opacity-90"></div>
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at center, #6b21a8 0%, transparent 50%)',
              backgroundSize: '100% 100%'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium tracking-wider mb-6 border border-purple-500/30">
              OUR WORK
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Creative Work That Delivers Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Business Results</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Explore our portfolio of premium websites, strategic marketing campaigns, and brand identities engineered for ambitious brands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12 text-white"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-purple-400">200+</span>
              <span className="text-gray-400 text-sm mt-1 uppercase tracking-wider">Projects Delivered</span>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-purple-400">98%</span>
              <span className="text-gray-400 text-sm mt-1 uppercase tracking-wider">Client Retention</span>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-purple-400">10M+</span>
              <span className="text-gray-400 text-sm mt-1 uppercase tracking-wider">Revenue Generated</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 mr-4 text-gray-500 font-medium">
              <Filter className="w-5 h-5" /> Filter:
            </div>
            {portfolioCategories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-700 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                      <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/90 backdrop-blur-sm text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                          {project.categoryName}
                        </span>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                        <Link to={`/portfolio/${project.slug}`} className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                          <ExternalLink className="w-6 h-6 text-purple-700" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        <Link to={`/portfolio/${project.slug}`}>{project.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                        {project.shortDescription}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link 
                          to={`/portfolio/${project.slug}`} 
                          className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                        >
                          View Case Study <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category.</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our premium digital solutions.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 h-14 px-8 text-lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
