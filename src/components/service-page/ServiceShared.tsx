import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Building, Briefcase, GraduationCap, HeartPulse, HardHat, Landmark, Building2, Utensils, Zap, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

const industries = [
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: Building, name: 'Real Estate' },
  { icon: GraduationCap, name: 'Education' },
  { icon: HardHat, name: 'Construction' },
  { icon: Landmark, name: 'Finance' },
  { icon: Building2, name: 'Hospitality' },
  { icon: Utensils, name: 'Restaurants' },
  { icon: Zap, name: 'Startups' },
  { icon: Briefcase, name: 'Corporate' },
];

const testimonials = [
  { name: 'Rajesh Sharma', company: 'Sharma Real Estate', text: 'Digitalonix completely transformed our online presence. Our lead generation has increased by 300% since we partnered with them.', rating: 5 },
  { name: 'Priya Patel', company: 'Patel Healthcare', text: 'The level of professionalism and the deep understanding of digital strategy sets them apart. Highly recommended.', rating: 5 },
  { name: 'Amit Desai', company: 'Desai & Co.', text: 'Their website design team created a masterpiece for us. Fast, responsive, and incredibly beautiful.', rating: 5 },
];

export default function ServiceShared() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <>
      {/* Industries We Serve */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Tailored digital solutions for diverse business sectors.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:border-purple-200 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-gray-800">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it. See what our partners say.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
                <div className="text-4xl text-purple-300 font-serif absolute top-6 right-8">"</div>
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">Book a free, no-obligation strategy session with our experts today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 h-14 px-8 text-lg" asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg" asChild>
              <a href="https://wa.me/916268366806" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-gray-50 border-t border-gray-100" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            {/* Form */}
            <div className="lg:w-1/2 p-8 md:p-14">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Let's Talk</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and our experts will get back to you within 24 hours.</p>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for reaching out. Our team will contact you shortly.</p>
                  <Button onClick={() => setFormStatus('idle')} className="mt-6" variant="outline">Send Another</Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Name</label>
                      <Input placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone</label>
                      <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <Input type="email" placeholder="john@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Budget</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Select Budget</option>
                        <option value="under-50k">Under ₹50,000</option>
                        <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                        <option value="over-1lakh">Over ₹1,00,000</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea placeholder="Tell us about your project goals..." rows={4} required />
                  </div>
                  <Button className="w-full h-12 text-lg" disabled={formStatus === 'loading'}>
                    {formStatus === 'loading' ? 'Sending...' : (
                      <>Send Message <Send className="w-4 h-4 ml-2" /></>
                    )}
                  </Button>
                </form>
              )}
            </div>
            
            {/* Info & Map */}
            <div className="lg:w-1/2 bg-gray-900 text-white p-8 md:p-14 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-3xl font-bold mb-8 relative z-10">Contact Information</h3>
              <div className="space-y-8 flex-1 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Our Office</h4>
                    <p className="text-gray-400 leading-relaxed">E3/325, E-3, Arera Colony,<br />Bhopal, Madhya Pradesh 462016</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                    <a href="tel:+916268366806" className="text-gray-400 hover:text-white transition-colors">+91 62683 66806</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                    <a href="mailto:digitalonixind@gmail.com" className="text-gray-400 hover:text-white transition-colors">digitalonixind@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="w-full h-48 bg-gray-800 rounded-2xl mt-12 overflow-hidden relative group border border-gray-700 z-10">
                 <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Arera+Colony,Bhopal&zoom=14&size=600x300&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0xffffff&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative|element:geometry.fill|color:0x000000&style=feature:administrative|element:geometry.stroke|color:0x144b53&style=feature:landscape|element:all|color:0x08304b&style=feature:poi|element:geometry|color:0x0c4152&style=feature:road.highway|element:geometry.fill|color:0x000000&style=feature:road.highway|element:geometry.stroke|color:0x0b434f&style=feature:road.arterial|element:geometry.fill|color:0x000000&style=feature:road.arterial|element:geometry.stroke|color:0x0b3d51&style=feature:road.local|element:geometry|color:0x000000&style=feature:transit|element:all|color:0x146474&style=feature:water|element:all|color:0x021019')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
