import { Progress } from "@/components/ui/progress"
import { NewsCard } from "./NewsCard"
import { Bar } from "./Bar"

export function RecentInfluential() {
  const sentimentBreakdown = [
    { percentage: 35, color: "bg-sidebar-accent-foreground", sentiment: "Positive" },  // Dark blue
    { percentage: 25, color: "bg-muted-foreground", sentiment: "Bearish" },  // Medium blue
    { percentage: 25, color: "bg-ring", sentiment: "Cautious" },  // Light blue
    { percentage: 15, color: "bg-muted", sentiment: "Negative" },  // Very light blue
  ];

  return (
    <div className="w-full rounded-lg p-6 shadow-md">
        <div className="pb-8">
            <h2 className="text-xl font-bold mb-6">Sentiment Score Gauge</h2>
            <div className="flex justify-center items-center gap-4 pb-3">
                <div className="flex pr-3">
                    <div className="text-sm">Positive</div>
                    <img src="/upArrow.svg" alt="Positive" className="w-4 h-4 mt-0.5" />
                </div>
        
                <Progress value={60} className="" />
                <div className="text-sm">65%</div>
            </div>
            <div className="flex justify-center items-center gap-4 pt-3">
            <div className="flex pr-3">
                    <div className="text-sm">Positive</div>
                    <img src="/downArrow.svg" alt="Positive" className="w-4 h-4 mt-0.5" />
                </div>
                <Progress value={40} className="" />
                <div className="text-sm">35%</div>
            </div>
        </div>
       
        <div className="pb-8">
            <h2 className="text-xl font-bold mb-4">Sentiments Breakdown</h2>
            <Bar segments={sentimentBreakdown} height="h-8" />
        </div>
        

        <h2 className="text-xl font-bold mb-6">Recent Influential</h2>
        <div className="space-y-4 overflow-y-scroll max-h-[340px]">
            <NewsCard
            id={1}
            username="@nextjs"
            content="The React Framework - created and maintained by @vercel"
            date="2024-04-05"
            avatarUrl=""
            />
            <NewsCard
            id={2}
            username="@vercel"
            content="Develop. Preview. Ship."
            date="2024-04-21"
            avatarUrl=""
            />
            <NewsCard
            id={3}
            username="@vercel"
            content="Develop. Preview. Ship."
            date="2024-05-07"
            avatarUrl=""
            />
            <NewsCard
            id={4}
            username="@vercel"
            content="Develop. Preview. Ship."
            date="2024-05-15"
            avatarUrl=""
            />
            <NewsCard
            id={5}
            username="@vercel"
            content="Develop. Preview. Ship."
            date="2024-06-24"
            avatarUrl=""
            />
        </div>
    </div>
  )
} 