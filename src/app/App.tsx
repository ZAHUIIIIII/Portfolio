import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';

type Page = 'home' | 'about' | 'projects' | 'project-detail' | 'skills' | 'experience' | 'contact';

export default function App() {
  // Initialize from URL hash
  const getInitialPage = (): Page => {
    const hash = window.location.hash.slice(1); // Remove #
    const validPages: Page[] = ['home', 'about', 'projects', 'project-detail', 'skills', 'experience', 'contact'];
    return validPages.includes(hash as Page) ? (hash as Page) : 'home';
  };

  const getInitialProjectId = (): number | null => {
    const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const id = params.get('id');
    return id ? parseInt(id) : null;
  };

  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(getInitialProjectId);

  // Update URL when page changes
  useEffect(() => {
    if (currentPage === 'project-detail' && selectedProjectId) {
      window.location.hash = `${currentPage}?id=${selectedProjectId}`;
    } else {
      window.location.hash = currentPage;
    }
  }, [currentPage, selectedProjectId]);

  const handleNavigate = (page: string, projectId?: number) => {
    setCurrentPage(page as Page);
    if (projectId) {
      setSelectedProjectId(projectId);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'project-detail':
        return selectedProjectId ? (
          <ProjectDetailPage projectId={selectedProjectId} onNavigate={handleNavigate} />
        ) : (
          <ProjectsPage onNavigate={handleNavigate} />
        );
      case 'skills':
        return <SkillsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        
        <main className="flex-1">
          {renderPage()}
        </main>
        
        <Footer onNavigate={handleNavigate} />
        
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
