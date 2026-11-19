"use client";

import { useState } from "react";
import { portfolioConfig } from "@/data/portfolioData";
import { Mail, Calendar, ArrowRight, CheckCircle2, Clock, Globe, Phone, MessageSquare, Linkedin, Github, Sparkles } from "lucide-react";

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
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative aura-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Taking Q1/Q2 2026 Projects</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
                Let&apos;s build your next flagship product.
              </h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                Have a proposal, an RFP, or a complex architecture challenge? Reach out via WhatsApp for immediate response, or submit your project details below.
              </p>
            </div>

            {/* Direct Instant Channels */}
            <div className="space-y-4">
              
              {/* WhatsApp VIP Card */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 shadow-glass">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-glow-emerald">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300">Fastest Direct Route</div>
                    <div className="text-sm font-extrabold text-foreground">Chat with Suhail on WhatsApp</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-500/20">
                  <a
                    href={portfolioConfig.profile.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all text-center hover:scale-105 active:scale-95 shadow-sm"
                  >
                    Germany (+49)
                  </a>
                  <a
                    href={portfolioConfig.profile.whatsappIndia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white transition-all text-center hover:scale-105 active:scale-95 shadow-sm"
                  >
                    India (+91)
                  </a>
                </div>
              </div>

              {/* Calling & Direct Email */}
              <div className="p-5 rounded-3xl glass-surface border border-border/80 shadow-subtle space-y-3.5">
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-muted-foreground">Mobile &amp; Calls</div>
                    <div className="flex flex-wrap gap-x-2 font-bold text-xs sm:text-sm">
                      <a href={`tel:${portfolioConfig.profile.phone}`} className="hover:underline">
                        {portfolioConfig.profile.phone}
                      </a>
                      <span className="text-muted-foreground">•</span>
                      <a href={`tel:${portfolioConfig.profile.secondaryPhone}`} className="hover:underline">
                        {portfolioConfig.profile.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-foreground pt-3 border-t border-border/60">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-muted-foreground">Direct Email</div>
                    <a href={`mailto:${portfolioConfig.profile.links.email}`} className="font-bold text-xs sm:text-sm hover:underline">
                      {portfolioConfig.profile.links.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-foreground pt-3 border-t border-border/60">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-muted-foreground">Profiles</div>
                    <div className="flex items-center gap-3 font-bold text-xs sm:text-sm">
                      <a href={portfolioConfig.profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        LinkedIn &rarr;
                      </a>
                      <span className="text-muted-foreground">•</span>
                      <a href={portfolioConfig.profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border/80 glass-surface p-8 sm:p-12 shadow-2xl">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-glow-emerald">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">Inquiry Sent Successfully!</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-foreground">{formData.name}</span>. I have received your request and will review the specifications. Expect a response at <span className="font-bold text-foreground">{formData.email}</span> within 12 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    Submit another project request &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 pb-2 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    <span>Project Intake Form</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground">Work Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground">Project Domain</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      >
                        <option>Real-Time Telemetry &amp; Fleet System</option>
                        <option>High-Scale Booking &amp; Travel Platform</option>
                        <option>Custom Full-Stack Next.js Web App</option>
                        <option>API &amp; Microservices Architecture</option>
                        <option>0-to-1 MVP Development</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground">Estimated Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      >
                        <option>Immediate Sprint (&lt; 2 Weeks)</option>
                        <option>1 - 2 Months Delivery</option>
                        <option>3+ Months Enterprise Retainer</option>
                        <option>Architecture Advisory Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground">Brief Summary of Scope &amp; Tech Requirements</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your requirements, expected volumes, target launch date, and any existing tech stack..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-4 rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl hover:shadow-2xl"
                  >
                    <span>Send Project Inquiry to Suhail</span>
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
