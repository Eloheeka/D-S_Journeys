import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="pt-20 min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl mb-4 text-[var(--ea-terracotta)]">404</h1>
        <h2 className="text-3xl md:text-4xl mb-6">Page Not Found</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off the beaten path.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
