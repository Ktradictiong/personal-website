"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Aperture, Camera, MessageSquareText, Send, X } from "lucide-react";
import type { PortfolioItem } from "@/data/site";
import SketchButton from "./SketchButton";

type PortfolioModalProps = {
  item: PortfolioItem | null;
  onClose: () => void;
};

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  const [draft, setDraft] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    if (item) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [item, onClose]);

  useEffect(() => {
    setDraft("");
    setNotes([]);
  }, [item?.id]);

  function addNote() {
    const value = draft.trim();
    if (!value) return;
    setNotes((current) => [value, ...current].slice(0, 3));
    setDraft("");
  }

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/45 px-4 py-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${item.title} EXIF 信息`}
            className="sketch-card max-h-[88vh] w-full max-w-3xl overflow-y-auto bg-white p-5 sm:p-7"
            initial={{ y: 24, rotate: -1.5, scale: 0.96 }}
            animate={{ y: 0, rotate: -0.5, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border-2 border-ink bg-white p-2 shadow-sketch-sm transition-transform hover:-translate-y-1 active:translate-x-1 active:translate-y-1"
              aria-label="关闭弹窗"
            >
              <X size={18} />
            </button>

            <div className="pr-12">
              <span className="tag-sketch mb-4 bg-marker">
                <Camera size={14} />
                EXIF FIELD CARD
              </span>
              <h3 className="text-2xl font-black leading-tight sm:text-4xl">{item.title}</h3>
              <p className="mt-3 text-sm font-bold text-slate-500">
                {item.place} / {item.date} / {item.category}
              </p>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div
                className="photo-grain min-h-64 overflow-hidden border-[3px] border-ink"
                style={{
                  backgroundImage: item.visual,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />

              <div className="space-y-3">
                {[
                  ["光圈", item.exif.aperture],
                  ["快门", item.exif.shutter],
                  ["ISO", item.exif.iso],
                  ["镜头", item.exif.lens],
                  ["色彩倾向", item.exif.tone],
                  ["拍摄备注", item.exif.note]
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-4 border-b-2 border-dashed border-ink/15 pb-2 text-sm"
                  >
                    <span className="inline-flex items-center gap-2 font-hand font-black uppercase text-slate-500">
                      <Aperture size={14} />
                      {label}
                    </span>
                    <span className="max-w-[68%] text-right font-black leading-6">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 rounded-xl border-2 border-dashed border-ink/40 bg-yellow-50/70 p-4">
              <label className="mb-3 flex items-center gap-2 text-sm font-black" htmlFor="visitor-note">
                <MessageSquareText size={16} />
                访客草稿擦板
              </label>
              <textarea
                id="visitor-note"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="写一点你在这张照片里看到的气味、温度或风声..."
                className="min-h-28 w-full resize-none rounded-xl border-2 border-ink bg-white p-3 text-sm font-bold outline-none focus:ring-4 focus:ring-marker/50"
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <p className="font-scribble text-xs uppercase tracking-wider text-slate-500">
                  Local only / 不会保存到后端
                </p>
                <SketchButton onClick={addNote} className="bg-ink text-marker">
                  <Send size={15} />
                  贴上便签
                </SketchButton>
              </div>

              {notes.length > 0 && (
                <div className="mt-4 grid gap-2">
                  {notes.map((note) => (
                    <p key={note} className="rotate-[-0.5deg] border-2 border-ink bg-white px-3 py-2 text-sm font-bold shadow-sketch-sm">
                      {note}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
