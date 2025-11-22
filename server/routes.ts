// Developed by SHASHANK DAKSH
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertNewsletterSubscriptionSchema, insertQuoteRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact Form Submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Contact inquiry submitted successfully",
        data: inquiry,
      });
    } catch (error: any) {
      console.error("Error creating contact inquiry:", error);
      
      if (error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to submit contact inquiry",
      });
    }
  });

  // Newsletter Subscription
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existing) {
        return res.status(409).json({
          success: false,
          message: "Email already subscribed",
        });
      }
      
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Successfully subscribed to newsletter",
        data: subscription,
      });
    } catch (error: any) {
      console.error("Error creating newsletter subscription:", error);
      
      if (error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to subscribe to newsletter",
      });
    }
  });

  // Quote Request Submission
  app.post("/api/quote/request", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Quote request submitted successfully",
        data: quoteRequest,
      });
    } catch (error: any) {
      console.error("Error creating quote request:", error);
      
      if (error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to submit quote request",
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      success: true,
      message: "Server is running",
      timestamp: new Date().toISOString(),
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
