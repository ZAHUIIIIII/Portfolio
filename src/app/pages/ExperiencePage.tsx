import { motion } from 'motion/react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { GraduationCap, Code, CircleCheck, TrendingUp, Sparkles, Rocket, Award } from 'lucide-react';
import { projects } from '../data/projects';

export function ExperiencePage() {
  const education = {
    university: 'University of Greenwich (Vietnam)',
    degree: 'BSc (Hons) Computing',
    period: '2022 - Present',
    location: 'Da Nang, Vietnam',
    modules: [
      'Software Engineering',
      'Database Systems',
      'Mobile Application Development',
      'Web Technologies',
      'Cloud Computing',
      'Data Structures & Algorithms',
    ],
    finalProject: 'NETSPHERE - Full-Stack Social Networking Platform'
  };

  const projectExperience = projects.map(project => ({
    year: project.id <= 3 ? '2025' : '2024',
    ...project
  }));

  const groupedProjects = projectExperience.reduce((acc, project) => {
    if (!acc[project.year]) acc[project.year] = [];
    acc[project.year].push(project);
    return acc;
  }, {} as Record<string, typeof projectExperience>);

  const contributions = [
    'Developed 9+ full-scale applications from conception to deployment',
    'Implemented 97+ RESTful API endpoints with comprehensive documentation',
    'Achieved 99%+ system uptime across deployed applications',
    'Maintained 100% test pass rate through comprehensive testing strategies',
  ];

  const implementations = [
    'Real-time Communication Systems (Socket.IO, WebSocket)',
    'Authentication & Authorization (JWT, OAuth)',
    'Payment Integration (Stripe, PayPal)',
    'Cloud Deployment (AWS, Azure, Vercel)',
    'Database Migration & Optimization',
    'RESTful API Architecture',
    'Responsive UI/UX Design',
    'Mobile-First Development',
  ];

  const methodologies = [
    'Agile/Scrum Development',
    'Test-Driven Development (TDD)',
    'Clean Code Principles',
    'SOLID Design Patterns',
    'Git Version Control',
    'Code Review Best Practices',
  ];

  const qualityAssurance = [
    'Unit Testing (Jest, Mocha)',
    'Integration Testing',
    'End-to-End Testing',
    'API Testing (Postman)',
    'Performance Optimization',
    'Security Best Practices',
  ];

  const metrics = [
    { value: '9+', label: 'Projects', icon: Code, color: 'from-purple-500 to-pink-500' },
    { value: '97+', label: 'API Endpoints', icon: TrendingUp, color: 'from-pink-500 to-orange-500' },
    { value: '99%', label: 'Uptime', icon: Rocket, color: 'from-blue-500 to-purple-500' },
    { value: '100%', label: 'Test Coverage', icon: CircleCheck, color: 'from-green-500 to-emerald-500' },
    { value: '6+', label: 'Tech Stacks', icon: Sparkles, color: 'from-orange-500 to-red-500' },
    { value: '3+', label: 'Years Learning', icon: Award, color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3">
            Experience & Journey
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My educational background and project experience in software development
            <Sparkles className="inline-block w-5 h-5 ml-2 text-pink-500" />
          </p>
        </motion.div>

        {/* Education Card with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <Card className="border-2 shadow-lg bg-white dark:bg-gray-900">
            
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon Section */}
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center shadow-2xl">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {education.degree}
                      </h2>
                      <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">{education.university}</p>
                    </div>
                    <div className="text-left md:text-right mt-4 md:mt-0">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg">
                        <p className="text-white font-bold">{education.period}</p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center justify-start md:justify-end gap-1">
                        📍 {education.location}
                      </p>
                    </div>
                  </div>

                  {/* Key Modules */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-500" />
                      Key Modules:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.modules.map((module, index) => (
                        <motion.div
                          key={module}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Badge className="bg-primary/10 text-primary border border-primary/30 font-semibold px-3 py-1">
                            {module}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Final Project */}
                  <motion.div 
                    className="relative overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative p-5 bg-gray-50 dark:bg-gray-800/50">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-primary" />
                        Final Year Project:
                      </p>
                      <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
                        {education.finalProject}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Project Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Project Experience
          </h2>

          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 rounded-full" />

            {Object.entries(groupedProjects).sort((a, b) => b[0].localeCompare(a[0])).map(([year, yearProjects], yearIndex) => (
              <div key={year} className="mb-16">
                {/* Year Badge */}
                <motion.div 
                  className="flex items-center gap-6 mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: yearIndex * 0.1 }}
                >
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl z-10"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {year}
                  </motion.div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 rounded-full" />
                </motion.div>

                {/* Projects */}
                <div className="space-y-6 md:ml-32">
                  {yearProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: yearIndex * 0.1 + index * 0.1 }}
                    >
                      <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 dark:border-gray-800 hover:border-transparent relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                        {/* Hover Gradient Border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[14px] z-0" />
                        
                        <CardContent className="p-6 relative z-10">
                          {/* Header */}
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-3xl">
                                  {project.category === 'Mobile' ? '📱' :
                                   project.category === 'Backend' ? '⚙️' :
                                   project.category === 'Frontend' ? '🎨' : '💻'}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                  {project.name}
                                </h3>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{project.tagline}</p>
                            </div>
                            <motion.div 
                              className="mt-3 md:mt-0"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge className={`${
                                project.status.includes('Live') || project.status.includes('Deployed')
                                  ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30'
                                  : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30'
                              } font-bold px-3 py-1 shadow-md border-2`}>
                                {project.status}
                              </Badge>
                            </motion.div>
                          </div>

                          {/* Project Details Grid */}
                          <div className="mb-5">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              {[
                                { label: 'Duration', value: project.duration, icon: '⏱️' },
                                { label: 'Role', value: project.role, icon: '👤' },
                                { label: 'Solo', value: project.team, icon: '👥' },
                                { label: 'Type', value: project.category, icon: '🏷️' },
                              ].map((item, i) => (
                                <motion.div 
                                  key={item.label}
                                  className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3"
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: yearIndex * 0.1 + index * 0.1 + i * 0.05 }}
                                  whileHover={{ y: -2, scale: 1.02 }}
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    <span>{item.icon}</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-xs">{item.label}:</span>
                                  </div>
                                  <span className="font-bold text-gray-900 dark:text-gray-100">{item.value}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Metrics */}
                          <ul className="mb-5 space-y-2">
                            {project.metrics.map((metric, i) => (
                              <motion.li 
                                key={metric} 
                                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: yearIndex * 0.1 + index * 0.1 + i * 0.05 }}
                                whileHover={{ x: 5 }}
                              >
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                                  <CircleCheck className="w-3 h-3 text-white" />
                                </div>
                                <span className="font-medium">{metric}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <motion.div
                                key={tag}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: yearIndex * 0.1 + index * 0.1 + i * 0.03 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                              >
                                <Badge variant="outline" className="text-xs border-2 bg-primary/5 hover:border-primary/40 transition-colors font-semibold">
                                  {tag}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
