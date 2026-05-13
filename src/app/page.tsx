"use client";
import React, { useState, useEffect } from "react";

import { ProfileHeader } from "@/components/profile-header";
import { motion, AnimatePresence } from "framer-motion";
import { LinkCard } from "@/components/link-card";
import { SocialBar } from "@/components/social-bar";
import { profileInfo, serviceLinks, socialLinks } from "@/data/links";
import Image from "next/image";

export default function Home() {
  const images = [
    "/images/kantor bws.jpeg",
    "/images/metukul.png",
    "/images/metukul2.png",
    "/images/pice.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <main className="relative flex min-h-screen flex-col items-center">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-30 bg-white" />
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-full max-w-[560px] -translate-x-1/2 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={images[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt="Hero Carousel"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient fade to blend with background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white" />
      </div>
      <div
        className="fixed inset-0 -z-20 opacity-50"
        style={{
          backgroundImage: `url('/images/bg-2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 top-20 mx-auto w-[92%] max-w-[560px]">

        {/* Profile section */}
        <div className="">
          <ProfileHeader profile={profileInfo} />
        </div>

        {/* Spacer */}
        <div className="h-4" />

        {/* Main content area */}
        <div className="flex w-full flex-col gap-2.5">
          {/* Section: Link - Layanan */}
          <section>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 text-center font-mono text-[12px] font-semibold text-[#555]"
            >
              Link - Layanan
            </motion.p>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map((link, index) => (
                <LinkCard key={link.id} link={link} index={index} />
              ))}
            </div>
          </section>

          {/* Section: Link - Sosial Media */}
          <section>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16 text-center font-mono text-[12px] font-semibold text-[#555]"
            >
              Link - Sosial Media
            </motion.p>
            <SocialBar socials={socialLinks} />
          </section>

          {/* Footer */}
          <p className="mt-4 text-center font-mono text-[11px] text-black/30">
            Hak Cipta © 2026 BWS Bangka Belitung
          </p>
        </div>
      </div>
    </main>
  );
}
