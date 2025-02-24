import React from "react";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { Bell, Menu, Wallet } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface GameHeaderProps {
  username?: string;
  balance?: number;
  avatarUrl?: string;
}

const GameHeader = ({
  username = "CryptoTrader",
  balance = 10000.0,
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
}: GameHeaderProps) => {
  return (
    <header className="w-full h-16 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between fixed top-0 z-50">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2">
        <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-white">Pump.fun</span>
      </div>

      {/* Center section - can be used for navigation or other elements */}
      <div className="flex-1 flex justify-center">
        {/* Add any center content here */}
      </div>

      {/* User Controls */}
      <div className="flex items-center gap-4">
        {/* Balance */}
        <Button variant="outline" className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          <span>${balance.toLocaleString()}</span>
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <img src={avatarUrl} alt={username} />
              </Avatar>
              <span className="hidden sm:inline">{username}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>History</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Menu */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default GameHeader;
