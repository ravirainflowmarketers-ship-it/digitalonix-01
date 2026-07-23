import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Logo className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white leading-none">
                  Digitalonix
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are a premium digital agency transforming businesses through innovative web development, strategic SEO, and data-driven marketing.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/digitalonix" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/digitalonix.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ariz-khan-b02666318/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/digital-marketing-company-in-bhopal" className="hover:text-purple-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/ai-automations" className="hover:text-purple-400 transition-colors">AI Automations</Link></li>
              <li><Link to="/google-ads-agency-in-bhopal" className="hover:text-purple-400 transition-colors">Paid Ads</Link></li>
              <li><Link to="/social-media-marketing-company-in-bhopal" className="hover:text-purple-400 transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/google-my-business" className="hover:text-purple-400 transition-colors">Google My Business</Link></li>
              <li><Link to="/seo-company-in-bhopal" className="hover:text-purple-400 transition-colors">SEO</Link></li>
              <li><Link to="/website-design-company-in-bhopal" className="hover:text-purple-400 transition-colors">Website Design</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                <span className="leading-relaxed">E3/325, E-3, Arera Colony,<br />Bhopal, Madhya Pradesh 462016</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                <a href="tel:+916268366806" className="hover:text-purple-400 transition-colors">+91 62683 66806</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-500 shrink-0" />
                <a href="mailto:digitalonixind@gmail.com" className="hover:text-purple-400 transition-colors">digitalonixind@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Digitalonix. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Open 24 Hours</span>
            <span className="flex items-center gap-1 text-yellow-500">
              ★ 4.9 <span className="text-gray-500 ml-1">(33+ Reviews)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
