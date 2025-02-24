import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import ActiveBets from "./ActiveBets";
import BetHistory from "./BetHistory";
import Leaderboard from "./Leaderboard";

interface GameDashboardProps {
  activeBets?: any[];
  betHistory?: any[];
  leaderboardEntries?: any[];
  defaultTab?: string;
}

const GameDashboard = ({
  activeBets,
  betHistory,
  leaderboardEntries,
  defaultTab = "active",
}: GameDashboardProps) => {
  return (
    <Card className="w-full bg-slate-900 p-4">
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800">
          <TabsTrigger
            value="active"
            className="data-[state=active]:bg-slate-700"
          >
            Active Bets
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="data-[state=active]:bg-slate-700"
          >
            History
          </TabsTrigger>
          <TabsTrigger
            value="leaderboard"
            className="data-[state=active]:bg-slate-700"
          >
            Leaderboard
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-4">
          <ActiveBets bets={activeBets} />
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <BetHistory bets={betHistory} />
        </TabsContent>

        <TabsContent value="leaderboard" className="mt-4">
          <Leaderboard entries={leaderboardEntries} />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default GameDashboard;
