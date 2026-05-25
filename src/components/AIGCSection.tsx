"use client";

import { useMemo, useState } from "react";
import { ImageIcon, WandSparkles, Zap } from "lucide-react";
import { aigcGallery, aigcGroups } from "@/data/site";
import SectionTitle from "./SectionTitle";
import SketchButton from "./SketchButton";
import SketchCard from "./SketchCard";
import { cn } from "./utils";

type Selection = Record<(typeof aigcGroups)[number]["id"], string>;

const defaultSelection: Selection = {
  subject: "",
  lens: "",
  style: ""
};

export default function AIGCSection() {
  const [selection, setSelection] = useState<Selection>(defaultSelection);

  const hasSelection = Object.values(selection).some(Boolean);

  const prompt = useMemo(() => {
    const subject = selection.subject || "Locan 的未命名灵感";
    const lens = selection.lens || "50mm";
    const style = selection.style || "手绘草稿";
    return `/imagine prompt: ${subject}, photographed through ${lens}, ${style}, paper texture, handmade sketch border, cinematic composition, emotional documentary mood, clean negative space --ar 16:9 --style raw`;
  }, [selection]);

  return (
    <section id="aigc" className="section-shell scroll-mt-28">
      <SectionTitle
        label="AI ASSISTED CREATIVE SCIENCE"
        title="艺术前沿 AIGC 未来"
        subtitle="PROMPT-BASED CREATION CROSSES CAMERA PROCESS WITH HANDMADE SKETCHES"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <SketchCard className="-rotate-[0.6deg] bg-white p-5 sm:p-7">
          <div className="mb-6 flex items-center justify-between gap-4 border-b-2 border-dashed border-ink/20 pb-4">
            <div className="flex items-center gap-2 font-scribble text-sm font-black uppercase">
              <Zap className="text-purple-500" size={18} />
              LOCAN_SKETCH_v0.5.sh
            </div>
            <span className="border-2 border-rose-400 bg-rose-50 px-2 py-1 font-scribble text-[10px] font-black uppercase text-rose-500">
              READY TO MIX
            </span>
          </div>

          <h3 className="mb-5 flex items-center gap-2 text-2xl font-black">
            <WandSparkles className="text-coral" />
            AI 极绘混合器
          </h3>

          <div className="space-y-6">
            {aigcGroups.map((group) => (
              <div key={group.id}>
                <p className="mb-3 text-sm font-black">
                  {group.label} <span className="font-scribble text-xs text-slate-500">/ {group.english}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {group.options.map((option) => (
                    <SketchButton
                      key={option}
                      active={selection[group.id] === option}
                      className={cn(
                        "px-3 py-2 text-xs sm:text-sm",
                        selection[group.id] === option && "bg-marker"
                      )}
                      onClick={() =>
                        setSelection((current) => ({
                          ...current,
                          [group.id]: option
                        }))
                      }
                    >
                      {option}
                    </SketchButton>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-xl border-2 border-ink bg-ink px-4 py-4 font-scribble text-sm font-black leading-7 text-marker shadow-sketch-sm sm:text-base">
            ✨ 一键梦境融合 / Generate AI Sketch
            <div className="mt-3 border-t border-marker/25 pt-3 font-mono text-xs leading-6 text-yellow-100 sm:text-sm">
              {prompt}
            </div>
          </div>
        </SketchCard>

        <SketchCard className="rotate-[0.7deg] bg-white p-5 sm:p-7">
          <div className="mb-5 flex items-center gap-2 font-scribble text-xs font-black uppercase tracking-wider text-slate-500">
            <Zap className="text-coral" size={15} />
            OUTPUT TERMINAL DISPLAY // 渲染终端显示
          </div>
          <div className="flex min-h-[24rem] items-center justify-center border-2 border-dashed border-slate-300 bg-white p-5">
            {!hasSelection ? (
              <div className="text-center text-slate-400">
                <ImageIcon className="mx-auto mb-4" size={56} strokeWidth={1.6} />
                <p className="text-lg font-black">等待你的灵感参数混合……</p>
                <p className="mt-2 text-sm font-bold">点击左侧任意选项，让画面开始显影</p>
              </div>
            ) : (
              <div className="w-full">
                <div
                  className="photo-grain h-64 overflow-hidden border-[3px] border-ink shadow-sketch-sm"
                  style={{
                    backgroundImage: `radial-gradient(circle at 24% 30%, rgba(255,216,115,0.95), transparent 18%), radial-gradient(circle at 75% 25%, rgba(196,239,228,0.9), transparent 22%), radial-gradient(circle at 58% 72%, rgba(255,126,115,0.85), transparent 18%), linear-gradient(135deg, #111, #3b2b69 42%, #0b7c86 100%)`
                  }}
                />
                <div className="mt-5 grid gap-2 text-sm font-bold leading-6">
                  <p>主体：{selection.subject || "待定灵感"}</p>
                  <p>镜头：{selection.lens || "默认视角"}</p>
                  <p>风格：{selection.style || "初始草稿"}</p>
                </div>
              </div>
            )}
          </div>
          <p className="mt-5 text-xs font-bold leading-6 text-slate-500">
            * 混合针对此刻的 Locan 定制开发，适合 Stable Diffusion 边缘草图控制，也可进一步进入真实拍摄分镜。
          </p>
        </SketchCard>
      </div>

      <div className="mt-16">
        <h3 className="mb-8 text-2xl font-black sm:text-3xl">
          🖍 精选 AIGC 融合档案相册 / <span className="font-hand">Model Masterpiece Gallery</span>
        </h3>
        <div className="grid gap-8 lg:grid-cols-3">
          {aigcGallery.map((item, index) => (
            <SketchCard
              key={item.title}
              className={cn("bg-white p-4", index === 1 ? "rotate-[0.7deg]" : "-rotate-[0.7deg]")}
            >
              <div
                className="photo-grain relative aspect-[16/9] overflow-hidden border-2 border-ink"
                style={{ backgroundImage: item.visual, backgroundSize: "cover" }}
              >
                <span className="absolute left-3 top-3 border-2 border-ink bg-white px-2 py-1 font-scribble text-[10px] font-black">
                  {item.engine}
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <h4 className="text-lg font-black leading-tight">{item.title}</h4>
                <span className="font-scribble text-xs font-black text-slate-400">{item.date}</span>
              </div>
              <p className="mt-4 border-y border-dashed border-slate-300 py-4 font-mono text-xs leading-6 text-slate-500">
                “{item.description}”
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-black">
                {item.tags.map((tag) => (
                  <span key={tag}>✣ 类型：{tag}</span>
                ))}
              </div>
            </SketchCard>
          ))}
        </div>
      </div>
    </section>
  );
}
