export default function DoodleDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      <span className="absolute right-[12%] top-24 rotate-12 text-5xl font-hand text-coral/80">☆</span>
      <span className="absolute left-[9%] top-[30%] -rotate-12 text-4xl font-hand text-pink-300">□</span>
      <span className="absolute right-[8%] top-[48%] rotate-12 text-4xl font-hand text-yellow-500">☆</span>
      <span className="absolute left-[17%] top-[70%] rotate-6 text-4xl font-hand text-teal-300">✩</span>
      <span className="absolute right-[16%] top-[74%] -rotate-6 text-4xl font-hand text-purple-400">✣</span>
    </div>
  );
}
