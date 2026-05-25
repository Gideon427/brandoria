// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-primary/10 py-10 mt-10">
      <div className="container-custom text-center">
        <p className="text-dark/40 text-sm">© 2023 BRANDORIA — Perception engineering. Not decoration.</p>
        <div className="flex justify-center gap-6 mt-4 text-dark/30 text-xs">
          <span>Privacy</span>
          <span>Terms</span>
          <span>About</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
}