import { NewsCard } from "./NewsCard"

export function RecentInfluential() {
  return (
    <div className="w-full rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6">Sentiment Score Gauge</h2>
        <h2 className="text-2xl font-bold mb-6">Sentiments Breakdown </h2>
        <h2 className="text-2xl font-bold mb-6">Recent Influential</h2>
        <div className="space-y-4">
            <NewsCard
            username="@nextjs"
            content="The React Framework - created and maintained by @vercel"
            date="Joined December 2021"
            avatarUrl=""
            />
            <NewsCard
            username="@vercel"
            content="Develop. Preview. Ship."
            date="Joined November 2021"
            avatarUrl=""
            />
        </div>
    </div>
  )
} 