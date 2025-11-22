// Developed by SHASHANK DAKSH
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Package, Shield, Wrench, ArrowRight, CheckCircle } from "lucide-react";

const Equipment = () => {
  const categories = [
    {
      title: "Enterprise Drones",
      description: "Professional-grade UAVs for commercial applications",
      features: ["4K/6K cameras", "Extended flight time", "Advanced GPS", "Real-time telemetry"],
      image: "🚁",
    },
    {
      title: "LiDAR Systems",
      description: "High-precision aerial and terrestrial scanning equipment",
      features: ["Millimeter accuracy", "Long-range scanning", "Point cloud generation", "3D modeling"],
      image: "📡",
    },
    {
      title: "Thermal Cameras",
      description: "Advanced infrared imaging for inspections",
      features: ["High resolution", "Temperature measurement", "Radiometric data", "Real-time analysis"],
      image: "🌡️",
    },
    {
      title: "Payloads & Sensors",
      description: "Specialized equipment for custom applications",
      features: ["Multispectral imaging", "Gas detection", "Optical zoom", "Custom integration"],
      image: "🔬",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24" data-testid="section-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Package className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
              Equipment & Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Enterprise-grade UAVs, sensors, and equipment from leading manufacturers
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

      {/* Equipment Categories */}
      <section className="py-20" data-testid="section-equipment">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Equipment Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art technology for every application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-category-${index}`}>
                <CardHeader>
                  <div className="text-6xl mb-4">{category.image}</div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted" data-testid="section-services">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Equipment Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive support for your equipment needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Purchase or lease equipment with flexible financing options
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Wrench className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Regular servicing and repairs by certified technicians
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    24/7 technical support and equipment training
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Find the Right Equipment</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our team can help you select the perfect equipment for your needs
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" data-testid="button-cta">
              Speak with an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
