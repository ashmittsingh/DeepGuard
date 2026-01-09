import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HowItWorksStep from "@/components/HowItWorksStep";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  Cpu, 
  BarChart3, 
  Shield,
  ArrowRight,
  Brain,
  Waves,
  Fingerprint,
  Zap
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Audio",
      description: "Simply drag and drop your audio file or click to browse. We accept MP3 and WAV formats up to 50MB. Your file is encrypted during transfer for maximum security.",
    },
    {
      icon: Waves,
      title: "Audio Preprocessing",
      description: "Our system extracts key audio features including spectrograms, mel-frequency cepstral coefficients (MFCCs), and voice characteristics that are essential for deepfake detection.",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Multiple neural network models analyze the audio simultaneously, looking for synthetic patterns, voice cloning artifacts, and audio manipulation signatures.",
    },
    {
      icon: Fingerprint,
      title: "Pattern Recognition",
      description: "Our AI compares the detected patterns against our extensive database of known deepfake signatures, including those from popular voice cloning tools.",
    },
    {
      icon: BarChart3,
      title: "Risk Assessment",
      description: "All analysis results are combined to calculate a comprehensive risk score. Higher scores indicate greater likelihood of synthetic or manipulated audio.",
    },
    {
      icon: Shield,
      title: "Receive Your Report",
      description: "Get a detailed report with your risk score, detected patterns, confidence level, and actionable recommendations—all within seconds of uploading.",
    },
  ];

  const technologies = [
    {
      icon: Brain,
      title: "Deep Neural Networks",
      description: "State-of-the-art transformer models trained on millions of audio samples",
    },
    {
      icon: Waves,
      title: "Spectral Analysis",
      description: "Advanced frequency domain analysis to detect synthetic artifacts",
    },
    {
      icon: Fingerprint,
      title: "Voice Biometrics",
      description: "Unique voice pattern matching and anomaly detection",
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "GPU-accelerated inference for instant results",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Technology
            </span>
            <h1 className="font-display text-3xl lg:text-5xl font-bold mt-4 mb-6">
              How DeepGuard{" "}
              <span className="text-gradient">Detects Deepfakes</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl">
              Our cutting-edge AI technology analyzes audio at multiple levels to identify 
              synthetic voices and manipulation with industry-leading accuracy.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <HowItWorksStep
                key={step.title}
                step={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Technology Cards */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl lg:text-3xl font-bold">
              Powered by Advanced Technology
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div 
                key={tech.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accuracy Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="bg-linear-to-br from-primary/10 via-card to-accent/10 border border-primary/20 rounded-3xl p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">
                  Industry-Leading Accuracy
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Our AI models are trained on the largest dataset of deepfake audio samples, 
                  enabling us to detect even the most sophisticated synthetic voices.
                </p>
                <ul className="space-y-4">
                  {[
                    "Trained on 10M+ audio samples",
                    "Detects 50+ voice cloning tools",
                    "Continuously updated with new threats",
                    "Validated by independent security researchers",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "99.9%", label: "Detection Rate" },
                  { value: "0.1%", label: "False Positives" },
                  { value: "< 5s", label: "Average Time" },
                  { value: "50+", label: "Tools Detected" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-card/80 border border-border text-center">
                    <div className="font-display text-3xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">
              Ready to Try It Yourself?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Upload your first audio file and see our AI in action. 
              No account required to get started.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link href="/analyze">
                Analyze Audio Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
