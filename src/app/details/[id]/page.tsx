"use client";
import { StockGraph } from "@/components/StockGraph"
import { RecentInfluential } from "@/components/RecentInfluential"
import { SearchBar } from "@/components/SearchBar"
import { StockChips } from "@/components/StockChips"
import ColorPalette from "@/components/ColorPalette"
import TopGainer from "@/components/TopGainer"
import { FlipCard } from "@/components/FlipCard"
import { Divide } from "lucide-react"
import { PopularityGraph } from "@/components/PopularityGraph"
import { FloatingWidget } from "@/components/FloatingWidget";
import { use, useEffect, useState } from "react";
import { getStockCandles } from "../../alphavantage_actions";
import { useParams } from "next/navigation";
import { mockStockData } from "@/data/mockStocks";
import { getNews } from "../actions";
import { News } from "@/components/RecentInfluential";

export const topGainer = {
  ticker: "AAPL", // Stock ticker
  name: "Apple Inc.", // Company name
  currentPrice: "$180.25", // Current stock price
  priceChange: "+$8.50", // Absolute price change
  percentageChange: "+4.95%", // Percentage price change
  volume: "78.5M", // Trading volume
  sentiment: "🟢 75% Bullish", // Sentiment score
  sentimentSource: ["Twitter", "News", "Analyst Ratings"], // Sources of sentiment
  reason: "Apple announced record iPhone sales", // Key reason for the price movement
};

export default function Home() {
  const params = useParams();
  const stockId = Number(params.id);
  const stockData = mockStockData.find(stock => stock.id === stockId);

  // Fetch data from the API
  const [chartData, setChartData] = useState([]);

  const [news, setNews] = useState<News[]>([]);
 
   useEffect(() => {
     getStockCandles("IBM").then((data) => {
       console.log(data);
       setChartData(data);
     });
 
     getNews().then((data) => {
       console.log(data);
       setNews(data);
     });
   }, []);

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
              <div className="mt-8 h-[600px]">
                <FlipCard
                  front={<StockGraph companyName={stockData?.companyName} stockPrice={stockData?.stockPrice} priceChange={stockData?.priceChange} percentChange={stockData?.percentChange} chartData={stockData?.chartData} hasShuffle={true} />}
                  back={<PopularityGraph companyName={stockData?.companyName} popularityRate={stockData?.popularityRate} mentions={stockData?.mentions} serachVolume={stockData?.serachVolume} sentimentPercentage={stockData?.sentimentPercentage} />}
                />
              </div>
            </div>
          </div>

          {/* Recent Influential Section - Takes up 4 columns on large screens */}
          <div className="lg:col-span-4 p-8 lg:pl-0">
            <RecentInfluential news={news} positiveSentimentPercentage={stockData?.positiveSentimentPercentage} negativeSentimentPercentage={stockData?.negativeSentimentPercentage} />
          </div>

          <FloatingWidget />

          {/* Related Stocks Section */}
          <div className="lg:col-span-12 px-8">
            <h2 className="text-xl font-semibold mb-4 text-end">
              Scroll down to see related stocks ↓
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <TopGainer title="Similar Performance" data={topGainer} />
              </div>
              <div>
                <TopGainer title="Same Sector" data={topGainer} />
              </div>
              <div>
                <TopGainer title="Similar Market Cap" data={topGainer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
