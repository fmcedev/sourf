import React from "react";
import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Timer, TrendingDown, TrendingUp } from "lucide-react";

interface Bet {
  id: string;
  amount: number;
  direction: "up" | "down";
  timeRemaining: number;
  entryPrice: number;
  currentPrice: number;
}

interface ActiveBetsProps {
  bets?: Bet[];
}

const defaultBets: Bet[] = [
  {
    id: "1",
    amount: 100,
    direction: "up",
    timeRemaining: 45,
    entryPrice: 50000.0,
    currentPrice: 50100.0,
  },
  {
    id: "2",
    amount: 250,
    direction: "down",
    timeRemaining: 120,
    entryPrice: 49800.0,
    currentPrice: 49750.0,
  },
  {
    id: "3",
    amount: 500,
    direction: "up",
    timeRemaining: 180,
    entryPrice: 49900.0,
    currentPrice: 49850.0,
  },
];

const ActiveBets = ({ bets = defaultBets }: ActiveBetsProps) => {
  return (
    <Card className="w-full bg-background p-4">
      <div className="mb-4 flex items-center gap-2">
        <Timer className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Active Bets</h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Amount</TableHead>
            <TableHead>Direction</TableHead>
            <TableHead>Time Remaining</TableHead>
            <TableHead>Entry Price</TableHead>
            <TableHead>Current Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bets.map((bet) => {
            const isProfitable =
              bet.direction === "up"
                ? bet.currentPrice > bet.entryPrice
                : bet.currentPrice < bet.entryPrice;

            return (
              <TableRow key={bet.id}>
                <TableCell>${bet.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {bet.direction === "up" ? (
                      <>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">Up</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className="h-4 w-4 text-red-500" />
                        <span className="text-red-500">Down</span>
                      </>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{bet.timeRemaining}s</Badge>
                </TableCell>
                <TableCell>${bet.entryPrice.toFixed(2)}</TableCell>
                <TableCell>${bet.currentPrice.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={isProfitable ? "success" : "destructive"}
                    className={`${isProfitable ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}
                  >
                    {isProfitable ? "Winning" : "Losing"}
                  </Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ActiveBets;
