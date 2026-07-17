import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SEO from '@/components/SEO';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Contact Us | Digitalonix" 
        description="Get in touch with Digitalonix, the premier digital agency in Bhopal. We're open 24 hours to serve your digital marketing and web development needs." 
      />
      
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Digitalonix</h1>
          <p className="text-xl text-gray-600">
            Ready to start your next big project? Get in touch with our team of experts today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            
            {/* Contact Details */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Visit Us</h3>
                    <p className="text-gray-600">E3/325, E-3, Arera Colony,<br />Bhopal, Madhya Pradesh 462016</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Call Us</h3>
                    <a href="tel:+916268366806" className="text-gray-600 hover:text-purple-600 transition-colors">+91 62683 66806</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Email Us</h3>
                    <a href="mailto:digitalonixind@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">digitalonixind@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Open 24 Hours, 7 Days a week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us A Message</h3>
                
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                    <p className="text-green-700 mb-6">Thank you for reaching out. Our team will get back to you shortly.</p>
                    <Button variant="outline" onClick={() => setIsSuccess(false)} className="border-green-600 text-green-700 hover:bg-green-100">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                        <Input required placeholder="John Doe" className="h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                        <Input required type="email" placeholder="john@company.com" className="h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                        <Input required type="tel" placeholder="+91 XXXXX XXXXX" className="h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Service Interested In</label>
                        <select className="flex h-12 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-600 focus:bg-white">
                          <option value="">Select a service...</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="web-design">Website Design</option>
                          <option value="seo">SEO Services</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Your Message <span className="text-red-500">*</span></label>
                      <Textarea required placeholder="Tell us about your project requirements..." rows={5} className="bg-gray-50 border-gray-200 focus:bg-white resize-none" />
                    </div>
                    <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
