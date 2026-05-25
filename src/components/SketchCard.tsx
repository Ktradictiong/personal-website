import { HTMLAttributes } from "react";
import { cn } from "./utils";

type SketchCardProps = HTMLAttributes<HTMLDivElement> & {
  soft?: boolean;
};

export default function SketchCard({
  className,
  soft = false,
  ...props
}: SketchCardProps) {
  return <div className={cn(soft ? "sketch-card-soft" : "sketch-card", className)} {...props} />;
}
