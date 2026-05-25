// components/ui/GlowCard.tsx
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}