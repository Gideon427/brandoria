// components/ui/FloatingCard.tsx
import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FloatingCard({ children, delay = 0, className = '' }: FloatingCardProps) {
  return (
    <div className={`floating-motion ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}