import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Shield, 
  Zap, 
  Lock, 
  BarChart3, 
  Upload, 
  Bell,
  ArrowRight,
  CheckCircle,
  Phone,
  AlertTriangle
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Detection",
      description: "Advanced neural networks analyze voice patterns to detect deepfake audio and synthetic speech with 99.9% accuracy.",
    },
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description: "Get instant results within seconds. Our optimized algorithms process audio files faster than ever before.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your audio files are encrypted end-to-end and automatically deleted after analysis. We never store your data.",
    },
    {
      icon: BarChart3,
      title: "Detailed Reports",
      description: "Comprehensive analysis reports with confidence scores, risk indicators, and actionable recommendations.",
    },
    {
      icon: Upload,
      title: "Easy Upload",
      description: "Drag and drop your audio files or paste call recordings. We support MP3, WAV, and most common formats.",
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Get notified immediately when high-risk content is detected. Protect yourself and your loved ones.",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Detection Accuracy" },
    { value: "< 5s", label: "Analysis Time" },
    { value: "50M+", label: "Scans Completed" },
    { value: "24/7", label: "Protection" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <span className="text-sm text-primary">AI Voice Scams Are Rising 300% Year Over Year</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Protect Against
              <span className="block text-gradient">AI Voice Scams</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
              DeepGuard uses advanced AI to detect deepfake voices and vishing attempts in seconds. 
              Upload any suspicious call recording and know instantly if it's real or synthetic.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Button variant="hero" size="xl" asChild>
                <Link href="/analyze">
                  Analyze a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/how-it-works">
                  Learn How It Works
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
              {["No Credit Card Required", "Free to Start", "Enterprise Ready"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-success" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="font-display text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                The Problem
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mt-4 mb-6">
                AI Voice Cloning is Getting{" "}
                <span className="text-danger">Dangerously Good</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With just 3 seconds of audio, scammers can now clone anyone's voice with frightening accuracy. 
                They use these deepfakes to impersonate family members, executives, and authority figures 
                to steal money and sensitive information.
              </p>
              <ul className="space-y-4">
                {[
                  "Grandparent scams using cloned family voices",
                  "CEO fraud targeting businesses for wire transfers",
                  "Romance scams with synthetic voices",
                  "Fake kidnapping ransom calls",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-danger mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-danger/20 to-warning/20 flex items-center justify-center border border-danger/20">
                <Phone className="h-32 w-32 text-danger/60 animate-pulse-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full border-4 border-danger/30 animate-ping" style={{ animationDuration: "2s" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Features
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mt-4 mb-6">
              Everything You Need to Stay Safe
            </h2>
            <p className="text-muted-foreground text-lg">
              DeepGuard combines cutting-edge AI technology with user-friendly design 
              to give you the ultimate protection against voice fraud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl bg-linear-to-br from-primary/20 via-card to-accent/20 border border-primary/20 p-8 lg:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            
            <div className="relative z-10">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Ready to Protect Yourself?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Join thousands of users who trust DeepGuard to keep them safe from AI voice scams. 
                Start analyzing suspicious calls today—it's free.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link href="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/analyze">
                    Try Without Account
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
