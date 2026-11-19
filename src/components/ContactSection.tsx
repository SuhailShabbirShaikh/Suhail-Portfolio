"use client";

import { useState } from "react";
import { portfolioConfig } from "@/data/portfolioData";
import { Mail, Calendar, ArrowRight, CheckCircle2, Clock, Globe, Phone, MessageSquare, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Custom Full-Stack Web App",
    timeline: "Within 1-2 Months",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate inquiry submission
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Let&apos;s build something great together.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Have a product vision, an upcoming RFP, or a technical challenge? Send me an inquiry or book a quick intro call to discuss your roadmap.
            </p>

            <div className="space-y-4 pt-4 border-t border-border">
              {/* WhatsApp Quick Chat */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">Fastest Response</div>
                    <div className="text-sm font-bold text-foreground">Chat via WhatsApp</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={portfolioConfig.profile.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                  >
                    Germany (+49)
                  </a>
                  <a
                    href={portfolioConfig.profile.whatsappIndia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600/90 hover:bg-emerald-700 text-white transition-colors"
                  >
                    India (+91)
                  </a>
                </div>
              </div>

              {/* Direct Calling / Phone */}
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Mobile &amp; Direct Call</div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 font-medium text-xs sm:text-sm">
                    <a href={`tel:${portfolioConfig.profile.phone}`} className="hover:underline">
                      {portfolioConfig.profile.phone} (DE)
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <a href={`tel:${portfolioConfig.profile.secondaryPhone}`} className="hover:underline">
                      {portfolioConfig.profile.secondaryPhone} (IN)
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Email */}
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Direct Email</div>
                  <a href={`mailto:${portfolioConfig.profile.links.email}`} className="font-medium hover:underline">
                    {portfolioConfig.profile.links.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn & GitHub */}
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Professional Profiles</div>
                  <div className="flex items-center gap-3 font-medium text-xs sm:text-sm">
                    <a
                      href={portfolioConfig.profile.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600 dark:text-blue-400"
                    >
                      LinkedIn Profile &rarr;
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <a
                      href={portfolioConfig.profile.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-foreground"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Location &amp; Availability</div>
                  <div className="font-medium">{portfolioConfig.profile.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right inquiry form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Thank you for reaching out!</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    I have received your inquiry and will review the requirements promptly. You will hear back at{" "}
                    <span className="font-semibold text-foreground">{formData.email || "your email"}</span> shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Work Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Project Category</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40"
                      >
                        <option>Custom Full-Stack Web App</option>
                        <option>Real-Time Tracking &amp; Telemetry</option>
                        <option>Booking Platform &amp; Marketplace</option>
                        <option>API &amp; System Architecture</option>
                        <option>Product MVP (0-to-1)</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Desired Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40"
                      >
                        <option>Immediately (&lt; 2 weeks)</option>
                        <option>Within 1-2 Months</option>
                        <option>3+ Months (Long-term)</option>
                        <option>Advisory / Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Project Details &amp; Objectives</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe what you're building, key features, and any technical requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-subtle"
                  >
                    <span>Submit Project Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
