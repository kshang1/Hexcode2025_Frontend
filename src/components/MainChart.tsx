"use client";

import * as React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  XAxis,
  Label,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useChart } from "@/context/ChartContext";

type ChartDataPoint = {
  date: string;
  desktop: number;
  mobile: number;
};

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "#0369a1",
  },
  mobile: {
    label: "Mobile",
    color: "#475569",
  },
} satisfies ChartConfig;

export default async function MainChart({
  chartData,
}: {
  chartData: ChartDataPoint[];
}) {
  const [activeChart, setActiveChart] = React.useState<"desktop" | "mobile">(
    "desktop"
  );

  const { hoveredTimestamp } = useChart();

  console.log("Chart hoveredTimestamp:", hoveredTimestamp); // Debug log

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  );

  return (
    <Card className="">
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] min-h-[300px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={1}
              dot={false}
            />

            {hoveredTimestamp && (
              <>
                <ReferenceLine
                  x={hoveredTimestamp}
                  stroke="rgb(205, 205, 205)"
                  strokeWidth={1}
                />
                <ReferenceDot
                  x={hoveredTimestamp}
                  y={
                    chartData.find((d) => d.date === hoveredTimestamp)?.[
                      activeChart
                    ] || 0
                  }
                  r={4}
                  fill={`var(--color-${activeChart})`}
                  stroke={`var(--color-${activeChart})`}
                  strokeWidth={2}
                ></ReferenceDot>
              </>
            )}
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const CustomTooltip = ({ value, date }: { value: number; date: string }) => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-200">
      <div className="text-sm font-medium">
        {new Date(date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </div>
      <div className="text-lg font-bold">{value} views</div>
    </div>
  );
};
