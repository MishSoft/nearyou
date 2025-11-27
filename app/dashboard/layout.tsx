"use client";
import React from "react";
import Header from "./components/Header";
import { DashboardProvider, useDashboard } from "./context/DashboardContext";
import Create from "./components/Create";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardProvider>
      <Content>{children}</Content>
    </DashboardProvider>
  );
}

// ცალკე component, რომ Provider–ის შიგნით ვიყოთ
function Content({ children }: { children: React.ReactNode }) {
  const { createPop } = useDashboard(); // ✔ ახლა უკვე Provider–ის შიგნითა

  return (
    <div>
      <Header />
      {children}
      {createPop && <Create />}
    </div>
  );
}
