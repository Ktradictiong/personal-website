"use client";

import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import { navItems } from "@/data/site";
import { cn } from "./utils";

export default function Header() {
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.12, 0.24, 0.48]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 rounded-[20px] bg-paper/75 px-2 py-1.5 backdrop-blur-sm sm:px-3">
        <a href="#profile" className="group flex shrink-0 items-center gap-3" aria-label="回到 Locan 首页">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-white shadow-sketch-sm transition-transform group-hover:-rotate-6">
            <Camera size={17} strokeWidth={2.6} />
          </span>
          <span className="inline-flex -rotate-3 items-center rounded-[50%] border-2 border-ink bg-white px-4 py-1 font-hand text-xl font-black italic leading-none shadow-sketch-sm">
            Locan
          </span>
        </a>

        <nav className="order-3 flex w-full flex-wrap justify-center gap-2 text-sm font-black sm:order-none sm:w-auto sm:gap-4">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-[8px] px-3 py-2 transition-transform hover:-translate-y-0.5",
                  active === id &&
                    "border-2 border-ink bg-marker shadow-sketch-sm -rotate-2"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <span className="ml-auto inline-flex shrink-0 items-center gap-2 border-2 border-ink bg-white px-3 py-1.5 font-scribble text-[10px] font-black uppercase tracking-wider shadow-sketch-sm sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          LOCAN ONLINE / 手作式档案
        </span>
      </div>
    </header>
  );
}
