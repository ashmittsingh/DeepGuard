import { LucideIcon } from "lucide-react";

interface HowItWorksStepProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

const HowItWorksStep = ({ 
  step, 
  icon: Icon, 
  title, 
  description, 
  isLast = false 
}: HowItWorksStepProps) => {
  return (
    <div className="relative flex gap-6">
      {/* Step indicator with connecting line */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
            {step}
          </div>
        </div>
        
        {/* Connecting line */}
        {!isLast && (
          <div className="w-0.5 h-full min-h-20 bg-linear-to-b from-primary to-transparent mt-4" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksStep;
