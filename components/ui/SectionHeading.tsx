// components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, center = false, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center max-w-2xl mx-auto' : ''} ${className}`}>
      <h2 className="heading-lg">{title}</h2>
      {subtitle && <p className="text-dark/60 mt-3 text-lg">{subtitle}</p>}
    </div>
  );
}