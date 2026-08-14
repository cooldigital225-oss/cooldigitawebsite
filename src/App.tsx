import React, { useState, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { PackagesPage } from './pages/Packages';
import { ProjectsPage } from './pages/Projects';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');

  // Listen to browser popstate and support clean pathnames
  useEffect(() => {
    const handleLocationChange = () => {
      // Gracefully convert legacy hash URLs (e.g. /#/services/...) to clean pathnames
      if (window.location.hash.startsWith('#/')) {
        const cleanPath = window.location.hash.replace('#', '');
        window.history.replaceState({}, '', cleanPath);
        setCurrentPath(cleanPath);
        return;
      }
      const path = window.location.pathname;
      setCurrentPath(path || '/');
    };

    window.addEventListener('popstate', handleLocationChange);
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

    if (normalizedPath.startsWith('/services/')) {
      const slug = normalizedPath.replace('/services/', '');
      return <ServiceDetail slug={slug} onNavigate={handleNavigate} />;
    }

    switch (normalizedPath) {
      case '/services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case '/packages':
        return <PackagesPage onNavigate={handleNavigate} />;
      case '/projects':
      case '/realisations':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case '/about':
      case '/a-propos':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout activePath={currentPath} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}

