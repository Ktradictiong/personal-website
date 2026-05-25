"use client";

import { ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "./utils";

type SketchButtonProps = HTMLMotionProps<"button"> & {
  active?: boolean;
  children: ReactNode;
};

export default function SketchButton({
  active = false,
  className,
  children,
  type = "button",
  ...props
}: SketchButtonProps) {
  return (
    <motion.button
      type={type}
      whileHover={{ y: -3, x: -2, rotate: -0.4 }}
      whileTap={{ y: 3, x: 3 }}
      className={cn("sketch-button", active && "sketch-button-active", className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
