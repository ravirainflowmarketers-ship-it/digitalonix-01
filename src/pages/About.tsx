import { motion } from 'framer-motion';
import { Target, Users, Zap, Award } from 'lucide-react';
import SEO from '@/components/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | Digitalonix" 
        description="Learn more about Digitalonix, Bhopal's leading premium digital agency driving business growth through technology and marketing." 
      />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We Are <span className="text-purple-600">Digitalonix</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A collective of digital native strategists, designers, and engineers dedicated to transforming ambitious brands and driving measurable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 rounded-2xl p-6 aspect-square flex flex-col justify-end">
                  <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-700 font-medium">Years Experience</div>
                </div>
                <div className="bg-indigo-50 rounded-2xl p-6 aspect-square flex flex-col justify-end translate-y-8">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
                  <div className="text-gray-700 font-medium">Projects Delivered</div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 aspect-square flex flex-col justify-end">
                  <div className="text-4xl font-bold text-blue-600 mb-2">33+</div>
                  <div className="text-gray-700 font-medium">5-Star Reviews</div>
                </div>
                <div className="bg-pink-50 rounded-2xl p-6 aspect-square flex flex-col justify-end translate-y-8">
                  <div className="text-4xl font-bold text-pink-600 mb-2">10M+</div>
                  <div className="text-gray-700 font-medium">Revenue Generated</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Digitalonix, our mission is simple: to empower businesses with the digital tools and strategies they need to dominate their respective markets. We believe in data-driven decisions, pixel-perfect design, and transparent communication.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Result-Oriented Approach</h3>
                    <p className="text-gray-600">Every campaign and website we build is focused on one thing: delivering measurable ROI for your business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">We leverage the latest frameworks and platforms to ensure your digital presence is fast, secure, and future-proof.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
