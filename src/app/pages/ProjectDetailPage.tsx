import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  FileText, 
  Play,
  CircleCheck,
  CircleAlert,
  X
} from 'lucide-react';
import { projects } from '../data/projects';
import { useState } from 'react';

interface ProjectDetailPageProps {
  projectId: number;
  onNavigate: (page: string, projectId?: number) => void;
}

export function ProjectDetailPage({ projectId, onNavigate }: ProjectDetailPageProps) {
  const project = projects.find(p => p.id === projectId);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);
  
  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Project Not Found</h1>
          <Button onClick={() => onNavigate('projects')}>
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === projectId);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const challenges = [
    {
      title: 'Scalability Challenge',
      problem: 'Handling high concurrent users and real-time data synchronization',
      solution: 'Implemented efficient caching strategies and optimized database queries',
      result: 'Reduced response time by 60% and improved system performance'
    },
    {
      title: 'User Experience',
      problem: 'Creating an intuitive interface for complex functionality',
      solution: 'Conducted user research and iterative design improvements',
      result: 'Achieved 95% user satisfaction rating in testing'
    },
    {
      title: 'Data Security',
      problem: 'Ensuring data privacy and secure authentication',
      solution: 'Implemented JWT authentication and encrypted data storage',
      result: 'Zero security incidents since deployment'
    }
  ];

  const features = [
    'User authentication and authorization',
    'Real-time data synchronization',
    'Responsive cross-platform design',
    'Comprehensive API documentation',
    'Automated testing suite',
    'Performance optimization'
  ];

  const learnings = {
    technical: [
      'Advanced state management patterns',
      'Real-time communication protocols',
      'Database optimization techniques',
      'Cloud deployment best practices'
    ],
    soft: [
      'Project planning and time management',
      'Technical documentation writing',
      'Problem-solving under constraints',
      'Self-directed learning'
    ],
    professional: [
      'End-to-end project ownership',
      'Quality assurance standards',
      'Production deployment experience',
      'Maintenance and updates'
    ]
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('projects')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {project.image ? (
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl mb-6 overflow-hidden relative cursor-pointer group"
                 onClick={() => setIsImageModalOpen(true)}>
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-contain transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors pointer-events-none" />
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold text-sm bg-black/70 px-4 py-2 rounded-lg pointer-events-none">
                Click to view full size
              </div>
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-lg px-4 py-2">Featured Project</Badge>
                </div>
              )}
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="text-9xl opacity-20">
                {project.category === 'Mobile' ? '📱' :
                 project.category === 'Backend' ? '⚙️' :
                 project.category === 'Frontend' ? '🎨' : '💻'}
              </div>
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-lg px-4 py-2">Featured Project</Badge>
                </div>
              )}
            </div>
          )}

          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {project.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {project.tagline}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                Documentation
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Duration</div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">{project.duration}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Role</div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">{project.role}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Team</div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">{project.team}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-sm text-gray-500 mb-1">Status</div>
              <Badge variant={project.status.includes('Live') || project.status.includes('Deployed') ? 'default' : 'secondary'}>
                {project.status}
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all group relative"
                  onClick={() => setSelectedScreenshot(screenshot)}
                >
                  <img 
                    src={screenshot} 
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-semibold bg-black/70 px-2 py-1 rounded pointer-events-none">
                    View full size
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t"
        >
          {previousProject ? (
            <Button 
              variant="outline" 
              onClick={() => onNavigate('project-detail', previousProject.id)}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: {previousProject.name}
            </Button>
          ) : (
            <div className="w-full sm:w-auto" />
          )}

          <Button 
            variant="outline"
            onClick={() => onNavigate('projects')}
            className="w-full sm:w-auto"
          >
            Back to All Projects
          </Button>

          {nextProject ? (
            <Button 
              variant="outline"
              onClick={() => onNavigate('project-detail', nextProject.id)}
              className="w-full sm:w-auto"
            >
              Next: {nextProject.name}
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          ) : (
            <div className="w-full sm:w-auto" />
          )}
        </motion.div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && project.image && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img 
            src={project.image} 
            alt={project.name}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Screenshot Modal */}
      {selectedScreenshot && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <button
            onClick={() => setSelectedScreenshot(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img 
            src={selectedScreenshot} 
            alt="Screenshot"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
