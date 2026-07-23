import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

const services = [
  { name: 'Digital Marketing', path: '/digital-marketing-company-in-bhopal' },
  { name: 'AI Automations', path: '/ai-automations' },
  { name: 'Paid Ads', path: '/google-ads-agency-in-bhopal' },
  { name: 'Social Media Marketing', path: '/social-media-marketing-company-in-bhopal' },
  { name: 'Google My Business', path: '/google-my-business' },
  { name: 'SEO', path: '/seo-company-in-bhopal' },
  { name: 'Website Design', path: '/website-design-company-in-bhopal' },
  { name: 'PR Management', path: '/pr-management' },
  { name: 'Content Creation', path: '/content-creation' },
  { name: 'Video Editing', path: '/video-editing' },
  { name: 'Graphic Designing', path: '/graphic-design-company-in-bhopal' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <Logo className="w-12 h-12" />
          <div className="flex flex-col">
            <span className={`text-2xl font-bold tracking-tight leading-none ${isScrolled || mobileMenuOpen ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
              Digitalonix
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors hover:text-purple-600 ${isScrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}>Home</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors hover:text-purple-600 ${isScrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}>About</Link>
          <Link to="/portfolio" className={`text-sm font-medium transition-colors hover:text-purple-600 ${isScrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}>Portfolio</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-purple-600 py-2 ${isScrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-2"
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors text-sm font-medium text-gray-700 hover:text-purple-700"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-purple-600 ${isScrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white'}`}>Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant={isScrolled ? 'default' : 'outline'} className={!isScrolled ? 'text-white border-white hover:bg-white hover:text-purple-900' : ''}>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white z-40 pt-24 px-6 pb-6 flex flex-col h-screen overflow-y-auto"
            >
              <nav className="flex flex-col gap-6 text-lg font-medium">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
                <div className="flex flex-col gap-4">
                  <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Services</span>
                  {services.map((service) => (
                    <Link key={service.path} to={service.path} onClick={() => setMobileMenuOpen(false)} className="pl-4 border-l-2 border-purple-100 text-gray-600 hover:text-purple-600 hover:border-purple-600 transition-colors">
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </nav>
              <div className="mt-8">
                <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
