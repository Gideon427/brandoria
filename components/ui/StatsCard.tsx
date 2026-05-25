// components/ui/StatsCard.tsx
interface StatsCardProps {
  value: string;
  label: string;
}

export default function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="glass-card p-5 text-center floating-motion">
      <div className="stat-number text-3xl md:text-4xl">{value}</div>
      <p className="text-sm text-dark/70 mt-1">{label}</p>
    </div>
  );
}