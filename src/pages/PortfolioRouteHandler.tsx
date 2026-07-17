import { useParams } from 'react-router-dom';
import Portfolio from './Portfolio';
import ProjectDetails from './ProjectDetails';
import { portfolioCategories } from '@/data/portfolio';

export default function PortfolioRouteHandler() {
  const { slug } = useParams<{ slug: string }>();
  
  // Check if the slug is a category
  const isCategory = portfolioCategories.some(c => c.id === slug);
  
  if (isCategory) {
    return <Portfolio initialCategory={slug} />;
  }
  
  // Otherwise, it's a project details page
  return <ProjectDetails slug={slug} />;
}
