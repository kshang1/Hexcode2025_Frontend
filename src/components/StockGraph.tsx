"use client"

import MainChart from "./MainChart";

export function StockGraph({chartData,hasShuffle}: {chartData: any,hasShuffle: boolean}) {

  return (
    <div className="w-full shadow-md bg-accent/10 rounded-lg flex flex-col">

      <div className="flex justify-between">
        <div className="stock-text-description-left p-8">
          <h2 className="text-2xl font-bold">Apple Inc.</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">209.68 USD</span>
            <span className="text-gray-500">-7.30 (3.36%) today</span>
          </div>
        </div>

        {hasShuffle && <div className="flex pt-10 pr-5">
          <img src="/shuffle.svg" alt="shuffle" className="w-4 h-4 mr-2" />
          <div className="stock-text-description-right text-light text-gray-500 text-xs ">Switch to Popularity View</div>
        </div>}
      </div>
      
      <p className="text-muted-foreground p-5">
        {chartData ? <MainChart chartData={chartData} /> : <p>Loading chart data...</p>}
      </p>
    </div>
  )
} 