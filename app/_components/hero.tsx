"use client";

import { useState } from "react";
import Image from "next/image";

const studentAvatars = [
  "/images/img_2_ellipse_9ef8cb32.png",
  "/images/img_3_ellipse_b44979e1.png",
  "/images/img_4_ellipse_83fb3e04.png",
  "/images/img_5_ellipse_f3cf29a8.png",
  "/images/img_6_ellipse_5824acac.png",
  "/images/img_7_ellipse_7fdccc78.png",
  "/images/img_8_ellipse_1e078348.png",
];

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const coursesSection = document.getElementById("courses");
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-primary-800 text-white w-full min-h-[960px] lg:h-[1024px]">
      {/* 1. Background Technical Grid Overlay (Figma Group 4: 120px squares, stroke opacity 0.12) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-120" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-120)" />
        </svg>
      </div>

      {/* 2. Headline, Subtitle & Search Form (Desktop starts at top: 169px) */}
      <div className="relative z-30 pt-28 sm:pt-32 lg:pt-[169px] px-4 sm:px-6 text-center max-w-[1440px] mx-auto pointer-events-none">
        <div className="max-w-[935px] mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-semibold tracking-[-0.01em] leading-[1.12] lg:leading-[86.4px] text-white select-none">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[18px] text-white/90 font-normal leading-relaxed max-w-[819px] mx-auto select-none">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        {/* Search Bar matching Figma: 461px input pill + 16px gap + 104px button pill */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-[581px] pointer-events-auto"
        >
          <div className="flex items-center w-full sm:w-[461px] h-[52px] bg-white rounded-full px-5 shadow-xl">
            <svg
              className="h-5 w-5 text-[#82868E] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-2 bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-[#82868E] focus:outline-none font-normal"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto h-[48px] sm:h-[52px] px-8 sm:px-9 rounded-full bg-secondary-400 text-neutral-950 font-semibold text-sm sm:text-base shadow-md hover:bg-secondary-300 transition-all active:scale-95 shrink-0 flex items-center justify-center cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      {/* 3. DESKTOP PIXEL-PERFECT FIGMA COMPOSITION (>= 1024px) */}
      <div className="hidden lg:block absolute inset-0 max-w-[1440px] mx-auto pointer-events-none z-10">
        {/* Giant Neon Lime Circle / Disc (Figma Ellipse 7: width 1149px, top 582px, stroke 320px inside, color #CBFC01) */}
        <div
          className="absolute pointer-events-none select-none"
          style={{
            left: "calc(50% - 574.5px)",
            top: "582px",
            width: "1149px",
            height: "1149px",
          }}
        >
          <svg width="1149" height="1149" viewBox="0 0 1149 1149" fill="none">
            <circle
              cx="574.5"
              cy="574.5"
              r="414.5"
              stroke="#CBFC01"
              strokeWidth="320"
            />
          </svg>
        </div>

        {/* Central Cutout Person (Figma Image 1:1796: width 578px, height 541px, top 512px, centered) */}
        <div
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: "calc(50% - 289px)",
            top: "512px",
            width: "578px",
            height: "541px",
          }}
        >
          <Image
            src="/images/img_1_image_29a52a24.png"
            alt="ByteSpace Student"
            width={578}
            height={541}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        {/* Card 1: UI/UX Design (Figma 46:126: left: calc(50% - 316px), top: 639px, width: 208px, height: 70px) */}
        <div
          className="absolute z-20 rounded-2xl bg-white p-4 shadow-xl border border-white/80 pointer-events-auto transition-transform hover:-translate-y-1 duration-200"
          style={{
            left: "calc(50% - 316px)",
            top: "639px",
            width: "208px",
          }}
        >
          <h4 className="text-sm font-bold text-neutral-950 leading-tight">UI/UX Design</h4>
          <p className="mt-1 text-xs text-neutral-500 font-normal">
            200 Courses • 1000+ Students
          </p>
        </div>

        {/* Card 2: Learning Progress (Figma 1:1797: left: calc(50% + 122px), top: 651px, width: 232px, height: 131px) */}
        <div
          className="absolute z-20 rounded-2xl bg-white p-5 shadow-xl border border-white/80 pointer-events-auto transition-transform hover:-translate-y-1 duration-200"
          style={{
            left: "calc(50% + 122px)",
            top: "651px",
            width: "232px",
          }}
        >
          <span className="text-xs font-normal text-neutral-500">Learning Progress</span>
          <div className="text-[44px] font-bold text-neutral-950 my-1 leading-none tracking-tight">
            55%
          </div>
          <div className="w-full h-2 rounded-full bg-[#EAECF0] overflow-hidden mt-3">
            <div className="h-full bg-secondary-400 rounded-full w-[56%]" />
          </div>
        </div>

        {/* Card 3: Happy Students (Figma 1:1821: left: calc(50% - 392px), top: 837px, width: 258px, height: 121px) */}
        <div
          className="absolute z-20 rounded-2xl bg-white p-4 shadow-xl border border-white/80 pointer-events-auto transition-transform hover:-translate-y-1 duration-200"
          style={{
            left: "calc(50% - 392px)",
            top: "837px",
            width: "258px",
          }}
        >
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-sm font-bold text-neutral-900">Happy Students</span>
            <div className="flex items-center gap-1 text-xs font-semibold text-neutral-700">
              <span>4.5 (240)</span>
              <span className="text-yellow-400 text-sm">★</span>
            </div>
          </div>
          <div className="flex items-center -space-x-2 pt-0.5 flex-nowrap">
            {studentAvatars.slice(0, 6).map((src, idx) => (
              <div
                key={idx}
                className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden bg-neutral-200 shrink-0"
              >
                <Image src={src} alt="Student" fill className="object-cover" />
              </div>
            ))}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-secondary-400 text-[11px] font-bold text-neutral-950 shrink-0">
              2K+
            </div>
          </div>
        </div>

        {/* 6 3D Ornaments matching Figma 46:79 coordinates */}
        {/* 1. Top-Left Lime Spring (Figma 46:90: left: calc(50% - 838px), top: 221px, 385x385) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "calc(50% - 838px)",
            top: "221px",
            width: "385px",
            height: "385px",
          }}
        >
          <Image
            src="/images/ornaments/ornament_46_90.png"
            alt="Lime Spring Ornament"
            width={385}
            height={385}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        {/* 2. Mid-Left White Zigzag (Figma 46:95: left: calc(50% - 537px), top: 477px, 175x175) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "calc(50% - 537px)",
            top: "477px",
            width: "175px",
            height: "175px",
          }}
        >
          <Image
            src="/images/ornaments/ornament_46_95.png"
            alt="White Zigzag Spring"
            width={175}
            height={175}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        {/* 3. Bottom-Left White Torus Donut (Figma 46:105: left: calc(50% - 702px), top: 682px, 342x342) */}
        <div
          className="absolute pointer-events-none z-20"
          style={{
            left: "calc(50% - 702px)",
            top: "682px",
            width: "342px",
            height: "342px",
          }}
        >
          <Image
            src="/images/ornaments/ornament_46_105.png"
            alt="White 3D Torus"
            width={342}
            height={342}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        {/* 4. Top-Right Lime Cylinder (Figma 46:110: left: calc(50% + 511px), top: 221px, 370x370) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "calc(50% + 511px)",
            top: "221px",
            width: "370px",
            height: "370px",
          }}
        >
          <Image
            src="/images/ornaments/ornament_46_110.png"
            alt="Lime Cylinder Ornament"
            width={370}
            height={370}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        {/* 5. Mid-Right White Pyramid (Figma 46:80: left: calc(50% + 386px), top: 464px, 188x188) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "calc(50% + 386px)",
            top: "464px",
            width: "188px",
            height: "188px",
          }}
        >
          <Image
            src="/images/ornaments/ornament_46_80.png"
            alt="White Pyramid Ornament"
            width={188}
            height={188}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        {/* 6. Bottom-Right White Zigzag (Figma 46:85: left: calc(50% + 407px), top: 672px, 330x330) */}
        <div
          className="absolute pointer-events-none z-20"
          style={{
            left: "calc(50% + 407px)",
            top: "672px",
            width: "330px",
            height: "330px",
          }}
        >
          <Image
            src="/images/ornaments/ornament_46_85.png"
            alt="White Zigzag Spring"
            width={330}
            height={330}
            priority
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* 4. MOBILE / TABLET RESPONSIVE FALLBACK (< 1024px) */}
      <div className="lg:hidden relative z-20 mt-10 px-4 flex flex-col items-center">
        {/* Central Composition with Person & Disc */}
        <div className="relative w-full max-w-[420px] aspect-[4/3] flex items-end justify-center">
          {/* Lime Circle Band */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full border-[60px] border-secondary-400 pointer-events-none z-0" />

          {/* Student Cutout */}
          <div className="relative z-10 w-[260px] sm:w-[320px]">
            <Image
              src="/images/img_1_image_29a52a24.png"
              alt="ByteSpace Student"
              width={320}
              height={300}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Floating UI/UX Card */}
          <div className="absolute top-2 left-0 z-20 rounded-xl bg-white p-3 shadow-lg border border-white/80 text-left">
            <h4 className="text-xs font-bold text-neutral-950">UI/UX Design</h4>
            <p className="text-[10px] text-neutral-500">200 Courses • 1000+ Students</p>
          </div>

          {/* Floating Progress Card */}
          <div className="absolute top-6 right-0 z-20 rounded-xl bg-white p-3 shadow-lg border border-white/80 text-left w-36">
            <span className="text-[10px] text-neutral-500">Learning Progress</span>
            <div className="text-2xl font-bold text-neutral-950 my-1">55%</div>
            <div className="w-full h-1.5 rounded-full bg-neutral-100 overflow-hidden">
              <div className="h-full bg-secondary-400 rounded-full w-[56%]" />
            </div>
          </div>
        </div>

        {/* Floating Happy Students below person */}
        <div className="mt-4 rounded-xl bg-white p-3 shadow-lg border border-white/80 text-left max-w-xs w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-neutral-900">Happy Students</span>
            <span className="text-[11px] font-semibold text-neutral-700">4.5 (240) ★</span>
          </div>
          <div className="flex items-center -space-x-2">
            {studentAvatars.slice(0, 6).map((src, idx) => (
              <div
                key={idx}
                className="relative h-7 w-7 rounded-full border border-white overflow-hidden bg-neutral-200 shrink-0"
              >
                <Image src={src} alt="Student" fill className="object-cover" />
              </div>
            ))}
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-secondary-400 text-[10px] font-bold text-neutral-950 shrink-0">
              2K+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
