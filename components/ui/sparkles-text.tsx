"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: number;
  y: number;
  color: string;
  delay: number;
  scale: number;
}

const SparkleIcon: React.FC<{ sparkle: Sparkle }> = ({ sparkle }) => {
  return (
    <motion.div
      key={sparkle.id}
      className="absolute pointer-events-none"
      style={{
        left: `${sparkle.x}%`,
        top: `${sparkle.y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, sparkle.scale, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: sparkle.delay,
        ease: "easeInOut",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
          fill={sparkle.color}
        />
      </svg>
    </motion.div>
  );
};

interface SparklesTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: {
    first: string;
    second: string;
  };
  sparklesCount?: number;
}

export const SparklesText: React.FC<SparklesTextProps> = ({
  children,
  className,
  colors = { first: "#3B82F6", second: "#06B6D4" },
  sparklesCount = 15,
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      
      for (let i = 0; i < sparklesCount; i++) {
        newSparkles.push({
          id: `sparkle-${i}-${Date.now()}`,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: Math.random() > 0.5 ? colors.first : colors.second,
          delay: Math.random() * 2,
          scale: 0.5 + Math.random() * 0.5,
        });
      }
      
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <span className={cn("relative inline-block gradient-text", className)}>
      <span className="relative z-10">{children}</span>
      {sparkles.map((sparkle) => (
        <SparkleIcon key={sparkle.id} sparkle={sparkle} />
      ))}
    </span>
  );
}; 