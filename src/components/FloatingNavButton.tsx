"use client";

import { ArrowUp } from "lucide-react";

const sectionIds = ["profile", "portfolio", "reviews", "aigc", "contact"];

export default function FloatingNavButton() {
  function jump() {
    const y = window.scrollY + window.innerHeight * 0.35;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const next = sections.find((section) => section.offsetTop > y);

    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <button
      type="button"
      aria-label="跳转到下一段或返回顶部"
      onClick={jump}
      className="fixed bottom-5 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-marker shadow-sketch-sm transition-transform hover:-translate-y-1 active:translate-x-1 active:translate-y-1 sm:bottom-7 sm:right-7"
    >
      <ArrowUp size={22} strokeWidth={3} />
    </button>
  );
}
