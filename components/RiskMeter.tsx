"use client";

import { useEffect, useState } from "react";

interface RiskMeterProps {
  score: number; // 0-100
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const RiskMeter = ({ score, size = "md", animated = true }: RiskMeterProps) => {
  const [displayScore, setDisplayScore] = useState(0);

  const sizes = {
    sm: { width: 120, strokeWidth: 8 },
    md: { width: 180, strokeWidth: 10 },
    lg: { width: 240, strokeWidth: 12 },
  };

  const { width, strokeWidth } = sizes[size];
  const radius = (width - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (displayScore / 100) * circumference;

  const getRiskLevel = (score: number) => {
    if (score < 30) return { label: "Low Risk", color: "stroke-success" };
    if (score < 70) return { label: "Medium Risk", color: "stroke-warning" };
    return { label: "High Risk", color: "stroke-danger" };
  };

  const riskLevel = getRiskLevel(displayScore);

  useEffect(() => {
    if (animated) {
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setDisplayScore(Math.round(score * easeOutQuart));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else {
      setDisplayScore(score);
    }
  }, [score, animated]);

  return (
    <div className="relative inline-flex flex-col items-center">
      <svg
        width={width}
        height={width}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={width / 2}
          cy={width / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-muted"
        />
        
        {/* Progress circle */}
        <circle
          cx={width / 2}
          cy={width / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={`${riskLevel.color} transition-all duration-300`}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
        
        {/* Glow effect */}
        <circle
          cx={width / 2}
          cy={width / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth + 8}
          strokeLinecap="round"
          className={`${riskLevel.color} opacity-20 blur-sm`}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`font-display font-bold ${
          size === "lg" ? "text-5xl" : size === "md" ? "text-4xl" : "text-2xl"
        }`}>
          {displayScore}%
        </span>
        <span className={`text-muted-foreground ${
          size === "lg" ? "text-base" : "text-sm"
        } mt-1`}>
          Confidence
        </span>
      </div>
      
      {/* Risk label */}
      <div className={`mt-4 px-4 py-2 rounded-full ${
        displayScore < 30 ? "bg-success/20 text-success" :
        displayScore < 70 ? "bg-warning/20 text-warning" :
        "bg-danger/20 text-danger"
      }`}>
        <span className="text-sm font-semibold">{riskLevel.label}</span>
      </div>
    </div>
  );
};

export default RiskMeter;
