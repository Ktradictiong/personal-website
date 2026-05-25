import { Instagram, Mail, MessageCircleHeart } from "lucide-react";
import SketchCard from "./SketchCard";
import SketchButton from "./SketchButton";

export default function FooterContact() {
  return (
    <footer className="section-shell pb-16">
      <SketchCard className="mx-auto max-w-5xl rotate-[-0.7deg] bg-white px-5 py-10 text-center sm:px-10 sm:py-14">
        <span className="absolute -left-6 -top-8 rotate-12 font-hand text-5xl text-teal-300">✩</span>
        <h2 className="text-[clamp(2rem,5vw,3.45rem)] font-black leading-tight">
          期待与你的下一次合作定格！
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-bold leading-8 text-slate-600">
          如果你也正在寻找一种介于真实、图像、叙事与 AI 之间的视觉表达方式，欢迎联系我。
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <SketchButton className="bg-white">
            <MessageCircleHeart size={17} className="text-teal-500" />
            微信 / weixin_photo
          </SketchButton>
          <SketchButton className="bg-white">
            <Mail size={17} className="text-coral" />
            邮箱 / locan@example.com
          </SketchButton>
          <SketchButton className="bg-white">
            <Instagram size={17} className="text-yellow-500" />
            Instagram / @lokan_view
          </SketchButton>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t-2 border-dashed border-ink/20 pt-6 font-scribble text-[10px] font-black uppercase tracking-wider text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>© 2026 LOCAN.COPY — DESIGNED PROMPTS, SKETCH STYLE ARCHITECTURE</p>
          <p>CRAFTED WITH ❤ BY RESPONSIVE HEART</p>
        </div>
      </SketchCard>
    </footer>
  );
}
