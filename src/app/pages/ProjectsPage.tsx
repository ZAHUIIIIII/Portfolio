import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CircleCheck, Github, ExternalLink, Code2, Sparkles, Rocket, TrendingUp } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectsPageProps {
  onNavigate: (page: string, projectId?: number) => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Full-Stack', 'Mobile', 'Backend', 'UX/UI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Emoji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
        
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <Sparkles className="inline-block w-5 h-5 mr-2 text-pink-500" />
            Explore my portfolio of {projects.length} innovative projects spanning full-stack development,
            mobile applications, and modern web solutions
            <Sparkles className="inline-block w-5 h-5 ml-2 text-purple-500" />
          </p>
        </motion.div>

        {/* Filter Buttons with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.div
              key={filter}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Button
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className={`
                  min-w-[120px] h-12 text-base font-semibold
                  transition-all duration-300 hover:scale-105
                  ${activeFilter === filter 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'border-2 hover:bg-accent'
                  }
                `}
              >
                {filter}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid with Staggered Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  
                  <CardContent className="p-6 flex flex-col h-full relative z-10">
                    {/* Featured & Category Badges */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white font-semibold shadow-md">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-primary/10 text-primary font-bold px-3 py-1 shadow-md">
                          ⭐ Featured
                        </Badge>
                      )}
                    </div>

                    {/* Project Title with Gradient on Hover */}
                    <motion.h3 
                      className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100"
                      whileHover={{ x: 5 }}
                    >
                      {project.name}
                    </motion.h3>

                    {/* Tagline */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 flex-grow line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Tech Stack with Colorful Badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs font-semibold"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="outline" className="text-xs font-semibold bg-gray-100 dark:bg-gray-800">
                          +{project.tags.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Metrics with Icons */}
                    <div className="space-y-2 mb-5">
                      {project.metrics.slice(0, 3).map((metric, i) => (
                        <motion.div 
                          key={metric} 
                          className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                        >
                          <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="font-medium">{metric}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons with Gradient */}
                    <div className="flex gap-3 mt-auto">
                      <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          className="w-full"
                          onClick={() => onNavigate('project-detail', project.id)}
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            // GitHub link would go here
                          }}
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State with Emoji */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-8xl mb-6">😅</div>
            <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Oops! No projects here yet
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Try selecting a different category
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
