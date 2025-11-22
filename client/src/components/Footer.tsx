// Developed by SHASHANK DAKSH
import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import logoImage from "@assets/generated_images/aerospace_company_logo_design.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/newsletter/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  const quickLinks = [
    { name: "Drone Inspections", path: "/services/drone-inspections" },
    { name: "LiDAR Services", path: "/services/lidar" },
    { name: "Aviation Services", path: "/services/aviation" },
    { name: "Training Academy", path: "/training" },
    { name: "Equipment", path: "/equipment" },
    { name: "About Us", path: "/about" },
  ];

  const industries = [
    { name: "Energy & Utilities", path: "/industries/energy-utilities" },
    { name: "Oil & Gas", path: "/industries/oil-gas" },
    { name: "Defense", path: "/industries/defense" },
    { name: "Construction", path: "/industries/construction" },
    { name: "Public Safety", path: "/industries/public-safety" },
    { name: "Agriculture", path: "/industries/agriculture" },
  ];

  return (
    <footer className="bg-card border-t border-card-border" data-testid="footer-main">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Volatus Aerospace" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-bold text-lg text-foreground">Volatus Aerospace</div>
                <div className="text-xs text-muted-foreground">Advanced Aerial Intelligence</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading provider of drone inspections, LiDAR services, and aerial intelligence solutions for enterprise clients worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="link-social-facebook"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="link-social-twitter"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="link-social-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="link-social-instagram"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-transform hover:scale-110"
                data-testid="link-social-youtube"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`footer-link-${link.path.replace(/\//g, '-')}`}
                    >
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.path}>
                  <Link href={industry.path}>
                    <a
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`footer-link-${industry.path.replace(/\//g, '-')}`}
                    >
                      {industry.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:18338652887" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  833-865-2887
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@volatusaerospace.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@volatusaerospace.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Pointe-Claire, Quebec, Canada
                </span>
              </li>
            </ul>

            <div className="space-y-3">
              <h4 className="font-medium text-sm text-foreground">Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  data-testid="input-newsletter-email"
                  required
                />
                <Button
                  type="submit"
                  size="default"
                  disabled={newsletterMutation.isPending}
                  data-testid="button-newsletter-subscribe"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              © {new Date().getFullYear()} Volatus Aerospace. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy">
                <a className="hover:text-primary transition-colors">Privacy Policy</a>
              </Link>
              <Link href="/terms">
                <a className="hover:text-primary transition-colors">Terms of Service</a>
              </Link>
              <div className="text-primary font-medium" data-testid="text-developer-credit">
                Developed by SHASHANK DAKSH
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
