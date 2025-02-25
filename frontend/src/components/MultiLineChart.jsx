"use client"

// import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", career: 186, health: 80, finance: 20 },
  { month: "February", career: 305, health: 200, finance: 230 },
  { month: "March", career: 237, health: 120, finance: 50 },
  { month: "April", career: 73, health: 190, finance: 120 },
  { month: "May", career: 209, health: 130, finance: 290 },
  { month: "June", career: 214, health: 140, finance: 200 },
];

const chartConfig = {
  career: {
    label: "Career",
    color: "hsl(var(--chart-1))",
  },
  health: {
    label: "Health",
    color: "hsl(var(--chart-2))",
  },
  finance: {
    label: "Finance",
    color: "hsl(var(--chart-3))",
  },
};

export default function MultiLineChart() {
  return (
    <Card className="bg-white border-gray-300 rounded-4xl my-6">
      <CardHeader>
        <CardTitle>Score History</CardTitle>
        <CardDescription>January 2024 - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="career"
              type="monotone"
              stroke="var(--color-career)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-career)",
              }}
            />
            <Line
              dataKey="health"
              type="monotone"
              stroke="var(--color-health)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-health)",
              }}
            />
            <Line
              dataKey="finance"
              type="monotone"
              stroke="var(--color-finance)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-finance)",
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
