"use client";

import { FileAudio, Calendar, Clock, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import RiskMeter from "./RiskMeter";

interface AnalysisResult {
  id: string;
  fileName: string;
  uploadDate: string;
  duration: string;
  riskScore: number;
  status: "completed" | "processing" | "failed";
}

interface AnalysisCardProps {
  result: AnalysisResult;
  onDownload?: (id: string) => void;
  onShare?: (id: string) => void;
}

const AnalysisCard = ({ result, onDownload, onShare }: AnalysisCardProps) => {
  const getRiskBadge = (score: number) => {
    if (score < 30) return { label: "Safe", className: "bg-success/20 text-success" };
    if (score < 70) return { label: "Suspicious", className: "bg-warning/20 text-warning" };
    return { label: "Dangerous", className: "bg-danger/20 text-danger" };
  };

  const badge = getRiskBadge(result.riskScore);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 shadow-card">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        {/* File Info */}
        <div className="flex items-start gap-4 flex-1">
          <div className="p-3 rounded-xl bg-muted">
            <FileAudio className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">
              {result.fileName}
            </h3>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {result.uploadDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {result.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Risk Score */}
        <div className="flex items-center gap-6">
          <RiskMeter score={result.riskScore} size="sm" animated={false} />
          
          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDownload?.(result.id)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Download className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onShare?.(result.id)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Risk indicator bar */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Detection Result</span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.className}`}>
            {badge.label}
          </span>
        </div>
        <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              result.riskScore < 30 ? "bg-success" :
              result.riskScore < 70 ? "bg-warning" : "bg-danger"
            }`}
            style={{ width: `${result.riskScore}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalysisCard;
