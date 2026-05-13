"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ProfileInfo } from "@/data/links";

interface ProfileHeaderProps {
  profile: ProfileInfo;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="relative w-full">
      {/* Background hero image (metukul.png) */}


      {/* Avatar + text overlay */}
      <div className="flex flex-col items-center pt-[320px] pb-9">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative h-[90px] w-[90px] overflow-hidden rounded-full border-2 border-black shadow-xl"
        >
          <div className="absolute inset-0 bg-white" />
          <Image
            src={profile.avatarSrc}
            alt={profile.name}
            fill
            className="object-cover"
            priority
            sizes="110px"
          />
        </motion.div>

        {/* Name & subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-4 flex flex-col items-center"
        >
          {/* Yellow script text with slight shadow */}
          <h1
            className="text-center font-[family-name:var(--font-script)] text-[32px] text-yellow-400"
            style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.3), 0 0 10px rgba(0,0,0,0.1)",
              WebkitTextStroke: "0.5px rgba(0,0,0,0.2)",
            }}
          >
            {profile.name}
          </h1>
          <p className=" whitespace-pre-line text-center font-mono text-[10px] font-semibold leading-relaxed text-black">
            {profile.subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
