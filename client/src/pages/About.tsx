// Developed by SHASHANK DAKSH
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Target, Eye, Award, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Pioneering cutting-edge aerial intelligence solutions",
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Precision",
      description: "Delivering accurate data and insights every time",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "Committed to the highest standards of quality",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Partnership",
      description: "Building lasting relationships with our clients",
    },
  ];

  const milestones = [
    { year: "2015", event: "Company Founded", description: "Began operations in drone-based inspections" },
    { year: "2018", event: "75,000 Flight Hours", description: "Reached major milestone in pipeline monitoring" },
    { year: "2020", event: "BVLOS Certification", description: "Awarded Beyond Visual Line of Sight operations approval" },
    { year: "2022", event: "Global Expansion", description: "Extended services to international markets" },
    { year: "2024", event: "AI Integration", description: "Launched AI-powered analytics platform" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24" data-testid="section-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
              About Volatus Aerospace
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your trusted partner in advanced aerial intelligence solutions, dedicated to providing unmatched innovation, reliability, and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" data-testid="section-mission">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide unmatched innovation, reliability, and expertise in every aerial intelligence solution. We seamlessly merge cutting-edge technology with extensive specialized expertise to deliver unprecedented access to advanced data.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Eye className="h-8 w-8 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in aerial intelligence solutions, enhancing operational efficiency, cutting costs, and empowering fact-based decision-making for successful business outcomes across all industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted" data-testid="section-values">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" data-testid="section-timeline">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6 items-start group"
                data-testid={`milestone-${index}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-tech font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                </div>
                <Card className="flex-1 hover-elevate transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">{milestone.event}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="section-why-choose">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl opacity-90">
                The advantages of partnering with Volatus Aerospace
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Advanced proprietary technology and AI-powered analytics",
                "75,000+ flight hours of proven experience",
                "500,000+ kilometers of infrastructure monitored",
                "Vertically integrated services from equipment to training",
                "BVLOS and regulatory approvals across North America",
                "Industry-specific expertise and customized solutions",
                "Safety-first approach with comprehensive insurance",
                "Carbon-neutral commitment and sustainable operations",
              ].map((item, index) => (
                <div key={index} className="flex gap-3" data-testid={`advantage-${index}`}>
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" data-testid="section-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our aerial intelligence solutions can transform your operations
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-cta">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
