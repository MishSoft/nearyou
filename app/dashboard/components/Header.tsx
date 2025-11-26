import React from "react";
import { House, Heart, Search, Plus, Group, Pin, Settings } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-5 z-999 w-20 justify-between flex border-r border-r-gray-300 items-center flex-col h-screen fixed bg-white ">
      <h1 className="border-2 text-xl border-gray-400 text-center rounded-full p-2">
        NY
      </h1>

      <div className="flex flex-col h-full justify-center">
        <Link
          href="/dashboard"
          className="hover:bg-gray-600 w-full p-3 mt-10 flex justify-center rounded-lg hover:text-white transition-all duration-300"
        >
          <House size={18} />
        </Link>

        <Link
          href="/dashboard"
          className="hover:bg-gray-600 w-full p-3 mt-10 flex justify-center rounded-lg hover:text-white transition-all duration-300"
        >
          <Search size={18} />
        </Link>

        <Link
          href="/dashboard"
          className="hover:bg-gray-600 w-full p-3 mt-10 flex justify-center rounded-lg hover:text-white transition-all duration-300"
        >
          <Plus />
        </Link>

        <Link
          href="/dashboard"
          className="hover:bg-gray-600 w-full p-3 mt-10 flex justify-center rounded-lg hover:text-white transition-all duration-300"
        >
          <Heart size={18} />
        </Link>

        <Link
          href="/dashboard"
          className="hover:bg-gray-600 w-full p-3 mt-10 flex justify-center rounded-lg hover:text-white transition-all duration-300"
        >
          <Group size={18} />
        </Link>
      </div>

      <div className="flex flex-col  justify-end h-full">
        <Link
          href="/dashboard"
          className="hover:bg-gray-600 w-full p-3 mt-10 flex justify-center rounded-lg hover:text-white transition-all duration-300"
        >
          <Pin size={18} />
        </Link>
        <Link
          href="/dashboard"
          className="hover:bg-gray-600 w-full p-3 mt-10 flex justify-center rounded-lg hover:text-white transition-all duration-300"
        >
          <Settings size={18} />
        </Link>
      </div>
    </header>
  );
}
