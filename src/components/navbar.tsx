import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <section className="flex flex-row w-full px-4 py-3">
      <div className="flex flex-1 items-center justify-start">
        <h1 className="font-heading text-2xl">
          losthread
        </h1>
      </div>

      <div className="flex items-center justify-end">
        <ThemeToggle />
      </div>
    </section>
  )
}