import { CalendarDays } from "lucide-react"
import Image from "next/image"

interface NewsCardProps {
  username: string
  content: string
  date: string
  avatarUrl: string
}

export function NewsCard({ username, content, date, avatarUrl }: NewsCardProps) {
  return (
    <div className="flex items-start space-x-4 rounded-lg shadow-sm bg-card p-4">
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={`${username}'s avatar`}
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm font-medium text-muted-foreground">
            {username.charAt(1).toUpperCase()}
          </span>
        </div>
      )}
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">{username}</p>
        </div>
        <p className="text-sm text-muted-foreground">{content}</p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span className="text-xs">{date}</span>
        </div>
      </div>
    </div>
  )
} 