import { Github, Linkedin, Mail, Youtube, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { profileConfig } from '../data/profile';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Projects', page: 'projects' },
    { label: 'Skills', page: 'skills' },
    { label: 'Experience', page: 'experience' },
    { label: 'Contact', page: 'contact' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:example@email.com' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg border-2 border-primary/20">
                <img 
                  src={profileConfig.avatar} 
                  alt="Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-lg">PORTFOLIO</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Full-Stack Developer & Mobile Specialist passionate about creating innovative 
              solutions. Available for freelance work and full-time opportunities.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => {
                      onNavigate(link.page);
                      scrollToTop();
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">More</h3>
            <ul className="space-y-2">
              {quickLinks.slice(3).map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => {
                      onNavigate(link.page);
                      scrollToTop();
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © 2025 {profileConfig.name}. All rights reserved. Made with ❤️ and ☕
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
