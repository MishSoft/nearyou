import React from "react";
import { Search } from "lucide-react";
import SearchUsers from "../components/SearchUsers";

export default function page() {
  return (
    <div className="w-full h-screen flex flex-col items-center  justify-start">
      <div className="w-full fixed z-99 p-5 flex items-center justify-center bg-white ">
        <h1>Search</h1>
      </div>
      <div className="max-w-[600px] w-full  mt-20 scroll-hide p-2 my-10 border border-gray-200 rounded-xl">
        <div className="border rounded-xl border-gray-300 px-3 py-2 flex items-center w-full">
          <Search size={20} className="absolute ml-3 text-gray-400" />
          <input
            type="text"
            className="pl-10 border-none outline-none w-full"
            placeholder="Search..."
          />
        </div>

        {/* Search Users */}
        <div className=" overflow-y-auto">
          <SearchUsers />
          <SearchUsers />
          <SearchUsers />
          <SearchUsers />
          <SearchUsers />
          <SearchUsers />
          <SearchUsers />
        </div>
      </div>
    </div>
  );
}
