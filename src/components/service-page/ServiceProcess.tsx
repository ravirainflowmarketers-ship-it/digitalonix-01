import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { ServiceData } from '@/data/services';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

const IconWrapper = ({ icon, className = "w-6 h-6" }: { icon: string, className?: string }) => {
  const LucideIcon = (Icons as any)[icon] || Icons.CheckCircle;
  return <LucideIcon className={className} />;
};

export default function ServiceProcess({ data }: { data: ServiceData }) {
  return (
    <>
      {/* Services Included Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Services Included</h2>
            <p className="text-xl text-gray-600">A comprehensive suite of capabilities to ensure your project's success from end to end.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.servicesIncluded.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-purple-100 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <IconWrapper icon={service.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process (Timeline) */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Proven Process</h2>
            <p className="text-xl text-gray-400">A systematic, transparent approach that delivers predictable, high-quality results.</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {data.process.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Connection Line */}
                  {idx < data.process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[50%] w-full h-[2px] bg-gray-700">
                      <div className="absolute inset-0 bg-purple-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  )}
                  
                  <div className="bg-gray-800 border border-gray-700 p-6 rounded-2xl relative z-10 hover:border-purple-500 transition-colors duration-300 h-full flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-gray-700 flex items-center justify-center text-xl font-bold text-gray-400 mb-6 group-hover:border-purple-500 group-hover:text-purple-400 transition-colors">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-purple-100">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 bg-purple-600 p-10 md:p-14 text-white flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-6 self-start backdrop-blur-sm">Featured Case Study</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Transforming Business with Strategic Digital Solutions</h3>
                <div className="mt-8 pt-8 border-t border-purple-400/30">
                  <div className="text-sm text-purple-200 uppercase tracking-wider mb-2">Key Metric</div>
                  <div className="text-3xl font-bold text-yellow-300">{data.caseStudy.metrics}</div>
                </div>
              </div>
              <div className="lg:w-3/5 p-10 md:p-14">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Icons.Target className="w-5 h-5 text-purple-500" /> The Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{data.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Icons.Lightbulb className="w-5 h-5 text-purple-500" /> The Strategy
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{data.caseStudy.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Icons.TrendingUp className="w-5 h-5 text-purple-500" /> The Results
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{data.caseStudy.results}</p>
                  </div>
                </div>
                <div className="mt-10">
                  <Button asChild>
                    <a href="/portfolio">View Full Portfolio <ArrowRight className="w-4 h-4 ml-2" /></a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Master</h2>
            <p className="text-xl text-gray-600">We utilize industry-leading tools and platforms to deliver uncompromising quality.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {data.techStack.map((tech, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
