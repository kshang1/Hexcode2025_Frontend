import { StockGraph } from "@/components/StockGraph"
import { RecentInfluential } from "@/components/RecentInfluential"
import { SearchBar } from "@/components/SearchBar"
import { StockChips } from "@/components/StockChips"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content - Takes up 8 columns on large screens */}
          <div className="lg:col-span-8 p-8">
            <div className="space-y-6">
              <SearchBar />
              <StockChips />
              
              {/* Stock Graph Section */}
              <div className="mt-8">
                <div className="stockgraph">
                  <StockGraph />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Influential Section - Takes up 4 columns on large screens */}
          <div className="lg:col-span-4 p-8 lg:pl-0">
            <RecentInfluential />
          </div>
        </div>
      </div>
    </div>
  )
}
