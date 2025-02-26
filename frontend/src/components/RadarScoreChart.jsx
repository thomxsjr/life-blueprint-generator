"use client";

// import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { sector: "Career", score: 68 },
  { sector: "Health", score: 52 },
  { sector: "Finance", score: 85 },
];

const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--chart-1))",
  },
};

export default function RadarScoreChart() {
  return (
    <Card className="w-full h-full border-none shadow-none flex">
      <CardHeader className="flex-1">
        <CardTitle>Score Distribution</CardTitle>
        <CardDescription>
          Showing Latest Calculated Scores
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 flex-2 justify-center items-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto"
        >
          <RadarChart data={chartData}>
            <ChartTooltip className="bg-white border-gray-300" cursor={false} content={<ChartTooltipContent />} />
            <PolarGrid stroke="gray" strokeWidth={0.70} />
            <PolarAngleAxis dataKey="sector" tick={{ fill: "black", fontSize: 14, fontWeight: "semibold" }} />
            <Radar
              dataKey="score"
              fill="var(--color-score)"
              fillOpacity={0.6}
              dot={{
                r: 3,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter> */}
    </Card>
  );
}
