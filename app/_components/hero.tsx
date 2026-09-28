"use client";

import { useState } from "react";
import Image from "next/image";

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
    <section className="relative overflow-hidden bg-primary-800 text-neutral-50 pt-12 pb-24 lg:pt-16 lg:pb-32">
      {/* Background Decorative Grid Lines & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-600/30 rounded-full blur-3xl pointer-events-none" />

      {/* 3D Cones / Floating Ornaments */}
      <div className="absolute top-20 left-8 lg:left-24 w-16 h-16 lg:w-28 lg:h-28 opacity-80 animate-bounce duration-1000 pointer-events-none hidden sm:block">
        <Image
          src="/images/img_17_cone_01_2_f9c0e0fd.png"
          alt="3D Ornament"
          width={112}
          height={112}
          className="object-contain"
        />
      </div>
      <div className="absolute top-36 right-8 lg:right-24 w-20 h-20 lg:w-32 lg:h-32 opacity-75 pointer-events-none hidden sm:block">
        <Image
          src="/images/img_15_cone_01_2_8670b841.png"
          alt="3D Ornament"
          width={128}
          height={128}
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headings */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.15] text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mx-auto mt-8 flex max-w-xl items-center rounded-full bg-white p-2 shadow-2xl"
          >
            <div className="flex flex-1 items-center gap-3 px-4">
              <svg className="h-5 w-5 text-neutral-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Course, topic, creator"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-secondary-400 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-neutral-950 transition-all hover:bg-secondary-300 hover:shadow-md active:scale-95 shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Hero Visual Collage & Floating Badges */}
        <div className="relative mt-16 max-w-4xl mx-auto flex items-center justify-center">
          {/* Main Center Image */}
          <div className="relative z-10 w-[320px] sm:w-[460px] lg:w-[540px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <Image
              src="/images/img_1_image_29a52a24.png"
              alt="ByteSpace Learning"
              width={540}
              height={500}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Badge 1: Learning Progress */}
          <div className="absolute -bottom-6 left-2 sm:-left-6 lg:-left-12 z-20 rounded-2xl bg-white p-4 sm:p-5 shadow-2xl text-left border border-neutral-100 max-w-[210px] sm:max-w-[240px]">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs sm:text-sm font-semibold text-neutral-800">Learning Progress</span>
              <span className="text-xs sm:text-sm font-bold text-primary-600">55%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden">
              <div className="h-full bg-secondary-400 rounded-full w-[55%]" />
            </div>
            <p className="mt-2 text-[11px] text-neutral-400 font-medium">Figma Essentials • Lesson 9/17</p>
          </div>

          {/* Floating Badge 2: Happy Students */}
          <div className="absolute top-6 right-2 sm:-right-6 lg:-right-12 z-20 rounded-2xl bg-white p-4 sm:p-5 shadow-2xl text-left border border-neutral-100">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-xs sm:text-sm font-semibold text-neutral-800">Happy Students</span>
              <span className="inline-flex items-center rounded-full bg-secondary-100 px-2 py-0.5 text-[11px] font-bold text-secondary-800">
                ★ 4.9
              </span>
            </div>
            {/* Student Avatar Stack */}
            <div className="flex items-center -space-x-2 pt-1">
              <div className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                <Image src="/images/img_2_ellipse_9ef8cb32.png" alt="Student" fill className="object-cover" />
              </div>
              <div className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                <Image src="/images/img_3_ellipse_b44979e1.png" alt="Student" fill className="object-cover" />
              </div>
              <div className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                <Image src="/images/img_4_ellipse_83fb3e04.png" alt="Student" fill className="object-cover" />
              </div>
              <div className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                <Image src="/images/img_5_ellipse_f3cf29a8.png" alt="Student" fill className="object-cover" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary-800 text-[11px] font-bold text-white">
                12K+
              </div>
            </div>
          </div>

          {/* Floating Badge 3: UI/UX Category Pill */}
          <div className="hidden sm:flex absolute -top-6 left-12 z-20 items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-xl border border-white/40">
            <span className="h-2 w-2 rounded-full bg-secondary-400" />
            <span className="text-xs font-semibold text-neutral-900">UI/UX Design Course</span>
          </div>
        </div>
      </div>
    </section>
  );
}
