import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Monitor, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { portfolioProjects } from '@/data/portfolio';

interface ProjectDetailsProps {
  slug?: string;
}

export default function ProjectDetails({ slug: propSlug }: ProjectDetailsProps) {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = propSlug || paramSlug;
  const project = portfolioProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild><Link to="/portfolio">Back to Portfolio</Link></Button>
        </div>
      </div>
    );
  }

  const relatedProjects = portfolioProjects
    .filter(p => p.id !== project.id && (p.category === project.category || true))
    .slice(0, 2);

  return (
    <>
      <SEO 
        title={`${project.title} | Portfolio | Digitalonix`}
        description={project.shortDescription}
      />

      {/* Back button */}
      <div className="fixed top-24 left-4 md:left-8 z-40 hidden lg:block">
        <Link to="/portfolio" className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {project.categoryName}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 font-medium">{project.completionYear}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                {project.shortDescription}
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/9] max-w-6xl mx-auto"
          >
            <img 
              src={project.featuredImage} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Meta Info */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Industry</h4>
              <p className="text-lg font-medium text-gray-900">{project.industry}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Services</h4>
              <p className="text-lg font-medium text-gray-900">{project.categoryName}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-sm font-medium text-gray-900">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Timeline</h4>
              <p className="text-lg font-medium text-gray-900">{project.completionYear}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Project */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Objective</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.clientObjective}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  The Challenge
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.businessChallenge}
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  Our Strategy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.strategy}
                </p>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impact & Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 text-center">
                  <TrendingUp className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{project.results.traffic}</div>
                  <p className="text-gray-500 font-medium">Traffic Increase</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-indigo-100 text-center">
                  <CheckCircle className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{project.results.conversion}</div>
                  <p className="text-gray-500 font-medium">Conversion Rate</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 text-center">
                  <Monitor className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{project.results.pageSpeed}</div>
                  <p className="text-gray-500 font-medium">PageSpeed Score</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {project.gallery.map((img, i) => (
              <div key={i} className={`rounded-3xl overflow-hidden shadow-lg aspect-[4/3] ${i === 2 ? 'md:col-span-2 aspect-[21/9]' : ''}`}>
                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">Related Projects</h2>
            <Link to="/portfolio" className="text-purple-600 font-semibold hover:text-purple-800 flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {relatedProjects.map((p) => (
               <Link to={`/portfolio/${p.slug}`} key={p.id} className="group">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-sm font-semibold text-purple-600 mb-2">{p.categoryName}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">{p.title}</h3>
                    </div>
                  </div>
               </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for similar results?</h2>
          <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 h-14 px-8 text-lg" asChild>
            <Link to="/contact">Request a Proposal</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
