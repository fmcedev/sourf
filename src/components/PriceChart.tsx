import React from "react";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface PriceChartProps {
  symbol?: string;
  interval?: string;
  height?: number;
}

const PriceChart = ({
  symbol = "BTCUSDT",
  interval = "1m",
  height = 500,
}: PriceChartProps) => {
  return (
    <Card className="w-full bg-background p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">{symbol}</h2>
          <span className="text-sm text-muted-foreground">{interval}</span>
        </div>
      </div>

      {/* Placeholder for TradingView chart */}
      <div
        className="w-full rounded-lg overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <Skeleton className="w-full h-full" />
      </div>
    </Card>
  );
};

export default PriceChart;
