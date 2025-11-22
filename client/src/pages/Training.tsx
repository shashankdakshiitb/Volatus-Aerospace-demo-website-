// Developed by SHASHANK DAKSH
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { GraduationCap, Award, BookOpen, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";

const Training = () => {
  const courses = [
    {
      title: "Basic Drone Pilot Certification",
      level: "Beginner",
      duration: "2 weeks",
      format: "Online & In-Person",
      description: "Comprehensive training for aspiring drone pilots covering regulations, safety, and basic flight operations.",
      topics: ["Aviation regulations", "Safety protocols", "Basic flight operations", "Equipment handling"],
    },
    {
      title: "Commercial Operations",
      level: "Intermediate",
      duration: "4 weeks",
      format: "Hybrid",
      description: "Advanced training for commercial drone operations including inspection techniques and data collection.",
      topics: ["Commercial applications", "Inspection techniques", "Data collection methods", "Advanced flight maneuvers"],
    },
    {
      title: "BVLOS Operations",
      level: "Advanced",
      duration: "6 weeks",
      format: "In-Person",
      description: "Specialized training for Beyond Visual Line of Sight operations with certification preparation.",
      topics: ["BVLOS regulations", "Advanced navigation", "Mission planning", "Emergency procedures"],
    },
    {
      title: "LiDAR & Mapping",
      level: "Professional",
      duration: "3 weeks",
      format: "In-Person",
      description: "Expert-level training in LiDAR technology, data processing, and advanced mapping techniques.",
      topics: ["LiDAR fundamentals", "Point cloud processing", "3D modeling", "Geospatial analysis"],
    },
  ];

  const benefits = [
    { icon: <Award className="h-6 w-6" />, title: "Certified Instructors", description: "Learn from industry experts" },
    { icon: <Users className="h-6 w-6" />, title: "Small Class Sizes", description: "Personalized attention guaranteed" },
    { icon: <BookOpen className="h-6 w-6" />, title: "Comprehensive Materials", description: "Access to extensive resources" },
    { icon: <GraduationCap className="h-6 w-6" />, title: "Industry Recognition", description: "Widely recognized certification" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24" data-testid="section-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
              Volatus Academy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Industry-leading drone training programs with flexible online and in-person courses
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-enroll">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" data-testid="section-benefits">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Train With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The advantages of choosing Volatus Academy for your drone education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-benefit-${index}`}>
                <CardHeader>
                  <div className="flex justify-center text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-muted" data-testid="section-courses">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Available Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs for every skill level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-course-${index}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-2xl flex-1">{course.title}</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      {course.level}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>{course.format}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Course Topics:</h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full" data-testid={`button-enroll-${index}`}>
                      Enroll in Course
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20" data-testid="section-certification">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl">Get Certified</CardTitle>
                <CardDescription className="text-lg">
                  Earn industry-recognized certification upon successful completion
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground">
                  Our certification programs are recognized across the industry and meet all regulatory requirements. Upon completion, you'll receive official certification and ongoing support.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-tech font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">Pass Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-tech font-bold text-primary mb-2">1000+</div>
                    <p className="text-sm text-muted-foreground">Certified Pilots</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-tech font-bold text-primary mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Support Access</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our next training session and become a certified drone professional
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" data-testid="button-cta">
              Contact Us for Enrollment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Training;
