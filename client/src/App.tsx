// Developed by SHASHANK DAKSH
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Training from "@/pages/Training";
import Equipment from "@/pages/Equipment";
import DroneInspections from "@/pages/services/DroneInspections";
import LidarServices from "@/pages/services/LidarServices";
import EnergyUtilities from "@/pages/industries/EnergyUtilities";
import OilGas from "@/pages/industries/OilGas";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/training" component={Training} />
        <Route path="/equipment" component={Equipment} />
        
        {/* Service Routes */}
        <Route path="/services/drone-inspections" component={DroneInspections} />
        <Route path="/services/lidar" component={LidarServices} />
        <Route path="/services/aviation" component={DroneInspections} />
        <Route path="/services/confined-space" component={DroneInspections} />
        <Route path="/services/thermography" component={DroneInspections} />
        
        {/* Industry Routes */}
        <Route path="/industries/energy-utilities" component={EnergyUtilities} />
        <Route path="/industries/oil-gas" component={OilGas} />
        <Route path="/industries/defense" component={EnergyUtilities} />
        <Route path="/industries/construction" component={EnergyUtilities} />
        <Route path="/industries/public-safety" component={EnergyUtilities} />
        <Route path="/industries/agriculture" component={EnergyUtilities} />
        <Route path="/industries/mining" component={EnergyUtilities} />
        <Route path="/industries/infrastructure" component={EnergyUtilities} />
        
        {/* Legal Pages (placeholders) */}
        <Route path="/privacy" component={NotFound} />
        <Route path="/terms" component={NotFound} />
        
        {/* 404 Fallback */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <FloatingActionButton />
      <ScrollToTop />
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
