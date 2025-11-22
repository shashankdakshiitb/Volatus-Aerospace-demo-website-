// Developed by SHASHANK DAKSH
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Scan, Map, Mountain, Cloud, Waves, CheckCircle } from "lucide-react";

const LidarServices = () => {
  const capabilities = [
    { icon: <Scan className="h-6 w-6" />, title: "Aerial LiDAR", description: "High-precision scanning from drones and aircraft" },
    { icon: <Mountain className="h-6 w-6" />, title: "Terrestrial LiDAR", description: "Ground-based 3D data collection" },
    { icon: <Waves className="h-6 w-6" />, title: "Bathymetric LiDAR", description: "Underwater mapping and surveying" },
    { icon: <Cloud className="h-6 w-6" />, title: "Point Cloud Processing", description: "Advanced data processing and modeling" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24" data-testid="section-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
              LiDAR Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Advanced aerial, terrestrial, and bathymetric data collection using cutting-edge LiDAR technology
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

      {/* Capabilities */}
      <section className="py-20" data-testid="section-capabilities">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">LiDAR Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-capability-${index}`}>
                <CardHeader>
                  <div className="flex justify-center text-primary mb-4">{capability.icon}</div>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-muted" data-testid="section-technology">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <Map className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Millimeter Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our state-of-the-art LiDAR systems deliver millimeter-level accuracy for precise 3D modeling and analysis.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">High-density point clouds</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Multi-return capability</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Long-range scanning (up to 1km)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <Cloud className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Advanced Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    AI-powered point cloud processing delivers actionable insights from raw LiDAR data.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Automated classification</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">3D mesh generation</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Volumetric analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20" data-testid="section-applications">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Topographic surveying and mapping",
                "Infrastructure inspection and monitoring",
                "Forest inventory and biomass estimation",
                "Mining volume calculations",
                "Coastal erosion monitoring",
                "Archaeological site documentation",
                "Utility corridor mapping",
                "BIM/CAD model creation",
              ].map((app, index) => (
                <div key={index} className="flex items-center gap-3" data-testid={`application-${index}`}>
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need High-Precision 3D Data?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our LiDAR specialists to discuss your surveying and mapping needs
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

export default LidarServices;
