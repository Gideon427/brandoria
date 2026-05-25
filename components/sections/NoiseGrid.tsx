// components/sections/NoiseGrid.tsx
export default function NoiseGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="noise" patternUnits="userSpaceOnUse" width="200" height="200">
            <rect width="200" height="200" fill="#1E1B1A" />
            {Array.from({ length: 200 }).map((_, i) => (
              <rect
                key={i}
                x={Math.random() * 200}
                y={Math.random() * 200}
                width={Math.random() * 2}
                height={Math.random() * 2}
                fill="white"
                opacity={Math.random() * 0.5}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#noise)" />
      </svg>
    </div>
  );
}