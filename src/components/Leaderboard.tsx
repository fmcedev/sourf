import React from "react";
import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Trophy, TrendingUp, Medal } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  username: string;
  avatarUrl: string;
  winnings: number;
  winStreak: number;
  winRate: number;
}

interface LeaderboardProps {
  entries?: LeaderboardEntry[];
}

const defaultEntries: LeaderboardEntry[] = [
  {
    rank: 1,
    username: "CryptoKing",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    winnings: 15000,
    winStreak: 7,
    winRate: 68.5,
  },
  {
    rank: 2,
    username: "BullRunner",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    winnings: 12500,
    winStreak: 5,
    winRate: 62.3,
  },
  {
    rank: 3,
    username: "CoinMaster",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    winnings: 10000,
    winStreak: 4,
    winRate: 58.9,
  },
  {
    rank: 4,
    username: "TradeWizard",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    winnings: 8500,
    winStreak: 3,
    winRate: 55.2,
  },
  {
    rank: 5,
    username: "BitcoinBaron",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
    winnings: 7000,
    winStreak: 2,
    winRate: 51.8,
  },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-6 w-6 text-yellow-500" />;
    case 2:
      return <Trophy className="h-6 w-6 text-gray-400" />;
    case 3:
      return <Trophy className="h-6 w-6 text-amber-600" />;
    default:
      return <Medal className="h-6 w-6 text-slate-500" />;
  }
};

const Leaderboard = ({ entries = defaultEntries }: LeaderboardProps) => {
  return (
    <Card className="w-full bg-slate-900 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <TrendingUp className="h-6 w-6" />
          Leaderboard
        </h2>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className="flex items-center justify-between p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-8">
                {getRankIcon(entry.rank)}
              </div>
              <Avatar className="h-10 w-10">
                <img src={entry.avatarUrl} alt={entry.username} />
              </Avatar>
              <div>
                <p className="font-semibold text-white">{entry.username}</p>
                <p className="text-sm text-slate-400">
                  Win Rate: {entry.winRate}%
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-slate-700 text-white">
                {entry.winStreak}🔥
              </Badge>
              <span className="font-bold text-green-400">
                ${entry.winnings.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Leaderboard;
