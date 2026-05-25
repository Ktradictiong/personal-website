"use client";

import { ChangeEvent, useEffect, useId, useState } from "react";
import { ImageUp, Sparkles } from "lucide-react";
import { photoPresets } from "@/data/site";
import SketchButton from "./SketchButton";

export default function PolaroidUploader() {
  const inputId = useId();
  const [presetId, setPresetId] = useState(photoPresets[0].id);
  const [uploaded, setUploaded] = useState<string | null>(null);
  const currentPreset = photoPresets.find((preset) => preset.id === presetId) ?? photoPresets[0];

  useEffect(() => {
    return () => {
      if (uploaded) {
        URL.revokeObjectURL(uploaded);
      }
    };
  }, [uploaded]);

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploaded(URL.createObjectURL(file));
  }

  return (
    <div className="mx-auto w-[min(100%,clamp(17.5rem,36vw,28.75rem))] lg:mx-0">
      <div className="-rotate-1 transition-transform duration-300 sm:-rotate-2 lg:-rotate-3">
        <div className="sketch-card bg-white p-[clamp(0.75rem,2vw,1.25rem)] pb-[clamp(1.4rem,4vw,2.4rem)]">
          <div
            className="photo-grain relative aspect-[4/4.55] overflow-hidden border-[3px] border-ink bg-slate-200"
            style={{
              backgroundImage: uploaded ? `url(${uploaded})` : currentPreset.background,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            <div className="absolute left-3 top-3 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-white/65" />
            <div className="absolute right-3 top-3 h-5 w-5 rounded-tr-lg border-r-2 border-t-2 border-white/65" />
            <div className="absolute bottom-3 left-3 border-2 border-ink bg-black px-2 py-1 font-scribble text-[10px] font-black uppercase text-marker sm:text-xs">
              {uploaded ? "CUSTOM FRAME" : currentPreset.caption}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="font-cnhand text-[clamp(1.45rem,4vw,2.15rem)] text-ink">Locan</p>
            <p className="mt-1 font-scribble text-[10px] uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
              — 手绘拍立得胶片未命名 2026 —
            </p>
          </div>

          <label
            htmlFor={inputId}
            className="absolute -right-5 bottom-5 inline-flex h-14 w-14 rotate-12 cursor-pointer items-center justify-center rounded-full border-2 border-ink bg-coral text-center font-hand text-[11px] font-black leading-tight shadow-sketch-sm transition-transform hover:-translate-y-1 active:translate-x-1 active:translate-y-1"
          >
            <span>
              替换
              <br />
              照片
            </span>
          </label>
          <input
            id={inputId}
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleUpload}
          />
        </div>
      </div>

      <div className="mt-6 pl-4 sm:pl-12">
        <p className="scribble-note mb-3 rotate-1 text-center sm:text-left">点这里切换这张卡片的故事！</p>
        <div className="sketch-card-soft p-3">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold text-slate-500">
            <Sparkles size={15} />
            预设风格展示
          </div>
          <div className="flex flex-wrap gap-2">
            {photoPresets.map((preset) => (
              <SketchButton
                key={preset.id}
                active={!uploaded && preset.id === presetId}
                className="min-w-[5.8rem] flex-1 px-3 py-2 text-xs sm:flex-none"
                onClick={() => {
                  setUploaded(null);
                  setPresetId(preset.id);
                }}
              >
                <ImageUp size={14} />
                {preset.label}
              </SketchButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
