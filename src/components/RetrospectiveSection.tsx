"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  Lightbulb,
  PenLine
} from "lucide-react";
import { reviews, type Review } from "@/data/site";
import SectionTitle from "./SectionTitle";
import SketchButton from "./SketchButton";
import { cn } from "./utils";

function ReviewHeader({
  review,
  expanded,
  toggleable,
  onToggle
}: {
  review: Review;
  expanded: boolean;
  toggleable?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="grid gap-5 border-b-2 border-dashed border-ink/35 pb-6 sm:grid-cols-[1fr_auto] sm:items-center">
      <div>
        <p className="mb-2 flex items-center gap-2 text-sm font-black text-orange-600">
          <CalendarDays size={16} />
          {review.date} 出炉复盘
        </p>
        <h3 className="text-2xl font-black leading-tight sm:text-4xl">{review.title}</h3>
        <p className="mt-3 text-base font-bold leading-7 text-slate-600">{review.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {review.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-slate-300 bg-slate-50 px-2 py-1 text-xs font-bold text-slate-600">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <div
          className="photo-grain h-20 w-20 shrink-0 overflow-hidden border-2 border-ink shadow-sketch-sm"
          style={{ backgroundImage: review.thumb, backgroundSize: "cover" }}
        />
        {toggleable && (
          <button
            type="button"
            onClick={onToggle}
            aria-label={expanded ? "收起复盘" : "展开复盘"}
            className="rounded-md border-2 border-ink bg-white p-3 shadow-sketch-sm transition-transform hover:-translate-y-1 active:translate-x-1 active:translate-y-1"
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}

function FullReviewContent({ review }: { review: Review }) {
  return (
    <div className="mt-6 space-y-6">
      <div className="relative border-2 border-ink bg-white px-5 py-5 font-cnhand text-2xl leading-8 text-slate-700">
        “{review.quote}”
        <span className="absolute -right-2 -top-3 rotate-2 border border-rose-300 bg-rose-50 px-2 py-1 font-scribble text-[10px] font-black uppercase text-rose-500">
          CASE STUDY SUMMARY
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr]">
        <div className="sketch-card-soft bg-white p-5">
          <h4 className="mb-4 flex items-center gap-2 text-xl font-black">
            <ClipboardList className="text-blue-600" size={21} />
            前期思考与筹备 / Planning
          </h4>
          <ol className="space-y-3">
            {review.planning.map((item, index) => (
              <li key={item} className="flex gap-3 text-sm font-bold leading-7">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-marker font-hand text-xs">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="sketch-card-soft bg-white p-5">
          <h4 className="mb-4 flex items-center gap-2 text-lg font-black">
            <Lightbulb className="text-purple-500" size={19} />
            实操物理架构 / EXIF GEAR
          </h4>
          <div className="space-y-3">
            {review.gear.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-dashed border-slate-300 pb-2">
                <span className="font-scribble text-xs font-black uppercase text-slate-500">{label}</span>
                <span className="font-mono text-sm font-black">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 border-2 border-dashed border-orange-300 bg-orange-50 p-3 text-sm font-bold leading-6 text-orange-800">
            现场辅助道具：白泡沫板柔性反光板，便携 1/4 功率口袋灯。
          </div>
        </div>
      </div>

      <div className="rounded-lg border-2 border-rose-300 bg-rosepaper px-5 py-4">
        <h4 className="mb-2 flex items-center gap-2 text-base font-black">
          <AlertCircle className="text-red-500" size={19} />
          核心痛点与技术天堑 / Difficulty
        </h4>
        <p className="text-sm font-bold leading-7 text-slate-700">{review.difficulty}</p>
      </div>

      <div>
        <h4 className="mb-5 flex items-center gap-2 text-base font-black text-purple-700">
          <PenLine size={18} />
          实拍阶段过程 / Step-by-step Guide
        </h4>
        <div className="grid gap-5 lg:grid-cols-3">
          {review.stages.map((stage, index) => (
            <div
              key={stage.label}
              className="sketch-card-soft bg-white p-5"
              style={{ transform: `rotate(${index === 1 ? -0.5 : 0.6}deg)` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-ink px-2 py-1 font-scribble text-xs font-black text-marker">
                  {stage.label}
                </span>
                <span className="font-scribble text-xs uppercase tracking-wider text-slate-400">
                  STEP REC: {index + 1}
                </span>
              </div>
              <h5 className="text-lg font-black leading-7">{stage.title}</h5>
              <p className="mt-3 text-sm font-bold leading-7 text-slate-600">{stage.text}</p>
              <p className="mt-5 border-2 border-dashed border-ink/35 bg-yellow-50 px-3 py-2 text-xs font-bold text-slate-500">
                <PenLine size={14} className="mr-2 inline text-coral" />
                {stage.hint}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="sketch-card-soft bg-white p-5">
        <h4 className="mb-4 flex items-center gap-2 text-xl font-black">
          <CheckCircle2 className="text-emerald-600" size={22} />
          沉淀与方法论总结 / Reflection
        </h4>
        <div className="space-y-3">
          {review.reflection.map((item) => (
            <p key={item} className="flex gap-3 text-sm font-bold leading-7">
              <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={18} />
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompactReviewContent({ review }: { review: Review }) {
  return (
    <div className="mt-6 grid gap-5 md:grid-cols-3">
      <div className="rounded-lg border-2 border-dashed border-ink/30 bg-yellow-50 p-4 md:col-span-2">
        <p className="font-cnhand text-2xl leading-9 text-slate-700">“{review.quote}”</p>
      </div>
      <div className="sketch-card-soft p-4">
        <h4 className="mb-3 text-base font-black">简短沉淀</h4>
        <p className="text-sm font-bold leading-7 text-slate-600">{review.reflection[0]}</p>
      </div>
    </div>
  );
}

function ReviewArticle({
  review,
  defaultExpanded,
  compact = false,
  className
}: {
  review: Review;
  defaultExpanded: boolean;
  compact?: boolean;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <motion.article layout className={cn("sketch-card bg-white p-5 sm:p-8", className)}>
      <ReviewHeader
        review={review}
        expanded={expanded}
        toggleable={compact}
        onToggle={() => setExpanded((value) => !value)}
      />
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="overflow-hidden"
          >
            {compact ? <CompactReviewContent review={review} /> : <FullReviewContent review={review} />}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function RetrospectiveSection() {
  return (
    <section id="reviews" className="section-shell scroll-mt-28">
      <SectionTitle
        label="FIELD NOTES & REVIEWS"
        title="实战创作 深度复盘"
        subtitle="FIELD CASE ANALYSIS, EXIF BREAKDOWNS, AND LESSONS LEARNED"
      />

      <div className="mx-auto mt-12 max-w-5xl space-y-8">
        <ReviewArticle review={reviews[0]} defaultExpanded className="-rotate-[0.4deg]" />
        <ReviewArticle review={reviews[1]} defaultExpanded={false} compact className="rotate-[0.5deg]" />
      </div>

      <div className="mx-auto mt-12 flex max-w-xs items-center justify-center gap-3 opacity-40">
        <span className="h-px flex-1 bg-slate-400" />
        <span className="font-hand text-2xl">×</span>
        <span className="h-px flex-1 bg-slate-400" />
      </div>
    </section>
  );
}
