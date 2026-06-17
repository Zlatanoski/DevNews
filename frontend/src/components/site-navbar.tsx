import Link from "next/link"
import { Zap } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Daily", href: "/daily" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "#" },
]

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-normal"
        >
          <Zap className="size-4 text-emerald-700 dark:text-emerald-400" />
          Developer&apos;s Digest
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium underline-offset-4 hover:text-foreground hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
