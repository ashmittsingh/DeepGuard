"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AudioUploader from "@/components/AudioUploader";
import RiskMeter from "@/components/RiskMeter";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Download, 
  RefreshCw,
  FileAudio,
  Clock,
  Cpu
} from "lucide-react";

type AnalysisStatus = "idle" | "uploading" | "analyzing" | "complete";

interface AnalysisResult {
  riskScore: number;
  confidence: number;
  duration: string;
  detectedPatterns: string[];
  recommendations: string[];
}

const Analyze = () => {
  const [status, setStatus] = useState<AnalysisStatus>("idle");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setStatus("uploading");
    
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus("analyzing");
    
    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock result
    const mockResult: AnalysisResult = {
      riskScore: Math.floor(Math.random() * 100),
      confidence: 85 + Math.floor(Math.random() * 15),
      duration: "2:34",
      detectedPatterns: [
        "Unusual voice modulation patterns detected",
        "Synthetic speech markers identified",
        "Audio splice indicators found",
      ],
      recommendations: [
        "Do not share sensitive information with this caller",
        "Verify the caller's identity through a separate channel",
        "Report this call to relevant authorities if fraudulent",
      ],
    };

    setResult(mockResult);
    setStatus("complete");
  };

  const handleReset = () => {
    setStatus("idle");
    setSelectedFile(null);
    setResult(null);
  };

  const getRiskInfo = (score: number) => {
    if (score < 30) {
      return {
        level: "Low Risk",
        color: "text-success",
        bgColor: "bg-success/20",
        icon: CheckCircle,
        description: "This audio appears to be authentic with no significant deepfake markers detected.",
      };
    }
    if (score < 70) {
      return {
        level: "Medium Risk",
        color: "text-warning",
        bgColor: "bg-warning/20",
        icon: AlertTriangle,
        description: "Some suspicious patterns detected. We recommend additional verification before trusting this audio.",
      };
    }
    return {
      level: "High Risk",
      color: "text-danger",
      bgColor: "bg-danger/20",
      icon: AlertTriangle,
      description: "High probability of synthetic or manipulated audio. Exercise extreme caution with this recording.",
    };
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Analyze Your Audio
            </h1>
            <p className="text-muted-foreground text-lg">
              Upload a suspicious call recording and let our AI detect if it contains 
              synthetic or deepfake audio.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {status === "idle" && (
              <div className="animate-fade-in">
                <AudioUploader onFileSelect={handleFileSelect} />
                
                {selectedFile && (
                  <div className="mt-8 flex justify-center animate-scale-in">
                    <Button variant="hero" size="xl" onClick={handleAnalyze}>
                      <Shield className="mr-2 h-5 w-5" />
                      Start Analysis
                    </Button>
                  </div>
                )}

                {/* Instructions */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: FileAudio,
                      title: "Upload Audio",
                      description: "MP3 or WAV files up to 50MB",
                    },
                    {
                      icon: Cpu,
                      title: "AI Analysis",
                      description: "Advanced neural network processing",
                    },
                    {
                      icon: Clock,
                      title: "Instant Results",
                      description: "Get your risk score in seconds",
                    },
                  ].map((item) => (
                    <div key={item.title} className="text-center p-6 rounded-xl bg-card border border-border">
                      <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(status === "uploading" || status === "analyzing") && (
              <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                <LoadingSpinner size="lg" />
                <h3 className="font-display text-xl font-semibold mt-8 mb-2">
                  {status === "uploading" ? "Uploading your file..." : "Analyzing audio patterns..."}
                </h3>
                <p className="text-muted-foreground">
                  {status === "uploading" 
                    ? "Securely transferring your audio file"
                    : "Our AI is examining the audio for deepfake markers"
                  }
                </p>
                
                {/* Progress indicators */}
                <div className="flex items-center gap-4 mt-8">
                  {["Upload", "Process", "Analyze", "Report"].map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        (status === "uploading" && index === 0) || (status === "analyzing" && index <= 2)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {index + 1}
                      </div>
                      {index < 3 && (
                        <div className={`w-8 h-0.5 ${
                          (status === "uploading" && index === 0) || (status === "analyzing" && index < 2)
                            ? "bg-primary"
                            : "bg-muted"
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {status === "complete" && result && (
              <div className="animate-fade-in">
                <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
                  {/* Result Header */}
                  <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
                    <RiskMeter score={result.riskScore} size="lg" />
                    
                    <div className="flex-1 text-center lg:text-left">
                      {(() => {
                        const riskInfo = getRiskInfo(result.riskScore);
                        return (
                          <>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${riskInfo.bgColor} mb-4`}>
                              <riskInfo.icon className={`h-5 w-5 ${riskInfo.color}`} />
                              <span className={`font-semibold ${riskInfo.color}`}>{riskInfo.level}</span>
                            </div>
                            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">
                              Analysis Complete
                            </h2>
                            <p className="text-muted-foreground">
                              {riskInfo.description}
                            </p>
                          </>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Detection Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 rounded-xl bg-muted/30 border border-border">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-warning" />
                        Detected Patterns
                      </h3>
                      <ul className="space-y-3">
                        {result.detectedPatterns.map((pattern, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 shrink-0" />
                            {pattern}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-muted/30 border border-border">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Recommendations
                      </h3>
                      <ul className="space-y-3">
                        {result.recommendations.map((rec, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Analysis Stats */}
                  <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">{result.confidence}%</div>
                      <div className="text-sm text-muted-foreground">Confidence</div>
                    </div>
                    <div className="w-px h-10 bg-border hidden sm:block" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">{result.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                    <div className="w-px h-10 bg-border hidden sm:block" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">&lt; 5s</div>
                      <div className="text-sm text-muted-foreground">Analysis Time</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <Button variant="hero" size="lg">
                      <Download className="mr-2 h-5 w-5" />
                      Download Report
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleReset}>
                      <RefreshCw className="mr-2 h-5 w-5" />
                      Analyze Another
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analyze;
