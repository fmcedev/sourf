import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { TrendingUp, TrendingDown, Timer } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface BettingControlsProps {
  onPlaceBet?: (
    direction: "up" | "down",
    amount: number,
    duration: number,
  ) => void;
  minBet?: number;
  maxBet?: number;
  balance?: number;
}

const BettingControls = ({
  onPlaceBet = () => {},
  minBet = 10,
  maxBet = 1000,
  balance = 5000,
}: BettingControlsProps) => {
  const [amount, setAmount] = React.useState(100);
  const [duration, setDuration] = React.useState(60); // seconds

  const timeIntervals = [
    { value: "30", label: "30s" },
    { value: "60", label: "1m" },
    { value: "300", label: "5m" },
    { value: "900", label: "15m" },
  ];

  return (
    <Card className="w-full bg-slate-900 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Amount Controls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Bet Amount</h3>
          <div className="space-y-2">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min={minBet}
              max={maxBet}
              className="bg-slate-800 border-slate-700 text-white"
            />
            <Slider
              value={[amount]}
              onValueChange={(value) => setAmount(value[0])}
              min={minBet}
              max={maxBet}
              step={10}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-slate-400">
              <span>Min: ${minBet}</span>
              <span>Max: ${maxBet}</span>
            </div>
          </div>
        </div>

        {/* Time Interval Controls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Timer className="h-5 w-5" />
            Time Interval
          </h3>
          <Select
            value={duration.toString()}
            onValueChange={(value) => setDuration(Number(value))}
          >
            <SelectTrigger className="w-full bg-slate-800 border-slate-700 text-white">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              {timeIntervals.map((interval) => (
                <SelectItem
                  key={interval.value}
                  value={interval.value}
                  className="text-white hover:bg-slate-700"
                >
                  {interval.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Betting Buttons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Place Bet</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="h-20 bg-green-500/10 border-green-500/20 hover:bg-green-500/20 hover:border-green-500"
              onClick={() => onPlaceBet("up", amount, duration)}
            >
              <div className="flex flex-col items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <span className="text-green-500 font-semibold">Up</span>
              </div>
            </Button>
            <Button
              variant="outline"
              className="h-20 bg-red-500/10 border-red-500/20 hover:bg-red-500/20 hover:border-red-500"
              onClick={() => onPlaceBet("down", amount, duration)}
            >
              <div className="flex flex-col items-center gap-2">
                <TrendingDown className="h-6 w-6 text-red-500" />
                <span className="text-red-500 font-semibold">Down</span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Balance Display */}
      <div className="mt-6 pt-6 border-t border-slate-700">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Available Balance:</span>
          <span className="text-xl font-bold text-white">
            ${balance.toLocaleString()}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default BettingControls;
