"use client";
import React, { useState } from "react";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import { useDashboard } from "../context/DashboardContext";

export default function Page() {
  const { setCreatePop } = useDashboard();
  return (
    <div className="w-full max-h-screen flex flex-col items-center  justify-start">
      {/* Header */}
      <div className="w-full fixed top-0 left-0 p-5 flex items-center justify-center bg-white  z-50">
        <h1 className="text-xl font-semibold">Profile</h1>
      </div>

      {/* User Info */}
      <div className="max-w-[600px]  mt-20 scroll-hide p-2 my-10 border border-gray-200 rounded-xl">
        <UserInfo />
        <div
          onClick={() => setCreatePop(true)}
          className="pb-5 border-gray-200 flex items-center gap-2 text-gray-400 cursor-pointer  border-b w-full text-left my-2"
        >
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379005.jpg&fm=jpg"
            alt=""
          />
          What&apos;s new
        </div>
        <div>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
