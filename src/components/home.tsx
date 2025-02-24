import React from "react";
import GameHeader from "./GameHeader";
import PriceChart from "./PriceChart";
import BettingControls from "./BettingControls";
import GameDashboard from "./GameDashboard";

interface HomeProps {
  username?: string;
  balance?: number;
  symbol?: string;
  interval?: string;
}

const Home = ({
  username = "CryptoTrader",
  balance = 10000,
  symbol = "BTCUSDT",
  interval = "1m",
}: HomeProps) => {
  const handlePlaceBet = (
    direction: "up" | "down",
    amount: number,
    duration: number,
  ) => {
    console.log(`Placing ${direction} bet of $${amount} for ${duration}s`);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <GameHeader username={username} balance={balance} />

      <main className="container mx-auto px-4 pt-20 pb-8">
        <div className="space-y-6">
          {/* Price Chart Section */}
          <section>
            <PriceChart symbol={symbol} interval={interval} height={500} />
          </section>

          {/* Betting Controls Section */}
          <section>
            <BettingControls
              onPlaceBet={handlePlaceBet}
              minBet={10}
              maxBet={1000}
              balance={balance}
            />
          </section>

          {/* Dashboard Section */}
          <section>
            <GameDashboard
              defaultTab="active"
              activeBets={[
                {
                  id: "1",
                  amount: 100,
                  direction: "up",
                  timeRemaining: 45,
                  entryPrice: 50000.0,
                  currentPrice: 50100.0,
                },
              ]}
              betHistory={[
                {
                  id: "1",
                  timestamp: "2024-03-20 14:30:00",
                  direction: "up",
                  amount: 100,
                  outcome: "win",
                  profit: 95,
                },
              ]}
              leaderboardEntries={[
                {
                  rank: 1,
                  username: "CryptoKing",
                  avatarUrl:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
                  winnings: 15000,
                  winStreak: 7,
                  winRate: 68.5,
                },
              ]}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
