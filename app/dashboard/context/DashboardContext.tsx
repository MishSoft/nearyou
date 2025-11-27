"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

interface DashboardContextType {
  createPop: boolean;
  setCreatePop: React.Dispatch<React.SetStateAction<boolean>>;
  emojis: EmojisType[];
}

interface EmojisType {
  id: number;
  character: string;
  codePoint: string;
  subGroup: string;
}

export const DashboardContext = createContext<DashboardContextType | null>(
  null
);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [createPop, setCreatePop] = useState(false);
  const [emojis, setEmojis] = useState<EmojisType[]>([]);

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const res = await fetch("/auth/api/emojis");
        const data = await res.json();
        setEmojis(data);
        console.log(emojis);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmojis();
  }, []);

  return (
    <DashboardContext.Provider value={{ createPop, setCreatePop, emojis }}>
      {children}
    </DashboardContext.Provider>
  );
}

// Custom hook
export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used inside DashboardProvider");
  }
  return context;
}
