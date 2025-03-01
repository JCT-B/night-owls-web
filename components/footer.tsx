import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Night Owls. All rights reserved.
            </p>
          </div>
          <nav className="flex space-x-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary">
              Projects
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

