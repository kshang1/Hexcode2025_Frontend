interface BarProps {
  segments: {
    percentage: number;
    color: string;
  }[];
  height?: string;
  className?: string;
}

export function Bar({ segments, height = "h-3", className = "" }: BarProps) {
  // Validate that percentages sum to 100
  const totalPercentage = segments.reduce((sum, segment) => sum + segment.percentage, 0);
  if (totalPercentage !== 100) {
    console.warn('Bar segments percentages should sum to 100');
  }

  return (
    <div className={`w-full ${height} flex overflow-hidden ${className}`}>
      {segments.map((segment, index) => (
        <div
          key={index}
          className={`${segment.color}`}
          style={{ width: `${segment.percentage}%` }}
        />
      ))}
    </div>
  );
} 