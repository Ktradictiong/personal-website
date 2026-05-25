type SectionTitleProps = {
  label: string;
  title: string;
  subtitle: string;
  className?: string;
};

export default function SectionTitle({ label, title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={className}>
      <div className="mx-auto mb-4 flex justify-center">
        <span className="tag-sketch -rotate-1">{label}</span>
      </div>
      <h2 className="text-center text-[clamp(2.1rem,5vw,4.15rem)] font-black leading-[0.98] tracking-normal">
        {title}
      </h2>
      <p className="mt-4 text-center font-scribble text-xs font-black uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
        // {subtitle}
      </p>
    </div>
  );
}
