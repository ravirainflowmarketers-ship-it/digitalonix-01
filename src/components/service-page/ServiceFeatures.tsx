import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { ServiceData } from '@/data/services';

const IconWrapper = ({ icon, className = "w-6 h-6" }: { icon: string, className?: string }) => {
  const LucideIcon = (Icons as any)[icon] || Icons.CheckCircle;
  return <LucideIcon className={className} />;
};

export default function ServiceFeatures({ data }: { data: ServiceData }) {
  return (
    <>
      {/* About This Service */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">About This Service</h2>
                <div className="prose prose-lg prose-purple">
                  <p className="text-gray-600 leading-relaxed mb-6">{data.overview}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Who Needs It?</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{data.whoNeedsIt}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Business Impact</h3>
                  <p className="text-gray-600 leading-relaxed">{data.impact}</p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 w-full">
               <div className="bg-purple-50 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
                 
                 <div className="relative z-10">
                   <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Digitalonix</h3>
                   <div className="grid gap-6">
                     {data.whyChooseUs.map((item, idx) => (
                       <motion.div 
                         key={idx}
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: idx * 0.1 }}
                         className="flex gap-4 group"
                       >
                         <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-purple-100 flex items-center justify-center shrink-0 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                           <IconWrapper icon={item.icon} />
                         </div>
                         <div>
                           <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                           <p className="text-gray-600">{item.desc}</p>
                         </div>
                       </motion.div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Problems We Solve</h2>
            <p className="text-xl text-gray-600">Turn your biggest digital challenges into opportunities for unprecedented growth.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.problems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <IconWrapper icon={item.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.problem}</h3>
                <div className="w-12 h-1 bg-gray-200 mb-4 group-hover:w-full group-hover:bg-purple-500 transition-all duration-500"></div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Solution</span>
                  <p className="text-gray-700 mt-1">{item.solution}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Benefit</span>
                  <p className="text-gray-700 mt-1">{item.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
