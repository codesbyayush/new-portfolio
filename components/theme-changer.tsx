"use client";

import { useTheme } from "next-themes";
import MoonIcon from "./icons/moon-icon";
import SunIcon from "./icons/sun-icon";
import { useEffect, useState } from "react";

function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const change = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <button
      onClick={change}
      className="bg-white rounded-[50%] p-1 dark:bg-zinc-700/75"
    >
      {mounted && theme === "dark" ? (
        <span className="text-green-500 ">
          <MoonIcon />
        </span>
      ) : (
        <span className="">
          <SunIcon />
        </span>
      )}
    </button>
  );
}

export default ThemeChanger;
