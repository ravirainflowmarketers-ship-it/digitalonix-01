/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicePage from './pages/ServicePage';
import Portfolio from './pages/Portfolio';
import PortfolioRouteHandler from './pages/PortfolioRouteHandler';
import LogoDesignPortfolio from './pages/LogoDesignPortfolio';
import LogoDesignDetails from './pages/LogoDesignDetails';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Specific Portfolio Routes (must come before dynamic slug) */}
        <Route path="portfolio/logo-design" element={<LogoDesignPortfolio />} />
        <Route path="portfolio/logo-design/:slug" element={<LogoDesignDetails />} />
        
        {/* General Portfolio Routes */}
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:slug" element={<PortfolioRouteHandler />} />
        
        {/* Dynamic Route for Services */}
        <Route path=":serviceSlug" element={<ServicePage />} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
