import React from "react";
import Header from "./components/Header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
