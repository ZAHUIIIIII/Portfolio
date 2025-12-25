import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { 
  CircleCheck, 
  Code, 
  Palette, 
  Shield, 
  Users, 
  Lightbulb,
  Target,
  Sparkles,
  TrendingUp,
  Zap
} from 'lucide-react';

export function SkillsPage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const technicalSkills = {
    Frontend: {
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript/TypeScript', level: 92 },
      ]
    },
    Backend: {
      icon: <Zap className="w-6 h-6" />,
      color: 'from-pink-500 to-orange-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'RESTful APIs', level: 95 },
      ]
    },
    Mobile: {
      icon: <Target className="w-6 h-6" />,
      color: 'from-orange-500 to-yellow-500',
      skills: [
        { name: 'Android (Java/Kotlin)', level: 85 },
        { name: 'React Native', level: 88 },
        { name: 'Expo', level: 82 },
        { name: 'Flutter', level: 70 },
      ]
    },
    Databases: {
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 83 },
        { name: 'Firebase', level: 88 },
        { name: 'Redis', level: 75 },
      ]
    },
    DevOps: {
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 78 },
        { name: 'AWS', level: 75 },
        { name: 'Azure', level: 72 },
      ]
    },
    Other: {
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Socket.IO', level: 85 },
        { name: 'GraphQL', level: 70 },
        { name: 'SharePoint', level: 80 },
        { name: 'Power Apps', level: 75 },
      ]
    },
  };

  const developmentPractices = {
    'Architecture & Design': {
      icon: <Code className="w-5 h-5" />,
      practices: [
        'Clean Architecture',
        'MVC/MVVM Patterns',
        'Microservices',
        'RESTful API Design',
        'Database Schema Design',
        'System Design (C4 Model)',
      ]
    },
    'Testing & QA': {
      icon: <CircleCheck className="w-5 h-5" />,
      practices: [
        'Unit Testing (Jest, Mocha)',
        'Integration Testing',
        'API Testing (Postman)',
        'End-to-End Testing',
        'Test-Driven Development',
        'Code Reviews',
      ]
    },
    'Agile Methodologies': {
      icon: <TrendingUp className="w-5 h-5" />,
      practices: [
        'Scrum Framework',
        'Sprint Planning',
        'User Stories & Backlogs',
        'Daily Standups',
        'Retrospectives',
        'Continuous Integration',
      ]
    },
  };

  const designSkills = {
    'UI/UX Design': {
      icon: <Palette className="w-5 h-5" />,
      skills: [
        'Wireframing & Prototyping',
        'User Research',
        'Responsive Design',
        'Accessibility (WCAG)',
        'Design Systems',
        'Figma & Adobe XD',
      ]
    },
    'Database Design': {
      icon: <Shield className="w-5 h-5" />,
      skills: [
        'ER Diagrams',
        'Normalization',
        'Indexing Strategies',
        'Query Optimization',
        'Data Modeling',
        'Migration Planning',
      ]
    },
  };

  const softSkills = [
    {
      icon: Users,
      title: 'Communication',
      skills: ['Technical Documentation', 'Client Presentations', 'Team Collaboration', 'Stakeholder Management'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Problem-Solving',
      skills: ['Analytical Thinking', 'Debugging & Troubleshooting', 'Creative Solutions', 'Critical Analysis'],
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Project Management',
      skills: ['Time Management', 'Task Prioritization', 'Risk Assessment', 'Resource Planning'],
      gradient: 'from-orange-500 to-yellow-500'
    },
  ];

  const tools = {
    Development: {
      icon: <Code className="w-5 h-5" />,
      items: ['VS Code', 'IntelliJ IDEA', 'Android Studio', 'Postman', 'Docker Desktop']
    },
    Design: {
      icon: <Palette className="w-5 h-5" />,
      items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Draw.io']
    },
    Collaboration: {
      icon: <Users className="w-5 h-5" />,
      items: ['Git/GitHub', 'Jira', 'Slack', 'Notion', 'Confluence']
    },
  };

  const certifications = {
    'Current Focus': {
      icon: <Target className="w-5 h-5" />,
      items: [
        'AWS Solutions Architect',
        'MongoDB Certified Developer',
        'React Advanced Patterns',
        'Kubernetes Fundamentals',
      ]
    },
    'Completed Courses': {
      icon: <CircleCheck className="w-5 h-5" />,
      items: [
        'The Complete Node.js Developer Course',
        'React - The Complete Guide',
        'Android App Development Masterclass',
        'Full-Stack Web Development Bootcamp',
      ]
    },
  };

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
            Skills & Expertise
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise and professional capabilities
          </p>
        </motion.div>

        {/* Technical Skills Grid with Enhanced Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(technicalSkills).map(([category, data], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-2">
                  
                  <CardContent className="p-5 relative z-10">
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="text-primary"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        {data.icon}
                      </motion.div>
                      <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">
                        {category}
                      </h3>
                    </div>
                    
                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {data.skills.map((skill, index) => (
                        <motion.div 
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.05 + index * 0.03 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-600">
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
            Development Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(developmentPractices).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="text-primary">{data.icon}</div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                        {category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {data.practices.map((practice, i) => (
                        <motion.li 
                          key={practice} 
                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{practice}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design & UX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
            Design & UX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(designSkills).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="text-4xl">{data.icon}</div>
                      <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">
                        {category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {data.skills.map((skill, i) => (
                        <motion.li 
                          key={skill} 
                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.05 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <CircleCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills with Gradient Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
            Soft Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full group hover:shadow-md transition-all duration-300 border-2">
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Icon with Background */}
                    <motion.div 
                      className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-5"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    
                    <h3 className="font-bold text-2xl mb-5 text-gray-900 dark:text-gray-100">
                      {category.title}
                    </h3>
                    
                    <ul className="space-y-3">
                      {category.skills.map((skill, i) => (
                        <motion.li 
                          key={skill} 
                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <Zap className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
            Certifications & Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(certifications).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="text-4xl">{data.icon}</div>
                      <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">
                        {category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {data.items.map((item, i) => (
                        <motion.li 
                          key={item} 
                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.05 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Environment with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
            Tools & Environment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(tools).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-2 border-gray-200 dark:border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="text-primary">{data.icon}</div>
                      <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">
                        {category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.items.map((tool, i) => (
                        <motion.div
                          key={tool}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-600">
                            {tool}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
