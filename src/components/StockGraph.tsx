import MainChart from "./MainChart";

export function StockGraph() {
  return (
    <div className="w-full shadow-md bg-accent/10 rounded-lg flex flex-col">
      <div className="stock-text-description p-4">
                    <h2 className="text-2xl font-bold">Apple Inc.</h2>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">209.68 USD</span>
                      <span className="text-red-500">-7.30 (3.36%) today</span>
                    </div>
        </div>
      <p className="text-muted-foreground p-5">
        <MainChart/>
      </p>
    </div>
  )
} 