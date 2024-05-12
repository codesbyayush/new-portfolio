"use client";

import Link from "next/link";
import ThemeChanger from "@/components/theme-changer";
import NamedLogo from "./icons/named-logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const curpage = usePathname();

  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto py-8 px-12 text-zinc-600 text-sm font-semibold dark:text-white dark:border-b-zinc-800 border-zinc-200 border-b ">
      <div className="bg-black text-white rounded-sm dark:ring-zinc-800 dark:ring-1 py-2.5 px-2 h-12 w-11">
        <Link href={"/"} className="aspect-square">
          <NamedLogo />
        </Link>
      </div>
      <div className="flex justify-center gap-6 ">
        <Link
          href={"/about"}
          className={`dark:hover:text-green-400 hover:text-black ${
            curpage === "/about" && "text-green-500"
          }`}
        >
          About
        </Link>
        <Link
          href={"/projects"}
          className={`dark:hover:text-green-400 hover:text-black ${
            curpage === "/projects" && "text-green-500"
          }`}
        >
          Projects
        </Link>
      </div>
      <div className="bg-transparent">
        <ThemeChanger />
      </div>
    </nav>
  );
}
