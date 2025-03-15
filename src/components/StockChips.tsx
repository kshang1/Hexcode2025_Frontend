"use client"
import { Plus } from "lucide-react"
import { useState } from "react";

export function StockChips() {
  const stocks = ["Apple", "Tesla", "Amazon", "NVIDIA Corporation"]
  const [selectedStock, setSelectedStock] = useState<string | null>(null);

  const handleStockClick = (stock: string) => {
    setSelectedStock(selectedStock === stock ? null : stock);
  };

  return (
    <div className="flex flex-wrap gap-3 items-center w-full">
      {stocks.map((stock) => (
        <button
          key={stock}
          onClick={() => handleStockClick(stock)}
          className={`cursor-pointer px-4 py-1.5 rounded-full border-2 border-accent transition-all text-sm ${
            selectedStock === stock ? 'bg-input/40' : 'bg-accent/5 hover:bg-accent/80'
          }`}
        >
          {stock}
        </button>
      ))}
      <button
        className="cursor-pointer px-4 py-1.5 rounded-full bg-accent/20 hover:bg-accent/80 border-2 border-accent transition-all text-sm flex items-center gap-2 border-dashed"
      >
        <Plus className="h-4 w-4" />
        Add watch stocks here
      </button>
    </div>
  )
} 