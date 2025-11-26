"use client";
import { House, Heart, Search, Plus, Group, Pin, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", icon: House },
  { href: "/dashboard/search", icon: Search },
  { href: "/dashboard/create", icon: Plus },
  { href: "/dashboard/notifications", icon: Heart },
  { href: "/dashboard/friends", icon: Group },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="p-5 z-999 w-20 justify-between flex border-r border-r-gray-300 items-center flex-col h-screen fixed bg-white ">
      <h1 className="border-2 text-xl border-gray-400 text-center rounded-full p-2">
        NY
      </h1>

      <div className="flex flex-col h-full justify-center">
        {links.map((link) => {
          return (
            <Link key={link.href} href={link.href}>
              <link.icon
                size={28}
                className={`my-5 cursor-pointer hover:text-blue-500 ${
                  pathname === link.href ? "text-blue-500" : "text-gray-500"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-10">
        <Pin
          size={28}
          className="cursor-pointer text-gray-500 hover:text-blue-500"
        />
        <Settings
          size={28}
          className="cursor-pointer text-gray-500 hover:text-blue-500"
        />
      </div>
    </header>
  );
}
