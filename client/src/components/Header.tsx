// Developed by SHASHANK DAKSH
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logoImage from "@assets/generated_images/aerospace_company_logo_design.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Drone Inspections", path: "/services/drone-inspections" },
    { name: "LiDAR Services", path: "/services/lidar" },
    { name: "Aviation Services", path: "/services/aviation" },
    { name: "Confined Space", path: "/services/confined-space" },
    { name: "Thermography", path: "/services/thermography" },
  ];

  const industries = [
    { name: "Energy & Utilities", path: "/industries/energy-utilities" },
    { name: "Oil & Gas", path: "/industries/oil-gas" },
    { name: "Defense", path: "/industries/defense" },
    { name: "Construction & Engineering", path: "/industries/construction" },
    { name: "Public Safety", path: "/industries/public-safety" },
    { name: "Precision Agriculture", path: "/industries/agriculture" },
    { name: "Mining & Aggregates", path: "/industries/mining" },
    { name: "Infrastructure & Transportation", path: "/industries/infrastructure" },
  ];

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        location === href ? "text-primary" : "text-foreground"
      }`}
      data-testid={`link-${href.replace(/\//g, '-')}`}
    >
      {children}
    </Link>
  );

  const DropdownMenu = ({ title, items }: { title: string; items: Array<{ name: string; path: string }> }) => {
    const isActive = activeDropdown === title;
    
    return (
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown(title)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
          data-testid={`button-dropdown-${title.toLowerCase().replace(/\s/g, '-')}`}
        >
          {title}
          <ChevronDown className={`h-4 w-4 transition-transform ${isActive ? 'rotate-180' : ''}`} />
        </button>
        
        {isActive && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-card-border rounded-md shadow-lg animate-scale-in z-50">
            <div className="p-2">
              {items.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  data-testid={`link-${item.path.replace(/\//g, '-')}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <img src={logoImage} alt="Volatus Aerospace" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-bold text-xl text-foreground">Volatus Aerospace</div>
              <div className="text-xs text-muted-foreground">Advanced Aerial Intelligence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <DropdownMenu title="Services" items={services} />
            <DropdownMenu title="Industries" items={industries} />
            <NavLink href="/training">Training</NavLink>
            <NavLink href="/equipment">Equipment</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:18338652887" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>833-865-2887</span>
            </a>
            <Link href="/contact">
              <Button variant="default" size="default" data-testid="button-get-quote">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-card-border animate-slide-in-left">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground mb-2">Services</div>
              {services.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-link-${item.path.replace(/\//g, '-')}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground mb-2">Industries</div>
              {industries.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-link-${item.path.replace(/\//g, '-')}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2 border-t border-card-border pt-4">
              <Link
                href="/training"
                className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Training
              </Link>
              <Link
                href="/equipment"
                className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Equipment
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            <div className="pt-4">
              <Link href="/contact">
                <Button variant="default" className="w-full" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-button-get-quote">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
