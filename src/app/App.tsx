import { useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

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
