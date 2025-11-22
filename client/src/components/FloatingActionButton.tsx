// Developed by SHASHANK DAKSH
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { Link } from "wouter";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-4 bg-card border border-card-border rounded-lg shadow-lg p-4 w-64 animate-scale-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm">Need Help?</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Get in touch with our team for any inquiries or assistance.
          </p>
          <Link href="/contact">
            <Button className="w-full" size="sm" onClick={() => setIsOpen(false)}>
              Contact Us
            </Button>
          </Link>
        </div>
      )}

      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg animate-pulse-slow hover:scale-110 transition-transform duration-300"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-floating-action"
        aria-label="Get quote"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default FloatingActionButton;
