import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Page Not Found | Digitalonix" description="The page you are looking for does not exist." />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button size="lg" asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </>
  );
}
