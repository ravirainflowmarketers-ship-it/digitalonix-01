import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Monitor, ArrowRight, Share2, Download, Palette, Type, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { logoProjects } from '@/data/logoPortfolio';

export default function LogoDesignDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = logoProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild><Link to="/portfolio/logo-design">Back to Logos</Link></Button>
        </div>
      </div>
    );
  }

  const relatedProjects = logoProjects
    .filter(p => p.id !== project.id)
    .slice(0, 4);

  return (
    <>
      <SEO 
        title={`${project.title} - Logo Design | Digitalonix`}
        description={project.shortDescription}
      />

      {/* Main Container */}
      <div className="bg-gray-50 min-h-screen pb-20">
        {/* Navigation Bar */}
        <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/portfolio/logo-design" className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="hidden sm:flex gap-2 text-gray-500 hover:text-gray-900">
                <Share2 className="w-4 h-4" /> Share
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-16 pb-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {project.industry}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {project.style}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto">
                  {project.shortDescription}
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 relative aspect-[16/9] lg:aspect-[21/9] max-w-6xl mx-auto border border-gray-100 bg-gray-100"
            >
              <img 
                src={project.featuredImage} 
                alt={`${project.title} Logo Presentation`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Two Column Layout for Details */}
        <div className="container mx-auto px-4 md:px-6 mt-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-2/3 space-y-20">
              
              {/* Brief */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search className="w-6 h-6 text-gray-900" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">The Brief</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Background</h3>
                    <p className="text-gray-600 leading-relaxed">{project.clientBrief.background}</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Target Audience</h3>
                    <p className="text-gray-600 leading-relaxed">{project.clientBrief.targetAudience}</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Brand Personality</h3>
                    <p className="text-gray-600 leading-relaxed">{project.clientBrief.personality}</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Objectives</h3>
                    <p className="text-gray-600 leading-relaxed">{project.clientBrief.objectives}</p>
                  </div>
                </div>
              </section>

              {/* Challenge & Strategy */}
              <section className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
                
                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">The Challenge</h3>
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                      {project.challenges.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Creative Strategy</h3>
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                      {project.creativeStrategy.description}
                    </p>
                  </div>
                </div>
              </section>

              {/* Visual Identity System */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Visual Identity System</h2>
                
                <div className="space-y-12">
                  {/* Colors */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Palette className="w-5 h-5 text-gray-500" />
                      <h3 className="text-xl font-bold text-gray-900">Color Palette</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {project.colors.map((color, i) => (
                        <div key={i} className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm">
                          <div 
                            className="w-full h-32 rounded-2xl mb-4 shadow-inner"
                            style={{ backgroundColor: color.hex }}
                          ></div>
                          <div className="px-2">
                            <div className="font-bold text-gray-900">{color.name}</div>
                            <div className="text-sm text-gray-500 font-mono uppercase mt-1">{color.hex}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Type className="w-5 h-5 text-gray-500" />
                      <h3 className="text-xl font-bold text-gray-900">Typography</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center min-h-[200px]">
                        <div className="text-sm text-gray-500 font-medium mb-2 uppercase tracking-widest">Primary</div>
                        <div className="text-4xl font-bold text-gray-900 mb-4">{project.typography.primary}</div>
                        <div className="text-3xl text-gray-400 font-light truncate">Aa Bb Cc Dd Ee Ff</div>
                      </div>
                      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center min-h-[200px]">
                        <div className="text-sm text-gray-500 font-medium mb-2 uppercase tracking-widest">Secondary</div>
                        <div className="text-4xl font-bold text-gray-900 mb-4 font-serif">{project.typography.secondary}</div>
                        <div className="text-3xl text-gray-400 font-light truncate font-serif">Aa Bb Cc Dd Ee Ff</div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600 px-2">{project.typography.usage}</p>
                  </div>
                </div>
              </section>

              {/* Gallery / Mockups */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Brand Application</h2>
                <div className="space-y-8">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
                      <img src={img} alt={`Brand Mockup ${i + 1}`} className="w-full h-auto" loading="lazy" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Results */}
              <section className="bg-purple-50 rounded-[3rem] p-10 md:p-16 border border-purple-100 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Brand Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <div className="text-5xl font-black text-purple-600 mb-2">{project.results.recognition}</div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Brand Recognition</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-purple-600 mb-2">{project.results.recall}</div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Customer Recall</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-purple-600 mb-2">{project.results.engagement}</div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Social Engagement</div>
                  </div>
                </div>
              </section>

              {/* Testimonial */}
              <section>
                <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl shadow-gray-200/20 text-center relative">
                  <div className="text-6xl text-purple-200 absolute top-10 left-10 font-serif">"</div>
                  <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-10 relative z-10">
                    {project.testimonial.text}
                  </p>
                  <div className="flex flex-col items-center justify-center">
                    <img 
                      src={project.testimonial.avatar} 
                      alt={project.testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-white shadow-md"
                    />
                    <div className="font-bold text-gray-900 text-lg">{project.testimonial.name}</div>
                    <div className="text-purple-600 text-sm font-medium">{project.testimonial.role}</div>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Sidebar (Sticky) */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                
                {/* Info Card */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Project Details</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Industry</div>
                      <div className="font-medium text-gray-900">{project.industry}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Timeline</div>
                      <div className="font-medium text-gray-900">{project.completionYear}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Services</div>
                      <div className="font-medium text-gray-900">Brand Identity, Logo Design, Strategy</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Deliverables</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['AI', 'EPS', 'SVG', 'PNG', 'Brand Guide'].map(tag => (
                          <span key={tag} className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <Button className="w-full h-12 rounded-xl bg-gray-900 text-white hover:bg-gray-800 font-bold mb-3">
                      <Download className="w-4 h-4 mr-2" /> Download Brand Guide
                    </Button>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-purple-900 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold mb-4">Need a new logo?</h3>
                    <p className="text-purple-200 mb-6 text-sm">Let's create a visual identity that perfectly represents your business.</p>
                    <Button className="w-full h-12 rounded-xl bg-white text-purple-900 hover:bg-gray-100 font-bold" asChild>
                      <Link to="/contact">Start Your Project</Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Projects */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <h2 className="text-3xl font-bold text-gray-900">More Branding Projects</h2>
            <Link to="/portfolio/logo-design" className="text-purple-600 font-bold hover:text-purple-800 flex items-center gap-2 group">
              View All Logos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProjects.map((p) => (
               <Link to={`/portfolio/logo-design/${p.slug}`} key={p.id} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                      <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{p.title}</h3>
                      <p className="text-sm text-gray-500 uppercase tracking-wider">{p.style}</p>
                    </div>
                  </div>
               </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
