"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Wrench,
  Bot,
  MessageCircle,
  ShoppingCart,
  Target,
  Briefcase,
  ExternalLink,
  AlertCircle,
  Send,
  Link2,
  Link,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

interface Service {
  name: string;
  emoji: string;
  price: string;
  type: string;
  description: string;
  features: string[];
}

interface ServicesSectionProps {
  services: Service[];
}
export default function ServicesSection({ services }: ServicesSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    serviceType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const validateField = useCallback(
    (name: string, value: string) => {
      const newErrors = { ...errors };

      switch (name) {
        case "name":
          if (!value.trim()) {
            newErrors.name = "Name is required";
          } else if (value.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters long";
          } else if (value.trim().length > 100) {
            newErrors.name = "Name must be less than 100 characters";
          } else {
            delete newErrors.name;
          }
          break;

        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!value.trim()) {
            newErrors.email = "Email is required";
          } else if (!emailRegex.test(value.trim())) {
            newErrors.email = "Please enter a valid email address";
          } else {
            delete newErrors.email;
          }
          break;

        case "message":
          if (!value.trim()) {
            newErrors.message = "Message is required";
          } else if (value.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
          } else if (value.trim().length > 2000) {
            newErrors.message = "Message must be less than 2000 characters";
          } else {
            delete newErrors.message;
          }
          break;
      }

      setErrors(newErrors);
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent, type: string) => {
      e.preventDefault();

      // Validate all fields before submission and mark them as touched
      Object.keys(formData).forEach((key) => {
        if (key !== "serviceType") {
          setTouched((prev) => ({ ...prev, [key]: true }));
          validateField(key, formData[key as keyof typeof formData]);
        }
      });

      // Check if there are any validation errors
      if (Object.keys(errors).length > 0) {
        toast({
          title: "Please check your input",
          description:
            "Please review the highlighted fields before submitting.",
          variant: "destructive",
        });
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "Service " + type,
            ...formData,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          // Handle validation errors from server
          if (data.details && Array.isArray(data.details)) {
            toast({
              title: "Validation Error",
              description: data.details.join(", "),
              variant: "destructive",
            });
          } else {
            throw new Error(
              data.message || data.error || "Failed to send message",
            );
          }
          return;
        }

        setIsSubmitted(true);
        setErrors({}); // Clear any existing errors
        setTouched({}); // Clear touched state
        toast({
          title: "Message sent successfully!",
          description:
            data.message ||
            `Your ${type} request has been sent. I'll get back to you soon.`,
        });

        // Reset form
        setFormData({ name: "", email: "", message: "", serviceType: "" });

        // Reset submitted state after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } catch (error) {
        console.error("Error sending message:", error);
        toast({
          title: "Error sending message",
          description:
            error instanceof Error
              ? error.message
              : "There was an issue sending your message. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, errors, validateField, toast],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    },
    [],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setTouched((prev) => ({
        ...prev,
        [id]: true,
      }));

      // Validate field on blur
      if (id !== "serviceType") {
        validateField(id, value);
      }
    },
    [validateField],
  );

  const getServiceIcon = useCallback((type: string) => {
    switch (type) {
      case "employment":
        return <Briefcase className="h-5 w-5" />;
      case "website":
        return <Globe className="h-5 w-5" />;
      case "mobile":
        return <Smartphone className="h-5 w-5" />;
      case "embedded":
        return <Wrench className="h-5 w-5" />;
      case "ai":
        return <Bot className="h-5 w-5" />;
      case "chatbot":
        return <MessageCircle className="h-5 w-5" />;
      case "ecommerce":
        return <ShoppingCart className="h-5 w-5" />;
      case "consulting":
        return <Target className="h-5 w-5" />;
      default:
        return <Code2 className="h-5 w-5" />;
    }
  }, []);

  const getServiceColor = useCallback((type: string) => {
    switch (type) {
      case "employment":
        return "bg-status-info/10 border-status-info/20 hover:border-status-info/40";
      case "website":
        return "bg-status-available/10 border-status-available/20 hover:border-status-available/40";
      case "mobile":
        return "bg-purple-500/10 border-purple-500/20 hover:border-purple-400/40";
      case "embedded":
        return "bg-status-warning/10 border-status-warning/20 hover:border-status-warning/40";
      case "ai":
        return "bg-status-busy/10 border-status-busy/20 hover:border-status-busy/40";
      case "chatbot":
        return "bg-pink-500/10 border-pink-500/20 hover:border-pink-400/40";
      case "ecommerce":
        return "bg-status-warning/10 border-status-warning/20 hover:border-status-warning/40";
      case "consulting":
        return "bg-primary/10 border-primary/20 hover:border-primary/40";
      default:
        return "bg-background-tertiary/10 border-border/20 hover:border-border/40";
    }
  }, []);

  const getServiceButtonColor = useCallback((type: string) => {
    switch (type) {
      case "employment":
        return "hover:bg-status-info/20 hover:border-status-info/50";
      case "website":
        return "hover:bg-status-available/20 hover:border-status-available/50";
      case "mobile":
        return "hover:bg-purple-500/20 hover:border-purple-500/50";
      case "embedded":
        return "hover:bg-status-warning/20 hover:border-status-warning/50";
      case "ai":
        return "hover:bg-status-busy/20 hover:border-status-busy/50";
      case "chatbot":
        return "hover:bg-pink-500/20 hover:border-pink-500/50";
      case "ecommerce":
        return "hover:bg-status-warning/20 hover:border-status-warning/50";
      case "consulting":
        return "hover:bg-primary/20 hover:border-primary/50";
      default:
        return "hover:bg-background-tertiary/20 hover:border-border/50";
    }
  }, []);

  const isEmploymentCard = useCallback(
    (type: string) => type === "employment",
    [],
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <h2 className="text-2xl font-bold mb-12 text-foreground">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`group relative ${isEmploymentCard(service.type) ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            {/* Card */}
            <div
              className={`relative p-6 rounded-xl border transition-all duration-300 h-full flex flex-col ${getServiceColor(service.type)} hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm ${isEmploymentCard(service.type) ? "min-h-[280px]" : "min-h-[240px]"}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-base font-bold text-primary">
                      {service.price}
                    </p>
                  </div>
                </div>
                <div className="opacity-40 group-hover:opacity-60 transition-opacity">
                  {getServiceIcon(service.type)}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground-muted mb-4 leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-medium text-foreground-subtle uppercase tracking-wide">
                  Features
                </h4>
                <div className="space-y-1">
                  {service.features
                    .slice(0, isEmploymentCard(service.type) ? 4 : 3)
                    .map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-xs text-foreground-muted flex items-start"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  {service.features.length >
                    (isEmploymentCard(service.type) ? 4 : 3) && (
                    <div className="text-xs text-foreground-subtle italic">
                      +
                      {service.features.length -
                        (isEmploymentCard(service.type) ? 4 : 3)}{" "}
                      more features
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              {/* CTA Button */}
              <div className="mt-auto">
                <Dialog>
                    <DialogTrigger asChild>
                    <Button
                      variant="neomorphicOutline"
                      className={`w-full transition-all duration-300 ${getServiceButtonColor(service.type)}`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          serviceType: service.name,
                        }))
                      }
                    >
                      {!isSubmitting && <ExternalLink className="h-4 w-4" />}
                      {isEmploymentCard(service.type) ? "Hire Me" : "Get Quote"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-background-secondary/95 border-border/50 backdrop-blur-xl max-w-md rounded-2xl">
                    <DialogHeader className="text-center pb-4">
                      <DialogTitle className="text-xl font-bold text-foreground mb-2">
                        {isEmploymentCard(service.type)
                          ? "Let's Work Together"
                          : "Get Started"}
                      </DialogTitle>
                      <DialogDescription className="text-foreground-muted">
                        Interested in{" "}
                        <span className="text-primary font-medium">
                          {service.name}
                        </span>
                        ?
                        {isEmploymentCard(service.type)
                          ? " Let's discuss the opportunity."
                          : " Let's discuss your project."}
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={(e) => handleSubmit(e, service.type)}
                      className="space-y-4 py-4"
                    >
                      {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                          <div className="w-12 h-12 bg-status-available/20 rounded-full flex items-center justify-center mb-4">
                            <AlertCircle className="h-6 w-6 text-status-available" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            Message Sent!
                          </h3>
                          <p className="text-foreground-muted text-sm">
                            Thank you for your interest. I'll get back to you
                            soon.
                          </p>
                        </div>
                      ) : (
                        <>
                          {/* Form fields */}
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground-muted">
                              Name *
                            </Label>
                            <Input
                              id="name"
                              placeholder="Your name"
                              className={`bg-background-tertiary/70 border-border/50 text-foreground focus:border-primary/50 ${
                                errors.name && touched.name
                                  ? "border-status-warning/60 focus:border-status-warning/80"
                                  : ""
                              }`}
                              value={formData.name}
                              onChange={handleInputChange}
                              onBlur={handleBlur}
                              required
                            />
                            {errors.name && touched.name && (
                              <p className="text-status-warning text-sm flex items-center gap-1">
                                <AlertCircle className="h-3 w-3" />
                                {errors.name}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground-muted">
                              Email *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              className={`bg-background-tertiary/70 border-border/50 text-foreground focus:border-primary/50 ${
                                errors.email && touched.email
                                  ? "border-status-warning/60 focus:border-status-warning/80"
                                  : ""
                              }`}
                              value={formData.email}
                              onChange={handleInputChange}
                              onBlur={handleBlur}
                              required
                            />
                            {errors.email && touched.email && (
                              <p className="text-status-warning text-sm flex items-center gap-1">
                                <AlertCircle className="h-3 w-3" />
                                {errors.email}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="message" className="text-foreground-muted">
                              {isEmploymentCard(service.type)
                                ? "Tell me about the role *"
                                : "Project Details *"}
                            </Label>
                            <Textarea
                              id="message"
                              placeholder={
                                isEmploymentCard(service.type)
                                  ? "Tell me about the position and requirements..."
                                  : `Tell me about your ${service.type} project...`
                              }
                              className={`bg-background-tertiary/70 border-border/50 text-foreground focus:border-primary/50 min-h-[100px] ${
                                errors.message && touched.message
                                  ? "border-status-warning/60 focus:border-status-warning/80"
                                  : ""
                              }`}
                              value={formData.message}
                              onChange={handleInputChange}
                              onBlur={handleBlur}
                              required
                            />
                            {errors.message && touched.message && (
                              <p className="text-status-warning text-sm flex items-center gap-1">
                                <AlertCircle className="h-3 w-3" />
                                {errors.message}
                              </p>
                            )}
                            <div className="text-right">
                              <span
                                className={`text-xs ${
                                  formData.message.length > 2000
                                    ? "text-status-warning"
                                    : "text-foreground-subtle"
                                }`}
                              >
                                {formData.message.length}/2000 characters
                              </span>
                            </div>
                          </div>
                          <Button
                            type="submit"
                            variant="neomorphicPrimary"
                            disabled={
                              !formData.name ||
                              !formData.email ||
                              !formData.message ||
                              Object.keys(errors).length > 0 ||
                              isSubmitting
                            }
                            className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {!isSubmitting && <Send className="h-4 w-4" />}
                            {isSubmitting ? (
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </div>
                            ) : (
                              "Send Message"
                            )}
                          </Button>
                        </>
                      )}
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
