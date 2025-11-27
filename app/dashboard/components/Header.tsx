"use client";
import { House, Heart, Search, Plus, User, Pin, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDashboard } from "../context/DashboardContext";

const links = [
  { href: "/dashboard", icon: House },
  { href: "/dashboard/search", icon: Search },
  { href: "", dataType: "create", icon: Plus }, // create -- handled as button
  { href: "/dashboard/notifications", icon: Heart },
  { href: "/dashboard/profile", icon: User },
];

export default function Header() {
  const pathname = usePathname();
  const { setCreatePop } = useDashboard();

  const handleCreate = (e?: React.MouseEvent) => {
    // defend against bubbling / accidental navigation
    e?.preventDefault();
    e?.stopPropagation();
    setCreatePop(true);
  };

  return (
    <header className="p-5 w-20 z-9999 h-screen flex flex-col justify-between fixed border-r bg-white">
      <h1 className="border-2 text-xl border-gray-400 text-center rounded-full p-2">
        NY
      </h1>

      <div className="flex flex-col h-full justify-center items-center">
        {links.map((link, idx) => {
          const Icon = link.icon;
          if (link.dataType === "create") {
            return (
              <button
                key={`create-${idx}`}
                type="button"
                onClick={handleCreate}
                aria-label="Create"
                className="my-5"
              >
                <Icon size={28} className="text-gray-500 hover:text-blue-500" />
              </button>
            );
          }

          return (
            <Link key={link.href ?? idx} href={link.href!} className="my-5">
              <Icon
                size={28}
                className={`cursor-pointer hover:text-blue-500 ${
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
