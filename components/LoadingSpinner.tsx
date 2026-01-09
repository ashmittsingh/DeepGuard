interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

const LoadingSpinner = ({ size = "md", text }: LoadingSpinnerProps) => {
  const sizes = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizes[size]} rounded-full border-muted`} />
        
        {/* Spinning ring */}
        <div
          className={`absolute inset-0 ${sizes[size]} rounded-full border-primary border-t-transparent animate-spin`}
        />
        
        {/* Glow effect */}
        <div
          className={`absolute inset-0 ${sizes[size]} rounded-full border-primary/30 blur-md animate-pulse`}
        />
      </div>
      
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
