// Developed by SHASHANK DAKSH
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Plane, Radio, Satellite, Eye, Shield, CheckCircle2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import videoBackground from "@assets/generated_videos/aerial_clouds_hero_background.mp4";

const Home = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate count-up
          const duration = 2000;
          const steps = 60;
          const increment1 = 75000 / steps;
          const increment2 = 500000 / steps;
          const increment3 = 100 / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            setCount1(Math.min(Math.floor(increment1 * step), 75000));
            setCount2(Math.min(Math.floor(increment2 * step), 500000));
            setCount3(Math.min(Math.floor(increment3 * step), 100));
            
            if (step >= steps) clearInterval(timer);
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const services = [
    {
      icon: <Radio className="h-8 w-8 text-primary" />,
      title: "Drone Inspections",
      description: "High-quality aerial imaging and data collection for comprehensive analysis, surveying, and mapping.",
      path: "/services/drone-inspections",
    },
    {
      icon: <Satellite className="h-8 w-8 text-primary" />,
      title: "LiDAR Services",
      description: "Advanced aerial, terrestrial, and bathymetric data collection using cutting-edge LiDAR technology.",
      path: "/services/lidar",
    },
    {
      icon: <Plane className="h-8 w-8 text-primary" />,
      title: "Aviation Services",
      description: "Fixed-wing and rotary surveillance operations ensuring precision monitoring of your assets.",
      path: "/services/aviation",
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Confined Space",
      description: "Specialized inspections for underground pipelines, boilers, reactors, and maritime vessels.",
      path: "/services/confined-space",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Thermography",
      description: "Thermal imaging for electrical systems, solar panels, and crop health monitoring.",
      path: "/services/thermography",
    },
  ];

  const industries = [
    { name: "Energy & Utilities", image: "⚡", path: "/industries/energy-utilities" },
    { name: "Oil & Gas", image: "🛢️", path: "/industries/oil-gas" },
    { name: "Defense", image: "🛡️", path: "/industries/defense" },
    { name: "Construction", image: "🏗️", path: "/industries/construction" },
    { name: "Public Safety", image: "🚨", path: "/industries/public-safety" },
    { name: "Agriculture", image: "🌾", path: "/industries/agriculture" },
    { name: "Mining", image: "⛏️", path: "/industries/mining" },
    { name: "Infrastructure", image: "🏛️", path: "/industries/infrastructure" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="video-hero-background"
        >
          <source src={videoBackground} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 video-overlay"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up"
            data-testid="text-hero-title"
          >
            The Sky Is Not the Limit.
            <br />
            <span className="text-accent">It's Where We Begin.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Your Trusted Partner for Advanced Aerial Intelligence Solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <Link href="/contact">
              <Button variant="default" size="lg" className="text-lg px-8" data-testid="button-get-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 glass-effect text-white border-white hover:bg-white/20"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background" data-testid="section-services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-title">
              Services We Provide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive aerial solutions tailored to meet your exact needs with precision and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Link href={service.path}>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary" data-testid={`button-learn-more-${index}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-24 bg-primary text-primary-foreground" data-testid="section-statistics">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-tech font-bold" data-testid="text-stat-flights">
                {count1.toLocaleString()}+
              </div>
              <div className="text-xl opacity-90">Flight Hours</div>
              <p className="text-sm opacity-75">Monitoring critical infrastructure worldwide</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-tech font-bold" data-testid="text-stat-km">
                {count2.toLocaleString()}+
              </div>
              <div className="text-xl opacity-90">Kilometers Monitored</div>
              <p className="text-sm opacity-75">Pipeline and energy corridor surveillance</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-tech font-bold" data-testid="text-stat-clients">
                {count3}+
              </div>
              <div className="text-xl opacity-90">Enterprise Clients</div>
              <p className="text-sm opacity-75">Trusted by industry leaders globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-muted" data-testid="section-industries">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-industries-title">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-scale aerial solutions across diverse industries with specialized expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.path}>
                <Card
                  className="hover-elevate transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center p-8 group"
                  data-testid={`card-industry-${index}`}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.image}
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background" data-testid="section-why-choose">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Volatus Aerospace</h2>
              <p className="text-lg text-muted-foreground">
                Unmatched innovation, reliability, and expertise in every flight mission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Advanced Technology",
                  description: "Cutting-edge drones, LiDAR systems, and AI-powered analytics",
                },
                {
                  title: "Expert Team",
                  description: "Highly trained pilots and data analysts with industry-specific knowledge",
                },
                {
                  title: "Safety First",
                  description: "Rigorous safety protocols and regulatory compliance",
                },
                {
                  title: "Proven Results",
                  description: "75,000+ flight hours and 500,000+ km monitored successfully",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4" data-testid={`feature-${index}`}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground" data-testid="section-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your aerial intelligence needs and discover how we can help optimize your operations
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-white text-primary hover:bg-white/90"
              data-testid="button-cta-contact"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
