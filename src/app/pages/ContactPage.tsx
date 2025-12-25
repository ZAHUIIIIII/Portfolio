import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin,
  Github,
  CircleCheck,
  CircleAlert,
  Send,
  Facebook
} from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { profileConfig } from '../data/profile';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message || formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS if not already done
      emailjs.init('Lra5tl2xifA2XAZTh');
      
      const result = await emailjs.send(
        'service_inh8q8n',
        'template_99eraru',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'leeminhuy47@gmail.com'
        }
      );

      console.log('Email sent successfully:', result);
      
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Message sent successfully! I\'ll get back to you within 24-48 hours.');

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error: any) {
      console.error('Failed to send email:', error);
      console.error('Error details:', error.text || error.message);
      setIsSubmitting(false);
      
      // More detailed error message
      const errorMsg = error.text || error.message || 'Unknown error';
      toast.error(`Failed to send message: ${errorMsg}. Please email me directly at leeminhuy47@gmail.com`);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's Work <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Together</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-5">
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Contact Information
                </h3>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</div>
                    <a href={`mailto:${profileConfig.email}`} className="font-medium text-gray-900 dark:text-gray-100 hover:text-primary transition-colors">
                      {profileConfig.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</div>
                    <a href={`tel:${profileConfig.phone}`} className="font-medium text-gray-900 dark:text-gray-100 hover:text-primary transition-colors">
                      {profileConfig.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">Da Nang, Vietnam</div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Connect With Me
                </h3>
                <div className="space-y-2">
                  <motion.a 
                    href={profileConfig.social.github}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-medium">GitHub</span>
                  </motion.a>
                  <motion.a 
                    href={profileConfig.social.facebook}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Facebook className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-medium">Facebook</span>
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="border-2 shadow-xl">
              <CardContent className="p-8">
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 rounded-lg"
                  >
                    <div className="flex items-center gap-3 text-green-800 dark:text-green-200">
                      <CircleCheck className="w-5 h-5" />
                      <div>
                        <div className="font-semibold">Message sent successfully!</div>
                        <div className="text-sm opacity-80">I'll get back to you within 24-48 hours.</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="name" className="text-base">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`h-12 border-2 bg-background transition-all ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-500 focus-visible:ring-red-500' 
                          : 'hover:border-primary/50 focus-visible:border-primary'
                      }`}
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1 text-sm text-red-500">
                        <CircleAlert className="w-4 h-4" />
                        {errors.name}
                      </div>
                    )}
                  </motion.div>

                  {/* Email */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email" className="text-base">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`h-12 border-2 bg-background transition-all ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500 focus-visible:ring-red-500' 
                          : 'hover:border-primary/50 focus-visible:border-primary'
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 text-sm text-red-500">
                        <CircleAlert className="w-4 h-4" />
                        {errors.email}
                      </div>
                    )}
                  </motion.div>

                  {/* Subject */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="subject" className="text-base">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => handleInputChange('subject', value)}
                      name="subject"
                    >
                      <SelectTrigger className={`h-12 border-2 bg-background transition-all ${
                        errors.subject 
                          ? 'border-red-500' 
                          : 'hover:border-primary/50 focus:border-primary'
                      }`}>
                        <SelectValue placeholder="What can I help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="project">Project Opportunity</SelectItem>
                        <SelectItem value="freelance">Freelance Work</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <div className="flex items-center gap-1 text-sm text-red-500">
                        <CircleAlert className="w-4 h-4" />
                        {errors.subject}
                      </div>
                    )}
                  </motion.div>

                  {/* Message */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message" className="text-base">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`border-2 bg-background transition-all resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:ring-red-500 focus-visible:ring-red-500' 
                          : 'hover:border-primary/50 focus-visible:border-primary'
                      }`}
                    />
                    <div className="flex justify-between items-center">
                      <div>
                        {errors.message && (
                          <div className="flex items-center gap-1 text-sm text-red-500">
                            <CircleAlert className="w-4 h-4" />
                            {errors.message}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {formData.message.length} / 1000
                      </div>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
