"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
}

export default function AnimatedHeading({
  children,
  className = "",
  as: Tag = "h2",
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.classList.add("in-view");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Tag className={`heading-underline ${className}`}>{children}</Tag>
    </motion.div>
  );
}
