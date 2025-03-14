import { Plus } from "lucide-react"

export function StockChips() {
  const stocks = ["Apple", "Tesla", "Amazon", "NVIDIA Corporation"]
  
  return (
    <div className="flex flex-wrap gap-3 items-center w-full">
      {stocks.map((stock) => (
        <button
          key={stock}
          className="px-4 py-1.5 rounded-full bg-accent/20 hover:bg-accent/80 border-2 border-accent transition-all text-sm "
        >
          {stock}
        </button>
      ))}
      <button
        className="px-4 py-1.5 rounded-full bg-accent/20 hover:bg-accent/80 border-2 border-accent transition-all text-sm flex items-center gap-2 border-dashed"
      >
        <Plus className="h-4 w-4" />
        Add watch stocks here
      </button>
    </div>
  )
} 