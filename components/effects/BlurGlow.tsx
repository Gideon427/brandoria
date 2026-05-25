// components/effects/GradientOrb.tsx
interface GradientOrbProps {
  className?: string;
  color?: 'orange' | 'blue' | 'coral';
}

export default function GradientOrb({ className = '', color = 'orange' }: GradientOrbProps) {
  const colorClasses = {
    orange: 'from-primary/30 via-orange-200/20 to-transparent',
    blue: 'from-blue-400/20 via-cyan-200/10 to-transparent',
    coral: 'from-red-400/20 via-orange-300/10 to-transparent',
  };

  return <div className={`absolute rounded-full blur-3xl bg-gradient-radial ${colorClasses[color]} ${className}`} />;
}