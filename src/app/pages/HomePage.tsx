import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Sparkles,
  Download,
  Mail,
  Github,
  Facebook,
  Phone,
  ArrowRight
} from 'lucide-react';
import { projects } from '../data/projects';
import { profileConfig } from '../data/profile';


interface HomePageProps {
  onNavigate: (page: string, projectId?: number) => void;
}

const roles = [
  'Business Analyst',
  'Full-Stack Developer',
  'Mobile Specialist',
  'Cloud Enthusiast',
  'Problem Solver'
];

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-medium">Available for opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Huy
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="h-20 mb-8"
              >
                <motion.p
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary"
                >
                  {roles[currentRoleIndex]}
                </motion.p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Crafting beautiful, scalable applications with modern technologies.
                Passionate about creating impactful solutions that make a difference.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button 
                  size="lg" 
                  className="gap-2 shadow-lg"
                  onClick={() => onNavigate('projects')}
                >
                  View My Work <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => onNavigate('contact')}
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  asChild
                >
                  <a href={profileConfig.cvLink} download>
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4 mt-8 justify-center lg:justify-start"
              >
                <a href={profileConfig.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 border border-border">
                  <Github className="w-5 h-5" />
                </a>
                <a href={profileConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 border border-border">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={`tel:${profileConfig.phone}`} className="w-10 h-10 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 border border-border">
                  <Phone className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-secondary to-accent rounded-full blur-3xl opacity-20" />
                
                {/* Image Container with floating animation */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    padding: '4px'
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  {/* Image */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur">
                    <img
                      src={profileConfig.homeAvatar}
                      alt={profileConfig.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent">
                            <span class="text-9xl font-bold text-white">NH</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies I work with
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto"
          >
            {profileConfig.techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="group cursor-pointer relative"
              >
                <div className="relative">
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain transition-all duration-300 group-hover:drop-shadow-2xl"
                  />
                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                      {tech.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Check out my best work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 hover:border-primary/50 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      {project.featured && (
                        <Badge className="bg-primary/10 text-primary border border-primary/30">
                          ⭐ Featured
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{project.tagline}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full group-hover:bg-gradient-to-r from-primary to-secondary"
                      onClick={() => onNavigate('project-detail', project.id)}
                    >
                      View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('projects')}
              className="gap-2 border-2"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
