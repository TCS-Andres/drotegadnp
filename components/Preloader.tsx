"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,162,39,0.06) 0%, transparent 60%), #FAF7F2",
          }}
        >
          {/* Pulsing gold ring behind logo */}
          <motion.div
            className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-secondary/20"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full border border-secondary/15"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.15, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/logo.png"
              alt="Dr. Otega DNP"
              width={400}
              height={200}
              className="h-32 md:h-44 w-auto relative z-10"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-secondary font-body font-medium text-sm md:text-base tracking-[0.25em] uppercase relative z-10"
          >
            Inform &middot; Empower &middot; Uplift
          </motion.p>

          {/* Loading bar */}
          <div className="mt-8 w-40 md:w-48 h-[2px] bg-secondary/10 rounded-full overflow-hidden relative z-10">
            <motion.div
              className="h-full bg-secondary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
