// components/effects/GradientOrb.tsx - enhanced version
interface GradientOrbProps {
  className?: string;
  color?: 'orange' | 'blue' | 'coral';
}

export default function GradientOrb({ className = '', color = 'orange' }: GradientOrbProps) {
  const colorClasses = {
    orange: 'from-primary/40 via-orange-300/20 to-transparent',
    blue: 'from-blue-500/25 via-cyan-300/15 to-transparent',
    coral: 'from-red-500/25 via-orange-400/15 to-transparent',
  };

  return (
    <div className={`absolute rounded-full blur-3xl bg-gradient-radial ${colorClasses[color]} ${className}`}>
      <div className="absolute inset-0 rounded-full blur-3xl bg-white/10 animate-pulse-slow" />
    </div>
  );
}