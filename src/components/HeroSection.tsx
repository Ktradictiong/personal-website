import { heroStats } from "@/data/site";
import PolaroidUploader from "./PolaroidUploader";
import ResumeTabs from "./ResumeTabs";

export default function HeroSection() {
  return (
    <section id="profile" className="section-shell pt-28 sm:pt-32 lg:pt-36">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(17rem,0.86fr)_minmax(0,1.14fr)] lg:gap-16">
        <div className="min-w-0">
          <PolaroidUploader />
        </div>

        <div className="min-w-0">
          <div className="tag-sketch mb-5">PHOTOGRAPHER CV & WORKSPACE</div>
          <h1 className="max-w-full break-words text-[clamp(2.45rem,8vw,4.9rem)] font-black leading-[0.98] tracking-normal">
            你好，我是 <span className="doodle-underline whitespace-nowrap font-hand">Locan</span>
          </h1>
          <p className="mt-5 font-cnhand text-[clamp(1.45rem,4.3vw,2.25rem)] leading-none text-slate-600">
            “用镜头刻写生活与造物的微型宇宙”
          </p>

          <div className="mt-7 border-l-[3px] border-ink pl-4 text-base font-bold leading-8 sm:pl-6 sm:text-lg">
            摄影并不是对现实的简单复制，而是对时间、空间与情绪的重新组织。我的作品关注城市街头、人文瞬间、自然边界与 AI 视觉实验，希望用图像建立一种介于真实与想象之间的个人档案。
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className="sketch-card-soft bg-white px-3 py-4 text-center"
                style={{ transform: `rotate(${index % 2 === 0 ? -0.7 : 0.7}deg)` }}
              >
                <p className="font-hand text-[clamp(1.4rem,4vw,2.3rem)] font-black leading-none">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-black">{stat.label}</p>
                <p className="mt-1 font-scribble text-[10px] uppercase tracking-wide text-slate-400">
                  {stat.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ResumeTabs />
          </div>

          <div className="ml-6 mt-10 h-2 w-32 rotate-[-2deg] rounded-full bg-coral/70" />
        </div>
      </div>
    </section>
  );
}
