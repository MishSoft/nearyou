import React from "react";
import Post from "./components/Post";

export default function page() {
  return (
    <div className="w-full h-screen flex flex-col items-center  justify-start">
     <div className="w-full fixed p-5 flex items-center justify-center bg-white ">
        <h1>Home</h1>
     </div>
      <div className="max-w-[600px] mt-20 scroll-hide p-2 my-10 border border-gray-200 rounded-xl">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
