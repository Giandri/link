"use client";

import { motion } from "framer-motion";
import type { LinkItem } from "@/data/links";
import { Icon, MoreVerticalIcon } from "@/components/icons";

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

export function LinkCard({ link, index }: LinkCardProps) {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.05 + index * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center justify-center rounded-[20px] border border-black bg-white/10 backdrop-blur-xs h-16 w-full shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md"
    >
      {/* Icon */}
      <div className="absolute left-4 flex h-9 w-9 items-center justify-center text-black">
        <Icon name={link.icon} size={24} />
      </div>

      {/* Label */}
      <span className="text-center text-[13px] font-mono font-semibold text-black px-20">
        {link.label}
      </span>

      {/* Three-dot menu */}
      <div className="absolute right-6 flex h-6 w-6 items-center justify-center text-black">
        <MoreVerticalIcon size={16} />
      </div>
    </motion.a>
  );
}
