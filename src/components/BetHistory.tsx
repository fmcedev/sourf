import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

interface BetHistoryItem {
  id: string;
  timestamp: string;
  direction: "up" | "down";
  amount: number;
  outcome: "win" | "loss";
  profit: number;
}

interface BetHistoryProps {
  bets?: BetHistoryItem[];
}

const defaultBets: BetHistoryItem[] = [
  {
    id: "1",
    timestamp: "2024-03-20 14:30:00",
    direction: "up",
    amount: 100,
    outcome: "win",
    profit: 95,
  },
  {
    id: "2",
    timestamp: "2024-03-20 14:25:00",
    direction: "down",
    amount: 50,
    outcome: "loss",
    profit: -50,
  },
  {
    id: "3",
    timestamp: "2024-03-20 14:20:00",
    direction: "up",
    amount: 75,
    outcome: "win",
    profit: 71.25,
  },
];

const BetHistory = ({ bets = defaultBets }: BetHistoryProps) => {
  return (
    <Card className="w-full bg-background border-border">
      <CardHeader>
        <CardTitle>Bet History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Direction</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Outcome</TableHead>
              <TableHead>Profit/Loss</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bets.map((bet) => (
              <TableRow key={bet.id}>
                <TableCell>{bet.timestamp}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {bet.direction === "up" ? (
                      <ArrowUpCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <ArrowDownCircle className="h-5 w-5 text-red-500" />
                    )}
                    {bet.direction}
                  </div>
                </TableCell>
                <TableCell>${bet.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={bet.outcome === "win" ? "default" : "destructive"}
                  >
                    {bet.outcome.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell
                  className={
                    bet.profit >= 0 ? "text-green-500" : "text-red-500"
                  }
                >
                  {bet.profit >= 0 ? "+" : ""}${bet.profit.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BetHistory;
