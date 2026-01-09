"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnalysisCard from "@/components/AnalysisCard";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Shield, 
  AlertTriangle, 
  TrendingUp,
  FileAudio,
  Clock
} from "lucide-react";

const Dashboard = () => {
  // Mock data - will be replaced with real data from Lovable Cloud
  const stats = [
    { icon: FileAudio, label: "Total Scans", value: "24", trend: "+5 this week" },
    { icon: Shield, label: "Safe Calls", value: "18", trend: "75%" },
    { icon: AlertTriangle, label: "Threats Detected", value: "6", trend: "25%" },
    { icon: Clock, label: "Avg. Analysis Time", value: "3.2s", trend: "-0.5s" },
  ];

  const recentAnalyses = [
    {
      id: "1",
      fileName: "suspicious_call_jan_08.mp3",
      uploadDate: "Jan 8, 2026",
      duration: "3:45",
      riskScore: 85,
      status: "completed" as const,
    },
    {
      id: "2",
      fileName: "bank_call_verification.wav",
      uploadDate: "Jan 7, 2026",
      duration: "2:12",
      riskScore: 15,
      status: "completed" as const,
    },
    {
      id: "3",
      fileName: "family_member_call.mp3",
      uploadDate: "Jan 6, 2026",
      duration: "4:30",
      riskScore: 45,
      status: "completed" as const,
    },
    {
      id: "4",
      fileName: "tech_support_recording.wav",
      uploadDate: "Jan 5, 2026",
      duration: "8:15",
      riskScore: 92,
      status: "completed" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-2xl lg:text-3xl font-bold">
                Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Monitor your audio analysis history and threat detection
              </p>
            </div>
            <Button variant="hero" asChild>
              <Link href="/analyze">
                <Plus className="mr-2 h-5 w-5" />
                New Analysis
              </Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-success">
                    <TrendingUp className="h-3 w-3" />
                    {stat.trend}
                  </div>
                </div>
                <div className="font-display text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Recent Analyses */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-semibold">
                Recent Analyses
              </h2>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {recentAnalyses.map((analysis) => (
                <AnalysisCard
                  key={analysis.id}
                  result={analysis}
                  onDownload={(id) => console.log("Download", id)}
                  onShare={(id) => console.log("Share", id)}
                />
              ))}
            </div>
          </div>

          {/* Empty State Prompt */}
          <div className="mt-12 p-8 rounded-2xl bg-linear-to-br from-primary/10 via-card to-accent/10 border border-primary/20 text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold mb-2">
              Enable Full Features
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
              Connect Lovable Cloud to enable authentication, persistent storage, 
              and real audio analysis with AI.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
