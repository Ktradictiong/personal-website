"use client";

import { Aperture, CalendarDays, Eye, Heart, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { PortfolioItem } from "@/data/site";
import { cn } from "./utils";

type PortfolioCardProps = {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
};

export default function PortfolioCard({ item, onOpen }: PortfolioCardProps) {
  return (
    <motion.button
      type="button"
      layout
      whileHover={{ y: -7, rotate: 0 }}
      whileTap={{ y: 3, x: 3 }}
      onClick={() => onOpen(item)}
      className={cn(
        "sketch-card group w-full bg-white p-4 text-left transition-transform",
        item.tilt
      )}
    >
      <div
        className="photo-grain relative aspect-[16/9] overflow-hidden border-2 border-ink"
        style={{
          backgroundImage: item.visual,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <span className="absolute left-3 top-3 border-2 border-ink bg-white px-2 py-1 text-xs font-black">
          {item.category}
        </span>
      </div>

      <h3 className="mt-5 text-[clamp(1.15rem,2vw,1.55rem)] font-black leading-tight">
        {item.title}
      </h3>

      <div className="mt-4 flex flex-wrap items-center gap-4 border-b-2 border-dashed border-ink/15 pb-4 text-xs font-bold text-slate-500">
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} />
          {item.place}
        </span>
        <span className="inline-flex items-center gap-1">
          <CalendarDays size={14} />
          {item.date}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-slate-500">
        <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 font-scribble">
          <Aperture size={13} />
          {item.camera}
        </span>
        <span className="inline-flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <Eye size={14} />
            {item.views}
          </span>
          <span className="inline-flex items-center gap-1 text-ink">
            <Heart size={14} />
            点赞 {item.likes}
          </span>
        </span>
      </div>
    </motion.button>
  );
}
