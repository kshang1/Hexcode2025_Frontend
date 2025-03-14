import Link from "next/link"

export function MainNav() {
  return (
    <div className="flex w-full justify-between items-center shadow-md">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <span className="inline-block font-extrabold p-4">HEXCODE</span>
        </Link>
      </div>

      <div className="flex gap-13 p-4">
        <Link
          href="/"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Stocks
        </Link>
        <Link
          href="/projects"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Sentiment Analysis
        </Link>
        <Link
          href="/contact" 
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Timeline
        </Link>
        <Link
          href="/login" 
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Login
        </Link>
      </div>
    </div>
  )
} 