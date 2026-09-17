import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-0 text-center px-4">
      <div className="relative w-64 h-64 overflow-hidden">
        <Image
          src="/kittu.png"
          alt="Meow 404"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <h1 className="font-caveat text-7xl font-bold tracking-wide">
          404
        </h1>
        <h2 className="text-2xl font-caveat opacity-90">
          Oops! This thread leads nowhere...
        </h2>
        <p className="text-sm opacity-70 max-w-sm">
          This Kitty searched high and low, but couldn&apos;t find the page you were looking for.
        </p>
      </div>

      <Link
        href="/"
        className="mt-5 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </section>
  );
}
