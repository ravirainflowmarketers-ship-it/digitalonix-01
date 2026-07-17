import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { servicesData } from '@/data/services';
import ServiceHero from '@/components/service-page/ServiceHero';
import ServiceFeatures from '@/components/service-page/ServiceFeatures';
import ServiceProcess from '@/components/service-page/ServiceProcess';
import ServicePricing from '@/components/service-page/ServicePricing';
import ServiceShared from '@/components/service-page/ServiceShared';

export default function ServicePage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  const data = serviceSlug ? servicesData[serviceSlug as keyof typeof servicesData] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Service Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md text-center">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" asChild><Link to="/">Return Home</Link></Button>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={data.title} 
        description={data.description} 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.h1,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Digitalonix"
            },
            "description": data.overview
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          }
        ]}
      />
      
      <main className="w-full">
        {/* 1. Hero Section */}
        <ServiceHero data={data} />
        
        {/* 2. Why Choose Us & 3. About & 4. Problems */}
        <ServiceFeatures data={data} />
        
        {/* 5. Process & 6. Services Included & 8. Tech Stack & 10. Case Studies */}
        <ServiceProcess data={data} />
        
        {/* 12. Pricing & 13. FAQ */}
        <ServicePricing data={data} />
        
        {/* 7. Industries, 11. Testimonials, 16. Free Consultation, 17. Contact, 18. Map */}
        <ServiceShared />
      </main>
    </>
  );
}
