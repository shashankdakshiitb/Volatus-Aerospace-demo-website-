// Developed by SHASHANK DAKSH
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Zap, Eye, Shield, BarChart } from "lucide-react";

const EnergyUtilities = () => {
  const services = [
    { icon: <Zap className="h-6 w-6" />, title: "Power Line Inspection", description: "100,000+ miles monitored annually" },
    { icon: <Eye className="h-6 w-6" />, title: "Substation Assessment", description: "Thermal and visual inspections" },
    { icon: <Shield className="h-6 w-6" />, title: "Vegetation Management", description: "Right-of-way monitoring" },
    { icon: <BarChart className="h-6 w-6" />, title: "Storm Response", description: "Rapid damage assessment" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24" data-testid="section-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
              Energy & Utilities Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive drone services for power generation, transmission, and distribution infrastructure
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-get-quote">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="flex justify-center text-primary mb-4">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Reduce inspection costs by 40-60%",
                "Minimize worker safety risks",
                "Faster turnaround times",
                "Comprehensive data collection",
                "Predictive maintenance insights",
                "Regulatory compliance support",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3" data-testid={`benefit-${index}`}>
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us to learn how our aerial intelligence solutions can transform your energy infrastructure monitoring
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" data-testid="button-cta">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EnergyUtilities;
