"use client"

import { Search } from "lucide-react"
import { mockStockData } from "@/data/mockStocks"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Filter stocks based on search query
  const filteredStocks = mockStockData.filter(stock => 
    stock.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    `${stock.stockPrice}`.includes(searchQuery) ||
    `${stock.priceChange}`.includes(searchQuery)
  );

  // Handle click outside to close results
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleStockClick = (stockId: number) => {
    setShowResults(false);
    setSearchQuery("");
    router.push(`/details/${stockId}`);
  };

  return (
    <div className="relative w-full shadow-md rounded-md" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowResults(true);
          }}
          placeholder="Search for stocks..."
          className="w-full rounded-lg bg-background px-10 py-2 text-sm outline-none focus:outline-none"
        />
      </div>

      {/* Search Results */}
      {showResults && searchQuery && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background rounded-lg shadow-lg border border-accent/20 max-h-[300px] overflow-y-auto z-50">
          {filteredStocks.length > 0 ? (
            filteredStocks.map(stock => (
              <div
                key={stock.id}
                className="px-4 py-2 hover:bg-accent/70 cursor-pointer transition-colors"
                onClick={() => handleStockClick(stock.id)}
              
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{stock.companyName}</div>
                    <div className="text-sm text-muted-foreground">
                      ${stock.stockPrice.toFixed(2)}
                    </div>
                  </div>
                  <div className={`text-sm ${stock.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stock.priceChange >= 0 ? '+' : ''}{stock.priceChange.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-muted-foreground">
              No stocks found
            </div>
          )}
        </div>
      )}
    </div>
  )
} 