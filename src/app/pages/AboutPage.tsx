import { motion } from 'motion/react';
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Code, Smartphone, Cloud, GraduationCap, Globe, BookOpen, Heart, Sparkles, Rocket, Star, Search, Palette, CheckCircle, Upload } from 'lucide-react';
import { profileConfig } from '../data/profile';

export function AboutPage() {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications using modern technologies. Expertise in creating RESTful APIs and implementing complex business logic.',
      highlights: ['MERN Stack', 'RESTful APIs', 'Real-time Features', 'Database Design']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications for Android and iOS with amazing user experiences.',
      highlights: ['Android Native', 'React Native', 'Firebase Integration', 'Offline-first Apps']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications on cloud platforms with modern CI/CD pipelines.',
      highlights: ['Docker', 'AWS/Azure', 'CI/CD', 'SharePoint']
    }
  ];

  const timeline = [
    {
      phase: 'Research',
      description: 'Understanding requirements, user needs, and technical constraints',
      icon: Search
    },
    {
      phase: 'Design',
      description: 'Creating wireframes, system architecture, and database schemas',
      icon: Palette
    },
    {
      phase: 'Development',
      description: 'Writing clean, maintainable code with best practices',
      icon: Code
    },
    {
      phase: 'Testing',
      description: 'Comprehensive testing including unit, integration, and E2E tests',
      icon: CheckCircle
    },
    {
      phase: 'Deployment',
      description: 'Deploying to production with monitoring and documentation',
      icon: Upload
    }
  ];

  const education = {
    university: 'University of Greenwich (Vietnam)',
    degree: 'BSc (Hons) Computing',
    period: '2022 - 2025',
    location: 'Da Nang, Vietnam',
    gpa: '3.7 / 4.0',
    modules: [
      'Software Engineering',
      'Database Systems',
      'Mobile Application Development',
      'Web Technologies',
      'Cloud Computing',
      'Data Structures & Algorithms',
    ],
    finalProject: {
      title: 'NETSPHERE - Social Networking Platform',
      description: 'A comprehensive full-stack social media application built with MERN stack, featuring real-time messaging, post sharing, and advanced user interactions.',
    }
  };

  const interests = [
    { icon: '🚀', text: 'Open Source Contributions' },
    { icon: '✍️', text: 'Tech Blog Writing' },
    { icon: '👥', text: 'Code Reviews & Mentoring' },
    { icon: '📚', text: 'Learning New Technologies' },
    { icon: '🛠️', text: 'Building Side Projects' },
    { icon: '🤝', text: 'Community Meetups' },
  ];

  const languages = [
    { language: 'Vietnamese', level: 'Native', percentage: 100 },
    { language: 'English', level: 'Professional Working', percentage: 85 },
  ];

  const values = [
    { icon: Heart, title: 'Passion', desc: 'Love what I do' },
    { icon: Sparkles, title: 'Quality', desc: 'Excellence in code' },
    { icon: Rocket, title: 'Innovation', desc: 'Always learning' },
    { icon: Star, title: 'Impact', desc: 'Make a difference' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Me</span> 
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer crafting impactful solutions
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Photo Card */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-2xl group">
              <CardContent className="p-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 border-4 border-primary/20">
                  <img
                    src={profileConfig.avatar}
                    alt={profileConfig.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent">
                          <span class="text-6xl font-bold text-white">NH</span>
                        </div>
                      `;
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {profileConfig.name} 👨‍💻
                </h3>
                <p className="text-center text-muted-foreground mb-4">
                  {profileConfig.title} & Mobile Specialist
                </p>
                
                {/* Languages */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Languages 🌍</h4>
                  {languages.map((lang) => (
                    <div key={lang.language}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{lang.language}</span>
                        <span className="text-primary font-semibold">{lang.level}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio Card */}
          <div className="lg:col-span-2">
            <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  Hello! I'm Huy 👋
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    I'm a <span className="text-primary font-semibold">full-stack developer</span> and <span className="text-secondary font-semibold">mobile specialist</span> with a passion for turning complex problems into elegant solutions. Currently pursuing my BSc (Hons) in Computing at the University of Greenwich, I bridge the gap between technical complexity and user experience.
                  </p>
                  <p>
                    My journey began with a curiosity about what happens "under the hood," evolving into a drive to build robust, scalable applications. To date, I've developed over <span className="text-secondary font-semibold">9 comprehensive projects</span>, including full-scale social networking platforms and mobile apps.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">My Philosophy:</span> I believe code should not only work flawlessly but also be clean and maintainable. I combine <span className="text-accent font-semibold">technical precision</span> with a user-first mindset to create products that genuinely delight users.
                  </p>
                  <p className="text-lg">
                    When I step away from the keyboard, I love staying active through sports, taking relaxing walks, or unwinding with good music. I believe a balanced life fuels creativity. Let's build something amazing together!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            What I Do 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 group relative overflow-hidden">
                  <CardContent className="p-6 relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((highlight) => (
                        <Badge 
                          key={highlight}
                          className="bg-primary/10 text-primary text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-16 text-center">
            My Development Process 
          </h2>
          
          {/* Desktop View */}
          <div className="hidden md:block max-w-6xl mx-auto">
            <div className="relative">
              {/* Background Line */}
              <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-border" />
              
              <div className="grid grid-cols-5 gap-4">
                {timeline.map((step, index) => (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Circle */}
                    <div className="relative z-10 mb-6">
                      <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/40 group-hover:border-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="text-xs font-semibold text-primary/60 mb-1 uppercase tracking-wide">Step {index + 1}</div>
                    <h3 className="font-bold text-base">{step.phase}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {timeline.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-primary transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div>
                        <div className="text-xs font-semibold text-primary/60 mb-1 uppercase tracking-wide">Step {index + 1}</div>
                        <h3 className="font-bold text-lg">{step.phase}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education
          </h2>
          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        {education.degree}
                      </h3>
                      <p className="text-lg text-muted-foreground">{education.university}</p>
                    </div>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                      <p className="text-primary font-semibold text-lg">{education.period}</p>
                      <p className="text-sm text-muted-foreground">{education.location}</p>
                      <p className="text-sm font-semibold text-primary mt-1">GPA: {education.gpa}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Key Modules
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.modules.map((module) => (
                        <Badge key={module} className="bg-primary/10 text-primary">
                          {module}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20">
                    <p className="text-sm text-muted-foreground mb-2">Final Year Project</p>
                    <p className="text-lg font-semibold text-primary mb-2">
                      {education.finalProject.title}
                    </p>
                    <p className="text-muted-foreground">
                      {education.finalProject.description}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
