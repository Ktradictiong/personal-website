"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioFilters, portfolioItems, type PortfolioItem } from "@/data/site";
import SectionTitle from "./SectionTitle";
import SketchButton from "./SketchButton";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";

export default function PortfolioSection() {
  const [filter, setFilter] = useState<(typeof portfolioFilters)[number]>("全部作品");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const works = useMemo(() => {
    if (filter === "全部作品") return portfolioItems;
    return portfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="section-shell scroll-mt-28">
      <SectionTitle
        label="SELECTED WORKS"
        title="我的 作品集"
        subtitle="STREETS BETWEEN VIA CAMERA AND CINEMATIC SENSES"
      />

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        {portfolioFilters.map((item) => (
          <SketchButton
            key={item}
            active={filter === item}
            className={filter === item ? "bg-ink text-marker" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </SketchButton>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {works.map((item) => (
            <PortfolioCard key={item.id} item={item} onOpen={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>

      <PortfolioModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
