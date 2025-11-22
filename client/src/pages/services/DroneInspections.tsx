// Developed by SHASHANK DAKSH
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Eye, Camera, MapPin, BarChart } from "lucide-react";

const DroneInspections = () => {
  const capabilities = [
    { icon: <Camera className="h-6 w-6" />, title: "High-Resolution Imaging", description: "4K video and photography for detailed analysis" },
    { icon: <Eye className="h-6 w-6" />, title: "Visual Inspections", description: "Comprehensive structural assessments" },
    { icon: <MapPin className="h-6 w-6" />, title: "GPS Mapping", description: "Precise location data for every inspection point" },
    { icon: <BarChart className="h-6 w-6" />, title: "Data Analytics", description: "AI-powered analysis and reporting" },
  ];

  const applications = [
    "Pipeline integrity monitoring",
    "Roof and building envelope inspections",
    "Solar panel assessments",
    "Wind turbine inspections",
    "Power line surveys",
    "Construction progress tracking",
    "Agricultural crop health monitoring",
    "Environmental surveys",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24" data-testid="section-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
              Drone Inspection Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              High-quality, cost-effective drone-based imaging, video, and data collection for comprehensive analysis, surveying, and mapping
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

      {/* Capabilities Section */}
      <section className="py-20" data-testid="section-capabilities">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-capability-${index}`}>
                <CardHeader>
                  <div className="flex justify-center text-primary mb-4">
                    {capability.icon}
                  </div>
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

      {/* Applications Section */}
      <section className="py-20 bg-muted" data-testid="section-applications">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-center gap-3" data-testid={`application-${index}`}>
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-20" data-testid="section-features">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="benefits" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
            </TabsList>
            <TabsContent value="benefits" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Drone Inspections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Cost-Effective</h4>
                      <p className="text-muted-foreground">Reduce inspection costs by up to 50% compared to traditional methods</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Safer Operations</h4>
                      <p className="text-muted-foreground">Eliminate the need for workers to access dangerous locations</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Faster Results</h4>
                      <p className="text-muted-foreground">Complete inspections in hours instead of days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="process" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Inspection Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { step: "1", title: "Pre-Flight Planning", desc: "Site assessment and mission planning" },
                    { step: "2", title: "Data Collection", desc: "Drone flight and comprehensive imaging" },
                    { step: "3", title: "Analysis", desc: "AI-powered data processing and analysis" },
                    { step: "4", title: "Reporting", desc: "Detailed reports with actionable insights" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="safety" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Safety & Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    All our drone operations are conducted in full compliance with aviation regulations and industry safety standards.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Licensed and certified drone pilots</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Comprehensive insurance coverage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Rigorous pre-flight safety checks</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Real-time flight monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="section-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Schedule an Inspection?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your inspection needs and receive a customized quote
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

export default DroneInspections;
