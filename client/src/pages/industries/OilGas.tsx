// Developed by SHASHANK DAKSH
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Radio, Eye, Droplets, AlertTriangle } from "lucide-react";

const OilGas = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24" data-testid="section-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
              Oil & Gas Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive aerial intelligence for pipeline monitoring, facility inspections, and infrastructure surveillance
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

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="section-stats">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div>
              <div className="text-5xl font-tech font-bold mb-2">75,000+</div>
              <div className="text-xl opacity-90">Flight Hours</div>
              <p className="text-sm opacity-75 mt-2">Pipeline monitoring operations</p>
            </div>
            <div>
              <div className="text-5xl font-tech font-bold mb-2">500,000+</div>
              <div className="text-xl opacity-90">Kilometers Monitored</div>
              <p className="text-sm opacity-75 mt-2">Pipeline and energy corridors</p>
            </div>
            <div>
              <div className="text-5xl font-tech font-bold mb-2">24/7</div>
              <div className="text-xl opacity-90">Operations</div>
              <p className="text-sm opacity-75 mt-2">Real-time monitoring capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" data-testid="section-services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Specialized Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover-elevate transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center text-primary mb-4">
                  <Radio className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">Pipeline Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Long-linear inspections with real-time data collection</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center text-primary mb-4">
                  <Droplets className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">Leak Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Advanced optical gas detection systems</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center text-primary mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">Right-of-Way</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Vegetation management and encroachment detection</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center text-primary mb-4">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">Emergency Response</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Rapid deployment for incident assessment</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-muted" data-testid="section-technology">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">AIRS³ Technology Platform</h2>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Advanced Integrity Reporting System</CardTitle>
                <CardDescription className="text-base">
                  Our proprietary AI-powered platform for pipeline monitoring and data analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Real-Time Data Collection
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Continuous monitoring with automated anomaly detection and instant alerts
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      AI-Powered Analysis
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Machine learning algorithms identify potential issues before they become critical
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Geo-Referenced Reporting
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Precise location data with comprehensive visual documentation
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Regulatory Compliance
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Meet all industry standards with automated reporting and documentation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Pipeline Infrastructure</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us to learn how our aerial intelligence solutions can enhance your pipeline monitoring operations
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" data-testid="button-cta">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OilGas;
