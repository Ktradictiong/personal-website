"use client";

import { useState } from "react";
import { BadgeCheck, Camera, Folder, Sparkles } from "lucide-react";
import { resumeTabs } from "@/data/site";
import { cn } from "./utils";

const icons = {
  profile: Folder,
  gear: Camera,
  skill: Sparkles
};

export default function ResumeTabs() {
  const [activeId, setActiveId] = useState(resumeTabs[0].id);
  const active = resumeTabs.find((tab) => tab.id === activeId) ?? resumeTabs[0];
  const Icon = icons[active.id];

  return (
    <div className="sketch-card overflow-hidden bg-white">
      <div className="grid grid-cols-1 border-b-2 border-ink sm:grid-cols-3">
        {resumeTabs.map((tab) => {
          const TabIcon = icons[tab.id];
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "flex items-center justify-center gap-2 border-b-2 border-ink px-3 py-3 text-sm font-black transition-colors last:border-b-0 sm:border-b-0 sm:border-r-2 sm:last:border-r-0",
                activeId === tab.id ? "bg-marker" : "bg-white hover:bg-yellow-50"
              )}
            >
              <TabIcon size={16} strokeWidth={2.5} />
              {tab.label} / <span className="font-hand">{tab.english}</span>
            </button>
          );
        })}
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-coral text-coral">
            <Icon size={17} />
          </span>
          <h3 className="text-lg font-black sm:text-xl">{active.label}独立视觉服务</h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {active.items.map((item) => (
            <div key={item} className="flex gap-3 text-sm font-bold leading-6">
              <BadgeCheck className="mt-1 shrink-0 text-coral" size={16} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t-2 border-dashed border-ink/25 pt-4 text-xs font-medium leading-6 text-slate-500">
          * {active.footnote}
        </div>
      </div>
    </div>
  );
}
