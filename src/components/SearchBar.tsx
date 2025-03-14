import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="relative w-full shadow-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search for stocks..."
          className="w-full rounded-lg bg-background px-10 py-2 text-sm outline-none focus:outline-none"
        />
      </div>
    </div>
  )
} 